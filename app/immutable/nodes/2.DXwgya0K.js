import{s as bt,x as Hd,n as we,r as Rt,b as ct,o as Sn,i as Gd,y as be,z as Wd}from"../chunks/scheduler.li6PcnJj.js";import{S as Ct,i as St,e as D,s as q,b as Re,c as V,d as $,y as ee,h as z,g as N,f as Ce,o as R,z as qe,p as ze,j as Y,k as A,A as K,B as Pn,l as Ge,C as Kd,D as Ae,E as lu,a as pt,n as cu,t as mt,q as uu,m as Al,u as Ut,v as Ft,w as Bt,x as jt}from"../chunks/index.PGWTL56s.js";import{w as gs}from"../chunks/index.ChQ1qdP7.js";function ut(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}var bl={};/**
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
 */const hu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Qd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},du={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,w=h&63;c||(w=64,a||(g=64)),r.push(t[d],t[p],t[g],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(hu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Qd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new Jd;const g=s<<2|l>>4;if(r.push(g),h!==64){const w=l<<4&240|h>>2;if(r.push(w),p!==64){const y=h<<6&192|p;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yd=function(n){const e=hu(n);return du.encodeByteArray(e,!0)},Ji=function(n){return Yd(n).replace(/\./g,"")},fu=function(n){try{return du.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zd=()=>Xd().__FIREBASE_DEFAULTS__,ef=()=>{if(typeof process>"u"||typeof bl>"u")return;const n=bl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fu(n[1]);return e&&JSON.parse(e)},_s=()=>{try{return Zd()||ef()||tf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pu=n=>{var e,t;return(t=(e=_s())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},nf=n=>{const e=pu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},mu=()=>{var n;return(n=_s())===null||n===void 0?void 0:n.config},gu=n=>{var e;return(e=_s())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class rf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function sf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ji(JSON.stringify(t)),Ji(JSON.stringify(a)),""].join(".")}/**
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function of(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function af(){var n;const e=(n=_s())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uf(){const n=tt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hf(){return!af()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function df(){try{return typeof indexedDB=="object"}catch{return!1}}function ff(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const pf="FirebaseError";class un extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=pf,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?mf(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new un(i,l,r)}}function mf(n,e){return n.replace(gf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gf=/\{\$([^}]+)}/g;function _f(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Rl(s)&&Rl(a)){if(!Yi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Rl(n){return n!==null&&typeof n=="object"}/**
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
 */function oi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vf(n,e){const t=new yf(n,e);return t.subscribe.bind(t)}class yf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ef(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ro),i.error===void 0&&(i.error=ro),i.complete===void 0&&(i.complete=ro);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ef(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ro(){}/**
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
 */function Je(n){return n&&n._delegate?n._delegate:n}class jn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xn="[DEFAULT]";/**
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
 */class If{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new rf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wf(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tf(n){return n===xn?void 0:n}function wf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Af{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new If(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ye||(ye={}));const bf={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},Rf=ye.INFO,Cf={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},Sf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Cf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fo{constructor(e){this.name=e,this._logLevel=Rf,this._logHandler=Sf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const Pf=(n,e)=>e.some(t=>n instanceof t);let Cl,Sl;function kf(){return Cl||(Cl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Df(){return Sl||(Sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _u=new WeakMap,mo=new WeakMap,vu=new WeakMap,io=new WeakMap,Bo=new WeakMap;function Vf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(En(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&_u.set(t,n)}).catch(()=>{}),Bo.set(e,n),e}function Nf(n){if(mo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});mo.set(n,e)}let go={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return mo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return En(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Of(n){go=n(go)}function xf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(so(this),e,...t);return vu.set(r,e.sort?e.sort():[e]),En(r)}:Df().includes(n)?function(...e){return n.apply(so(this),e),En(_u.get(this))}:function(...e){return En(n.apply(so(this),e))}}function Mf(n){return typeof n=="function"?xf(n):(n instanceof IDBTransaction&&Nf(n),Pf(n,kf())?new Proxy(n,go):n)}function En(n){if(n instanceof IDBRequest)return Vf(n);if(io.has(n))return io.get(n);const e=Mf(n);return e!==n&&(io.set(n,e),Bo.set(e,n)),e}const so=n=>Bo.get(n);function Lf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=En(a);return r&&a.addEventListener("upgradeneeded",c=>{r(En(a.result),c.oldVersion,c.newVersion,En(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Uf=["get","getKey","getAll","getAllKeys","count"],Ff=["put","add","delete","clear"],oo=new Map;function Pl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(oo.get(e))return oo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Ff.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Uf.includes(t)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return oo.set(e,s),s}Of(n=>({...n,get:(e,t,r)=>Pl(e,t)||n.get(e,t,r),has:(e,t)=>!!Pl(e,t)||n.has(e,t)}));/**
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
 */class Bf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function jf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _o="@firebase/app",kl="0.10.5";/**
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
 */const qn=new Fo("@firebase/app"),qf="@firebase/app-compat",zf="@firebase/analytics-compat",$f="@firebase/analytics",Hf="@firebase/app-check-compat",Gf="@firebase/app-check",Wf="@firebase/auth",Kf="@firebase/auth-compat",Qf="@firebase/database",Jf="@firebase/database-compat",Yf="@firebase/functions",Xf="@firebase/functions-compat",Zf="@firebase/installations",ep="@firebase/installations-compat",tp="@firebase/messaging",np="@firebase/messaging-compat",rp="@firebase/performance",ip="@firebase/performance-compat",sp="@firebase/remote-config",op="@firebase/remote-config-compat",ap="@firebase/storage",lp="@firebase/storage-compat",cp="@firebase/firestore",up="@firebase/vertexai-preview",hp="@firebase/firestore-compat",dp="firebase",fp="10.12.2";/**
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
 */const vo="[DEFAULT]",pp={[_o]:"fire-core",[qf]:"fire-core-compat",[$f]:"fire-analytics",[zf]:"fire-analytics-compat",[Gf]:"fire-app-check",[Hf]:"fire-app-check-compat",[Wf]:"fire-auth",[Kf]:"fire-auth-compat",[Qf]:"fire-rtdb",[Jf]:"fire-rtdb-compat",[Yf]:"fire-fn",[Xf]:"fire-fn-compat",[Zf]:"fire-iid",[ep]:"fire-iid-compat",[tp]:"fire-fcm",[np]:"fire-fcm-compat",[rp]:"fire-perf",[ip]:"fire-perf-compat",[sp]:"fire-rc",[op]:"fire-rc-compat",[ap]:"fire-gcs",[lp]:"fire-gcs-compat",[cp]:"fire-fst",[hp]:"fire-fst-compat",[up]:"fire-vertex","fire-js":"fire-js",[dp]:"fire-js-all"};/**
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
 */const Xi=new Map,mp=new Map,yo=new Map;function Dl(n,e){try{n.container.addComponent(e)}catch(t){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ur(n){const e=n.name;if(yo.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;yo.set(e,n);for(const t of Xi.values())Dl(t,n);for(const t of mp.values())Dl(t,n);return!0}function jo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tn(n){return n.settings!==void 0}/**
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
 */const gp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},In=new si("app","Firebase",gp);/**
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
 */class _p{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
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
 */const Er=fp;function yu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw In.create("bad-app-name",{appName:String(i)});if(t||(t=mu()),!t)throw In.create("no-options");const s=Xi.get(i);if(s){if(Yi(t,s.options)&&Yi(r,s.config))return s;throw In.create("duplicate-app",{appName:i})}const a=new Af(i);for(const c of yo.values())a.addComponent(c);const l=new _p(t,r,a);return Xi.set(i,l),l}function Eu(n=vo){const e=Xi.get(n);if(!e&&n===vo&&mu())return yu();if(!e)throw In.create("no-app",{appName:n});return e}function Tn(n,e,t){var r;let i=(r=pp[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(l.join(" "));return}ur(new jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vp="firebase-heartbeat-database",yp=1,Jr="firebase-heartbeat-store";let ao=null;function Iu(){return ao||(ao=Lf(vp,yp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Jr)}catch(t){console.warn(t)}}}}).catch(n=>{throw In.create("idb-open",{originalErrorMessage:n.message})})),ao}async function Ep(n){try{const t=(await Iu()).transaction(Jr),r=await t.objectStore(Jr).get(Tu(n));return await t.done,r}catch(e){if(e instanceof un)qn.warn(e.message);else{const t=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(t.message)}}}async function Vl(n,e){try{const r=(await Iu()).transaction(Jr,"readwrite");await r.objectStore(Jr).put(e,Tu(n)),await r.done}catch(t){if(t instanceof un)qn.warn(t.message);else{const r=In.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qn.warn(r.message)}}}function Tu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ip=1024,Tp=30*24*60*60*1e3;class wp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Tp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Nl(),{heartbeatsToSend:r,unsentEntries:i}=Ap(this._heartbeatsCache.heartbeats),s=Ji(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nl(){return new Date().toISOString().substring(0,10)}function Ap(n,e=Ip){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Ol(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ol(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class bp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return df()?ff().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ep(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ol(n){return Ji(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Rp(n){ur(new jn("platform-logger",e=>new Bf(e),"PRIVATE")),ur(new jn("heartbeat",e=>new wp(e),"PRIVATE")),Tn(_o,kl,n),Tn(_o,kl,"esm2017"),Tn("fire-js","")}Rp("");var Cp="firebase",Sp="10.12.2";/**
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
 */Tn(Cp,Sp,"app");function qo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function wu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pp=wu,Au=new si("auth","Firebase",wu());/**
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
 */const Zi=new Fo("@firebase/auth");function kp(n,...e){Zi.logLevel<=ye.WARN&&Zi.warn(`Auth (${Er}): ${n}`,...e)}function ji(n,...e){Zi.logLevel<=ye.ERROR&&Zi.error(`Auth (${Er}): ${n}`,...e)}/**
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
 */function Wt(n,...e){throw $o(n,...e)}function xt(n,...e){return $o(n,...e)}function zo(n,e,t){const r=Object.assign(Object.assign({},Pp()),{[e]:t});return new si("auth","Firebase",r).create(e,{appName:n.name})}function Un(n){return zo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dp(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Wt(n,"argument-error"),zo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $o(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Au.create(n,...e)}function oe(n,e,...t){if(!n)throw $o(e,...t)}function nn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ji(e),new Error(e)}function on(n,e){n||nn(e)}/**
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
 */function Eo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Vp(){return xl()==="http:"||xl()==="https:"}function xl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Np(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vp()||lf()||"connection"in navigator)?navigator.onLine:!0}function Op(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ai{constructor(e,t){this.shortDelay=e,this.longDelay=t,on(t>e,"Short delay should be less than long delay!"),this.isMobile=of()||cf()}get(){return Np()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ho(n,e){on(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class bu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Mp=new ai(3e4,6e4);function Go(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ir(n,e,t,r,i={}){return Ru(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=oi(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),bu.fetch()(Cu(n,n.config.apiHost,t,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ru(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},xp),e);try{const i=new Up(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Oi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Oi(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Oi(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zo(n,d,h);Wt(n,d)}}catch(i){if(i instanceof un)throw i;Wt(n,"network-request-failed",{message:String(i)})}}async function Lp(n,e,t,r,i={}){const s=await Ir(n,e,t,r,i);return"mfaPendingCredential"in s&&Wt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Cu(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ho(n.config,i):`${n.config.apiScheme}://${i}`}class Up{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),Mp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=xt(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function Fp(n,e){return Ir(n,"POST","/v1/accounts:delete",e)}async function Su(n,e){return Ir(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bp(n,e=!1){const t=Je(n),r=await t.getIdToken(e),i=Wo(r);oe(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gr(lo(i.auth_time)),issuedAtTime:Gr(lo(i.iat)),expirationTime:Gr(lo(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function lo(n){return Number(n)*1e3}function Wo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ji("JWT malformed, contained fewer than 3 sections"),null;try{const i=fu(t);return i?JSON.parse(i):(ji("Failed to decode base64 JWT payload"),null)}catch(i){return ji("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ml(n){const e=Wo(n);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof un&&jp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function jp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class qp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Io{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gr(this.lastLoginAt),this.creationTime=Gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function es(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Yr(n,Su(t,{idToken:r}));oe(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Pu(s.providerUserInfo):[],l=$p(n.providerData,a),c=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Io(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function zp(n){const e=Je(n);await es(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $p(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Pu(n){return n.map(e=>{var{providerId:t}=e,r=qo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Hp(n,e){const t=await Ru(n,{},async()=>{const r=oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Cu(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",bu.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Gp(n,e){return Ir(n,"POST","/v2/accounts:revokeToken",Go(n,e))}/**
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
 */class sr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ml(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const t=Ml(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Hp(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new sr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(oe(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(oe(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sr,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
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
 */function mn(n,e){oe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=qo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Io(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Yr(this,this.stsTokenManager.getToken(this.auth,e));return oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bp(this,e)}reload(){return zp(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await es(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(Un(this.auth));const e=await this.getIdToken();return await Yr(this,Fp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,c,h,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,w=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,y=(a=t.photoURL)!==null&&a!==void 0?a:void 0,b=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,M=(h=t.createdAt)!==null&&h!==void 0?h:void 0,F=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:x,emailVerified:B,isAnonymous:G,providerData:U,stsTokenManager:T}=t;oe(x&&T,e,"internal-error");const _=sr.fromJSON(this.name,T);oe(typeof x=="string",e,"internal-error"),mn(p,e.name),mn(g,e.name),oe(typeof B=="boolean",e,"internal-error"),oe(typeof G=="boolean",e,"internal-error"),mn(w,e.name),mn(y,e.name),mn(b,e.name),mn(P,e.name),mn(M,e.name),mn(F,e.name);const v=new rn({uid:x,auth:e,email:g,emailVerified:B,displayName:p,isAnonymous:G,photoURL:y,phoneNumber:w,tenantId:b,stsTokenManager:_,createdAt:M,lastLoginAt:F});return U&&Array.isArray(U)&&(v.providerData=U.map(E=>Object.assign({},E))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new sr;i.updateFromServerResponse(t);const s=new rn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await es(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];oe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Pu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new sr;l.updateFromIdToken(r);const c=new rn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Io(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
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
 */const Ll=new Map;function sn(n){on(n instanceof Function,"Expected a class definition");let e=Ll.get(n);return e?(on(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ll.set(n,e),e)}/**
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
 */class ku{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ku.type="NONE";const Ul=ku;/**
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
 */function qi(n,e,t){return`firebase:${n}:${e}:${t}`}class or{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qi(this.userKey,i.apiKey,s),this.fullPersistenceKey=qi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new or(sn(Ul),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||sn(Ul);const a=qi(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const d=await h._get(a);if(d){const p=rn._fromJSON(e,d);h!==s&&(l=p),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new or(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new or(s,e,r))}}/**
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
 */function Fl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Du(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xu(e))return"Blackberry";if(Mu(e))return"Webos";if(Ko(e))return"Safari";if((e.includes("chrome/")||Vu(e))&&!e.includes("edge/"))return"Chrome";if(Ou(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Du(n=tt()){return/firefox\//i.test(n)}function Ko(n=tt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vu(n=tt()){return/crios\//i.test(n)}function Nu(n=tt()){return/iemobile/i.test(n)}function Ou(n=tt()){return/android/i.test(n)}function xu(n=tt()){return/blackberry/i.test(n)}function Mu(n=tt()){return/webos/i.test(n)}function vs(n=tt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wp(n=tt()){var e;return vs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kp(){return uf()&&document.documentMode===10}function Lu(n=tt()){return vs(n)||Ou(n)||Mu(n)||xu(n)||/windows phone/i.test(n)||Nu(n)}function Qp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Uu(n,e=[]){let t;switch(n){case"Browser":t=Fl(tt());break;case"Worker":t=`${Fl(tt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Er}/${r}`}/**
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
 */class Jp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Yp(n,e={}){return Ir(n,"GET","/v2/passwordPolicy",Go(n,e))}/**
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
 */const Xp=6;class Zp{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Xp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class em{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bl(this),this.idTokenSubscription=new Bl(this),this.beforeStateQueue=new Jp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Au,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=sn(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await or.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Su(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(tn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await es(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Op()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(Un(this));const t=e?Je(e):null;return t&&oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(Un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(Un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yp(this),t=new Zp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Gp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&sn(e)||this._popupRedirectResolver;oe(t,this,"argument-error"),this.redirectPersistenceManager=await or.create(this,[sn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&kp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ys(n){return Je(n)}class Bl{constructor(e){this.auth=e,this.observer=null,this.addObserver=vf(t=>this.observer=t)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tm(n){Qo=n}function nm(n){return Qo.loadJS(n)}function rm(){return Qo.gapiScript}function im(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function sm(n,e){const t=jo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Yi(s,e??{}))return i;Wt(i,"already-initialized")}return t.initialize({options:e})}function om(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(sn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function am(n,e,t){const r=ys(n);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Fu(e),{host:a,port:l}=lm(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),cm()}function Fu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function lm(n){const e=Fu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jl(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:jl(a)}}}function jl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function cm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Bu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,t){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}/**
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
 */async function ar(n,e){return Lp(n,"POST","/v1/accounts:signInWithIdp",Go(n,e))}/**
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
 */const um="http://localhost";class zn extends Bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=qo(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new zn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ar(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ar(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ar(e,t)}buildRequest(){const e={requestUri:um,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=oi(t)}return e}}/**
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
 */class Jo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class li extends Jo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gn extends li{constructor(){super("facebook.com")}static credential(e){return zn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
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
 */class en extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return zn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return en.credential(t,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
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
 */class _n extends li{constructor(){super("github.com")}static credential(e){return zn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
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
 */class vn extends li{constructor(){super("twitter.com")}static credential(e,t){return zn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vn.credential(t,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
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
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await rn._fromIdTokenResponse(e,r,i),a=ql(r);return new hr({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ql(r);return new hr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ql(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ts extends un{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ts.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ts(e,t,r,i)}}function ju(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ts._fromErrorAndOperation(n,s,e,r):s})}async function hm(n,e,t=!1){const r=await Yr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hr._forOperation(n,"link",r)}/**
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
 */async function dm(n,e,t=!1){const{auth:r}=n;if(tn(r.app))return Promise.reject(Un(r));const i="reauthenticate";try{const s=await Yr(n,ju(r,i,e,n),t);oe(s.idToken,r,"internal-error");const a=Wo(s.idToken);oe(a,r,"internal-error");const{sub:l}=a;return oe(n.uid===l,r,"user-mismatch"),hr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),s}}/**
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
 */async function fm(n,e,t=!1){if(tn(n.app))return Promise.reject(Un(n));const r="signIn",i=await ju(n,r,e),s=await hr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function pm(n,e,t,r){return Je(n).onIdTokenChanged(e,t,r)}function mm(n,e,t){return Je(n).beforeAuthStateChanged(e,t)}function Yo(n,e,t,r){return Je(n).onAuthStateChanged(e,t,r)}function gm(n){return Je(n).signOut()}const ns="__sak";/**
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
 */class qu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ns,"1"),this.storage.removeItem(ns),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _m(){const n=tt();return Ko(n)||vs(n)}const vm=1e3,ym=10;class zu extends qu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_m()&&Qp(),this.fallbackToPolling=Lu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Kp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ym):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},vm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zu.type="LOCAL";const Em=zu;/**
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
 */class $u extends qu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$u.type="SESSION";const Hu=$u;/**
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
 */function Im(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Es{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Es(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),c=await Im(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Es.receivers=[];/**
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
 */function Xo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Tm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const h=Xo("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function zt(){return window}function wm(n){zt().location.href=n}/**
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
 */function Gu(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function Am(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Rm(){return Gu()?self:null}/**
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
 */const Wu="firebaseLocalStorageDb",Cm=1,rs="firebaseLocalStorage",Ku="fbase_key";class ci{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Is(n,e){return n.transaction([rs],e?"readwrite":"readonly").objectStore(rs)}function Sm(){const n=indexedDB.deleteDatabase(Wu);return new ci(n).toPromise()}function To(){const n=indexedDB.open(Wu,Cm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(rs,{keyPath:Ku})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(rs)?e(r):(r.close(),await Sm(),e(await To()))})})}async function zl(n,e,t){const r=Is(n,!0).put({[Ku]:e,value:t});return new ci(r).toPromise()}async function Pm(n,e){const t=Is(n,!1).get(e),r=await new ci(t).toPromise();return r===void 0?null:r.value}function $l(n,e){const t=Is(n,!0).delete(e);return new ci(t).toPromise()}const km=800,Dm=3;class Qu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await To(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Dm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Es._getInstance(Rm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Am(),!this.activeServiceWorker)return;this.sender=new Tm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await To();return await zl(e,ns,"1"),await $l(e,ns),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>zl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Pm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$l(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Is(i,!1).getAll();return new ci(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),km)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qu.type="LOCAL";const Vm=Qu;new ai(3e4,6e4);/**
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
 */function Ju(n,e){return e?sn(e):(oe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Zo extends Bu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ar(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ar(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Nm(n){return fm(n.auth,new Zo(n),n.bypassAuthState)}function Om(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),dm(t,new Zo(n),n.bypassAuthState)}async function xm(n){const{auth:e,user:t}=n;return oe(t,e,"internal-error"),hm(t,new Zo(n),n.bypassAuthState)}/**
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
 */class Yu{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nm;case"linkViaPopup":case"linkViaRedirect":return xm;case"reauthViaPopup":case"reauthViaRedirect":return Om;default:Wt(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Mm=new ai(2e3,1e4);async function Lm(n,e,t){if(tn(n.app))return Promise.reject(xt(n,"operation-not-supported-in-this-environment"));const r=ys(n);Dp(n,e,Jo);const i=Ju(r,t);return new Mn(r,"signInViaPopup",e,i).executeNotNull()}class Mn extends Yu{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=Xo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mm.get())};e()}}Mn.currentPopupAction=null;/**
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
 */const Um="pendingRedirect",zi=new Map;class Fm extends Yu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{const r=await Bm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bm(n,e){const t=zm(e),r=qm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function jm(n,e){zi.set(n._key(),e)}function qm(n){return sn(n._redirectPersistence)}function zm(n){return qi(Um,n.config.apiKey,n.name)}async function $m(n,e,t=!1){if(tn(n.app))return Promise.reject(Un(n));const r=ys(n),i=Ju(r,e),a=await new Fm(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Hm=10*60*1e3;class Gm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Xu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(xt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hl(e))}saveEventToCache(e){this.cachedEventUids.add(Hl(e)),this.lastProcessedEventTime=Date.now()}}function Hl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xu(n);default:return!1}}/**
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
 */async function Km(n,e={}){return Ir(n,"GET","/v1/projects",e)}/**
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
 */const Qm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jm=/^https?/;async function Ym(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Km(n);for(const t of e)try{if(Xm(t))return}catch{}Wt(n,"unauthorized-domain")}function Xm(n){const e=Eo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Jm.test(t))return!1;if(Qm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Zm=new ai(3e4,6e4);function Gl(){const n=zt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function eg(n){return new Promise((e,t)=>{var r,i,s;function a(){Gl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gl(),t(xt(n,"network-request-failed"))},timeout:Zm.get()})}if(!((i=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zt().gapi)===null||s===void 0)&&s.load)a();else{const l=im("iframefcb");return zt()[l]=()=>{gapi.load?a():t(xt(n,"network-request-failed"))},nm(`${rm()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw $i=null,e})}let $i=null;function tg(n){return $i=$i||eg(n),$i}/**
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
 */const ng=new ai(5e3,15e3),rg="__/auth/iframe",ig="emulator/auth/iframe",sg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ag(n){const e=n.config;oe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ho(e,ig):`https://${n.config.authDomain}/${rg}`,r={apiKey:e.apiKey,appName:n.name,v:Er},i=og.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${oi(r).slice(1)}`}async function lg(n){const e=await tg(n),t=zt().gapi;return oe(t,n,"internal-error"),e.open({where:document.body,url:ag(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=xt(n,"network-request-failed"),l=zt().setTimeout(()=>{s(a)},ng.get());function c(){zt().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const cg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ug=500,hg=600,dg="_blank",fg="http://localhost";class Wl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pg(n,e,t,r=ug,i=hg){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},cg),{width:r.toString(),height:i.toString(),top:s,left:a}),h=tt().toLowerCase();t&&(l=Vu(h)?dg:t),Du(h)&&(e=e||fg,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[w,y])=>`${g}${w}=${y},`,"");if(Wp(h)&&l!=="_self")return mg(e||"",l),new Wl(null);const p=window.open(e||"",l,d);oe(p,n,"popup-blocked");try{p.focus()}catch{}return new Wl(p)}function mg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const gg="__/auth/handler",_g="emulator/auth/handler",vg=encodeURIComponent("fac");async function Kl(n,e,t,r,i,s){oe(n.config.authDomain,n,"auth-domain-config-required"),oe(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Er,eventId:i};if(e instanceof Jo){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",_f(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof li){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${vg}=${encodeURIComponent(c)}`:"";return`${yg(n)}?${oi(l).slice(1)}${h}`}function yg({config:n}){return n.emulator?Ho(n,_g):`https://${n.authDomain}/${gg}`}/**
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
 */const co="webStorageSupport";class Eg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hu,this._completeRedirectFn=$m,this._overrideRedirectResult=jm}async _openPopup(e,t,r,i){var s;on((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Kl(e,t,r,Eo(),i);return pg(e,a,Xo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Kl(e,t,r,Eo(),i);return wm(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(on(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await lg(e),r=new Gm(e);return t.register("authEvent",i=>(oe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(co,{type:co},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[co];a!==void 0&&t(!!a),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ym(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Lu()||Ko()||vs()}}const Ig=Eg;var Ql="@firebase/auth",Jl="1.7.4";/**
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
 */class Tg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ag(n){ur(new jn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;oe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uu(n)},h=new em(r,i,s,c);return om(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ur(new jn("auth-internal",e=>{const t=ys(e.getProvider("auth").getImmediate());return(r=>new Tg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(Ql,Jl,wg(n)),Tn(Ql,Jl,"esm2017")}/**
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
 */const bg=5*60,Rg=gu("authIdTokenMaxAge")||bg;let Yl=null;const Cg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Rg)return;const i=t==null?void 0:t.token;Yl!==i&&(Yl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function is(n=Eu()){const e=jo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sm(n,{popupRedirectResolver:Ig,persistence:[Vm,Em,Hu]}),r=gu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Cg(s.toString());mm(t,a,()=>a(t.currentUser)),pm(t,l=>a(l))}}const i=pu("auth");return i&&am(t,`http://${i}`),t}function Sg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}tm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=xt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Sg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ag("Browser");var Xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fn,Zu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function v(){}v.prototype=_.prototype,T.D=_.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(E,C,S){for(var I=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)I[ne-2]=arguments[ne];return _.prototype[C].apply(E,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,v){v||(v=0);var E=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)E[C]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(C=0;16>C;++C)E[C]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=T.g[0],v=T.g[1],C=T.g[2];var S=T.g[3],I=_+(S^v&(C^S))+E[0]+3614090360&4294967295;_=v+(I<<7&4294967295|I>>>25),I=S+(C^_&(v^C))+E[1]+3905402710&4294967295,S=_+(I<<12&4294967295|I>>>20),I=C+(v^S&(_^v))+E[2]+606105819&4294967295,C=S+(I<<17&4294967295|I>>>15),I=v+(_^C&(S^_))+E[3]+3250441966&4294967295,v=C+(I<<22&4294967295|I>>>10),I=_+(S^v&(C^S))+E[4]+4118548399&4294967295,_=v+(I<<7&4294967295|I>>>25),I=S+(C^_&(v^C))+E[5]+1200080426&4294967295,S=_+(I<<12&4294967295|I>>>20),I=C+(v^S&(_^v))+E[6]+2821735955&4294967295,C=S+(I<<17&4294967295|I>>>15),I=v+(_^C&(S^_))+E[7]+4249261313&4294967295,v=C+(I<<22&4294967295|I>>>10),I=_+(S^v&(C^S))+E[8]+1770035416&4294967295,_=v+(I<<7&4294967295|I>>>25),I=S+(C^_&(v^C))+E[9]+2336552879&4294967295,S=_+(I<<12&4294967295|I>>>20),I=C+(v^S&(_^v))+E[10]+4294925233&4294967295,C=S+(I<<17&4294967295|I>>>15),I=v+(_^C&(S^_))+E[11]+2304563134&4294967295,v=C+(I<<22&4294967295|I>>>10),I=_+(S^v&(C^S))+E[12]+1804603682&4294967295,_=v+(I<<7&4294967295|I>>>25),I=S+(C^_&(v^C))+E[13]+4254626195&4294967295,S=_+(I<<12&4294967295|I>>>20),I=C+(v^S&(_^v))+E[14]+2792965006&4294967295,C=S+(I<<17&4294967295|I>>>15),I=v+(_^C&(S^_))+E[15]+1236535329&4294967295,v=C+(I<<22&4294967295|I>>>10),I=_+(C^S&(v^C))+E[1]+4129170786&4294967295,_=v+(I<<5&4294967295|I>>>27),I=S+(v^C&(_^v))+E[6]+3225465664&4294967295,S=_+(I<<9&4294967295|I>>>23),I=C+(_^v&(S^_))+E[11]+643717713&4294967295,C=S+(I<<14&4294967295|I>>>18),I=v+(S^_&(C^S))+E[0]+3921069994&4294967295,v=C+(I<<20&4294967295|I>>>12),I=_+(C^S&(v^C))+E[5]+3593408605&4294967295,_=v+(I<<5&4294967295|I>>>27),I=S+(v^C&(_^v))+E[10]+38016083&4294967295,S=_+(I<<9&4294967295|I>>>23),I=C+(_^v&(S^_))+E[15]+3634488961&4294967295,C=S+(I<<14&4294967295|I>>>18),I=v+(S^_&(C^S))+E[4]+3889429448&4294967295,v=C+(I<<20&4294967295|I>>>12),I=_+(C^S&(v^C))+E[9]+568446438&4294967295,_=v+(I<<5&4294967295|I>>>27),I=S+(v^C&(_^v))+E[14]+3275163606&4294967295,S=_+(I<<9&4294967295|I>>>23),I=C+(_^v&(S^_))+E[3]+4107603335&4294967295,C=S+(I<<14&4294967295|I>>>18),I=v+(S^_&(C^S))+E[8]+1163531501&4294967295,v=C+(I<<20&4294967295|I>>>12),I=_+(C^S&(v^C))+E[13]+2850285829&4294967295,_=v+(I<<5&4294967295|I>>>27),I=S+(v^C&(_^v))+E[2]+4243563512&4294967295,S=_+(I<<9&4294967295|I>>>23),I=C+(_^v&(S^_))+E[7]+1735328473&4294967295,C=S+(I<<14&4294967295|I>>>18),I=v+(S^_&(C^S))+E[12]+2368359562&4294967295,v=C+(I<<20&4294967295|I>>>12),I=_+(v^C^S)+E[5]+4294588738&4294967295,_=v+(I<<4&4294967295|I>>>28),I=S+(_^v^C)+E[8]+2272392833&4294967295,S=_+(I<<11&4294967295|I>>>21),I=C+(S^_^v)+E[11]+1839030562&4294967295,C=S+(I<<16&4294967295|I>>>16),I=v+(C^S^_)+E[14]+4259657740&4294967295,v=C+(I<<23&4294967295|I>>>9),I=_+(v^C^S)+E[1]+2763975236&4294967295,_=v+(I<<4&4294967295|I>>>28),I=S+(_^v^C)+E[4]+1272893353&4294967295,S=_+(I<<11&4294967295|I>>>21),I=C+(S^_^v)+E[7]+4139469664&4294967295,C=S+(I<<16&4294967295|I>>>16),I=v+(C^S^_)+E[10]+3200236656&4294967295,v=C+(I<<23&4294967295|I>>>9),I=_+(v^C^S)+E[13]+681279174&4294967295,_=v+(I<<4&4294967295|I>>>28),I=S+(_^v^C)+E[0]+3936430074&4294967295,S=_+(I<<11&4294967295|I>>>21),I=C+(S^_^v)+E[3]+3572445317&4294967295,C=S+(I<<16&4294967295|I>>>16),I=v+(C^S^_)+E[6]+76029189&4294967295,v=C+(I<<23&4294967295|I>>>9),I=_+(v^C^S)+E[9]+3654602809&4294967295,_=v+(I<<4&4294967295|I>>>28),I=S+(_^v^C)+E[12]+3873151461&4294967295,S=_+(I<<11&4294967295|I>>>21),I=C+(S^_^v)+E[15]+530742520&4294967295,C=S+(I<<16&4294967295|I>>>16),I=v+(C^S^_)+E[2]+3299628645&4294967295,v=C+(I<<23&4294967295|I>>>9),I=_+(C^(v|~S))+E[0]+4096336452&4294967295,_=v+(I<<6&4294967295|I>>>26),I=S+(v^(_|~C))+E[7]+1126891415&4294967295,S=_+(I<<10&4294967295|I>>>22),I=C+(_^(S|~v))+E[14]+2878612391&4294967295,C=S+(I<<15&4294967295|I>>>17),I=v+(S^(C|~_))+E[5]+4237533241&4294967295,v=C+(I<<21&4294967295|I>>>11),I=_+(C^(v|~S))+E[12]+1700485571&4294967295,_=v+(I<<6&4294967295|I>>>26),I=S+(v^(_|~C))+E[3]+2399980690&4294967295,S=_+(I<<10&4294967295|I>>>22),I=C+(_^(S|~v))+E[10]+4293915773&4294967295,C=S+(I<<15&4294967295|I>>>17),I=v+(S^(C|~_))+E[1]+2240044497&4294967295,v=C+(I<<21&4294967295|I>>>11),I=_+(C^(v|~S))+E[8]+1873313359&4294967295,_=v+(I<<6&4294967295|I>>>26),I=S+(v^(_|~C))+E[15]+4264355552&4294967295,S=_+(I<<10&4294967295|I>>>22),I=C+(_^(S|~v))+E[6]+2734768916&4294967295,C=S+(I<<15&4294967295|I>>>17),I=v+(S^(C|~_))+E[13]+1309151649&4294967295,v=C+(I<<21&4294967295|I>>>11),I=_+(C^(v|~S))+E[4]+4149444226&4294967295,_=v+(I<<6&4294967295|I>>>26),I=S+(v^(_|~C))+E[11]+3174756917&4294967295,S=_+(I<<10&4294967295|I>>>22),I=C+(_^(S|~v))+E[2]+718787259&4294967295,C=S+(I<<15&4294967295|I>>>17),I=v+(S^(C|~_))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var v=_-this.blockSize,E=this.B,C=this.h,S=0;S<_;){if(C==0)for(;S<=v;)i(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<_;)if(E[C++]=T.charCodeAt(S++),C==this.blockSize){i(this,E),C=0;break}}else for(;S<_;)if(E[C++]=T[S++],C==this.blockSize){i(this,E),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var v=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=v&255,v/=256;for(this.u(T),T=Array(16),_=v=0;4>_;++_)for(var E=0;32>E;E+=8)T[v++]=this.g[_]>>>E&255;return T};function s(T,_){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=_(T)}function a(T,_){this.h=_;for(var v=[],E=!0,C=T.length-1;0<=C;C--){var S=T[C]|0;E&&S==_||(v[C]=S,E=!1)}this.g=v}var l={};function c(T){return-128<=T&&128>T?s(T,function(_){return new a([_|0],0>_?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return P(h(-T));for(var _=[],v=1,E=0;T>=v;E++)_[E]=T/v|0,v*=4294967296;return new a(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return P(d(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(_,8)),E=p,C=0;C<T.length;C+=8){var S=Math.min(8,T.length-C),I=parseInt(T.substring(C,C+S),_);8>S?(S=h(Math.pow(_,S)),E=E.j(S).add(h(I))):(E=E.j(v),E=E.add(h(I)))}return E}var p=c(0),g=c(1),w=c(16777216);n=a.prototype,n.m=function(){if(b(this))return-P(this).m();for(var T=0,_=1,v=0;v<this.g.length;v++){var E=this.i(v);T+=(0<=E?E:4294967296+E)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(y(this))return"0";if(b(this))return"-"+P(this).toString(T);for(var _=h(Math.pow(T,6)),v=this,E="";;){var C=B(v,_).g;v=M(v,C.j(_));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=C,y(v))return S+E;for(;6>S.length;)S="0"+S;E=S+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function y(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function b(T){return T.h==-1}n.l=function(T){return T=M(this,T),b(T)?-1:y(T)?0:1};function P(T){for(var _=T.g.length,v=[],E=0;E<_;E++)v[E]=~T.g[E];return new a(v,~T.h).add(g)}n.abs=function(){return b(this)?P(this):this},n.add=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],E=0,C=0;C<=_;C++){var S=E+(this.i(C)&65535)+(T.i(C)&65535),I=(S>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);E=I>>>16,S&=65535,I&=65535,v[C]=I<<16|S}return new a(v,v[v.length-1]&-2147483648?-1:0)};function M(T,_){return T.add(P(_))}n.j=function(T){if(y(this)||y(T))return p;if(b(this))return b(T)?P(this).j(P(T)):P(P(this).j(T));if(b(T))return P(this.j(P(T)));if(0>this.l(w)&&0>T.l(w))return h(this.m()*T.m());for(var _=this.g.length+T.g.length,v=[],E=0;E<2*_;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var C=0;C<T.g.length;C++){var S=this.i(E)>>>16,I=this.i(E)&65535,ne=T.i(C)>>>16,te=T.i(C)&65535;v[2*E+2*C]+=I*te,F(v,2*E+2*C),v[2*E+2*C+1]+=S*te,F(v,2*E+2*C+1),v[2*E+2*C+1]+=I*ne,F(v,2*E+2*C+1),v[2*E+2*C+2]+=S*ne,F(v,2*E+2*C+2)}for(E=0;E<_;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=_;E<2*_;E++)v[E]=0;return new a(v,0)};function F(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function x(T,_){this.g=T,this.h=_}function B(T,_){if(y(_))throw Error("division by zero");if(y(T))return new x(p,p);if(b(T))return _=B(P(T),_),new x(P(_.g),P(_.h));if(b(_))return _=B(T,P(_)),new x(P(_.g),_.h);if(30<T.g.length){if(b(T)||b(_))throw Error("slowDivide_ only works with positive integers.");for(var v=g,E=_;0>=E.l(T);)v=G(v),E=G(E);var C=U(v,1),S=U(E,1);for(E=U(E,2),v=U(v,2);!y(E);){var I=S.add(E);0>=I.l(T)&&(C=C.add(v),S=I),E=U(E,1),v=U(v,1)}return _=M(T,C.j(_)),new x(C,_)}for(C=p;0<=T.l(_);){for(v=Math.max(1,Math.floor(T.m()/_.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),S=h(v),I=S.j(_);b(I)||0<I.l(T);)v-=E,S=h(v),I=S.j(_);y(S)&&(S=g),C=C.add(S),T=M(T,I)}return new x(C,T)}n.A=function(T){return B(this,T).h},n.and=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)&T.i(E);return new a(v,this.h&T.h)},n.or=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)|T.i(E);return new a(v,this.h|T.h)},n.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)^T.i(E);return new a(v,this.h^T.h)};function G(T){for(var _=T.g.length+1,v=[],E=0;E<_;E++)v[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(v,T.h)}function U(T,_){var v=_>>5;_%=32;for(var E=T.g.length-v,C=[],S=0;S<E;S++)C[S]=0<_?T.i(S+v)>>>_|T.i(S+v+1)<<32-_:T.i(S+v);return new a(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Fn=a}).apply(typeof Xl<"u"?Xl:typeof self<"u"?self:typeof window<"u"?window:{});var xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eh,th,zr,nh,Hi,wo,rh,ih,sh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof xi=="object"&&xi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var f=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var k=o[m];if(!(k in f))break e;f=f[k]}o=o[o.length-1],m=f[o],u=u(m),u!=m&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var f=0,m=!1,k={next:function(){if(!m&&f<o.length){var O=f++;return{value:u(O,o[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,m),o.apply(u,k)}}return function(){return o.apply(u,arguments)}}function g(o,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function w(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function y(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(m,k,O){for(var H=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)H[Se-2]=arguments[Se];return u.prototype[k].apply(m,H)}}function b(o){const u=o.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=o[m];return f}return[]}function P(o,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const k=o.length||0,O=m.length||0;o.length=k+O;for(let H=0;H<O;H++)o[k+H]=m[H]}else o.push(m)}}class M{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(o){return/^[\s\xa0]*$/.test(o)}function x(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function B(o){return B[" "](o),o}B[" "]=function(){};var G=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function U(o,u,f){for(const m in o)u.call(f,o[m],m,o)}function T(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function _(o){const u={};for(const f in o)u[f]=o[f];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,u){let f,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(f in m)o[f]=m[f];for(let O=0;O<v.length;O++)f=v[O],Object.prototype.hasOwnProperty.call(m,f)&&(o[f]=m[f])}}function C(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function I(){var o=ce;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ne{constructor(){this.h=this.g=null}add(u,f){const m=te.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var te=new M(()=>new ie,o=>o.reset());class ie{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,re=!1,ce=new ne,fe=()=>{const o=l.Promise.resolve(void 0);Z=()=>{o.then(he)}};var he=()=>{for(var o;o=I();){try{o.h.call(o.g)}catch(f){S(f)}var u=te;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}re=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var nt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function gt(o,u){if(pe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(G){e:{try{B(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Pt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&gt.aa.h.call(this)}}y(gt,pe);var Pt={2:"touch",3:"pen",4:"mouse"};gt.prototype.h=function(){gt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var xe="closure_listenable_"+(1e6*Math.random()|0),J=0;function De(o,u,f,m,k){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=k,this.key=++J,this.da=this.fa=!1}function Ne(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function rt(o){this.src=o,this.g={},this.h=0}rt.prototype.add=function(o,u,f,m,k){var O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);var H=Tt(o,u,m,k);return-1<H?(u=o[H],f||(u.fa=!1)):(u=new De(u,this.src,O,!!m,k),u.fa=f,o.push(u)),u};function yt(o,u){var f=u.type;if(f in o.g){var m=o.g[f],k=Array.prototype.indexOf.call(m,u,void 0),O;(O=0<=k)&&Array.prototype.splice.call(m,k,1),O&&(Ne(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Tt(o,u,f,m){for(var k=0;k<o.length;++k){var O=o[k];if(!O.da&&O.listener==u&&O.capture==!!f&&O.ha==m)return k}return-1}var Qt="closure_lm_"+(1e6*Math.random()|0),wt={};function kt(o,u,f,m,k){if(Array.isArray(u)){for(var O=0;O<u.length;O++)kt(o,u[O],f,m,k);return null}return f=ge(f),o&&o[xe]?o.K(u,f,h(m)?!!m.capture:!!m,k):vi(o,u,f,!1,m,k)}function vi(o,u,f,m,k,O){if(!u)throw Error("Invalid event type");var H=h(k)?!!k.capture:!!k,Se=Fe(o);if(Se||(o[Qt]=Se=new rt(o)),f=Se.add(u,f,m,H,O),f.proxy)return f;if(m=Rr(),f.proxy=m,m.src=o,m.listener=f,o.addEventListener)nt||(k=H),k===void 0&&(k=!1),o.addEventListener(u.toString(),m,k);else if(o.attachEvent)o.attachEvent(Jt(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Rr(){function o(f){return u.call(o.src,o.listener,f)}const u=We;return o}function Cr(o,u,f,m,k){if(Array.isArray(u))for(var O=0;O<u.length;O++)Cr(o,u[O],f,m,k);else m=h(m)?!!m.capture:!!m,f=ge(f),o&&o[xe]?(o=o.i,u=String(u).toString(),u in o.g&&(O=o.g[u],f=Tt(O,f,m,k),-1<f&&(Ne(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete o.g[u],o.h--)))):o&&(o=Fe(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Tt(u,f,m,k)),(f=-1<o?u[o]:null)&&Ue(f))}function Ue(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[xe])yt(u.i,o);else{var f=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(f,m,o.capture):u.detachEvent?u.detachEvent(Jt(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=Fe(u))?(yt(f,o),f.h==0&&(f.src=null,u[Qt]=null)):Ne(o)}}}function Jt(o){return o in wt?wt[o]:wt[o]="on"+o}function We(o,u){if(o.da)o=!0;else{u=new gt(u,this);var f=o.listener,m=o.ha||o.src;o.fa&&Ue(o),o=f.call(m,u)}return o}function Fe(o){return o=o[Qt],o instanceof rt?o:null}var Be="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(o){return typeof o=="function"?o:(o[Be]||(o[Be]=function(u){return o.handleEvent(u)}),o[Be])}function se(){me.call(this),this.i=new rt(this),this.M=this,this.F=null}y(se,me),se.prototype[xe]=!0,se.prototype.removeEventListener=function(o,u,f,m){Cr(this,o,u,f,m)};function de(o,u){var f,m=o.F;if(m)for(f=[];m;m=m.F)f.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new pe(u,o);else if(u instanceof pe)u.target=u.target||o;else{var k=u;u=new pe(m,o),E(u,k)}if(k=!0,f)for(var O=f.length-1;0<=O;O--){var H=u.g=f[O];k=qt(H,m,!0,u)&&k}if(H=u.g=o,k=qt(H,m,!0,u)&&k,k=qt(H,m,!1,u)&&k,f)for(O=0;O<f.length;O++)H=u.g=f[O],k=qt(H,m,!1,u)&&k}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],m=0;m<f.length;m++)Ne(f[m]);delete o.g[u],o.h--}}this.F=null},se.prototype.K=function(o,u,f,m){return this.i.add(String(o),u,!1,f,m)},se.prototype.L=function(o,u,f,m){return this.i.add(String(o),u,!0,f,m)};function qt(o,u,f,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,O=0;O<u.length;++O){var H=u[O];if(H&&!H.da&&H.capture==f){var Se=H.listener,Ye=H.ha||H.src;H.fa&&yt(o.i,H),k=Se.call(Ye,m)!==!1&&k}}return k&&!m.defaultPrevented}function Dt(o,u,f){if(typeof o=="function")f&&(o=g(o,f));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Vt(o){o.g=Dt(()=>{o.g=null,o.i&&(o.i=!1,Vt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class yi extends me{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Vt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nt(o){me.call(this),this.h=o,this.g={}}y(Nt,me);var Yt=[];function Yn(o){U(o.g,function(u,f){this.g.hasOwnProperty(f)&&Ue(u)},o),o.g={}}Nt.prototype.N=function(){Nt.aa.N.call(this),Yn(this)},Nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var js=l.JSON.stringify,Ed=l.JSON.parse,Id=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function qs(){}qs.prototype.h=null;function Na(o){return o.h||(o.h=o.i())}function Oa(){}var Sr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zs(){pe.call(this,"d")}y(zs,pe);function $s(){pe.call(this,"c")}y($s,pe);var Dn={},xa=null;function Ei(){return xa=xa||new se}Dn.La="serverreachability";function Ma(o){pe.call(this,Dn.La,o)}y(Ma,pe);function Pr(o){const u=Ei();de(u,new Ma(u))}Dn.STAT_EVENT="statevent";function La(o,u){pe.call(this,Dn.STAT_EVENT,o),this.stat=u}y(La,pe);function dt(o){const u=Ei();de(u,new La(u,o))}Dn.Ma="timingevent";function Ua(o,u){pe.call(this,Dn.Ma,o),this.size=u}y(Ua,pe);function kr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Dr(){this.g=!0}Dr.prototype.xa=function(){this.g=!1};function Td(o,u,f,m,k,O){o.info(function(){if(o.g)if(O)for(var H="",Se=O.split("&"),Ye=0;Ye<Se.length;Ye++){var Ie=Se[Ye].split("=");if(1<Ie.length){var it=Ie[0];Ie=Ie[1];var st=it.split("_");H=2<=st.length&&st[1]=="type"?H+(it+"="+Ie+"&"):H+(it+"=redacted&")}}else H=null;else H=O;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+u+`
`+f+`
`+H})}function wd(o,u,f,m,k,O,H){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+u+`
`+f+`
`+O+" "+H})}function Xn(o,u,f,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+bd(o,f)+(m?" "+m:"")})}function Ad(o,u){o.info(function(){return"TIMEOUT: "+u})}Dr.prototype.info=function(){};function bd(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var m=f[o];if(!(2>m.length)){var k=m[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var H=1;H<k.length;H++)k[H]=""}}}}return js(f)}catch{return u}}var Ii={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hs;function Ti(){}y(Ti,qs),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},Hs=new Ti;function dn(o,u,f,m){this.j=o,this.i=u,this.l=f,this.R=m||1,this.U=new Nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ba}function Ba(){this.i=null,this.g="",this.h=!1}var ja={},Gs={};function Ws(o,u,f){o.L=1,o.v=Ri(Xt(u)),o.m=f,o.P=!0,qa(o,null)}function qa(o,u){o.F=Date.now(),wi(o),o.A=Xt(o.v);var f=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),nl(f.i,"t",m),o.C=0,f=o.j.J,o.h=new Ba,o.g=El(o.j,f?u:null,!o.m),0<o.O&&(o.M=new yi(g(o.Y,o,o.g),o.O)),u=o.U,f=o.g,m=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(Yt[0]=k.toString()),k=Yt);for(var O=0;O<k.length;O++){var H=kt(f,k[O],m||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Pr(),Td(o.i,o.u,o.A,o.l,o.R,o.m)}dn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Zt(o)==3?u.j():this.Y(o)},dn.prototype.Y=function(o){try{if(o==this.g)e:{const st=Zt(this.g);var u=this.g.Ba();const tr=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||cl(this.g)))){this.J||st!=4||u==7||(u==8||0>=tr?Pr(3):Pr(2)),Ks(this);var f=this.g.Z();this.X=f;t:if(za(this)){var m=cl(this.g);o="";var k=m.length,O=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),Vr(this);var H="";break t}this.h.i=new l.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(O&&u==k-1)});m.length=0,this.h.g+=o,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=f==200,wd(this.i,this.u,this.A,this.l,this.R,st,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,Ye=this.g;if((Se=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Se)){var Ie=Se;break t}}Ie=null}if(f=Ie)Xn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qs(this,f);else{this.o=!1,this.s=3,dt(12),Vn(this),Vr(this);break e}}if(this.P){f=!0;let Ot;for(;!this.J&&this.C<H.length;)if(Ot=Rd(this,H),Ot==Gs){st==4&&(this.s=4,dt(14),f=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==ja){this.s=4,dt(15),Xn(this.i,this.l,H,"[Invalid Chunk]"),f=!1;break}else Xn(this.i,this.l,Ot,null),Qs(this,Ot);if(za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||H.length!=0||this.h.h||(this.s=1,dt(16),f=!1),this.o=this.o&&f,!f)Xn(this.i,this.l,H,"[Invalid Chunked Response]"),Vn(this),Vr(this);else if(0<H.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),to(it),it.M=!0,dt(11))}}else Xn(this.i,this.l,H,null),Qs(this,H);st==4&&Vn(this),this.o&&!this.J&&(st==4?gl(this.j,this):(this.o=!1,wi(this)))}else zd(this.g),f==400&&0<H.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),Vn(this),Vr(this)}}}catch{}finally{}};function za(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Rd(o,u){var f=o.C,m=u.indexOf(`
`,f);return m==-1?Gs:(f=Number(u.substring(f,m)),isNaN(f)?ja:(m+=1,m+f>u.length?Gs:(u=u.slice(m,m+f),o.C=m+f,u)))}dn.prototype.cancel=function(){this.J=!0,Vn(this)};function wi(o){o.S=Date.now()+o.I,$a(o,o.I)}function $a(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=kr(g(o.ba,o),u)}function Ks(o){o.B&&(l.clearTimeout(o.B),o.B=null)}dn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Ad(this.i,this.A),this.L!=2&&(Pr(),dt(17)),Vn(this),this.s=2,Vr(this)):$a(this,this.S-o)};function Vr(o){o.j.G==0||o.J||gl(o.j,o)}function Vn(o){Ks(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Yn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Qs(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Js(f.h,o))){if(!o.K&&Js(f.h,o)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Di(f),Pi(f);else break e;eo(f),dt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=kr(g(f.Za,f),6e3));if(1>=Wa(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else On(f,11)}else if((o.K||f.g==o)&&Di(f),!F(u))for(k=f.Da.g.parse(u),u=0;u<k.length;u++){let Ie=k[u];if(f.T=Ie[0],Ie=Ie[1],f.G==2)if(Ie[0]=="c"){f.K=Ie[1],f.ia=Ie[2];const it=Ie[3];it!=null&&(f.la=it,f.j.info("VER="+f.la));const st=Ie[4];st!=null&&(f.Aa=st,f.j.info("SVER="+f.Aa));const tr=Ie[5];tr!=null&&typeof tr=="number"&&0<tr&&(m=1.5*tr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Ot=o.g;if(Ot){const Ni=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ni){var O=m.h;O.g||Ni.indexOf("spdy")==-1&&Ni.indexOf("quic")==-1&&Ni.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Ys(O,O.h),O.h=null))}if(m.D){const no=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;no&&(m.ya=no,Ve(m.I,m.D,no))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var H=o;if(m.qa=yl(m,m.J?m.ia:null,m.W),H.K){Ka(m.h,H);var Se=H,Ye=m.L;Ye&&(Se.I=Ye),Se.B&&(Ks(Se),wi(Se)),m.g=H}else pl(m);0<f.i.length&&ki(f)}else Ie[0]!="stop"&&Ie[0]!="close"||On(f,7);else f.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?On(f,7):Zs(f):Ie[0]!="noop"&&f.l&&f.l.ta(Ie),f.v=0)}}Pr(4)}catch{}}var Cd=class{constructor(o,u){this.g=o,this.map=u}};function Ha(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ga(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Wa(o){return o.h?1:o.g?o.g.size:0}function Js(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ys(o,u){o.g?o.g.add(u):o.h=u}function Ka(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ha.prototype.cancel=function(){if(this.i=Qa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Qa(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return b(o.i)}function Sd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,m=0;m<f;m++)u.push(o[m]);return u}u=[],f=0;for(m in o)u[f++]=o[m];return u}function Pd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const m in o)u[f++]=m;return u}}}function Ja(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Pd(o),m=Sd(o),k=m.length,O=0;O<k;O++)u.call(void 0,m[O],f&&f[O],o)}var Ya=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kd(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var m=o[f].indexOf("="),k=null;if(0<=m){var O=o[f].substring(0,m);k=o[f].substring(m+1)}else O=o[f];u(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Nn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Nn){this.h=o.h,Ai(this,o.j),this.o=o.o,this.g=o.g,bi(this,o.s),this.l=o.l;var u=o.i,f=new xr;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Xa(this,f),this.m=o.m}else o&&(u=String(o).match(Ya))?(this.h=!1,Ai(this,u[1]||"",!0),this.o=Nr(u[2]||""),this.g=Nr(u[3]||"",!0),bi(this,u[4]),this.l=Nr(u[5]||"",!0),Xa(this,u[6]||"",!0),this.m=Nr(u[7]||"")):(this.h=!1,this.i=new xr(null,this.h))}Nn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Or(u,Za,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Or(u,Za,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Or(f,f.charAt(0)=="/"?Nd:Vd,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Or(f,xd)),o.join("")};function Xt(o){return new Nn(o)}function Ai(o,u,f){o.j=f?Nr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function bi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Xa(o,u,f){u instanceof xr?(o.i=u,Md(o.i,o.h)):(f||(u=Or(u,Od)),o.i=new xr(u,o.h))}function Ve(o,u,f){o.i.set(u,f)}function Ri(o){return Ve(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Nr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Or(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Dd),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Dd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Za=/[#\/\?@]/g,Vd=/[#\?:]/g,Nd=/[#\?]/g,Od=/[#\?@]/g,xd=/#/g;function xr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function fn(o){o.g||(o.g=new Map,o.h=0,o.i&&kd(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=xr.prototype,n.add=function(o,u){fn(this),this.i=null,o=Zn(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function el(o,u){fn(o),u=Zn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function tl(o,u){return fn(o),u=Zn(o,u),o.g.has(u)}n.forEach=function(o,u){fn(this),this.g.forEach(function(f,m){f.forEach(function(k){o.call(u,k,m,this)},this)},this)},n.na=function(){fn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const k=o[m];for(let O=0;O<k.length;O++)f.push(u[m])}return f},n.V=function(o){fn(this);let u=[];if(typeof o=="string")tl(this,o)&&(u=u.concat(this.g.get(Zn(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return fn(this),this.i=null,o=Zn(this,o),tl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function nl(o,u,f){el(o,u),0<f.length&&(o.i=null,o.g.set(Zn(o,u),b(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const O=encodeURIComponent(String(m)),H=this.V(m);for(m=0;m<H.length;m++){var k=O;H[m]!==""&&(k+="="+encodeURIComponent(String(H[m]))),o.push(k)}}return this.i=o.join("&")};function Zn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Md(o,u){u&&!o.j&&(fn(o),o.i=null,o.g.forEach(function(f,m){var k=m.toLowerCase();m!=k&&(el(this,m),nl(this,k,f))},o)),o.j=u}function Ld(o,u){const f=new Dr;if(l.Image){const m=new Image;m.onload=w(pn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=w(pn,f,"TestLoadImage: error",!1,u,m),m.onabort=w(pn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=w(pn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function Ud(o,u){const f=new Dr,m=new AbortController,k=setTimeout(()=>{m.abort(),pn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(O=>{clearTimeout(k),O.ok?pn(f,"TestPingServer: ok",!0,u):pn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),pn(f,"TestPingServer: error",!1,u)})}function pn(o,u,f,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(f)}catch{}}function Fd(){this.g=new Id}function Bd(o,u,f){const m=f||"";try{Ja(o,function(k,O){let H=k;h(k)&&(H=js(k)),u.push(m+O+"="+encodeURIComponent(H))})}catch(k){throw u.push(m+"type="+encodeURIComponent("_badmap")),k}}function Mr(o){this.l=o.Ub||null,this.j=o.eb||!1}y(Mr,qs),Mr.prototype.g=function(){return new Ci(this.l,this.j)},Mr.prototype.i=function(o){return function(){return o}}({});function Ci(o,u){se.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(Ci,se),n=Ci.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ur(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ur(this)),this.g&&(this.readyState=3,Ur(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function rl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Lr(this):Ur(this),this.readyState==3&&rl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Lr(this))},n.Qa=function(o){this.g&&(this.response=o,Lr(this))},n.ga=function(){this.g&&Lr(this)};function Lr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ur(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Ur(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function il(o){let u="";return U(o,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Xs(o,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=il(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ve(o,u,f))}function Me(o){se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Me,se);var jd=/^https?$/i,qd=["POST","PUT"];n=Me.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hs.g(),this.v=this.o?Na(this.o):Na(Hs),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(O){sl(this,O);return}if(o=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)f.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())f.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),k=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qd,u,void 0))||m||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,H]of f)this.g.setRequestHeader(O,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ll(this),this.u=!0,this.g.send(o),this.u=!1}catch(O){sl(this,O)}};function sl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,ol(o),Si(o)}function ol(o){o.A||(o.A=!0,de(o,"complete"),de(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,de(this,"complete"),de(this,"abort"),Si(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Si(this,!0)),Me.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?al(this):this.bb())},n.bb=function(){al(this)};function al(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Zt(o)!=4||o.Z()!=2)){if(o.u&&Zt(o)==4)Dt(o.Ea,0,o);else if(de(o,"readystatechange"),Zt(o)==4){o.h=!1;try{const H=o.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=H===0){var k=String(o.D).match(Ya)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),m=!jd.test(k?k.toLowerCase():"")}f=m}if(f)de(o,"complete"),de(o,"success");else{o.m=6;try{var O=2<Zt(o)?o.g.statusText:""}catch{O=""}o.l=O+" ["+o.Z()+"]",ol(o)}}finally{Si(o)}}}}function Si(o,u){if(o.g){ll(o);const f=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||de(o,"ready");try{f.onreadystatechange=m}catch{}}}function ll(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Zt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ed(u)}};function cl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function zd(o){const u={};o=(o.g&&2<=Zt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(F(o[m]))continue;var f=C(o[m]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=u[k]||[];u[k]=O,O.push(f)}T(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fr(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function ul(o){this.Aa=0,this.i=[],this.j=new Dr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fr("baseRetryDelayMs",5e3,o),this.cb=Fr("retryDelaySeedMs",1e4,o),this.Wa=Fr("forwardChannelMaxRetries",2,o),this.wa=Fr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ha(o&&o.concurrentRequestLimit),this.Da=new Fd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ul.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,m){dt(0),this.W=o,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=yl(this,null,this.W),ki(this)};function Zs(o){if(hl(o),o.G==3){var u=o.U++,f=Xt(o.I);if(Ve(f,"SID",o.K),Ve(f,"RID",u),Ve(f,"TYPE","terminate"),Br(o,f),u=new dn(o,o.j,u),u.L=2,u.v=Ri(Xt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=El(u.j,null),u.g.ea(u.v)),u.F=Date.now(),wi(u)}vl(o)}function Pi(o){o.g&&(to(o),o.g.cancel(),o.g=null)}function hl(o){Pi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Di(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ki(o){if(!Ga(o.h)&&!o.s){o.s=!0;var u=o.Ga;Z||fe(),re||(Z(),re=!0),ce.add(u,o),o.B=0}}function $d(o,u){return Wa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=kr(g(o.Ga,o,u),_l(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new dn(this,this.j,o);let O=this.o;if(this.S&&(O?(O=_(O),E(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=fl(this,k,u),f=Xt(this.I),Ve(f,"RID",o),Ve(f,"CVER",22),this.D&&Ve(f,"X-HTTP-Session-Id",this.D),Br(this,f),O&&(this.O?u="headers="+encodeURIComponent(String(il(O)))+"&"+u:this.m&&Xs(f,this.m,O)),Ys(this.h,k),this.Ua&&Ve(f,"TYPE","init"),this.P?(Ve(f,"$req",u),Ve(f,"SID","null"),k.T=!0,Ws(k,f,null)):Ws(k,f,u),this.G=2}}else this.G==3&&(o?dl(this,o):this.i.length==0||Ga(this.h)||dl(this))};function dl(o,u){var f;u?f=u.l:f=o.U++;const m=Xt(o.I);Ve(m,"SID",o.K),Ve(m,"RID",f),Ve(m,"AID",o.T),Br(o,m),o.m&&o.o&&Xs(m,o.m,o.o),f=new dn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=fl(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ys(o.h,f),Ws(f,m,u)}function Br(o,u){o.H&&U(o.H,function(f,m){Ve(u,m,f)}),o.l&&Ja({},function(f,m){Ve(u,m,f)})}function fl(o,u,f){f=Math.min(o.i.length,f);var m=o.l?g(o.l.Na,o.l,o):null;e:{var k=o.i;let O=-1;for(;;){const H=["count="+f];O==-1?0<f?(O=k[0].g,H.push("ofs="+O)):O=0:H.push("ofs="+O);let Se=!0;for(let Ye=0;Ye<f;Ye++){let Ie=k[Ye].g;const it=k[Ye].map;if(Ie-=O,0>Ie)O=Math.max(0,k[Ye].g-100),Se=!1;else try{Bd(it,H,"req"+Ie+"_")}catch{m&&m(it)}}if(Se){m=H.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,m}function pl(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Z||fe(),re||(Z(),re=!0),ce.add(u,o),o.v=0}}function eo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=kr(g(o.Fa,o),_l(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,ml(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=kr(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Pi(this),ml(this))};function to(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function ml(o){o.g=new dn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Xt(o.qa);Ve(u,"RID","rpc"),Ve(u,"SID",o.K),Ve(u,"AID",o.T),Ve(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ve(u,"TO",o.ja),Ve(u,"TYPE","xmlhttp"),Br(o,u),o.m&&o.o&&Xs(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ri(Xt(u)),f.m=null,f.P=!0,qa(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Pi(this),eo(this),dt(19))};function Di(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function gl(o,u){var f=null;if(o.g==u){Di(o),to(o),o.g=null;var m=2}else if(Js(o.h,u))f=u.D,Ka(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var k=o.B;m=Ei(),de(m,new Ua(m,f)),ki(o)}else pl(o);else if(k=u.s,k==3||k==0&&0<u.X||!(m==1&&$d(o,u)||m==2&&eo(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),k){case 1:On(o,5);break;case 4:On(o,10);break;case 3:On(o,6);break;default:On(o,2)}}}function _l(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function On(o,u){if(o.j.info("Error code "+u),u==2){var f=g(o.fb,o),m=o.Xa;const k=!m;m=new Nn(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ai(m,"https"),Ri(m),k?Ld(m.toString(),f):Ud(m.toString(),f)}else dt(2);o.G=0,o.l&&o.l.sa(u),vl(o),hl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function vl(o){if(o.G=0,o.ka=[],o.l){const u=Qa(o.h);(u.length!=0||o.i.length!=0)&&(P(o.ka,u),P(o.ka,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.ra()}}function yl(o,u,f){var m=f instanceof Nn?Xt(f):new Nn(f);if(m.g!="")u&&(m.g=u+"."+m.g),bi(m,m.s);else{var k=l.location;m=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var O=new Nn(null);m&&Ai(O,m),u&&(O.g=u),k&&bi(O,k),f&&(O.l=f),m=O}return f=o.D,u=o.ya,f&&u&&Ve(m,f,u),Ve(m,"VER",o.la),Br(o,m),m}function El(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Me(new Mr({eb:f})):new Me(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Il(){}n=Il.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Vi(){}Vi.prototype.g=function(o,u){return new Et(o,u)};function Et(o,u){se.call(this),this.g=new ul(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!F(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new er(this)}y(Et,se),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Zs(this.g)},Et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=js(o),o=f);u.i.push(new Cd(u.Ya++,o)),u.G==3&&ki(u)},Et.prototype.N=function(){this.g.l=null,delete this.j,Zs(this.g),delete this.g,Et.aa.N.call(this)};function Tl(o){zs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}y(Tl,zs);function wl(){$s.call(this),this.status=1}y(wl,$s);function er(o){this.g=o}y(er,Il),er.prototype.ua=function(){de(this.g,"a")},er.prototype.ta=function(o){de(this.g,new Tl(o))},er.prototype.sa=function(o){de(this.g,new wl)},er.prototype.ra=function(){de(this.g,"b")},Vi.prototype.createWebChannel=Vi.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,sh=function(){return new Vi},ih=function(){return Ei()},rh=Dn,wo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ii.NO_ERROR=0,Ii.TIMEOUT=8,Ii.HTTP_ERROR=6,Hi=Ii,Fa.COMPLETE="complete",nh=Fa,Oa.EventType=Sr,Sr.OPEN="a",Sr.CLOSE="b",Sr.ERROR="c",Sr.MESSAGE="d",se.prototype.listen=se.prototype.K,zr=Oa,th=Mr,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,eh=Me}).apply(typeof xi<"u"?xi:typeof self<"u"?self:typeof window<"u"?window:{});const Zl="@firebase/firestore";/**
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
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let Tr="10.12.1";/**
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
 */const $n=new Fo("@firebase/firestore");function jr(){return $n.logLevel}function Q(n,...e){if($n.logLevel<=ye.DEBUG){const t=e.map(ea);$n.debug(`Firestore (${Tr}): ${n}`,...t)}}function an(n,...e){if($n.logLevel<=ye.ERROR){const t=e.map(ea);$n.error(`Firestore (${Tr}): ${n}`,...t)}}function dr(n,...e){if($n.logLevel<=ye.WARN){const t=e.map(ea);$n.warn(`Firestore (${Tr}): ${n}`,...t)}}function ea(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function ae(n="Unexpected state"){const e=`FIRESTORE (${Tr}) INTERNAL ASSERTION FAILED: `+n;throw an(e),new Error(e)}function ke(n,e){n||ae()}function ue(n,e){return n}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends un{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class oh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(at.UNAUTHENTICATED))}shutdown(){}}class kg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Dg{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wn,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new oh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new at(e)}}class Vg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ng{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Vg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Og{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,Q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ke(typeof t.token=="string"),this.R=t.token,new Og(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Mg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class ah{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Mg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function Te(n,e){return n<e?-1:n>e?1:0}function fr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class Ke{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ke(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new Ke(0,0))}static max(){return new le(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Xr{constructor(e,t,r){t===void 0?t=0:t>e.length&&ae(),r===void 0?r=e.length-t:r>e.length-t&&ae(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Pe extends Xr{construct(e,t,r){return new Pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Pe(t)}static emptyPath(){return new Pe([])}}const Lg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Xr{construct(e,t,r){return new Ze(e,t,r)}static isValidIdentifier(e){return Lg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(t)}static emptyPath(){return new Ze([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Pe.fromString(e))}static fromName(e){return new X(Pe.fromString(e).popFirst(5))}static empty(){return new X(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Pe(e.slice()))}}function Ug(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new Ke(t+1,0):new Ke(t,r));return new bn(i,X.empty(),e)}function Fg(n){return new bn(n.readTime,n.key,-1)}class bn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new bn(le.min(),X.empty(),-1)}static max(){return new bn(le.max(),X.empty(),-1)}}function Bg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:Te(n.largestBatchId,e.largestBatchId))}/**
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
 */const jg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ui(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==jg)throw n;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,r)=>{t(e)})}static reject(e){return new j((t,r)=>{r(e)})}static waitFor(e){return new j((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},c=>r(c))}),a=!0,s===i&&t()})}static or(e){let t=j.resolve(!1);for(const r of e)t=t.next(i=>i?j.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new j((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next(d=>{a[h]=d,++l,l===s&&r(a)},d=>i(d))}})}static doWhile(e,t){return new j((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function zg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function hi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ta{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ta.oe=-1;function Ts(n){return n==null}function ss(n){return n===0&&1/n==-1/0}function $g(n){return typeof n=="number"&&Number.isInteger(n)&&!ss(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function ec(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Kn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function lh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Oe{constructor(e,t){this.comparator=e,this.root=t||Xe.EMPTY}insert(e,t){return new Oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mi(this.root,e,this.comparator,!0)}}class Mi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Xe(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tc(this.data.getIterator())}getIteratorFrom(e){return new tc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new et(this.comparator);return t.data=e,t}}class tc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new It([])}unionWith(e){let t=new et(Ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new It(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class ch extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ch("Invalid base64 string: "+s):s}}(e);return new ht(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new ht(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Hg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(n){if(ke(!!n),typeof n=="string"){let e=0;const t=Hg.exec(n);if(ke(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(n.seconds),nanos:$e(n.nanos)}}function $e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Hn(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
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
 */function ws(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function na(n){const e=n.mapValue.fields.__previous_value__;return ws(e)?na(e):e}function Zr(n){const e=Rn(n.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class Gg{constructor(e,t,r,i,s,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class ei{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ei&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ws(n)?4:Wg(n)?9007199254740991:10:ae()}function Kt(n,e){if(n===e)return!0;const t=Gn(n);if(t!==Gn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zr(n).isEqual(Zr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Rn(i.timestampValue),l=Rn(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Hn(i.bytesValue).isEqual(Hn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return $e(i.geoPointValue.latitude)===$e(s.geoPointValue.latitude)&&$e(i.geoPointValue.longitude)===$e(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return $e(i.integerValue)===$e(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=$e(i.doubleValue),l=$e(s.doubleValue);return a===l?ss(a)===ss(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return fr(n.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(ec(a)!==ec(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Kt(a[c],l[c])))return!1;return!0}(n,e);default:return ae()}}function ti(n,e){return(n.values||[]).find(t=>Kt(t,e))!==void 0}function pr(n,e){if(n===e)return 0;const t=Gn(n),r=Gn(e);if(t!==r)return Te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Te(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=$e(s.integerValue||s.doubleValue),c=$e(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return nc(n.timestampValue,e.timestampValue);case 4:return nc(Zr(n),Zr(e));case 5:return Te(n.stringValue,e.stringValue);case 6:return function(s,a){const l=Hn(s),c=Hn(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Te(l[h],c[h]);if(d!==0)return d}return Te(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=Te($e(s.latitude),$e(a.latitude));return l!==0?l:Te($e(s.longitude),$e(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,a){const l=s.values||[],c=a.values||[];for(let h=0;h<l.length&&h<c.length;++h){const d=pr(l[h],c[h]);if(d)return d}return Te(l.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===Li.mapValue&&a===Li.mapValue)return 0;if(s===Li.mapValue)return 1;if(a===Li.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Te(c[p],d[p]);if(g!==0)return g;const w=pr(l[c[p]],h[d[p]]);if(w!==0)return w}return Te(c.length,d.length)}(n.mapValue,e.mapValue);default:throw ae()}}function nc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Te(n,e);const t=Rn(n),r=Rn(e),i=Te(t.seconds,r.seconds);return i!==0?i:Te(t.nanos,r.nanos)}function mr(n){return Ao(n)}function Ao(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Rn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Hn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return X.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Ao(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Ao(t.fields[a])}`;return i+"}"}(n.mapValue):ae()}function os(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function bo(n){return!!n&&"integerValue"in n}function ra(n){return!!n&&"arrayValue"in n}function rc(n){return!!n&&"nullValue"in n}function ic(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Gi(n){return!!n&&"mapValue"in n}function Wr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Kn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Wr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Wg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Gi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wr(t)}setAll(e){let t=Ze.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Wr(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Gi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Kt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Gi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Kn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(Wr(this.value))}}function uh(n){const e=[];return Kn(n.fields,(t,r)=>{const i=new Ze([t]);if(Gi(r)){const s=uh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new It(e)}/**
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
 */class lt{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,le.min(),le.min(),le.min(),_t.empty(),0)}static newFoundDocument(e,t,r,i){return new lt(e,1,t,le.min(),r,i,0)}static newNoDocument(e,t){return new lt(e,2,t,le.min(),le.min(),_t.empty(),0)}static newUnknownDocument(e,t){return new lt(e,3,t,le.min(),le.min(),_t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gr{constructor(e,t){this.position=e,this.inclusive=t}}function sc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=pr(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function oc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Kt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ni{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class hh{}class He extends hh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Jg(e,t,r):t==="array-contains"?new Zg(e,r):t==="in"?new e_(e,r):t==="not-in"?new t_(e,r):t==="array-contains-any"?new n_(e,r):new He(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Yg(e,r):new Xg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(pr(t,this.value)):t!==null&&Gn(this.value)===Gn(t)&&this.matchesComparison(pr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends hh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Lt(e,t)}matches(e){return dh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function dh(n){return n.op==="and"}function fh(n){return Qg(n)&&dh(n)}function Qg(n){for(const e of n.filters)if(e instanceof Lt)return!1;return!0}function Ro(n){if(n instanceof He)return n.field.canonicalString()+n.op.toString()+mr(n.value);if(fh(n))return n.filters.map(e=>Ro(e)).join(",");{const e=n.filters.map(t=>Ro(t)).join(",");return`${n.op}(${e})`}}function ph(n,e){return n instanceof He?function(r,i){return i instanceof He&&r.op===i.op&&r.field.isEqual(i.field)&&Kt(r.value,i.value)}(n,e):n instanceof Lt?function(r,i){return i instanceof Lt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&ph(a,i.filters[l]),!0):!1}(n,e):void ae()}function mh(n){return n instanceof He?function(t){return`${t.field.canonicalString()} ${t.op} ${mr(t.value)}`}(n):n instanceof Lt?function(t){return t.op.toString()+" {"+t.getFilters().map(mh).join(" ,")+"}"}(n):"Filter"}class Jg extends He{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yg extends He{constructor(e,t){super(e,"in",t),this.keys=gh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Xg extends He{constructor(e,t){super(e,"not-in",t),this.keys=gh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function gh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>X.fromName(r.referenceValue))}class Zg extends He{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ra(t)&&ti(t.arrayValue,this.value)}}class e_ extends He{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ti(this.value.arrayValue,t)}}class t_ extends He{constructor(e,t){super(e,"not-in",t)}matches(e){if(ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ti(this.value.arrayValue,t)}}class n_ extends He{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ra(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ti(this.value.arrayValue,r))}}/**
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
 */class r_{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function ac(n,e=null,t=[],r=[],i=null,s=null,a=null){return new r_(n,e,t,r,i,s,a)}function ia(n){const e=ue(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ro(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ts(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>mr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>mr(r)).join(",")),e.ue=t}return e.ue}function sa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Kg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ph(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!oc(n.startAt,e.startAt)&&oc(n.endAt,e.endAt)}function Co(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Qn{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function i_(n,e,t,r,i,s,a,l){return new Qn(n,e,t,r,i,s,a,l)}function _h(n){return new Qn(n)}function lc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function oa(n){return n.collectionGroup!==null}function lr(n){const e=ue(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new et(Ze.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ni(s,r))}),t.has(Ze.keyField().canonicalString())||e.ce.push(new ni(Ze.keyField(),r))}return e.ce}function $t(n){const e=ue(n);return e.le||(e.le=s_(e,lr(n))),e.le}function s_(n,e){if(n.limitType==="F")return ac(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ni(i.field,s)});const t=n.endAt?new gr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gr(n.startAt.position,n.startAt.inclusive):null;return ac(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function So(n,e){const t=n.filters.concat([e]);return new Qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function as(n,e,t){return new Qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function As(n,e){return sa($t(n),$t(e))&&n.limitType===e.limitType}function vh(n){return`${ia($t(n))}|lt:${n.limitType}`}function nr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>mh(i)).join(", ")}]`),Ts(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>mr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>mr(i)).join(",")),`Target(${r})`}($t(n))}; limitType=${n.limitType})`}function bs(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of lr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,c){const h=sc(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,lr(r),i)||r.endAt&&!function(a,l,c){const h=sc(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,lr(r),i))}(n,e)}function o_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yh(n){return(e,t)=>{let r=!1;for(const i of lr(n)){const s=a_(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function a_(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):function(s,a,l){const c=a.data.field(s),h=l.data.field(s);return c!==null&&h!==null?pr(c,h):ae()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
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
 */class wr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Kn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return lh(this.inner)}size(){return this.innerSize}}/**
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
 */const l_=new Oe(X.comparator);function ln(){return l_}const Eh=new Oe(X.comparator);function $r(...n){let e=Eh;for(const t of n)e=e.insert(t.key,t);return e}function Ih(n){let e=Eh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ln(){return Kr()}function Th(){return Kr()}function Kr(){return new wr(n=>n.toString(),(n,e)=>n.isEqual(e))}const c_=new Oe(X.comparator),u_=new et(X.comparator);function ve(...n){let e=u_;for(const t of n)e=e.add(t);return e}const h_=new et(Te);function d_(){return h_}/**
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
 */function wh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ss(e)?"-0":e}}function Ah(n){return{integerValue:""+n}}function f_(n,e){return $g(e)?Ah(e):wh(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Rs{constructor(){this._=void 0}}function p_(n,e,t){return n instanceof ls?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ws(s)&&(s=na(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof ri?Rh(n,e):n instanceof ii?Ch(n,e):function(i,s){const a=bh(i,s),l=cc(a)+cc(i.Pe);return bo(a)&&bo(i.Pe)?Ah(l):wh(i.serializer,l)}(n,e)}function m_(n,e,t){return n instanceof ri?Rh(n,e):n instanceof ii?Ch(n,e):t}function bh(n,e){return n instanceof cs?function(r){return bo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ls extends Rs{}class ri extends Rs{constructor(e){super(),this.elements=e}}function Rh(n,e){const t=Sh(e);for(const r of n.elements)t.some(i=>Kt(i,r))||t.push(r);return{arrayValue:{values:t}}}class ii extends Rs{constructor(e){super(),this.elements=e}}function Ch(n,e){let t=Sh(e);for(const r of n.elements)t=t.filter(i=>!Kt(i,r));return{arrayValue:{values:t}}}class cs extends Rs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function cc(n){return $e(n.integerValue||n.doubleValue)}function Sh(n){return ra(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function g_(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ri&&i instanceof ri||r instanceof ii&&i instanceof ii?fr(r.elements,i.elements,Kt):r instanceof cs&&i instanceof cs?Kt(r.Pe,i.Pe):r instanceof ls&&i instanceof ls}(n.transform,e.transform)}class __{constructor(e,t){this.version=e,this.transformResults=t}}class At{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Cs{}function Ph(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new aa(n.key,At.none()):new di(n.key,n.data,At.none());{const t=n.data,r=_t.empty();let i=new et(Ze.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new kn(n.key,r,new It(i.toArray()),At.none())}}function v_(n,e,t){n instanceof di?function(i,s,a){const l=i.value.clone(),c=hc(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof kn?function(i,s,a){if(!Wi(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=hc(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(kh(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Qr(n,e,t,r){return n instanceof di?function(s,a,l,c){if(!Wi(s.precondition,a))return l;const h=s.value.clone(),d=dc(s.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof kn?function(s,a,l,c){if(!Wi(s.precondition,a))return l;const h=dc(s.fieldTransforms,c,a),d=a.data;return d.setAll(kh(s)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(s,a,l){return Wi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function y_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=bh(r.transform,i||null);s!=null&&(t===null&&(t=_t.empty()),t.set(r.field,s))}return t||null}function uc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&fr(r,i,(s,a)=>g_(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class di extends Cs{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kn extends Cs{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function hc(n,e,t){const r=new Map;ke(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,m_(a,l,t[i]))}return r}function dc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,p_(s,a,e))}return r}class aa extends Cs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class E_ extends Cs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class I_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&v_(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Qr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Qr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Th();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const c=Ph(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ve())}isEqual(e){return this.batchId===e.batchId&&fr(this.mutations,e.mutations,(t,r)=>uc(t,r))&&fr(this.baseMutations,e.baseMutations,(t,r)=>uc(t,r))}}class la{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ke(e.mutations.length===r.length);let i=function(){return c_}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new la(e,t,r,i)}}/**
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
 */class T_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class w_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var je,Ee;function A_(n){switch(n){default:return ae();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Dh(n){if(n===void 0)return an("GRPC error has no .code"),L.UNKNOWN;switch(n){case je.OK:return L.OK;case je.CANCELLED:return L.CANCELLED;case je.UNKNOWN:return L.UNKNOWN;case je.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case je.INTERNAL:return L.INTERNAL;case je.UNAVAILABLE:return L.UNAVAILABLE;case je.UNAUTHENTICATED:return L.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case je.NOT_FOUND:return L.NOT_FOUND;case je.ALREADY_EXISTS:return L.ALREADY_EXISTS;case je.PERMISSION_DENIED:return L.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case je.ABORTED:return L.ABORTED;case je.OUT_OF_RANGE:return L.OUT_OF_RANGE;case je.UNIMPLEMENTED:return L.UNIMPLEMENTED;case je.DATA_LOSS:return L.DATA_LOSS;default:return ae()}}(Ee=je||(je={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function b_(){return new TextEncoder}/**
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
 */const R_=new Fn([4294967295,4294967295],0);function fc(n){const e=b_().encode(n),t=new Zu;return t.update(e),new Uint8Array(t.digest())}function pc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Fn([t,r],0),new Fn([i,s],0)]}class ca{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Hr(`Invalid padding: ${t}`);if(r<0)throw new Hr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Hr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Fn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Fn.fromNumber(r)));return i.compare(R_)===1&&(i=new Fn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=fc(e),[r,i]=pc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new ca(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=fc(e),[r,i]=pc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ss{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,fi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ss(le.min(),i,new Oe(Te),ln(),ve())}}class fi{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new fi(r,t,ve(),ve(),ve())}}/**
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
 */class Ki{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Vh{constructor(e,t){this.targetId=e,this.me=t}}class Nh{constructor(e,t,r=ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class mc{constructor(){this.fe=0,this.ge=_c(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ve(),t=ve(),r=ve();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ae()}}),new fi(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=_c()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class C_{constructor(e){this.Le=e,this.Be=new Map,this.ke=ln(),this.qe=gc(),this.Qe=new Oe(Te)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Co(s))if(r===0){const a=new X(s.path);this.Ue(t,a,lt.newNoDocument(a,le.min()))}else ke(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=Hn(r).toUint8Array()}catch(c){if(c instanceof ch)return dr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ca(a,i,s)}catch(c){return dr(c instanceof Hr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&Co(l.target)){const c=new X(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,lt.newNoDocument(c,e))}s.be&&(t.set(a,s.Ce()),s.ve())}});let r=ve();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Ss(e,t,this.Qe,this.ke,r);return this.ke=ln(),this.qe=gc(),this.Qe=new Oe(Te),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new mc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new et(Te),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||Q("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new mc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function gc(){return new Oe(X.comparator)}function _c(){return new Oe(X.comparator)}const S_={asc:"ASCENDING",desc:"DESCENDING"},P_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},k_={and:"AND",or:"OR"};class D_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Po(n,e){return n.useProto3Json||Ts(e)?e:{value:e}}function us(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Oh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function V_(n,e){return us(n,e.toTimestamp())}function Ht(n){return ke(!!n),le.fromTimestamp(function(t){const r=Rn(t);return new Ke(r.seconds,r.nanos)}(n))}function ua(n,e){return ko(n,e).canonicalString()}function ko(n,e){const t=function(i){return new Pe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function xh(n){const e=Pe.fromString(n);return ke(Bh(e)),e}function Do(n,e){return ua(n.databaseId,e.path)}function uo(n,e){const t=xh(e);if(t.get(1)!==n.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(Lh(t))}function Mh(n,e){return ua(n.databaseId,e)}function N_(n){const e=xh(n);return e.length===4?Pe.emptyPath():Lh(e)}function Vo(n){return new Pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Lh(n){return ke(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function vc(n,e,t){return{name:Do(n,e),fields:t.value.mapValue.fields}}function O_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,d){return h.useProto3Json?(ke(d===void 0||typeof d=="string"),ht.fromBase64String(d||"")):(ke(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ht.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const d=h.code===void 0?L.UNKNOWN:Dh(h.code);return new W(d,h.message||"")}(a);t=new Nh(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=uo(n,r.document.name),s=Ht(r.document.updateTime),a=r.document.createTime?Ht(r.document.createTime):le.min(),l=new _t({mapValue:{fields:r.document.fields}}),c=lt.newFoundDocument(i,s,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];t=new Ki(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=uo(n,r.document),s=r.readTime?Ht(r.readTime):le.min(),a=lt.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Ki([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=uo(n,r.document),s=r.removedTargetIds||[];t=new Ki([],s,i,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new w_(i,s),l=r.targetId;t=new Vh(l,a)}}return t}function x_(n,e){let t;if(e instanceof di)t={update:vc(n,e.key,e.value)};else if(e instanceof aa)t={delete:Do(n,e.key)};else if(e instanceof kn)t={update:vc(n,e.key,e.data),updateMask:$_(e.fieldMask)};else{if(!(e instanceof E_))return ae();t={verify:Do(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof ls)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ri)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ii)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof cs)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw ae()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:V_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ae()}(n,e.precondition)),t}function M_(n,e){return n&&n.length>0?(ke(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?Ht(i.updateTime):Ht(s);return a.isEqual(le.min())&&(a=Ht(s)),new __(a,i.transformResults||[])}(t,e))):[]}function L_(n,e){return{documents:[Mh(n,e.path)]}}function U_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Mh(n,i);const s=function(h){if(h.length!==0)return Fh(Lt.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:rr(g.field),direction:j_(g.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Po(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function F_(n){let e=N_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ke(r===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(p){const g=Uh(p);return g instanceof Lt&&fh(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(g=>function(y){return new ni(ir(y.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Ts(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(p){const g=!!p.before,w=p.values||[];return new gr(w,g)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const g=!p.before,w=p.values||[];return new gr(w,g)}(t.endAt)),i_(e,i,a,s,l,"F",c,h)}function B_(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Uh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ir(t.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ir(t.unaryFilter.field);return He.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ir(t.unaryFilter.field);return He.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ir(t.unaryFilter.field);return He.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(n):n.fieldFilter!==void 0?function(t){return He.create(ir(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Lt.create(t.compositeFilter.filters.map(r=>Uh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae()}}(t.compositeFilter.op))}(n):ae()}function j_(n){return S_[n]}function q_(n){return P_[n]}function z_(n){return k_[n]}function rr(n){return{fieldPath:n.canonicalString()}}function ir(n){return Ze.fromServerFormat(n.fieldPath)}function Fh(n){return n instanceof He?function(t){if(t.op==="=="){if(ic(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NAN"}};if(rc(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ic(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NOT_NAN"}};if(rc(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rr(t.field),op:q_(t.op),value:t.value}}}(n):n instanceof Lt?function(t){const r=t.getFilters().map(i=>Fh(i));return r.length===1?r[0]:{compositeFilter:{op:z_(t.op),filters:r}}}(n):ae()}function $_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Bh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class yn{constructor(e,t,r,i,s=le.min(),a=le.min(),l=ht.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class H_{constructor(e){this.ct=e}}function G_(n){const e=F_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?as(e,e.limit,"L"):e}/**
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
 */class W_{constructor(){this._n=new K_}addToCollectionParentIndex(e,t){return this._n.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(bn.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(bn.min())}updateCollectionGroup(e,t,r){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class K_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new et(Pe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new et(Pe.comparator)).toArray()}}/**
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
 */class _r{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new _r(0)}static Ln(){return new _r(-1)}}/**
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
 */class Q_{constructor(){this.changes=new wr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?j.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class J_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Y_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Qr(r.mutation,i,It.empty(),Ke.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ve()){const i=Ln();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=$r();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ln();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ve()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=ln();const a=Kr(),l=function(){return Kr()}();return t.forEach((c,h)=>{const d=r.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof kn)?s=s.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Qr(d.mutation,h,d.mutation.getFieldMask(),Ke.now())):a.set(h.key,It.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>{var p;return l.set(h,new J_(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Kr();let i=new Oe((a,l)=>a-l),s=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let d=r.get(c)||It.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(i.get(l.batchId)||ve()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Th();d.forEach(g=>{if(!s.has(g)){const w=Ph(t.get(g),r.get(g));w!==null&&p.set(g,w),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return j.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):oa(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):j.resolve(Ln());let l=-1,c=s;return a.next(h=>j.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,ve())).next(d=>({batchId:l,changes:Ih(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(r=>{let i=$r();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=$r();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,c=>{const h=function(p,g){return new Qn(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(d=>{d.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,lt.newInvalidDocument(d)))});let l=$r();return a.forEach((c,h)=>{const d=s.get(c);d!==void 0&&Qr(d.mutation,h,It.empty(),Ke.now()),bs(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class X_{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return j.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ht(i.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:G_(i.bundledQuery),readTime:Ht(i.readTime)}}(t)),j.resolve()}}/**
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
 */class Z_{constructor(){this.overlays=new Oe(X.comparator),this.hr=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ln();return j.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),j.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),j.resolve()}getOverlaysForCollection(e,t,r){const i=Ln(),s=t.length+1,a=new X(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return j.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Oe((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=s.get(h.largestBatchId);d===null&&(d=Ln(),s=s.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Ln(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=i)););return j.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new T_(t,r));let s=this.hr.get(t);s===void 0&&(s=ve(),this.hr.set(t,s)),this.hr.set(t,s.add(r.key))}}/**
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
 */class ha{constructor(){this.Pr=new et(Qe.Ir),this.Tr=new et(Qe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new Qe(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new Qe(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new X(new Pe([])),r=new Qe(t,e),i=new Qe(t,e+1),s=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),s.push(a.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new X(new Pe([])),r=new Qe(t,e),i=new Qe(t,e+1);let s=ve();return this.Tr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new Qe(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return X.comparator(e.key,t.key)||Te(e.pr,t.pr)}static Er(e,t){return Te(e.pr,t.pr)||X.comparator(e.key,t.key)}}/**
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
 */class ev{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new et(Qe.Ir)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new I_(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.wr=this.wr.add(new Qe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(a)}lookupMutationBatch(e,t){return j.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.br(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Qe(t,0),i=new Qe(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],a=>{const l=this.Sr(a.pr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new et(Te);return t.forEach(i=>{const s=new Qe(i,0),a=new Qe(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,a],l=>{r=r.add(l.pr)})}),j.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const a=new Qe(new X(s),0);let l=new et(Te);return this.wr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.pr)),!0)},a),j.resolve(this.Dr(l))}Dr(e){const t=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ke(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return j.forEach(t.mutations,i=>{const s=new Qe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new Qe(t,0),i=this.wr.firstAfterOrEqual(r);return j.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class tv{constructor(e){this.vr=e,this.docs=function(){return new Oe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return j.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(t))}getEntries(e,t){let r=ln();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():lt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ln();const a=t.path,l=new X(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Bg(Fg(d),r)<=0||(i.has(d.key)||bs(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,t,r,i){ae()}Fr(e,t){return j.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new nv(this)}getSize(e){return j.resolve(this.size)}}class nv extends Q_{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),j.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
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
 */class rv{constructor(e){this.persistence=e,this.Mr=new wr(t=>ia(t),sa),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ha,this.targetCount=0,this.Lr=_r.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,i)=>t(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),j.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new _r(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.qn(t),j.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Mr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return j.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),j.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),j.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return j.resolve(r)}containsKey(e,t){return j.resolve(this.Nr.containsKey(t))}}/**
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
 */class iv{constructor(e,t){this.Br={},this.overlays={},this.kr=new ta(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new rv(this),this.indexManager=new W_,this.remoteDocumentCache=function(i){return new tv(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new H_(t),this.$r=new X_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Z_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new ev(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){Q("MemoryPersistence","Starting transaction:",e);const i=new sv(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,t){return j.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class sv extends qg{constructor(e){super(),this.currentSequenceNumber=e}}class da{constructor(e){this.persistence=e,this.zr=new ha,this.jr=null}static Hr(e){return new da(e)}get Jr(){if(this.jr)return this.jr;throw ae()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),j.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),j.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Jr,r=>{const i=X.fromPath(r);return this.Yr(e,i).next(s=>{s||t.removeEntry(i,le.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return j.or([()=>j.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
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
 */class fa{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=i}static Ki(e,t){let r=ve(),i=ve();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new fa(e,t.fromCache,r,i)}}/**
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
 */class ov{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class av{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return hf()?8:zg(tt())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ji(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Hi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new ov;return this.Ji(e,t,a).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,t,a,l.size)})}).next(()=>s.result)}Yi(e,t,r,i){return r.documentReadCount<this.Wi?(jr()<=ye.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",nr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),j.resolve()):(jr()<=ye.DEBUG&&Q("QueryEngine","Query:",nr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(jr()<=ye.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",nr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$t(t))):j.resolve())}ji(e,t){if(lc(t))return j.resolve(null);let r=$t(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=as(t,null,"F"),r=$t(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=ve(...s);return this.zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.Zi(t,l);return this.Xi(t,h,a,c.readTime)?this.ji(e,as(t,null,"F")):this.es(e,h,t,c)}))})))}Hi(e,t,r,i){return lc(t)||i.isEqual(le.min())?j.resolve(null):this.zi.getDocuments(e,r).next(s=>{const a=this.Zi(t,s);return this.Xi(t,a,r,i)?j.resolve(null):(jr()<=ye.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nr(t)),this.es(e,a,t,Ug(i,-1)).next(l=>l))})}Zi(e,t){let r=new et(yh(e));return t.forEach((i,s)=>{bs(e,s)&&(r=r.add(s))}),r}Xi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,t,r){return jr()<=ye.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",nr(t)),this.zi.getDocumentsMatchingQuery(e,t,bn.min(),r)}es(e,t,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class lv{constructor(e,t,r,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new Oe(Te),this.rs=new wr(s=>ia(s),sa),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Y_(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function cv(n,e,t,r){return new lv(n,e,t,r)}async function jh(n,e){const t=ue(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let c=ve();for(const h of i){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of s){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(h=>({us:h,removedBatchIds:a,addedBatchIds:l}))})})}function uv(n,e){const t=ue(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.os.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,g=p.keys();let w=j.resolve();return g.forEach(y=>{w=w.next(()=>d.getEntry(c,y)).next(b=>{const P=h.docVersions.get(y);ke(P!==null),b.version.compareTo(P)<0&&(p.applyToRemoteDocument(b,h),b.isValidDocument()&&(b.setReadTime(h.commitVersion),d.addEntry(b)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ve();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function qh(n){const e=ue(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function hv(n,e){const t=ue(n),r=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const l=[];e.targetChanges.forEach((d,p)=>{const g=i.get(p);if(!g)return;l.push(t.Qr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>t.Qr.addMatchingKeys(s,d.addedDocuments,p)));let w=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(ht.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),function(b,P,M){return b.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(g,w,d)&&l.push(t.Qr.updateTargetData(s,w))});let c=ln(),h=ve();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(dv(s,a,e.documentUpdates).next(d=>{c=d.cs,h=d.ls})),!r.isEqual(le.min())){const d=t.Qr.getLastRemoteSnapshotVersion(s).next(p=>t.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return j.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.ns=i,s))}function dv(n,e,t){let r=ve(),i=ve();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=ln();return t.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(le.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):Q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{cs:a,ls:i}})}function fv(n,e){const t=ue(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pv(n,e){const t=ue(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Qr.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):t.Qr.allocateTargetId(r).next(a=>(i=new yn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function No(n,e,t){const r=ue(n),i=r.ns.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!hi(a))throw a;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function yc(n,e,t){const r=ue(n);let i=le.min(),s=ve();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const p=ue(c),g=p.rs.get(d);return g!==void 0?j.resolve(p.ns.get(g)):p.Qr.getTargetData(h,d)}(r,a,$t(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{s=c})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,t?i:le.min(),t?s:ve())).next(l=>(mv(r,o_(e),l),{documents:l,hs:s})))}function mv(n,e,t){let r=n.ss.get(e)||le.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(e,r)}class Ec{constructor(){this.activeTargetIds=d_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gv{constructor(){this.no=new Ec,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Ec,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _v{io(e){}shutdown(){}}/**
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
 */class Ic{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ui=null;function ho(){return Ui===null?Ui=function(){return 268435456+Math.round(2147483648*Math.random())}():Ui++,"0x"+Ui.toString(16)}/**
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
 */const vv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class yv{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const ot="WebChannelConnection";class Ev extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(t,r,i,s,a){const l=ho(),c=this.vo(t,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,s,a),this.Mo(t,c,h,i).then(d=>(Q("RestConnection",`Received RPC '${t}' ${l}: `,d),d),d=>{throw dr("RestConnection",`RPC '${t}' ${l} failed with error: `,d,"url: ",c,"request:",i),d})}xo(t,r,i,s,a,l){return this.Co(t,r,i,s,a)}Fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Tr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}vo(t,r){const i=vv[t];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,i){const s=ho();return new Promise((a,l)=>{const c=new eh;c.setWithCredentials(!0),c.listenOnce(nh.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Hi.NO_ERROR:const d=c.getResponseJson();Q(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),a(d);break;case Hi.TIMEOUT:Q(ot,`RPC '${e}' ${s} timed out`),l(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case Hi.HTTP_ERROR:const p=c.getStatus();if(Q(ot,`RPC '${e}' ${s} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const y=function(P){const M=P.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(M)>=0?M:L.UNKNOWN}(w.status);l(new W(y,w.message))}else l(new W(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new W(L.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{Q(ot,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);Q(ot,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",h,r,15)})}Oo(e,t,r){const i=ho(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=sh(),l=ih(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new th({})),this.Fo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=s.join("");Q(ot,`Creating RPC '${e}' stream ${i}: ${d}`,c);const p=a.createWebChannel(d,c);let g=!1,w=!1;const y=new yv({lo:P=>{w?Q(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(g||(Q(ot,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),Q(ot,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},ho:()=>p.close()}),b=(P,M,F)=>{P.listen(M,x=>{try{F(x)}catch(B){setTimeout(()=>{throw B},0)}})};return b(p,zr.EventType.OPEN,()=>{w||(Q(ot,`RPC '${e}' stream ${i} transport opened.`),y.mo())}),b(p,zr.EventType.CLOSE,()=>{w||(w=!0,Q(ot,`RPC '${e}' stream ${i} transport closed`),y.po())}),b(p,zr.EventType.ERROR,P=>{w||(w=!0,dr(ot,`RPC '${e}' stream ${i} transport errored:`,P),y.po(new W(L.UNAVAILABLE,"The operation could not be completed")))}),b(p,zr.EventType.MESSAGE,P=>{var M;if(!w){const F=P.data[0];ke(!!F);const x=F,B=x.error||((M=x[0])===null||M===void 0?void 0:M.error);if(B){Q(ot,`RPC '${e}' stream ${i} received error:`,B);const G=B.status;let U=function(v){const E=je[v];if(E!==void 0)return Dh(E)}(G),T=B.message;U===void 0&&(U=L.INTERNAL,T="Unknown error status: "+G+" with message "+B.message),w=!0,y.po(new W(U,T)),p.close()}else Q(ot,`RPC '${e}' stream ${i} received:`,F),y.yo(F)}}),b(l,rh.STAT_EVENT,P=>{P.stat===wo.PROXY?Q(ot,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===wo.NOPROXY&&Q(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function fo(){return typeof document<"u"?document:null}/**
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
 */function Ps(n){return new D_(n,!0)}/**
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
 */class zh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class $h{constructor(e,t,r,i,s,a,l,c){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new zh(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(an(t.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===t&&this.u_(r,i)},r=>{e(()=>{const i=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Iv extends $h{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=O_(this.serializer,e),r=function(s){if(!("targetChange"in s))return le.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?le.min():a.readTime?Ht(a.readTime):le.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=Vo(this.serializer),t.addTarget=function(s,a){let l;const c=a.target;if(l=Co(c)?{documents:L_(s,c)}:{query:U_(s,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Oh(s,a.resumeToken);const h=Po(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(le.min())>0){l.readTime=us(s,a.snapshotVersion.toTimestamp());const h=Po(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=B_(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=Vo(this.serializer),t.removeTarget=e,this.i_(t)}}class Tv extends $h{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=M_(e.writeResults,e.commitTime),r=Ht(e.commitTime);return this.listener.A_(r,t)}return ke(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Vo(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>x_(this.serializer,r))};this.i_(t)}}/**
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
 */class wv extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(e,ko(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(L.UNKNOWN,s.toString())})}xo(e,t,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(e,ko(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(L.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Av{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(an(t),this.y_=!1):Q("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class bv{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(a=>{r.enqueueAndForget(async()=>{Jn(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ue(c);h.M_.add(4),await pi(h),h.N_.set("Unknown"),h.M_.delete(4),await ks(h)}(this))})}),this.N_=new Av(r,i)}}async function ks(n){if(Jn(n))for(const e of n.x_)await e(!0)}async function pi(n){for(const e of n.x_)await e(!1)}function Hh(n,e){const t=ue(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),_a(t)?ga(t):Ar(t).Xo()&&ma(t,e))}function pa(n,e){const t=ue(n),r=Ar(t);t.F_.delete(e),r.Xo()&&Gh(t,e),t.F_.size===0&&(r.Xo()?r.n_():Jn(t)&&t.N_.set("Unknown"))}function ma(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ar(n).P_(e)}function Gh(n,e){n.L_.xe(e),Ar(n).I_(e)}function ga(n){n.L_=new C_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ar(n).start(),n.N_.w_()}function _a(n){return Jn(n)&&!Ar(n).Zo()&&n.F_.size>0}function Jn(n){return ue(n).M_.size===0}function Wh(n){n.L_=void 0}async function Rv(n){n.N_.set("Online")}async function Cv(n){n.F_.forEach((e,t)=>{ma(n,e)})}async function Sv(n,e){Wh(n),_a(n)?(n.N_.D_(e),ga(n)):n.N_.set("Unknown")}async function Pv(n,e,t){if(n.N_.set("Online"),e instanceof Nh&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.F_.delete(l),i.L_.removeTarget(l))}(n,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hs(n,r)}else if(e instanceof Ki?n.L_.Ke(e):e instanceof Vh?n.L_.He(e):n.L_.We(e),!t.isEqual(le.min()))try{const r=await qh(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.L_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=s.F_.get(h);d&&s.F_.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=s.F_.get(c);if(!d)return;s.F_.set(c,d.withResumeToken(ht.EMPTY_BYTE_STRING,d.snapshotVersion)),Gh(s,c);const p=new yn(d.target,c,h,d.sequenceNumber);ma(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await hs(n,r)}}async function hs(n,e,t){if(!hi(e))throw e;n.M_.add(1),await pi(n),n.N_.set("Offline"),t||(t=()=>qh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await ks(n)})}function Kh(n,e){return e().catch(t=>hs(n,t,e))}async function Ds(n){const e=ue(n),t=Cn(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;kv(e);)try{const i=await fv(e.localStore,r);if(i===null){e.v_.length===0&&t.n_();break}r=i.batchId,Dv(e,i)}catch(i){await hs(e,i)}Qh(e)&&Jh(e)}function kv(n){return Jn(n)&&n.v_.length<10}function Dv(n,e){n.v_.push(e);const t=Cn(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function Qh(n){return Jn(n)&&!Cn(n).Zo()&&n.v_.length>0}function Jh(n){Cn(n).start()}async function Vv(n){Cn(n).V_()}async function Nv(n){const e=Cn(n);for(const t of n.v_)e.d_(t.mutations)}async function Ov(n,e,t){const r=n.v_.shift(),i=la.from(r,e,t);await Kh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ds(n)}async function xv(n,e){e&&Cn(n).E_&&await async function(r,i){if(function(a){return A_(a)&&a!==L.ABORTED}(i.code)){const s=r.v_.shift();Cn(r).t_(),await Kh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ds(r)}}(n,e),Qh(n)&&Jh(n)}async function Tc(n,e){const t=ue(n);t.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Jn(t);t.M_.add(3),await pi(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await ks(t)}async function Mv(n,e){const t=ue(n);e?(t.M_.delete(2),await ks(t)):e||(t.M_.add(2),await pi(t),t.N_.set("Unknown"))}function Ar(n){return n.B_||(n.B_=function(t,r,i){const s=ue(t);return s.f_(),new Iv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:Rv.bind(null,n),To:Cv.bind(null,n),Ao:Sv.bind(null,n),h_:Pv.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),_a(n)?ga(n):n.N_.set("Unknown")):(await n.B_.stop(),Wh(n))})),n.B_}function Cn(n){return n.k_||(n.k_=function(t,r,i){const s=ue(t);return s.f_(),new Tv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Vv.bind(null,n),Ao:xv.bind(null,n),R_:Nv.bind(null,n),A_:Ov.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await Ds(n)):(await n.k_.stop(),n.v_.length>0&&(Q("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class va{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new va(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ya(n,e){if(an("AsyncQueue",`${e}: ${n}`),hi(n))return new W(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class cr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=$r(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new cr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof cr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new cr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class wc{constructor(){this.q_=new Oe(X.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):ae():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class vr{constructor(e,t,r,i,s,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new vr(e,t,cr.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&As(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Lv{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class Uv{constructor(){this.queries=new wr(e=>vh(e),As),this.onlineState="Unknown",this.z_=new Set}}async function Fv(n,e){const t=ue(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new Lv,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await t.onListen(i,!0);break;case 1:s.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=ya(a,`Initialization of query '${nr(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.U_.push(e),e.j_(t.onlineState),s.K_&&e.H_(s.K_)&&Ea(t)}async function Bv(n,e){const t=ue(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.U_.indexOf(e);a>=0&&(s.U_.splice(a,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function jv(n,e){const t=ue(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.U_)l.H_(i)&&(r=!0);a.K_=i}}r&&Ea(t)}function qv(n,e,t){const r=ue(n),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(t);r.queries.delete(e)}function Ea(n){n.z_.forEach(e=>{e.next()})}var Oo,Ac;(Ac=Oo||(Oo={})).J_="default",Ac.Cache="cache";class zv{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Oo.Cache}}/**
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
 */class Yh{constructor(e){this.key=e}}class Xh{constructor(e){this.key=e}}class $v{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ve(),this.mutatedKeys=ve(),this.Ia=yh(e),this.Ta=new cr(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new wc,i=t?t.Ta:this.Ta;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const g=i.get(d),w=bs(this.query,p)?p:null,y=!!g&&this.mutatedKeys.has(g.key),b=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let P=!1;g&&w?g.data.isEqual(w.data)?y!==b&&(r.track({type:3,doc:w}),P=!0):this.Ra(g,w)||(r.track({type:2,doc:w}),P=!0,(c&&this.Ia(w,c)>0||h&&this.Ia(w,h)<0)&&(l=!0)):!g&&w?(r.track({type:0,doc:w}),P=!0):g&&!w&&(r.track({type:1,doc:g}),P=!0,(c||h)&&(l=!0)),P&&(w?(a=a.add(w),s=b?s.add(d):s.delete(d)):(a=a.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((d,p)=>function(w,y){const b=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return b(w)-b(y)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),i=i!=null&&i;const l=t&&!i?this.ma():[],c=this.Pa.size===0&&this.current&&!i?1:0,h=c!==this.ha;return this.ha=c,a.length!==0||h?{snapshot:new vr(this.query,e.Ta,s,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new wc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ve(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new Xh(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new Yh(r))}),t}pa(e){this.la=e.hs,this.Pa=ve();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return vr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Hv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Gv{constructor(e){this.key=e,this.wa=!1}}class Wv{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new wr(l=>vh(l),As),this.Da=new Map,this.Ca=new Set,this.va=new Oe(X.comparator),this.Fa=new Map,this.Ma=new ha,this.xa={},this.Oa=new Map,this.Na=_r.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Kv(n,e,t=!0){const r=id(n);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await Zh(r,e,t,!0),i}async function Qv(n,e){const t=id(n);await Zh(t,e,!0,!1)}async function Zh(n,e,t,r){const i=await pv(n.localStore,$t(e)),s=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await Jv(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Hh(n.remoteStore,i),l}async function Jv(n,e,t,r,i){n.Ba=(p,g,w)=>async function(b,P,M,F){let x=P.view.da(M);x.Xi&&(x=await yc(b.localStore,P.query,!1).then(({documents:T})=>P.view.da(T,x)));const B=F&&F.targetChanges.get(P.targetId),G=F&&F.targetMismatches.get(P.targetId)!=null,U=P.view.applyChanges(x,b.isPrimaryClient,B,G);return Rc(b,P.targetId,U.fa),U.snapshot}(n,p,g,w);const s=await yc(n.localStore,e,!0),a=new $v(e,s.hs),l=a.da(s.documents),c=fi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,c);Rc(n,t,h.fa);const d=new Hv(e,t,a);return n.ba.set(e,d),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),h.snapshot}async function Yv(n,e,t){const r=ue(n),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(a=>!As(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await No(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&pa(r.remoteStore,i.targetId),xo(r,i.targetId)}).catch(ui)):(xo(r,i.targetId),await No(r.localStore,i.targetId,!0))}async function Xv(n,e){const t=ue(n),r=t.ba.get(e),i=t.Da.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),pa(t.remoteStore,r.targetId))}async function Zv(n,e,t){const r=oy(n);try{const i=await function(a,l){const c=ue(a),h=Ke.now(),d=l.reduce((w,y)=>w.add(y.key),ve());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let y=ln(),b=ve();return c.os.getEntries(w,d).next(P=>{y=P,y.forEach((M,F)=>{F.isValidDocument()||(b=b.add(M))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,y)).next(P=>{p=P;const M=[];for(const F of l){const x=y_(F,p.get(F.key).overlayedDocument);x!=null&&M.push(new kn(F.key,x,uh(x.value.mapValue),At.exists(!0)))}return c.mutationQueue.addMutationBatch(w,h,M,l)}).next(P=>{g=P;const M=P.applyToLocalDocumentSet(p,b);return c.documentOverlayCache.saveOverlays(w,P.batchId,M)})}).then(()=>({batchId:g.batchId,changes:Ih(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let h=a.xa[a.currentUser.toKey()];h||(h=new Oe(Te)),h=h.insert(l,c),a.xa[a.currentUser.toKey()]=h}(r,i.batchId,t),await mi(r,i.changes),await Ds(r.remoteStore)}catch(i){const s=ya(i,"Failed to persist write");t.reject(s)}}async function ed(n,e){const t=ue(n);try{const r=await hv(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Fa.get(s);a&&(ke(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?ke(a.wa):i.removedDocuments.size>0&&(ke(a.wa),a.wa=!1))}),await mi(t,r,e)}catch(r){await ui(r)}}function bc(n,e,t){const r=ue(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ba.forEach((s,a)=>{const l=a.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=ue(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const g of p.U_)g.j_(l)&&(h=!0)}),h&&Ea(c)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ey(n,e,t){const r=ue(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Fa.get(e),s=i&&i.key;if(s){let a=new Oe(X.comparator);a=a.insert(s,lt.newNoDocument(s,le.min()));const l=ve().add(s),c=new Ss(le.min(),new Map,new Oe(Te),a,l);await ed(r,c),r.va=r.va.remove(s),r.Fa.delete(e),Ia(r)}else await No(r.localStore,e,!1).then(()=>xo(r,e,t)).catch(ui)}async function ty(n,e){const t=ue(n),r=e.batch.batchId;try{const i=await uv(t.localStore,e);nd(t,r,null),td(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await mi(t,i)}catch(i){await ui(i)}}async function ny(n,e,t){const r=ue(n);try{const i=await function(a,l){const c=ue(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(ke(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);nd(r,e,t),td(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await mi(r,i)}catch(i){await ui(i)}}function td(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function nd(n,e,t){const r=ue(n);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function xo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||rd(n,r)})}function rd(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(pa(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),Ia(n))}function Rc(n,e,t){for(const r of t)r instanceof Yh?(n.Ma.addReference(r.key,e),ry(n,r)):r instanceof Xh?(Q("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||rd(n,r.key)):ae()}function ry(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(Q("SyncEngine","New document in limbo: "+t),n.Ca.add(r),Ia(n))}function Ia(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new X(Pe.fromString(e)),r=n.Na.next();n.Fa.set(r,new Gv(t)),n.va=n.va.insert(t,r),Hh(n.remoteStore,new yn($t(_h(t.path)),r,"TargetPurposeLimboResolution",ta.oe))}}async function mi(n,e,t){const r=ue(n),i=[],s=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,c)=>{a.push(r.Ba(c,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const d=h&&!h.fromCache;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(h){i.push(h);const d=fa.Ki(c.targetId,h);s.push(d)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(c,h){const d=ue(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(h,g=>j.forEach(g.qi,w=>d.persistence.referenceDelegate.addReference(p,g.targetId,w)).next(()=>j.forEach(g.Qi,w=>d.persistence.referenceDelegate.removeReference(p,g.targetId,w)))))}catch(p){if(!hi(p))throw p;Q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const w=d.ns.get(g),y=w.snapshotVersion,b=w.withLastLimboFreeSnapshotVersion(y);d.ns=d.ns.insert(g,b)}}}(r.localStore,s))}async function iy(n,e){const t=ue(n);if(!t.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await jh(t.localStore,e);t.currentUser=e,function(s,a){s.Oa.forEach(l=>{l.forEach(c=>{c.reject(new W(L.CANCELLED,a))})}),s.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mi(t,r.us)}}function sy(n,e){const t=ue(n),r=t.Fa.get(e);if(r&&r.wa)return ve().add(r.key);{let i=ve();const s=t.Da.get(e);if(!s)return i;for(const a of s){const l=t.ba.get(a);i=i.unionWith(l.view.Ea)}return i}}function id(n){const e=ue(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ed.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ey.bind(null,e),e.Sa.h_=jv.bind(null,e.eventManager),e.Sa.ka=qv.bind(null,e.eventManager),e}function oy(n){const e=ue(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ty.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ny.bind(null,e),e}class Cc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ps(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return cv(this.persistence,new av,e.initialUser,this.serializer)}createPersistence(e){return new iv(da.Hr,this.serializer)}createSharedClientState(e){return new gv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ay{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iy.bind(null,this.syncEngine),await Mv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Uv}()}createDatastore(e){const t=Ps(e.databaseInfo.databaseId),r=function(s){return new Ev(s)}(e.databaseInfo);return function(s,a,l,c){return new wv(s,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new bv(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>bc(this.syncEngine,t,0),function(){return Ic.D()?new Ic:new _v}())}createSyncEngine(e,t){return function(i,s,a,l,c,h,d){const p=new Wv(i,s,a,l,c,h);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const i=ue(r);Q("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await pi(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 *//**
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
 */class ly{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):an("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class cy{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=ah.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ya(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function po(n,e){n.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Sc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await hy(n);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Tc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Tc(e.remoteStore,i)),n._onlineComponents=e}function uy(n){return n.name==="FirebaseError"?n.code===L.FAILED_PRECONDITION||n.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function hy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await po(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!uy(t))throw t;dr("Error using user provided cache. Falling back to memory cache: "+t),await po(n,new Cc)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await po(n,new Cc);return n._offlineComponents}async function sd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await Sc(n,n._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await Sc(n,new ay))),n._onlineComponents}function dy(n){return sd(n).then(e=>e.syncEngine)}async function fy(n){const e=await sd(n),t=e.eventManager;return t.onListen=Kv.bind(null,e.syncEngine),t.onUnlisten=Yv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Qv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Xv.bind(null,e.syncEngine),t}function py(n,e,t={}){const r=new wn;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,h){const d=new ly({next:g=>{a.enqueueAndForget(()=>Bv(s,p)),g.fromCache&&c.source==="server"?h.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new zv(l,d,{includeMetadataChanges:!0,ra:!0});return Fv(s,p)}(await fy(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function od(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Pc=new Map;/**
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
 */function ad(n,e,t){if(!t)throw new W(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function my(n,e,t,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function kc(n){if(!X.isDocumentKey(n))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Dc(n){if(X.isDocumentKey(n))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Vs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ae()}function cn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vs(n);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function gy(n,e){if(e<=0)throw new W(L.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Vc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}my("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=od((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ns{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Pg;switch(r.type){case"firstParty":return new Ng(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Pc.get(t);r&&(Q("ComponentProvider","Removing Datastore"),Pc.delete(t),r.terminate())}(this),Promise.resolve()}}function _y(n,e,t,r={}){var i;const s=(n=cn(n,Ns))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=at.MOCK_USER;else{l=sf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new at(h)}n._authCredentials=new kg(new oh(l,c))}}/**
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
 */class hn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hn(this.firestore,e,this._query)}}class vt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new An(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class An extends hn{constructor(e,t,r){super(e,t,_h(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new X(e))}withConverter(e){return new An(this.firestore,e,this._path)}}function ft(n,e,...t){if(n=Je(n),ad("collection","path",e),n instanceof Ns){const r=Pe.fromString(e,...t);return Dc(r),new An(n,null,r)}{if(!(n instanceof vt||n instanceof An))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Pe.fromString(e,...t));return Dc(r),new An(n.firestore,null,r)}}function Wn(n,e,...t){if(n=Je(n),arguments.length===1&&(e=ah.newId()),ad("doc","path",e),n instanceof Ns){const r=Pe.fromString(e,...t);return kc(r),new vt(n,null,new X(r))}{if(!(n instanceof vt||n instanceof An))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Pe.fromString(e,...t));return kc(r),new vt(n.firestore,n instanceof An?n.converter:null,new X(r))}}/**
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
 */class vy{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new zh(this,"async_queue_retry"),this.hu=()=>{const t=fo();t&&Q("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=fo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=fo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new wn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!hi(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw an("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const i=va.createAndSchedule(this,e,t,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ae()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class br extends Ns{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new vy}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cd(this),this._firestoreClient.terminate()}}function yy(n,e){const t=typeof n=="object"?n:Eu(),r=typeof n=="string"?n:"(default)",i=jo(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nf("firestore");s&&_y(i,...s)}return i}function ld(n){return n._firestoreClient||cd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function cd(n){var e,t,r;const i=n._freezeSettings(),s=function(l,c,h,d){return new Gg(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,od(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new cy(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yr(ht.fromBase64String(e))}catch(t){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yr(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Os{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ta{constructor(e){this._methodName=e}}/**
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
 */class wa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */const Ey=/^__.*__$/;class Iy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kn(e,this.data,this.fieldMask,t,this.fieldTransforms):new di(e,this.data,t,this.fieldTransforms)}}class ud{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new kn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class Aa{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Aa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return ds(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(hd(this.fu)&&Ey.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Ty{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ps(e)}Fu(e,t,r,i=!1){return new Aa({fu:e,methodName:t,vu:r,path:Ze.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gi(n){const e=n._freezeSettings(),t=Ps(n._databaseId);return new Ty(n._databaseId,!!e.ignoreUndefinedProperties,t)}function dd(n,e,t,r,i,s={}){const a=n.Fu(s.merge||s.mergeFields?2:0,e,t,i);ba("Data must be an object, but it was:",a,r);const l=pd(r,a);let c,h;if(s.merge)c=new It(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const g=Mo(e,p,t);if(!a.contains(g))throw new W(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);gd(d,g)||d.push(g)}c=new It(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new Iy(new _t(l),c,h)}class xs extends Ta{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xs}}function wy(n,e,t,r){const i=n.Fu(1,e,t);ba("Data must be an object, but it was:",i,r);const s=[],a=_t.empty();Kn(r,(c,h)=>{const d=Ra(e,c,t);h=Je(h);const p=i.Su(d);if(h instanceof xs)s.push(d);else{const g=_i(h,p);g!=null&&(s.push(d),a.set(d,g))}});const l=new It(s);return new ud(a,l,i.fieldTransforms)}function Ay(n,e,t,r,i,s){const a=n.Fu(1,e,t),l=[Mo(e,r,t)],c=[i];if(s.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Mo(e,s[g])),c.push(s[g+1]);const h=[],d=_t.empty();for(let g=l.length-1;g>=0;--g)if(!gd(h,l[g])){const w=l[g];let y=c[g];y=Je(y);const b=a.Su(w);if(y instanceof xs)h.push(w);else{const P=_i(y,b);P!=null&&(h.push(w),d.set(w,P))}}const p=new It(h);return new ud(d,p,a.fieldTransforms)}function fd(n,e,t,r=!1){return _i(t,n.Fu(r?4:3,e))}function _i(n,e){if(md(n=Je(n)))return ba("Unsupported field value:",e,n),pd(n,e);if(n instanceof Ta)return function(r,i){if(!hd(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let c=_i(l,i.bu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return f_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ke.fromDate(r);return{timestampValue:us(i.serializer,s)}}if(r instanceof Ke){const s=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:us(i.serializer,s)}}if(r instanceof wa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yr)return{bytesValue:Oh(i.serializer,r._byteString)};if(r instanceof vt){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ua(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Vs(r)}`)}(n,e)}function pd(n,e){const t={};return lh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kn(n,(r,i)=>{const s=_i(i,e.pu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function md(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ke||n instanceof wa||n instanceof yr||n instanceof vt||n instanceof Ta)}function ba(n,e,t){if(!md(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Vs(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function Mo(n,e,t){if((e=Je(e))instanceof Os)return e._internalPath;if(typeof e=="string")return Ra(n,e);throw ds("Field path arguments must be of type string or ",n,!1,void 0,t)}const by=new RegExp("[~\\*/\\[\\]]");function Ra(n,e,t){if(e.search(by)>=0)throw ds(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Os(...e.split("."))._internalPath}catch{throw ds(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ds(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new W(L.INVALID_ARGUMENT,l+n+c)}function gd(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ca{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ry(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ms("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ry extends Ca{data(){return super.data()}}function Ms(n,e){return typeof e=="string"?Ra(n,e):e instanceof Os?e._internalPath:e._delegate._internalPath}/**
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
 */function Cy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sa{}class Ls extends Sa{}function Gt(n,e,...t){let r=[];e instanceof Sa&&r.push(e),r=r.concat(t),function(s){const a=s.filter(c=>c instanceof Pa).length,l=s.filter(c=>c instanceof Us).length;if(a>1||a>0&&l>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Us extends Ls{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Us(e,t,r)}_apply(e){const t=this._parse(e);return _d(e._query,t),new hn(e.firestore,e.converter,So(e._query,t))}_parse(e){const t=gi(e.firestore);return function(s,a,l,c,h,d,p){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Oc(p,d);const w=[];for(const y of p)w.push(Nc(c,s,y));g={arrayValue:{values:w}}}else g=Nc(c,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Oc(p,d),g=fd(l,a,p,d==="in"||d==="not-in");return He.create(h,d,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Bn(n,e,t){const r=e,i=Ms("where",n);return Us._create(i,r,t)}class Pa extends Sa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Pa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Lt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const c of l)_d(a,c),a=So(a,c)}(e._query,t),new hn(e.firestore,e.converter,So(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ka extends Ls{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ka(e,t)}_apply(e){const t=function(i,s,a){if(i.startAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ni(s,a)}(e._query,this._field,this._direction);return new hn(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new Qn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function fs(n,e="asc"){const t=e,r=Ms("orderBy",n);return ka._create(r,t)}class Da extends Ls{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Da(e,t,r)}_apply(e){return new hn(e.firestore,e.converter,as(e._query,this._limit,this._limitType))}}function Lo(n){return gy("limit",n),Da._create("limit",n,"F")}class Va extends Ls{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Va(e,t,r)}_apply(e){const t=Py(e,this.type,this._docOrFields,this._inclusive);return new hn(e.firestore,e.converter,function(i,s){return new Qn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function Sy(...n){return Va._create("startAfter",n,!1)}function Py(n,e,t,r){if(t[0]=Je(t[0]),t[0]instanceof Ca)return function(s,a,l,c,h){if(!c)throw new W(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const d=[];for(const p of lr(s))if(p.field.isKeyField())d.push(os(a,c.key));else{const g=c.data.field(p.field);if(ws(g))throw new W(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const w=p.field.canonicalString();throw new W(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${w}' (used as the orderBy) does not exist.`)}d.push(g)}return new gr(d,h)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=gi(n.firestore);return function(a,l,c,h,d,p){const g=a.explicitOrderBy;if(d.length>g.length)throw new W(L.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const w=[];for(let y=0;y<d.length;y++){const b=d[y];if(g[y].field.isKeyField()){if(typeof b!="string")throw new W(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof b}`);if(!oa(a)&&b.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${b}' contains a slash.`);const P=a.path.child(Pe.fromString(b));if(!X.isDocumentKey(P))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const M=new X(P);w.push(os(l,M))}else{const P=fd(c,h,b);w.push(P)}}return new gr(w,p)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Nc(n,e,t){if(typeof(t=Je(t))=="string"){if(t==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oa(e)&&t.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Pe.fromString(t));if(!X.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return os(n,new X(r))}if(t instanceof vt)return os(n,t._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vs(t)}.`)}function Oc(n,e){if(!Array.isArray(n)||n.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _d(n,e){const t=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ky{convertValue(e,t="none"){switch(Gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ae()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Kn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new wa($e(e.latitude),$e(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=na(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Zr(e));default:return null}}convertTimestamp(e){const t=Rn(e);return new Ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Pe.fromString(e);ke(Bh(r));const i=new ei(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(t)||an(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function vd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class Fi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dy extends Ca{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ms("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Qi extends Dy{data(e={}){return super.data(e)}}class Vy{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Fi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Qi(this._firestore,this._userDataWriter,r.key,r,new Fi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const c=new Qi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Fi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Qi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Fi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:Ny(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ny(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}class Oy extends ky{constructor(e){super(),this.firestore=e}convertBytes(e){return new yr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,t)}}function Mt(n){n=cn(n,hn);const e=cn(n.firestore,br),t=ld(e),r=new Oy(e);return Cy(n._query),py(t,n._query).then(i=>new Vy(e,r,n,i))}function xy(n,e,t){n=cn(n,vt);const r=cn(n.firestore,br),i=vd(n.converter,e,t);return Bs(r,[dd(gi(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,At.none())])}function My(n,e,t,...r){n=cn(n,vt);const i=cn(n.firestore,br),s=gi(i);let a;return a=typeof(e=Je(e))=="string"||e instanceof Os?Ay(s,"updateDoc",n._key,e,t,r):wy(s,"updateDoc",n._key,e),Bs(i,[a.toMutation(n._key,At.exists(!0))])}function ps(n){return Bs(cn(n.firestore,br),[new aa(n._key,At.none())])}function Fs(n,e){const t=cn(n.firestore,br),r=Wn(n),i=vd(n.converter,e);return Bs(t,[dd(gi(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,At.exists(!1))]).then(()=>r)}function Bs(n,e){return function(r,i){const s=new wn;return r.asyncQueue.enqueueAndForget(async()=>Zv(await dy(r),i,s)),s.promise}(ld(n),e)}(function(e,t=!0){(function(i){Tr=i})(Er),ur(new jn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new br(new Dg(r.getProvider("auth-internal")),new xg(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ei(h.options.projectId,d)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Tn(Zl,"4.6.3",e),Tn(Zl,"4.6.3","esm2017")})();const Ly={apiKey:"AIzaSyCmUmIV1VPwO6ES8HYRVilL0y7Oe51a93k",authDomain:"prohost-9406a.firebaseapp.com",projectId:"prohost-9406a",storageBucket:"prohost-9406a.appspot.com",messagingSenderId:"976489526771",appId:"1:976489526771:web:5cd8ead6af96db8f110e86"},yd=yu(Ly),ms=is(yd),Le=yy(yd),_e=gs(0),qr=gs(0),Uo=gs(0),Uy=gs(0),Fy=""+new URL("../assets/logo.gtldxAIb.png",import.meta.url).href;function xc(n,e,t){const r=n.slice();return r[48]=e[t],r}function Mc(n,e,t){const r=n.slice();return r[51]=e[t],r}function Lc(n){let e,t="추가",r,i,s="채택",a,l,c="삭제",h,d,p="문제신고 확인",g,w;return{c(){e=D("button"),e.textContent=t,r=q(),i=D("button"),i.textContent=s,a=q(),l=D("button"),l.textContent=c,h=q(),d=D("button"),d.textContent=p,this.h()},l(y){e=V(y,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(e)!=="svelte-1lsf66u"&&(e.textContent=t),r=z(y),i=V(y,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(i)!=="svelte-gljqo6"&&(i.textContent=s),a=z(y),l=V(y,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(l)!=="svelte-1ipyraa"&&(l.textContent=c),h=z(y),d=V(y,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(d)!=="svelte-18d8umu"&&(d.textContent=p),this.h()},h(){R(e,"class","top-right-button0 svelte-1y3j7h"),R(i,"class","top-right-button svelte-1y3j7h"),R(l,"class","top-right-button6 svelte-1y3j7h"),R(d,"class","top-right-button8 svelte-1y3j7h")},m(y,b){Y(y,e,b),Y(y,r,b),Y(y,i,b),Y(y,a,b),Y(y,l,b),Y(y,h,b),Y(y,d,b),g||(w=[K(e,"click",n[14]),K(i,"click",n[10]),K(l,"click",n[11]),K(d,"click",n[21])],g=!0)},p:we,d(y){y&&(N(e),N(r),N(i),N(a),N(l),N(h),N(d)),g=!1,Rt(w)}}}function Uc(n){let e,t=n[51]+"",r,i,s;return{c(){e=D("div"),r=Re(t),this.h()},l(a){e=V(a,"DIV",{class:!0});var l=$(e);r=Ce(l,t),l.forEach(N),this.h()},h(){R(e,"class","ranking-item svelte-1y3j7h")},m(a,l){Y(a,e,l),A(e,r),i||(s=K(e,"click",function(){Gd(n[15](n[51]))&&n[15](n[51]).apply(this,arguments)}),i=!0)},p(a,l){n=a,l[0]&128&&t!==(t=n[51]+"")&&Ge(r,t)},d(a){a&&N(e),i=!1,s()}}}function Fc(n){let e,t=ut(n[0]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Bc(xc(n,t,i));return{c(){e=D("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=V(i,"DIV",{class:!0});var s=$(e);for(let a=0;a<r.length;a+=1)r[a].l(s);s.forEach(N),this.h()},h(){R(e,"class","search-history svelte-1y3j7h")},m(i,s){Y(i,e,s);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null)},p(i,s){if(s[0]&1048577){t=ut(i[0]);let a;for(a=0;a<t.length;a+=1){const l=xc(i,t,a);r[a]?r[a].p(l,s):(r[a]=Bc(l),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}},d(i){i&&N(e),Pn(r,i)}}}function Bc(n){let e,t=n[48]+"",r,i,s;function a(){return n[30](n[48])}return{c(){e=D("div"),r=Re(t),this.h()},l(l){e=V(l,"DIV",{class:!0});var c=$(e);r=Ce(c,t),c.forEach(N),this.h()},h(){R(e,"class","history-item svelte-1y3j7h")},m(l,c){Y(l,e,c),A(e,r),i||(s=K(e,"click",a),i=!0)},p(l,c){n=l,c[0]&1&&t!==(t=n[48]+"")&&Ge(r,t)},d(l){l&&N(e),i=!1,s()}}}function jc(n){let e,t,r,i,s="Close",a,l,c=!n[5]&&qc();return{c(){e=D("div"),t=D("div"),c&&c.c(),r=q(),i=D("button"),i.textContent=s,this.h()},l(h){e=V(h,"DIV",{class:!0});var d=$(e);t=V(d,"DIV",{class:!0});var p=$(t);c&&c.l(p),r=z(p),i=V(p,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(i)!=="svelte-au4vm5"&&(i.textContent=s),p.forEach(N),d.forEach(N),this.h()},h(){R(i,"class","close-button svelte-1y3j7h"),R(t,"class","modal svelte-1y3j7h"),R(e,"class","modal-background svelte-1y3j7h")},m(h,d){Y(h,e,d),A(e,t),c&&c.m(t,null),A(t,r),A(t,i),a||(l=[K(i,"click",n[19]),K(t,"click",Kd(n[26])),K(e,"click",n[19])],a=!0)},p(h,d){h[5]?c&&(c.d(1),c=null):c||(c=qc(),c.c(),c.m(t,r))},d(h){h&&N(e),c&&c.d(),a=!1,Rt(l)}}}function qc(n){let e,t="아직 추가되지 않은 단어입니다..";return{c(){e=D("div"),e.textContent=t,this.h()},l(r){e=V(r,"DIV",{class:!0,"data-svelte-h":!0}),ee(e)!=="svelte-1tgxuji"&&(e.textContent=t),this.h()},h(){R(e,"class","modal-explain svelte-1y3j7h")},m(r,i){Y(r,e,i)},d(r){r&&N(e)}}}function By(n){let e,t,r='<h1 id="logo_text" class="svelte-1y3j7h">신한사</h1>',i,s,a,l,c,h,d,p,g,w,y,b,P,M,F="모든 단어 보러가기",x,B,G="로그아웃",U,T,_="단어 신청",v,E,C="문제 신고",S,I,ne,te,ie,Z,re,ce,fe="나의 신조어 점수는?<br/>확인하러가기",he,me,pe="게임 하기",nt,gt="게임 랭킹",Pt,xe,J,De="실시간 랭킹 TOP3",Ne,rt,yt,Tt,Qt,wt,kt,vi='<span class="ex_te svelte-1y3j7h">신한사의 모든 단어들은 사람들의 설문에 의해 만들어졌으며, 설명글은 사람들의 설문과 GPT-4o에 의해 만들어졌습니다.</span> <span class="ex_te2 svelte-1y3j7h">신한사의 모든 단어들이 가진 성향은 신한사와 관련이 있지 않습니다.</span>',Rr,Cr,Ue=n[6]=="host.wproject00@gmail.com"&&Lc(n),Jt=ut(n[7]),We=[];for(let ge=0;ge<Jt.length;ge+=1)We[ge]=Uc(Mc(n,Jt,ge));let Fe=n[1]&&n[0].length>0&&Fc(n),Be=n[2]&&jc(n);return{c(){e=D("div"),t=D("div"),t.innerHTML=r,i=q(),s=D("img"),l=q(),c=D("button"),h=D("div"),d=q(),p=D("div"),g=q(),w=D("div"),y=q(),b=D("div"),P=D("div"),M=D("span"),M.textContent=F,x=q(),B=D("button"),B.textContent=G,U=q(),T=D("button"),T.textContent=_,v=q(),E=D("button"),E.textContent=C,S=q(),Ue&&Ue.c(),I=q(),ne=D("div"),te=D("input"),ie=q(),Z=D("div"),re=D("div"),ce=D("p"),ce.innerHTML=fe,he=Re("    "),me=D("span"),me.textContent=pe,nt=D("span"),nt.textContent=gt,Pt=q(),xe=D("div"),J=D("h3"),J.textContent=De,Ne=q(),rt=D("br"),yt=q();for(let ge=0;ge<We.length;ge+=1)We[ge].c();Tt=q(),Fe&&Fe.c(),Qt=q(),Be&&Be.c(),wt=q(),kt=D("div"),kt.innerHTML=vi,this.h()},l(ge){e=V(ge,"DIV",{id:!0,class:!0});var se=$(e);t=V(se,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-1s1wxsl"&&(t.innerHTML=r),i=z(se),s=V(se,"IMG",{class:!0,src:!0,alt:!0}),l=z(se),c=V(se,"BUTTON",{id:!0,class:!0});var de=$(c);h=V(de,"DIV",{class:!0}),$(h).forEach(N),d=z(de),p=V(de,"DIV",{class:!0}),$(p).forEach(N),g=z(de),w=V(de,"DIV",{class:!0}),$(w).forEach(N),de.forEach(N),y=z(se),b=V(se,"DIV",{class:!0});var qt=$(b);P=V(qt,"DIV",{class:!0});var Dt=$(P);M=V(Dt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),ee(M)!=="svelte-onli1k"&&(M.textContent=F),x=z(Dt),B=V(Dt,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),ee(B)!=="svelte-1a7h9s"&&(B.textContent=G),U=z(Dt),T=V(Dt,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),ee(T)!=="svelte-lgs35r"&&(T.textContent=_),v=z(Dt),E=V(Dt,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),ee(E)!=="svelte-13wzyr"&&(E.textContent=C),Dt.forEach(N),qt.forEach(N),S=z(se),Ue&&Ue.l(se),I=z(se),ne=V(se,"DIV",{class:!0});var Vt=$(ne);te=V(Vt,"INPUT",{type:!0,autocomplete:!0,id:!0,class:!0,placeholder:!0}),ie=z(Vt),Z=V(Vt,"DIV",{id:!0,class:!0});var yi=$(Z);re=V(yi,"DIV",{id:!0,class:!0});var Nt=$(re);ce=V(Nt,"P",{id:!0,class:!0,"data-svelte-h":!0}),ee(ce)!=="svelte-meo4vc"&&(ce.innerHTML=fe),he=Ce(Nt,"    "),me=V(Nt,"SPAN",{class:!0,"data-svelte-h":!0}),ee(me)!=="svelte-8hx3qv"&&(me.textContent=pe),nt=V(Nt,"SPAN",{class:!0,"data-svelte-h":!0}),ee(nt)!=="svelte-17o049q"&&(nt.textContent=gt),Nt.forEach(N),yi.forEach(N),Pt=z(Vt),xe=V(Vt,"DIV",{class:!0});var Yt=$(xe);J=V(Yt,"H3",{style:!0,"data-svelte-h":!0}),ee(J)!=="svelte-1ixehmd"&&(J.textContent=De),Ne=z(Yt),rt=V(Yt,"BR",{}),yt=z(Yt);for(let Yn=0;Yn<We.length;Yn+=1)We[Yn].l(Yt);Yt.forEach(N),Tt=z(Vt),Fe&&Fe.l(Vt),Vt.forEach(N),Qt=z(se),Be&&Be.l(se),wt=z(se),kt=V(se,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),ee(kt)!=="svelte-1b9tnz3"&&(kt.innerHTML=vi),se.forEach(N),this.h()},h(){R(t,"id","logo_div"),R(t,"class","svelte-1y3j7h"),R(s,"class","logo_img svelte-1y3j7h"),Hd(s.src,a=Fy)||R(s,"src",a),R(s,"alt","logo"),R(h,"class","svelte-1y3j7h"),qe(h,"active",n[8]),R(p,"class","svelte-1y3j7h"),qe(p,"active",n[8]),R(w,"class","svelte-1y3j7h"),qe(w,"active",n[8]),R(c,"id","menu-button"),R(c,"class","hamburger svelte-1y3j7h"),ze(M,"position","relative"),ze(M,"top","50px"),R(M,"class","svelte-1y3j7h"),R(B,"class","top-right-button2 svelte-1y3j7h"),ze(B,"position","relative"),ze(B,"top","270px"),ze(B,"left","0px"),R(T,"class","top-right-button3 svelte-1y3j7h"),ze(T,"position","relative"),ze(T,"top","0px"),ze(T,"left","0px"),R(E,"class","top-right-button7 svelte-1y3j7h"),ze(E,"position","relative"),ze(E,"top","15px"),ze(E,"left","0px"),R(P,"class","sidebar-content svelte-1y3j7h"),R(b,"class","sidebar svelte-1y3j7h"),qe(b,"visible",n[8]),R(te,"type","text"),R(te,"autocomplete","off"),R(te,"id","sb"),R(te,"class","search-bar svelte-1y3j7h"),R(te,"placeholder","검색..."),te.value=n[3],R(ce,"id","lo"),R(ce,"class","svelte-1y3j7h"),R(me,"class","svelte-1y3j7h"),R(nt,"class","svelte-1y3j7h"),R(re,"id","logo"),R(re,"class","svelte-1y3j7h"),R(Z,"id","game-box"),R(Z,"class","svelte-1y3j7h"),ze(J,"color","white"),R(xe,"class","ranking-container svelte-1y3j7h"),R(ne,"class","search-container svelte-1y3j7h"),R(kt,"id","exp"),R(kt,"class","svelte-1y3j7h"),R(e,"id","condiv"),R(e,"class","svelte-1y3j7h")},m(ge,se){Y(ge,e,se),A(e,t),A(e,i),A(e,s),A(e,l),A(e,c),A(c,h),A(c,d),A(c,p),A(c,g),A(c,w),A(e,y),A(e,b),A(b,P),A(P,M),A(P,x),A(P,B),A(P,U),A(P,T),A(P,v),A(P,E),A(e,S),Ue&&Ue.m(e,null),A(e,I),A(e,ne),A(ne,te),A(ne,ie),A(ne,Z),A(Z,re),A(re,ce),A(re,he),A(re,me),A(re,nt),A(ne,Pt),A(ne,xe),A(xe,J),A(xe,Ne),A(xe,rt),A(xe,yt);for(let de=0;de<We.length;de+=1)We[de]&&We[de].m(xe,null);A(ne,Tt),Fe&&Fe.m(ne,null),A(e,Qt),Be&&Be.m(e,null),A(e,wt),A(e,kt),Rr||(Cr=[K(c,"click",n[25]),K(M,"click",n[22]),K(B,"click",n[13]),K(T,"click",n[9]),K(E,"click",n[12]),K(te,"input",n[27]),K(te,"keydown",n[16]),K(te,"focus",n[17]),K(te,"blur",n[18]),K(te,"compositionstart",n[28]),K(te,"compositionend",n[29]),K(me,"click",n[23]),K(nt,"click",n[24])],Rr=!0)},p(ge,se){if(se[0]&256&&qe(h,"active",ge[8]),se[0]&256&&qe(p,"active",ge[8]),se[0]&256&&qe(w,"active",ge[8]),se[0]&256&&qe(b,"visible",ge[8]),ge[6]=="host.wproject00@gmail.com"?Ue?Ue.p(ge,se):(Ue=Lc(ge),Ue.c(),Ue.m(e,I)):Ue&&(Ue.d(1),Ue=null),se[0]&8&&te.value!==ge[3]&&(te.value=ge[3]),se[0]&32896){Jt=ut(ge[7]);let de;for(de=0;de<Jt.length;de+=1){const qt=Mc(ge,Jt,de);We[de]?We[de].p(qt,se):(We[de]=Uc(qt),We[de].c(),We[de].m(xe,null))}for(;de<We.length;de+=1)We[de].d(1);We.length=Jt.length}ge[1]&&ge[0].length>0?Fe?Fe.p(ge,se):(Fe=Fc(ge),Fe.c(),Fe.m(ne,null)):Fe&&(Fe.d(1),Fe=null),ge[2]?Be?Be.p(ge,se):(Be=jc(ge),Be.c(),Be.m(e,wt)):Be&&(Be.d(1),Be=null)},i:we,o:we,d(ge){ge&&N(e),Ue&&Ue.d(),Pn(We,ge),Fe&&Fe.d(),Be&&Be.d(),Rr=!1,Rt(Cr)}}}function jy(n,e,t){let r,i,s;ct(n,_e,J=>t(36,r=J)),ct(n,Uy,J=>t(37,J)),ct(n,Uo,J=>t(38,i=J)),ct(n,qr,J=>t(39,s=J));let a=[],l=!1,c=!1,h="",d=!1,p=[],g=null,w="";Sn(()=>{te(),v()});function y(){be(_e,r=3,r)}function b(){be(_e,r=4,r)}const P=()=>{be(_e,r=5,r)},M=()=>{be(_e,r=6,r)};new Promise((J,De)=>{Yo(ms,Ne=>{Ne?J(Ne.email):De("No user is signed in")})}).then(J=>t(6,w=J)).catch(J=>console.error(J));const x=async()=>{try{await gm(ms)}catch(J){console.error("Error signing out:",J)}};function B(){be(_e,r=1,r)}async function G(J){t(1,l=!1);const De=await ie(J);p=De.matches,t(5,g=De.exactMatch),console.log(p),g?(be(qr,s=g.title,s),g.value,g.explain,g.count+1,be(_e,r=2,r)):be(qr,s="",s),t(2,c=!0)}async function U(J){if(!d&&J.key==="Enter"&&(t(3,h=J.target.value.trim()),h)){_(h),J.target.value="",t(1,l=!1);const De=await ie(h);p=De.matches,t(5,g=De.exactMatch),console.log(p),g?(be(qr,s=g.title,s),g.value,g.explain,g.count+1,T(s),be(_e,r=2,r)):be(qr,s="",s),t(2,c=!0)}}async function T(J){try{const De=Gt(ft(Le,"datas"),Bn("title","==",J)),Ne=await Mt(De);Ne.empty?console.log("No matching documents found."):Ne.forEach(async rt=>{const yt=Wn(Le,"datas",rt.id),Tt=rt.data().count||0;await My(yt,{count:Tt+1}),console.log(`Document with ID ${rt.id} updated successfully`)})}catch(De){console.error("Error updating document: ",De)}}function _(J){const De=JSON.parse(sessionStorage.getItem("searchHistory"))||[],Ne=[J,...De.filter(rt=>rt!==J)];Ne.length>3&&Ne.pop(),sessionStorage.setItem("searchHistory",JSON.stringify(Ne)),t(0,a=Ne)}function v(){const J=JSON.parse(sessionStorage.getItem("searchHistory"))||[];t(0,a=J)}function E(){t(1,l=!0)}function C(){setTimeout(()=>t(1,l=!1),100)}function S(){t(2,c=!1)}function I(J){document.getElementById("sb").value=J,t(1,l=!1)}let ne=[];async function te(){try{const J=Gt(ft(Le,"datas"),fs("count","desc"),Lo(3)),De=await Mt(J);t(7,ne=De.docs.map(Ne=>Ne.data().title))}catch(J){console.error("Error fetching documents: ",J)}}async function ie(J){const De=ft(Le,"datas"),Ne=Gt(De,Bn("title",">=",J),Bn("title","<=",J+"")),rt=await Mt(Ne),yt=[];let Tt=null;return rt.forEach(Qt=>{const wt=Qt.data();yt.push(wt),wt.title===J&&(Tt=wt)}),be(Uo,i=yt,i),{exactMatch:Tt,matches:yt}}const Z=()=>{be(_e,r=7,r)},re=()=>{be(_e,r=8,r)},ce=()=>{be(_e,r=9,r)},fe=()=>{be(_e,r=10,r)};let he=!1;function me(){t(8,he=!he)}function pe(J){Wd.call(this,n,J)}return[a,l,c,h,d,g,w,ne,he,y,b,P,M,x,B,G,U,E,C,S,I,Z,re,ce,fe,me,pe,J=>t(3,h=J.target.value),()=>t(4,d=!0),()=>t(4,d=!1),J=>I(J)]}class qy extends Ct{constructor(e){super(),St(this,e,jy,By,bt,{},null,[-1,-1])}}function zc(n){let e,t;return{c(){e=D("div"),t=Re(n[5]),this.h()},l(r){e=V(r,"DIV",{class:!0});var i=$(e);t=Ce(i,n[5]),i.forEach(N),this.h()},h(){R(e,"class","error-message svelte-e5fo8p")},m(r,i){Y(r,e,i),A(e,t)},p(r,i){i&32&&Ge(t,r[5])},d(r){r&&N(e)}}}function zy(n){let e,t,r,i,s="Title",a,l,c,h,d,p="Value",g,w,y,b,P,M="Explain",F,x,B,G,U,T="Tag (과학:0 / 일상:1)",_,v,E,C,S,I,ne,te,ie,Z="Cancel",re,ce,fe=n[5]&&zc(n);return{c(){e=D("div"),t=D("div"),r=D("div"),i=D("label"),i.textContent=s,a=q(),l=D("input"),c=q(),h=D("div"),d=D("label"),d.textContent=p,g=q(),w=D("input"),y=q(),b=D("div"),P=D("label"),P.textContent=M,F=q(),x=D("input"),B=q(),G=D("div"),U=D("label"),U.textContent=T,_=q(),v=D("input"),E=q(),fe&&fe.c(),C=q(),S=D("div"),I=D("button"),ne=Re("Submit"),te=q(),ie=D("button"),ie.textContent=Z,this.h()},l(he){e=V(he,"DIV",{class:!0});var me=$(e);t=V(me,"DIV",{class:!0});var pe=$(t);r=V(pe,"DIV",{class:!0});var nt=$(r);i=V(nt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ee(i)!=="svelte-1weqgc2"&&(i.textContent=s),a=z(nt),l=V(nt,"INPUT",{class:!0,type:!0,id:!0}),nt.forEach(N),c=z(pe),h=V(pe,"DIV",{class:!0});var gt=$(h);d=V(gt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ee(d)!=="svelte-ry2554"&&(d.textContent=p),g=z(gt),w=V(gt,"INPUT",{class:!0,type:!0,id:!0}),gt.forEach(N),y=z(pe),b=V(pe,"DIV",{class:!0});var Pt=$(b);P=V(Pt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ee(P)!=="svelte-2n35pc"&&(P.textContent=M),F=z(Pt),x=V(Pt,"INPUT",{class:!0,type:!0,id:!0}),Pt.forEach(N),B=z(pe),G=V(pe,"DIV",{class:!0});var xe=$(G);U=V(xe,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ee(U)!=="svelte-1lp5d2m"&&(U.textContent=T),_=z(xe),v=V(xe,"INPUT",{class:!0,type:!0,id:!0}),xe.forEach(N),E=z(pe),fe&&fe.l(pe),C=z(pe),S=V(pe,"DIV",{class:!0});var J=$(S);I=V(J,"BUTTON",{class:!0});var De=$(I);ne=Ce(De,"Submit"),De.forEach(N),te=z(J),ie=V(J,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(ie)!=="svelte-9k415x"&&(ie.textContent=Z),J.forEach(N),pe.forEach(N),me.forEach(N),this.h()},h(){R(i,"class","form-label svelte-e5fo8p"),R(i,"for","title"),R(l,"class","form-input svelte-e5fo8p"),R(l,"type","text"),R(l,"id","title"),R(r,"class","form-group svelte-e5fo8p"),R(d,"class","form-label svelte-e5fo8p"),R(d,"for","value"),R(w,"class","form-input svelte-e5fo8p"),R(w,"type","text"),R(w,"id","value"),R(h,"class","form-group svelte-e5fo8p"),R(P,"class","form-label svelte-e5fo8p"),R(P,"for","explain"),R(x,"class","form-input svelte-e5fo8p"),R(x,"type","text"),R(x,"id","explain"),R(b,"class","form-group svelte-e5fo8p"),R(U,"class","form-label svelte-e5fo8p"),R(U,"for","tag1"),R(v,"class","form-input svelte-e5fo8p"),R(v,"type","text"),R(v,"id","tag1"),R(G,"class","form-group svelte-e5fo8p"),R(I,"class","form-button svelte-e5fo8p"),I.disabled=n[4],R(ie,"class","form-button cancel-button svelte-e5fo8p"),R(S,"class","form-buttons svelte-e5fo8p"),R(t,"class","form-content svelte-e5fo8p"),R(e,"class","form-container svelte-e5fo8p")},m(he,me){Y(he,e,me),A(e,t),A(t,r),A(r,i),A(r,a),A(r,l),Ae(l,n[0]),A(t,c),A(t,h),A(h,d),A(h,g),A(h,w),Ae(w,n[1]),A(t,y),A(t,b),A(b,P),A(b,F),A(b,x),Ae(x,n[2]),A(t,B),A(t,G),A(G,U),A(G,_),A(G,v),Ae(v,n[3]),A(t,E),fe&&fe.m(t,null),A(t,C),A(t,S),A(S,I),A(I,ne),A(S,te),A(S,ie),re||(ce=[K(l,"input",n[8]),K(w,"input",n[9]),K(x,"input",n[10]),K(v,"input",n[11]),K(I,"click",n[6]),K(ie,"click",n[7])],re=!0)},p(he,[me]){me&1&&l.value!==he[0]&&Ae(l,he[0]),me&2&&w.value!==he[1]&&Ae(w,he[1]),me&4&&x.value!==he[2]&&Ae(x,he[2]),me&8&&v.value!==he[3]&&Ae(v,he[3]),he[5]?fe?fe.p(he,me):(fe=zc(he),fe.c(),fe.m(t,C)):fe&&(fe.d(1),fe=null),me&16&&(I.disabled=he[4])},i:we,o:we,d(he){he&&N(e),fe&&fe.d(),re=!1,Rt(ce)}}}function $y(n,e,t){let r;ct(n,_e,P=>t(12,r=P));let i="",s="",a="",l="",c=!1,h="";const d=async()=>{if(!i||!s||!a||!l){t(5,h="All fields are required!");return}t(4,c=!0),t(5,h="");try{if(!(await Mt(Gt(ft(Le,"datas"),Bn("title","==",i)))).empty){t(5,h="Title already exists! Please choose a different title.");return}await Fs(ft(Le,"datas"),{title:i,value:s,explain:a,tag1:l,count:0}),t(0,i=""),t(1,s=""),t(2,a=""),t(3,l=""),be(_e,r=0,r)}catch(P){console.error("Error adding document: ",P),t(5,h="Error adding document!")}finally{t(4,c=!1)}},p=()=>{t(0,i=""),t(1,s=""),t(2,a=""),t(3,l=""),t(5,h=""),be(_e,r=0,r)};function g(){i=this.value,t(0,i)}function w(){s=this.value,t(1,s)}function y(){a=this.value,t(2,a)}function b(){l=this.value,t(3,l)}return[i,s,a,l,c,h,d,p,g,w,y,b]}class Hy extends Ct{constructor(e){super(),St(this,e,$y,zy,bt,{})}}function $c(n,e,t){const r=n.slice();return r[14]=e[t],r}function Hc(n){let e,t,r=n[14].title+"",i,s,a,l=n[14].value+"",c,h,d,p=n[14].explain+"",g,w,y,b,P="검색수:",M,F=n[14].count+"",x,B;return{c(){e=D("div"),t=D("h3"),i=Re(r),s=q(),a=D("p"),c=Re(l),h=q(),d=D("p"),g=Re(p),w=q(),y=D("p"),b=D("strong"),b.textContent=P,M=q(),x=Re(F),B=q(),this.h()},l(G){e=V(G,"DIV",{class:!0});var U=$(e);t=V(U,"H3",{class:!0});var T=$(t);i=Ce(T,r),T.forEach(N),s=z(U),a=V(U,"P",{class:!0});var _=$(a);c=Ce(_,l),_.forEach(N),h=z(U),d=V(U,"P",{class:!0});var v=$(d);g=Ce(v,p),v.forEach(N),w=z(U),y=V(U,"P",{class:!0});var E=$(y);b=V(E,"STRONG",{"data-svelte-h":!0}),ee(b)!=="svelte-14ncqy5"&&(b.textContent=P),M=z(E),x=Ce(E,F),E.forEach(N),B=z(U),U.forEach(N),this.h()},h(){R(t,"class","svelte-rwajcq"),R(a,"class","svelte-rwajcq"),R(d,"class","svelte-rwajcq"),R(y,"class","count svelte-rwajcq"),R(e,"class","box svelte-rwajcq")},m(G,U){Y(G,e,U),A(e,t),A(t,i),A(e,s),A(e,a),A(a,c),A(e,h),A(e,d),A(d,g),A(e,w),A(e,y),A(y,b),A(y,M),A(y,x),A(e,B)},p(G,U){U&1&&r!==(r=G[14].title+"")&&Ge(i,r),U&1&&l!==(l=G[14].value+"")&&Ge(c,l),U&1&&p!==(p=G[14].explain+"")&&Ge(g,p),U&1&&F!==(F=G[14].count+"")&&Ge(x,F)},d(G){G&&N(e)}}}function Gy(n){let e,t,r,i,s,a="Main",l,c,h,d="모두",p,g,w="과학",y,b,P="일상",M,F,x,B="모두",G,U,T="신조어",_,v,E="원단어",C,S,I,ne,te=ut(n[3](n[0])),ie=[];for(let Z=0;Z<te.length;Z+=1)ie[Z]=Hc($c(n,te,Z));return{c(){e=D("div"),t=D("div"),r=q(),i=D("div"),s=D("button"),s.textContent=a,l=q(),c=D("div"),h=D("button"),h.textContent=d,p=q(),g=D("button"),g.textContent=w,y=q(),b=D("button"),b.textContent=P,M=q(),F=D("div"),x=D("button"),x.textContent=B,G=q(),U=D("button"),U.textContent=T,_=q(),v=D("button"),v.textContent=E,C=q(),S=D("div");for(let Z=0;Z<ie.length;Z+=1)ie[Z].c();this.h()},l(Z){e=V(Z,"DIV",{class:!0});var re=$(e);t=V(re,"DIV",{id:!0,class:!0}),$(t).forEach(N),r=z(re),i=V(re,"DIV",{class:!0});var ce=$(i);s=V(ce,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(s)!=="svelte-8azga8"&&(s.textContent=a),ce.forEach(N),l=z(re),c=V(re,"DIV",{class:!0});var fe=$(c);h=V(fe,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(h)!=="svelte-u6tz2q"&&(h.textContent=d),p=z(fe),g=V(fe,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(g)!=="svelte-196nohl"&&(g.textContent=w),y=z(fe),b=V(fe,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(b)!=="svelte-9dwnwx"&&(b.textContent=P),fe.forEach(N),M=z(re),F=V(re,"DIV",{class:!0});var he=$(F);x=V(he,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(x)!=="svelte-16kawoo"&&(x.textContent=B),G=z(he),U=V(he,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(U)!=="svelte-15k1gku"&&(U.textContent=T),_=z(he),v=V(he,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(v)!=="svelte-1i5u5o6"&&(v.textContent=E),he.forEach(N),C=z(re),S=V(re,"DIV",{class:!0});var me=$(S);for(let pe=0;pe<ie.length;pe+=1)ie[pe].l(me);me.forEach(N),re.forEach(N),this.h()},h(){R(t,"id","bb"),R(t,"class","svelte-rwajcq"),R(s,"class","close-button svelte-rwajcq"),R(i,"class","close-button_div svelte-rwajcq"),R(h,"class","button svelte-rwajcq"),qe(h,"active",n[0]==="모두"),R(g,"class","button svelte-rwajcq"),qe(g,"active",n[0]==="과학"),R(b,"class","button svelte-rwajcq"),qe(b,"active",n[0]==="일상"),R(c,"class","filter-buttons svelte-rwajcq"),R(x,"class","button svelte-rwajcq"),qe(x,"active",n[1]==="모두"),R(U,"class","button svelte-rwajcq"),qe(U,"active",n[1]==="신조어"),R(v,"class","button svelte-rwajcq"),qe(v,"active",n[1]==="원단어"),R(F,"class","filter-buttons svelte-rwajcq"),R(S,"class","container svelte-rwajcq"),R(e,"class","bbd svelte-rwajcq")},m(Z,re){Y(Z,e,re),A(e,t),A(e,r),A(e,i),A(i,s),A(e,l),A(e,c),A(c,h),A(c,p),A(c,g),A(c,y),A(c,b),A(e,M),A(e,F),A(F,x),A(F,G),A(F,U),A(F,_),A(F,v),A(e,C),A(e,S);for(let ce=0;ce<ie.length;ce+=1)ie[ce]&&ie[ce].m(S,null);I||(ne=[K(s,"click",n[2]),K(h,"click",n[4]),K(g,"click",n[5]),K(b,"click",n[6]),K(x,"click",n[7]),K(U,"click",n[8]),K(v,"click",n[9])],I=!0)},p(Z,[re]){if(re&1&&qe(h,"active",Z[0]==="모두"),re&1&&qe(g,"active",Z[0]==="과학"),re&1&&qe(b,"active",Z[0]==="일상"),re&2&&qe(x,"active",Z[1]==="모두"),re&2&&qe(U,"active",Z[1]==="신조어"),re&2&&qe(v,"active",Z[1]==="원단어"),re&9){te=ut(Z[3](Z[0]));let ce;for(ce=0;ce<te.length;ce+=1){const fe=$c(Z,te,ce);ie[ce]?ie[ce].p(fe,re):(ie[ce]=Hc(fe),ie[ce].c(),ie[ce].m(S,null))}for(;ce<ie.length;ce+=1)ie[ce].d(1);ie.length=te.length}},i:we,o:we,d(Z){Z&&N(e),Pn(ie,Z),I=!1,Rt(ne)}}}function Wy(n,e,t){let r,i;ct(n,_e,P=>t(10,r=P)),ct(n,Uo,P=>t(11,i=P));let s=i,a="모두",l="모두";return[a,l,()=>{be(_e,r=0,r)},P=>{if(P==="모두")return s;if(P==="과학")return s.filter(M=>M.tag1===0);if(P==="일상")return s.filter(M=>M.tag1===1)},()=>t(0,a="모두"),()=>t(0,a="과학"),()=>t(0,a="일상"),()=>t(1,l="모두"),()=>t(1,l="신조어"),()=>t(1,l="원단어")]}class Ky extends Ct{constructor(e){super(),St(this,e,Wy,Gy,bt,{})}}function Gc(n){let e,t;return{c(){e=D("div"),t=Re(n[4]),this.h()},l(r){e=V(r,"DIV",{class:!0});var i=$(e);t=Ce(i,n[4]),i.forEach(N),this.h()},h(){R(e,"class","error-message svelte-1ac2j0m")},m(r,i){Y(r,e,i),A(e,t)},p(r,i){i&16&&Ge(t,r[4])},d(r){r&&N(e)}}}function Qy(n){let e,t,r,i,s="신조어",a,l,c,h,d,p="신조어 뜻",g,w,y,b,P,M="신조어의 설명",F,x,B,G,U,T,_,v,E,C="취소",S,I,ne=n[4]&&Gc(n);return{c(){e=D("div"),t=D("div"),r=D("div"),i=D("label"),i.textContent=s,a=q(),l=D("input"),c=q(),h=D("div"),d=D("label"),d.textContent=p,g=q(),w=D("input"),y=q(),b=D("div"),P=D("label"),P.textContent=M,F=q(),x=D("input"),B=q(),ne&&ne.c(),G=q(),U=D("div"),T=D("button"),_=Re("보내기"),v=q(),E=D("button"),E.textContent=C,this.h()},l(te){e=V(te,"DIV",{class:!0});var ie=$(e);t=V(ie,"DIV",{class:!0});var Z=$(t);r=V(Z,"DIV",{class:!0});var re=$(r);i=V(re,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ee(i)!=="svelte-1xvfvjg"&&(i.textContent=s),a=z(re),l=V(re,"INPUT",{class:!0,type:!0,id:!0}),re.forEach(N),c=z(Z),h=V(Z,"DIV",{class:!0});var ce=$(h);d=V(ce,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ee(d)!=="svelte-1iv6t5o"&&(d.textContent=p),g=z(ce),w=V(ce,"INPUT",{class:!0,type:!0,id:!0}),ce.forEach(N),y=z(Z),b=V(Z,"DIV",{class:!0});var fe=$(b);P=V(fe,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ee(P)!=="svelte-lyiets"&&(P.textContent=M),F=z(fe),x=V(fe,"INPUT",{class:!0,type:!0,id:!0}),fe.forEach(N),B=z(Z),ne&&ne.l(Z),G=z(Z),U=V(Z,"DIV",{class:!0});var he=$(U);T=V(he,"BUTTON",{class:!0});var me=$(T);_=Ce(me,"보내기"),me.forEach(N),v=z(he),E=V(he,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(E)!=="svelte-1fn0s3j"&&(E.textContent=C),he.forEach(N),Z.forEach(N),ie.forEach(N),this.h()},h(){R(i,"class","form-label svelte-1ac2j0m"),R(i,"for","title"),R(l,"class","form-input svelte-1ac2j0m"),R(l,"type","text"),R(l,"id","title"),R(r,"class","form-group svelte-1ac2j0m"),R(d,"class","form-label svelte-1ac2j0m"),R(d,"for","value"),R(w,"class","form-input svelte-1ac2j0m"),R(w,"type","text"),R(w,"id","value"),R(h,"class","form-group svelte-1ac2j0m"),R(P,"class","form-label svelte-1ac2j0m"),R(P,"for","explain"),R(x,"class","form-input svelte-1ac2j0m"),R(x,"type","text"),R(x,"id","explain"),R(b,"class","form-group svelte-1ac2j0m"),R(T,"class","form-button svelte-1ac2j0m"),T.disabled=n[3],R(E,"class","form-button cancel-button svelte-1ac2j0m"),R(U,"class","form-buttons svelte-1ac2j0m"),R(t,"class","form-content svelte-1ac2j0m"),R(e,"class","form-container svelte-1ac2j0m")},m(te,ie){Y(te,e,ie),A(e,t),A(t,r),A(r,i),A(r,a),A(r,l),Ae(l,n[0]),A(t,c),A(t,h),A(h,d),A(h,g),A(h,w),Ae(w,n[1]),A(t,y),A(t,b),A(b,P),A(b,F),A(b,x),Ae(x,n[2]),A(t,B),ne&&ne.m(t,null),A(t,G),A(t,U),A(U,T),A(T,_),A(U,v),A(U,E),S||(I=[K(l,"input",n[7]),K(w,"input",n[8]),K(x,"input",n[9]),K(T,"click",n[5]),K(E,"click",n[6])],S=!0)},p(te,[ie]){ie&1&&l.value!==te[0]&&Ae(l,te[0]),ie&2&&w.value!==te[1]&&Ae(w,te[1]),ie&4&&x.value!==te[2]&&Ae(x,te[2]),te[4]?ne?ne.p(te,ie):(ne=Gc(te),ne.c(),ne.m(t,G)):ne&&(ne.d(1),ne=null),ie&8&&(T.disabled=te[3])},i:we,o:we,d(te){te&&N(e),ne&&ne.d(),S=!1,Rt(I)}}}function Jy(n,e,t){let r;ct(n,_e,y=>t(10,r=y));let i="",s="",a="",l=!1,c="";const h=async()=>{if(!i||!s||!a){t(4,c="All fields are required!");return}t(3,l=!0),t(4,c="");try{if(!(await Mt(Gt(ft(Le,"beta"),Bn("title","==",i)))).empty){t(4,c="Title already exists! Please choose a different title.");return}await Fs(ft(Le,"beta"),{title:i,value:s,explain:a,count:0}),t(0,i=""),t(1,s=""),t(2,a=""),be(_e,r=0,r)}catch(y){console.error("Error adding document: ",y),t(4,c="Error adding document!")}finally{t(3,l=!1)}},d=()=>{t(0,i=""),t(1,s=""),t(2,a=""),t(4,c=""),be(_e,r=0,r)};function p(){i=this.value,t(0,i)}function g(){s=this.value,t(1,s)}function w(){a=this.value,t(2,a)}return[i,s,a,l,c,h,d,p,g,w]}class Yy extends Ct{constructor(e){super(),St(this,e,Jy,Qy,bt,{})}}function Wc(n,e,t){const r=n.slice();return r[11]=e[t],r[12]=e,r[13]=t,r}function Kc(n){let e,t,r,i,s,a,l,c,h,d,p,g="채택",w,y,b="삭제",P,M,F;function x(){n[4].call(t,n[12],n[13])}function B(){n[5].call(i,n[12],n[13])}function G(){n[6].call(a,n[12],n[13])}function U(){n[7].call(c,n[12],n[13])}function T(){return n[8](n[11])}function _(){return n[9](n[11])}return{c(){e=D("div"),t=D("input"),r=q(),i=D("input"),s=q(),a=D("input"),l=q(),c=D("input"),h=q(),d=D("div"),p=D("button"),p.textContent=g,w=q(),y=D("button"),y.textContent=b,P=q(),this.h()},l(v){e=V(v,"DIV",{class:!0});var E=$(e);t=V(E,"INPUT",{type:!0,class:!0}),r=z(E),i=V(E,"INPUT",{type:!0,class:!0}),s=z(E),a=V(E,"INPUT",{type:!0,class:!0}),l=z(E),c=V(E,"INPUT",{type:!0,class:!0}),h=z(E),d=V(E,"DIV",{});var C=$(d);p=V(C,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(p)!=="svelte-14dxe7a"&&(p.textContent=g),w=z(C),y=V(C,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(y)!=="svelte-zdjrp5"&&(y.textContent=b),C.forEach(N),P=z(E),E.forEach(N),this.h()},h(){R(t,"type","text"),R(t,"class","svelte-52a7gl"),R(i,"type","text"),R(i,"class","svelte-52a7gl"),R(a,"type","text"),R(a,"class","svelte-52a7gl"),R(c,"type","number"),R(c,"class","svelte-52a7gl"),R(p,"class","accept-button svelte-52a7gl"),R(y,"class","delete-button svelte-52a7gl"),R(e,"class","item-box svelte-52a7gl")},m(v,E){Y(v,e,E),A(e,t),Ae(t,n[11].title),A(e,r),A(e,i),Ae(i,n[11].value),A(e,s),A(e,a),Ae(a,n[11].explain),A(e,l),A(e,c),Ae(c,n[11].count),A(e,h),A(e,d),A(d,p),A(d,w),A(d,y),A(e,P),M||(F=[K(t,"input",x),K(i,"input",B),K(a,"input",G),K(c,"input",U),K(p,"click",T),K(y,"click",_)],M=!0)},p(v,E){n=v,E&1&&t.value!==n[11].title&&Ae(t,n[11].title),E&1&&i.value!==n[11].value&&Ae(i,n[11].value),E&1&&a.value!==n[11].explain&&Ae(a,n[11].explain),E&1&&lu(c.value)!==n[11].count&&Ae(c,n[11].count)},d(v){v&&N(e),M=!1,Rt(F)}}}function Xy(n){let e,t,r="Main",i,s,a,l,c=ut(n[0]),h=[];for(let d=0;d<c.length;d+=1)h[d]=Kc(Wc(n,c,d));return{c(){e=D("div"),t=D("button"),t.textContent=r,i=q(),s=D("div");for(let d=0;d<h.length;d+=1)h[d].c();this.h()},l(d){e=V(d,"DIV",{class:!0});var p=$(e);t=V(p,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-8azga8"&&(t.textContent=r),p.forEach(N),i=z(d),s=V(d,"DIV",{class:!0});var g=$(s);for(let w=0;w<h.length;w+=1)h[w].l(g);g.forEach(N),this.h()},h(){R(t,"class","close-button svelte-52a7gl"),R(e,"class","close-button_div svelte-52a7gl"),R(s,"class","container svelte-52a7gl")},m(d,p){Y(d,e,p),A(e,t),Y(d,i,p),Y(d,s,p);for(let g=0;g<h.length;g+=1)h[g]&&h[g].m(s,null);a||(l=K(t,"click",n[3]),a=!0)},p(d,[p]){if(p&7){c=ut(d[0]);let g;for(g=0;g<c.length;g+=1){const w=Wc(d,c,g);h[g]?h[g].p(w,p):(h[g]=Kc(w),h[g].c(),h[g].m(s,null))}for(;g<h.length;g+=1)h[g].d(1);h.length=c.length}},i:we,o:we,d(d){d&&(N(e),N(i),N(s)),Pn(h,d),a=!1,l()}}}function Zy(n,e,t){let r;ct(n,_e,y=>t(10,r=y));let i=[];Sn(async()=>{const y=await Mt(ft(Le,"beta"));t(0,i=y.docs.map(b=>({id:b.id,...b.data()})))});const s=async(y,b,P,M,F)=>{try{await Fs(ft(Le,"datas"),{title:b,value:P,explain:M,count:F}),await ps(Wn(Le,"beta",y)),console.log("Document successfully written and deleted!"),t(0,i=i.filter(x=>x.id!==y))}catch(x){console.error("Error adding or deleting document: ",x)}},a=async y=>{try{await ps(Wn(Le,"beta",y)),console.log("Document successfully deleted!"),t(0,i=i.filter(b=>b.id!==y))}catch(b){console.error("Error deleting document: ",b)}},l=()=>{be(_e,r=0,r)};function c(y,b){y[b].title=this.value,t(0,i)}function h(y,b){y[b].value=this.value,t(0,i)}function d(y,b){y[b].explain=this.value,t(0,i)}function p(y,b){y[b].count=lu(this.value),t(0,i)}return[i,s,a,l,c,h,d,p,y=>s(y.id,y.title,y.value,y.explain,y.count),y=>a(y.id)]}class eE extends Ct{constructor(e){super(),St(this,e,Zy,Xy,bt,{})}}function tE(n){let e,t,r="Main",i,s,a,l,c,h,d,p="삭제",g,w;return{c(){e=D("div"),t=D("button"),t.textContent=r,i=q(),s=D("main"),a=D("div"),l=D("input"),c=q(),h=D("div"),d=D("button"),d.textContent=p,this.h()},l(y){e=V(y,"DIV",{class:!0});var b=$(e);t=V(b,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-8azga8"&&(t.textContent=r),b.forEach(N),i=z(y),s=V(y,"MAIN",{class:!0});var P=$(s);a=V(P,"DIV",{style:!0});var M=$(a);l=V(M,"INPUT",{type:!0,placeholder:!0,style:!0,class:!0}),c=z(M),h=V(M,"DIV",{style:!0});var F=$(h);d=V(F,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),ee(d)!=="svelte-1w89kx2"&&(d.textContent=p),F.forEach(N),M.forEach(N),P.forEach(N),this.h()},h(){R(t,"class","close-button svelte-mo15yd"),R(e,"class","close-button_div svelte-mo15yd"),R(l,"type","text"),R(l,"placeholder","Title 입력"),ze(l,"width","300px"),ze(l,"padding","10px"),ze(l,"font-size","16px"),R(l,"class","svelte-mo15yd"),ze(d,"padding","10px 20px"),ze(d,"font-size","16px"),R(d,"class","svelte-mo15yd"),ze(h,"margin-top","20px"),ze(a,"text-align","center"),ze(a,"margin-top","50px"),R(s,"class","svelte-mo15yd")},m(y,b){Y(y,e,b),A(e,t),Y(y,i,b),Y(y,s,b),A(s,a),A(a,l),Ae(l,n[0]),A(a,c),A(a,h),A(h,d),g||(w=[K(t,"click",n[2]),K(l,"input",n[3]),K(d,"click",n[1])],g=!0)},p(y,[b]){b&1&&l.value!==y[0]&&Ae(l,y[0])},i:we,o:we,d(y){y&&(N(e),N(i),N(s)),g=!1,Rt(w)}}}function nE(n,e,t){let r;ct(n,_e,c=>t(4,r=c));let i="";async function s(){if(!i.trim()){alert("Please enter a search term");return}try{const c=Gt(ft(Le,"datas"),Bn("title","==",i)),h=await Mt(c),d=[];h.forEach(p=>{d.push(ps(Wn(Le,"datas",p.id)))}),await Promise.all(d),alert("값이 삭제됨"),t(0,i="")}catch(c){console.error("Error deleting documents: ",c),alert("Error deleting documents")}}const a=()=>{be(_e,r=0,r)};function l(){i=this.value,t(0,i)}return[i,s,a,l]}class rE extends Ct{constructor(e){super(),St(this,e,nE,tE,bt,{})}}function Qc(n){let e,t;return{c(){e=D("div"),t=Re(n[1]),this.h()},l(r){e=V(r,"DIV",{class:!0});var i=$(e);t=Ce(i,n[1]),i.forEach(N),this.h()},h(){R(e,"class","error svelte-bs8ckl")},m(r,i){Y(r,e,i),A(e,t)},p(r,i){i&2&&Ge(t,r[1])},d(r){r&&N(e)}}}function iE(n){let e,t,r,i="홈",s,a,l,c,h="전송",d,p,g,w=n[1]&&Qc(n);return{c(){e=D("div"),t=D("div"),r=D("button"),r.textContent=i,s=q(),a=D("input"),l=q(),c=D("button"),c.textContent=h,d=q(),w&&w.c(),this.h()},l(y){e=V(y,"DIV",{class:!0});var b=$(e);t=V(b,"DIV",{class:!0});var P=$(t);r=V(P,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(r)!=="svelte-oxv20b"&&(r.textContent=i),P.forEach(N),s=z(b),a=V(b,"INPUT",{type:!0,placeholder:!0,class:!0}),l=z(b),c=V(b,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(c)!=="svelte-1sfb7u5"&&(c.textContent=h),d=z(b),w&&w.l(b),b.forEach(N),this.h()},h(){R(r,"class","close-button svelte-bs8ckl"),R(t,"class","close-button_div svelte-bs8ckl"),R(a,"type","text"),R(a,"placeholder","신고내용 입력 (50자 까지)"),R(a,"class","svelte-bs8ckl"),R(c,"class","svelte-bs8ckl"),R(e,"class","container svelte-bs8ckl")},m(y,b){Y(y,e,b),A(e,t),A(t,r),A(e,s),A(e,a),Ae(a,n[0]),A(e,l),A(e,c),A(e,d),w&&w.m(e,null),p||(g=[K(r,"click",n[3]),K(a,"input",n[4]),K(c,"click",n[2])],p=!0)},p(y,[b]){b&1&&a.value!==y[0]&&Ae(a,y[0]),y[1]?w?w.p(y,b):(w=Qc(y),w.c(),w.m(e,null)):w&&(w.d(1),w=null)},i:we,o:we,d(y){y&&N(e),w&&w.d(),p=!1,Rt(g)}}}function sE(n,e,t){let r;ct(n,_e,h=>t(6,r=h));let i="",s="";Sn(()=>{const h=is();Yo(h,d=>{d&&d.email})});const a=async()=>{if(i.length>50){t(1,s="50자를 넘지 말아주세요");return}const d=is().currentUser;if(!d){t(1,s="내용을 적어주세요");return}try{await Fs(ft(Le,"report"),{user:d.email,contents:i}),t(0,i=""),t(1,s="")}catch(p){t(1,s="Error adding document: "+p.message)}},l=()=>{be(_e,r=0,r)};function c(){i=this.value,t(0,i)}return[i,s,a,l,c]}class oE extends Ct{constructor(e){super(),St(this,e,sE,iE,bt,{})}}function Jc(n,e,t){const r=n.slice();return r[8]=e[t],r[9]=e,r[10]=t,r}function Yc(n){let e,t,r,i,s,a,l="삭제",c,h,d;function p(){n[3].call(t,n[9],n[10])}function g(){n[4].call(i,n[9],n[10])}function w(){return n[5](n[8])}return{c(){e=D("div"),t=D("input"),r=q(),i=D("input"),s=q(),a=D("button"),a.textContent=l,c=q(),this.h()},l(y){e=V(y,"DIV",{class:!0});var b=$(e);t=V(b,"INPUT",{type:!0,class:!0}),r=z(b),i=V(b,"INPUT",{type:!0,class:!0}),s=z(b),a=V(b,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(a)!=="svelte-1i7wviu"&&(a.textContent=l),c=z(b),b.forEach(N),this.h()},h(){R(t,"type","text"),t.readOnly=!0,R(t,"class","svelte-1evkr3z"),R(i,"type","text"),i.readOnly=!0,R(i,"class","svelte-1evkr3z"),R(a,"class","svelte-1evkr3z"),R(e,"class","item-box svelte-1evkr3z")},m(y,b){Y(y,e,b),A(e,t),Ae(t,n[8].user),A(e,r),A(e,i),Ae(i,n[8].contents),A(e,s),A(e,a),A(e,c),h||(d=[K(t,"input",p),K(i,"input",g),K(a,"click",w)],h=!0)},p(y,b){n=y,b&1&&t.value!==n[8].user&&Ae(t,n[8].user),b&1&&i.value!==n[8].contents&&Ae(i,n[8].contents)},d(y){y&&N(e),h=!1,Rt(d)}}}function aE(n){let e,t,r="Main",i,s,a,l,c=ut(n[0]),h=[];for(let d=0;d<c.length;d+=1)h[d]=Yc(Jc(n,c,d));return{c(){e=D("div"),t=D("button"),t.textContent=r,i=q(),s=D("div");for(let d=0;d<h.length;d+=1)h[d].c();this.h()},l(d){e=V(d,"DIV",{class:!0});var p=$(e);t=V(p,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-8azga8"&&(t.textContent=r),p.forEach(N),i=z(d),s=V(d,"DIV",{class:!0});var g=$(s);for(let w=0;w<h.length;w+=1)h[w].l(g);g.forEach(N),this.h()},h(){R(t,"class","close-button svelte-1evkr3z"),R(e,"class","close-button_div svelte-1evkr3z"),R(s,"class","container svelte-1evkr3z")},m(d,p){Y(d,e,p),A(e,t),Y(d,i,p),Y(d,s,p);for(let g=0;g<h.length;g+=1)h[g]&&h[g].m(s,null);a||(l=K(t,"click",n[2]),a=!0)},p(d,[p]){if(p&3){c=ut(d[0]);let g;for(g=0;g<c.length;g+=1){const w=Jc(d,c,g);h[g]?h[g].p(w,p):(h[g]=Yc(w),h[g].c(),h[g].m(s,null))}for(;g<h.length;g+=1)h[g].d(1);h.length=c.length}},i:we,o:we,d(d){d&&(N(e),N(i),N(s)),Pn(h,d),a=!1,l()}}}function lE(n,e,t){let r;ct(n,_e,p=>t(6,r=p));let i=[];Sn(async()=>{await s()});async function s(){const p=await Mt(ft(Le,"report"));t(0,i=p.docs.map(g=>({id:g.id,...g.data()})))}async function a(p){try{console.log(`Attempting to delete documents with title: ${p}`);const g=Gt(ft(Le,"report"),Bn("contents","==",p)),w=await Mt(g);if(w.empty){console.log("No matching documents found"),alert("No matching documents found");return}const y=[];w.forEach(b=>{console.log(`Deleting document with ID: ${b.id}`),y.push(ps(Wn(Le,"report",b.id)))}),await Promise.all(y),alert("값이 삭제됨"),await s()}catch(g){console.error("Error deleting documents: ",g),alert("Error deleting documents")}}const l=()=>{be(_e,r=0,r)};function c(p,g){p[g].user=this.value,t(0,i)}function h(p,g){p[g].contents=this.value,t(0,i)}return[i,a,l,c,h,p=>a(p.contents)]}class cE extends Ct{constructor(e){super(),St(this,e,lE,aE,bt,{})}}function Xc(n,e,t){const r=n.slice();return r[14]=e[t],r}function Zc(n){let e,t,r=n[14].title+"",i,s,a,l=n[14].value+"",c,h,d,p=n[14].explain+"",g,w,y,b,P=n[14].count+"",M;return{c(){e=D("div"),t=D("div"),i=Re(r),s=q(),a=D("div"),c=Re(l),h=q(),d=D("div"),g=Re(p),w=q(),y=D("div"),b=Re("Count: "),M=Re(P),this.h()},l(F){e=V(F,"DIV",{class:!0});var x=$(e);t=V(x,"DIV",{class:!0});var B=$(t);i=Ce(B,r),B.forEach(N),s=z(x),a=V(x,"DIV",{class:!0});var G=$(a);c=Ce(G,l),G.forEach(N),h=z(x),d=V(x,"DIV",{class:!0});var U=$(d);g=Ce(U,p),U.forEach(N),w=z(x),y=V(x,"DIV",{class:!0});var T=$(y);b=Ce(T,"Count: "),M=Ce(T,P),T.forEach(N),x.forEach(N),this.h()},h(){R(t,"class","title svelte-11o8t4t"),R(a,"class","value svelte-11o8t4t"),R(d,"class","explain svelte-11o8t4t"),R(y,"class","count svelte-11o8t4t"),R(e,"class","box svelte-11o8t4t")},m(F,x){Y(F,e,x),A(e,t),A(t,i),A(e,s),A(e,a),A(a,c),A(e,h),A(e,d),A(d,g),A(e,w),A(e,y),A(y,b),A(y,M)},p(F,x){x&1&&r!==(r=F[14].title+"")&&Ge(i,r),x&1&&l!==(l=F[14].value+"")&&Ge(c,l),x&1&&p!==(p=F[14].explain+"")&&Ge(g,p),x&1&&P!==(P=F[14].count+"")&&Ge(M,P)},d(F){F&&N(e)}}}function eu(n){let e,t,r="더 불러오기",i,s;return{c(){e=D("div"),t=D("button"),t.textContent=r,this.h()},l(a){e=V(a,"DIV",{class:!0});var l=$(e);t=V(l,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-1bu3r2x"&&(t.textContent=r),l.forEach(N),this.h()},h(){R(t,"class","svelte-11o8t4t"),R(e,"class","button-container svelte-11o8t4t")},m(a,l){Y(a,e,l),A(e,t),i||(s=K(t,"click",n[8]),i=!0)},p:we,d(a){a&&N(e),i=!1,s()}}}function uE(n){let e,t,r="홈",i,s,a,l,c="모두",h,d,p="과학",g,w,y="일상",b,P,M,F,x=ut(n[0]),B=[];for(let U=0;U<x.length;U+=1)B[U]=Zc(Xc(n,x,U));let G=!n[1]&&eu(n);return{c(){e=D("div"),t=D("button"),t.textContent=r,i=q(),s=D("main"),a=D("div"),l=D("button"),l.textContent=c,h=q(),d=D("button"),d.textContent=p,g=q(),w=D("button"),w.textContent=y,b=q();for(let U=0;U<B.length;U+=1)B[U].c();P=q(),G&&G.c(),this.h()},l(U){e=V(U,"DIV",{class:!0});var T=$(e);t=V(T,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-oxv20b"&&(t.textContent=r),T.forEach(N),i=z(U),s=V(U,"MAIN",{class:!0});var _=$(s);a=V(_,"DIV",{class:!0});var v=$(a);l=V(v,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(l)!=="svelte-1ksrl11"&&(l.textContent=c),h=z(v),d=V(v,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(d)!=="svelte-13hb43t"&&(d.textContent=p),g=z(v),w=V(v,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(w)!=="svelte-gbfb6x"&&(w.textContent=y),v.forEach(N),b=z(_);for(let E=0;E<B.length;E+=1)B[E].l(_);P=z(_),G&&G.l(_),_.forEach(N),this.h()},h(){R(t,"class","close-button svelte-11o8t4t"),R(e,"class","close-button_div svelte-11o8t4t"),R(l,"class","svelte-11o8t4t"),R(d,"class","svelte-11o8t4t"),R(w,"class","svelte-11o8t4t"),R(a,"class","button-container svelte-11o8t4t"),R(s,"class","svelte-11o8t4t")},m(U,T){Y(U,e,T),A(e,t),Y(U,i,T),Y(U,s,T),A(s,a),A(a,l),A(a,h),A(a,d),A(a,g),A(a,w),A(s,b);for(let _=0;_<B.length;_+=1)B[_]&&B[_].m(s,null);A(s,P),G&&G.m(s,null),M||(F=[K(t,"click",n[4]),K(l,"click",n[5]),K(d,"click",n[6]),K(w,"click",n[7])],M=!0)},p(U,[T]){if(T&1){x=ut(U[0]);let _;for(_=0;_<x.length;_+=1){const v=Xc(U,x,_);B[_]?B[_].p(v,T):(B[_]=Zc(v),B[_].c(),B[_].m(s,P))}for(;_<B.length;_+=1)B[_].d(1);B.length=x.length}U[1]?G&&(G.d(1),G=null):G?G.p(U,T):(G=eu(U),G.c(),G.m(s,null))},i:we,o:we,d(U){U&&(N(e),N(i),N(s)),Pn(B,U),G&&G.d(),M=!1,Rt(F)}}}function hE(n,e,t){let r;ct(n,_e,M=>t(12,r=M));let i=[],s=[],a=null,l=!1,c="모두";const h=async(M=!1)=>{if(l)return;const F=ft(Le,"datas");let x;M&&a?x=Gt(F,fs("count","desc"),Sy(a),Lo(100)):x=Gt(F,fs("count","desc"),Lo(100));const B=await Mt(x),G=B.docs.map(T=>T.data()),U=M?[...i,...G]:G;i=Array.from(new Set(U.map(T=>JSON.stringify(T)))).map(T=>JSON.parse(T)),d(),a=B.docs[B.docs.length-1],localStorage.setItem("datas",JSON.stringify(i)),localStorage.setItem("lastVisible",JSON.stringify(a)),G.length<100&&(t(1,l=!0),localStorage.setItem("allDataLoaded","true"))},d=()=>{t(0,s=[]),c==="모두"?t(0,s=i):c==="과학"?t(0,s=i.filter(M=>M.tag1===0)):c==="일상"&&t(0,s=i.filter(M=>M.tag1===1))},p=M=>{c=M,d()};return Sn(()=>{const M=localStorage.getItem("datas"),F=localStorage.getItem("lastVisible"),x=localStorage.getItem("allDataLoaded");M&&(i=JSON.parse(M),d()),F&&(a=JSON.parse(F)),x&&t(1,l=x==="true"),M||h()}),[s,l,h,p,()=>{be(_e,r=0,r)},()=>p("모두"),()=>p("과학"),()=>p("일상"),()=>h(!0)]}class dE extends Ct{constructor(e){super(),St(this,e,hE,uE,bt,{})}}const Bi=[{title:"급못타",value:"급식들은 못깨는 타워의 줄임말.",explain:"로블록스라는 게임의 타워맵 중에서 급식이들(특히 중,고등학생들을 의미함)은 게임 실력이 부족해 깰 수 없는 타워를 의미한다."},{title:"G37",value:"YFIF",explain:"BGW"},{title:"가나",value:"다라",explain:"마바"},{title:"흑우",value:"호구를 달리 표현한 말.",explain:"친구들 간에서도 사용되지만, 특히 주식에서 높은 값에 종목을 샀다가 가격이 내려갔을 때 어쩔 수 없이 파는 사람들을 의미한다.   Ex) 나 이번에 큰돈 주고 이거 샀는데 좀 있으니까 가격이 내려갔어... 나 흑우짓 했네.."},{title:"우젤착",value:"우주에서 제일 착함",explain:" "},{title:"트민녀",value:"트랜드에 민감한 여자",explain:"‘트랜드에 민감한 여자’ 의 줄임말로, 트랜드를 따라가는 사람(여자)를 말합니다."},{title:"요즘남편 없던 아빠",value:" ",explain:"맞벌이 부부가 일상화되고 가사 노동 분담이 당연해지는 상황에서, 아내의 소득이 높다면 가장의 역할을 넘기고 내조하는 남편을 의미하는 말입니다."},{title:"오운완",value:"오늘 운동 완료",explain:"‘오늘 운동 완료’의 줄임말로, 오늘 자신이 세운 운동목표량을 완료하였다는 뜻입니다."},{title:"랜선여친",value:"온라인 여자친구",explain:"온라인으로 만난 여자친구를 의미한다. 예) 난 오늘 게임에서 랜선여친을 만들었다"},{title:"팬아저",value:"팬이 아니어도 저장",explain:"특정 연예인의 팬이 아니더라도 그 사람이 너무 매력적이거나 멋있어서 사진이나 영상을 저장한다는 의미이다. 예) 카리나를 보고 팬아저 했어"},{title:"긁",value:"긁히다, 친구의 비난 또는 장난에 자존심이 긁힌 상황",explain:"긁?"},{title:"KIJUL",value:"'기절'을 영어로 훈음한것.",explain:"'너무 힘들다. KIJUL 할것같아.'"},{title:"저메추",value:"저녁 메뉴 추천",explain:"‘저녁 메뉴 추천’ 의 줄임말로 저녁 식사 매뉴를 추천해달라는 뜻입니다."},{title:"핑프",value:"핑거 프린세스의 줄임말.",explain:"손가락만 사용하면 찾을 수 있는 정보를 찾지 않고 다른 사람에게 물어보는 사람을 일컫는 말 Ex) 너 핑프냐? 제발 나한테 물어보지 말고 좀 검색해.."},{title:"낄끼빠빠",value:"낄땐 끼고 빠질 땐 빠진다의 줄임말.",explain:"어떤 상황에서는 참여하고, 또 어떤 상황에서는 빠져야 한다는 것을 강조하는데 상황에 맞게 행동하라는 의미 예) 너 이런 상황에서는 좀 낄끼빠빠 해"},{title:"먹방",value:"먹는 방송",explain:"음식을 먹는 모습을 촬영하여 방송하는 콘텐츠를 의미한다. 예) 이번에 유튜브 컨텐츠로 먹방을 할거야"},{title:"DB",value:"담배라는 뜻",explain:"DamBae의 한국어 음절 첫 알파벳 철자를 따서 지었다."},{title:"페미",value:"페미니스트",explain:"성별에 따른 차별을 없애고, 사회적, 정치적, 경제적 평등을 이루기 위한 운동이나 사상을 지지하는 사람들 예)난 페미스트로서 여성 차별 반대 시위를 할거야"},{title:"럭키비키",value:"여자아이돌 아이브의 멤버 장원영이 사용하는 긍정표현",explain:"이거 완전 럭키비키잖아"},{title:"이끼끼끼",value:"가짜입니다",explain:"테스트"},{title:"수포자",value:"수학을 포기한 자의 줄임말.",explain:"수학을 너무 어려워하여 수학을 포기하고 다른 과목에만 매진하는 사람을 일컫는 말. Ex) 나 오늘부터 수포자 할게.."},{title:"스몸비",value:"스마트폰+좀비의 합성어",explain:"보통 현대인의 과도한 휴대폰 사용을 비꼬는 말이다. Ex) 최근 길거리에 스몸비가 점점 늘어나고 있다."},{title:"셀카",value:"셀프 카메라",explain:"자신이 스스로 핸드폰이나 카메라를 이용하여 자신을 찍는 것을 의미한다. 예) 나 오늘 셀카 좀 잘 찍히는 것 같아"},{title:"테스트",value:"값",explain:"설명"},{title:"노알라",value:"노무현+코알라의 줄임말.",explain:"귀엽다"},{title:"디엠",value:"다이렉트 메시지(direct message)의 줄임말.",explain:"인스타그램의 메시지 기능을 의미한다. Ex) 디엠 좀 보라고.."},{title:"응디",value:"엉덩이의 줄임말",explain:"  "},{title:"혼코노",value:"혼자서 코인 노래방",explain:"코인노래방을 혼자가서 즐기는 것을 의미한다. 예) 나 오늘은 혼코노 할 거야"},{title:"Liquidpolitan",value:"Liqud(액체)+Politan(시민)",explain:"‘액체’와 ‘시민’의 합성어로, 공간적인 지역 개념을 넘어 유연하게 변화하는 시민을 의미합니다."},{title:"한남",value:"한국 남자",explain:" "},{title:"돼지런하다",value:"돼지+부지런하다",explain:"'돼지'와 '부지런하다'를 합친말로, 평소에는 느리지만 먹을때만 부지런한 사람을 일컫는 말."},{title:"잼못타",value:"잼민이들은 못깨는 타워의 줄임말",explain:"로블록스라는 게임의 타워맵 중에서 잼민이들(특히 초등학생을 말함)은 게임 실력이 부족해 깰 수 없는 타워를 의미한다. "},{title:"학종",value:"학생종합생활기록",explain:" "},{title:"좋구알",value:"좋아요,구독,알림설정",explain:"유튜브나 인스타 릴스에서 본인 영상이나 컨텐츠에 좋아요와 구독 알림설정을 해달라는 의미  예)영상을 즐기셨다면 좋구알 해주세요!"},{title:"아싸",value:"아웃사이더",explain:"특정 그룹이나 사회에서 외곽에 있거나 고립된 사람을 의미한다. 예) 쟤는 친구도 없고 혼자 다니는걸 보니 아싸인가봐"},{title:"뭘니써",value:"뭘봐 니 할일이나 신경써",explain:" "},{title:"랜선남친",value:"온라인 남자친구",explain:"온라인으로 만난 남자친구를 의미한다. 예) 난 오늘 인터넷 커뮤니티에서 랜선남친을 만들었다"},{title:"빤쓰런",value:"빤쓰(팬티) + 런(뛰다)",explain:"어떤 상황에서든 빨리 도망치거나 회피하는 행동을 묘사할 때 사용된다. 예) 강아지가 쫒아온다 빤스런해~~"},{title:"솔까",value:"솔직히 까놓고 말해서",explain:"직설적으로 말할 때나 사실대로 말할 때 사용됨 예) 솔까 내가 좋아하는 사람이 너무 많아"},{title:"마상",value:"'마음의 상처' 의 줄임말 ",explain:"'나 마상 받았어'"},{title:"당모치",value:"당연히 모든 치킨은 옳다의 줄임말.",explain:"한국에서 치킨은 거의 치느님(치킨+하느님) 수준으로 신격화되어 불리는데, 특히 치킨을 사랑하는 사람들이 자주 사용하곤 한다."},{title:"버카충",value:"버스 카드 충전의 줄임말",explain:"청소년들 사이에선 잘 사용되지 않지만 그럼에도 대표적인 신조어 중 하나로 꼽힌다. Ex) A:야 너 갑자기 어디가냐  B:버카충 하고 옴 ㄱㄷ(기달)"},{title:"제당슈만",value:"제가 당신을 슈퍼스타로 만들어드릴게요 라는 뜻",explain:"일본 애니메이션인 [아이들리쉬 세븐]의 이즈미 이오리 라는 캐릭터의 대사이다. 아이돌을 좋아하는 팬들 사이에서 팬심을 표현하는 말로 자주 사용된다."},{title:"스핀 오프 프로젝트",value:" ",explain:"콘텐츠 산업에서 원작에서 파생된 작품을 의미하는 '스핀 오프' 개념이 다양한 영역으로 확대된 것을 뜻합니다."},{title:"인구론",value:"인문계 졸업자 90%가 논다",explain:" "},{title:"좋댓구알",value:"좋아요 댓글 구독 알림설정의 줄임말.",explain:"유튜브 시청자라면 알아야 할 4가지 요소로, 보통 크리에이터나 유튜버들이 많이 사용하고 요청한다,  Ex) 좋댓구알 부탁드려요!!!"},{title:"기니피그",value:"쥐",explain:"아닌가"},{title:"여가부",value:"여성가족부의 줄임말.",explain:"윤석열 정권이 폐지하겠다고 하였으나 시행하지 않고 있다. 양성평등을 위해 일하고 있지만 실제로는 성별 간의 갈등만을 일으킬 뿐이다."},{title:"남미새",value:"'남자에 미친 새끼'의 줄임말.",explain:"남자를 극히 밝히는 사람, 특히 여자들을 일컫는 말이다. Ex) 저는 남미새는 걸러요..ㅎㅎ"},{title:"짜친다",value:" ",explain:"‘모자라다,쪼들리다’ 라는 뜻입니다. 예)내 월급으로 한달 생활하기에는 짜친다."},{title:"많관부",value:"많은 관심 부탁드립니다의 줄임말",explain:"보통 홍보를 하거나 다른 이들에게 특정한 것을 관심받기 위해 자주 사용한다. "},{title:"갑분싸",value:"갑자기 분위기 싸해짐",explain:"예상치 못한 발언이나 행동으로 인해 주변 분위기가 갑자기 어색하거나 냉랭해지는 상황. 예) 너가 한 말 때문에 갑분싸 됬어"},{title:"이끾끼 (ㅇ )",value:"ㄴ",explain:"ㄴ"},{title:"맛도리",value:'맛있는 음식을 칭찬하거나 강조할 때 사용하는 말입니다. 이 단어는 "맛"과 "도리"의 합성어로, 여기서 "도리"는 "최고"나 "최상"을 의미하는 속어에서 유래했습니다.',explain:"오늘 점심 맛도리다"},{title:"중꺽마",value:"중요한 것은 꺽이지 않는 마음이다",explain:'"이번 시험에서 좋은 성적을 못 받았지만, 중꺽마! 끝까지 포기하지 않고 다음번에는 더 열심히 할 거야."'},{title:"닥공",value:"닥치고 공부해",explain:" "},{title:"깜놀",value:"깜짝놀라",explain:"갑작스러운 상황이나 예상치 못한 사건에 놀랐음을 의미한다. 예) 너가 갑자기 튀어나와서 나 깜놀 했잖아"},{title:"이끾끼",value:"이끾끼",explain:"가나다라마바사아자차카타파하"},{title:"리중딱",value:"리버풀은 중위권이 딱이야의 줄임말",explain:"잉글랜드 프리미어리그(EPL)의 명문 축구 클럽인 리버풀이 부진할 때 비꼬는 말로 사용된다. Ex) A: 아 이번에 리버풀 또 졌네...   B: 응 리중딱 리중딱~"},{title:"롬곡옾눞",value:"'폭풍눈물'을 뒤집은 말.",explain:"보통 말로 표현하지는 않고, 인터넷과 SNS상에서 많이 사용된다."},{title:"심쿵",value:"어떤 일이나 대상을 보고 심장이 쿵 하고 뛸 정도로 놀라거나 설레다.",explain:"Ex) 걔가 나 챙겨줬어... 나 너무 심쿵했자나 >_<"},{title:"가",value:"나",explain:"다"},{title:"김치녀",value:"돈을 밝히는 여자 또는 자신의 애인 기준이 너무 높거나 당연히 남자가 하는 일이지 하면서 편협한 사고를 가진 한국 여자를 의미함",explain:" "},{title:"아아",value:"아이스 아메리카노의 줄임말.",explain:" "},{title:"사바사",value:"사람 by(바이) 사람",explain:"각자의 특성이나 상황에 따라 다르다는 의미를 강조하는 표현 예)음식의 취향은 사바사라 강요 하면 안돼"},{title:"스불재",value:"스스로 불러온 재앙",explain:"시험이나 프로젝트 등을 할 때 노력하지 않아 결과가 좋지 않을 때 사용하는 말 예) 이번 시험에 떨어진 것은 내 스불재였다"},{title:"슬세권",value:"슬리퍼로 갈 수 있는 거리",explain:" "},{title:"알잘딱깔센",value:"알아서 잘 딱 깔끔하고 센스있게",explain:"눈치 없는 사람들에게 눈치가 있게 행동하라는 의미로 대개 사용됨"},{title:"뇌섹남",value:"뇌가 섹시한 남자",explain:"주로 지적이고 매력적인 남성을 의미한다. 예) 얼굴도 잘생겼는데 공부도 잘하는 걸 보니 뇌섹남이다"},{title:"꾸안꾸",value:"꾸민 듯 안 꾸민 듯",explain:"매우 세밀하게 꾸민 듯하지만 동시에 그렇게 보이지 않도록 손질한 스타일을 가리킨다. 다소 부실하거나 복잡해 보이지 않으면서도 실은 많은 노력을 기울여 완성된 느낌을 주는 모습을 말한다. 예)나 오늘 누구 만나러 갈 때 꾸안꾸 스타일로 입고 갈거야"},{title:"정윤서",value:"신한사의 개발자 중 한명.",explain:"2024학년도 선덕고 1학년 11반 27번이다. 피파 최대 티어가 프로1이다."},{title:"핵인싸",value:"인싸에 강조하는 의미에 신조어 핵을 붙인 말",explain:"매우 사교적이고 활동적인 사람을 의미한다. 예) 쟤는 매주 파티를 가는 걸 보니 핵인싸다"},{title:"조삼모사",value:"조금 모르면 삼번 아예 모르면 사번 이라는 뜻",explain:"기존 뜻과 다르게 혹독한 교육과정을 밟는 학생들이 시험 공부를 안해 문제를 풀지 못할 때 사용하는 전략 중 하나이다. Ex) A: 야 이번에 몇번으로 찍을까?  B: 조삼모사 알잖아 ㅋㅋ"},{title:"이왜진",value:"이게 왜 진짜야?",explain:"이왜진?"},{title:"재미뿌",value:"재미를 뿌셨다",explain:"‘재미를 부(뿌)셨다’ 의 줄임말로 재미가 없는 상황을 뜻합니다."},{title:"강동규",value:"이끾끼",explain:"리듀슈"},{title:"리퀴드폴리탄",value:"액체(Liquid)+시민(Politan)",explain:"‘액체’와 ‘시민’의 합성어로, 공간적인 지역 개념을 넘어 유연하게 변화하는 시민을 의미합니다."},{title:"현타",value:"현실 자각 타임",explain:" 자신이 처한 현실을 갑자기 깨닫게 되는 순간을 의미한다. 예) 오늘 시험보고 내 인생에서 현타 왔어"},{title:"디토 소비",value:"디토(Ditto) 소비(Consumption)",explain:"'제대로 된 구매 결정 과정을 생략하고 특정 사람, 콘텐츠, 커머스를 따라 구매하는 트렌드'를 가리키는 말입니다."},{title:"은주",value:"친구 엄마 이름을 부르는 데에서 유래한 말. ",explain:"원래는 특정 인물한테만 사용하는 말이었으나 점차 상용화되면서 부모님 특히 엄마를 통칭하는 말이 되었다. Ex) 어어 은주"},{title:"드립",value:"애드립의 줄임말",explain:"즉흥적으로 던지는 재치 있는 말이나 농담을 의미한다. 예) 너 드립 좀 재밌다?"},{title:"내또출",value:"내일 또 출근의 줄임말",explain:"바쁘게 살아가는 현대 직장인들이 주로 사용하는 단어이다. Ex) A: 내일 뭐함?  B: 내또출이요~ "},{title:"짜치다",value:" ",explain:"’(물건 등이)기대에 못미치고 별로다.‘ 라는 뜻입니다. 예)이 카페는 건물 내부만 예쁘고 커피 맛이 짜치다."},{title:"값",value:"뜻",explain:"설명"},{title:"t1",value:"t2",explain:"t3"},{title:"재기하다",value:"극단적 선택(자살)을 하다라는 뜻의 신조어",explain:"전 남성연대 대표 성재기의 성재기 한강 투신사건에서 여성들이 한국 남자들에게 성재기처럼 자살해라 라는 의미로 사용된다."},{title:"시츄에이션십",value:"영어 Situationship을 한국식 발음으로 부르는 말",explain:"정식으로 정의되지 않은, 모호한 로맨틱 또는 성적인 관계를 나타내는 말로, 썸(something)과는 뉘앙스 자체가 다르다."},{title:"당발 ",value:"당첨자 발표",explain:" "},{title:"은반",value:"은근슬쩍 반말의 줄임말",explain:"상대의 동의를 구하지 않고 자연스럽게 말을 놓을 때 사용하는 말이다. Ex) 너 요즘 자꾸 은반한다? "},{title:"읽씹",value:"읽고 씹는다의 줄임말",explain:"주로 SNS 상에서 메시지를 받은 사람이 상대방의 메시지를 보기만 하고 아무 답장도 해주지 않았을 때 사용한다.  Ex) 너 왜 자꾸 내 말 읽씹해??"},{title:"어둠의마왕강당근",value:"당근심부름",explain:"당근심부름"},{title:"기기창",value:"기기창",explain:"기기창"},{title:"욜로족",value:"You Only Live Once의 줄임말",explain:"어차피 한번 사는 인생 내 마음대로 살아보자 라는 생각을 가진 사람들을 의미함."},{title:"단짠",value:"단맛+짠맛, 달고 짠 맛",explain:"아이스크림과 감자튀김을 같이 먹으면 최고의 단짠 조합이다"},{title:"700",value:"귀여워를 나타내는 말",explain:"귀여워의 초성인 'ㄱㅇㅇ'를 숫자로 나타낸 표현이다."},{title:"트리녀",value:"트랜드를 리드하는 여자",explain:"’트랜드를 리드하는 여자‘ 의 줄임말로, 트랜드를 리드하는 사람(여자)을 뜻합니다."},{title:"니거",value:"흑인을 일컫는 말",explain:"보통 피부가 까만 사람을 놀릴 때 흑인들끼리 쓰는 별칭인 '니거(nigger)'를 사용한다. Ex) 아 오늘 땡볕에 축구했더니 팔이 니거가 됐다.."},{title:"나포츠족",value:"나이트(Night)+스포츠(Sports)",explain:"밤을 뜻하는 ‘나이트(Night)'와 운동을 뜻하는 스포츠(Sports)의 합성어로 밤에 운동하는 사람들을 뜻합니다."},{title:"아바라",value:"아이스바닐라라떼",explain:" "},{title:"트리남",value:"트랜드를 리드하는 남자",explain:"‘트랜드를 리드하는 남자’ 의 줄임말로, 트랜드를 선도하는 사람(남자)을 뜻합니다."},{title:"방방봐",value:"방송은 방송으로만 봐라의 줄임말.",explain:"방송은 방송일 뿐 너무 진지하게 받아들이지 말라는 뜻이다.  Ex) 친구야 이런건 그냥 방방봐 알았지?"},{title:"자만추",value:"자연스러운 만남을 추구한다",explain:" 소개팅, 맞선 등의 인위적인 만남보다는 일상생활 속에서 자연스럽게 사람을 만나고 싶다는 의미 예)난 소개팅하는 스타일 보다는 자만추를 하는 스타일이야"},{title:"코스크",value:"코와 마스크의 -스크를 합친 말.",explain:"입만 가리고 코는 가리지 않은 마스크를 말한다. Ex) 이 시국에 코스크 좀 그만 써!!"},{title:"고양이",value:"고양이",explain:"고양이"},{title:"트민남",value:"트랜드에 민감한 남자",explain:"‘트랜드에 민감한 남자’ 의 줄임말으로, 트랜드를 따라가는 사람(남자)를 말합니다."},{title:"캣맘",value:"고양이를 뜻하는 캣(cat)과 엄마를 뜻하는 맘(mom) 을 합친 말, 달리 말하면 '고양이 엄마'다.",explain:"자신의 반료묘에 각별한 애정을 쏟으며 사회 전반에 문제를 야기하는 여성/남성을 통칭하는 말이다. 또한 길거리 야생고양이들에게 먹이를 제공함으로써 고양이들의 야생성을 없애고 주거지 근처에 소음을 일으키기도 한다."},{title:"얼죽아",value:"얼어 죽어도 아이스 아메리카노의 줄임말",explain:"아이스 아메리카노를 사랑하는 사람들이 추운 계절인 가을이나 겨울에도 따뜻한 아메리카노가 아닌 차가운 아메리카노를 선호하는 경우를 말한다. "},{title:"도파밍",value:"도파민(Dopamine)+파밍(Farming)",explain:"새롭고 재미있는 것을 경험할 때 분비되는 신경전달 물질 '도파민'과 게임 용어 '파밍'의 합성어로, 즐거움을 추구하는 행동을 의미합니다."},{title:"반모",value:"반말모드",explain:"반말을 사용한다는 뜻 예)반모 가능할까요?"},{title:"억까",value:"억지로 까다/까이다",explain:"이유 없이 비판하거나 공격하는 것을 의미 타당한 이유 없이 억지로 남을 비난하거나 헐뜯는 상황에서 사용된다. 예) (억울한 상황) 아니 내가 먹은거 아니라고 억까하지마."},{title:"오리",value:"꽥꽦",explain:"멍멍"},{title:"콩글리쉬",value:"코리아의 '코'와 잉글리쉬를 합친 말",explain:'주로 영국 또는 미국 본토 발음에서 크게 벗어나는 발음, 곧 한국식 발음으로 영어를 읽는 사람에게 자주 사용한다. "아이 엠 어 티쳐" 등이 콩글리쉬 사용 예시다. '},{title:"이끼기",value:"가짜",explain:"테승트"},{title:"피방",value:"PC방",explain:" "},{title:"여미새",value:"여자애 미친 새끼의 줄임말.",explain:"여자를 극히 밝히는 사람, 보통 남자들을 일컫는 말이다. Ex) A: 야 저기 여자 이쁘다  B: 어후 저 여미새.."},{title:"점메추",value:"점심 메뉴 추천의 줄임말.",explain:" "},{title:"체크메이트",value:"특히 남자화장실에서 오줌을 쌀 수 없는 상황을 일컫는 말",explain:"남자화장실에서 보통 남자들은 자신의 양 옆 칸을 비워두는 경향이 있는데, 애매하게 가운데에 자리를 잡아 다른 이들이 볼일을 보기 난처한 상황을 의미한다. "},{title:"https://onedrive.live.com/edit?id=204EF76E4712E1B7!s922617bad42a4b1c97fbe12db85fad37&resid=204EF76E4712E1B7!s922617bad42a4b1c97fbe12db85fad37&cid=204ef76e4712e1b7&ithint=file%2Cpptx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy8yMDRlZjc2ZTQ3MTJlMWI3L0Vib1hKcElxMUJ4TGxfdmhMYmhmclRjQkdrVWc1aldiTXNMWVJVR3JTODhyREE_ZT1kckRtcTI&migratedtospo=true&wdo=2",value:"https://onedrive.live.com/edit?id=204EF76E4712E1B7!s922617bad42a4b1c97fbe12db85fad37&resid=204EF76E4712E1B7!s922617bad42a4b1c97fbe12db85fad37&cid=204ef76e4712e1b7&ithint=file%2Cpptx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy8yMDRlZjc2ZTQ3MTJlMWI3L0Vib1hKcElxMUJ4TGxfdmhMYmhmclRjQkdrVWc1aldiTXNMWVJVR3JTODhyREE_ZT1kckRtcTI&migratedtospo=true&wdo=2",explain:"bdidsissjsjzjzsbsbsnznznzzbzbzbshshsshshsushsshssu37ruehe7rbdz7sjcejdzcejgdtdtjzuevsfey26374i5h48sbsisnzosbzjshushshshshzisnsuevjscuegsuwv"},{title:"Sample Title",value:"Sample Value",explain:"This is a sample explanation."},{title:"식집사",value:"식물+집사",explain:"‘식물’과 ‘집사’의 합성어로, 식물을 정성스럽게 키우는 사람을 지칭하는 말입니다."},{title:"뜨아",value:"뜨거운 아메리카노의 줄임말.",explain:" "},{title:"별다줄",value:"별걸 다 줄이네",explain:" "},{title:"생기부",value:"생활기록부의 줄임말",explain:"대한민국 학생들이라면 누구나 한번쯤 들어본 단어이다. 그만큼 생활기록부가 고입, 대입에 있어 매우 중요하다는 것이다."},{title:"영고",value:"'영원히 고통받는'의 줄임말.",explain:"보통 게임이나 스포츠에서 많이 사용되며, 끊이지 않는 부진에 빠져있음을 나타낸다. '영고 라인' 이라는 말과 함께 사용되기도 한다."},{title:"일며들다",value:"일이 내 삶에 스며들었다.",explain:"‘일이 내 삶에 스며들었다’의 줄임말로, 직장인들이 출근과 퇴근을 오가면서 느끼는 고단함을 표현하는 말입니다."},{title:"까리하다",value:"잘 생기고 센스 있고 멋있어 보이는 상태",explain:"사람뿐만 아니라 각종 사물 등에도 흔히 사용되는 말이다. Ex) 야 너 좀 까리한데?"},{title:"캘박",value:"캘린더 박제",explain:"중요한 일을 캘린더에 박제 하여 잊지 않겠다는 뜻 예)우리 다음 주 약속 캘박 할게"},{title:"갓생",value:"God(갓)+생(인생)",explain:"‘God(갓)’과 ‘생(인생)‘의 합성어로, 열심히 생산적이고 계획적인 삶을 사는 사람을 뜻하는 말입니다."},{title:"인싸",value:"인사이더",explain:'"인싸"는 한국어에서 "인사이더"의 줄임말로, 주로 특정 그룹이나 사회에서 중심에 있는 사람을 뜻 한다. 예) 너 자주 놀러 다니는걸 보니 인싸구나?'},{title:"월루",value:"월급루",explain:"직장에서 일을 제대로 하지 않고 시간을 보내면서 월급만 받는 사람을 의미한다. 예) 대리님은 맨날 직원한테 시키고 정작 자기는 아무것도 안 하는 걸 보니 월루이다"},{title:"보배",value:"보조배터리",explain:"‘보조배터리’의 줄임말 입니다."},{title:"금사빠",value:"금방 사랑에 빠지는 사람",explain:"새로운 사람을 만나면 쉽게 사랑에 빠지는 성향을 가진 사람을 의미한다. 예) 쟤는 맨날 사랑하는 사람이 바뀌는걸 보면 금사빠인가봐"},{title:"MB",value:"명박",explain:"이명박을  지칭"},{title:"짤",value:"짧은 이미지나 영상 클립",explain:" 재미있거나 유머러스한 상황을 표현하는 이미지나 GIF 파일을 의미한다. 예) 짤 좀 보내봐"},{title:"문켓몬스터",value:"문재인+포켓몬스터의 줄임말.",explain:"문재인 전 대통령을 여러 포켓몬스터에 합성한 것이다."},{title:"내또학",value:"'내일 또 학교간다' 의 줄임말",explain:"'아직 목요일이네. 내또학이다.'"},{title:"ㄹㅇㅋㅋ",value:"리얼크크의 초성을 딴 말.",explain:" "},{title:"신한사",value:"신조어 한국어 사전을 일컫는 말",explain:"2024년 선덕고등학교 1학년 '말모이'에서 만든 사전이다."},{title:"스카",value:"스터디카페",explain:"나랑 스카 가자"},{title:"완내스",value:"'완전 내 스타일' 의 줄임말",explain:"'이 옷 왠내스야'"},{title:"영고 ",value:"ㅋㄴ",explain:"ㅋㄷ"}];function tu(n,e,t){const r=n.slice();return r[17]=e[t],r}function nu(n){let e,t,r="Main",i,s,a="시작",l,c;return{c(){e=D("div"),t=D("button"),t.textContent=r,i=q(),s=D("button"),s.textContent=a,this.h()},l(h){e=V(h,"DIV",{class:!0});var d=$(e);t=V(d,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-8azga8"&&(t.textContent=r),d.forEach(N),i=z(h),s=V(h,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(s)!=="svelte-zrbsg9"&&(s.textContent=a),this.h()},h(){R(t,"class","close-button svelte-cv23mb"),R(e,"class","close-button_div svelte-cv23mb"),R(s,"class","svelte-cv23mb")},m(h,d){Y(h,e,d),A(e,t),Y(h,i,d),Y(h,s,d),l||(c=[K(t,"click",n[8]),K(s,"click",n[5])],l=!0)},p:we,d(h){h&&(N(e),N(i),N(s)),l=!1,Rt(c)}}}function ru(n){let e,t,r,i,s,a,l,c,h,d,p,g,w,y,b=ut(n[1]),P=[];for(let M=0;M<b.length;M+=1)P[M]=iu(tu(n,b,M));return{c(){e=D("div"),t=D("h2"),r=Re("남은시간: "),i=Re(n[3]),s=Re("s"),a=q(),l=D("h2"),c=Re("점수: "),h=Re(n[2]),d=q(),p=D("p"),g=Re(n[0]),w=q(),y=D("div");for(let M=0;M<P.length;M+=1)P[M].c();this.h()},l(M){e=V(M,"DIV",{});var F=$(e);t=V(F,"H2",{class:!0});var x=$(t);r=Ce(x,"남은시간: "),i=Ce(x,n[3]),s=Ce(x,"s"),x.forEach(N),a=z(F),l=V(F,"H2",{class:!0});var B=$(l);c=Ce(B,"점수: "),h=Ce(B,n[2]),B.forEach(N),d=z(F),p=V(F,"P",{class:!0});var G=$(p);g=Ce(G,n[0]),G.forEach(N),w=z(F),y=V(F,"DIV",{class:!0});var U=$(y);for(let T=0;T<P.length;T+=1)P[T].l(U);U.forEach(N),F.forEach(N),this.h()},h(){R(t,"class","svelte-cv23mb"),R(l,"class","svelte-cv23mb"),R(p,"class","svelte-cv23mb"),R(y,"class","options svelte-cv23mb")},m(M,F){Y(M,e,F),A(e,t),A(t,r),A(t,i),A(t,s),A(e,a),A(e,l),A(l,c),A(l,h),A(e,d),A(e,p),A(p,g),A(e,w),A(e,y);for(let x=0;x<P.length;x+=1)P[x]&&P[x].m(y,null)},p(M,F){if(F&8&&Ge(i,M[3]),F&4&&Ge(h,M[2]),F&1&&Ge(g,M[0]),F&66){b=ut(M[1]);let x;for(x=0;x<b.length;x+=1){const B=tu(M,b,x);P[x]?P[x].p(B,F):(P[x]=iu(B),P[x].c(),P[x].m(y,null))}for(;x<P.length;x+=1)P[x].d(1);P.length=b.length}},d(M){M&&N(e),Pn(P,M)}}}function iu(n){let e,t=n[17]+"",r,i,s;function a(){return n[9](n[17])}return{c(){e=D("div"),r=Re(t),this.h()},l(l){e=V(l,"DIV",{class:!0});var c=$(e);r=Ce(c,t),c.forEach(N),this.h()},h(){R(e,"class","option svelte-cv23mb")},m(l,c){Y(l,e,c),A(e,r),i||(s=K(e,"click",a),i=!0)},p(l,c){n=l,c&2&&t!==(t=n[17]+"")&&Ge(r,t)},d(l){l&&N(e),i=!1,s()}}}function su(n){let e,t,r,i,s,a="점수 업로드",l,c;return{c(){e=D("h2"),t=Re("타임오버! 당신의 점수: "),r=Re(n[2]),i=q(),s=D("span"),s.textContent=a,this.h()},l(h){e=V(h,"H2",{class:!0});var d=$(e);t=Ce(d,"타임오버! 당신의 점수: "),r=Ce(d,n[2]),d.forEach(N),i=z(h),s=V(h,"SPAN",{id:!0,class:!0,"data-svelte-h":!0}),ee(s)!=="svelte-5oauhd"&&(s.textContent=a),this.h()},h(){R(e,"class","svelte-cv23mb"),R(s,"id","scup"),R(s,"class","svelte-cv23mb")},m(h,d){Y(h,e,d),A(e,t),A(e,r),Y(h,i,d),Y(h,s,d),l||(c=K(s,"click",n[7]),l=!0)},p(h,d){d&4&&Ge(r,h[2])},d(h){h&&(N(e),N(i),N(s)),l=!1,c()}}}function fE(n){let e,t,r,i=!n[4]&&nu(n),s=n[4]&&ru(n),a=!n[4]&&n[3]===0&&su(n);return{c(){e=D("main"),i&&i.c(),t=q(),s&&s.c(),r=q(),a&&a.c(),this.h()},l(l){e=V(l,"MAIN",{class:!0});var c=$(e);i&&i.l(c),t=z(c),s&&s.l(c),r=z(c),a&&a.l(c),c.forEach(N),this.h()},h(){R(e,"class","game svelte-cv23mb")},m(l,c){Y(l,e,c),i&&i.m(e,null),A(e,t),s&&s.m(e,null),A(e,r),a&&a.m(e,null)},p(l,[c]){l[4]?i&&(i.d(1),i=null):i?i.p(l,c):(i=nu(l),i.c(),i.m(e,t)),l[4]?s?s.p(l,c):(s=ru(l),s.c(),s.m(e,r)):s&&(s.d(1),s=null),!l[4]&&l[3]===0?a?a.p(l,c):(a=su(l),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:we,o:we,d(l){l&&N(e),i&&i.d(),s&&s.d(),a&&a.d()}}}function pE(n,e,t){let r;ct(n,_e,B=>t(13,r=B));let i=[],s=[],a="",l=[],c=0,h=30,d,p=!1;Sn(()=>{i=Bi.map(B=>B.explain),s=Bi.map(B=>B.title)});const w=is().currentUser;function y(){t(4,p=!0),t(2,c=0),t(3,h=30),b(),d=setInterval(()=>{h>0?t(3,h--,h):(clearInterval(d),t(4,p=!1),uploadScorePrompt())},1e3)}function b(){t(0,a=i[Math.floor(Math.random()*i.length)]);const B=Bi.find(U=>U.explain===a).title;let G=s.filter(U=>U!==B);t(1,l=[B,...G.sort(()=>.5-Math.random()).slice(0,5)].sort(()=>.5-Math.random()))}function P(B){const G=Bi.find(U=>U.explain===a).title;B===G&&t(2,c++,c),b()}async function M(){try{const B=Wn(Le,"score",w.email);await xy(B,{sc:c},{merge:!0}),alert("점수가 업로드되었습니다."),be(_e,r=0,r)}catch(B){console.error("Error adding document: ",B),alert("점수 업로드에 실패했습니다.")}}return[a,l,c,h,p,y,P,M,()=>{be(_e,r=0,r)},B=>P(B)]}class mE extends Ct{constructor(e){super(),St(this,e,pE,fE,bt,{})}}function ou(n,e,t){const r=n.slice();return r[3]=e[t],r}function au(n){let e,t,r=n[3].index+"",i,s,a,l=n[3].id+"",c,h;return{c(){e=D("div"),t=D("span"),i=Re(r),s=Re("위"),a=q(),c=Re(l),h=q(),this.h()},l(d){e=V(d,"DIV",{class:!0});var p=$(e);t=V(p,"SPAN",{class:!0});var g=$(t);i=Ce(g,r),s=Ce(g,"위"),g.forEach(N),a=z(p),c=Ce(p,l),h=z(p),p.forEach(N),this.h()},h(){R(t,"class","svelte-1jb9vuc"),R(e,"class","box svelte-1jb9vuc")},m(d,p){Y(d,e,p),A(e,t),A(t,i),A(t,s),A(e,a),A(e,c),A(e,h)},p(d,p){p&1&&r!==(r=d[3].index+"")&&Ge(i,r),p&1&&l!==(l=d[3].id+"")&&Ge(c,l)},d(d){d&&N(e)}}}function gE(n){let e,t,r="Main",i,s,a,l,c,h,d=ut(n[0]),p=[];for(let g=0;g<d.length;g+=1)p[g]=au(ou(n,d,g));return{c(){e=D("div"),t=D("button"),t.textContent=r,i=q(),s=D("div"),a=q(),l=D("div");for(let g=0;g<p.length;g+=1)p[g].c();this.h()},l(g){e=V(g,"DIV",{class:!0});var w=$(e);t=V(w,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-8azga8"&&(t.textContent=r),w.forEach(N),i=z(g),s=V(g,"DIV",{id:!0,class:!0}),$(s).forEach(N),a=z(g),l=V(g,"DIV",{class:!0});var y=$(l);for(let b=0;b<p.length;b+=1)p[b].l(y);y.forEach(N),this.h()},h(){R(t,"class","close-button svelte-1jb9vuc"),R(e,"class","close-button_div svelte-1jb9vuc"),R(s,"id","c"),R(s,"class","svelte-1jb9vuc"),R(l,"class","container svelte-1jb9vuc")},m(g,w){Y(g,e,w),A(e,t),Y(g,i,w),Y(g,s,w),Y(g,a,w),Y(g,l,w);for(let y=0;y<p.length;y+=1)p[y]&&p[y].m(l,null);c||(h=K(t,"click",n[1]),c=!0)},p(g,[w]){if(w&1){d=ut(g[0]);let y;for(y=0;y<d.length;y+=1){const b=ou(g,d,y);p[y]?p[y].p(b,w):(p[y]=au(b),p[y].c(),p[y].m(l,null))}for(;y<p.length;y+=1)p[y].d(1);p.length=d.length}},i:we,o:we,d(g){g&&(N(e),N(i),N(s),N(a),N(l)),Pn(p,g),c=!1,h()}}}function _E(n,e,t){let r;ct(n,_e,a=>t(2,r=a));let i=[];return Sn(async()=>{const a=ft(Le,"score"),l=Gt(a,fs("sc","desc")),c=await Mt(l);t(0,i=c.docs.map((h,d)=>({id:h.id,index:d+1})))}),[i,()=>{be(_e,r=0,r)}]}class vE extends Ct{constructor(e){super(),St(this,e,_E,gE,bt,{})}}function yE(n){let e,t,r,i="로그인",s,a,l="Google",c,h;return{c(){e=D("div"),t=D("div"),r=D("h1"),r.textContent=i,s=q(),a=D("button"),a.textContent=l,this.h()},l(d){e=V(d,"DIV",{id:!0,class:!0});var p=$(e);t=V(p,"DIV",{class:!0});var g=$(t);r=V(g,"H1",{class:!0,"data-svelte-h":!0}),ee(r)!=="svelte-1bvi8l2"&&(r.textContent=i),s=z(g),a=V(g,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(a)!=="svelte-g8tqx5"&&(a.textContent=l),g.forEach(N),p.forEach(N),this.h()},h(){R(r,"class","svelte-j50zhz"),R(a,"class","svelte-j50zhz"),R(t,"class","login-container svelte-j50zhz"),R(e,"id","L_body"),R(e,"class","svelte-j50zhz")},m(d,p){Y(d,e,p),A(e,t),A(t,r),A(t,s),A(t,a),c||(h=K(a,"click",n[3]),c=!0)},p:we,i:we,o:we,d(d){d&&N(e),c=!1,h()}}}function EE(n){let e,t,r,i;const s=[VE,DE,kE,PE,SE,CE,RE,bE,AE,wE,TE],a=[];function l(c,h){return c[2]==0?0:c[2]==1?1:c[2]==2?2:c[2]==3?3:c[2]==4?4:c[2]==5?5:c[2]==6?6:c[2]==7?7:c[2]==8?8:c[2]==9?9:c[2]==10?10:-1}return~(e=l(n))&&(t=a[e]=s[e](n)),{c(){t&&t.c(),r=Al()},l(c){t&&t.l(c),r=Al()},m(c,h){~e&&a[e].m(c,h),Y(c,r,h),i=!0},p(c,h){let d=e;e=l(c),e!==d&&(t&&(uu(),pt(a[d],1,1,()=>{a[d]=null}),cu()),~e?(t=a[e],t||(t=a[e]=s[e](c),t.c()),mt(t,1),t.m(r.parentNode,r)):t=null)},i(c){i||(mt(t),i=!0)},o(c){pt(t),i=!1},d(c){c&&N(r),~e&&a[e].d(c)}}}function IE(n){let e,t="[ Developer : G37 ]";return{c(){e=D("div"),e.textContent=t,this.h()},l(r){e=V(r,"DIV",{class:!0,"data-svelte-h":!0}),ee(e)!=="svelte-67okfr"&&(e.textContent=t),this.h()},h(){R(e,"class","loading-screen svelte-j50zhz")},m(r,i){Y(r,e,i)},p:we,i:we,o:we,d(r){r&&N(e)}}}function TE(n){let e,t;return e=new vE({}),{c(){Ut(e.$$.fragment)},l(r){Ft(e.$$.fragment,r)},m(r,i){Bt(e,r,i),t=!0},i(r){t||(mt(e.$$.fragment,r),t=!0)},o(r){pt(e.$$.fragment,r),t=!1},d(r){jt(e,r)}}}function wE(n){let e,t;return e=new mE({}),{c(){Ut(e.$$.fragment)},l(r){Ft(e.$$.fragment,r)},m(r,i){Bt(e,r,i),t=!0},i(r){t||(mt(e.$$.fragment,r),t=!0)},o(r){pt(e.$$.fragment,r),t=!1},d(r){jt(e,r)}}}function AE(n){let e,t;return e=new dE({}),{c(){Ut(e.$$.fragment)},l(r){Ft(e.$$.fragment,r)},m(r,i){Bt(e,r,i),t=!0},i(r){t||(mt(e.$$.fragment,r),t=!0)},o(r){pt(e.$$.fragment,r),t=!1},d(r){jt(e,r)}}}function bE(n){let e,t;return e=new cE({}),{c(){Ut(e.$$.fragment)},l(r){Ft(e.$$.fragment,r)},m(r,i){Bt(e,r,i),t=!0},i(r){t||(mt(e.$$.fragment,r),t=!0)},o(r){pt(e.$$.fragment,r),t=!1},d(r){jt(e,r)}}}function RE(n){let e,t;return e=new oE({}),{c(){Ut(e.$$.fragment)},l(r){Ft(e.$$.fragment,r)},m(r,i){Bt(e,r,i),t=!0},i(r){t||(mt(e.$$.fragment,r),t=!0)},o(r){pt(e.$$.fragment,r),t=!1},d(r){jt(e,r)}}}function CE(n){let e,t;return e=new rE({}),{c(){Ut(e.$$.fragment)},l(r){Ft(e.$$.fragment,r)},m(r,i){Bt(e,r,i),t=!0},i(r){t||(mt(e.$$.fragment,r),t=!0)},o(r){pt(e.$$.fragment,r),t=!1},d(r){jt(e,r)}}}function SE(n){let e,t;return e=new eE({}),{c(){Ut(e.$$.fragment)},l(r){Ft(e.$$.fragment,r)},m(r,i){Bt(e,r,i),t=!0},i(r){t||(mt(e.$$.fragment,r),t=!0)},o(r){pt(e.$$.fragment,r),t=!1},d(r){jt(e,r)}}}function PE(n){let e,t;return e=new Yy({}),{c(){Ut(e.$$.fragment)},l(r){Ft(e.$$.fragment,r)},m(r,i){Bt(e,r,i),t=!0},i(r){t||(mt(e.$$.fragment,r),t=!0)},o(r){pt(e.$$.fragment,r),t=!1},d(r){jt(e,r)}}}function kE(n){let e,t;return e=new Ky({}),{c(){Ut(e.$$.fragment)},l(r){Ft(e.$$.fragment,r)},m(r,i){Bt(e,r,i),t=!0},i(r){t||(mt(e.$$.fragment,r),t=!0)},o(r){pt(e.$$.fragment,r),t=!1},d(r){jt(e,r)}}}function DE(n){let e,t;return e=new Hy({}),{c(){Ut(e.$$.fragment)},l(r){Ft(e.$$.fragment,r)},m(r,i){Bt(e,r,i),t=!0},i(r){t||(mt(e.$$.fragment,r),t=!0)},o(r){pt(e.$$.fragment,r),t=!1},d(r){jt(e,r)}}}function VE(n){let e,t;return e=new qy({}),{c(){Ut(e.$$.fragment)},l(r){Ft(e.$$.fragment,r)},m(r,i){Bt(e,r,i),t=!0},i(r){t||(mt(e.$$.fragment,r),t=!0)},o(r){pt(e.$$.fragment,r),t=!1},d(r){jt(e,r)}}}function NE(n){let e,t,r,i;const s=[IE,EE,yE],a=[];function l(c,h){return c[1]?0:c[0]?1:2}return t=l(n),r=a[t]=s[t](n),{c(){e=D("main"),r.c(),this.h()},l(c){e=V(c,"MAIN",{class:!0});var h=$(e);r.l(h),h.forEach(N),this.h()},h(){R(e,"class","svelte-j50zhz")},m(c,h){Y(c,e,h),a[t].m(e,null),i=!0},p(c,[h]){let d=t;t=l(c),t===d?a[t].p(c,h):(uu(),pt(a[d],1,1,()=>{a[d]=null}),cu(),r=a[t],r?r.p(c,h):(r=a[t]=s[t](c),r.c()),mt(r,1),r.m(e,null))},i(c){i||(mt(r),i=!0)},o(c){pt(r),i=!1},d(c){c&&N(e),a[t].d()}}}function OE(n,e,t){let r;ct(n,_e,l=>t(2,r=l)),console.log(r);let i=null,s=!0;return Sn(()=>{Yo(ms,l=>{t(0,i=l),t(1,s=!1)})}),[i,s,r,async()=>{const l=new en;try{await Lm(ms,l)}catch(c){console.error("Error signing in:",c)}}]}class jE extends Ct{constructor(e){super(),St(this,e,OE,NE,bt,{})}}export{jE as component};
