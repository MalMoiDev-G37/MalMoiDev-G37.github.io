import{s as Rt,x as Hd,n as Te,r as Ot,b as dt,o as Rn,i as Gd,y as Re,z as Wd}from"../chunks/scheduler.li6PcnJj.js";import{S as St,i as Ct,e as D,s as j,c as V,d as z,y as ne,h as q,g as N,o as S,z as He,p as Ue,j as ee,k as b,A as W,B as Sn,b as Ae,f as be,l as Fe,C as Kd,D as we,E as lu,a as _t,n as cu,t as vt,q as uu,m as Al,u as xt,v as Mt,w as Lt,x as Ut}from"../chunks/index.PGWTL56s.js";import{w as ps}from"../chunks/index.ChQ1qdP7.js";function ft(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}var bl={};/**
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
 */const hu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Qd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},du={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,d=s>>2,g=(s&3)<<4|l>>4;let p=(l&15)<<2|h>>6,y=h&63;c||(y=64,a||(p=64)),r.push(t[d],t[g],t[p],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(hu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Qd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new Jd;const p=s<<2|l>>4;if(r.push(p),h!==64){const y=l<<4&240|h>>2;if(r.push(y),g!==64){const _=h<<6&192|g;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yd=function(n){const e=hu(n);return du.encodeByteArray(e,!0)},Ki=function(n){return Yd(n).replace(/\./g,"")},fu=function(n){try{return du.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Zd=()=>Xd().__FIREBASE_DEFAULTS__,ef=()=>{if(typeof process>"u"||typeof bl>"u")return;const n=bl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fu(n[1]);return e&&JSON.parse(e)},ms=()=>{try{return Zd()||ef()||tf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pu=n=>{var e,t;return(t=(e=ms())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},nf=n=>{const e=pu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},mu=()=>{var n;return(n=ms())===null||n===void 0?void 0:n.config},gu=n=>{var e;return(e=ms())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */function sf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ki(JSON.stringify(t)),Ki(JSON.stringify(a)),""].join(".")}/**
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function of(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function af(){var n;const e=(n=ms())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uf(){const n=st();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hf(){return!af()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function df(){try{return typeof indexedDB=="object"}catch{return!1}}function ff(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const pf="FirebaseError";class sn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=pf,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?mf(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new sn(i,l,r)}}function mf(n,e){return n.replace(gf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gf=/\{\$([^}]+)}/g;function _f(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Rl(s)&&Rl(a)){if(!Qi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Rl(n){return n!==null&&typeof n=="object"}/**
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
 */function oi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vf(n,e){const t=new yf(n,e);return t.subscribe.bind(t)}class yf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ef(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=to),i.error===void 0&&(i.error=to),i.complete===void 0&&(i.complete=to);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ef(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function to(){}/**
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
 */function Ze(n){return n&&n._delegate?n._delegate:n}class Bn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const On="[DEFAULT]";/**
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
 */class If{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new rf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wf(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tf(n){return n===On?void 0:n}function wf(n){return n.instantiationMode==="EAGER"}/**
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
 */var ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ge||(ge={}));const bf={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Rf=ge.INFO,Sf={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Cf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Sf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lo{constructor(e){this.name=e,this._logLevel=Rf,this._logHandler=Cf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Pf=(n,e)=>e.some(t=>n instanceof t);let Sl,Cl;function kf(){return Sl||(Sl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Df(){return Cl||(Cl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _u=new WeakMap,fo=new WeakMap,vu=new WeakMap,no=new WeakMap,Uo=new WeakMap;function Vf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(vn(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&_u.set(t,n)}).catch(()=>{}),Uo.set(e,n),e}function Nf(n){if(fo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});fo.set(n,e)}let po={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return fo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Of(n){po=n(po)}function xf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ro(this),e,...t);return vu.set(r,e.sort?e.sort():[e]),vn(r)}:Df().includes(n)?function(...e){return n.apply(ro(this),e),vn(_u.get(this))}:function(...e){return vn(n.apply(ro(this),e))}}function Mf(n){return typeof n=="function"?xf(n):(n instanceof IDBTransaction&&Nf(n),Pf(n,kf())?new Proxy(n,po):n)}function vn(n){if(n instanceof IDBRequest)return Vf(n);if(no.has(n))return no.get(n);const e=Mf(n);return e!==n&&(no.set(n,e),Uo.set(e,n)),e}const ro=n=>Uo.get(n);function Lf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=vn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(vn(a.result),c.oldVersion,c.newVersion,vn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Uf=["get","getKey","getAll","getAllKeys","count"],Ff=["put","add","delete","clear"],io=new Map;function Pl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(io.get(e))return io.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Ff.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Uf.includes(t)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return io.set(e,s),s}Of(n=>({...n,get:(e,t,r)=>Pl(e,t)||n.get(e,t,r),has:(e,t)=>!!Pl(e,t)||n.has(e,t)}));/**
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
 */class Bf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function jf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mo="@firebase/app",kl="0.10.5";/**
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
 */const jn=new Lo("@firebase/app"),qf="@firebase/app-compat",zf="@firebase/analytics-compat",$f="@firebase/analytics",Hf="@firebase/app-check-compat",Gf="@firebase/app-check",Wf="@firebase/auth",Kf="@firebase/auth-compat",Qf="@firebase/database",Jf="@firebase/database-compat",Yf="@firebase/functions",Xf="@firebase/functions-compat",Zf="@firebase/installations",ep="@firebase/installations-compat",tp="@firebase/messaging",np="@firebase/messaging-compat",rp="@firebase/performance",ip="@firebase/performance-compat",sp="@firebase/remote-config",op="@firebase/remote-config-compat",ap="@firebase/storage",lp="@firebase/storage-compat",cp="@firebase/firestore",up="@firebase/vertexai-preview",hp="@firebase/firestore-compat",dp="firebase",fp="10.12.2";/**
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
 */const go="[DEFAULT]",pp={[mo]:"fire-core",[qf]:"fire-core-compat",[$f]:"fire-analytics",[zf]:"fire-analytics-compat",[Gf]:"fire-app-check",[Hf]:"fire-app-check-compat",[Wf]:"fire-auth",[Kf]:"fire-auth-compat",[Qf]:"fire-rtdb",[Jf]:"fire-rtdb-compat",[Yf]:"fire-fn",[Xf]:"fire-fn-compat",[Zf]:"fire-iid",[ep]:"fire-iid-compat",[tp]:"fire-fcm",[np]:"fire-fcm-compat",[rp]:"fire-perf",[ip]:"fire-perf-compat",[sp]:"fire-rc",[op]:"fire-rc-compat",[ap]:"fire-gcs",[lp]:"fire-gcs-compat",[cp]:"fire-fst",[hp]:"fire-fst-compat",[up]:"fire-vertex","fire-js":"fire-js",[dp]:"fire-js-all"};/**
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
 */const Ji=new Map,mp=new Map,_o=new Map;function Dl(n,e){try{n.container.addComponent(e)}catch(t){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function cr(n){const e=n.name;if(_o.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;_o.set(e,n);for(const t of Ji.values())Dl(t,n);for(const t of mp.values())Dl(t,n);return!0}function Fo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Jt(n){return n.settings!==void 0}/**
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
 */const gp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yn=new si("app","Firebase",gp);/**
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
 */class _p{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
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
 */const yr=fp;function yu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:go,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yn.create("bad-app-name",{appName:String(i)});if(t||(t=mu()),!t)throw yn.create("no-options");const s=Ji.get(i);if(s){if(Qi(t,s.options)&&Qi(r,s.config))return s;throw yn.create("duplicate-app",{appName:i})}const a=new Af(i);for(const c of _o.values())a.addComponent(c);const l=new _p(t,r,a);return Ji.set(i,l),l}function Eu(n=go){const e=Ji.get(n);if(!e&&n===go&&mu())return yu();if(!e)throw yn.create("no-app",{appName:n});return e}function En(n,e,t){var r;let i=(r=pp[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(l.join(" "));return}cr(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vp="firebase-heartbeat-database",yp=1,Jr="firebase-heartbeat-store";let so=null;function Iu(){return so||(so=Lf(vp,yp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Jr)}catch(t){console.warn(t)}}}}).catch(n=>{throw yn.create("idb-open",{originalErrorMessage:n.message})})),so}async function Ep(n){try{const t=(await Iu()).transaction(Jr),r=await t.objectStore(Jr).get(Tu(n));return await t.done,r}catch(e){if(e instanceof sn)jn.warn(e.message);else{const t=yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jn.warn(t.message)}}}async function Vl(n,e){try{const r=(await Iu()).transaction(Jr,"readwrite");await r.objectStore(Jr).put(e,Tu(n)),await r.done}catch(t){if(t instanceof sn)jn.warn(t.message);else{const r=yn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jn.warn(r.message)}}}function Tu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ip=1024,Tp=30*24*60*60*1e3;class wp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Tp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Nl(),{heartbeatsToSend:r,unsentEntries:i}=Ap(this._heartbeatsCache.heartbeats),s=Ki(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nl(){return new Date().toISOString().substring(0,10)}function Ap(n,e=Ip){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Ol(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ol(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class bp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return df()?ff().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ep(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ol(n){return Ki(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Rp(n){cr(new Bn("platform-logger",e=>new Bf(e),"PRIVATE")),cr(new Bn("heartbeat",e=>new wp(e),"PRIVATE")),En(mo,kl,n),En(mo,kl,"esm2017"),En("fire-js","")}Rp("");var Sp="firebase",Cp="10.12.2";/**
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
 */En(Sp,Cp,"app");function Bo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function wu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pp=wu,Au=new si("auth","Firebase",wu());/**
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
 */const Yi=new Lo("@firebase/auth");function kp(n,...e){Yi.logLevel<=ge.WARN&&Yi.warn(`Auth (${yr}): ${n}`,...e)}function Fi(n,...e){Yi.logLevel<=ge.ERROR&&Yi.error(`Auth (${yr}): ${n}`,...e)}/**
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
 */function $t(n,...e){throw qo(n,...e)}function Dt(n,...e){return qo(n,...e)}function jo(n,e,t){const r=Object.assign(Object.assign({},Pp()),{[e]:t});return new si("auth","Firebase",r).create(e,{appName:n.name})}function Ln(n){return jo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dp(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&$t(n,"argument-error"),jo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Au.create(n,...e)}function se(n,e,...t){if(!n)throw qo(e,...t)}function Yt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fi(e),new Error(e)}function en(n,e){n||Yt(e)}/**
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
 */function vo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Vp(){return xl()==="http:"||xl()==="https:"}function xl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */class ai{constructor(e,t){this.shortDelay=e,this.longDelay=t,en(t>e,"Short delay should be less than long delay!"),this.isMobile=of()||cf()}get(){return Np()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zo(n,e){en(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class bu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Mp=new ai(3e4,6e4);function $o(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Er(n,e,t,r,i={}){return Ru(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=oi(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),bu.fetch()(Su(n,n.config.apiHost,t,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ru(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},xp),e);try{const i=new Up(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Vi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vi(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Vi(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Vi(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jo(n,d,h);$t(n,d)}}catch(i){if(i instanceof sn)throw i;$t(n,"network-request-failed",{message:String(i)})}}async function Lp(n,e,t,r,i={}){const s=await Er(n,e,t,r,i);return"mfaPendingCredential"in s&&$t(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Su(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?zo(n.config,i):`${n.config.apiScheme}://${i}`}class Up{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),Mp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Dt(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function Fp(n,e){return Er(n,"POST","/v1/accounts:delete",e)}async function Cu(n,e){return Er(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bp(n,e=!1){const t=Ze(n),r=await t.getIdToken(e),i=Ho(r);se(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gr(oo(i.auth_time)),issuedAtTime:Gr(oo(i.iat)),expirationTime:Gr(oo(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function oo(n){return Number(n)*1e3}function Ho(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fi("JWT malformed, contained fewer than 3 sections"),null;try{const i=fu(t);return i?JSON.parse(i):(Fi("Failed to decode base64 JWT payload"),null)}catch(i){return Fi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ml(n){const e=Ho(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof sn&&jp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function jp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class yo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gr(this.lastLoginAt),this.creationTime=Gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Yr(n,Cu(t,{idToken:r}));se(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Pu(s.providerUserInfo):[],l=$p(n.providerData,a),c=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new yo(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,g)}async function zp(n){const e=Ze(n);await Xi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $p(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Pu(n){return n.map(e=>{var{providerId:t}=e,r=Bo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Hp(n,e){const t=await Ru(n,{},async()=>{const r=oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Su(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",bu.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Gp(n,e){return Er(n,"POST","/v2/accounts:revokeToken",$o(n,e))}/**
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
 */class ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ml(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=Ml(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Hp(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new ir;return r&&(se(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(se(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(se(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ir,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
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
 */function fn(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Bo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Yr(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bp(this,e)}reload(){return zp(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Xi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await Yr(this,Fp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,c,h,d;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,p=(i=t.email)!==null&&i!==void 0?i:void 0,y=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,_=(a=t.photoURL)!==null&&a!==void 0?a:void 0,w=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,L=(h=t.createdAt)!==null&&h!==void 0?h:void 0,U=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:x,emailVerified:H,isAnonymous:Q,providerData:B,stsTokenManager:A}=t;se(x&&A,e,"internal-error");const E=ir.fromJSON(this.name,A);se(typeof x=="string",e,"internal-error"),fn(g,e.name),fn(p,e.name),se(typeof H=="boolean",e,"internal-error"),se(typeof Q=="boolean",e,"internal-error"),fn(y,e.name),fn(_,e.name),fn(w,e.name),fn(P,e.name),fn(L,e.name),fn(U,e.name);const v=new Xt({uid:x,auth:e,email:p,emailVerified:H,displayName:g,isAnonymous:Q,photoURL:_,phoneNumber:y,tenantId:w,stsTokenManager:E,createdAt:L,lastLoginAt:U});return B&&Array.isArray(B)&&(v.providerData=B.map(T=>Object.assign({},T))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new ir;i.updateFromServerResponse(t);const s=new Xt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];se(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Pu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ir;l.updateFromIdToken(r);const c=new Xt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
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
 */const Ll=new Map;function Zt(n){en(n instanceof Function,"Expected a class definition");let e=Ll.get(n);return e?(en(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ll.set(n,e),e)}/**
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
 */function Bi(n,e,t){return`firebase:${n}:${e}:${t}`}class sr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new sr(Zt(Ul),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Zt(Ul);const a=Bi(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const d=await h._get(a);if(d){const g=Xt._fromJSON(e,d);h!==s&&(l=g),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new sr(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new sr(s,e,r))}}/**
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
 */function Fl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Du(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xu(e))return"Blackberry";if(Mu(e))return"Webos";if(Go(e))return"Safari";if((e.includes("chrome/")||Vu(e))&&!e.includes("edge/"))return"Chrome";if(Ou(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Du(n=st()){return/firefox\//i.test(n)}function Go(n=st()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vu(n=st()){return/crios\//i.test(n)}function Nu(n=st()){return/iemobile/i.test(n)}function Ou(n=st()){return/android/i.test(n)}function xu(n=st()){return/blackberry/i.test(n)}function Mu(n=st()){return/webos/i.test(n)}function gs(n=st()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wp(n=st()){var e;return gs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kp(){return uf()&&document.documentMode===10}function Lu(n=st()){return gs(n)||Ou(n)||Mu(n)||xu(n)||/windows phone/i.test(n)||Nu(n)}function Qp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Uu(n,e=[]){let t;switch(n){case"Browser":t=Fl(st());break;case"Worker":t=`${Fl(st())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yr}/${r}`}/**
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
 */async function Yp(n,e={}){return Er(n,"GET","/v2/passwordPolicy",$o(n,e))}/**
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
 */class em{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bl(this),this.idTokenSubscription=new Bl(this),this.beforeStateQueue=new Jp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Au,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Zt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await sr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Cu(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Jt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Op()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(Ln(this));const t=e?Ze(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yp(this),t=new Zp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Gp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Zt(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await sr.create(this,[Zt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&kp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function _s(n){return Ze(n)}class Bl{constructor(e){this.auth=e,this.observer=null,this.addObserver=vf(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tm(n){Wo=n}function nm(n){return Wo.loadJS(n)}function rm(){return Wo.gapiScript}function im(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function sm(n,e){const t=Fo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Qi(s,e??{}))return i;$t(i,"already-initialized")}return t.initialize({options:e})}function om(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Zt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function am(n,e,t){const r=_s(n);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Fu(e),{host:a,port:l}=lm(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),cm()}function Fu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function lm(n){const e=Fu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jl(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:jl(a)}}}function jl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function cm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Bu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,t){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}/**
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
 */async function or(n,e){return Lp(n,"POST","/v1/accounts:signInWithIdp",$o(n,e))}/**
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
 */const um="http://localhost";class qn extends Bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$t("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Bo(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new qn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return or(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,or(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,or(e,t)}buildRequest(){const e={requestUri:um,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=oi(t)}return e}}/**
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
 */class Ko{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class li extends Ko{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pn extends li{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
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
 */class Qt extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qt.credential(t,r)}catch{return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com";Qt.PROVIDER_ID="google.com";/**
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
 */class mn extends li{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class gn extends li{constructor(){super("twitter.com")}static credential(e,t){return qn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return gn.credential(t,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */class ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Xt._fromIdTokenResponse(e,r,i),a=ql(r);return new ur({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ql(r);return new ur({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ql(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Zi extends sn{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Zi(e,t,r,i)}}function ju(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zi._fromErrorAndOperation(n,s,e,r):s})}async function hm(n,e,t=!1){const r=await Yr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ur._forOperation(n,"link",r)}/**
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
 */async function dm(n,e,t=!1){const{auth:r}=n;if(Jt(r.app))return Promise.reject(Ln(r));const i="reauthenticate";try{const s=await Yr(n,ju(r,i,e,n),t);se(s.idToken,r,"internal-error");const a=Ho(s.idToken);se(a,r,"internal-error");const{sub:l}=a;return se(n.uid===l,r,"user-mismatch"),ur._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
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
 */async function fm(n,e,t=!1){if(Jt(n.app))return Promise.reject(Ln(n));const r="signIn",i=await ju(n,r,e),s=await ur._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function pm(n,e,t,r){return Ze(n).onIdTokenChanged(e,t,r)}function mm(n,e,t){return Ze(n).beforeAuthStateChanged(e,t)}function Qo(n,e,t,r){return Ze(n).onAuthStateChanged(e,t,r)}function gm(n){return Ze(n).signOut()}const es="__sak";/**
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
 */class qu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(es,"1"),this.storage.removeItem(es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _m(){const n=st();return Go(n)||gs(n)}const vm=1e3,ym=10;class zu extends qu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_m()&&Qp(),this.fallbackToPolling=Lu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Kp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ym):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},vm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zu.type="LOCAL";const Em=zu;/**
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
 */class vs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new vs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),c=await Im(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vs.receivers=[];/**
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
 */function Jo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Tm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const h=Jo("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const p=g;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(p.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Bt(){return window}function wm(n){Bt().location.href=n}/**
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
 */function Gu(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function Am(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Rm(){return Gu()?self:null}/**
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
 */const Wu="firebaseLocalStorageDb",Sm=1,ts="firebaseLocalStorage",Ku="fbase_key";class ci{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ys(n,e){return n.transaction([ts],e?"readwrite":"readonly").objectStore(ts)}function Cm(){const n=indexedDB.deleteDatabase(Wu);return new ci(n).toPromise()}function Eo(){const n=indexedDB.open(Wu,Sm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ts,{keyPath:Ku})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ts)?e(r):(r.close(),await Cm(),e(await Eo()))})})}async function zl(n,e,t){const r=ys(n,!0).put({[Ku]:e,value:t});return new ci(r).toPromise()}async function Pm(n,e){const t=ys(n,!1).get(e),r=await new ci(t).toPromise();return r===void 0?null:r.value}function $l(n,e){const t=ys(n,!0).delete(e);return new ci(t).toPromise()}const km=800,Dm=3;class Qu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Dm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vs._getInstance(Rm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Am(),!this.activeServiceWorker)return;this.sender=new Tm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eo();return await zl(e,es,"1"),await $l(e,es),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>zl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Pm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$l(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ys(i,!1).getAll();return new ci(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),km)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qu.type="LOCAL";const Vm=Qu;new ai(3e4,6e4);/**
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
 */function Ju(n,e){return e?Zt(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Yo extends Bu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return or(e,this._buildIdpRequest())}_linkToIdToken(e,t){return or(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return or(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Nm(n){return fm(n.auth,new Yo(n),n.bypassAuthState)}function Om(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),dm(t,new Yo(n),n.bypassAuthState)}async function xm(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),hm(t,new Yo(n),n.bypassAuthState)}/**
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
 */class Yu{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nm;case"linkViaPopup":case"linkViaRedirect":return xm;case"reauthViaPopup":case"reauthViaRedirect":return Om;default:$t(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Mm=new ai(2e3,1e4);async function Lm(n,e,t){if(Jt(n.app))return Promise.reject(Dt(n,"operation-not-supported-in-this-environment"));const r=_s(n);Dp(n,e,Ko);const i=Ju(r,t);return new xn(r,"signInViaPopup",e,i).executeNotNull()}class xn extends Yu{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=Jo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mm.get())};e()}}xn.currentPopupAction=null;/**
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
 */const Um="pendingRedirect",ji=new Map;class Fm extends Yu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ji.get(this.auth._key());if(!e){try{const r=await Bm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ji.set(this.auth._key(),e)}return this.bypassAuthState||ji.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bm(n,e){const t=zm(e),r=qm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function jm(n,e){ji.set(n._key(),e)}function qm(n){return Zt(n._redirectPersistence)}function zm(n){return Bi(Um,n.config.apiKey,n.name)}async function $m(n,e,t=!1){if(Jt(n.app))return Promise.reject(Ln(n));const r=_s(n),i=Ju(r,e),a=await new Fm(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Hm=10*60*1e3;class Gm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Xu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Dt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hl(e))}saveEventToCache(e){this.cachedEventUids.add(Hl(e)),this.lastProcessedEventTime=Date.now()}}function Hl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xu(n);default:return!1}}/**
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
 */async function Km(n,e={}){return Er(n,"GET","/v1/projects",e)}/**
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
 */const Qm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jm=/^https?/;async function Ym(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Km(n);for(const t of e)try{if(Xm(t))return}catch{}$t(n,"unauthorized-domain")}function Xm(n){const e=vo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Jm.test(t))return!1;if(Qm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Zm=new ai(3e4,6e4);function Gl(){const n=Bt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function eg(n){return new Promise((e,t)=>{var r,i,s;function a(){Gl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gl(),t(Dt(n,"network-request-failed"))},timeout:Zm.get()})}if(!((i=(r=Bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Bt().gapi)===null||s===void 0)&&s.load)a();else{const l=im("iframefcb");return Bt()[l]=()=>{gapi.load?a():t(Dt(n,"network-request-failed"))},nm(`${rm()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw qi=null,e})}let qi=null;function tg(n){return qi=qi||eg(n),qi}/**
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
 */const ng=new ai(5e3,15e3),rg="__/auth/iframe",ig="emulator/auth/iframe",sg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ag(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zo(e,ig):`https://${n.config.authDomain}/${rg}`,r={apiKey:e.apiKey,appName:n.name,v:yr},i=og.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${oi(r).slice(1)}`}async function lg(n){const e=await tg(n),t=Bt().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:ag(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Dt(n,"network-request-failed"),l=Bt().setTimeout(()=>{s(a)},ng.get());function c(){Bt().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const cg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ug=500,hg=600,dg="_blank",fg="http://localhost";class Wl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pg(n,e,t,r=ug,i=hg){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},cg),{width:r.toString(),height:i.toString(),top:s,left:a}),h=st().toLowerCase();t&&(l=Vu(h)?dg:t),Du(h)&&(e=e||fg,c.scrollbars="yes");const d=Object.entries(c).reduce((p,[y,_])=>`${p}${y}=${_},`,"");if(Wp(h)&&l!=="_self")return mg(e||"",l),new Wl(null);const g=window.open(e||"",l,d);se(g,n,"popup-blocked");try{g.focus()}catch{}return new Wl(g)}function mg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const gg="__/auth/handler",_g="emulator/auth/handler",vg=encodeURIComponent("fac");async function Kl(n,e,t,r,i,s){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:yr,eventId:i};if(e instanceof Ko){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",_f(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof li){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${vg}=${encodeURIComponent(c)}`:"";return`${yg(n)}?${oi(l).slice(1)}${h}`}function yg({config:n}){return n.emulator?zo(n,_g):`https://${n.authDomain}/${gg}`}/**
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
 */const ao="webStorageSupport";class Eg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hu,this._completeRedirectFn=$m,this._overrideRedirectResult=jm}async _openPopup(e,t,r,i){var s;en((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Kl(e,t,r,vo(),i);return pg(e,a,Jo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Kl(e,t,r,vo(),i);return wm(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(en(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await lg(e),r=new Gm(e);return t.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ao,{type:ao},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ao];a!==void 0&&t(!!a),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ym(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Lu()||Go()||gs()}}const Ig=Eg;var Ql="@firebase/auth",Jl="1.7.4";/**
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
 */class Tg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ag(n){cr(new Bn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;se(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uu(n)},h=new em(r,i,s,c);return om(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),cr(new Bn("auth-internal",e=>{const t=_s(e.getProvider("auth").getImmediate());return(r=>new Tg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(Ql,Jl,wg(n)),En(Ql,Jl,"esm2017")}/**
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
 */const bg=5*60,Rg=gu("authIdTokenMaxAge")||bg;let Yl=null;const Sg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Rg)return;const i=t==null?void 0:t.token;Yl!==i&&(Yl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ns(n=Eu()){const e=Fo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sm(n,{popupRedirectResolver:Ig,persistence:[Vm,Em,Hu]}),r=gu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Sg(s.toString());mm(t,a,()=>a(t.currentUser)),pm(t,l=>a(l))}}const i=pu("auth");return i&&am(t,`http://${i}`),t}function Cg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}tm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Dt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Cg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ag("Browser");var Xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Un,Zu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function v(){}v.prototype=E.prototype,A.D=E.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(T,R,C){for(var I=Array(arguments.length-2),te=2;te<arguments.length;te++)I[te-2]=arguments[te];return E.prototype[R].apply(T,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,E,v){v||(v=0);var T=Array(16);if(typeof E=="string")for(var R=0;16>R;++R)T[R]=E.charCodeAt(v++)|E.charCodeAt(v++)<<8|E.charCodeAt(v++)<<16|E.charCodeAt(v++)<<24;else for(R=0;16>R;++R)T[R]=E[v++]|E[v++]<<8|E[v++]<<16|E[v++]<<24;E=A.g[0],v=A.g[1],R=A.g[2];var C=A.g[3],I=E+(C^v&(R^C))+T[0]+3614090360&4294967295;E=v+(I<<7&4294967295|I>>>25),I=C+(R^E&(v^R))+T[1]+3905402710&4294967295,C=E+(I<<12&4294967295|I>>>20),I=R+(v^C&(E^v))+T[2]+606105819&4294967295,R=C+(I<<17&4294967295|I>>>15),I=v+(E^R&(C^E))+T[3]+3250441966&4294967295,v=R+(I<<22&4294967295|I>>>10),I=E+(C^v&(R^C))+T[4]+4118548399&4294967295,E=v+(I<<7&4294967295|I>>>25),I=C+(R^E&(v^R))+T[5]+1200080426&4294967295,C=E+(I<<12&4294967295|I>>>20),I=R+(v^C&(E^v))+T[6]+2821735955&4294967295,R=C+(I<<17&4294967295|I>>>15),I=v+(E^R&(C^E))+T[7]+4249261313&4294967295,v=R+(I<<22&4294967295|I>>>10),I=E+(C^v&(R^C))+T[8]+1770035416&4294967295,E=v+(I<<7&4294967295|I>>>25),I=C+(R^E&(v^R))+T[9]+2336552879&4294967295,C=E+(I<<12&4294967295|I>>>20),I=R+(v^C&(E^v))+T[10]+4294925233&4294967295,R=C+(I<<17&4294967295|I>>>15),I=v+(E^R&(C^E))+T[11]+2304563134&4294967295,v=R+(I<<22&4294967295|I>>>10),I=E+(C^v&(R^C))+T[12]+1804603682&4294967295,E=v+(I<<7&4294967295|I>>>25),I=C+(R^E&(v^R))+T[13]+4254626195&4294967295,C=E+(I<<12&4294967295|I>>>20),I=R+(v^C&(E^v))+T[14]+2792965006&4294967295,R=C+(I<<17&4294967295|I>>>15),I=v+(E^R&(C^E))+T[15]+1236535329&4294967295,v=R+(I<<22&4294967295|I>>>10),I=E+(R^C&(v^R))+T[1]+4129170786&4294967295,E=v+(I<<5&4294967295|I>>>27),I=C+(v^R&(E^v))+T[6]+3225465664&4294967295,C=E+(I<<9&4294967295|I>>>23),I=R+(E^v&(C^E))+T[11]+643717713&4294967295,R=C+(I<<14&4294967295|I>>>18),I=v+(C^E&(R^C))+T[0]+3921069994&4294967295,v=R+(I<<20&4294967295|I>>>12),I=E+(R^C&(v^R))+T[5]+3593408605&4294967295,E=v+(I<<5&4294967295|I>>>27),I=C+(v^R&(E^v))+T[10]+38016083&4294967295,C=E+(I<<9&4294967295|I>>>23),I=R+(E^v&(C^E))+T[15]+3634488961&4294967295,R=C+(I<<14&4294967295|I>>>18),I=v+(C^E&(R^C))+T[4]+3889429448&4294967295,v=R+(I<<20&4294967295|I>>>12),I=E+(R^C&(v^R))+T[9]+568446438&4294967295,E=v+(I<<5&4294967295|I>>>27),I=C+(v^R&(E^v))+T[14]+3275163606&4294967295,C=E+(I<<9&4294967295|I>>>23),I=R+(E^v&(C^E))+T[3]+4107603335&4294967295,R=C+(I<<14&4294967295|I>>>18),I=v+(C^E&(R^C))+T[8]+1163531501&4294967295,v=R+(I<<20&4294967295|I>>>12),I=E+(R^C&(v^R))+T[13]+2850285829&4294967295,E=v+(I<<5&4294967295|I>>>27),I=C+(v^R&(E^v))+T[2]+4243563512&4294967295,C=E+(I<<9&4294967295|I>>>23),I=R+(E^v&(C^E))+T[7]+1735328473&4294967295,R=C+(I<<14&4294967295|I>>>18),I=v+(C^E&(R^C))+T[12]+2368359562&4294967295,v=R+(I<<20&4294967295|I>>>12),I=E+(v^R^C)+T[5]+4294588738&4294967295,E=v+(I<<4&4294967295|I>>>28),I=C+(E^v^R)+T[8]+2272392833&4294967295,C=E+(I<<11&4294967295|I>>>21),I=R+(C^E^v)+T[11]+1839030562&4294967295,R=C+(I<<16&4294967295|I>>>16),I=v+(R^C^E)+T[14]+4259657740&4294967295,v=R+(I<<23&4294967295|I>>>9),I=E+(v^R^C)+T[1]+2763975236&4294967295,E=v+(I<<4&4294967295|I>>>28),I=C+(E^v^R)+T[4]+1272893353&4294967295,C=E+(I<<11&4294967295|I>>>21),I=R+(C^E^v)+T[7]+4139469664&4294967295,R=C+(I<<16&4294967295|I>>>16),I=v+(R^C^E)+T[10]+3200236656&4294967295,v=R+(I<<23&4294967295|I>>>9),I=E+(v^R^C)+T[13]+681279174&4294967295,E=v+(I<<4&4294967295|I>>>28),I=C+(E^v^R)+T[0]+3936430074&4294967295,C=E+(I<<11&4294967295|I>>>21),I=R+(C^E^v)+T[3]+3572445317&4294967295,R=C+(I<<16&4294967295|I>>>16),I=v+(R^C^E)+T[6]+76029189&4294967295,v=R+(I<<23&4294967295|I>>>9),I=E+(v^R^C)+T[9]+3654602809&4294967295,E=v+(I<<4&4294967295|I>>>28),I=C+(E^v^R)+T[12]+3873151461&4294967295,C=E+(I<<11&4294967295|I>>>21),I=R+(C^E^v)+T[15]+530742520&4294967295,R=C+(I<<16&4294967295|I>>>16),I=v+(R^C^E)+T[2]+3299628645&4294967295,v=R+(I<<23&4294967295|I>>>9),I=E+(R^(v|~C))+T[0]+4096336452&4294967295,E=v+(I<<6&4294967295|I>>>26),I=C+(v^(E|~R))+T[7]+1126891415&4294967295,C=E+(I<<10&4294967295|I>>>22),I=R+(E^(C|~v))+T[14]+2878612391&4294967295,R=C+(I<<15&4294967295|I>>>17),I=v+(C^(R|~E))+T[5]+4237533241&4294967295,v=R+(I<<21&4294967295|I>>>11),I=E+(R^(v|~C))+T[12]+1700485571&4294967295,E=v+(I<<6&4294967295|I>>>26),I=C+(v^(E|~R))+T[3]+2399980690&4294967295,C=E+(I<<10&4294967295|I>>>22),I=R+(E^(C|~v))+T[10]+4293915773&4294967295,R=C+(I<<15&4294967295|I>>>17),I=v+(C^(R|~E))+T[1]+2240044497&4294967295,v=R+(I<<21&4294967295|I>>>11),I=E+(R^(v|~C))+T[8]+1873313359&4294967295,E=v+(I<<6&4294967295|I>>>26),I=C+(v^(E|~R))+T[15]+4264355552&4294967295,C=E+(I<<10&4294967295|I>>>22),I=R+(E^(C|~v))+T[6]+2734768916&4294967295,R=C+(I<<15&4294967295|I>>>17),I=v+(C^(R|~E))+T[13]+1309151649&4294967295,v=R+(I<<21&4294967295|I>>>11),I=E+(R^(v|~C))+T[4]+4149444226&4294967295,E=v+(I<<6&4294967295|I>>>26),I=C+(v^(E|~R))+T[11]+3174756917&4294967295,C=E+(I<<10&4294967295|I>>>22),I=R+(E^(C|~v))+T[2]+718787259&4294967295,R=C+(I<<15&4294967295|I>>>17),I=v+(C^(R|~E))+T[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+C&4294967295}r.prototype.u=function(A,E){E===void 0&&(E=A.length);for(var v=E-this.blockSize,T=this.B,R=this.h,C=0;C<E;){if(R==0)for(;C<=v;)i(this,A,C),C+=this.blockSize;if(typeof A=="string"){for(;C<E;)if(T[R++]=A.charCodeAt(C++),R==this.blockSize){i(this,T),R=0;break}}else for(;C<E;)if(T[R++]=A[C++],R==this.blockSize){i(this,T),R=0;break}}this.h=R,this.o+=E},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;var v=8*this.o;for(E=A.length-8;E<A.length;++E)A[E]=v&255,v/=256;for(this.u(A),A=Array(16),E=v=0;4>E;++E)for(var T=0;32>T;T+=8)A[v++]=this.g[E]>>>T&255;return A};function s(A,E){var v=l;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=E(A)}function a(A,E){this.h=E;for(var v=[],T=!0,R=A.length-1;0<=R;R--){var C=A[R]|0;T&&C==E||(v[R]=C,T=!1)}this.g=v}var l={};function c(A){return-128<=A&&128>A?s(A,function(E){return new a([E|0],0>E?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return g;if(0>A)return P(h(-A));for(var E=[],v=1,T=0;A>=v;T++)E[T]=A/v|0,v*=4294967296;return new a(E,0)}function d(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return P(d(A.substring(1),E));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(E,8)),T=g,R=0;R<A.length;R+=8){var C=Math.min(8,A.length-R),I=parseInt(A.substring(R,R+C),E);8>C?(C=h(Math.pow(E,C)),T=T.j(C).add(h(I))):(T=T.j(v),T=T.add(h(I)))}return T}var g=c(0),p=c(1),y=c(16777216);n=a.prototype,n.m=function(){if(w(this))return-P(this).m();for(var A=0,E=1,v=0;v<this.g.length;v++){var T=this.i(v);A+=(0<=T?T:4294967296+T)*E,E*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(_(this))return"0";if(w(this))return"-"+P(this).toString(A);for(var E=h(Math.pow(A,6)),v=this,T="";;){var R=H(v,E).g;v=L(v,R.j(E));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=R,_(v))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function _(A){if(A.h!=0)return!1;for(var E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function w(A){return A.h==-1}n.l=function(A){return A=L(this,A),w(A)?-1:_(A)?0:1};function P(A){for(var E=A.g.length,v=[],T=0;T<E;T++)v[T]=~A.g[T];return new a(v,~A.h).add(p)}n.abs=function(){return w(this)?P(this):this},n.add=function(A){for(var E=Math.max(this.g.length,A.g.length),v=[],T=0,R=0;R<=E;R++){var C=T+(this.i(R)&65535)+(A.i(R)&65535),I=(C>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);T=I>>>16,C&=65535,I&=65535,v[R]=I<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function L(A,E){return A.add(P(E))}n.j=function(A){if(_(this)||_(A))return g;if(w(this))return w(A)?P(this).j(P(A)):P(P(this).j(A));if(w(A))return P(this.j(P(A)));if(0>this.l(y)&&0>A.l(y))return h(this.m()*A.m());for(var E=this.g.length+A.g.length,v=[],T=0;T<2*E;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<A.g.length;R++){var C=this.i(T)>>>16,I=this.i(T)&65535,te=A.i(R)>>>16,Z=A.i(R)&65535;v[2*T+2*R]+=I*Z,U(v,2*T+2*R),v[2*T+2*R+1]+=C*Z,U(v,2*T+2*R+1),v[2*T+2*R+1]+=I*te,U(v,2*T+2*R+1),v[2*T+2*R+2]+=C*te,U(v,2*T+2*R+2)}for(T=0;T<E;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=E;T<2*E;T++)v[T]=0;return new a(v,0)};function U(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function x(A,E){this.g=A,this.h=E}function H(A,E){if(_(E))throw Error("division by zero");if(_(A))return new x(g,g);if(w(A))return E=H(P(A),E),new x(P(E.g),P(E.h));if(w(E))return E=H(A,P(E)),new x(P(E.g),E.h);if(30<A.g.length){if(w(A)||w(E))throw Error("slowDivide_ only works with positive integers.");for(var v=p,T=E;0>=T.l(A);)v=Q(v),T=Q(T);var R=B(v,1),C=B(T,1);for(T=B(T,2),v=B(v,2);!_(T);){var I=C.add(T);0>=I.l(A)&&(R=R.add(v),C=I),T=B(T,1),v=B(v,1)}return E=L(A,R.j(E)),new x(R,E)}for(R=g;0<=A.l(E);){for(v=Math.max(1,Math.floor(A.m()/E.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=h(v),I=C.j(E);w(I)||0<I.l(A);)v-=T,C=h(v),I=C.j(E);_(C)&&(C=p),R=R.add(C),A=L(A,I)}return new x(R,A)}n.A=function(A){return H(this,A).h},n.and=function(A){for(var E=Math.max(this.g.length,A.g.length),v=[],T=0;T<E;T++)v[T]=this.i(T)&A.i(T);return new a(v,this.h&A.h)},n.or=function(A){for(var E=Math.max(this.g.length,A.g.length),v=[],T=0;T<E;T++)v[T]=this.i(T)|A.i(T);return new a(v,this.h|A.h)},n.xor=function(A){for(var E=Math.max(this.g.length,A.g.length),v=[],T=0;T<E;T++)v[T]=this.i(T)^A.i(T);return new a(v,this.h^A.h)};function Q(A){for(var E=A.g.length+1,v=[],T=0;T<E;T++)v[T]=A.i(T)<<1|A.i(T-1)>>>31;return new a(v,A.h)}function B(A,E){var v=E>>5;E%=32;for(var T=A.g.length-v,R=[],C=0;C<T;C++)R[C]=0<E?A.i(C+v)>>>E|A.i(C+v+1)<<32-E:A.i(C+v);return new a(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Un=a}).apply(typeof Xl<"u"?Xl:typeof self<"u"?self:typeof window<"u"?window:{});var Ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eh,th,zr,nh,zi,Io,rh,ih,sh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ni=="object"&&Ni];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var f=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var k=o[m];if(!(k in f))break e;f=f[k]}o=o[o.length-1],m=f[o],u=u(m),u!=m&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var f=0,m=!1,k={next:function(){if(!m&&f<o.length){var O=f++;return{value:u(O,o[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function g(o,u,f){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,m),o.apply(u,k)}}return function(){return o.apply(u,arguments)}}function p(o,u,f){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,p.apply(null,arguments)}function y(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function _(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(m,k,O){for(var $=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)$[Ce-2]=arguments[Ce];return u.prototype[k].apply(m,$)}}function w(o){const u=o.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=o[m];return f}return[]}function P(o,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const k=o.length||0,O=m.length||0;o.length=k+O;for(let $=0;$<O;$++)o[k+$]=m[$]}else o.push(m)}}class L{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(o){return/^[\s\xa0]*$/.test(o)}function x(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var Q=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function B(o,u,f){for(const m in o)u.call(f,o[m],m,o)}function A(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function E(o){const u={};for(const f in o)u[f]=o[f];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(f in m)o[f]=m[f];for(let O=0;O<v.length;O++)f=v[O],Object.prototype.hasOwnProperty.call(m,f)&&(o[f]=m[f])}}function R(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function C(o){l.setTimeout(()=>{throw o},0)}function I(){var o=ce;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class te{constructor(){this.h=this.g=null}add(u,f){const m=Z.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Z=new L(()=>new ie,o=>o.reset());class ie{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,re=!1,ce=new te,he=()=>{const o=l.Promise.resolve(void 0);Y=()=>{o.then(ae)}};var ae=()=>{for(var o;o=I();){try{o.h.call(o.g)}catch(f){C(f)}var u=Z;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}re=!1};function Ee(){this.s=this.s,this.C=this.C}Ee.prototype.s=!1,Ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Ke=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function je(o,u){if(de.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Q){e:{try{H(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ft[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&je.aa.h.call(this)}}_(je,de);var Ft={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),X=0;function Pe(o,u,f,m,k){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=k,this.key=++X,this.da=this.fa=!1}function xe(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ot(o){this.src=o,this.g={},this.h=0}ot.prototype.add=function(o,u,f,m,k){var O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);var $=et(o,u,m,k);return-1<$?(u=o[$],f||(u.fa=!1)):(u=new Pe(u,this.src,O,!!m,k),u.fa=f,o.push(u)),u};function Et(o,u){var f=u.type;if(f in o.g){var m=o.g[f],k=Array.prototype.indexOf.call(m,u,void 0),O;(O=0<=k)&&Array.prototype.splice.call(m,k,1),O&&(xe(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function et(o,u,f,m){for(var k=0;k<o.length;++k){var O=o[k];if(!O.da&&O.listener==u&&O.capture==!!f&&O.ha==m)return k}return-1}var an="closure_lm_"+(1e6*Math.random()|0),Pt={};function br(o,u,f,m,k){if(Array.isArray(u)){for(var O=0;O<u.length;O++)br(o,u[O],f,m,k);return null}return f=cn(f),o&&o[yt]?o.K(u,f,h(m)?!!m.capture:!!m,k):Ye(o,u,f,!1,m,k)}function Ye(o,u,f,m,k,O){if(!u)throw Error("Invalid event type");var $=h(k)?!!k.capture:!!k,Ce=ve(o);if(Ce||(o[an]=Ce=new ot(o)),f=Ce.add(u,f,m,$,O),f.proxy)return f;if(m=ln(),f.proxy=m,m.src=o,m.listener=f,o.addEventListener)Ke||(k=$),k===void 0&&(k=!1),o.addEventListener(u.toString(),m,k);else if(o.attachEvent)o.attachEvent(Qe(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function ln(){function o(f){return u.call(o.src,o.listener,f)}const u=fe;return o}function qe(o,u,f,m,k){if(Array.isArray(u))for(var O=0;O<u.length;O++)qe(o,u[O],f,m,k);else m=h(m)?!!m.capture:!!m,f=cn(f),o&&o[yt]?(o=o.i,u=String(u).toString(),u in o.g&&(O=o.g[u],f=et(O,f,m,k),-1<f&&(xe(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete o.g[u],o.h--)))):o&&(o=ve(o))&&(u=o.g[u.toString()],o=-1,u&&(o=et(u,f,m,k)),(f=-1<o?u[o]:null)&&ze(f))}function ze(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[yt])Et(u.i,o);else{var f=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(f,m,o.capture):u.detachEvent?u.detachEvent(Qe(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=ve(u))?(Et(f,o),f.h==0&&(f.src=null,u[an]=null)):xe(o)}}}function Qe(o){return o in Pt?Pt[o]:Pt[o]="on"+o}function fe(o,u){if(o.da)o=!0;else{u=new je(u,this);var f=o.listener,m=o.ha||o.src;o.fa&&ze(o),o=f.call(m,u)}return o}function ve(o){return o=o[an],o instanceof ot?o:null}var Se="__closure_events_fn_"+(1e9*Math.random()>>>0);function cn(o){return typeof o=="function"?o:(o[Se]||(o[Se]=function(u){return o.handleEvent(u)}),o[Se])}function Ve(){Ee.call(this),this.i=new ot(this),this.M=this,this.F=null}_(Ve,Ee),Ve.prototype[yt]=!0,Ve.prototype.removeEventListener=function(o,u,f,m){qe(this,o,u,f,m)};function Oe(o,u){var f,m=o.F;if(m)for(f=[];m;m=m.F)f.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new de(u,o);else if(u instanceof de)u.target=u.target||o;else{var k=u;u=new de(m,o),T(u,k)}if(k=!0,f)for(var O=f.length-1;0<=O;O--){var $=u.g=f[O];k=Pn($,m,!0,u)&&k}if($=u.g=o,k=Pn($,m,!0,u)&&k,k=Pn($,m,!1,u)&&k,f)for(O=0;O<f.length;O++)$=u.g=f[O],k=Pn($,m,!1,u)&&k}Ve.prototype.N=function(){if(Ve.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],m=0;m<f.length;m++)xe(f[m]);delete o.g[u],o.h--}}this.F=null},Ve.prototype.K=function(o,u,f,m){return this.i.add(String(o),u,!1,f,m)},Ve.prototype.L=function(o,u,f,m){return this.i.add(String(o),u,!0,f,m)};function Pn(o,u,f,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,O=0;O<u.length;++O){var $=u[O];if($&&!$.da&&$.capture==f){var Ce=$.listener,tt=$.ha||$.src;$.fa&&Et(o.i,$),k=Ce.call(tt,m)!==!1&&k}}return k&&!m.defaultPrevented}function Jn(o,u,f){if(typeof o=="function")f&&(o=p(o,f));else if(o&&typeof o.handleEvent=="function")o=p(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Gt(o){o.g=Jn(()=>{o.g=null,o.i&&(o.i=!1,Gt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Rr extends Ee{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Gt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sr(o){Ee.call(this),this.h=o,this.g={}}_(Sr,Ee);var Da=[];function Va(o){B(o.g,function(u,f){this.g.hasOwnProperty(f)&&ze(u)},o),o.g={}}Sr.prototype.N=function(){Sr.aa.N.call(this),Va(this)},Sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fs=l.JSON.stringify,Ed=l.JSON.parse,Id=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Bs(){}Bs.prototype.h=null;function Na(o){return o.h||(o.h=o.i())}function Oa(){}var Cr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function js(){de.call(this,"d")}_(js,de);function qs(){de.call(this,"c")}_(qs,de);var kn={},xa=null;function vi(){return xa=xa||new Ve}kn.La="serverreachability";function Ma(o){de.call(this,kn.La,o)}_(Ma,de);function Pr(o){const u=vi();Oe(u,new Ma(u))}kn.STAT_EVENT="statevent";function La(o,u){de.call(this,kn.STAT_EVENT,o),this.stat=u}_(La,de);function mt(o){const u=vi();Oe(u,new La(u,o))}kn.Ma="timingevent";function Ua(o,u){de.call(this,kn.Ma,o),this.size=u}_(Ua,de);function kr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Dr(){this.g=!0}Dr.prototype.xa=function(){this.g=!1};function Td(o,u,f,m,k,O){o.info(function(){if(o.g)if(O)for(var $="",Ce=O.split("&"),tt=0;tt<Ce.length;tt++){var ye=Ce[tt].split("=");if(1<ye.length){var at=ye[0];ye=ye[1];var lt=at.split("_");$=2<=lt.length&&lt[1]=="type"?$+(at+"="+ye+"&"):$+(at+"=redacted&")}}else $=null;else $=O;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+u+`
`+f+`
`+$})}function wd(o,u,f,m,k,O,$){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+u+`
`+f+`
`+O+" "+$})}function Yn(o,u,f,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+bd(o,f)+(m?" "+m:"")})}function Ad(o,u){o.info(function(){return"TIMEOUT: "+u})}Dr.prototype.info=function(){};function bd(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var m=f[o];if(!(2>m.length)){var k=m[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var $=1;$<k.length;$++)k[$]=""}}}}return Fs(f)}catch{return u}}var yi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zs;function Ei(){}_(Ei,Bs),Ei.prototype.g=function(){return new XMLHttpRequest},Ei.prototype.i=function(){return{}},zs=new Ei;function un(o,u,f,m){this.j=o,this.i=u,this.l=f,this.R=m||1,this.U=new Sr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ba}function Ba(){this.i=null,this.g="",this.h=!1}var ja={},$s={};function Hs(o,u,f){o.L=1,o.v=Ai(Wt(u)),o.m=f,o.P=!0,qa(o,null)}function qa(o,u){o.F=Date.now(),Ii(o),o.A=Wt(o.v);var f=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),nl(f.i,"t",m),o.C=0,f=o.j.J,o.h=new Ba,o.g=El(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Rr(p(o.Y,o,o.g),o.O)),u=o.U,f=o.g,m=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(Da[0]=k.toString()),k=Da);for(var O=0;O<k.length;O++){var $=br(f,k[O],m||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=o.H?E(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Pr(),Td(o.i,o.u,o.A,o.l,o.R,o.m)}un.prototype.ca=function(o){o=o.target;const u=this.M;u&&Kt(o)==3?u.j():this.Y(o)},un.prototype.Y=function(o){try{if(o==this.g)e:{const lt=Kt(this.g);var u=this.g.Ba();const er=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||cl(this.g)))){this.J||lt!=4||u==7||(u==8||0>=er?Pr(3):Pr(2)),Gs(this);var f=this.g.Z();this.X=f;t:if(za(this)){var m=cl(this.g);o="";var k=m.length,O=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dn(this),Vr(this);var $="";break t}this.h.i=new l.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(O&&u==k-1)});m.length=0,this.h.g+=o,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,wd(this.i,this.u,this.A,this.l,this.R,lt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,tt=this.g;if((Ce=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Ce)){var ye=Ce;break t}}ye=null}if(f=ye)Yn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ws(this,f);else{this.o=!1,this.s=3,mt(12),Dn(this),Vr(this);break e}}if(this.P){f=!0;let kt;for(;!this.J&&this.C<$.length;)if(kt=Rd(this,$),kt==$s){lt==4&&(this.s=4,mt(14),f=!1),Yn(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==ja){this.s=4,mt(15),Yn(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Yn(this.i,this.l,kt,null),Ws(this,kt);if(za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||$.length!=0||this.h.h||(this.s=1,mt(16),f=!1),this.o=this.o&&f,!f)Yn(this.i,this.l,$,"[Invalid Chunked Response]"),Dn(this),Vr(this);else if(0<$.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Zs(at),at.M=!0,mt(11))}}else Yn(this.i,this.l,$,null),Ws(this,$);lt==4&&Dn(this),this.o&&!this.J&&(lt==4?gl(this.j,this):(this.o=!1,Ii(this)))}else zd(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Dn(this),Vr(this)}}}catch{}finally{}};function za(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Rd(o,u){var f=o.C,m=u.indexOf(`
`,f);return m==-1?$s:(f=Number(u.substring(f,m)),isNaN(f)?ja:(m+=1,m+f>u.length?$s:(u=u.slice(m,m+f),o.C=m+f,u)))}un.prototype.cancel=function(){this.J=!0,Dn(this)};function Ii(o){o.S=Date.now()+o.I,$a(o,o.I)}function $a(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=kr(p(o.ba,o),u)}function Gs(o){o.B&&(l.clearTimeout(o.B),o.B=null)}un.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Ad(this.i,this.A),this.L!=2&&(Pr(),mt(17)),Dn(this),this.s=2,Vr(this)):$a(this,this.S-o)};function Vr(o){o.j.G==0||o.J||gl(o.j,o)}function Dn(o){Gs(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Va(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ws(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Ks(f.h,o))){if(!o.K&&Ks(f.h,o)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Pi(f),Si(f);else break e;Xs(f),mt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=kr(p(f.Za,f),6e3));if(1>=Wa(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Nn(f,11)}else if((o.K||f.g==o)&&Pi(f),!U(u))for(k=f.Da.g.parse(u),u=0;u<k.length;u++){let ye=k[u];if(f.T=ye[0],ye=ye[1],f.G==2)if(ye[0]=="c"){f.K=ye[1],f.ia=ye[2];const at=ye[3];at!=null&&(f.la=at,f.j.info("VER="+f.la));const lt=ye[4];lt!=null&&(f.Aa=lt,f.j.info("SVER="+f.Aa));const er=ye[5];er!=null&&typeof er=="number"&&0<er&&(m=1.5*er,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const kt=o.g;if(kt){const Di=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Di){var O=m.h;O.g||Di.indexOf("spdy")==-1&&Di.indexOf("quic")==-1&&Di.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Qs(O,O.h),O.h=null))}if(m.D){const eo=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;eo&&(m.ya=eo,Ne(m.I,m.D,eo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var $=o;if(m.qa=yl(m,m.J?m.ia:null,m.W),$.K){Ka(m.h,$);var Ce=$,tt=m.L;tt&&(Ce.I=tt),Ce.B&&(Gs(Ce),Ii(Ce)),m.g=$}else pl(m);0<f.i.length&&Ci(f)}else ye[0]!="stop"&&ye[0]!="close"||Nn(f,7);else f.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?Nn(f,7):Ys(f):ye[0]!="noop"&&f.l&&f.l.ta(ye),f.v=0)}}Pr(4)}catch{}}var Sd=class{constructor(o,u){this.g=o,this.map=u}};function Ha(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ga(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Wa(o){return o.h?1:o.g?o.g.size:0}function Ks(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Qs(o,u){o.g?o.g.add(u):o.h=u}function Ka(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ha.prototype.cancel=function(){if(this.i=Qa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Qa(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return w(o.i)}function Cd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,m=0;m<f;m++)u.push(o[m]);return u}u=[],f=0;for(m in o)u[f++]=o[m];return u}function Pd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const m in o)u[f++]=m;return u}}}function Ja(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Pd(o),m=Cd(o),k=m.length,O=0;O<k;O++)u.call(void 0,m[O],f&&f[O],o)}var Ya=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kd(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var m=o[f].indexOf("="),k=null;if(0<=m){var O=o[f].substring(0,m);k=o[f].substring(m+1)}else O=o[f];u(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Vn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Vn){this.h=o.h,Ti(this,o.j),this.o=o.o,this.g=o.g,wi(this,o.s),this.l=o.l;var u=o.i,f=new xr;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Xa(this,f),this.m=o.m}else o&&(u=String(o).match(Ya))?(this.h=!1,Ti(this,u[1]||"",!0),this.o=Nr(u[2]||""),this.g=Nr(u[3]||"",!0),wi(this,u[4]),this.l=Nr(u[5]||"",!0),Xa(this,u[6]||"",!0),this.m=Nr(u[7]||"")):(this.h=!1,this.i=new xr(null,this.h))}Vn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Or(u,Za,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Or(u,Za,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Or(f,f.charAt(0)=="/"?Nd:Vd,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Or(f,xd)),o.join("")};function Wt(o){return new Vn(o)}function Ti(o,u,f){o.j=f?Nr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function wi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Xa(o,u,f){u instanceof xr?(o.i=u,Md(o.i,o.h)):(f||(u=Or(u,Od)),o.i=new xr(u,o.h))}function Ne(o,u,f){o.i.set(u,f)}function Ai(o){return Ne(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Nr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Or(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Dd),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Dd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Za=/[#\/\?@]/g,Vd=/[#\?:]/g,Nd=/[#\?]/g,Od=/[#\?@]/g,xd=/#/g;function xr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function hn(o){o.g||(o.g=new Map,o.h=0,o.i&&kd(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=xr.prototype,n.add=function(o,u){hn(this),this.i=null,o=Xn(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function el(o,u){hn(o),u=Xn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function tl(o,u){return hn(o),u=Xn(o,u),o.g.has(u)}n.forEach=function(o,u){hn(this),this.g.forEach(function(f,m){f.forEach(function(k){o.call(u,k,m,this)},this)},this)},n.na=function(){hn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const k=o[m];for(let O=0;O<k.length;O++)f.push(u[m])}return f},n.V=function(o){hn(this);let u=[];if(typeof o=="string")tl(this,o)&&(u=u.concat(this.g.get(Xn(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return hn(this),this.i=null,o=Xn(this,o),tl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function nl(o,u,f){el(o,u),0<f.length&&(o.i=null,o.g.set(Xn(o,u),w(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const O=encodeURIComponent(String(m)),$=this.V(m);for(m=0;m<$.length;m++){var k=O;$[m]!==""&&(k+="="+encodeURIComponent(String($[m]))),o.push(k)}}return this.i=o.join("&")};function Xn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Md(o,u){u&&!o.j&&(hn(o),o.i=null,o.g.forEach(function(f,m){var k=m.toLowerCase();m!=k&&(el(this,m),nl(this,k,f))},o)),o.j=u}function Ld(o,u){const f=new Dr;if(l.Image){const m=new Image;m.onload=y(dn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=y(dn,f,"TestLoadImage: error",!1,u,m),m.onabort=y(dn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=y(dn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function Ud(o,u){const f=new Dr,m=new AbortController,k=setTimeout(()=>{m.abort(),dn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(O=>{clearTimeout(k),O.ok?dn(f,"TestPingServer: ok",!0,u):dn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),dn(f,"TestPingServer: error",!1,u)})}function dn(o,u,f,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(f)}catch{}}function Fd(){this.g=new Id}function Bd(o,u,f){const m=f||"";try{Ja(o,function(k,O){let $=k;h(k)&&($=Fs(k)),u.push(m+O+"="+encodeURIComponent($))})}catch(k){throw u.push(m+"type="+encodeURIComponent("_badmap")),k}}function Mr(o){this.l=o.Ub||null,this.j=o.eb||!1}_(Mr,Bs),Mr.prototype.g=function(){return new bi(this.l,this.j)},Mr.prototype.i=function(o){return function(){return o}}({});function bi(o,u){Ve.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(bi,Ve),n=bi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ur(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ur(this)),this.g&&(this.readyState=3,Ur(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function rl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Lr(this):Ur(this),this.readyState==3&&rl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Lr(this))},n.Qa=function(o){this.g&&(this.response=o,Lr(this))},n.ga=function(){this.g&&Lr(this)};function Lr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ur(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Ur(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function il(o){let u="";return B(o,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Js(o,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=il(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ne(o,u,f))}function Le(o){Ve.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(Le,Ve);var jd=/^https?$/i,qd=["POST","PUT"];n=Le.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zs.g(),this.v=this.o?Na(this.o):Na(zs),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(O){sl(this,O);return}if(o=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)f.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())f.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),k=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qd,u,void 0))||m||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of f)this.g.setRequestHeader(O,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ll(this),this.u=!0,this.g.send(o),this.u=!1}catch(O){sl(this,O)}};function sl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,ol(o),Ri(o)}function ol(o){o.A||(o.A=!0,Oe(o,"complete"),Oe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Oe(this,"complete"),Oe(this,"abort"),Ri(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),Le.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?al(this):this.bb())},n.bb=function(){al(this)};function al(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Kt(o)!=4||o.Z()!=2)){if(o.u&&Kt(o)==4)Jn(o.Ea,0,o);else if(Oe(o,"readystatechange"),Kt(o)==4){o.h=!1;try{const $=o.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=$===0){var k=String(o.D).match(Ya)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),m=!jd.test(k?k.toLowerCase():"")}f=m}if(f)Oe(o,"complete"),Oe(o,"success");else{o.m=6;try{var O=2<Kt(o)?o.g.statusText:""}catch{O=""}o.l=O+" ["+o.Z()+"]",ol(o)}}finally{Ri(o)}}}}function Ri(o,u){if(o.g){ll(o);const f=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Oe(o,"ready");try{f.onreadystatechange=m}catch{}}}function ll(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Kt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ed(u)}};function cl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function zd(o){const u={};o=(o.g&&2<=Kt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(U(o[m]))continue;var f=R(o[m]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=u[k]||[];u[k]=O,O.push(f)}A(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fr(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function ul(o){this.Aa=0,this.i=[],this.j=new Dr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fr("baseRetryDelayMs",5e3,o),this.cb=Fr("retryDelaySeedMs",1e4,o),this.Wa=Fr("forwardChannelMaxRetries",2,o),this.wa=Fr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ha(o&&o.concurrentRequestLimit),this.Da=new Fd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ul.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,m){mt(0),this.W=o,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=yl(this,null,this.W),Ci(this)};function Ys(o){if(hl(o),o.G==3){var u=o.U++,f=Wt(o.I);if(Ne(f,"SID",o.K),Ne(f,"RID",u),Ne(f,"TYPE","terminate"),Br(o,f),u=new un(o,o.j,u),u.L=2,u.v=Ai(Wt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=El(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ii(u)}vl(o)}function Si(o){o.g&&(Zs(o),o.g.cancel(),o.g=null)}function hl(o){Si(o),o.u&&(l.clearTimeout(o.u),o.u=null),Pi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ci(o){if(!Ga(o.h)&&!o.s){o.s=!0;var u=o.Ga;Y||he(),re||(Y(),re=!0),ce.add(u,o),o.B=0}}function $d(o,u){return Wa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=kr(p(o.Ga,o,u),_l(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new un(this,this.j,o);let O=this.o;if(this.S&&(O?(O=E(O),T(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=fl(this,k,u),f=Wt(this.I),Ne(f,"RID",o),Ne(f,"CVER",22),this.D&&Ne(f,"X-HTTP-Session-Id",this.D),Br(this,f),O&&(this.O?u="headers="+encodeURIComponent(String(il(O)))+"&"+u:this.m&&Js(f,this.m,O)),Qs(this.h,k),this.Ua&&Ne(f,"TYPE","init"),this.P?(Ne(f,"$req",u),Ne(f,"SID","null"),k.T=!0,Hs(k,f,null)):Hs(k,f,u),this.G=2}}else this.G==3&&(o?dl(this,o):this.i.length==0||Ga(this.h)||dl(this))};function dl(o,u){var f;u?f=u.l:f=o.U++;const m=Wt(o.I);Ne(m,"SID",o.K),Ne(m,"RID",f),Ne(m,"AID",o.T),Br(o,m),o.m&&o.o&&Js(m,o.m,o.o),f=new un(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=fl(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Qs(o.h,f),Hs(f,m,u)}function Br(o,u){o.H&&B(o.H,function(f,m){Ne(u,m,f)}),o.l&&Ja({},function(f,m){Ne(u,m,f)})}function fl(o,u,f){f=Math.min(o.i.length,f);var m=o.l?p(o.l.Na,o.l,o):null;e:{var k=o.i;let O=-1;for(;;){const $=["count="+f];O==-1?0<f?(O=k[0].g,$.push("ofs="+O)):O=0:$.push("ofs="+O);let Ce=!0;for(let tt=0;tt<f;tt++){let ye=k[tt].g;const at=k[tt].map;if(ye-=O,0>ye)O=Math.max(0,k[tt].g-100),Ce=!1;else try{Bd(at,$,"req"+ye+"_")}catch{m&&m(at)}}if(Ce){m=$.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,m}function pl(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Y||he(),re||(Y(),re=!0),ce.add(u,o),o.v=0}}function Xs(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=kr(p(o.Fa,o),_l(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,ml(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=kr(p(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),Si(this),ml(this))};function Zs(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function ml(o){o.g=new un(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Wt(o.qa);Ne(u,"RID","rpc"),Ne(u,"SID",o.K),Ne(u,"AID",o.T),Ne(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ne(u,"TO",o.ja),Ne(u,"TYPE","xmlhttp"),Br(o,u),o.m&&o.o&&Js(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ai(Wt(u)),f.m=null,f.P=!0,qa(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Si(this),Xs(this),mt(19))};function Pi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function gl(o,u){var f=null;if(o.g==u){Pi(o),Zs(o),o.g=null;var m=2}else if(Ks(o.h,u))f=u.D,Ka(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var k=o.B;m=vi(),Oe(m,new Ua(m,f)),Ci(o)}else pl(o);else if(k=u.s,k==3||k==0&&0<u.X||!(m==1&&$d(o,u)||m==2&&Xs(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),k){case 1:Nn(o,5);break;case 4:Nn(o,10);break;case 3:Nn(o,6);break;default:Nn(o,2)}}}function _l(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Nn(o,u){if(o.j.info("Error code "+u),u==2){var f=p(o.fb,o),m=o.Xa;const k=!m;m=new Vn(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ti(m,"https"),Ai(m),k?Ld(m.toString(),f):Ud(m.toString(),f)}else mt(2);o.G=0,o.l&&o.l.sa(u),vl(o),hl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function vl(o){if(o.G=0,o.ka=[],o.l){const u=Qa(o.h);(u.length!=0||o.i.length!=0)&&(P(o.ka,u),P(o.ka,o.i),o.h.i.length=0,w(o.i),o.i.length=0),o.l.ra()}}function yl(o,u,f){var m=f instanceof Vn?Wt(f):new Vn(f);if(m.g!="")u&&(m.g=u+"."+m.g),wi(m,m.s);else{var k=l.location;m=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var O=new Vn(null);m&&Ti(O,m),u&&(O.g=u),k&&wi(O,k),f&&(O.l=f),m=O}return f=o.D,u=o.ya,f&&u&&Ne(m,f,u),Ne(m,"VER",o.la),Br(o,m),m}function El(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Le(new Mr({eb:f})):new Le(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Il(){}n=Il.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ki(){}ki.prototype.g=function(o,u){return new wt(o,u)};function wt(o,u){Ve.call(this),this.g=new ul(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!U(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Zn(this)}_(wt,Ve),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Ys(this.g)},wt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Fs(o),o=f);u.i.push(new Sd(u.Ya++,o)),u.G==3&&Ci(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,Ys(this.g),delete this.g,wt.aa.N.call(this)};function Tl(o){js.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}_(Tl,js);function wl(){qs.call(this),this.status=1}_(wl,qs);function Zn(o){this.g=o}_(Zn,Il),Zn.prototype.ua=function(){Oe(this.g,"a")},Zn.prototype.ta=function(o){Oe(this.g,new Tl(o))},Zn.prototype.sa=function(o){Oe(this.g,new wl)},Zn.prototype.ra=function(){Oe(this.g,"b")},ki.prototype.createWebChannel=ki.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,sh=function(){return new ki},ih=function(){return vi()},rh=kn,Io={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yi.NO_ERROR=0,yi.TIMEOUT=8,yi.HTTP_ERROR=6,zi=yi,Fa.COMPLETE="complete",nh=Fa,Oa.EventType=Cr,Cr.OPEN="a",Cr.CLOSE="b",Cr.ERROR="c",Cr.MESSAGE="d",Ve.prototype.listen=Ve.prototype.K,zr=Oa,th=Mr,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,eh=Le}).apply(typeof Ni<"u"?Ni:typeof self<"u"?self:typeof window<"u"?window:{});const Zl="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let Ir="10.12.1";/**
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
 */const zn=new Lo("@firebase/firestore");function jr(){return zn.logLevel}function K(n,...e){if(zn.logLevel<=ge.DEBUG){const t=e.map(Xo);zn.debug(`Firestore (${Ir}): ${n}`,...t)}}function tn(n,...e){if(zn.logLevel<=ge.ERROR){const t=e.map(Xo);zn.error(`Firestore (${Ir}): ${n}`,...t)}}function hr(n,...e){if(zn.logLevel<=ge.WARN){const t=e.map(Xo);zn.warn(`Firestore (${Ir}): ${n}`,...t)}}function Xo(n){if(typeof n=="string")return n;try{/**
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
 */function oe(n="Unexpected state"){const e=`FIRESTORE (${Ir}) INTERNAL ASSERTION FAILED: `+n;throw tn(e),new Error(e)}function De(n,e){n||oe()}function ue(n,e){return n}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends sn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class In{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class oh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ut.UNAUTHENTICATED))}shutdown(){}}class kg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Dg{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new In;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new In,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new In)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new oh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new ut(e)}}class Vg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ng{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Vg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Og{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(De(typeof t.token=="string"),this.R=t.token,new Og(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class ah{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Mg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function Ie(n,e){return n<e?-1:n>e?1:0}function dr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class Je{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Je(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new Je(0,0))}static max(){return new le(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Xr{constructor(e,t,r){t===void 0?t=0:t>e.length&&oe(),r===void 0?r=e.length-t:r>e.length-t&&oe(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ke extends Xr{construct(e,t,r){return new ke(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ke(t)}static emptyPath(){return new ke([])}}const Lg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Xr{construct(e,t,r){return new rt(e,t,r)}static isValidIdentifier(e){return Lg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new G(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(t)}static emptyPath(){return new rt([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(ke.fromString(e))}static fromName(e){return new J(ke.fromString(e).popFirst(5))}static empty(){return new J(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new ke(e.slice()))}}function Ug(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new Je(t+1,0):new Je(t,r));return new wn(i,J.empty(),e)}function Fg(n){return new wn(n.readTime,n.key,-1)}class wn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wn(le.min(),J.empty(),-1)}static max(){return new wn(le.max(),J.empty(),-1)}}function Bg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=J.comparator(n.documentKey,e.documentKey),t!==0?t:Ie(n.largestBatchId,e.largestBatchId))}/**
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
 */async function ui(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==jg)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):F.reject(t)}static resolve(e){return new F((t,r)=>{t(e)})}static reject(e){return new F((t,r)=>{r(e)})}static waitFor(e){return new F((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},c=>r(c))}),a=!0,s===i&&t()})}static or(e){let t=F.resolve(!1);for(const r of e)t=t.next(i=>i?F.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new F((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next(d=>{a[h]=d,++l,l===s&&r(a)},d=>i(d))}})}static doWhile(e,t){return new F((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function zg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function hi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Zo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zo.oe=-1;function Es(n){return n==null}function rs(n){return n===0&&1/n==-1/0}function $g(n){return typeof n=="number"&&Number.isInteger(n)&&!rs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function ec(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Wn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function lh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Me{constructor(e,t){this.comparator=e,this.root=t||nt.EMPTY}insert(e,t){return new Me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oi(this.root,e,this.comparator,!0)}}class Oi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??nt.RED,this.left=i??nt.EMPTY,this.right=s??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new nt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return nt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,t,r,i,s){return this}insert(e,t,r){return new nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tc(this.data.getIterator())}getIteratorFrom(e){return new tc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new it(this.comparator);return t.data=e,t}}class tc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new At([])}unionWith(e){let t=new it(rt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new At(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return dr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ch("Invalid base64 string: "+s):s}}(e);return new pt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const Hg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(n){if(De(!!n),typeof n=="string"){let e=0;const t=Hg.exec(n);if(De(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(n.seconds),nanos:Ge(n.nanos)}}function Ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $n(n){return typeof n=="string"?pt.fromBase64String(n):pt.fromUint8Array(n)}/**
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
 */function Is(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ea(n){const e=n.mapValue.fields.__previous_value__;return Is(e)?ea(e):e}function Zr(n){const e=An(n.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */const xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Is(n)?4:Wg(n)?9007199254740991:10:oe()}function Ht(n,e){if(n===e)return!0;const t=Hn(n);if(t!==Hn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zr(n).isEqual(Zr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=An(i.timestampValue),l=An(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return $n(i.bytesValue).isEqual($n(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Ge(i.geoPointValue.latitude)===Ge(s.geoPointValue.latitude)&&Ge(i.geoPointValue.longitude)===Ge(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ge(i.integerValue)===Ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Ge(i.doubleValue),l=Ge(s.doubleValue);return a===l?rs(a)===rs(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return dr(n.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(ec(a)!==ec(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Ht(a[c],l[c])))return!1;return!0}(n,e);default:return oe()}}function ti(n,e){return(n.values||[]).find(t=>Ht(t,e))!==void 0}function fr(n,e){if(n===e)return 0;const t=Hn(n),r=Hn(e);if(t!==r)return Ie(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ie(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Ge(s.integerValue||s.doubleValue),c=Ge(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return nc(n.timestampValue,e.timestampValue);case 4:return nc(Zr(n),Zr(e));case 5:return Ie(n.stringValue,e.stringValue);case 6:return function(s,a){const l=$n(s),c=$n(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Ie(l[h],c[h]);if(d!==0)return d}return Ie(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=Ie(Ge(s.latitude),Ge(a.latitude));return l!==0?l:Ie(Ge(s.longitude),Ge(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,a){const l=s.values||[],c=a.values||[];for(let h=0;h<l.length&&h<c.length;++h){const d=fr(l[h],c[h]);if(d)return d}return Ie(l.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===xi.mapValue&&a===xi.mapValue)return 0;if(s===xi.mapValue)return 1;if(a===xi.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let g=0;g<c.length&&g<d.length;++g){const p=Ie(c[g],d[g]);if(p!==0)return p;const y=fr(l[c[g]],h[d[g]]);if(y!==0)return y}return Ie(c.length,d.length)}(n.mapValue,e.mapValue);default:throw oe()}}function nc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ie(n,e);const t=An(n),r=An(e),i=Ie(t.seconds,r.seconds);return i!==0?i:Ie(t.nanos,r.nanos)}function pr(n){return To(n)}function To(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=An(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return $n(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return J.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=To(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${To(t.fields[a])}`;return i+"}"}(n.mapValue):oe()}function is(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wo(n){return!!n&&"integerValue"in n}function ta(n){return!!n&&"arrayValue"in n}function rc(n){return!!n&&"nullValue"in n}function ic(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function $i(n){return!!n&&"mapValue"in n}function Wr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Wn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Wr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Wg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!$i(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wr(t)}setAll(e){let t=rt.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Wr(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());$i(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];$i(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Wn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(Wr(this.value))}}function uh(n){const e=[];return Wn(n.fields,(t,r)=>{const i=new rt([t]);if($i(r)){const s=uh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new At(e)}/**
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
 */class ht{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ht(e,0,le.min(),le.min(),le.min(),It.empty(),0)}static newFoundDocument(e,t,r,i){return new ht(e,1,t,le.min(),r,i,0)}static newNoDocument(e,t){return new ht(e,2,t,le.min(),le.min(),It.empty(),0)}static newUnknownDocument(e,t){return new ht(e,3,t,le.min(),le.min(),It.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mr{constructor(e,t){this.position=e,this.inclusive=t}}function sc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(a.referenceValue),t.key):r=fr(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function oc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ht(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class hh{}class We extends hh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Jg(e,t,r):t==="array-contains"?new Zg(e,r):t==="in"?new e_(e,r):t==="not-in"?new t_(e,r):t==="array-contains-any"?new n_(e,r):new We(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Yg(e,r):new Xg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(fr(t,this.value)):t!==null&&Hn(this.value)===Hn(t)&&this.matchesComparison(fr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends hh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Nt(e,t)}matches(e){return dh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function dh(n){return n.op==="and"}function fh(n){return Qg(n)&&dh(n)}function Qg(n){for(const e of n.filters)if(e instanceof Nt)return!1;return!0}function Ao(n){if(n instanceof We)return n.field.canonicalString()+n.op.toString()+pr(n.value);if(fh(n))return n.filters.map(e=>Ao(e)).join(",");{const e=n.filters.map(t=>Ao(t)).join(",");return`${n.op}(${e})`}}function ph(n,e){return n instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&Ht(r.value,i.value)}(n,e):n instanceof Nt?function(r,i){return i instanceof Nt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&ph(a,i.filters[l]),!0):!1}(n,e):void oe()}function mh(n){return n instanceof We?function(t){return`${t.field.canonicalString()} ${t.op} ${pr(t.value)}`}(n):n instanceof Nt?function(t){return t.op.toString()+" {"+t.getFilters().map(mh).join(" ,")+"}"}(n):"Filter"}class Jg extends We{constructor(e,t,r){super(e,t,r),this.key=J.fromName(r.referenceValue)}matches(e){const t=J.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yg extends We{constructor(e,t){super(e,"in",t),this.keys=gh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Xg extends We{constructor(e,t){super(e,"not-in",t),this.keys=gh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function gh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>J.fromName(r.referenceValue))}class Zg extends We{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ta(t)&&ti(t.arrayValue,this.value)}}class e_ extends We{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ti(this.value.arrayValue,t)}}class t_ extends We{constructor(e,t){super(e,"not-in",t)}matches(e){if(ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ti(this.value.arrayValue,t)}}class n_ extends We{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ta(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ti(this.value.arrayValue,r))}}/**
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
 */class r_{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function ac(n,e=null,t=[],r=[],i=null,s=null,a=null){return new r_(n,e,t,r,i,s,a)}function na(n){const e=ue(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ao(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Es(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>pr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>pr(r)).join(",")),e.ue=t}return e.ue}function ra(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Kg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ph(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!oc(n.startAt,e.startAt)&&oc(n.endAt,e.endAt)}function bo(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Kn{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function i_(n,e,t,r,i,s,a,l){return new Kn(n,e,t,r,i,s,a,l)}function _h(n){return new Kn(n)}function lc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ia(n){return n.collectionGroup!==null}function ar(n){const e=ue(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new it(rt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ni(s,r))}),t.has(rt.keyField().canonicalString())||e.ce.push(new ni(rt.keyField(),r))}return e.ce}function jt(n){const e=ue(n);return e.le||(e.le=s_(e,ar(n))),e.le}function s_(n,e){if(n.limitType==="F")return ac(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ni(i.field,s)});const t=n.endAt?new mr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new mr(n.startAt.position,n.startAt.inclusive):null;return ac(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ro(n,e){const t=n.filters.concat([e]);return new Kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ss(n,e,t){return new Kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ts(n,e){return ra(jt(n),jt(e))&&n.limitType===e.limitType}function vh(n){return`${na(jt(n))}|lt:${n.limitType}`}function tr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>mh(i)).join(", ")}]`),Es(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>pr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>pr(i)).join(",")),`Target(${r})`}(jt(n))}; limitType=${n.limitType})`}function ws(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ar(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,c){const h=sc(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,ar(r),i)||r.endAt&&!function(a,l,c){const h=sc(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,ar(r),i))}(n,e)}function o_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yh(n){return(e,t)=>{let r=!1;for(const i of ar(n)){const s=a_(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function a_(n,e,t){const r=n.field.isKeyField()?J.comparator(e.key,t.key):function(s,a,l){const c=a.data.field(s),h=l.data.field(s);return c!==null&&h!==null?fr(c,h):oe()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
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
 */class Tr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return lh(this.inner)}size(){return this.innerSize}}/**
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
 */const l_=new Me(J.comparator);function nn(){return l_}const Eh=new Me(J.comparator);function $r(...n){let e=Eh;for(const t of n)e=e.insert(t.key,t);return e}function Ih(n){let e=Eh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Mn(){return Kr()}function Th(){return Kr()}function Kr(){return new Tr(n=>n.toString(),(n,e)=>n.isEqual(e))}const c_=new Me(J.comparator),u_=new it(J.comparator);function me(...n){let e=u_;for(const t of n)e=e.add(t);return e}const h_=new it(Ie);function d_(){return h_}/**
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
 */function wh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rs(e)?"-0":e}}function Ah(n){return{integerValue:""+n}}function f_(n,e){return $g(e)?Ah(e):wh(n,e)}/**
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
 */class As{constructor(){this._=void 0}}function p_(n,e,t){return n instanceof os?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Is(s)&&(s=ea(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof ri?Rh(n,e):n instanceof ii?Sh(n,e):function(i,s){const a=bh(i,s),l=cc(a)+cc(i.Pe);return wo(a)&&wo(i.Pe)?Ah(l):wh(i.serializer,l)}(n,e)}function m_(n,e,t){return n instanceof ri?Rh(n,e):n instanceof ii?Sh(n,e):t}function bh(n,e){return n instanceof as?function(r){return wo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class os extends As{}class ri extends As{constructor(e){super(),this.elements=e}}function Rh(n,e){const t=Ch(e);for(const r of n.elements)t.some(i=>Ht(i,r))||t.push(r);return{arrayValue:{values:t}}}class ii extends As{constructor(e){super(),this.elements=e}}function Sh(n,e){let t=Ch(e);for(const r of n.elements)t=t.filter(i=>!Ht(i,r));return{arrayValue:{values:t}}}class as extends As{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function cc(n){return Ge(n.integerValue||n.doubleValue)}function Ch(n){return ta(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function g_(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ri&&i instanceof ri||r instanceof ii&&i instanceof ii?dr(r.elements,i.elements,Ht):r instanceof as&&i instanceof as?Ht(r.Pe,i.Pe):r instanceof os&&i instanceof os}(n.transform,e.transform)}class __{constructor(e,t){this.version=e,this.transformResults=t}}class bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bs{}function Ph(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sa(n.key,bt.none()):new di(n.key,n.data,bt.none());{const t=n.data,r=It.empty();let i=new it(rt.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Cn(n.key,r,new At(i.toArray()),bt.none())}}function v_(n,e,t){n instanceof di?function(i,s,a){const l=i.value.clone(),c=hc(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Cn?function(i,s,a){if(!Hi(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=hc(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(kh(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Qr(n,e,t,r){return n instanceof di?function(s,a,l,c){if(!Hi(s.precondition,a))return l;const h=s.value.clone(),d=dc(s.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Cn?function(s,a,l,c){if(!Hi(s.precondition,a))return l;const h=dc(s.fieldTransforms,c,a),d=a.data;return d.setAll(kh(s)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(s,a,l){return Hi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function y_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=bh(r.transform,i||null);s!=null&&(t===null&&(t=It.empty()),t.set(r.field,s))}return t||null}function uc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&dr(r,i,(s,a)=>g_(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class di extends bs{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cn extends bs{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function hc(n,e,t){const r=new Map;De(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,m_(a,l,t[i]))}return r}function dc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,p_(s,a,e))}return r}class sa extends bs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class E_ extends bs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class I_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&v_(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Qr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Qr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Th();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const c=Ph(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),me())}isEqual(e){return this.batchId===e.batchId&&dr(this.mutations,e.mutations,(t,r)=>uc(t,r))&&dr(this.baseMutations,e.baseMutations,(t,r)=>uc(t,r))}}class oa{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){De(e.mutations.length===r.length);let i=function(){return c_}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new oa(e,t,r,i)}}/**
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
 */var $e,_e;function A_(n){switch(n){default:return oe();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Dh(n){if(n===void 0)return tn("GRPC error has no .code"),M.UNKNOWN;switch(n){case $e.OK:return M.OK;case $e.CANCELLED:return M.CANCELLED;case $e.UNKNOWN:return M.UNKNOWN;case $e.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case $e.INTERNAL:return M.INTERNAL;case $e.UNAVAILABLE:return M.UNAVAILABLE;case $e.UNAUTHENTICATED:return M.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case $e.NOT_FOUND:return M.NOT_FOUND;case $e.ALREADY_EXISTS:return M.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return M.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case $e.ABORTED:return M.ABORTED;case $e.OUT_OF_RANGE:return M.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return M.UNIMPLEMENTED;case $e.DATA_LOSS:return M.DATA_LOSS;default:return oe()}}(_e=$e||($e={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const R_=new Un([4294967295,4294967295],0);function fc(n){const e=b_().encode(n),t=new Zu;return t.update(e),new Uint8Array(t.digest())}function pc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Un([t,r],0),new Un([i,s],0)]}class aa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Hr(`Invalid padding: ${t}`);if(r<0)throw new Hr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Hr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Un.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Un.fromNumber(r)));return i.compare(R_)===1&&(i=new Un([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=fc(e),[r,i]=pc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new aa(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=fc(e),[r,i]=pc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Rs{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,fi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Rs(le.min(),i,new Me(Ie),nn(),me())}}class fi{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new fi(r,t,me(),me(),me())}}/**
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
 */class Gi{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Vh{constructor(e,t){this.targetId=e,this.me=t}}class Nh{constructor(e,t,r=pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class mc{constructor(){this.fe=0,this.ge=_c(),this.pe=pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=me(),t=me(),r=me();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:oe()}}),new fi(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=_c()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,De(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class S_{constructor(e){this.Le=e,this.Be=new Map,this.ke=nn(),this.qe=gc(),this.Qe=new Me(Ie)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:oe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(bo(s))if(r===0){const a=new J(s.path);this.Ue(t,a,ht.newNoDocument(a,le.min()))}else De(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=$n(r).toUint8Array()}catch(c){if(c instanceof ch)return hr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new aa(a,i,s)}catch(c){return hr(c instanceof Hr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&bo(l.target)){const c=new J(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,ht.newNoDocument(c,e))}s.be&&(t.set(a,s.Ce()),s.ve())}});let r=me();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Rs(e,t,this.Qe,this.ke,r);return this.ke=nn(),this.qe=gc(),this.Qe=new Me(Ie),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new mc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new it(Ie),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||K("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new mc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function gc(){return new Me(J.comparator)}function _c(){return new Me(J.comparator)}const C_={asc:"ASCENDING",desc:"DESCENDING"},P_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},k_={and:"AND",or:"OR"};class D_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function So(n,e){return n.useProto3Json||Es(e)?e:{value:e}}function ls(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Oh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function V_(n,e){return ls(n,e.toTimestamp())}function qt(n){return De(!!n),le.fromTimestamp(function(t){const r=An(t);return new Je(r.seconds,r.nanos)}(n))}function la(n,e){return Co(n,e).canonicalString()}function Co(n,e){const t=function(i){return new ke(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function xh(n){const e=ke.fromString(n);return De(Bh(e)),e}function Po(n,e){return la(n.databaseId,e.path)}function lo(n,e){const t=xh(e);if(t.get(1)!==n.databaseId.projectId)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new J(Lh(t))}function Mh(n,e){return la(n.databaseId,e)}function N_(n){const e=xh(n);return e.length===4?ke.emptyPath():Lh(e)}function ko(n){return new ke(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Lh(n){return De(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function vc(n,e,t){return{name:Po(n,e),fields:t.value.mapValue.fields}}function O_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,d){return h.useProto3Json?(De(d===void 0||typeof d=="string"),pt.fromBase64String(d||"")):(De(d===void 0||d instanceof Buffer||d instanceof Uint8Array),pt.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const d=h.code===void 0?M.UNKNOWN:Dh(h.code);return new G(d,h.message||"")}(a);t=new Nh(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lo(n,r.document.name),s=qt(r.document.updateTime),a=r.document.createTime?qt(r.document.createTime):le.min(),l=new It({mapValue:{fields:r.document.fields}}),c=ht.newFoundDocument(i,s,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];t=new Gi(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lo(n,r.document),s=r.readTime?qt(r.readTime):le.min(),a=ht.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Gi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lo(n,r.document),s=r.removedTargetIds||[];t=new Gi([],s,i,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new w_(i,s),l=r.targetId;t=new Vh(l,a)}}return t}function x_(n,e){let t;if(e instanceof di)t={update:vc(n,e.key,e.value)};else if(e instanceof sa)t={delete:Po(n,e.key)};else if(e instanceof Cn)t={update:vc(n,e.key,e.data),updateMask:$_(e.fieldMask)};else{if(!(e instanceof E_))return oe();t={verify:Po(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof os)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ri)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ii)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof as)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw oe()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:V_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:oe()}(n,e.precondition)),t}function M_(n,e){return n&&n.length>0?(De(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?qt(i.updateTime):qt(s);return a.isEqual(le.min())&&(a=qt(s)),new __(a,i.transformResults||[])}(t,e))):[]}function L_(n,e){return{documents:[Mh(n,e.path)]}}function U_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Mh(n,i);const s=function(h){if(h.length!==0)return Fh(Nt.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(d=>function(p){return{field:nr(p.field),direction:j_(p.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=So(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function F_(n){let e=N_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){De(r===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(g){const p=Uh(g);return p instanceof Nt&&fh(p)?p.getFilters():[p]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(p=>function(_){return new ni(rr(_.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(t.orderBy));let l=null;t.limit&&(l=function(g){let p;return p=typeof g=="object"?g.value:g,Es(p)?null:p}(t.limit));let c=null;t.startAt&&(c=function(g){const p=!!g.before,y=g.values||[];return new mr(y,p)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const p=!g.before,y=g.values||[];return new mr(y,p)}(t.endAt)),i_(e,i,a,s,l,"F",c,h)}function B_(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Uh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=rr(t.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=rr(t.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=rr(t.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=rr(t.unaryFilter.field);return We.create(a,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(n):n.fieldFilter!==void 0?function(t){return We.create(rr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Nt.create(t.compositeFilter.filters.map(r=>Uh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return oe()}}(t.compositeFilter.op))}(n):oe()}function j_(n){return C_[n]}function q_(n){return P_[n]}function z_(n){return k_[n]}function nr(n){return{fieldPath:n.canonicalString()}}function rr(n){return rt.fromServerFormat(n.fieldPath)}function Fh(n){return n instanceof We?function(t){if(t.op==="=="){if(ic(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NAN"}};if(rc(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ic(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NOT_NAN"}};if(rc(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nr(t.field),op:q_(t.op),value:t.value}}}(n):n instanceof Nt?function(t){const r=t.getFilters().map(i=>Fh(i));return r.length===1?r[0]:{compositeFilter:{op:z_(t.op),filters:r}}}(n):oe()}function $_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Bh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class _n{constructor(e,t,r,i,s=le.min(),a=le.min(),l=pt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new _n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class H_{constructor(e){this.ct=e}}function G_(n){const e=F_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ss(e,e.limit,"L"):e}/**
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
 */class W_{constructor(){this._n=new K_}addToCollectionParentIndex(e,t){return this._n.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(wn.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(wn.min())}updateCollectionGroup(e,t,r){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class K_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new it(ke.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new it(ke.comparator)).toArray()}}/**
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
 */class gr{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new gr(0)}static Ln(){return new gr(-1)}}/**
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
 */class Q_{constructor(){this.changes=new Tr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?F.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Y_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Qr(r.mutation,i,At.empty(),Je.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,t,r=me()){const i=Mn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=$r();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Mn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,me()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=nn();const a=Kr(),l=function(){return Kr()}();return t.forEach((c,h)=>{const d=r.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof Cn)?s=s.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Qr(d.mutation,h,d.mutation.getFieldMask(),Je.now())):a.set(h.key,At.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>{var g;return l.set(h,new J_(d,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Kr();let i=new Me((a,l)=>a-l),s=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let d=r.get(c)||At.empty();d=l.applyToLocalView(h,d),r.set(c,d);const g=(i.get(l.batchId)||me()).add(c);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,g=Th();d.forEach(p=>{if(!s.has(p)){const y=Ph(t.get(p),r.get(p));y!==null&&g.set(p,y),s=s.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return F.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return J.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ia(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):F.resolve(Mn());let l=-1,c=s;return a.next(h=>F.forEach(h,(d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{c=c.insert(d,p)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,me())).next(d=>({batchId:l,changes:Ih(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new J(t)).next(r=>{let i=$r();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=$r();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,c=>{const h=function(g,p){return new Kn(p,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(d=>{d.forEach((g,p)=>{a=a.insert(g,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ht.newInvalidDocument(d)))});let l=$r();return a.forEach((c,h)=>{const d=s.get(c);d!==void 0&&Qr(d.mutation,h,At.empty(),Je.now()),ws(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class X_{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return F.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:qt(i.createTime)}}(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:G_(i.bundledQuery),readTime:qt(i.readTime)}}(t)),F.resolve()}}/**
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
 */class Z_{constructor(){this.overlays=new Me(J.comparator),this.hr=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Mn();return F.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),F.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),F.resolve()}getOverlaysForCollection(e,t,r){const i=Mn(),s=t.length+1,a=new J(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return F.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Me((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=s.get(h.largestBatchId);d===null&&(d=Mn(),s=s.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Mn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=i)););return F.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new T_(t,r));let s=this.hr.get(t);s===void 0&&(s=me(),this.hr.set(t,s)),this.hr.set(t,s.add(r.key))}}/**
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
 */class ca{constructor(){this.Pr=new it(Xe.Ir),this.Tr=new it(Xe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new Xe(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new Xe(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new J(new ke([])),r=new Xe(t,e),i=new Xe(t,e+1),s=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),s.push(a.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new J(new ke([])),r=new Xe(t,e),i=new Xe(t,e+1);let s=me();return this.Tr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new Xe(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return J.comparator(e.key,t.key)||Ie(e.pr,t.pr)}static Er(e,t){return Ie(e.pr,t.pr)||J.comparator(e.key,t.key)}}/**
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
 */class ev{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new it(Xe.Ir)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new I_(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.wr=this.wr.add(new Xe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(e,t){return F.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.br(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xe(t,0),i=new Xe(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],a=>{const l=this.Sr(a.pr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new it(Ie);return t.forEach(i=>{const s=new Xe(i,0),a=new Xe(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,a],l=>{r=r.add(l.pr)})}),F.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const a=new Xe(new J(s),0);let l=new it(Ie);return this.wr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.pr)),!0)},a),F.resolve(this.Dr(l))}Dr(e){const t=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){De(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return F.forEach(t.mutations,i=>{const s=new Xe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new Xe(t,0),i=this.wr.firstAfterOrEqual(r);return F.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class tv{constructor(e){this.vr=e,this.docs=function(){return new Me(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return F.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let r=nn();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=nn();const a=t.path,l=new J(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Bg(Fg(d),r)<=0||(i.has(d.key)||ws(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,t,r,i){oe()}Fr(e,t){return F.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new nv(this)}getSize(e){return F.resolve(this.size)}}class nv extends Q_{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),F.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
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
 */class rv{constructor(e){this.persistence=e,this.Mr=new Tr(t=>na(t),ra),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ca,this.targetCount=0,this.Lr=gr.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,i)=>t(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),F.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new gr(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.qn(t),F.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Mr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return F.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),F.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),F.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return F.resolve(r)}containsKey(e,t){return F.resolve(this.Nr.containsKey(t))}}/**
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
 */class iv{constructor(e,t){this.Br={},this.overlays={},this.kr=new Zo(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new rv(this),this.indexManager=new W_,this.remoteDocumentCache=function(i){return new tv(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new H_(t),this.$r=new X_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Z_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new ev(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){K("MemoryPersistence","Starting transaction:",e);const i=new sv(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,t){return F.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class sv extends qg{constructor(e){super(),this.currentSequenceNumber=e}}class ua{constructor(e){this.persistence=e,this.zr=new ca,this.jr=null}static Hr(e){return new ua(e)}get Jr(){if(this.jr)return this.jr;throw oe()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),F.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),F.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Jr,r=>{const i=J.fromPath(r);return this.Yr(e,i).next(s=>{s||t.removeEntry(i,le.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return F.or([()=>F.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
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
 */class ha{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=i}static Ki(e,t){let r=me(),i=me();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ha(e,t.fromCache,r,i)}}/**
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
 */class av{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return hf()?8:zg(st())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ji(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Hi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new ov;return this.Ji(e,t,a).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,t,a,l.size)})}).next(()=>s.result)}Yi(e,t,r,i){return r.documentReadCount<this.Wi?(jr()<=ge.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",tr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),F.resolve()):(jr()<=ge.DEBUG&&K("QueryEngine","Query:",tr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(jr()<=ge.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",tr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jt(t))):F.resolve())}ji(e,t){if(lc(t))return F.resolve(null);let r=jt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ss(t,null,"F"),r=jt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=me(...s);return this.zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.Zi(t,l);return this.Xi(t,h,a,c.readTime)?this.ji(e,ss(t,null,"F")):this.es(e,h,t,c)}))})))}Hi(e,t,r,i){return lc(t)||i.isEqual(le.min())?F.resolve(null):this.zi.getDocuments(e,r).next(s=>{const a=this.Zi(t,s);return this.Xi(t,a,r,i)?F.resolve(null):(jr()<=ge.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),tr(t)),this.es(e,a,t,Ug(i,-1)).next(l=>l))})}Zi(e,t){let r=new it(yh(e));return t.forEach((i,s)=>{ws(e,s)&&(r=r.add(s))}),r}Xi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,t,r){return jr()<=ge.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",tr(t)),this.zi.getDocumentsMatchingQuery(e,t,wn.min(),r)}es(e,t,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class lv{constructor(e,t,r,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new Me(Ie),this.rs=new Tr(s=>na(s),ra),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Y_(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function cv(n,e,t,r){return new lv(n,e,t,r)}async function jh(n,e){const t=ue(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let c=me();for(const h of i){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of s){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(h=>({us:h,removedBatchIds:a,addedBatchIds:l}))})})}function uv(n,e){const t=ue(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.os.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const g=h.batch,p=g.keys();let y=F.resolve();return p.forEach(_=>{y=y.next(()=>d.getEntry(c,_)).next(w=>{const P=h.docVersions.get(_);De(P!==null),w.version.compareTo(P)<0&&(g.applyToRemoteDocument(w,h),w.isValidDocument()&&(w.setReadTime(h.commitVersion),d.addEntry(w)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=me();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function qh(n){const e=ue(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function hv(n,e){const t=ue(n),r=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const l=[];e.targetChanges.forEach((d,g)=>{const p=i.get(g);if(!p)return;l.push(t.Qr.removeMatchingKeys(s,d.removedDocuments,g).next(()=>t.Qr.addMatchingKeys(s,d.addedDocuments,g)));let y=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?y=y.withResumeToken(pt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(g,y),function(w,P,L){return w.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(p,y,d)&&l.push(t.Qr.updateTargetData(s,y))});let c=nn(),h=me();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(dv(s,a,e.documentUpdates).next(d=>{c=d.cs,h=d.ls})),!r.isEqual(le.min())){const d=t.Qr.getLastRemoteSnapshotVersion(s).next(g=>t.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return F.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.ns=i,s))}function dv(n,e,t){let r=me(),i=me();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=nn();return t.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(le.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):K("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{cs:a,ls:i}})}function fv(n,e){const t=ue(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pv(n,e){const t=ue(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Qr.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):t.Qr.allocateTargetId(r).next(a=>(i=new _n(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function Do(n,e,t){const r=ue(n),i=r.ns.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!hi(a))throw a;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function yc(n,e,t){const r=ue(n);let i=le.min(),s=me();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const g=ue(c),p=g.rs.get(d);return p!==void 0?F.resolve(g.ns.get(p)):g.Qr.getTargetData(h,d)}(r,a,jt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{s=c})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,t?i:le.min(),t?s:me())).next(l=>(mv(r,o_(e),l),{documents:l,hs:s})))}function mv(n,e,t){let r=n.ss.get(e)||le.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(e,r)}class Ec{constructor(){this.activeTargetIds=d_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gv{constructor(){this.no=new Ec,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Ec,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ic{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mi=null;function co(){return Mi===null?Mi=function(){return 268435456+Math.round(2147483648*Math.random())}():Mi++,"0x"+Mi.toString(16)}/**
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
 */const ct="WebChannelConnection";class Ev extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(t,r,i,s,a){const l=co(),c=this.vo(t,r.toUriEncodedString());K("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,s,a),this.Mo(t,c,h,i).then(d=>(K("RestConnection",`Received RPC '${t}' ${l}: `,d),d),d=>{throw hr("RestConnection",`RPC '${t}' ${l} failed with error: `,d,"url: ",c,"request:",i),d})}xo(t,r,i,s,a,l){return this.Co(t,r,i,s,a)}Fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ir}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}vo(t,r){const i=vv[t];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,i){const s=co();return new Promise((a,l)=>{const c=new eh;c.setWithCredentials(!0),c.listenOnce(nh.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case zi.NO_ERROR:const d=c.getResponseJson();K(ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),a(d);break;case zi.TIMEOUT:K(ct,`RPC '${e}' ${s} timed out`),l(new G(M.DEADLINE_EXCEEDED,"Request time out"));break;case zi.HTTP_ERROR:const g=c.getStatus();if(K(ct,`RPC '${e}' ${s} failed with status:`,g,"response text:",c.getResponseText()),g>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const y=p==null?void 0:p.error;if(y&&y.status&&y.message){const _=function(P){const L=P.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(L)>=0?L:M.UNKNOWN}(y.status);l(new G(_,y.message))}else l(new G(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new G(M.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{K(ct,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);K(ct,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",h,r,15)})}Oo(e,t,r){const i=co(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=sh(),l=ih(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new th({})),this.Fo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=s.join("");K(ct,`Creating RPC '${e}' stream ${i}: ${d}`,c);const g=a.createWebChannel(d,c);let p=!1,y=!1;const _=new yv({lo:P=>{y?K(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||(K(ct,`Opening RPC '${e}' stream ${i} transport.`),g.open(),p=!0),K(ct,`RPC '${e}' stream ${i} sending:`,P),g.send(P))},ho:()=>g.close()}),w=(P,L,U)=>{P.listen(L,x=>{try{U(x)}catch(H){setTimeout(()=>{throw H},0)}})};return w(g,zr.EventType.OPEN,()=>{y||(K(ct,`RPC '${e}' stream ${i} transport opened.`),_.mo())}),w(g,zr.EventType.CLOSE,()=>{y||(y=!0,K(ct,`RPC '${e}' stream ${i} transport closed`),_.po())}),w(g,zr.EventType.ERROR,P=>{y||(y=!0,hr(ct,`RPC '${e}' stream ${i} transport errored:`,P),_.po(new G(M.UNAVAILABLE,"The operation could not be completed")))}),w(g,zr.EventType.MESSAGE,P=>{var L;if(!y){const U=P.data[0];De(!!U);const x=U,H=x.error||((L=x[0])===null||L===void 0?void 0:L.error);if(H){K(ct,`RPC '${e}' stream ${i} received error:`,H);const Q=H.status;let B=function(v){const T=$e[v];if(T!==void 0)return Dh(T)}(Q),A=H.message;B===void 0&&(B=M.INTERNAL,A="Unknown error status: "+Q+" with message "+H.message),y=!0,_.po(new G(B,A)),g.close()}else K(ct,`RPC '${e}' stream ${i} received:`,U),_.yo(U)}}),w(l,rh.STAT_EVENT,P=>{P.stat===Io.PROXY?K(ct,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Io.NOPROXY&&K(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.fo()},0),_}}function uo(){return typeof document<"u"?document:null}/**
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
 */function Ss(n){return new D_(n,!0)}/**
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
 */class zh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class $h{constructor(e,t,r,i,s,a,l,c){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new zh(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(tn(t.toString()),tn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===t&&this.u_(r,i)},r=>{e(()=>{const i=new G(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Iv extends $h{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=O_(this.serializer,e),r=function(s){if(!("targetChange"in s))return le.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?le.min():a.readTime?qt(a.readTime):le.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=ko(this.serializer),t.addTarget=function(s,a){let l;const c=a.target;if(l=bo(c)?{documents:L_(s,c)}:{query:U_(s,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Oh(s,a.resumeToken);const h=So(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(le.min())>0){l.readTime=ls(s,a.snapshotVersion.toTimestamp());const h=So(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=B_(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=ko(this.serializer),t.removeTarget=e,this.i_(t)}}class Tv extends $h{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=M_(e.writeResults,e.commitTime),r=qt(e.commitTime);return this.listener.A_(r,t)}return De(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=ko(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>x_(this.serializer,r))};this.i_(t)}}/**
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
 */class wv extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(e,Co(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(M.UNKNOWN,s.toString())})}xo(e,t,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(e,Co(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(M.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Av{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(tn(t),this.y_=!1):K("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class bv{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(a=>{r.enqueueAndForget(async()=>{Qn(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ue(c);h.M_.add(4),await pi(h),h.N_.set("Unknown"),h.M_.delete(4),await Cs(h)}(this))})}),this.N_=new Av(r,i)}}async function Cs(n){if(Qn(n))for(const e of n.x_)await e(!0)}async function pi(n){for(const e of n.x_)await e(!1)}function Hh(n,e){const t=ue(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),ma(t)?pa(t):wr(t).Xo()&&fa(t,e))}function da(n,e){const t=ue(n),r=wr(t);t.F_.delete(e),r.Xo()&&Gh(t,e),t.F_.size===0&&(r.Xo()?r.n_():Qn(t)&&t.N_.set("Unknown"))}function fa(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}wr(n).P_(e)}function Gh(n,e){n.L_.xe(e),wr(n).I_(e)}function pa(n){n.L_=new S_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),wr(n).start(),n.N_.w_()}function ma(n){return Qn(n)&&!wr(n).Zo()&&n.F_.size>0}function Qn(n){return ue(n).M_.size===0}function Wh(n){n.L_=void 0}async function Rv(n){n.N_.set("Online")}async function Sv(n){n.F_.forEach((e,t)=>{fa(n,e)})}async function Cv(n,e){Wh(n),ma(n)?(n.N_.D_(e),pa(n)):n.N_.set("Unknown")}async function Pv(n,e,t){if(n.N_.set("Online"),e instanceof Nh&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.F_.delete(l),i.L_.removeTarget(l))}(n,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cs(n,r)}else if(e instanceof Gi?n.L_.Ke(e):e instanceof Vh?n.L_.He(e):n.L_.We(e),!t.isEqual(le.min()))try{const r=await qh(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.L_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=s.F_.get(h);d&&s.F_.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=s.F_.get(c);if(!d)return;s.F_.set(c,d.withResumeToken(pt.EMPTY_BYTE_STRING,d.snapshotVersion)),Gh(s,c);const g=new _n(d.target,c,h,d.sequenceNumber);fa(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await cs(n,r)}}async function cs(n,e,t){if(!hi(e))throw e;n.M_.add(1),await pi(n),n.N_.set("Offline"),t||(t=()=>qh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await Cs(n)})}function Kh(n,e){return e().catch(t=>cs(n,t,e))}async function Ps(n){const e=ue(n),t=bn(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;kv(e);)try{const i=await fv(e.localStore,r);if(i===null){e.v_.length===0&&t.n_();break}r=i.batchId,Dv(e,i)}catch(i){await cs(e,i)}Qh(e)&&Jh(e)}function kv(n){return Qn(n)&&n.v_.length<10}function Dv(n,e){n.v_.push(e);const t=bn(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function Qh(n){return Qn(n)&&!bn(n).Zo()&&n.v_.length>0}function Jh(n){bn(n).start()}async function Vv(n){bn(n).V_()}async function Nv(n){const e=bn(n);for(const t of n.v_)e.d_(t.mutations)}async function Ov(n,e,t){const r=n.v_.shift(),i=oa.from(r,e,t);await Kh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ps(n)}async function xv(n,e){e&&bn(n).E_&&await async function(r,i){if(function(a){return A_(a)&&a!==M.ABORTED}(i.code)){const s=r.v_.shift();bn(r).t_(),await Kh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ps(r)}}(n,e),Qh(n)&&Jh(n)}async function Tc(n,e){const t=ue(n);t.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Qn(t);t.M_.add(3),await pi(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Cs(t)}async function Mv(n,e){const t=ue(n);e?(t.M_.delete(2),await Cs(t)):e||(t.M_.add(2),await pi(t),t.N_.set("Unknown"))}function wr(n){return n.B_||(n.B_=function(t,r,i){const s=ue(t);return s.f_(),new Iv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:Rv.bind(null,n),To:Sv.bind(null,n),Ao:Cv.bind(null,n),h_:Pv.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),ma(n)?pa(n):n.N_.set("Unknown")):(await n.B_.stop(),Wh(n))})),n.B_}function bn(n){return n.k_||(n.k_=function(t,r,i){const s=ue(t);return s.f_(),new Tv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Vv.bind(null,n),Ao:xv.bind(null,n),R_:Nv.bind(null,n),A_:Ov.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await Ps(n)):(await n.k_.stop(),n.v_.length>0&&(K("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class ga{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new ga(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _a(n,e){if(tn("AsyncQueue",`${e}: ${n}`),hi(n))return new G(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class lr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||J.comparator(t.key,r.key):(t,r)=>J.comparator(t.key,r.key),this.keyedMap=$r(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new lr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new lr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class wc{constructor(){this.q_=new Me(J.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):oe():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class _r{constructor(e,t,r,i,s,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new _r(e,t,lr.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ts(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Lv{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class Uv{constructor(){this.queries=new Tr(e=>vh(e),Ts),this.onlineState="Unknown",this.z_=new Set}}async function Fv(n,e){const t=ue(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new Lv,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await t.onListen(i,!0);break;case 1:s.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=_a(a,`Initialization of query '${tr(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.U_.push(e),e.j_(t.onlineState),s.K_&&e.H_(s.K_)&&va(t)}async function Bv(n,e){const t=ue(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.U_.indexOf(e);a>=0&&(s.U_.splice(a,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function jv(n,e){const t=ue(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.U_)l.H_(i)&&(r=!0);a.K_=i}}r&&va(t)}function qv(n,e,t){const r=ue(n),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(t);r.queries.delete(e)}function va(n){n.z_.forEach(e=>{e.next()})}var Vo,Ac;(Ac=Vo||(Vo={})).J_="default",Ac.Cache="cache";class zv{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _r(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=_r.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Vo.Cache}}/**
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
 */class Yh{constructor(e){this.key=e}}class Xh{constructor(e){this.key=e}}class $v{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=me(),this.mutatedKeys=me(),this.Ia=yh(e),this.Ta=new lr(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new wc,i=t?t.Ta:this.Ta;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,g)=>{const p=i.get(d),y=ws(this.query,g)?g:null,_=!!p&&this.mutatedKeys.has(p.key),w=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let P=!1;p&&y?p.data.isEqual(y.data)?_!==w&&(r.track({type:3,doc:y}),P=!0):this.Ra(p,y)||(r.track({type:2,doc:y}),P=!0,(c&&this.Ia(y,c)>0||h&&this.Ia(y,h)<0)&&(l=!0)):!p&&y?(r.track({type:0,doc:y}),P=!0):p&&!y&&(r.track({type:1,doc:p}),P=!0,(c||h)&&(l=!0)),P&&(y?(a=a.add(y),s=w?s.add(d):s.delete(d)):(a=a.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((d,g)=>function(y,_){const w=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return w(y)-w(_)}(d.type,g.type)||this.Ia(d.doc,g.doc)),this.Va(r),i=i!=null&&i;const l=t&&!i?this.ma():[],c=this.Pa.size===0&&this.current&&!i?1:0,h=c!==this.ha;return this.ha=c,a.length!==0||h?{snapshot:new _r(this.query,e.Ta,s,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new wc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=me(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new Xh(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new Yh(r))}),t}pa(e){this.la=e.hs,this.Pa=me();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return _r.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Hv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Gv{constructor(e){this.key=e,this.wa=!1}}class Wv{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Tr(l=>vh(l),Ts),this.Da=new Map,this.Ca=new Set,this.va=new Me(J.comparator),this.Fa=new Map,this.Ma=new ca,this.xa={},this.Oa=new Map,this.Na=gr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Kv(n,e,t=!0){const r=id(n);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await Zh(r,e,t,!0),i}async function Qv(n,e){const t=id(n);await Zh(t,e,!0,!1)}async function Zh(n,e,t,r){const i=await pv(n.localStore,jt(e)),s=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await Jv(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Hh(n.remoteStore,i),l}async function Jv(n,e,t,r,i){n.Ba=(g,p,y)=>async function(w,P,L,U){let x=P.view.da(L);x.Xi&&(x=await yc(w.localStore,P.query,!1).then(({documents:A})=>P.view.da(A,x)));const H=U&&U.targetChanges.get(P.targetId),Q=U&&U.targetMismatches.get(P.targetId)!=null,B=P.view.applyChanges(x,w.isPrimaryClient,H,Q);return Rc(w,P.targetId,B.fa),B.snapshot}(n,g,p,y);const s=await yc(n.localStore,e,!0),a=new $v(e,s.hs),l=a.da(s.documents),c=fi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,c);Rc(n,t,h.fa);const d=new Hv(e,t,a);return n.ba.set(e,d),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),h.snapshot}async function Yv(n,e,t){const r=ue(n),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(a=>!Ts(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Do(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&da(r.remoteStore,i.targetId),No(r,i.targetId)}).catch(ui)):(No(r,i.targetId),await Do(r.localStore,i.targetId,!0))}async function Xv(n,e){const t=ue(n),r=t.ba.get(e),i=t.Da.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),da(t.remoteStore,r.targetId))}async function Zv(n,e,t){const r=oy(n);try{const i=await function(a,l){const c=ue(a),h=Je.now(),d=l.reduce((y,_)=>y.add(_.key),me());let g,p;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let _=nn(),w=me();return c.os.getEntries(y,d).next(P=>{_=P,_.forEach((L,U)=>{U.isValidDocument()||(w=w.add(L))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,_)).next(P=>{g=P;const L=[];for(const U of l){const x=y_(U,g.get(U.key).overlayedDocument);x!=null&&L.push(new Cn(U.key,x,uh(x.value.mapValue),bt.exists(!0)))}return c.mutationQueue.addMutationBatch(y,h,L,l)}).next(P=>{p=P;const L=P.applyToLocalDocumentSet(g,w);return c.documentOverlayCache.saveOverlays(y,P.batchId,L)})}).then(()=>({batchId:p.batchId,changes:Ih(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let h=a.xa[a.currentUser.toKey()];h||(h=new Me(Ie)),h=h.insert(l,c),a.xa[a.currentUser.toKey()]=h}(r,i.batchId,t),await mi(r,i.changes),await Ps(r.remoteStore)}catch(i){const s=_a(i,"Failed to persist write");t.reject(s)}}async function ed(n,e){const t=ue(n);try{const r=await hv(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Fa.get(s);a&&(De(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?De(a.wa):i.removedDocuments.size>0&&(De(a.wa),a.wa=!1))}),await mi(t,r,e)}catch(r){await ui(r)}}function bc(n,e,t){const r=ue(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ba.forEach((s,a)=>{const l=a.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=ue(a);c.onlineState=l;let h=!1;c.queries.forEach((d,g)=>{for(const p of g.U_)p.j_(l)&&(h=!0)}),h&&va(c)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ey(n,e,t){const r=ue(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Fa.get(e),s=i&&i.key;if(s){let a=new Me(J.comparator);a=a.insert(s,ht.newNoDocument(s,le.min()));const l=me().add(s),c=new Rs(le.min(),new Map,new Me(Ie),a,l);await ed(r,c),r.va=r.va.remove(s),r.Fa.delete(e),ya(r)}else await Do(r.localStore,e,!1).then(()=>No(r,e,t)).catch(ui)}async function ty(n,e){const t=ue(n),r=e.batch.batchId;try{const i=await uv(t.localStore,e);nd(t,r,null),td(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await mi(t,i)}catch(i){await ui(i)}}async function ny(n,e,t){const r=ue(n);try{const i=await function(a,l){const c=ue(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(g=>(De(g!==null),d=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);nd(r,e,t),td(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await mi(r,i)}catch(i){await ui(i)}}function td(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function nd(n,e,t){const r=ue(n);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function No(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||rd(n,r)})}function rd(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(da(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),ya(n))}function Rc(n,e,t){for(const r of t)r instanceof Yh?(n.Ma.addReference(r.key,e),ry(n,r)):r instanceof Xh?(K("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||rd(n,r.key)):oe()}function ry(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(K("SyncEngine","New document in limbo: "+t),n.Ca.add(r),ya(n))}function ya(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new J(ke.fromString(e)),r=n.Na.next();n.Fa.set(r,new Gv(t)),n.va=n.va.insert(t,r),Hh(n.remoteStore,new _n(jt(_h(t.path)),r,"TargetPurposeLimboResolution",Zo.oe))}}async function mi(n,e,t){const r=ue(n),i=[],s=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,c)=>{a.push(r.Ba(c,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const d=h&&!h.fromCache;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(h){i.push(h);const d=ha.Ki(c.targetId,h);s.push(d)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(c,h){const d=ue(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>F.forEach(h,p=>F.forEach(p.qi,y=>d.persistence.referenceDelegate.addReference(g,p.targetId,y)).next(()=>F.forEach(p.Qi,y=>d.persistence.referenceDelegate.removeReference(g,p.targetId,y)))))}catch(g){if(!hi(g))throw g;K("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const p=g.targetId;if(!g.fromCache){const y=d.ns.get(p),_=y.snapshotVersion,w=y.withLastLimboFreeSnapshotVersion(_);d.ns=d.ns.insert(p,w)}}}(r.localStore,s))}async function iy(n,e){const t=ue(n);if(!t.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await jh(t.localStore,e);t.currentUser=e,function(s,a){s.Oa.forEach(l=>{l.forEach(c=>{c.reject(new G(M.CANCELLED,a))})}),s.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mi(t,r.us)}}function sy(n,e){const t=ue(n),r=t.Fa.get(e);if(r&&r.wa)return me().add(r.key);{let i=me();const s=t.Da.get(e);if(!s)return i;for(const a of s){const l=t.ba.get(a);i=i.unionWith(l.view.Ea)}return i}}function id(n){const e=ue(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ed.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ey.bind(null,e),e.Sa.h_=jv.bind(null,e.eventManager),e.Sa.ka=qv.bind(null,e.eventManager),e}function oy(n){const e=ue(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ty.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ny.bind(null,e),e}class Sc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ss(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return cv(this.persistence,new av,e.initialUser,this.serializer)}createPersistence(e){return new iv(ua.Hr,this.serializer)}createSharedClientState(e){return new gv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ay{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iy.bind(null,this.syncEngine),await Mv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Uv}()}createDatastore(e){const t=Ss(e.databaseInfo.databaseId),r=function(s){return new Ev(s)}(e.databaseInfo);return function(s,a,l,c){return new wv(s,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new bv(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>bc(this.syncEngine,t,0),function(){return Ic.D()?new Ic:new _v}())}createSyncEngine(e,t){return function(i,s,a,l,c,h,d){const g=new Wv(i,s,a,l,c,h);return d&&(g.La=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const i=ue(r);K("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await pi(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class ly{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):tn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class cy{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=ah.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{K("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(K("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=_a(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ho(n,e){n.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Cc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await hy(n);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Tc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Tc(e.remoteStore,i)),n._onlineComponents=e}function uy(n){return n.name==="FirebaseError"?n.code===M.FAILED_PRECONDITION||n.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function hy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await ho(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!uy(t))throw t;hr("Error using user provided cache. Falling back to memory cache: "+t),await ho(n,new Sc)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await ho(n,new Sc);return n._offlineComponents}async function sd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await Cc(n,n._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await Cc(n,new ay))),n._onlineComponents}function dy(n){return sd(n).then(e=>e.syncEngine)}async function fy(n){const e=await sd(n),t=e.eventManager;return t.onListen=Kv.bind(null,e.syncEngine),t.onUnlisten=Yv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Qv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Xv.bind(null,e.syncEngine),t}function py(n,e,t={}){const r=new In;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,h){const d=new ly({next:p=>{a.enqueueAndForget(()=>Bv(s,g)),p.fromCache&&c.source==="server"?h.reject(new G(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(p)},error:p=>h.reject(p)}),g=new zv(l,d,{includeMetadataChanges:!0,ra:!0});return Fv(s,g)}(await fy(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function ad(n,e,t){if(!t)throw new G(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function my(n,e,t,r){if(e===!0&&r===!0)throw new G(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function kc(n){if(!J.isDocumentKey(n))throw new G(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Dc(n){if(J.isDocumentKey(n))throw new G(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ks(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":oe()}function rn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ks(n);throw new G(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function gy(n,e){if(e<=0)throw new G(M.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Vc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}my("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=od((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ds{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Pg;switch(r.type){case"firstParty":return new Ng(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Pc.get(t);r&&(K("ComponentProvider","Removing Datastore"),Pc.delete(t),r.terminate())}(this),Promise.resolve()}}function _y(n,e,t,r={}){var i;const s=(n=rn(n,Ds))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&hr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ut.MOCK_USER;else{l=sf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new G(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ut(h)}n._authCredentials=new kg(new oh(l,c))}}/**
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
 */class on{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new on(this.firestore,e,this._query)}}class Tt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class Tn extends on{constructor(e,t,r){super(e,t,_h(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new J(e))}withConverter(e){return new Tn(this.firestore,e,this._path)}}function gt(n,e,...t){if(n=Ze(n),ad("collection","path",e),n instanceof Ds){const r=ke.fromString(e,...t);return Dc(r),new Tn(n,null,r)}{if(!(n instanceof Tt||n instanceof Tn))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ke.fromString(e,...t));return Dc(r),new Tn(n.firestore,null,r)}}function Gn(n,e,...t){if(n=Ze(n),arguments.length===1&&(e=ah.newId()),ad("doc","path",e),n instanceof Ds){const r=ke.fromString(e,...t);return kc(r),new Tt(n,null,new J(r))}{if(!(n instanceof Tt||n instanceof Tn))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ke.fromString(e,...t));return kc(r),new Tt(n.firestore,n instanceof Tn?n.converter:null,new J(r))}}/**
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
 */class vy{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new zh(this,"async_queue_retry"),this.hu=()=>{const t=uo();t&&K("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=uo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=uo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new In;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!hi(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw tn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const i=ga.createAndSchedule(this,e,t,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&oe()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class Ar extends Ds{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new vy}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cd(this),this._firestoreClient.terminate()}}function yy(n,e){const t=typeof n=="object"?n:Eu(),r=typeof n=="string"?n:"(default)",i=Fo(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nf("firestore");s&&_y(i,...s)}return i}function ld(n){return n._firestoreClient||cd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function cd(n){var e,t,r;const i=n._freezeSettings(),s=function(l,c,h,d){return new Gg(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,od(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new cy(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class vr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vr(pt.fromBase64String(e))}catch(t){throw new G(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vr(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Vs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ea{constructor(e){this._methodName=e}}/**
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
 */class Ia{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
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
 */const Ey=/^__.*__$/;class Iy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Cn(e,this.data,this.fieldMask,t,this.fieldTransforms):new di(e,this.data,t,this.fieldTransforms)}}class ud{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Cn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class Ta{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Ta(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return us(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(hd(this.fu)&&Ey.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Ty{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ss(e)}Fu(e,t,r,i=!1){return new Ta({fu:e,methodName:t,vu:r,path:rt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gi(n){const e=n._freezeSettings(),t=Ss(n._databaseId);return new Ty(n._databaseId,!!e.ignoreUndefinedProperties,t)}function dd(n,e,t,r,i,s={}){const a=n.Fu(s.merge||s.mergeFields?2:0,e,t,i);wa("Data must be an object, but it was:",a,r);const l=pd(r,a);let c,h;if(s.merge)c=new At(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const d=[];for(const g of s.mergeFields){const p=Oo(e,g,t);if(!a.contains(p))throw new G(M.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);gd(d,p)||d.push(p)}c=new At(d),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new Iy(new It(l),c,h)}class Ns extends Ea{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ns}}function wy(n,e,t,r){const i=n.Fu(1,e,t);wa("Data must be an object, but it was:",i,r);const s=[],a=It.empty();Wn(r,(c,h)=>{const d=Aa(e,c,t);h=Ze(h);const g=i.Su(d);if(h instanceof Ns)s.push(d);else{const p=_i(h,g);p!=null&&(s.push(d),a.set(d,p))}});const l=new At(s);return new ud(a,l,i.fieldTransforms)}function Ay(n,e,t,r,i,s){const a=n.Fu(1,e,t),l=[Oo(e,r,t)],c=[i];if(s.length%2!=0)throw new G(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)l.push(Oo(e,s[p])),c.push(s[p+1]);const h=[],d=It.empty();for(let p=l.length-1;p>=0;--p)if(!gd(h,l[p])){const y=l[p];let _=c[p];_=Ze(_);const w=a.Su(y);if(_ instanceof Ns)h.push(y);else{const P=_i(_,w);P!=null&&(h.push(y),d.set(y,P))}}const g=new At(h);return new ud(d,g,a.fieldTransforms)}function fd(n,e,t,r=!1){return _i(t,n.Fu(r?4:3,e))}function _i(n,e){if(md(n=Ze(n)))return wa("Unsupported field value:",e,n),pd(n,e);if(n instanceof Ea)return function(r,i){if(!hd(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let c=_i(l,i.bu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return f_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Je.fromDate(r);return{timestampValue:ls(i.serializer,s)}}if(r instanceof Je){const s=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ls(i.serializer,s)}}if(r instanceof Ia)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vr)return{bytesValue:Oh(i.serializer,r._byteString)};if(r instanceof Tt){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:la(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${ks(r)}`)}(n,e)}function pd(n,e){const t={};return lh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wn(n,(r,i)=>{const s=_i(i,e.pu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function md(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Je||n instanceof Ia||n instanceof vr||n instanceof Tt||n instanceof Ea)}function wa(n,e,t){if(!md(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=ks(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function Oo(n,e,t){if((e=Ze(e))instanceof Vs)return e._internalPath;if(typeof e=="string")return Aa(n,e);throw us("Field path arguments must be of type string or ",n,!1,void 0,t)}const by=new RegExp("[~\\*/\\[\\]]");function Aa(n,e,t){if(e.search(by)>=0)throw us(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vs(...e.split("."))._internalPath}catch{throw us(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function us(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new G(M.INVALID_ARGUMENT,l+n+c)}function gd(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class ba{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ry(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Os("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ry extends ba{data(){return super.data()}}function Os(n,e){return typeof e=="string"?Aa(n,e):e instanceof Vs?e._internalPath:e._delegate._internalPath}/**
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
 */function Sy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ra{}class xs extends Ra{}function zt(n,e,...t){let r=[];e instanceof Ra&&r.push(e),r=r.concat(t),function(s){const a=s.filter(c=>c instanceof Sa).length,l=s.filter(c=>c instanceof Ms).length;if(a>1||a>0&&l>0)throw new G(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ms extends xs{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ms(e,t,r)}_apply(e){const t=this._parse(e);return _d(e._query,t),new on(e.firestore,e.converter,Ro(e._query,t))}_parse(e){const t=gi(e.firestore);return function(s,a,l,c,h,d,g){let p;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new G(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Oc(g,d);const y=[];for(const _ of g)y.push(Nc(c,s,_));p={arrayValue:{values:y}}}else p=Nc(c,s,g)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Oc(g,d),p=fd(l,a,g,d==="in"||d==="not-in");return We.create(h,d,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Fn(n,e,t){const r=e,i=Os("where",n);return Ms._create(i,r,t)}class Sa extends Ra{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Sa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Nt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const c of l)_d(a,c),a=Ro(a,c)}(e._query,t),new on(e.firestore,e.converter,Ro(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ca extends xs{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ca(e,t)}_apply(e){const t=function(i,s,a){if(i.startAt!==null)throw new G(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ni(s,a)}(e._query,this._field,this._direction);return new on(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new Kn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function hs(n,e="asc"){const t=e,r=Os("orderBy",n);return Ca._create(r,t)}class Pa extends xs{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Pa(e,t,r)}_apply(e){return new on(e.firestore,e.converter,ss(e._query,this._limit,this._limitType))}}function xo(n){return gy("limit",n),Pa._create("limit",n,"F")}class ka extends xs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ka(e,t,r)}_apply(e){const t=Py(e,this.type,this._docOrFields,this._inclusive);return new on(e.firestore,e.converter,function(i,s){return new Kn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function Cy(...n){return ka._create("startAfter",n,!1)}function Py(n,e,t,r){if(t[0]=Ze(t[0]),t[0]instanceof ba)return function(s,a,l,c,h){if(!c)throw new G(M.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const d=[];for(const g of ar(s))if(g.field.isKeyField())d.push(is(a,c.key));else{const p=c.data.field(g.field);if(Is(p))throw new G(M.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const y=g.field.canonicalString();throw new G(M.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(p)}return new mr(d,h)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=gi(n.firestore);return function(a,l,c,h,d,g){const p=a.explicitOrderBy;if(d.length>p.length)throw new G(M.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let _=0;_<d.length;_++){const w=d[_];if(p[_].field.isKeyField()){if(typeof w!="string")throw new G(M.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof w}`);if(!ia(a)&&w.indexOf("/")!==-1)throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${w}' contains a slash.`);const P=a.path.child(ke.fromString(w));if(!J.isDocumentKey(P))throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const L=new J(P);y.push(is(l,L))}else{const P=fd(c,h,w);y.push(P)}}return new mr(y,g)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Nc(n,e,t){if(typeof(t=Ze(t))=="string"){if(t==="")throw new G(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ia(e)&&t.indexOf("/")!==-1)throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ke.fromString(t));if(!J.isDocumentKey(r))throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return is(n,new J(r))}if(t instanceof Tt)return is(n,t._key);throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ks(t)}.`)}function Oc(n,e){if(!Array.isArray(n)||n.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _d(n,e){const t=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new G(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ky{convertValue(e,t="none"){switch(Hn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($n(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw oe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Wn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Ia(Ge(e.latitude),Ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ea(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Zr(e));default:return null}}convertTimestamp(e){const t=An(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ke.fromString(e);De(Bh(r));const i=new ei(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(t)||tn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class Li{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dy extends ba{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Os("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Wi extends Dy{data(e={}){return super.data(e)}}class Vy{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Li(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Wi(this._firestore,this._userDataWriter,r.key,r,new Li(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const c=new Wi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Li(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Wi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Li(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:Ny(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ny(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}class Oy extends ky{constructor(e){super(),this.firestore=e}convertBytes(e){return new vr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function Vt(n){n=rn(n,on);const e=rn(n.firestore,Ar),t=ld(e),r=new Oy(e);return Sy(n._query),py(t,n._query).then(i=>new Vy(e,r,n,i))}function xy(n,e,t){n=rn(n,Tt);const r=rn(n.firestore,Ar),i=vd(n.converter,e,t);return Us(r,[dd(gi(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,bt.none())])}function My(n,e,t,...r){n=rn(n,Tt);const i=rn(n.firestore,Ar),s=gi(i);let a;return a=typeof(e=Ze(e))=="string"||e instanceof Vs?Ay(s,"updateDoc",n._key,e,t,r):wy(s,"updateDoc",n._key,e),Us(i,[a.toMutation(n._key,bt.exists(!0))])}function ds(n){return Us(rn(n.firestore,Ar),[new sa(n._key,bt.none())])}function Ls(n,e){const t=rn(n.firestore,Ar),r=Gn(n),i=vd(n.converter,e);return Us(t,[dd(gi(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function Us(n,e){return function(r,i){const s=new In;return r.asyncQueue.enqueueAndForget(async()=>Zv(await dy(r),i,s)),s.promise}(ld(n),e)}(function(e,t=!0){(function(i){Ir=i})(yr),cr(new Bn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Ar(new Dg(r.getProvider("auth-internal")),new xg(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ei(h.options.projectId,d)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),En(Zl,"4.6.3",e),En(Zl,"4.6.3","esm2017")})();const Ly={apiKey:"AIzaSyCmUmIV1VPwO6ES8HYRVilL0y7Oe51a93k",authDomain:"prohost-9406a.firebaseapp.com",projectId:"prohost-9406a",storageBucket:"prohost-9406a.appspot.com",messagingSenderId:"976489526771",appId:"1:976489526771:web:5cd8ead6af96db8f110e86"},yd=yu(Ly),fs=ns(yd),Be=yy(yd),pe=ps(0),qr=ps(0),Mo=ps(0),Uy=ps(0),Fy=""+new URL("../assets/logo.gtldxAIb.png",import.meta.url).href;function xc(n,e,t){const r=n.slice();return r[48]=e[t],r}function Mc(n,e,t){const r=n.slice();return r[51]=e[t],r}function Lc(n){let e,t="추가",r,i,s="채택",a,l,c="삭제",h,d,g="문제신고 확인",p,y;return{c(){e=D("button"),e.textContent=t,r=j(),i=D("button"),i.textContent=s,a=j(),l=D("button"),l.textContent=c,h=j(),d=D("button"),d.textContent=g,this.h()},l(_){e=V(_,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-1lsf66u"&&(e.textContent=t),r=q(_),i=V(_,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(i)!=="svelte-gljqo6"&&(i.textContent=s),a=q(_),l=V(_,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(l)!=="svelte-1ipyraa"&&(l.textContent=c),h=q(_),d=V(_,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(d)!=="svelte-18d8umu"&&(d.textContent=g),this.h()},h(){S(e,"class","top-right-button0 svelte-5xk7j6"),S(i,"class","top-right-button svelte-5xk7j6"),S(l,"class","top-right-button6 svelte-5xk7j6"),S(d,"class","top-right-button8 svelte-5xk7j6")},m(_,w){ee(_,e,w),ee(_,r,w),ee(_,i,w),ee(_,a,w),ee(_,l,w),ee(_,h,w),ee(_,d,w),p||(y=[W(e,"click",n[14]),W(i,"click",n[10]),W(l,"click",n[11]),W(d,"click",n[21])],p=!0)},p:Te,d(_){_&&(N(e),N(r),N(i),N(a),N(l),N(h),N(d)),p=!1,Ot(y)}}}function Uc(n){let e,t=n[51]+"",r,i,s;return{c(){e=D("div"),r=Ae(t),this.h()},l(a){e=V(a,"DIV",{class:!0});var l=z(e);r=be(l,t),l.forEach(N),this.h()},h(){S(e,"class","ranking-item svelte-5xk7j6")},m(a,l){ee(a,e,l),b(e,r),i||(s=W(e,"click",function(){Gd(n[15](n[51]))&&n[15](n[51]).apply(this,arguments)}),i=!0)},p(a,l){n=a,l[0]&128&&t!==(t=n[51]+"")&&Fe(r,t)},d(a){a&&N(e),i=!1,s()}}}function Fc(n){let e,t=ft(n[0]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Bc(xc(n,t,i));return{c(){e=D("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=V(i,"DIV",{class:!0});var s=z(e);for(let a=0;a<r.length;a+=1)r[a].l(s);s.forEach(N),this.h()},h(){S(e,"class","search-history svelte-5xk7j6")},m(i,s){ee(i,e,s);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null)},p(i,s){if(s[0]&1048577){t=ft(i[0]);let a;for(a=0;a<t.length;a+=1){const l=xc(i,t,a);r[a]?r[a].p(l,s):(r[a]=Bc(l),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}},d(i){i&&N(e),Sn(r,i)}}}function Bc(n){let e,t=n[48]+"",r,i,s;function a(){return n[30](n[48])}return{c(){e=D("div"),r=Ae(t),this.h()},l(l){e=V(l,"DIV",{class:!0});var c=z(e);r=be(c,t),c.forEach(N),this.h()},h(){S(e,"class","history-item svelte-5xk7j6")},m(l,c){ee(l,e,c),b(e,r),i||(s=W(e,"click",a),i=!0)},p(l,c){n=l,c[0]&1&&t!==(t=n[48]+"")&&Fe(r,t)},d(l){l&&N(e),i=!1,s()}}}function jc(n){let e,t,r,i,s="Close",a,l,c=!n[5]&&qc();return{c(){e=D("div"),t=D("div"),c&&c.c(),r=j(),i=D("button"),i.textContent=s,this.h()},l(h){e=V(h,"DIV",{class:!0});var d=z(e);t=V(d,"DIV",{class:!0});var g=z(t);c&&c.l(g),r=q(g),i=V(g,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(i)!=="svelte-au4vm5"&&(i.textContent=s),g.forEach(N),d.forEach(N),this.h()},h(){S(i,"class","close-button svelte-5xk7j6"),S(t,"class","modal svelte-5xk7j6"),S(e,"class","modal-background svelte-5xk7j6")},m(h,d){ee(h,e,d),b(e,t),c&&c.m(t,null),b(t,r),b(t,i),a||(l=[W(i,"click",n[19]),W(t,"click",Kd(n[26])),W(e,"click",n[19])],a=!0)},p(h,d){h[5]?c&&(c.d(1),c=null):c||(c=qc(),c.c(),c.m(t,r))},d(h){h&&N(e),c&&c.d(),a=!1,Ot(l)}}}function qc(n){let e,t="아직 추가되지 않은 단어입니다..";return{c(){e=D("div"),e.textContent=t,this.h()},l(r){e=V(r,"DIV",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-1tgxuji"&&(e.textContent=t),this.h()},h(){S(e,"class","modal-explain svelte-5xk7j6")},m(r,i){ee(r,e,i)},d(r){r&&N(e)}}}function By(n){let e,t,r='<h1 id="logo_text" class="svelte-5xk7j6">신한사</h1>',i,s,a,l,c,h,d,g,p,y,_,w,P,L,U="모든 단어 보러가기",x,H,Q="로그아웃",B,A,E="단어 신청",v,T,R="문제 신고",C,I,te,Z,ie,Y,re,ce,he="게임",ae,Ee="순위",de,Ke,je,Ft="실시간 랭킹 TOP3",yt,X,Pe,xe,ot,Et,et,an='<span class="ex_te svelte-5xk7j6">신한사의 모든 단어들은 사람들의 설문에 의해 만들어졌으며, 설명글은 사람들의 설문과 GPT-4o에 의해 만들어졌습니다.</span> <span class="ex_te2 svelte-5xk7j6">신한사의 모든 단어들이 가진 성향은 신한사와 관련이 있지 않습니다.</span>',Pt,br,Ye=n[6]=="host.wproject00@gmail.com"&&Lc(n),ln=ft(n[7]),qe=[];for(let fe=0;fe<ln.length;fe+=1)qe[fe]=Uc(Mc(n,ln,fe));let ze=n[1]&&n[0].length>0&&Fc(n),Qe=n[2]&&jc(n);return{c(){e=D("div"),t=D("div"),t.innerHTML=r,i=j(),s=D("img"),l=j(),c=D("button"),h=D("div"),d=j(),g=D("div"),p=j(),y=D("div"),_=j(),w=D("div"),P=D("div"),L=D("span"),L.textContent=U,x=j(),H=D("button"),H.textContent=Q,B=j(),A=D("button"),A.textContent=E,v=j(),T=D("button"),T.textContent=R,C=j(),Ye&&Ye.c(),I=j(),te=D("div"),Z=D("input"),ie=j(),Y=D("div"),re=D("div"),ce=D("span"),ce.textContent=he,ae=D("span"),ae.textContent=Ee,de=j(),Ke=D("div"),je=D("h3"),je.textContent=Ft,yt=j(),X=D("br"),Pe=j();for(let fe=0;fe<qe.length;fe+=1)qe[fe].c();xe=j(),ze&&ze.c(),ot=j(),Qe&&Qe.c(),Et=j(),et=D("div"),et.innerHTML=an,this.h()},l(fe){e=V(fe,"DIV",{id:!0,class:!0});var ve=z(e);t=V(ve,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),ne(t)!=="svelte-1s1wxsl"&&(t.innerHTML=r),i=q(ve),s=V(ve,"IMG",{class:!0,src:!0,alt:!0}),l=q(ve),c=V(ve,"BUTTON",{id:!0,class:!0});var Se=z(c);h=V(Se,"DIV",{class:!0}),z(h).forEach(N),d=q(Se),g=V(Se,"DIV",{class:!0}),z(g).forEach(N),p=q(Se),y=V(Se,"DIV",{class:!0}),z(y).forEach(N),Se.forEach(N),_=q(ve),w=V(ve,"DIV",{class:!0});var cn=z(w);P=V(cn,"DIV",{class:!0});var Ve=z(P);L=V(Ve,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),ne(L)!=="svelte-onli1k"&&(L.textContent=U),x=q(Ve),H=V(Ve,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),ne(H)!=="svelte-1a7h9s"&&(H.textContent=Q),B=q(Ve),A=V(Ve,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),ne(A)!=="svelte-lgs35r"&&(A.textContent=E),v=q(Ve),T=V(Ve,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),ne(T)!=="svelte-13wzyr"&&(T.textContent=R),Ve.forEach(N),cn.forEach(N),C=q(ve),Ye&&Ye.l(ve),I=q(ve),te=V(ve,"DIV",{class:!0});var Oe=z(te);Z=V(Oe,"INPUT",{type:!0,autocomplete:!0,id:!0,class:!0,placeholder:!0}),ie=q(Oe),Y=V(Oe,"DIV",{id:!0,class:!0});var Pn=z(Y);re=V(Pn,"DIV",{id:!0,class:!0});var Jn=z(re);ce=V(Jn,"SPAN",{class:!0,"data-svelte-h":!0}),ne(ce)!=="svelte-13yvgpb"&&(ce.textContent=he),ae=V(Jn,"SPAN",{class:!0,"data-svelte-h":!0}),ne(ae)!=="svelte-1ln56b9"&&(ae.textContent=Ee),Jn.forEach(N),Pn.forEach(N),de=q(Oe),Ke=V(Oe,"DIV",{class:!0});var Gt=z(Ke);je=V(Gt,"H3",{style:!0,"data-svelte-h":!0}),ne(je)!=="svelte-6yec9j"&&(je.textContent=Ft),yt=q(Gt),X=V(Gt,"BR",{}),Pe=q(Gt);for(let Rr=0;Rr<qe.length;Rr+=1)qe[Rr].l(Gt);Gt.forEach(N),xe=q(Oe),ze&&ze.l(Oe),Oe.forEach(N),ot=q(ve),Qe&&Qe.l(ve),Et=q(ve),et=V(ve,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),ne(et)!=="svelte-1b9tnz3"&&(et.innerHTML=an),ve.forEach(N),this.h()},h(){S(t,"id","logo_div"),S(t,"class","svelte-5xk7j6"),S(s,"class","logo_img svelte-5xk7j6"),Hd(s.src,a=Fy)||S(s,"src",a),S(s,"alt","logo"),S(h,"class","svelte-5xk7j6"),He(h,"active",n[8]),S(g,"class","svelte-5xk7j6"),He(g,"active",n[8]),S(y,"class","svelte-5xk7j6"),He(y,"active",n[8]),S(c,"id","menu-button"),S(c,"class","hamburger svelte-5xk7j6"),Ue(L,"position","relative"),Ue(L,"top","50px"),S(L,"class","svelte-5xk7j6"),S(H,"class","top-right-button2 svelte-5xk7j6"),Ue(H,"position","relative"),Ue(H,"top","270px"),Ue(H,"left","0px"),S(A,"class","top-right-button3 svelte-5xk7j6"),Ue(A,"position","relative"),Ue(A,"top","0px"),Ue(A,"left","0px"),S(T,"class","top-right-button7 svelte-5xk7j6"),Ue(T,"position","relative"),Ue(T,"top","15px"),Ue(T,"left","0px"),S(P,"class","sidebar-content svelte-5xk7j6"),S(w,"class","sidebar svelte-5xk7j6"),He(w,"visible",n[8]),S(Z,"type","text"),S(Z,"autocomplete","off"),S(Z,"id","sb"),S(Z,"class","search-bar svelte-5xk7j6"),S(Z,"placeholder","검색..."),Z.value=n[3],S(ce,"class","tt1 svelte-5xk7j6"),S(ae,"class","tt2 svelte-5xk7j6"),S(re,"id","logo"),S(re,"class","svelte-5xk7j6"),S(Y,"id","game-box"),S(Y,"class","svelte-5xk7j6"),Ue(je,"color","white"),Ue(je,"font-size","140%"),S(Ke,"class","ranking-container svelte-5xk7j6"),S(te,"class","search-container svelte-5xk7j6"),S(et,"id","exp"),S(et,"class","svelte-5xk7j6"),S(e,"id","condiv"),S(e,"class","svelte-5xk7j6")},m(fe,ve){ee(fe,e,ve),b(e,t),b(e,i),b(e,s),b(e,l),b(e,c),b(c,h),b(c,d),b(c,g),b(c,p),b(c,y),b(e,_),b(e,w),b(w,P),b(P,L),b(P,x),b(P,H),b(P,B),b(P,A),b(P,v),b(P,T),b(e,C),Ye&&Ye.m(e,null),b(e,I),b(e,te),b(te,Z),b(te,ie),b(te,Y),b(Y,re),b(re,ce),b(re,ae),b(te,de),b(te,Ke),b(Ke,je),b(Ke,yt),b(Ke,X),b(Ke,Pe);for(let Se=0;Se<qe.length;Se+=1)qe[Se]&&qe[Se].m(Ke,null);b(te,xe),ze&&ze.m(te,null),b(e,ot),Qe&&Qe.m(e,null),b(e,Et),b(e,et),Pt||(br=[W(c,"click",n[25]),W(L,"click",n[22]),W(H,"click",n[13]),W(A,"click",n[9]),W(T,"click",n[12]),W(Z,"input",n[27]),W(Z,"keydown",n[16]),W(Z,"focus",n[17]),W(Z,"blur",n[18]),W(Z,"compositionstart",n[28]),W(Z,"compositionend",n[29]),W(ce,"click",n[23]),W(ae,"click",n[24])],Pt=!0)},p(fe,ve){if(ve[0]&256&&He(h,"active",fe[8]),ve[0]&256&&He(g,"active",fe[8]),ve[0]&256&&He(y,"active",fe[8]),ve[0]&256&&He(w,"visible",fe[8]),fe[6]=="host.wproject00@gmail.com"?Ye?Ye.p(fe,ve):(Ye=Lc(fe),Ye.c(),Ye.m(e,I)):Ye&&(Ye.d(1),Ye=null),ve[0]&8&&Z.value!==fe[3]&&(Z.value=fe[3]),ve[0]&32896){ln=ft(fe[7]);let Se;for(Se=0;Se<ln.length;Se+=1){const cn=Mc(fe,ln,Se);qe[Se]?qe[Se].p(cn,ve):(qe[Se]=Uc(cn),qe[Se].c(),qe[Se].m(Ke,null))}for(;Se<qe.length;Se+=1)qe[Se].d(1);qe.length=ln.length}fe[1]&&fe[0].length>0?ze?ze.p(fe,ve):(ze=Fc(fe),ze.c(),ze.m(te,null)):ze&&(ze.d(1),ze=null),fe[2]?Qe?Qe.p(fe,ve):(Qe=jc(fe),Qe.c(),Qe.m(e,Et)):Qe&&(Qe.d(1),Qe=null)},i:Te,o:Te,d(fe){fe&&N(e),Ye&&Ye.d(),Sn(qe,fe),ze&&ze.d(),Qe&&Qe.d(),Pt=!1,Ot(br)}}}function jy(n,e,t){let r,i,s;dt(n,pe,X=>t(36,r=X)),dt(n,Uy,X=>t(37,X)),dt(n,Mo,X=>t(38,i=X)),dt(n,qr,X=>t(39,s=X));let a=[],l=!1,c=!1,h="",d=!1,g=[],p=null,y="";Rn(()=>{Z(),v()});function _(){Re(pe,r=3,r)}function w(){Re(pe,r=4,r)}const P=()=>{Re(pe,r=5,r)},L=()=>{Re(pe,r=6,r)};new Promise((X,Pe)=>{Qo(fs,xe=>{xe?X(xe.email):Pe("No user is signed in")})}).then(X=>t(6,y=X)).catch(X=>console.error(X));const x=async()=>{try{await gm(fs)}catch(X){console.error("Error signing out:",X)}};function H(){Re(pe,r=1,r)}async function Q(X){t(1,l=!1);const Pe=await ie(X);g=Pe.matches,t(5,p=Pe.exactMatch),console.log(g),p?(Re(qr,s=p.title,s),p.value,p.explain,p.count+1,Re(pe,r=2,r)):Re(qr,s="",s),t(2,c=!0)}async function B(X){if(!d&&X.key==="Enter"&&(t(3,h=X.target.value.trim()),h)){E(h),X.target.value="",t(1,l=!1);const Pe=await ie(h);g=Pe.matches,t(5,p=Pe.exactMatch),console.log(g),p?(Re(qr,s=p.title,s),p.value,p.explain,p.count+1,A(s),Re(pe,r=2,r)):Re(qr,s="",s),t(2,c=!0)}}async function A(X){try{const Pe=zt(gt(Be,"datas"),Fn("title","==",X)),xe=await Vt(Pe);xe.empty?console.log("No matching documents found."):xe.forEach(async ot=>{const Et=Gn(Be,"datas",ot.id),et=ot.data().count||0;await My(Et,{count:et+1}),console.log(`Document with ID ${ot.id} updated successfully`)})}catch(Pe){console.error("Error updating document: ",Pe)}}function E(X){const Pe=JSON.parse(sessionStorage.getItem("searchHistory"))||[],xe=[X,...Pe.filter(ot=>ot!==X)];xe.length>3&&xe.pop(),sessionStorage.setItem("searchHistory",JSON.stringify(xe)),t(0,a=xe)}function v(){const X=JSON.parse(sessionStorage.getItem("searchHistory"))||[];t(0,a=X)}function T(){t(1,l=!0)}function R(){setTimeout(()=>t(1,l=!1),100)}function C(){t(2,c=!1)}function I(X){document.getElementById("sb").value=X,t(1,l=!1)}let te=[];async function Z(){try{const X=zt(gt(Be,"datas"),hs("count","desc"),xo(3)),Pe=await Vt(X);t(7,te=Pe.docs.map(xe=>xe.data().title))}catch(X){console.error("Error fetching documents: ",X)}}async function ie(X){const Pe=gt(Be,"datas"),xe=zt(Pe,Fn("title",">=",X),Fn("title","<=",X+"")),ot=await Vt(xe),Et=[];let et=null;return ot.forEach(an=>{const Pt=an.data();Et.push(Pt),Pt.title===X&&(et=Pt)}),Re(Mo,i=Et,i),{exactMatch:et,matches:Et}}const Y=()=>{Re(pe,r=7,r)},re=()=>{Re(pe,r=8,r)},ce=()=>{Re(pe,r=9,r)},he=()=>{Re(pe,r=10,r)};let ae=!1;function Ee(){t(8,ae=!ae)}function de(X){Wd.call(this,n,X)}return[a,l,c,h,d,p,y,te,ae,_,w,P,L,x,H,Q,B,T,R,C,I,Y,re,ce,he,Ee,de,X=>t(3,h=X.target.value),()=>t(4,d=!0),()=>t(4,d=!1),X=>I(X)]}class qy extends St{constructor(e){super(),Ct(this,e,jy,By,Rt,{},null,[-1,-1])}}function zc(n){let e,t;return{c(){e=D("div"),t=Ae(n[5]),this.h()},l(r){e=V(r,"DIV",{class:!0});var i=z(e);t=be(i,n[5]),i.forEach(N),this.h()},h(){S(e,"class","error-message svelte-e5fo8p")},m(r,i){ee(r,e,i),b(e,t)},p(r,i){i&32&&Fe(t,r[5])},d(r){r&&N(e)}}}function zy(n){let e,t,r,i,s="Title",a,l,c,h,d,g="Value",p,y,_,w,P,L="Explain",U,x,H,Q,B,A="Tag (과학:0 / 일상:1)",E,v,T,R,C,I,te,Z,ie,Y="Cancel",re,ce,he=n[5]&&zc(n);return{c(){e=D("div"),t=D("div"),r=D("div"),i=D("label"),i.textContent=s,a=j(),l=D("input"),c=j(),h=D("div"),d=D("label"),d.textContent=g,p=j(),y=D("input"),_=j(),w=D("div"),P=D("label"),P.textContent=L,U=j(),x=D("input"),H=j(),Q=D("div"),B=D("label"),B.textContent=A,E=j(),v=D("input"),T=j(),he&&he.c(),R=j(),C=D("div"),I=D("button"),te=Ae("Submit"),Z=j(),ie=D("button"),ie.textContent=Y,this.h()},l(ae){e=V(ae,"DIV",{class:!0});var Ee=z(e);t=V(Ee,"DIV",{class:!0});var de=z(t);r=V(de,"DIV",{class:!0});var Ke=z(r);i=V(Ke,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ne(i)!=="svelte-1weqgc2"&&(i.textContent=s),a=q(Ke),l=V(Ke,"INPUT",{class:!0,type:!0,id:!0}),Ke.forEach(N),c=q(de),h=V(de,"DIV",{class:!0});var je=z(h);d=V(je,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ne(d)!=="svelte-ry2554"&&(d.textContent=g),p=q(je),y=V(je,"INPUT",{class:!0,type:!0,id:!0}),je.forEach(N),_=q(de),w=V(de,"DIV",{class:!0});var Ft=z(w);P=V(Ft,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ne(P)!=="svelte-2n35pc"&&(P.textContent=L),U=q(Ft),x=V(Ft,"INPUT",{class:!0,type:!0,id:!0}),Ft.forEach(N),H=q(de),Q=V(de,"DIV",{class:!0});var yt=z(Q);B=V(yt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ne(B)!=="svelte-1lp5d2m"&&(B.textContent=A),E=q(yt),v=V(yt,"INPUT",{class:!0,type:!0,id:!0}),yt.forEach(N),T=q(de),he&&he.l(de),R=q(de),C=V(de,"DIV",{class:!0});var X=z(C);I=V(X,"BUTTON",{class:!0});var Pe=z(I);te=be(Pe,"Submit"),Pe.forEach(N),Z=q(X),ie=V(X,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(ie)!=="svelte-9k415x"&&(ie.textContent=Y),X.forEach(N),de.forEach(N),Ee.forEach(N),this.h()},h(){S(i,"class","form-label svelte-e5fo8p"),S(i,"for","title"),S(l,"class","form-input svelte-e5fo8p"),S(l,"type","text"),S(l,"id","title"),S(r,"class","form-group svelte-e5fo8p"),S(d,"class","form-label svelte-e5fo8p"),S(d,"for","value"),S(y,"class","form-input svelte-e5fo8p"),S(y,"type","text"),S(y,"id","value"),S(h,"class","form-group svelte-e5fo8p"),S(P,"class","form-label svelte-e5fo8p"),S(P,"for","explain"),S(x,"class","form-input svelte-e5fo8p"),S(x,"type","text"),S(x,"id","explain"),S(w,"class","form-group svelte-e5fo8p"),S(B,"class","form-label svelte-e5fo8p"),S(B,"for","tag1"),S(v,"class","form-input svelte-e5fo8p"),S(v,"type","text"),S(v,"id","tag1"),S(Q,"class","form-group svelte-e5fo8p"),S(I,"class","form-button svelte-e5fo8p"),I.disabled=n[4],S(ie,"class","form-button cancel-button svelte-e5fo8p"),S(C,"class","form-buttons svelte-e5fo8p"),S(t,"class","form-content svelte-e5fo8p"),S(e,"class","form-container svelte-e5fo8p")},m(ae,Ee){ee(ae,e,Ee),b(e,t),b(t,r),b(r,i),b(r,a),b(r,l),we(l,n[0]),b(t,c),b(t,h),b(h,d),b(h,p),b(h,y),we(y,n[1]),b(t,_),b(t,w),b(w,P),b(w,U),b(w,x),we(x,n[2]),b(t,H),b(t,Q),b(Q,B),b(Q,E),b(Q,v),we(v,n[3]),b(t,T),he&&he.m(t,null),b(t,R),b(t,C),b(C,I),b(I,te),b(C,Z),b(C,ie),re||(ce=[W(l,"input",n[8]),W(y,"input",n[9]),W(x,"input",n[10]),W(v,"input",n[11]),W(I,"click",n[6]),W(ie,"click",n[7])],re=!0)},p(ae,[Ee]){Ee&1&&l.value!==ae[0]&&we(l,ae[0]),Ee&2&&y.value!==ae[1]&&we(y,ae[1]),Ee&4&&x.value!==ae[2]&&we(x,ae[2]),Ee&8&&v.value!==ae[3]&&we(v,ae[3]),ae[5]?he?he.p(ae,Ee):(he=zc(ae),he.c(),he.m(t,R)):he&&(he.d(1),he=null),Ee&16&&(I.disabled=ae[4])},i:Te,o:Te,d(ae){ae&&N(e),he&&he.d(),re=!1,Ot(ce)}}}function $y(n,e,t){let r;dt(n,pe,P=>t(12,r=P));let i="",s="",a="",l="",c=!1,h="";const d=async()=>{if(!i||!s||!a||!l){t(5,h="All fields are required!");return}t(4,c=!0),t(5,h="");try{if(!(await Vt(zt(gt(Be,"datas"),Fn("title","==",i)))).empty){t(5,h="Title already exists! Please choose a different title.");return}await Ls(gt(Be,"datas"),{title:i,value:s,explain:a,tag1:l,count:0}),t(0,i=""),t(1,s=""),t(2,a=""),t(3,l=""),Re(pe,r=0,r)}catch(P){console.error("Error adding document: ",P),t(5,h="Error adding document!")}finally{t(4,c=!1)}},g=()=>{t(0,i=""),t(1,s=""),t(2,a=""),t(3,l=""),t(5,h=""),Re(pe,r=0,r)};function p(){i=this.value,t(0,i)}function y(){s=this.value,t(1,s)}function _(){a=this.value,t(2,a)}function w(){l=this.value,t(3,l)}return[i,s,a,l,c,h,d,g,p,y,_,w]}class Hy extends St{constructor(e){super(),Ct(this,e,$y,zy,Rt,{})}}function $c(n,e,t){const r=n.slice();return r[14]=e[t],r}function Hc(n){let e,t,r=n[14].title+"",i,s,a,l=n[14].value+"",c,h,d,g=n[14].explain+"",p,y,_,w,P="검색수:",L,U=n[14].count+"",x,H;return{c(){e=D("div"),t=D("h3"),i=Ae(r),s=j(),a=D("p"),c=Ae(l),h=j(),d=D("p"),p=Ae(g),y=j(),_=D("p"),w=D("strong"),w.textContent=P,L=j(),x=Ae(U),H=j(),this.h()},l(Q){e=V(Q,"DIV",{class:!0});var B=z(e);t=V(B,"H3",{class:!0});var A=z(t);i=be(A,r),A.forEach(N),s=q(B),a=V(B,"P",{class:!0});var E=z(a);c=be(E,l),E.forEach(N),h=q(B),d=V(B,"P",{class:!0});var v=z(d);p=be(v,g),v.forEach(N),y=q(B),_=V(B,"P",{class:!0});var T=z(_);w=V(T,"STRONG",{"data-svelte-h":!0}),ne(w)!=="svelte-14ncqy5"&&(w.textContent=P),L=q(T),x=be(T,U),T.forEach(N),H=q(B),B.forEach(N),this.h()},h(){S(t,"class","svelte-1bb17g9"),S(a,"class","svelte-1bb17g9"),S(d,"class","svelte-1bb17g9"),S(_,"class","count svelte-1bb17g9"),S(e,"class","box svelte-1bb17g9")},m(Q,B){ee(Q,e,B),b(e,t),b(t,i),b(e,s),b(e,a),b(a,c),b(e,h),b(e,d),b(d,p),b(e,y),b(e,_),b(_,w),b(_,L),b(_,x),b(e,H)},p(Q,B){B&1&&r!==(r=Q[14].title+"")&&Fe(i,r),B&1&&l!==(l=Q[14].value+"")&&Fe(c,l),B&1&&g!==(g=Q[14].explain+"")&&Fe(p,g),B&1&&U!==(U=Q[14].count+"")&&Fe(x,U)},d(Q){Q&&N(e)}}}function Gy(n){let e,t,r,i,s,a="Main",l,c,h,d="모두",g,p,y="과학",_,w,P="일상",L,U,x,H="모두",Q,B,A="신조어",E,v,T="원단어",R,C,I,te,Z=ft(n[3](n[0])),ie=[];for(let Y=0;Y<Z.length;Y+=1)ie[Y]=Hc($c(n,Z,Y));return{c(){e=D("div"),t=D("div"),r=j(),i=D("div"),s=D("button"),s.textContent=a,l=j(),c=D("div"),h=D("button"),h.textContent=d,g=j(),p=D("button"),p.textContent=y,_=j(),w=D("button"),w.textContent=P,L=j(),U=D("div"),x=D("button"),x.textContent=H,Q=j(),B=D("button"),B.textContent=A,E=j(),v=D("button"),v.textContent=T,R=j(),C=D("div");for(let Y=0;Y<ie.length;Y+=1)ie[Y].c();this.h()},l(Y){e=V(Y,"DIV",{class:!0});var re=z(e);t=V(re,"DIV",{id:!0,class:!0}),z(t).forEach(N),r=q(re),i=V(re,"DIV",{class:!0});var ce=z(i);s=V(ce,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(s)!=="svelte-8azga8"&&(s.textContent=a),ce.forEach(N),l=q(re),c=V(re,"DIV",{class:!0});var he=z(c);h=V(he,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(h)!=="svelte-u6tz2q"&&(h.textContent=d),g=q(he),p=V(he,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(p)!=="svelte-196nohl"&&(p.textContent=y),_=q(he),w=V(he,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(w)!=="svelte-9dwnwx"&&(w.textContent=P),he.forEach(N),L=q(re),U=V(re,"DIV",{class:!0});var ae=z(U);x=V(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(x)!=="svelte-16kawoo"&&(x.textContent=H),Q=q(ae),B=V(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(B)!=="svelte-15k1gku"&&(B.textContent=A),E=q(ae),v=V(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(v)!=="svelte-1i5u5o6"&&(v.textContent=T),ae.forEach(N),R=q(re),C=V(re,"DIV",{class:!0});var Ee=z(C);for(let de=0;de<ie.length;de+=1)ie[de].l(Ee);Ee.forEach(N),re.forEach(N),this.h()},h(){S(t,"id","bb"),S(t,"class","svelte-1bb17g9"),S(s,"class","close-button svelte-1bb17g9"),S(i,"class","close-button_div svelte-1bb17g9"),S(h,"class","button svelte-1bb17g9"),He(h,"active",n[0]==="모두"),S(p,"class","button svelte-1bb17g9"),He(p,"active",n[0]==="과학"),S(w,"class","button svelte-1bb17g9"),He(w,"active",n[0]==="일상"),S(c,"class","filter-buttons svelte-1bb17g9"),S(x,"class","button svelte-1bb17g9"),He(x,"active",n[1]==="모두"),S(B,"class","button svelte-1bb17g9"),He(B,"active",n[1]==="신조어"),S(v,"class","button svelte-1bb17g9"),He(v,"active",n[1]==="원단어"),S(U,"class","filter-buttons svelte-1bb17g9"),S(C,"class","container svelte-1bb17g9"),S(e,"class","bbd svelte-1bb17g9")},m(Y,re){ee(Y,e,re),b(e,t),b(e,r),b(e,i),b(i,s),b(e,l),b(e,c),b(c,h),b(c,g),b(c,p),b(c,_),b(c,w),b(e,L),b(e,U),b(U,x),b(U,Q),b(U,B),b(U,E),b(U,v),b(e,R),b(e,C);for(let ce=0;ce<ie.length;ce+=1)ie[ce]&&ie[ce].m(C,null);I||(te=[W(s,"click",n[2]),W(h,"click",n[4]),W(p,"click",n[5]),W(w,"click",n[6]),W(x,"click",n[7]),W(B,"click",n[8]),W(v,"click",n[9])],I=!0)},p(Y,[re]){if(re&1&&He(h,"active",Y[0]==="모두"),re&1&&He(p,"active",Y[0]==="과학"),re&1&&He(w,"active",Y[0]==="일상"),re&2&&He(x,"active",Y[1]==="모두"),re&2&&He(B,"active",Y[1]==="신조어"),re&2&&He(v,"active",Y[1]==="원단어"),re&9){Z=ft(Y[3](Y[0]));let ce;for(ce=0;ce<Z.length;ce+=1){const he=$c(Y,Z,ce);ie[ce]?ie[ce].p(he,re):(ie[ce]=Hc(he),ie[ce].c(),ie[ce].m(C,null))}for(;ce<ie.length;ce+=1)ie[ce].d(1);ie.length=Z.length}},i:Te,o:Te,d(Y){Y&&N(e),Sn(ie,Y),I=!1,Ot(te)}}}function Wy(n,e,t){let r,i;dt(n,pe,P=>t(10,r=P)),dt(n,Mo,P=>t(11,i=P));let s=i,a="모두",l="모두";return[a,l,()=>{Re(pe,r=0,r)},P=>{if(P==="모두")return s;if(P==="과학")return s.filter(L=>L.tag1===0);if(P==="일상")return s.filter(L=>L.tag1===1)},()=>t(0,a="모두"),()=>t(0,a="과학"),()=>t(0,a="일상"),()=>t(1,l="모두"),()=>t(1,l="신조어"),()=>t(1,l="원단어")]}class Ky extends St{constructor(e){super(),Ct(this,e,Wy,Gy,Rt,{})}}function Gc(n){let e,t;return{c(){e=D("div"),t=Ae(n[4]),this.h()},l(r){e=V(r,"DIV",{class:!0});var i=z(e);t=be(i,n[4]),i.forEach(N),this.h()},h(){S(e,"class","error-message svelte-1ac2j0m")},m(r,i){ee(r,e,i),b(e,t)},p(r,i){i&16&&Fe(t,r[4])},d(r){r&&N(e)}}}function Qy(n){let e,t,r,i,s="신조어",a,l,c,h,d,g="신조어 뜻",p,y,_,w,P,L="신조어의 설명",U,x,H,Q,B,A,E,v,T,R="취소",C,I,te=n[4]&&Gc(n);return{c(){e=D("div"),t=D("div"),r=D("div"),i=D("label"),i.textContent=s,a=j(),l=D("input"),c=j(),h=D("div"),d=D("label"),d.textContent=g,p=j(),y=D("input"),_=j(),w=D("div"),P=D("label"),P.textContent=L,U=j(),x=D("input"),H=j(),te&&te.c(),Q=j(),B=D("div"),A=D("button"),E=Ae("보내기"),v=j(),T=D("button"),T.textContent=R,this.h()},l(Z){e=V(Z,"DIV",{class:!0});var ie=z(e);t=V(ie,"DIV",{class:!0});var Y=z(t);r=V(Y,"DIV",{class:!0});var re=z(r);i=V(re,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ne(i)!=="svelte-1xvfvjg"&&(i.textContent=s),a=q(re),l=V(re,"INPUT",{class:!0,type:!0,id:!0}),re.forEach(N),c=q(Y),h=V(Y,"DIV",{class:!0});var ce=z(h);d=V(ce,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ne(d)!=="svelte-1iv6t5o"&&(d.textContent=g),p=q(ce),y=V(ce,"INPUT",{class:!0,type:!0,id:!0}),ce.forEach(N),_=q(Y),w=V(Y,"DIV",{class:!0});var he=z(w);P=V(he,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ne(P)!=="svelte-lyiets"&&(P.textContent=L),U=q(he),x=V(he,"INPUT",{class:!0,type:!0,id:!0}),he.forEach(N),H=q(Y),te&&te.l(Y),Q=q(Y),B=V(Y,"DIV",{class:!0});var ae=z(B);A=V(ae,"BUTTON",{class:!0});var Ee=z(A);E=be(Ee,"보내기"),Ee.forEach(N),v=q(ae),T=V(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(T)!=="svelte-1fn0s3j"&&(T.textContent=R),ae.forEach(N),Y.forEach(N),ie.forEach(N),this.h()},h(){S(i,"class","form-label svelte-1ac2j0m"),S(i,"for","title"),S(l,"class","form-input svelte-1ac2j0m"),S(l,"type","text"),S(l,"id","title"),S(r,"class","form-group svelte-1ac2j0m"),S(d,"class","form-label svelte-1ac2j0m"),S(d,"for","value"),S(y,"class","form-input svelte-1ac2j0m"),S(y,"type","text"),S(y,"id","value"),S(h,"class","form-group svelte-1ac2j0m"),S(P,"class","form-label svelte-1ac2j0m"),S(P,"for","explain"),S(x,"class","form-input svelte-1ac2j0m"),S(x,"type","text"),S(x,"id","explain"),S(w,"class","form-group svelte-1ac2j0m"),S(A,"class","form-button svelte-1ac2j0m"),A.disabled=n[3],S(T,"class","form-button cancel-button svelte-1ac2j0m"),S(B,"class","form-buttons svelte-1ac2j0m"),S(t,"class","form-content svelte-1ac2j0m"),S(e,"class","form-container svelte-1ac2j0m")},m(Z,ie){ee(Z,e,ie),b(e,t),b(t,r),b(r,i),b(r,a),b(r,l),we(l,n[0]),b(t,c),b(t,h),b(h,d),b(h,p),b(h,y),we(y,n[1]),b(t,_),b(t,w),b(w,P),b(w,U),b(w,x),we(x,n[2]),b(t,H),te&&te.m(t,null),b(t,Q),b(t,B),b(B,A),b(A,E),b(B,v),b(B,T),C||(I=[W(l,"input",n[7]),W(y,"input",n[8]),W(x,"input",n[9]),W(A,"click",n[5]),W(T,"click",n[6])],C=!0)},p(Z,[ie]){ie&1&&l.value!==Z[0]&&we(l,Z[0]),ie&2&&y.value!==Z[1]&&we(y,Z[1]),ie&4&&x.value!==Z[2]&&we(x,Z[2]),Z[4]?te?te.p(Z,ie):(te=Gc(Z),te.c(),te.m(t,Q)):te&&(te.d(1),te=null),ie&8&&(A.disabled=Z[3])},i:Te,o:Te,d(Z){Z&&N(e),te&&te.d(),C=!1,Ot(I)}}}function Jy(n,e,t){let r;dt(n,pe,_=>t(10,r=_));let i="",s="",a="",l=!1,c="";const h=async()=>{if(!i||!s||!a){t(4,c="All fields are required!");return}t(3,l=!0),t(4,c="");try{if(!(await Vt(zt(gt(Be,"beta"),Fn("title","==",i)))).empty){t(4,c="Title already exists! Please choose a different title.");return}await Ls(gt(Be,"beta"),{title:i,value:s,explain:a,count:0}),t(0,i=""),t(1,s=""),t(2,a=""),Re(pe,r=0,r)}catch(_){console.error("Error adding document: ",_),t(4,c="Error adding document!")}finally{t(3,l=!1)}},d=()=>{t(0,i=""),t(1,s=""),t(2,a=""),t(4,c=""),Re(pe,r=0,r)};function g(){i=this.value,t(0,i)}function p(){s=this.value,t(1,s)}function y(){a=this.value,t(2,a)}return[i,s,a,l,c,h,d,g,p,y]}class Yy extends St{constructor(e){super(),Ct(this,e,Jy,Qy,Rt,{})}}function Wc(n,e,t){const r=n.slice();return r[11]=e[t],r[12]=e,r[13]=t,r}function Kc(n){let e,t,r,i,s,a,l,c,h,d,g,p="채택",y,_,w="삭제",P,L,U;function x(){n[4].call(t,n[12],n[13])}function H(){n[5].call(i,n[12],n[13])}function Q(){n[6].call(a,n[12],n[13])}function B(){n[7].call(c,n[12],n[13])}function A(){return n[8](n[11])}function E(){return n[9](n[11])}return{c(){e=D("div"),t=D("input"),r=j(),i=D("input"),s=j(),a=D("input"),l=j(),c=D("input"),h=j(),d=D("div"),g=D("button"),g.textContent=p,y=j(),_=D("button"),_.textContent=w,P=j(),this.h()},l(v){e=V(v,"DIV",{class:!0});var T=z(e);t=V(T,"INPUT",{type:!0,class:!0}),r=q(T),i=V(T,"INPUT",{type:!0,class:!0}),s=q(T),a=V(T,"INPUT",{type:!0,class:!0}),l=q(T),c=V(T,"INPUT",{type:!0,class:!0}),h=q(T),d=V(T,"DIV",{});var R=z(d);g=V(R,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(g)!=="svelte-14dxe7a"&&(g.textContent=p),y=q(R),_=V(R,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(_)!=="svelte-zdjrp5"&&(_.textContent=w),R.forEach(N),P=q(T),T.forEach(N),this.h()},h(){S(t,"type","text"),S(t,"class","svelte-52a7gl"),S(i,"type","text"),S(i,"class","svelte-52a7gl"),S(a,"type","text"),S(a,"class","svelte-52a7gl"),S(c,"type","number"),S(c,"class","svelte-52a7gl"),S(g,"class","accept-button svelte-52a7gl"),S(_,"class","delete-button svelte-52a7gl"),S(e,"class","item-box svelte-52a7gl")},m(v,T){ee(v,e,T),b(e,t),we(t,n[11].title),b(e,r),b(e,i),we(i,n[11].value),b(e,s),b(e,a),we(a,n[11].explain),b(e,l),b(e,c),we(c,n[11].count),b(e,h),b(e,d),b(d,g),b(d,y),b(d,_),b(e,P),L||(U=[W(t,"input",x),W(i,"input",H),W(a,"input",Q),W(c,"input",B),W(g,"click",A),W(_,"click",E)],L=!0)},p(v,T){n=v,T&1&&t.value!==n[11].title&&we(t,n[11].title),T&1&&i.value!==n[11].value&&we(i,n[11].value),T&1&&a.value!==n[11].explain&&we(a,n[11].explain),T&1&&lu(c.value)!==n[11].count&&we(c,n[11].count)},d(v){v&&N(e),L=!1,Ot(U)}}}function Xy(n){let e,t,r="Main",i,s,a,l,c=ft(n[0]),h=[];for(let d=0;d<c.length;d+=1)h[d]=Kc(Wc(n,c,d));return{c(){e=D("div"),t=D("button"),t.textContent=r,i=j(),s=D("div");for(let d=0;d<h.length;d+=1)h[d].c();this.h()},l(d){e=V(d,"DIV",{class:!0});var g=z(e);t=V(g,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(t)!=="svelte-8azga8"&&(t.textContent=r),g.forEach(N),i=q(d),s=V(d,"DIV",{class:!0});var p=z(s);for(let y=0;y<h.length;y+=1)h[y].l(p);p.forEach(N),this.h()},h(){S(t,"class","close-button svelte-52a7gl"),S(e,"class","close-button_div svelte-52a7gl"),S(s,"class","container svelte-52a7gl")},m(d,g){ee(d,e,g),b(e,t),ee(d,i,g),ee(d,s,g);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(s,null);a||(l=W(t,"click",n[3]),a=!0)},p(d,[g]){if(g&7){c=ft(d[0]);let p;for(p=0;p<c.length;p+=1){const y=Wc(d,c,p);h[p]?h[p].p(y,g):(h[p]=Kc(y),h[p].c(),h[p].m(s,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=c.length}},i:Te,o:Te,d(d){d&&(N(e),N(i),N(s)),Sn(h,d),a=!1,l()}}}function Zy(n,e,t){let r;dt(n,pe,_=>t(10,r=_));let i=[];Rn(async()=>{const _=await Vt(gt(Be,"beta"));t(0,i=_.docs.map(w=>({id:w.id,...w.data()})))});const s=async(_,w,P,L,U)=>{try{await Ls(gt(Be,"datas"),{title:w,value:P,explain:L,count:U}),await ds(Gn(Be,"beta",_)),console.log("Document successfully written and deleted!"),t(0,i=i.filter(x=>x.id!==_))}catch(x){console.error("Error adding or deleting document: ",x)}},a=async _=>{try{await ds(Gn(Be,"beta",_)),console.log("Document successfully deleted!"),t(0,i=i.filter(w=>w.id!==_))}catch(w){console.error("Error deleting document: ",w)}},l=()=>{Re(pe,r=0,r)};function c(_,w){_[w].title=this.value,t(0,i)}function h(_,w){_[w].value=this.value,t(0,i)}function d(_,w){_[w].explain=this.value,t(0,i)}function g(_,w){_[w].count=lu(this.value),t(0,i)}return[i,s,a,l,c,h,d,g,_=>s(_.id,_.title,_.value,_.explain,_.count),_=>a(_.id)]}class eE extends St{constructor(e){super(),Ct(this,e,Zy,Xy,Rt,{})}}function tE(n){let e,t,r="Main",i,s,a,l,c,h,d,g="삭제",p,y;return{c(){e=D("div"),t=D("button"),t.textContent=r,i=j(),s=D("main"),a=D("div"),l=D("input"),c=j(),h=D("div"),d=D("button"),d.textContent=g,this.h()},l(_){e=V(_,"DIV",{class:!0});var w=z(e);t=V(w,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(t)!=="svelte-8azga8"&&(t.textContent=r),w.forEach(N),i=q(_),s=V(_,"MAIN",{class:!0});var P=z(s);a=V(P,"DIV",{style:!0});var L=z(a);l=V(L,"INPUT",{type:!0,placeholder:!0,style:!0,class:!0}),c=q(L),h=V(L,"DIV",{style:!0});var U=z(h);d=V(U,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),ne(d)!=="svelte-1w89kx2"&&(d.textContent=g),U.forEach(N),L.forEach(N),P.forEach(N),this.h()},h(){S(t,"class","close-button svelte-mo15yd"),S(e,"class","close-button_div svelte-mo15yd"),S(l,"type","text"),S(l,"placeholder","Title 입력"),Ue(l,"width","300px"),Ue(l,"padding","10px"),Ue(l,"font-size","16px"),S(l,"class","svelte-mo15yd"),Ue(d,"padding","10px 20px"),Ue(d,"font-size","16px"),S(d,"class","svelte-mo15yd"),Ue(h,"margin-top","20px"),Ue(a,"text-align","center"),Ue(a,"margin-top","50px"),S(s,"class","svelte-mo15yd")},m(_,w){ee(_,e,w),b(e,t),ee(_,i,w),ee(_,s,w),b(s,a),b(a,l),we(l,n[0]),b(a,c),b(a,h),b(h,d),p||(y=[W(t,"click",n[2]),W(l,"input",n[3]),W(d,"click",n[1])],p=!0)},p(_,[w]){w&1&&l.value!==_[0]&&we(l,_[0])},i:Te,o:Te,d(_){_&&(N(e),N(i),N(s)),p=!1,Ot(y)}}}function nE(n,e,t){let r;dt(n,pe,c=>t(4,r=c));let i="";async function s(){if(!i.trim()){alert("Please enter a search term");return}try{const c=zt(gt(Be,"datas"),Fn("title","==",i)),h=await Vt(c),d=[];h.forEach(g=>{d.push(ds(Gn(Be,"datas",g.id)))}),await Promise.all(d),alert("값이 삭제됨"),t(0,i="")}catch(c){console.error("Error deleting documents: ",c),alert("Error deleting documents")}}const a=()=>{Re(pe,r=0,r)};function l(){i=this.value,t(0,i)}return[i,s,a,l]}class rE extends St{constructor(e){super(),Ct(this,e,nE,tE,Rt,{})}}function Qc(n){let e,t;return{c(){e=D("div"),t=Ae(n[1]),this.h()},l(r){e=V(r,"DIV",{class:!0});var i=z(e);t=be(i,n[1]),i.forEach(N),this.h()},h(){S(e,"class","error svelte-bs8ckl")},m(r,i){ee(r,e,i),b(e,t)},p(r,i){i&2&&Fe(t,r[1])},d(r){r&&N(e)}}}function iE(n){let e,t,r,i="홈",s,a,l,c,h="전송",d,g,p,y=n[1]&&Qc(n);return{c(){e=D("div"),t=D("div"),r=D("button"),r.textContent=i,s=j(),a=D("input"),l=j(),c=D("button"),c.textContent=h,d=j(),y&&y.c(),this.h()},l(_){e=V(_,"DIV",{class:!0});var w=z(e);t=V(w,"DIV",{class:!0});var P=z(t);r=V(P,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(r)!=="svelte-oxv20b"&&(r.textContent=i),P.forEach(N),s=q(w),a=V(w,"INPUT",{type:!0,placeholder:!0,class:!0}),l=q(w),c=V(w,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(c)!=="svelte-1sfb7u5"&&(c.textContent=h),d=q(w),y&&y.l(w),w.forEach(N),this.h()},h(){S(r,"class","close-button svelte-bs8ckl"),S(t,"class","close-button_div svelte-bs8ckl"),S(a,"type","text"),S(a,"placeholder","신고내용 입력 (50자 까지)"),S(a,"class","svelte-bs8ckl"),S(c,"class","svelte-bs8ckl"),S(e,"class","container svelte-bs8ckl")},m(_,w){ee(_,e,w),b(e,t),b(t,r),b(e,s),b(e,a),we(a,n[0]),b(e,l),b(e,c),b(e,d),y&&y.m(e,null),g||(p=[W(r,"click",n[3]),W(a,"input",n[4]),W(c,"click",n[2])],g=!0)},p(_,[w]){w&1&&a.value!==_[0]&&we(a,_[0]),_[1]?y?y.p(_,w):(y=Qc(_),y.c(),y.m(e,null)):y&&(y.d(1),y=null)},i:Te,o:Te,d(_){_&&N(e),y&&y.d(),g=!1,Ot(p)}}}function sE(n,e,t){let r;dt(n,pe,h=>t(6,r=h));let i="",s="";Rn(()=>{const h=ns();Qo(h,d=>{d&&d.email})});const a=async()=>{if(i.length>50){t(1,s="50자를 넘지 말아주세요");return}const d=ns().currentUser;if(!d){t(1,s="내용을 적어주세요");return}try{await Ls(gt(Be,"report"),{user:d.email,contents:i}),t(0,i=""),t(1,s="")}catch(g){t(1,s="Error adding document: "+g.message)}},l=()=>{Re(pe,r=0,r)};function c(){i=this.value,t(0,i)}return[i,s,a,l,c]}class oE extends St{constructor(e){super(),Ct(this,e,sE,iE,Rt,{})}}function Jc(n,e,t){const r=n.slice();return r[8]=e[t],r[9]=e,r[10]=t,r}function Yc(n){let e,t,r,i,s,a,l="삭제",c,h,d;function g(){n[3].call(t,n[9],n[10])}function p(){n[4].call(i,n[9],n[10])}function y(){return n[5](n[8])}return{c(){e=D("div"),t=D("input"),r=j(),i=D("input"),s=j(),a=D("button"),a.textContent=l,c=j(),this.h()},l(_){e=V(_,"DIV",{class:!0});var w=z(e);t=V(w,"INPUT",{type:!0,class:!0}),r=q(w),i=V(w,"INPUT",{type:!0,class:!0}),s=q(w),a=V(w,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(a)!=="svelte-1i7wviu"&&(a.textContent=l),c=q(w),w.forEach(N),this.h()},h(){S(t,"type","text"),t.readOnly=!0,S(t,"class","svelte-1evkr3z"),S(i,"type","text"),i.readOnly=!0,S(i,"class","svelte-1evkr3z"),S(a,"class","svelte-1evkr3z"),S(e,"class","item-box svelte-1evkr3z")},m(_,w){ee(_,e,w),b(e,t),we(t,n[8].user),b(e,r),b(e,i),we(i,n[8].contents),b(e,s),b(e,a),b(e,c),h||(d=[W(t,"input",g),W(i,"input",p),W(a,"click",y)],h=!0)},p(_,w){n=_,w&1&&t.value!==n[8].user&&we(t,n[8].user),w&1&&i.value!==n[8].contents&&we(i,n[8].contents)},d(_){_&&N(e),h=!1,Ot(d)}}}function aE(n){let e,t,r="Main",i,s,a,l,c=ft(n[0]),h=[];for(let d=0;d<c.length;d+=1)h[d]=Yc(Jc(n,c,d));return{c(){e=D("div"),t=D("button"),t.textContent=r,i=j(),s=D("div");for(let d=0;d<h.length;d+=1)h[d].c();this.h()},l(d){e=V(d,"DIV",{class:!0});var g=z(e);t=V(g,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(t)!=="svelte-8azga8"&&(t.textContent=r),g.forEach(N),i=q(d),s=V(d,"DIV",{class:!0});var p=z(s);for(let y=0;y<h.length;y+=1)h[y].l(p);p.forEach(N),this.h()},h(){S(t,"class","close-button svelte-1evkr3z"),S(e,"class","close-button_div svelte-1evkr3z"),S(s,"class","container svelte-1evkr3z")},m(d,g){ee(d,e,g),b(e,t),ee(d,i,g),ee(d,s,g);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(s,null);a||(l=W(t,"click",n[2]),a=!0)},p(d,[g]){if(g&3){c=ft(d[0]);let p;for(p=0;p<c.length;p+=1){const y=Jc(d,c,p);h[p]?h[p].p(y,g):(h[p]=Yc(y),h[p].c(),h[p].m(s,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=c.length}},i:Te,o:Te,d(d){d&&(N(e),N(i),N(s)),Sn(h,d),a=!1,l()}}}function lE(n,e,t){let r;dt(n,pe,g=>t(6,r=g));let i=[];Rn(async()=>{await s()});async function s(){const g=await Vt(gt(Be,"report"));t(0,i=g.docs.map(p=>({id:p.id,...p.data()})))}async function a(g){try{console.log(`Attempting to delete documents with title: ${g}`);const p=zt(gt(Be,"report"),Fn("contents","==",g)),y=await Vt(p);if(y.empty){console.log("No matching documents found"),alert("No matching documents found");return}const _=[];y.forEach(w=>{console.log(`Deleting document with ID: ${w.id}`),_.push(ds(Gn(Be,"report",w.id)))}),await Promise.all(_),alert("값이 삭제됨"),await s()}catch(p){console.error("Error deleting documents: ",p),alert("Error deleting documents")}}const l=()=>{Re(pe,r=0,r)};function c(g,p){g[p].user=this.value,t(0,i)}function h(g,p){g[p].contents=this.value,t(0,i)}return[i,a,l,c,h,g=>a(g.contents)]}class cE extends St{constructor(e){super(),Ct(this,e,lE,aE,Rt,{})}}function Xc(n,e,t){const r=n.slice();return r[11]=e[t],r}function Zc(n){let e,t,r=n[11].title+"",i,s,a,l=n[11].value+"",c,h,d,g=n[11].explain+"",p,y,_,w,P=n[11].count+"",L;return{c(){e=D("div"),t=D("div"),i=Ae(r),s=j(),a=D("div"),c=Ae(l),h=j(),d=D("div"),p=Ae(g),y=j(),_=D("div"),w=Ae("Count: "),L=Ae(P),this.h()},l(U){e=V(U,"DIV",{class:!0});var x=z(e);t=V(x,"DIV",{class:!0});var H=z(t);i=be(H,r),H.forEach(N),s=q(x),a=V(x,"DIV",{class:!0});var Q=z(a);c=be(Q,l),Q.forEach(N),h=q(x),d=V(x,"DIV",{class:!0});var B=z(d);p=be(B,g),B.forEach(N),y=q(x),_=V(x,"DIV",{class:!0});var A=z(_);w=be(A,"Count: "),L=be(A,P),A.forEach(N),x.forEach(N),this.h()},h(){S(t,"class","title svelte-1qmdyd6"),S(a,"class","value svelte-1qmdyd6"),S(d,"class","explain svelte-1qmdyd6"),S(_,"class","count svelte-1qmdyd6"),S(e,"class","box svelte-1qmdyd6")},m(U,x){ee(U,e,x),b(e,t),b(t,i),b(e,s),b(e,a),b(a,c),b(e,h),b(e,d),b(d,p),b(e,y),b(e,_),b(_,w),b(_,L)},p(U,x){x&1&&r!==(r=U[11].title+"")&&Fe(i,r),x&1&&l!==(l=U[11].value+"")&&Fe(c,l),x&1&&g!==(g=U[11].explain+"")&&Fe(p,g),x&1&&P!==(P=U[11].count+"")&&Fe(L,P)},d(U){U&&N(e)}}}function eu(n){let e,t,r="더 불러오기",i,s;return{c(){e=D("div"),t=D("button"),t.textContent=r,this.h()},l(a){e=V(a,"DIV",{class:!0});var l=z(e);t=V(l,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(t)!=="svelte-1bu3r2x"&&(t.textContent=r),l.forEach(N),this.h()},h(){S(t,"class","svelte-1qmdyd6"),S(e,"class","button-container svelte-1qmdyd6")},m(a,l){ee(a,e,l),b(e,t),i||(s=W(t,"click",n[4]),i=!0)},p:Te,d(a){a&&N(e),i=!1,s()}}}function uE(n){let e,t,r="홈",i,s,a,l,c,h=ft(n[0]),d=[];for(let p=0;p<h.length;p+=1)d[p]=Zc(Xc(n,h,p));let g=!n[1]&&eu(n);return{c(){e=D("div"),t=D("button"),t.textContent=r,i=j(),s=D("main");for(let p=0;p<d.length;p+=1)d[p].c();a=j(),g&&g.c(),this.h()},l(p){e=V(p,"DIV",{class:!0});var y=z(e);t=V(y,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(t)!=="svelte-oxv20b"&&(t.textContent=r),y.forEach(N),i=q(p),s=V(p,"MAIN",{class:!0});var _=z(s);for(let w=0;w<d.length;w+=1)d[w].l(_);a=q(_),g&&g.l(_),_.forEach(N),this.h()},h(){S(t,"class","close-button svelte-1qmdyd6"),S(e,"class","close-button_div svelte-1qmdyd6"),S(s,"class","svelte-1qmdyd6")},m(p,y){ee(p,e,y),b(e,t),ee(p,i,y),ee(p,s,y);for(let _=0;_<d.length;_+=1)d[_]&&d[_].m(s,null);b(s,a),g&&g.m(s,null),l||(c=W(t,"click",n[3]),l=!0)},p(p,[y]){if(y&1){h=ft(p[0]);let _;for(_=0;_<h.length;_+=1){const w=Xc(p,h,_);d[_]?d[_].p(w,y):(d[_]=Zc(w),d[_].c(),d[_].m(s,a))}for(;_<d.length;_+=1)d[_].d(1);d.length=h.length}p[1]?g&&(g.d(1),g=null):g?g.p(p,y):(g=eu(p),g.c(),g.m(s,null))},i:Te,o:Te,d(p){p&&(N(e),N(i),N(s)),Sn(d,p),g&&g.d(),l=!1,c()}}}function hE(n,e,t){let r;dt(n,pe,p=>t(8,r=p));let i=[],s=[],a=null,l=!1;const c=async(p=!1)=>{if(l)return;const y=gt(Be,"datas");let _;p&&a?_=zt(y,hs("count","desc"),Cy(a),xo(100)):_=zt(y,hs("count","desc"),xo(100));const w=await Vt(_),P=w.docs.map(U=>U.data()),L=p?[...i,...P]:P;i=Array.from(new Set(L.map(U=>JSON.stringify(U)))).map(U=>JSON.parse(U)),h(),a=w.docs[w.docs.length-1],localStorage.setItem("datas",JSON.stringify(i)),localStorage.setItem("lastVisible",JSON.stringify(a)),P.length<100&&(t(1,l=!0),localStorage.setItem("allDataLoaded","true"))},h=()=>{t(0,s=[]),t(0,s=i)};return Rn(()=>{const p=localStorage.getItem("datas"),y=localStorage.getItem("lastVisible"),_=localStorage.getItem("allDataLoaded");p&&(i=JSON.parse(p),h()),y&&(a=JSON.parse(y)),_&&t(1,l=_==="true"),p||c()}),[s,l,c,()=>{Re(pe,r=0,r)},()=>c(!0)]}class dE extends St{constructor(e){super(),Ct(this,e,hE,uE,Rt,{})}}const Ui=[{title:"급못타",value:"급식들은 못깨는 타워의 줄임말.",explain:"로블록스라는 게임의 타워맵 중에서 급식이들(특히 중,고등학생들을 의미함)은 게임 실력이 부족해 깰 수 없는 타워를 의미한다."},{title:"G37",value:"YFIF",explain:"BGW"},{title:"가나",value:"다라",explain:"마바"},{title:"흑우",value:"호구를 달리 표현한 말.",explain:"친구들 간에서도 사용되지만, 특히 주식에서 높은 값에 종목을 샀다가 가격이 내려갔을 때 어쩔 수 없이 파는 사람들을 의미한다.   Ex) 나 이번에 큰돈 주고 이거 샀는데 좀 있으니까 가격이 내려갔어... 나 흑우짓 했네.."},{title:"우젤착",value:"우주에서 제일 착함",explain:" "},{title:"트민녀",value:"트랜드에 민감한 여자",explain:"‘트랜드에 민감한 여자’ 의 줄임말로, 트랜드를 따라가는 사람(여자)를 말합니다."},{title:"요즘남편 없던 아빠",value:" ",explain:"맞벌이 부부가 일상화되고 가사 노동 분담이 당연해지는 상황에서, 아내의 소득이 높다면 가장의 역할을 넘기고 내조하는 남편을 의미하는 말입니다."},{title:"오운완",value:"오늘 운동 완료",explain:"‘오늘 운동 완료’의 줄임말로, 오늘 자신이 세운 운동목표량을 완료하였다는 뜻입니다."},{title:"랜선여친",value:"온라인 여자친구",explain:"온라인으로 만난 여자친구를 의미한다. 예) 난 오늘 게임에서 랜선여친을 만들었다"},{title:"팬아저",value:"팬이 아니어도 저장",explain:"특정 연예인의 팬이 아니더라도 그 사람이 너무 매력적이거나 멋있어서 사진이나 영상을 저장한다는 의미이다. 예) 카리나를 보고 팬아저 했어"},{title:"긁",value:"긁히다, 친구의 비난 또는 장난에 자존심이 긁힌 상황",explain:"긁?"},{title:"KIJUL",value:"'기절'을 영어로 훈음한것.",explain:"'너무 힘들다. KIJUL 할것같아.'"},{title:"저메추",value:"저녁 메뉴 추천",explain:"‘저녁 메뉴 추천’ 의 줄임말로 저녁 식사 매뉴를 추천해달라는 뜻입니다."},{title:"핑프",value:"핑거 프린세스의 줄임말.",explain:"손가락만 사용하면 찾을 수 있는 정보를 찾지 않고 다른 사람에게 물어보는 사람을 일컫는 말 Ex) 너 핑프냐? 제발 나한테 물어보지 말고 좀 검색해.."},{title:"낄끼빠빠",value:"낄땐 끼고 빠질 땐 빠진다의 줄임말.",explain:"어떤 상황에서는 참여하고, 또 어떤 상황에서는 빠져야 한다는 것을 강조하는데 상황에 맞게 행동하라는 의미 예) 너 이런 상황에서는 좀 낄끼빠빠 해"},{title:"먹방",value:"먹는 방송",explain:"음식을 먹는 모습을 촬영하여 방송하는 콘텐츠를 의미한다. 예) 이번에 유튜브 컨텐츠로 먹방을 할거야"},{title:"DB",value:"담배라는 뜻",explain:"DamBae의 한국어 음절 첫 알파벳 철자를 따서 지었다."},{title:"페미",value:"페미니스트",explain:"성별에 따른 차별을 없애고, 사회적, 정치적, 경제적 평등을 이루기 위한 운동이나 사상을 지지하는 사람들 예)난 페미스트로서 여성 차별 반대 시위를 할거야"},{title:"럭키비키",value:"여자아이돌 아이브의 멤버 장원영이 사용하는 긍정표현",explain:"이거 완전 럭키비키잖아"},{title:"이끼끼끼",value:"가짜입니다",explain:"테스트"},{title:"수포자",value:"수학을 포기한 자의 줄임말.",explain:"수학을 너무 어려워하여 수학을 포기하고 다른 과목에만 매진하는 사람을 일컫는 말. Ex) 나 오늘부터 수포자 할게.."},{title:"스몸비",value:"스마트폰+좀비의 합성어",explain:"보통 현대인의 과도한 휴대폰 사용을 비꼬는 말이다. Ex) 최근 길거리에 스몸비가 점점 늘어나고 있다."},{title:"셀카",value:"셀프 카메라",explain:"자신이 스스로 핸드폰이나 카메라를 이용하여 자신을 찍는 것을 의미한다. 예) 나 오늘 셀카 좀 잘 찍히는 것 같아"},{title:"테스트",value:"값",explain:"설명"},{title:"노알라",value:"노무현+코알라의 줄임말.",explain:"귀엽다"},{title:"디엠",value:"다이렉트 메시지(direct message)의 줄임말.",explain:"인스타그램의 메시지 기능을 의미한다. Ex) 디엠 좀 보라고.."},{title:"응디",value:"엉덩이의 줄임말",explain:"  "},{title:"혼코노",value:"혼자서 코인 노래방",explain:"코인노래방을 혼자가서 즐기는 것을 의미한다. 예) 나 오늘은 혼코노 할 거야"},{title:"Liquidpolitan",value:"Liqud(액체)+Politan(시민)",explain:"‘액체’와 ‘시민’의 합성어로, 공간적인 지역 개념을 넘어 유연하게 변화하는 시민을 의미합니다."},{title:"한남",value:"한국 남자",explain:" "},{title:"돼지런하다",value:"돼지+부지런하다",explain:"'돼지'와 '부지런하다'를 합친말로, 평소에는 느리지만 먹을때만 부지런한 사람을 일컫는 말."},{title:"잼못타",value:"잼민이들은 못깨는 타워의 줄임말",explain:"로블록스라는 게임의 타워맵 중에서 잼민이들(특히 초등학생을 말함)은 게임 실력이 부족해 깰 수 없는 타워를 의미한다. "},{title:"학종",value:"학생종합생활기록",explain:" "},{title:"좋구알",value:"좋아요,구독,알림설정",explain:"유튜브나 인스타 릴스에서 본인 영상이나 컨텐츠에 좋아요와 구독 알림설정을 해달라는 의미  예)영상을 즐기셨다면 좋구알 해주세요!"},{title:"아싸",value:"아웃사이더",explain:"특정 그룹이나 사회에서 외곽에 있거나 고립된 사람을 의미한다. 예) 쟤는 친구도 없고 혼자 다니는걸 보니 아싸인가봐"},{title:"뭘니써",value:"뭘봐 니 할일이나 신경써",explain:" "},{title:"랜선남친",value:"온라인 남자친구",explain:"온라인으로 만난 남자친구를 의미한다. 예) 난 오늘 인터넷 커뮤니티에서 랜선남친을 만들었다"},{title:"빤쓰런",value:"빤쓰(팬티) + 런(뛰다)",explain:"어떤 상황에서든 빨리 도망치거나 회피하는 행동을 묘사할 때 사용된다. 예) 강아지가 쫒아온다 빤스런해~~"},{title:"솔까",value:"솔직히 까놓고 말해서",explain:"직설적으로 말할 때나 사실대로 말할 때 사용됨 예) 솔까 내가 좋아하는 사람이 너무 많아"},{title:"마상",value:"'마음의 상처' 의 줄임말 ",explain:"'나 마상 받았어'"},{title:"당모치",value:"당연히 모든 치킨은 옳다의 줄임말.",explain:"한국에서 치킨은 거의 치느님(치킨+하느님) 수준으로 신격화되어 불리는데, 특히 치킨을 사랑하는 사람들이 자주 사용하곤 한다."},{title:"버카충",value:"버스 카드 충전의 줄임말",explain:"청소년들 사이에선 잘 사용되지 않지만 그럼에도 대표적인 신조어 중 하나로 꼽힌다. Ex) A:야 너 갑자기 어디가냐  B:버카충 하고 옴 ㄱㄷ(기달)"},{title:"제당슈만",value:"제가 당신을 슈퍼스타로 만들어드릴게요 라는 뜻",explain:"일본 애니메이션인 [아이들리쉬 세븐]의 이즈미 이오리 라는 캐릭터의 대사이다. 아이돌을 좋아하는 팬들 사이에서 팬심을 표현하는 말로 자주 사용된다."},{title:"스핀 오프 프로젝트",value:" ",explain:"콘텐츠 산업에서 원작에서 파생된 작품을 의미하는 '스핀 오프' 개념이 다양한 영역으로 확대된 것을 뜻합니다."},{title:"인구론",value:"인문계 졸업자 90%가 논다",explain:" "},{title:"좋댓구알",value:"좋아요 댓글 구독 알림설정의 줄임말.",explain:"유튜브 시청자라면 알아야 할 4가지 요소로, 보통 크리에이터나 유튜버들이 많이 사용하고 요청한다,  Ex) 좋댓구알 부탁드려요!!!"},{title:"기니피그",value:"쥐",explain:"아닌가"},{title:"여가부",value:"여성가족부의 줄임말.",explain:"윤석열 정권이 폐지하겠다고 하였으나 시행하지 않고 있다. 양성평등을 위해 일하고 있지만 실제로는 성별 간의 갈등만을 일으킬 뿐이다."},{title:"남미새",value:"'남자에 미친 새끼'의 줄임말.",explain:"남자를 극히 밝히는 사람, 특히 여자들을 일컫는 말이다. Ex) 저는 남미새는 걸러요..ㅎㅎ"},{title:"짜친다",value:" ",explain:"‘모자라다,쪼들리다’ 라는 뜻입니다. 예)내 월급으로 한달 생활하기에는 짜친다."},{title:"많관부",value:"많은 관심 부탁드립니다의 줄임말",explain:"보통 홍보를 하거나 다른 이들에게 특정한 것을 관심받기 위해 자주 사용한다. "},{title:"갑분싸",value:"갑자기 분위기 싸해짐",explain:"예상치 못한 발언이나 행동으로 인해 주변 분위기가 갑자기 어색하거나 냉랭해지는 상황. 예) 너가 한 말 때문에 갑분싸 됬어"},{title:"이끾끼 (ㅇ )",value:"ㄴ",explain:"ㄴ"},{title:"맛도리",value:'맛있는 음식을 칭찬하거나 강조할 때 사용하는 말입니다. 이 단어는 "맛"과 "도리"의 합성어로, 여기서 "도리"는 "최고"나 "최상"을 의미하는 속어에서 유래했습니다.',explain:"오늘 점심 맛도리다"},{title:"중꺽마",value:"중요한 것은 꺽이지 않는 마음이다",explain:'"이번 시험에서 좋은 성적을 못 받았지만, 중꺽마! 끝까지 포기하지 않고 다음번에는 더 열심히 할 거야."'},{title:"닥공",value:"닥치고 공부해",explain:" "},{title:"깜놀",value:"깜짝놀라",explain:"갑작스러운 상황이나 예상치 못한 사건에 놀랐음을 의미한다. 예) 너가 갑자기 튀어나와서 나 깜놀 했잖아"},{title:"이끾끼",value:"이끾끼",explain:"가나다라마바사아자차카타파하"},{title:"리중딱",value:"리버풀은 중위권이 딱이야의 줄임말",explain:"잉글랜드 프리미어리그(EPL)의 명문 축구 클럽인 리버풀이 부진할 때 비꼬는 말로 사용된다. Ex) A: 아 이번에 리버풀 또 졌네...   B: 응 리중딱 리중딱~"},{title:"롬곡옾눞",value:"'폭풍눈물'을 뒤집은 말.",explain:"보통 말로 표현하지는 않고, 인터넷과 SNS상에서 많이 사용된다."},{title:"심쿵",value:"어떤 일이나 대상을 보고 심장이 쿵 하고 뛸 정도로 놀라거나 설레다.",explain:"Ex) 걔가 나 챙겨줬어... 나 너무 심쿵했자나 >_<"},{title:"가",value:"나",explain:"다"},{title:"김치녀",value:"돈을 밝히는 여자 또는 자신의 애인 기준이 너무 높거나 당연히 남자가 하는 일이지 하면서 편협한 사고를 가진 한국 여자를 의미함",explain:" "},{title:"아아",value:"아이스 아메리카노의 줄임말.",explain:" "},{title:"사바사",value:"사람 by(바이) 사람",explain:"각자의 특성이나 상황에 따라 다르다는 의미를 강조하는 표현 예)음식의 취향은 사바사라 강요 하면 안돼"},{title:"스불재",value:"스스로 불러온 재앙",explain:"시험이나 프로젝트 등을 할 때 노력하지 않아 결과가 좋지 않을 때 사용하는 말 예) 이번 시험에 떨어진 것은 내 스불재였다"},{title:"슬세권",value:"슬리퍼로 갈 수 있는 거리",explain:" "},{title:"알잘딱깔센",value:"알아서 잘 딱 깔끔하고 센스있게",explain:"눈치 없는 사람들에게 눈치가 있게 행동하라는 의미로 대개 사용됨"},{title:"뇌섹남",value:"뇌가 섹시한 남자",explain:"주로 지적이고 매력적인 남성을 의미한다. 예) 얼굴도 잘생겼는데 공부도 잘하는 걸 보니 뇌섹남이다"},{title:"꾸안꾸",value:"꾸민 듯 안 꾸민 듯",explain:"매우 세밀하게 꾸민 듯하지만 동시에 그렇게 보이지 않도록 손질한 스타일을 가리킨다. 다소 부실하거나 복잡해 보이지 않으면서도 실은 많은 노력을 기울여 완성된 느낌을 주는 모습을 말한다. 예)나 오늘 누구 만나러 갈 때 꾸안꾸 스타일로 입고 갈거야"},{title:"정윤서",value:"신한사의 개발자 중 한명.",explain:"2024학년도 선덕고 1학년 11반 27번이다. 피파 최대 티어가 프로1이다."},{title:"핵인싸",value:"인싸에 강조하는 의미에 신조어 핵을 붙인 말",explain:"매우 사교적이고 활동적인 사람을 의미한다. 예) 쟤는 매주 파티를 가는 걸 보니 핵인싸다"},{title:"조삼모사",value:"조금 모르면 삼번 아예 모르면 사번 이라는 뜻",explain:"기존 뜻과 다르게 혹독한 교육과정을 밟는 학생들이 시험 공부를 안해 문제를 풀지 못할 때 사용하는 전략 중 하나이다. Ex) A: 야 이번에 몇번으로 찍을까?  B: 조삼모사 알잖아 ㅋㅋ"},{title:"이왜진",value:"이게 왜 진짜야?",explain:"이왜진?"},{title:"재미뿌",value:"재미를 뿌셨다",explain:"‘재미를 부(뿌)셨다’ 의 줄임말로 재미가 없는 상황을 뜻합니다."},{title:"강동규",value:"이끾끼",explain:"리듀슈"},{title:"리퀴드폴리탄",value:"액체(Liquid)+시민(Politan)",explain:"‘액체’와 ‘시민’의 합성어로, 공간적인 지역 개념을 넘어 유연하게 변화하는 시민을 의미합니다."},{title:"현타",value:"현실 자각 타임",explain:" 자신이 처한 현실을 갑자기 깨닫게 되는 순간을 의미한다. 예) 오늘 시험보고 내 인생에서 현타 왔어"},{title:"디토 소비",value:"디토(Ditto) 소비(Consumption)",explain:"'제대로 된 구매 결정 과정을 생략하고 특정 사람, 콘텐츠, 커머스를 따라 구매하는 트렌드'를 가리키는 말입니다."},{title:"은주",value:"친구 엄마 이름을 부르는 데에서 유래한 말. ",explain:"원래는 특정 인물한테만 사용하는 말이었으나 점차 상용화되면서 부모님 특히 엄마를 통칭하는 말이 되었다. Ex) 어어 은주"},{title:"드립",value:"애드립의 줄임말",explain:"즉흥적으로 던지는 재치 있는 말이나 농담을 의미한다. 예) 너 드립 좀 재밌다?"},{title:"내또출",value:"내일 또 출근의 줄임말",explain:"바쁘게 살아가는 현대 직장인들이 주로 사용하는 단어이다. Ex) A: 내일 뭐함?  B: 내또출이요~ "},{title:"짜치다",value:" ",explain:"’(물건 등이)기대에 못미치고 별로다.‘ 라는 뜻입니다. 예)이 카페는 건물 내부만 예쁘고 커피 맛이 짜치다."},{title:"값",value:"뜻",explain:"설명"},{title:"t1",value:"t2",explain:"t3"},{title:"재기하다",value:"극단적 선택(자살)을 하다라는 뜻의 신조어",explain:"전 남성연대 대표 성재기의 성재기 한강 투신사건에서 여성들이 한국 남자들에게 성재기처럼 자살해라 라는 의미로 사용된다."},{title:"시츄에이션십",value:"영어 Situationship을 한국식 발음으로 부르는 말",explain:"정식으로 정의되지 않은, 모호한 로맨틱 또는 성적인 관계를 나타내는 말로, 썸(something)과는 뉘앙스 자체가 다르다."},{title:"당발 ",value:"당첨자 발표",explain:" "},{title:"은반",value:"은근슬쩍 반말의 줄임말",explain:"상대의 동의를 구하지 않고 자연스럽게 말을 놓을 때 사용하는 말이다. Ex) 너 요즘 자꾸 은반한다? "},{title:"읽씹",value:"읽고 씹는다의 줄임말",explain:"주로 SNS 상에서 메시지를 받은 사람이 상대방의 메시지를 보기만 하고 아무 답장도 해주지 않았을 때 사용한다.  Ex) 너 왜 자꾸 내 말 읽씹해??"},{title:"어둠의마왕강당근",value:"당근심부름",explain:"당근심부름"},{title:"기기창",value:"기기창",explain:"기기창"},{title:"욜로족",value:"You Only Live Once의 줄임말",explain:"어차피 한번 사는 인생 내 마음대로 살아보자 라는 생각을 가진 사람들을 의미함."},{title:"단짠",value:"단맛+짠맛, 달고 짠 맛",explain:"아이스크림과 감자튀김을 같이 먹으면 최고의 단짠 조합이다"},{title:"700",value:"귀여워를 나타내는 말",explain:"귀여워의 초성인 'ㄱㅇㅇ'를 숫자로 나타낸 표현이다."},{title:"트리녀",value:"트랜드를 리드하는 여자",explain:"’트랜드를 리드하는 여자‘ 의 줄임말로, 트랜드를 리드하는 사람(여자)을 뜻합니다."},{title:"니거",value:"흑인을 일컫는 말",explain:"보통 피부가 까만 사람을 놀릴 때 흑인들끼리 쓰는 별칭인 '니거(nigger)'를 사용한다. Ex) 아 오늘 땡볕에 축구했더니 팔이 니거가 됐다.."},{title:"나포츠족",value:"나이트(Night)+스포츠(Sports)",explain:"밤을 뜻하는 ‘나이트(Night)'와 운동을 뜻하는 스포츠(Sports)의 합성어로 밤에 운동하는 사람들을 뜻합니다."},{title:"아바라",value:"아이스바닐라라떼",explain:" "},{title:"트리남",value:"트랜드를 리드하는 남자",explain:"‘트랜드를 리드하는 남자’ 의 줄임말로, 트랜드를 선도하는 사람(남자)을 뜻합니다."},{title:"방방봐",value:"방송은 방송으로만 봐라의 줄임말.",explain:"방송은 방송일 뿐 너무 진지하게 받아들이지 말라는 뜻이다.  Ex) 친구야 이런건 그냥 방방봐 알았지?"},{title:"자만추",value:"자연스러운 만남을 추구한다",explain:" 소개팅, 맞선 등의 인위적인 만남보다는 일상생활 속에서 자연스럽게 사람을 만나고 싶다는 의미 예)난 소개팅하는 스타일 보다는 자만추를 하는 스타일이야"},{title:"코스크",value:"코와 마스크의 -스크를 합친 말.",explain:"입만 가리고 코는 가리지 않은 마스크를 말한다. Ex) 이 시국에 코스크 좀 그만 써!!"},{title:"고양이",value:"고양이",explain:"고양이"},{title:"트민남",value:"트랜드에 민감한 남자",explain:"‘트랜드에 민감한 남자’ 의 줄임말으로, 트랜드를 따라가는 사람(남자)를 말합니다."},{title:"캣맘",value:"고양이를 뜻하는 캣(cat)과 엄마를 뜻하는 맘(mom) 을 합친 말, 달리 말하면 '고양이 엄마'다.",explain:"자신의 반료묘에 각별한 애정을 쏟으며 사회 전반에 문제를 야기하는 여성/남성을 통칭하는 말이다. 또한 길거리 야생고양이들에게 먹이를 제공함으로써 고양이들의 야생성을 없애고 주거지 근처에 소음을 일으키기도 한다."},{title:"얼죽아",value:"얼어 죽어도 아이스 아메리카노의 줄임말",explain:"아이스 아메리카노를 사랑하는 사람들이 추운 계절인 가을이나 겨울에도 따뜻한 아메리카노가 아닌 차가운 아메리카노를 선호하는 경우를 말한다. "},{title:"도파밍",value:"도파민(Dopamine)+파밍(Farming)",explain:"새롭고 재미있는 것을 경험할 때 분비되는 신경전달 물질 '도파민'과 게임 용어 '파밍'의 합성어로, 즐거움을 추구하는 행동을 의미합니다."},{title:"반모",value:"반말모드",explain:"반말을 사용한다는 뜻 예)반모 가능할까요?"},{title:"억까",value:"억지로 까다/까이다",explain:"이유 없이 비판하거나 공격하는 것을 의미 타당한 이유 없이 억지로 남을 비난하거나 헐뜯는 상황에서 사용된다. 예) (억울한 상황) 아니 내가 먹은거 아니라고 억까하지마."},{title:"오리",value:"꽥꽦",explain:"멍멍"},{title:"콩글리쉬",value:"코리아의 '코'와 잉글리쉬를 합친 말",explain:'주로 영국 또는 미국 본토 발음에서 크게 벗어나는 발음, 곧 한국식 발음으로 영어를 읽는 사람에게 자주 사용한다. "아이 엠 어 티쳐" 등이 콩글리쉬 사용 예시다. '},{title:"이끼기",value:"가짜",explain:"테승트"},{title:"피방",value:"PC방",explain:" "},{title:"여미새",value:"여자애 미친 새끼의 줄임말.",explain:"여자를 극히 밝히는 사람, 보통 남자들을 일컫는 말이다. Ex) A: 야 저기 여자 이쁘다  B: 어후 저 여미새.."},{title:"점메추",value:"점심 메뉴 추천의 줄임말.",explain:" "},{title:"체크메이트",value:"특히 남자화장실에서 오줌을 쌀 수 없는 상황을 일컫는 말",explain:"남자화장실에서 보통 남자들은 자신의 양 옆 칸을 비워두는 경향이 있는데, 애매하게 가운데에 자리를 잡아 다른 이들이 볼일을 보기 난처한 상황을 의미한다. "},{title:"https://onedrive.live.com/edit?id=204EF76E4712E1B7!s922617bad42a4b1c97fbe12db85fad37&resid=204EF76E4712E1B7!s922617bad42a4b1c97fbe12db85fad37&cid=204ef76e4712e1b7&ithint=file%2Cpptx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy8yMDRlZjc2ZTQ3MTJlMWI3L0Vib1hKcElxMUJ4TGxfdmhMYmhmclRjQkdrVWc1aldiTXNMWVJVR3JTODhyREE_ZT1kckRtcTI&migratedtospo=true&wdo=2",value:"https://onedrive.live.com/edit?id=204EF76E4712E1B7!s922617bad42a4b1c97fbe12db85fad37&resid=204EF76E4712E1B7!s922617bad42a4b1c97fbe12db85fad37&cid=204ef76e4712e1b7&ithint=file%2Cpptx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy8yMDRlZjc2ZTQ3MTJlMWI3L0Vib1hKcElxMUJ4TGxfdmhMYmhmclRjQkdrVWc1aldiTXNMWVJVR3JTODhyREE_ZT1kckRtcTI&migratedtospo=true&wdo=2",explain:"bdidsissjsjzjzsbsbsnznznzzbzbzbshshsshshsushsshssu37ruehe7rbdz7sjcejdzcejgdtdtjzuevsfey26374i5h48sbsisnzosbzjshushshshshzisnsuevjscuegsuwv"},{title:"Sample Title",value:"Sample Value",explain:"This is a sample explanation."},{title:"식집사",value:"식물+집사",explain:"‘식물’과 ‘집사’의 합성어로, 식물을 정성스럽게 키우는 사람을 지칭하는 말입니다."},{title:"뜨아",value:"뜨거운 아메리카노의 줄임말.",explain:" "},{title:"별다줄",value:"별걸 다 줄이네",explain:" "},{title:"생기부",value:"생활기록부의 줄임말",explain:"대한민국 학생들이라면 누구나 한번쯤 들어본 단어이다. 그만큼 생활기록부가 고입, 대입에 있어 매우 중요하다는 것이다."},{title:"영고",value:"'영원히 고통받는'의 줄임말.",explain:"보통 게임이나 스포츠에서 많이 사용되며, 끊이지 않는 부진에 빠져있음을 나타낸다. '영고 라인' 이라는 말과 함께 사용되기도 한다."},{title:"일며들다",value:"일이 내 삶에 스며들었다.",explain:"‘일이 내 삶에 스며들었다’의 줄임말로, 직장인들이 출근과 퇴근을 오가면서 느끼는 고단함을 표현하는 말입니다."},{title:"까리하다",value:"잘 생기고 센스 있고 멋있어 보이는 상태",explain:"사람뿐만 아니라 각종 사물 등에도 흔히 사용되는 말이다. Ex) 야 너 좀 까리한데?"},{title:"캘박",value:"캘린더 박제",explain:"중요한 일을 캘린더에 박제 하여 잊지 않겠다는 뜻 예)우리 다음 주 약속 캘박 할게"},{title:"갓생",value:"God(갓)+생(인생)",explain:"‘God(갓)’과 ‘생(인생)‘의 합성어로, 열심히 생산적이고 계획적인 삶을 사는 사람을 뜻하는 말입니다."},{title:"인싸",value:"인사이더",explain:'"인싸"는 한국어에서 "인사이더"의 줄임말로, 주로 특정 그룹이나 사회에서 중심에 있는 사람을 뜻 한다. 예) 너 자주 놀러 다니는걸 보니 인싸구나?'},{title:"월루",value:"월급루",explain:"직장에서 일을 제대로 하지 않고 시간을 보내면서 월급만 받는 사람을 의미한다. 예) 대리님은 맨날 직원한테 시키고 정작 자기는 아무것도 안 하는 걸 보니 월루이다"},{title:"보배",value:"보조배터리",explain:"‘보조배터리’의 줄임말 입니다."},{title:"금사빠",value:"금방 사랑에 빠지는 사람",explain:"새로운 사람을 만나면 쉽게 사랑에 빠지는 성향을 가진 사람을 의미한다. 예) 쟤는 맨날 사랑하는 사람이 바뀌는걸 보면 금사빠인가봐"},{title:"MB",value:"명박",explain:"이명박을  지칭"},{title:"짤",value:"짧은 이미지나 영상 클립",explain:" 재미있거나 유머러스한 상황을 표현하는 이미지나 GIF 파일을 의미한다. 예) 짤 좀 보내봐"},{title:"문켓몬스터",value:"문재인+포켓몬스터의 줄임말.",explain:"문재인 전 대통령을 여러 포켓몬스터에 합성한 것이다."},{title:"내또학",value:"'내일 또 학교간다' 의 줄임말",explain:"'아직 목요일이네. 내또학이다.'"},{title:"ㄹㅇㅋㅋ",value:"리얼크크의 초성을 딴 말.",explain:" "},{title:"신한사",value:"신조어 한국어 사전을 일컫는 말",explain:"2024년 선덕고등학교 1학년 '말모이'에서 만든 사전이다."},{title:"스카",value:"스터디카페",explain:"나랑 스카 가자"},{title:"완내스",value:"'완전 내 스타일' 의 줄임말",explain:"'이 옷 왠내스야'"},{title:"영고 ",value:"ㅋㄴ",explain:"ㅋㄷ"}];function tu(n,e,t){const r=n.slice();return r[17]=e[t],r}function nu(n){let e,t,r="Main",i,s,a="시작",l,c;return{c(){e=D("div"),t=D("button"),t.textContent=r,i=j(),s=D("button"),s.textContent=a,this.h()},l(h){e=V(h,"DIV",{class:!0});var d=z(e);t=V(d,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(t)!=="svelte-8azga8"&&(t.textContent=r),d.forEach(N),i=q(h),s=V(h,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(s)!=="svelte-zrbsg9"&&(s.textContent=a),this.h()},h(){S(t,"class","close-button svelte-1irqs7m"),S(e,"class","close-button_div svelte-1irqs7m"),S(s,"class","svelte-1irqs7m")},m(h,d){ee(h,e,d),b(e,t),ee(h,i,d),ee(h,s,d),l||(c=[W(t,"click",n[8]),W(s,"click",n[5])],l=!0)},p:Te,d(h){h&&(N(e),N(i),N(s)),l=!1,Ot(c)}}}function ru(n){let e,t,r,i,s,a,l,c,h,d,g,p,y,_,w=ft(n[1]),P=[];for(let L=0;L<w.length;L+=1)P[L]=iu(tu(n,w,L));return{c(){e=D("div"),t=D("h2"),r=Ae("남은시간: "),i=Ae(n[3]),s=Ae("s"),a=j(),l=D("h2"),c=Ae("점수: "),h=Ae(n[2]),d=j(),g=D("p"),p=Ae(n[0]),y=j(),_=D("div");for(let L=0;L<P.length;L+=1)P[L].c();this.h()},l(L){e=V(L,"DIV",{});var U=z(e);t=V(U,"H2",{class:!0});var x=z(t);r=be(x,"남은시간: "),i=be(x,n[3]),s=be(x,"s"),x.forEach(N),a=q(U),l=V(U,"H2",{class:!0});var H=z(l);c=be(H,"점수: "),h=be(H,n[2]),H.forEach(N),d=q(U),g=V(U,"P",{class:!0});var Q=z(g);p=be(Q,n[0]),Q.forEach(N),y=q(U),_=V(U,"DIV",{class:!0});var B=z(_);for(let A=0;A<P.length;A+=1)P[A].l(B);B.forEach(N),U.forEach(N),this.h()},h(){S(t,"class","svelte-1irqs7m"),S(l,"class","svelte-1irqs7m"),S(g,"class","svelte-1irqs7m"),S(_,"class","options svelte-1irqs7m")},m(L,U){ee(L,e,U),b(e,t),b(t,r),b(t,i),b(t,s),b(e,a),b(e,l),b(l,c),b(l,h),b(e,d),b(e,g),b(g,p),b(e,y),b(e,_);for(let x=0;x<P.length;x+=1)P[x]&&P[x].m(_,null)},p(L,U){if(U&8&&Fe(i,L[3]),U&4&&Fe(h,L[2]),U&1&&Fe(p,L[0]),U&66){w=ft(L[1]);let x;for(x=0;x<w.length;x+=1){const H=tu(L,w,x);P[x]?P[x].p(H,U):(P[x]=iu(H),P[x].c(),P[x].m(_,null))}for(;x<P.length;x+=1)P[x].d(1);P.length=w.length}},d(L){L&&N(e),Sn(P,L)}}}function iu(n){let e,t=n[17]+"",r,i,s;function a(){return n[9](n[17])}return{c(){e=D("div"),r=Ae(t),this.h()},l(l){e=V(l,"DIV",{class:!0});var c=z(e);r=be(c,t),c.forEach(N),this.h()},h(){S(e,"class","option svelte-1irqs7m")},m(l,c){ee(l,e,c),b(e,r),i||(s=W(e,"click",a),i=!0)},p(l,c){n=l,c&2&&t!==(t=n[17]+"")&&Fe(r,t)},d(l){l&&N(e),i=!1,s()}}}function su(n){let e,t,r,i,s,a="점수 업로드",l,c;return{c(){e=D("h2"),t=Ae("타임오버! 당신의 점수: "),r=Ae(n[2]),i=j(),s=D("button"),s.textContent=a,this.h()},l(h){e=V(h,"H2",{class:!0});var d=z(e);t=be(d,"타임오버! 당신의 점수: "),r=be(d,n[2]),d.forEach(N),i=q(h),s=V(h,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),ne(s)!=="svelte-g070rx"&&(s.textContent=a),this.h()},h(){S(e,"class","svelte-1irqs7m"),S(s,"id","scup"),S(s,"class","svelte-1irqs7m")},m(h,d){ee(h,e,d),b(e,t),b(e,r),ee(h,i,d),ee(h,s,d),l||(c=W(s,"click",n[7]),l=!0)},p(h,d){d&4&&Fe(r,h[2])},d(h){h&&(N(e),N(i),N(s)),l=!1,c()}}}function fE(n){let e,t,r,i=!n[4]&&nu(n),s=n[4]&&ru(n),a=!n[4]&&n[3]===0&&su(n);return{c(){e=D("main"),i&&i.c(),t=j(),s&&s.c(),r=j(),a&&a.c(),this.h()},l(l){e=V(l,"MAIN",{class:!0});var c=z(e);i&&i.l(c),t=q(c),s&&s.l(c),r=q(c),a&&a.l(c),c.forEach(N),this.h()},h(){S(e,"class","game svelte-1irqs7m")},m(l,c){ee(l,e,c),i&&i.m(e,null),b(e,t),s&&s.m(e,null),b(e,r),a&&a.m(e,null)},p(l,[c]){l[4]?i&&(i.d(1),i=null):i?i.p(l,c):(i=nu(l),i.c(),i.m(e,t)),l[4]?s?s.p(l,c):(s=ru(l),s.c(),s.m(e,r)):s&&(s.d(1),s=null),!l[4]&&l[3]===0?a?a.p(l,c):(a=su(l),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:Te,o:Te,d(l){l&&N(e),i&&i.d(),s&&s.d(),a&&a.d()}}}function pE(n,e,t){let r;dt(n,pe,H=>t(13,r=H));let i=[],s=[],a="",l=[],c=0,h=30,d,g=!1;Rn(()=>{i=Ui.map(H=>H.explain),s=Ui.map(H=>H.title)});const y=ns().currentUser;function _(){t(4,g=!0),t(2,c=0),t(3,h=30),w(),d=setInterval(()=>{h>0?t(3,h--,h):(clearInterval(d),t(4,g=!1),uploadScorePrompt())},1e3)}function w(){t(0,a=i[Math.floor(Math.random()*i.length)]);const H=Ui.find(B=>B.explain===a).title;let Q=s.filter(B=>B!==H);t(1,l=[H,...Q.sort(()=>.5-Math.random()).slice(0,5)].sort(()=>.5-Math.random()))}function P(H){const Q=Ui.find(B=>B.explain===a).title;H===Q&&t(2,c++,c),w()}async function L(){try{const H=Gn(Be,"score",y.email);await xy(H,{sc:c},{merge:!0}),alert("점수가 업로드되었습니다."),Re(pe,r=0,r)}catch(H){console.error("Error adding document: ",H),alert("점수 업로드에 실패했습니다.")}}return[a,l,c,h,g,_,P,L,()=>{Re(pe,r=0,r)},H=>P(H)]}class mE extends St{constructor(e){super(),Ct(this,e,pE,fE,Rt,{})}}function ou(n,e,t){const r=n.slice();return r[3]=e[t],r}function au(n){let e,t,r=n[3].index+"",i,s,a=n[3].sc+"",l,c,h,d=n[3].id+"",g,p;return{c(){e=D("div"),t=D("span"),i=Ae(r),s=Ae("위 ["),l=Ae(a),c=Ae("점]"),h=j(),g=Ae(d),p=j(),this.h()},l(y){e=V(y,"DIV",{class:!0});var _=z(e);t=V(_,"SPAN",{class:!0});var w=z(t);i=be(w,r),s=be(w,"위 ["),l=be(w,a),c=be(w,"점]"),w.forEach(N),h=q(_),g=be(_,d),p=q(_),_.forEach(N),this.h()},h(){S(t,"class","svelte-40vwu"),S(e,"class","box svelte-40vwu")},m(y,_){ee(y,e,_),b(e,t),b(t,i),b(t,s),b(t,l),b(t,c),b(e,h),b(e,g),b(e,p)},p(y,_){_&1&&r!==(r=y[3].index+"")&&Fe(i,r),_&1&&a!==(a=y[3].sc+"")&&Fe(l,a),_&1&&d!==(d=y[3].id+"")&&Fe(g,d)},d(y){y&&N(e)}}}function gE(n){let e,t,r,i="Main",s,a,l,c,h,d,g=ft(n[0]),p=[];for(let y=0;y<g.length;y+=1)p[y]=au(ou(n,g,y));return{c(){e=D("div"),t=D("div"),r=D("button"),r.textContent=i,s=j(),a=D("div"),l=j(),c=D("div");for(let y=0;y<p.length;y+=1)p[y].c();this.h()},l(y){e=V(y,"DIV",{class:!0});var _=z(e);t=V(_,"DIV",{class:!0});var w=z(t);r=V(w,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(r)!=="svelte-8azga8"&&(r.textContent=i),w.forEach(N),s=q(_),a=V(_,"DIV",{id:!0,class:!0}),z(a).forEach(N),l=q(_),c=V(_,"DIV",{class:!0});var P=z(c);for(let L=0;L<p.length;L+=1)p[L].l(P);P.forEach(N),_.forEach(N),this.h()},h(){S(r,"class","close-button svelte-40vwu"),S(t,"class","close-button_div svelte-40vwu"),S(a,"id","c"),S(a,"class","svelte-40vwu"),S(c,"class","container svelte-40vwu"),S(e,"class","os svelte-40vwu")},m(y,_){ee(y,e,_),b(e,t),b(t,r),b(e,s),b(e,a),b(e,l),b(e,c);for(let w=0;w<p.length;w+=1)p[w]&&p[w].m(c,null);h||(d=W(r,"click",n[1]),h=!0)},p(y,[_]){if(_&1){g=ft(y[0]);let w;for(w=0;w<g.length;w+=1){const P=ou(y,g,w);p[w]?p[w].p(P,_):(p[w]=au(P),p[w].c(),p[w].m(c,null))}for(;w<p.length;w+=1)p[w].d(1);p.length=g.length}},i:Te,o:Te,d(y){y&&N(e),Sn(p,y),h=!1,d()}}}function _E(n,e,t){let r;dt(n,pe,a=>t(2,r=a));let i=[];return Rn(async()=>{const a=gt(Be,"score"),l=zt(a,hs("sc","desc")),c=await Vt(l);t(0,i=c.docs.map((h,d)=>({id:h.id,index:d+1,sc:h.data().sc})))}),[i,()=>{Re(pe,r=0,r)}]}class vE extends St{constructor(e){super(),Ct(this,e,_E,gE,Rt,{})}}function yE(n){let e,t,r,i="로그인",s,a,l="Google",c,h;return{c(){e=D("div"),t=D("div"),r=D("h1"),r.textContent=i,s=j(),a=D("button"),a.textContent=l,this.h()},l(d){e=V(d,"DIV",{id:!0,class:!0});var g=z(e);t=V(g,"DIV",{class:!0});var p=z(t);r=V(p,"H1",{class:!0,"data-svelte-h":!0}),ne(r)!=="svelte-1bvi8l2"&&(r.textContent=i),s=q(p),a=V(p,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(a)!=="svelte-g8tqx5"&&(a.textContent=l),p.forEach(N),g.forEach(N),this.h()},h(){S(r,"class","svelte-1palf0z"),S(a,"class","svelte-1palf0z"),S(t,"class","login-container svelte-1palf0z"),S(e,"id","L_body"),S(e,"class","svelte-1palf0z")},m(d,g){ee(d,e,g),b(e,t),b(t,r),b(t,s),b(t,a),c||(h=W(a,"click",n[3]),c=!0)},p:Te,i:Te,o:Te,d(d){d&&N(e),c=!1,h()}}}function EE(n){let e,t,r,i;const s=[VE,DE,kE,PE,CE,SE,RE,bE,AE,wE,TE],a=[];function l(c,h){return c[2]==0?0:c[2]==1?1:c[2]==2?2:c[2]==3?3:c[2]==4?4:c[2]==5?5:c[2]==6?6:c[2]==7?7:c[2]==8?8:c[2]==9?9:c[2]==10?10:-1}return~(e=l(n))&&(t=a[e]=s[e](n)),{c(){t&&t.c(),r=Al()},l(c){t&&t.l(c),r=Al()},m(c,h){~e&&a[e].m(c,h),ee(c,r,h),i=!0},p(c,h){let d=e;e=l(c),e!==d&&(t&&(uu(),_t(a[d],1,1,()=>{a[d]=null}),cu()),~e?(t=a[e],t||(t=a[e]=s[e](c),t.c()),vt(t,1),t.m(r.parentNode,r)):t=null)},i(c){i||(vt(t),i=!0)},o(c){_t(t),i=!1},d(c){c&&N(r),~e&&a[e].d(c)}}}function IE(n){let e,t="[ Developer : G37 ]";return{c(){e=D("div"),e.textContent=t,this.h()},l(r){e=V(r,"DIV",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-67okfr"&&(e.textContent=t),this.h()},h(){S(e,"class","loading-screen svelte-1palf0z")},m(r,i){ee(r,e,i)},p:Te,i:Te,o:Te,d(r){r&&N(e)}}}function TE(n){let e,t;return e=new vE({}),{c(){xt(e.$$.fragment)},l(r){Mt(e.$$.fragment,r)},m(r,i){Lt(e,r,i),t=!0},i(r){t||(vt(e.$$.fragment,r),t=!0)},o(r){_t(e.$$.fragment,r),t=!1},d(r){Ut(e,r)}}}function wE(n){let e,t;return e=new mE({}),{c(){xt(e.$$.fragment)},l(r){Mt(e.$$.fragment,r)},m(r,i){Lt(e,r,i),t=!0},i(r){t||(vt(e.$$.fragment,r),t=!0)},o(r){_t(e.$$.fragment,r),t=!1},d(r){Ut(e,r)}}}function AE(n){let e,t;return e=new dE({}),{c(){xt(e.$$.fragment)},l(r){Mt(e.$$.fragment,r)},m(r,i){Lt(e,r,i),t=!0},i(r){t||(vt(e.$$.fragment,r),t=!0)},o(r){_t(e.$$.fragment,r),t=!1},d(r){Ut(e,r)}}}function bE(n){let e,t;return e=new cE({}),{c(){xt(e.$$.fragment)},l(r){Mt(e.$$.fragment,r)},m(r,i){Lt(e,r,i),t=!0},i(r){t||(vt(e.$$.fragment,r),t=!0)},o(r){_t(e.$$.fragment,r),t=!1},d(r){Ut(e,r)}}}function RE(n){let e,t;return e=new oE({}),{c(){xt(e.$$.fragment)},l(r){Mt(e.$$.fragment,r)},m(r,i){Lt(e,r,i),t=!0},i(r){t||(vt(e.$$.fragment,r),t=!0)},o(r){_t(e.$$.fragment,r),t=!1},d(r){Ut(e,r)}}}function SE(n){let e,t;return e=new rE({}),{c(){xt(e.$$.fragment)},l(r){Mt(e.$$.fragment,r)},m(r,i){Lt(e,r,i),t=!0},i(r){t||(vt(e.$$.fragment,r),t=!0)},o(r){_t(e.$$.fragment,r),t=!1},d(r){Ut(e,r)}}}function CE(n){let e,t;return e=new eE({}),{c(){xt(e.$$.fragment)},l(r){Mt(e.$$.fragment,r)},m(r,i){Lt(e,r,i),t=!0},i(r){t||(vt(e.$$.fragment,r),t=!0)},o(r){_t(e.$$.fragment,r),t=!1},d(r){Ut(e,r)}}}function PE(n){let e,t;return e=new Yy({}),{c(){xt(e.$$.fragment)},l(r){Mt(e.$$.fragment,r)},m(r,i){Lt(e,r,i),t=!0},i(r){t||(vt(e.$$.fragment,r),t=!0)},o(r){_t(e.$$.fragment,r),t=!1},d(r){Ut(e,r)}}}function kE(n){let e,t;return e=new Ky({}),{c(){xt(e.$$.fragment)},l(r){Mt(e.$$.fragment,r)},m(r,i){Lt(e,r,i),t=!0},i(r){t||(vt(e.$$.fragment,r),t=!0)},o(r){_t(e.$$.fragment,r),t=!1},d(r){Ut(e,r)}}}function DE(n){let e,t;return e=new Hy({}),{c(){xt(e.$$.fragment)},l(r){Mt(e.$$.fragment,r)},m(r,i){Lt(e,r,i),t=!0},i(r){t||(vt(e.$$.fragment,r),t=!0)},o(r){_t(e.$$.fragment,r),t=!1},d(r){Ut(e,r)}}}function VE(n){let e,t;return e=new qy({}),{c(){xt(e.$$.fragment)},l(r){Mt(e.$$.fragment,r)},m(r,i){Lt(e,r,i),t=!0},i(r){t||(vt(e.$$.fragment,r),t=!0)},o(r){_t(e.$$.fragment,r),t=!1},d(r){Ut(e,r)}}}function NE(n){let e,t,r,i;const s=[IE,EE,yE],a=[];function l(c,h){return c[1]?0:c[0]?1:2}return t=l(n),r=a[t]=s[t](n),{c(){e=D("main"),r.c(),this.h()},l(c){e=V(c,"MAIN",{class:!0});var h=z(e);r.l(h),h.forEach(N),this.h()},h(){S(e,"class","svelte-1palf0z")},m(c,h){ee(c,e,h),a[t].m(e,null),i=!0},p(c,[h]){let d=t;t=l(c),t===d?a[t].p(c,h):(uu(),_t(a[d],1,1,()=>{a[d]=null}),cu(),r=a[t],r?r.p(c,h):(r=a[t]=s[t](c),r.c()),vt(r,1),r.m(e,null))},i(c){i||(vt(r),i=!0)},o(c){_t(r),i=!1},d(c){c&&N(e),a[t].d()}}}function OE(n,e,t){let r;dt(n,pe,l=>t(2,r=l)),console.log(r);let i=null,s=!0;return Rn(()=>{Qo(fs,l=>{t(0,i=l),t(1,s=!1)})}),[i,s,r,async()=>{const l=new Qt;try{await Lm(fs,l)}catch(c){console.error("Error signing in:",c)}}]}class jE extends St{constructor(e){super(),Ct(this,e,OE,NE,Rt,{})}}export{jE as component};
