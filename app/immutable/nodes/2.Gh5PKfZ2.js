import{s as Se,x as $d,n as Tt,r as Oe,b as de,o as Gn,i as Hd,y as Rt,z as Gd}from"../chunks/scheduler.li6PcnJj.js";import{S as Ce,i as Pe,e as D,s as q,c as V,d as z,y as nt,h as j,g as N,o as S,z as Ht,p as Ft,j as tt,k as b,A as W,B as Rn,b as At,f as bt,l as Bt,C as Wd,D as wt,E as au,a as _e,n as lu,t as ve,q as cu,m as wl,u as Me,v as Le,w as xe,x as Ue}from"../chunks/index.PGWTL56s.js";import{w as fi}from"../chunks/index.ChQ1qdP7.js";function pe(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}var Al={};/**
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
 */const uu=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Kd=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],a=n[e++],l=n[e++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},hu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,d=i>>2,g=(i&3)<<4|l>>4;let p=(l&15)<<2|h>>6,y=h&63;c||(y=64,a||(p=64)),r.push(e[d],e[g],e[p],e[y])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(uu(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Kd(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const h=s<n.length?e[n.charAt(s)]:64;++s;const g=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new Qd;const p=i<<2|l>>4;if(r.push(p),h!==64){const y=l<<4&240|h>>2;if(r.push(y),g!==64){const _=h<<6&192|g;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Qd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jd=function(n){const t=uu(n);return hu.encodeByteArray(t,!0)},Ws=function(n){return Jd(n).replace(/\./g,"")},du=function(n){try{return hu.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const Yd=()=>Xd().__FIREBASE_DEFAULTS__,Zd=()=>{if(typeof process>"u"||typeof Al>"u")return;const n=Al.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&du(n[1]);return t&&JSON.parse(t)},pi=()=>{try{return Yd()||Zd()||tf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fu=n=>{var t,e;return(e=(t=pi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},ef=n=>{const t=fu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},pu=()=>{var n;return(n=pi())===null||n===void 0?void 0:n.config},mu=n=>{var t;return(t=pi())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class nf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function rf(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ws(JSON.stringify(e)),Ws(JSON.stringify(a)),""].join(".")}/**
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
 */function ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function of(){var n;const t=(n=pi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function af(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function lf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cf(){const n=ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function uf(){return!of()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hf(){try{return typeof indexedDB=="object"}catch{return!1}}function df(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const ff="FirebaseError";class sn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=ff,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?pf(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new sn(s,l,r)}}function pf(n,t){return n.replace(mf,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const mf=/\{\$([^}]+)}/g;function gf(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ks(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],a=t[s];if(bl(i)&&bl(a)){if(!Ks(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function bl(n){return n!==null&&typeof n=="object"}/**
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
 */function os(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function _f(n,t){const e=new vf(n,t);return e.subscribe.bind(e)}class vf{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");yf(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=to),s.error===void 0&&(s.error=to),s.complete===void 0&&(s.complete=to);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yf(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function to(){}/**
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
 */function Zt(n){return n&&n._delegate?n._delegate:n}class Fn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Nn="[DEFAULT]";/**
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
 */class Ef{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new nf;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Tf(t))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Nn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Nn){return this.instances.has(t)}getOptions(t=Nn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:If(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Nn){return this.component?this.component.multipleInstances?t:Nn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function If(n){return n===Nn?void 0:n}function Tf(n){return n.instantiationMode==="EAGER"}/**
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
 */class wf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ef(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var gt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(gt||(gt={}));const Af={debug:gt.DEBUG,verbose:gt.VERBOSE,info:gt.INFO,warn:gt.WARN,error:gt.ERROR,silent:gt.SILENT},bf=gt.INFO,Rf={[gt.DEBUG]:"log",[gt.VERBOSE]:"log",[gt.INFO]:"info",[gt.WARN]:"warn",[gt.ERROR]:"error"},Sf=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Rf[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Lo{constructor(t){this.name=t,this._logLevel=bf,this._logHandler=Sf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in gt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Af[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,gt.DEBUG,...t),this._logHandler(this,gt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,gt.VERBOSE,...t),this._logHandler(this,gt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,gt.INFO,...t),this._logHandler(this,gt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,gt.WARN,...t),this._logHandler(this,gt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,gt.ERROR,...t),this._logHandler(this,gt.ERROR,...t)}}const Cf=(n,t)=>t.some(e=>n instanceof e);let Rl,Sl;function Pf(){return Rl||(Rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kf(){return Sl||(Sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gu=new WeakMap,ho=new WeakMap,_u=new WeakMap,eo=new WeakMap,xo=new WeakMap;function Df(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{e(vn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&gu.set(e,n)}).catch(()=>{}),xo.set(t,n),t}function Vf(n){if(ho.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ho.set(n,t)}let fo={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ho.get(n);if(t==="objectStoreNames")return n.objectStoreNames||_u.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return vn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Nf(n){fo=n(fo)}function Of(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(no(this),t,...e);return _u.set(r,t.sort?t.sort():[t]),vn(r)}:kf().includes(n)?function(...t){return n.apply(no(this),t),vn(gu.get(this))}:function(...t){return vn(n.apply(no(this),t))}}function Mf(n){return typeof n=="function"?Of(n):(n instanceof IDBTransaction&&Vf(n),Cf(n,Pf())?new Proxy(n,fo):n)}function vn(n){if(n instanceof IDBRequest)return Df(n);if(eo.has(n))return eo.get(n);const t=Mf(n);return t!==n&&(eo.set(n,t),xo.set(t,n)),t}const no=n=>xo.get(n);function Lf(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,t),l=vn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(vn(a.result),c.oldVersion,c.newVersion,vn(a.transaction),c)}),e&&a.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const xf=["get","getKey","getAll","getAllKeys","count"],Uf=["put","add","delete","clear"],ro=new Map;function Cl(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ro.get(t))return ro.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Uf.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xf.includes(e)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[e](...l),s&&c.done]))[0]};return ro.set(t,i),i}Nf(n=>({...n,get:(t,e,r)=>Cl(t,e)||n.get(t,e,r),has:(t,e)=>!!Cl(t,e)||n.has(t,e)}));/**
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
 */class Ff{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Bf(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Bf(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const po="@firebase/app",Pl="0.10.5";/**
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
 */const Bn=new Lo("@firebase/app"),qf="@firebase/app-compat",jf="@firebase/analytics-compat",zf="@firebase/analytics",$f="@firebase/app-check-compat",Hf="@firebase/app-check",Gf="@firebase/auth",Wf="@firebase/auth-compat",Kf="@firebase/database",Qf="@firebase/database-compat",Jf="@firebase/functions",Xf="@firebase/functions-compat",Yf="@firebase/installations",Zf="@firebase/installations-compat",tp="@firebase/messaging",ep="@firebase/messaging-compat",np="@firebase/performance",rp="@firebase/performance-compat",sp="@firebase/remote-config",ip="@firebase/remote-config-compat",op="@firebase/storage",ap="@firebase/storage-compat",lp="@firebase/firestore",cp="@firebase/vertexai-preview",up="@firebase/firestore-compat",hp="firebase",dp="10.12.2";/**
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
 */const mo="[DEFAULT]",fp={[po]:"fire-core",[qf]:"fire-core-compat",[zf]:"fire-analytics",[jf]:"fire-analytics-compat",[Hf]:"fire-app-check",[$f]:"fire-app-check-compat",[Gf]:"fire-auth",[Wf]:"fire-auth-compat",[Kf]:"fire-rtdb",[Qf]:"fire-rtdb-compat",[Jf]:"fire-fn",[Xf]:"fire-fn-compat",[Yf]:"fire-iid",[Zf]:"fire-iid-compat",[tp]:"fire-fcm",[ep]:"fire-fcm-compat",[np]:"fire-perf",[rp]:"fire-perf-compat",[sp]:"fire-rc",[ip]:"fire-rc-compat",[op]:"fire-gcs",[ap]:"fire-gcs-compat",[lp]:"fire-fst",[up]:"fire-fst-compat",[cp]:"fire-vertex","fire-js":"fire-js",[hp]:"fire-js-all"};/**
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
 */const Qs=new Map,pp=new Map,go=new Map;function kl(n,t){try{n.container.addComponent(t)}catch(e){Bn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function cr(n){const t=n.name;if(go.has(t))return Bn.debug(`There were multiple attempts to register component ${t}.`),!1;go.set(t,n);for(const e of Qs.values())kl(e,n);for(const e of pp.values())kl(e,n);return!0}function Uo(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Je(n){return n.settings!==void 0}/**
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
 */const mp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yn=new is("app","Firebase",mp);/**
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
 */class gp{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
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
 */const yr=dp;function vu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:mo,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw yn.create("bad-app-name",{appName:String(s)});if(e||(e=pu()),!e)throw yn.create("no-options");const i=Qs.get(s);if(i){if(Ks(e,i.options)&&Ks(r,i.config))return i;throw yn.create("duplicate-app",{appName:s})}const a=new wf(s);for(const c of go.values())a.addComponent(c);const l=new gp(e,r,a);return Qs.set(s,l),l}function yu(n=mo){const t=Qs.get(n);if(!t&&n===mo&&pu())return vu();if(!t)throw yn.create("no-app",{appName:n});return t}function En(n,t,e){var r;let s=(r=fp[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}cr(new Fn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const _p="firebase-heartbeat-database",vp=1,Jr="firebase-heartbeat-store";let so=null;function Eu(){return so||(so=Lf(_p,vp,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Jr)}catch(e){console.warn(e)}}}}).catch(n=>{throw yn.create("idb-open",{originalErrorMessage:n.message})})),so}async function yp(n){try{const e=(await Eu()).transaction(Jr),r=await e.objectStore(Jr).get(Iu(n));return await e.done,r}catch(t){if(t instanceof sn)Bn.warn(t.message);else{const e=yn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Bn.warn(e.message)}}}async function Dl(n,t){try{const r=(await Eu()).transaction(Jr,"readwrite");await r.objectStore(Jr).put(t,Iu(n)),await r.done}catch(e){if(e instanceof sn)Bn.warn(e.message);else{const r=yn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(r.message)}}}function Iu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ep=1024,Ip=30*24*60*60*1e3;class Tp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ap(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vl();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Ip}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vl(),{heartbeatsToSend:r,unsentEntries:s}=wp(this._heartbeatsCache.heartbeats),i=Ws(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vl(){return new Date().toISOString().substring(0,10)}function wp(n,t=Ep){const e=[];let r=n.slice();for(const s of n){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Nl(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Nl(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Ap{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hf()?df().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await yp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Nl(n){return Ws(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function bp(n){cr(new Fn("platform-logger",t=>new Ff(t),"PRIVATE")),cr(new Fn("heartbeat",t=>new Tp(t),"PRIVATE")),En(po,Pl,n),En(po,Pl,"esm2017"),En("fire-js","")}bp("");var Rp="firebase",Sp="10.12.2";/**
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
 */En(Rp,Sp,"app");function Fo(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(e[r[s]]=n[r[s]]);return e}function Tu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cp=Tu,wu=new is("auth","Firebase",Tu());/**
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
 */const Js=new Lo("@firebase/auth");function Pp(n,...t){Js.logLevel<=gt.WARN&&Js.warn(`Auth (${yr}): ${n}`,...t)}function Us(n,...t){Js.logLevel<=gt.ERROR&&Js.error(`Auth (${yr}): ${n}`,...t)}/**
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
 */function $e(n,...t){throw qo(n,...t)}function Ve(n,...t){return qo(n,...t)}function Bo(n,t,e){const r=Object.assign(Object.assign({},Cp()),{[t]:e});return new is("auth","Firebase",r).create(t,{appName:n.name})}function Ln(n){return Bo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kp(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&$e(n,"argument-error"),Bo(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qo(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return wu.create(n,...t)}function it(n,t,...e){if(!n)throw qo(t,...e)}function Xe(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Us(t),new Error(t)}function tn(n,t){n||Xe(t)}/**
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
 */function _o(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Dp(){return Ol()==="http:"||Ol()==="https:"}function Ol(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Vp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dp()||af()||"connection"in navigator)?navigator.onLine:!0}function Np(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class as{constructor(t,e){this.shortDelay=t,this.longDelay=e,tn(e>t,"Short delay should be less than long delay!"),this.isMobile=sf()||lf()}get(){return Vp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jo(n,t){tn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Au{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Op={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Mp=new as(3e4,6e4);function zo(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Er(n,t,e,r,s={}){return bu(n,s,async()=>{let i={},a={};r&&(t==="GET"?a=r:i={body:JSON.stringify(r)});const l=os(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Au.fetch()(Ru(n,n.config.apiHost,e,l),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function bu(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Op),t);try{const s=new xp(n),i=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Vs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vs(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Vs(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Vs(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Bo(n,d,h);$e(n,d)}}catch(s){if(s instanceof sn)throw s;$e(n,"network-request-failed",{message:String(s)})}}async function Lp(n,t,e,r,s={}){const i=await Er(n,t,e,r,s);return"mfaPendingCredential"in i&&$e(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Ru(n,t,e,r){const s=`${t}${e}?${r}`;return n.config.emulator?jo(n.config,s):`${n.config.apiScheme}://${s}`}class xp{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Ve(this.auth,"network-request-failed")),Mp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vs(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=Ve(n,t,r);return s.customData._tokenResponse=e,s}/**
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
 */async function Up(n,t){return Er(n,"POST","/v1/accounts:delete",t)}async function Su(n,t){return Er(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function Gr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Fp(n,t=!1){const e=Zt(n),r=await e.getIdToken(t),s=$o(r);it(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gr(io(s.auth_time)),issuedAtTime:Gr(io(s.iat)),expirationTime:Gr(io(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function io(n){return Number(n)*1e3}function $o(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Us("JWT malformed, contained fewer than 3 sections"),null;try{const s=du(e);return s?JSON.parse(s):(Us("Failed to decode base64 JWT payload"),null)}catch(s){return Us("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ml(n){const t=$o(n);return it(t,"internal-error"),it(typeof t.exp<"u","internal-error"),it(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Xr(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof sn&&Bp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Bp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class qp{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vo{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gr(this.lastLoginAt),this.creationTime=Gr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xs(n){var t;const e=n.auth,r=await n.getIdToken(),s=await Xr(n,Su(e,{idToken:r}));it(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Cu(i.providerUserInfo):[],l=zp(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new vo(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,g)}async function jp(n){const t=Zt(n);await Xs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function zp(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Cu(n){return n.map(t=>{var{providerId:e}=t,r=Fo(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $p(n,t){const e=await bu(n,{},async()=>{const r=os({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Ru(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Au.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Hp(n,t){return Er(n,"POST","/v2/accounts:revokeToken",zo(n,t))}/**
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
 */class sr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){it(t.idToken,"internal-error"),it(typeof t.idToken<"u","internal-error"),it(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ml(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){it(t.length!==0,"internal-error");const e=Ml(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(it(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:i}=await $p(t,e);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:i}=e,a=new sr;return r&&(it(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),s&&(it(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),i&&(it(typeof i=="number","internal-error",{appName:t}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new sr,this.toJSON())}_performRefresh(){return Xe("not implemented")}}/**
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
 */function fn(n,t){it(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Ye{constructor(t){var{uid:e,auth:r,stsTokenManager:s}=t,i=Fo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Xr(this,this.stsTokenManager.getToken(this.auth,t));return it(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Fp(this,t)}reload(){return jp(this)}_assign(t){this!==t&&(it(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Ye(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){it(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Xs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Je(this.auth.app))return Promise.reject(Ln(this.auth));const t=await this.getIdToken();return await Xr(this,Up(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,s,i,a,l,c,h,d;const g=(r=e.displayName)!==null&&r!==void 0?r:void 0,p=(s=e.email)!==null&&s!==void 0?s:void 0,y=(i=e.phoneNumber)!==null&&i!==void 0?i:void 0,_=(a=e.photoURL)!==null&&a!==void 0?a:void 0,w=(l=e.tenantId)!==null&&l!==void 0?l:void 0,P=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,x=(h=e.createdAt)!==null&&h!==void 0?h:void 0,U=(d=e.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:M,emailVerified:K,isAnonymous:G,providerData:B,stsTokenManager:A}=e;it(M&&A,t,"internal-error");const E=sr.fromJSON(this.name,A);it(typeof M=="string",t,"internal-error"),fn(g,t.name),fn(p,t.name),it(typeof K=="boolean",t,"internal-error"),it(typeof G=="boolean",t,"internal-error"),fn(y,t.name),fn(_,t.name),fn(w,t.name),fn(P,t.name),fn(x,t.name),fn(U,t.name);const v=new Ye({uid:M,auth:t,email:p,emailVerified:K,displayName:g,isAnonymous:G,photoURL:_,phoneNumber:y,tenantId:w,stsTokenManager:E,createdAt:x,lastLoginAt:U});return B&&Array.isArray(B)&&(v.providerData=B.map(T=>Object.assign({},T))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(t,e,r=!1){const s=new sr;s.updateFromServerResponse(e);const i=new Ye({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Xs(i),i}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];it(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Cu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new sr;l.updateFromIdToken(r);const c=new Ye({uid:s.localId,auth:t,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const Ll=new Map;function Ze(n){tn(n instanceof Function,"Expected a class definition");let t=Ll.get(n);return t?(tn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Ll.set(n,t),t)}/**
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
 */class Pu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Pu.type="NONE";const xl=Pu;/**
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
 */function Fs(n,t,e){return`firebase:${n}:${t}:${e}`}class ir{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fs(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fs("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ye._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new ir(Ze(xl),t,r);const s=(await Promise.all(e.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Ze(xl);const a=Fs(r,t.config.apiKey,t.name);let l=null;for(const h of e)try{const d=await h._get(a);if(d){const g=Ye._fromJSON(t,d);h!==i&&(l=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ir(i,t,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(e.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new ir(i,t,r))}}/**
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
 */function Ul(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Vu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ku(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ou(t))return"Blackberry";if(Mu(t))return"Webos";if(Ho(t))return"Safari";if((t.includes("chrome/")||Du(t))&&!t.includes("edge/"))return"Chrome";if(Nu(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ku(n=ie()){return/firefox\//i.test(n)}function Ho(n=ie()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Du(n=ie()){return/crios\//i.test(n)}function Vu(n=ie()){return/iemobile/i.test(n)}function Nu(n=ie()){return/android/i.test(n)}function Ou(n=ie()){return/blackberry/i.test(n)}function Mu(n=ie()){return/webos/i.test(n)}function mi(n=ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Gp(n=ie()){var t;return mi(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Wp(){return cf()&&document.documentMode===10}function Lu(n=ie()){return mi(n)||Nu(n)||Mu(n)||Ou(n)||/windows phone/i.test(n)||Vu(n)}function Kp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function xu(n,t=[]){let e;switch(n){case"Browser":e=Ul(ie());break;case"Worker":e=`${Ul(ie())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${yr}/${r}`}/**
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
 */class Qp{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=i=>new Promise((a,l)=>{try{const c=t(i);a(c)}catch(c){l(c)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Jp(n,t={}){return Er(n,"GET","/v2/passwordPolicy",zo(n,t))}/**
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
 */const Xp=6;class Yp{constructor(t){var e,r,s,i;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=a.minPasswordLength)!==null&&e!==void 0?e:Xp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class Zp{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fl(this),this.idTokenSubscription=new Fl(this),this.beforeStateQueue=new Qp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Ze(e)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ir.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Su(this,{idToken:t}),r=await Ye._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Je(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return it(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Xs(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Np()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Je(this.app))return Promise.reject(Ln(this));const e=t?Zt(t):null;return e&&it(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&it(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Je(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Je(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ze(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Jp(this),e=new Yp(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new is("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hp(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Ze(t)||this._popupRedirectResolver;it(e,this,"argument-error"),this.redirectPersistenceManager=await ir.create(this,[Ze(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(it(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,r,s);return()=>{a=!0,c()}}else{const c=t.addObserver(e);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return it(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=xu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&Pp(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function gi(n){return Zt(n)}class Fl{constructor(t){this.auth=t,this.observer=null,this.addObserver=_f(e=>this.observer=e)}get next(){return it(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Go={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tm(n){Go=n}function em(n){return Go.loadJS(n)}function nm(){return Go.gapiScript}function rm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function sm(n,t){const e=Uo(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),i=e.getOptions();if(Ks(i,t??{}))return s;$e(s,"already-initialized")}return e.initialize({options:t})}function im(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Ze);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function om(n,t,e){const r=gi(n);it(r._canInitEmulator,r,"emulator-config-failed"),it(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=Uu(t),{host:a,port:l}=am(t),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),lm()}function Uu(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function am(n){const t=Uu(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Bl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Bl(a)}}}function Bl(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function lm(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Fu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Xe("not implemented")}_getIdTokenResponse(t){return Xe("not implemented")}_linkToIdToken(t,e){return Xe("not implemented")}_getReauthenticationResolver(t){return Xe("not implemented")}}/**
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
 */async function or(n,t){return Lp(n,"POST","/v1/accounts:signInWithIdp",zo(n,t))}/**
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
 */const cm="http://localhost";class qn extends Fu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new qn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):$e("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=e,i=Fo(e,["providerId","signInMethod"]);if(!r||!s)return null;const a=new qn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return or(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,or(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,or(t,e)}buildRequest(){const t={requestUri:cm,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=os(e)}return t}}/**
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
 */class Wo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ls extends Wo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class pn extends ls{constructor(){super("facebook.com")}static credential(t){return qn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pn.credentialFromTaggedObject(t)}static credentialFromError(t){return pn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return pn.credential(t.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
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
 */class Qe extends ls{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return qn._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Qe.credentialFromTaggedObject(t)}static credentialFromError(t){return Qe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Qe.credential(e,r)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
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
 */class mn extends ls{constructor(){super("github.com")}static credential(t){return qn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return mn.credentialFromTaggedObject(t)}static credentialFromError(t){return mn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return mn.credential(t.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class gn extends ls{constructor(){super("twitter.com")}static credential(t,e){return qn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return gn.credentialFromTaggedObject(t)}static credentialFromError(t){return gn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return gn.credential(e,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */class ur{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const i=await Ye._fromIdTokenResponse(t,r,s),a=ql(r);return new ur({user:i,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=ql(r);return new ur({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function ql(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ys extends sn{constructor(t,e,r,s){var i;super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ys.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new Ys(t,e,r,s)}}function Bu(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ys._fromErrorAndOperation(n,i,t,r):i})}async function um(n,t,e=!1){const r=await Xr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return ur._forOperation(n,"link",r)}/**
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
 */async function hm(n,t,e=!1){const{auth:r}=n;if(Je(r.app))return Promise.reject(Ln(r));const s="reauthenticate";try{const i=await Xr(n,Bu(r,s,t,n),e);it(i.idToken,r,"internal-error");const a=$o(i.idToken);it(a,r,"internal-error");const{sub:l}=a;return it(n.uid===l,r,"user-mismatch"),ur._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),i}}/**
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
 */async function dm(n,t,e=!1){if(Je(n.app))return Promise.reject(Ln(n));const r="signIn",s=await Bu(n,r,t),i=await ur._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(i.user),i}function fm(n,t,e,r){return Zt(n).onIdTokenChanged(t,e,r)}function pm(n,t,e){return Zt(n).beforeAuthStateChanged(t,e)}function Ko(n,t,e,r){return Zt(n).onAuthStateChanged(t,e,r)}function mm(n){return Zt(n).signOut()}const Zs="__sak";/**
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
 */class qu{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Zs,"1"),this.storage.removeItem(Zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function gm(){const n=ie();return Ho(n)||mi(n)}const _m=1e3,vm=10;class ju extends qu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gm()&&Kp(),this.fallbackToPolling=Lu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const s=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Wp()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,vm):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},_m)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ju.type="LOCAL";const ym=ju;/**
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
 */class zu extends qu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}zu.type="SESSION";const $u=zu;/**
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
 */function Em(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class _i{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new _i(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:i}=e.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(e.origin,i)),c=await Em(l);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_i.receivers=[];/**
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
 */function Qo(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class Im{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Qo("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const p=g;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(p.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:e},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Be(){return window}function Tm(n){Be().location.href=n}/**
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
 */function Hu(){return typeof Be().WorkerGlobalScope<"u"&&typeof Be().importScripts=="function"}async function wm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Am(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bm(){return Hu()?self:null}/**
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
 */const Gu="firebaseLocalStorageDb",Rm=1,ti="firebaseLocalStorage",Wu="fbase_key";class cs{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function vi(n,t){return n.transaction([ti],t?"readwrite":"readonly").objectStore(ti)}function Sm(){const n=indexedDB.deleteDatabase(Gu);return new cs(n).toPromise()}function yo(){const n=indexedDB.open(Gu,Rm);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ti,{keyPath:Wu})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ti)?t(r):(r.close(),await Sm(),t(await yo()))})})}async function jl(n,t,e){const r=vi(n,!0).put({[Wu]:t,value:e});return new cs(r).toPromise()}async function Cm(n,t){const e=vi(n,!1).get(t),r=await new cs(e).toPromise();return r===void 0?null:r.value}function zl(n,t){const e=vi(n,!0).delete(t);return new cs(e).toPromise()}const Pm=800,km=3;class Ku{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yo(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>km)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_i._getInstance(bm()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await wm(),!this.activeServiceWorker)return;this.sender=new Im(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Am()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await yo();return await jl(t,Zs,"1"),await zl(t,Zs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>jl(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>Cm(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>zl(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=vi(s,!1).getAll();return new cs(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ku.type="LOCAL";const Dm=Ku;new as(3e4,6e4);/**
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
 */function Qu(n,t){return t?Ze(t):(it(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Jo extends Fu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return or(t,this._buildIdpRequest())}_linkToIdToken(t,e){return or(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return or(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Vm(n){return dm(n.auth,new Jo(n),n.bypassAuthState)}function Nm(n){const{auth:t,user:e}=n;return it(e,t,"internal-error"),hm(e,new Jo(n),n.bypassAuthState)}async function Om(n){const{auth:t,user:e}=n;return it(e,t,"internal-error"),um(e,new Jo(n),n.bypassAuthState)}/**
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
 */class Ju{constructor(t,e,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:e,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Vm;case"linkViaPopup":case"linkViaRedirect":return Om;case"reauthViaPopup":case"reauthViaRedirect":return Nm;default:$e(this.auth,"internal-error")}}resolve(t){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Mm=new as(2e3,1e4);async function Lm(n,t,e){if(Je(n.app))return Promise.reject(Ve(n,"operation-not-supported-in-this-environment"));const r=gi(n);kp(n,t,Wo);const s=Qu(r,e);return new On(r,"signInViaPopup",t,s).executeNotNull()}class On extends Ju{constructor(t,e,r,s,i){super(t,e,s,i),this.provider=r,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return it(t,this.auth,"internal-error"),t}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const t=Qo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ve(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Mm.get())};t()}}On.currentPopupAction=null;/**
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
 */const xm="pendingRedirect",Bs=new Map;class Um extends Ju{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Bs.get(this.auth._key());if(!t){try{const r=await Fm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Bs.set(this.auth._key(),t)}return this.bypassAuthState||Bs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fm(n,t){const e=jm(t),r=qm(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function Bm(n,t){Bs.set(n._key(),t)}function qm(n){return Ze(n._redirectPersistence)}function jm(n){return Fs(xm,n.config.apiKey,n.name)}async function zm(n,t,e=!1){if(Je(n.app))return Promise.reject(Ln(n));const r=gi(n),s=Qu(r,t),a=await new Um(r,s,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const $m=10*60*1e3;class Hm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Gm(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Xu(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(Ve(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$m&&this.cachedEventUids.clear(),this.cachedEventUids.has($l(t))}saveEventToCache(t){this.cachedEventUids.add($l(t)),this.lastProcessedEventTime=Date.now()}}function $l(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Xu({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Gm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xu(n);default:return!1}}/**
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
 */async function Wm(n,t={}){return Er(n,"GET","/v1/projects",t)}/**
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
 */const Km=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qm=/^https?/;async function Jm(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Wm(n);for(const e of t)try{if(Xm(e))return}catch{}$e(n,"unauthorized-domain")}function Xm(n){const t=_o(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!Qm.test(e))return!1;if(Km.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ym=new as(3e4,6e4);function Hl(){const n=Be().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Zm(n){return new Promise((t,e)=>{var r,s,i;function a(){Hl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Hl(),e(Ve(n,"network-request-failed"))},timeout:Ym.get()})}if(!((s=(r=Be().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=Be().gapi)===null||i===void 0)&&i.load)a();else{const l=rm("iframefcb");return Be()[l]=()=>{gapi.load?a():e(Ve(n,"network-request-failed"))},em(`${nm()}?onload=${l}`).catch(c=>e(c))}}).catch(t=>{throw qs=null,t})}let qs=null;function tg(n){return qs=qs||Zm(n),qs}/**
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
 */const eg=new as(5e3,15e3),ng="__/auth/iframe",rg="emulator/auth/iframe",sg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ig=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function og(n){const t=n.config;it(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?jo(t,rg):`https://${n.config.authDomain}/${ng}`,r={apiKey:t.apiKey,appName:n.name,v:yr},s=ig.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${e}?${os(r).slice(1)}`}async function ag(n){const t=await tg(n),e=Be().gapi;return it(e,n,"internal-error"),t.open({where:document.body,url:og(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ve(n,"network-request-failed"),l=Be().setTimeout(()=>{i(a)},eg.get());function c(){Be().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const lg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cg=500,ug=600,hg="_blank",dg="http://localhost";class Gl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fg(n,t,e,r=cg,s=ug){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},lg),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ie().toLowerCase();e&&(l=Du(h)?hg:e),ku(h)&&(t=t||dg,c.scrollbars="yes");const d=Object.entries(c).reduce((p,[y,_])=>`${p}${y}=${_},`,"");if(Gp(h)&&l!=="_self")return pg(t||"",l),new Gl(null);const g=window.open(t||"",l,d);it(g,n,"popup-blocked");try{g.focus()}catch{}return new Gl(g)}function pg(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const mg="__/auth/handler",gg="emulator/auth/handler",_g=encodeURIComponent("fac");async function Wl(n,t,e,r,s,i){it(n.config.authDomain,n,"auth-domain-config-required"),it(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:yr,eventId:s};if(t instanceof Wo){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",gf(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(t instanceof ls){const d=t.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${_g}=${encodeURIComponent(c)}`:"";return`${vg(n)}?${os(l).slice(1)}${h}`}function vg({config:n}){return n.emulator?jo(n,gg):`https://${n.authDomain}/${mg}`}/**
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
 */const oo="webStorageSupport";class yg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$u,this._completeRedirectFn=zm,this._overrideRedirectResult=Bm}async _openPopup(t,e,r,s){var i;tn((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Wl(t,e,r,_o(),s);return fg(t,a,Qo())}async _openRedirect(t,e,r,s){await this._originValidation(t);const i=await Wl(t,e,r,_o(),s);return Tm(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:i}=this.eventManagers[e];return s?Promise.resolve(s):(tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await ag(t),r=new Hm(t);return e.register("authEvent",s=>(it(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(oo,{type:oo},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[oo];a!==void 0&&e(!!a),$e(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Jm(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Lu()||Ho()||mi()}}const Eg=yg;var Kl="@firebase/auth",Ql="1.7.4";/**
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
 */class Ig{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){it(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Tg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wg(n){cr(new Fn("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;it(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xu(n)},h=new Zp(r,s,i,c);return im(h,e),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),cr(new Fn("auth-internal",t=>{const e=gi(t.getProvider("auth").getImmediate());return(r=>new Ig(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(Kl,Ql,Tg(n)),En(Kl,Ql,"esm2017")}/**
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
 */const Ag=5*60,bg=mu("authIdTokenMaxAge")||Ag;let Jl=null;const Rg=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>bg)return;const s=e==null?void 0:e.token;Jl!==s&&(Jl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ei(n=yu()){const t=Uo(n,"auth");if(t.isInitialized())return t.getImmediate();const e=sm(n,{popupRedirectResolver:Eg,persistence:[Dm,ym,$u]}),r=mu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Rg(i.toString());pm(e,a,()=>a(e.currentUser)),fm(e,l=>a(l))}}const s=fu("auth");return s&&om(e,`http://${s}`),e}function Sg(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}tm({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const i=Ve("internal-error");i.customData=s,e(i)},r.type="text/javascript",r.charset="UTF-8",Sg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wg("Browser");var Xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xn,Yu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(A,E){function v(){}v.prototype=E.prototype,A.D=E.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(T,R,C){for(var I=Array(arguments.length-2),et=2;et<arguments.length;et++)I[et-2]=arguments[et];return E.prototype[R].apply(T,I)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,E,v){v||(v=0);var T=Array(16);if(typeof E=="string")for(var R=0;16>R;++R)T[R]=E.charCodeAt(v++)|E.charCodeAt(v++)<<8|E.charCodeAt(v++)<<16|E.charCodeAt(v++)<<24;else for(R=0;16>R;++R)T[R]=E[v++]|E[v++]<<8|E[v++]<<16|E[v++]<<24;E=A.g[0],v=A.g[1],R=A.g[2];var C=A.g[3],I=E+(C^v&(R^C))+T[0]+3614090360&4294967295;E=v+(I<<7&4294967295|I>>>25),I=C+(R^E&(v^R))+T[1]+3905402710&4294967295,C=E+(I<<12&4294967295|I>>>20),I=R+(v^C&(E^v))+T[2]+606105819&4294967295,R=C+(I<<17&4294967295|I>>>15),I=v+(E^R&(C^E))+T[3]+3250441966&4294967295,v=R+(I<<22&4294967295|I>>>10),I=E+(C^v&(R^C))+T[4]+4118548399&4294967295,E=v+(I<<7&4294967295|I>>>25),I=C+(R^E&(v^R))+T[5]+1200080426&4294967295,C=E+(I<<12&4294967295|I>>>20),I=R+(v^C&(E^v))+T[6]+2821735955&4294967295,R=C+(I<<17&4294967295|I>>>15),I=v+(E^R&(C^E))+T[7]+4249261313&4294967295,v=R+(I<<22&4294967295|I>>>10),I=E+(C^v&(R^C))+T[8]+1770035416&4294967295,E=v+(I<<7&4294967295|I>>>25),I=C+(R^E&(v^R))+T[9]+2336552879&4294967295,C=E+(I<<12&4294967295|I>>>20),I=R+(v^C&(E^v))+T[10]+4294925233&4294967295,R=C+(I<<17&4294967295|I>>>15),I=v+(E^R&(C^E))+T[11]+2304563134&4294967295,v=R+(I<<22&4294967295|I>>>10),I=E+(C^v&(R^C))+T[12]+1804603682&4294967295,E=v+(I<<7&4294967295|I>>>25),I=C+(R^E&(v^R))+T[13]+4254626195&4294967295,C=E+(I<<12&4294967295|I>>>20),I=R+(v^C&(E^v))+T[14]+2792965006&4294967295,R=C+(I<<17&4294967295|I>>>15),I=v+(E^R&(C^E))+T[15]+1236535329&4294967295,v=R+(I<<22&4294967295|I>>>10),I=E+(R^C&(v^R))+T[1]+4129170786&4294967295,E=v+(I<<5&4294967295|I>>>27),I=C+(v^R&(E^v))+T[6]+3225465664&4294967295,C=E+(I<<9&4294967295|I>>>23),I=R+(E^v&(C^E))+T[11]+643717713&4294967295,R=C+(I<<14&4294967295|I>>>18),I=v+(C^E&(R^C))+T[0]+3921069994&4294967295,v=R+(I<<20&4294967295|I>>>12),I=E+(R^C&(v^R))+T[5]+3593408605&4294967295,E=v+(I<<5&4294967295|I>>>27),I=C+(v^R&(E^v))+T[10]+38016083&4294967295,C=E+(I<<9&4294967295|I>>>23),I=R+(E^v&(C^E))+T[15]+3634488961&4294967295,R=C+(I<<14&4294967295|I>>>18),I=v+(C^E&(R^C))+T[4]+3889429448&4294967295,v=R+(I<<20&4294967295|I>>>12),I=E+(R^C&(v^R))+T[9]+568446438&4294967295,E=v+(I<<5&4294967295|I>>>27),I=C+(v^R&(E^v))+T[14]+3275163606&4294967295,C=E+(I<<9&4294967295|I>>>23),I=R+(E^v&(C^E))+T[3]+4107603335&4294967295,R=C+(I<<14&4294967295|I>>>18),I=v+(C^E&(R^C))+T[8]+1163531501&4294967295,v=R+(I<<20&4294967295|I>>>12),I=E+(R^C&(v^R))+T[13]+2850285829&4294967295,E=v+(I<<5&4294967295|I>>>27),I=C+(v^R&(E^v))+T[2]+4243563512&4294967295,C=E+(I<<9&4294967295|I>>>23),I=R+(E^v&(C^E))+T[7]+1735328473&4294967295,R=C+(I<<14&4294967295|I>>>18),I=v+(C^E&(R^C))+T[12]+2368359562&4294967295,v=R+(I<<20&4294967295|I>>>12),I=E+(v^R^C)+T[5]+4294588738&4294967295,E=v+(I<<4&4294967295|I>>>28),I=C+(E^v^R)+T[8]+2272392833&4294967295,C=E+(I<<11&4294967295|I>>>21),I=R+(C^E^v)+T[11]+1839030562&4294967295,R=C+(I<<16&4294967295|I>>>16),I=v+(R^C^E)+T[14]+4259657740&4294967295,v=R+(I<<23&4294967295|I>>>9),I=E+(v^R^C)+T[1]+2763975236&4294967295,E=v+(I<<4&4294967295|I>>>28),I=C+(E^v^R)+T[4]+1272893353&4294967295,C=E+(I<<11&4294967295|I>>>21),I=R+(C^E^v)+T[7]+4139469664&4294967295,R=C+(I<<16&4294967295|I>>>16),I=v+(R^C^E)+T[10]+3200236656&4294967295,v=R+(I<<23&4294967295|I>>>9),I=E+(v^R^C)+T[13]+681279174&4294967295,E=v+(I<<4&4294967295|I>>>28),I=C+(E^v^R)+T[0]+3936430074&4294967295,C=E+(I<<11&4294967295|I>>>21),I=R+(C^E^v)+T[3]+3572445317&4294967295,R=C+(I<<16&4294967295|I>>>16),I=v+(R^C^E)+T[6]+76029189&4294967295,v=R+(I<<23&4294967295|I>>>9),I=E+(v^R^C)+T[9]+3654602809&4294967295,E=v+(I<<4&4294967295|I>>>28),I=C+(E^v^R)+T[12]+3873151461&4294967295,C=E+(I<<11&4294967295|I>>>21),I=R+(C^E^v)+T[15]+530742520&4294967295,R=C+(I<<16&4294967295|I>>>16),I=v+(R^C^E)+T[2]+3299628645&4294967295,v=R+(I<<23&4294967295|I>>>9),I=E+(R^(v|~C))+T[0]+4096336452&4294967295,E=v+(I<<6&4294967295|I>>>26),I=C+(v^(E|~R))+T[7]+1126891415&4294967295,C=E+(I<<10&4294967295|I>>>22),I=R+(E^(C|~v))+T[14]+2878612391&4294967295,R=C+(I<<15&4294967295|I>>>17),I=v+(C^(R|~E))+T[5]+4237533241&4294967295,v=R+(I<<21&4294967295|I>>>11),I=E+(R^(v|~C))+T[12]+1700485571&4294967295,E=v+(I<<6&4294967295|I>>>26),I=C+(v^(E|~R))+T[3]+2399980690&4294967295,C=E+(I<<10&4294967295|I>>>22),I=R+(E^(C|~v))+T[10]+4293915773&4294967295,R=C+(I<<15&4294967295|I>>>17),I=v+(C^(R|~E))+T[1]+2240044497&4294967295,v=R+(I<<21&4294967295|I>>>11),I=E+(R^(v|~C))+T[8]+1873313359&4294967295,E=v+(I<<6&4294967295|I>>>26),I=C+(v^(E|~R))+T[15]+4264355552&4294967295,C=E+(I<<10&4294967295|I>>>22),I=R+(E^(C|~v))+T[6]+2734768916&4294967295,R=C+(I<<15&4294967295|I>>>17),I=v+(C^(R|~E))+T[13]+1309151649&4294967295,v=R+(I<<21&4294967295|I>>>11),I=E+(R^(v|~C))+T[4]+4149444226&4294967295,E=v+(I<<6&4294967295|I>>>26),I=C+(v^(E|~R))+T[11]+3174756917&4294967295,C=E+(I<<10&4294967295|I>>>22),I=R+(E^(C|~v))+T[2]+718787259&4294967295,R=C+(I<<15&4294967295|I>>>17),I=v+(C^(R|~E))+T[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+C&4294967295}r.prototype.u=function(A,E){E===void 0&&(E=A.length);for(var v=E-this.blockSize,T=this.B,R=this.h,C=0;C<E;){if(R==0)for(;C<=v;)s(this,A,C),C+=this.blockSize;if(typeof A=="string"){for(;C<E;)if(T[R++]=A.charCodeAt(C++),R==this.blockSize){s(this,T),R=0;break}}else for(;C<E;)if(T[R++]=A[C++],R==this.blockSize){s(this,T),R=0;break}}this.h=R,this.o+=E},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;var v=8*this.o;for(E=A.length-8;E<A.length;++E)A[E]=v&255,v/=256;for(this.u(A),A=Array(16),E=v=0;4>E;++E)for(var T=0;32>T;T+=8)A[v++]=this.g[E]>>>T&255;return A};function i(A,E){var v=l;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=E(A)}function a(A,E){this.h=E;for(var v=[],T=!0,R=A.length-1;0<=R;R--){var C=A[R]|0;T&&C==E||(v[R]=C,T=!1)}this.g=v}var l={};function c(A){return-128<=A&&128>A?i(A,function(E){return new a([E|0],0>E?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return g;if(0>A)return P(h(-A));for(var E=[],v=1,T=0;A>=v;T++)E[T]=A/v|0,v*=4294967296;return new a(E,0)}function d(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return P(d(A.substring(1),E));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(E,8)),T=g,R=0;R<A.length;R+=8){var C=Math.min(8,A.length-R),I=parseInt(A.substring(R,R+C),E);8>C?(C=h(Math.pow(E,C)),T=T.j(C).add(h(I))):(T=T.j(v),T=T.add(h(I)))}return T}var g=c(0),p=c(1),y=c(16777216);n=a.prototype,n.m=function(){if(w(this))return-P(this).m();for(var A=0,E=1,v=0;v<this.g.length;v++){var T=this.i(v);A+=(0<=T?T:4294967296+T)*E,E*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(_(this))return"0";if(w(this))return"-"+P(this).toString(A);for(var E=h(Math.pow(A,6)),v=this,T="";;){var R=K(v,E).g;v=x(v,R.j(E));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=R,_(v))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function _(A){if(A.h!=0)return!1;for(var E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function w(A){return A.h==-1}n.l=function(A){return A=x(this,A),w(A)?-1:_(A)?0:1};function P(A){for(var E=A.g.length,v=[],T=0;T<E;T++)v[T]=~A.g[T];return new a(v,~A.h).add(p)}n.abs=function(){return w(this)?P(this):this},n.add=function(A){for(var E=Math.max(this.g.length,A.g.length),v=[],T=0,R=0;R<=E;R++){var C=T+(this.i(R)&65535)+(A.i(R)&65535),I=(C>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);T=I>>>16,C&=65535,I&=65535,v[R]=I<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function x(A,E){return A.add(P(E))}n.j=function(A){if(_(this)||_(A))return g;if(w(this))return w(A)?P(this).j(P(A)):P(P(this).j(A));if(w(A))return P(this.j(P(A)));if(0>this.l(y)&&0>A.l(y))return h(this.m()*A.m());for(var E=this.g.length+A.g.length,v=[],T=0;T<2*E;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<A.g.length;R++){var C=this.i(T)>>>16,I=this.i(T)&65535,et=A.i(R)>>>16,Z=A.i(R)&65535;v[2*T+2*R]+=I*Z,U(v,2*T+2*R),v[2*T+2*R+1]+=C*Z,U(v,2*T+2*R+1),v[2*T+2*R+1]+=I*et,U(v,2*T+2*R+1),v[2*T+2*R+2]+=C*et,U(v,2*T+2*R+2)}for(T=0;T<E;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=E;T<2*E;T++)v[T]=0;return new a(v,0)};function U(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function M(A,E){this.g=A,this.h=E}function K(A,E){if(_(E))throw Error("division by zero");if(_(A))return new M(g,g);if(w(A))return E=K(P(A),E),new M(P(E.g),P(E.h));if(w(E))return E=K(A,P(E)),new M(P(E.g),E.h);if(30<A.g.length){if(w(A)||w(E))throw Error("slowDivide_ only works with positive integers.");for(var v=p,T=E;0>=T.l(A);)v=G(v),T=G(T);var R=B(v,1),C=B(T,1);for(T=B(T,2),v=B(v,2);!_(T);){var I=C.add(T);0>=I.l(A)&&(R=R.add(v),C=I),T=B(T,1),v=B(v,1)}return E=x(A,R.j(E)),new M(R,E)}for(R=g;0<=A.l(E);){for(v=Math.max(1,Math.floor(A.m()/E.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=h(v),I=C.j(E);w(I)||0<I.l(A);)v-=T,C=h(v),I=C.j(E);_(C)&&(C=p),R=R.add(C),A=x(A,I)}return new M(R,A)}n.A=function(A){return K(this,A).h},n.and=function(A){for(var E=Math.max(this.g.length,A.g.length),v=[],T=0;T<E;T++)v[T]=this.i(T)&A.i(T);return new a(v,this.h&A.h)},n.or=function(A){for(var E=Math.max(this.g.length,A.g.length),v=[],T=0;T<E;T++)v[T]=this.i(T)|A.i(T);return new a(v,this.h|A.h)},n.xor=function(A){for(var E=Math.max(this.g.length,A.g.length),v=[],T=0;T<E;T++)v[T]=this.i(T)^A.i(T);return new a(v,this.h^A.h)};function G(A){for(var E=A.g.length+1,v=[],T=0;T<E;T++)v[T]=A.i(T)<<1|A.i(T-1)>>>31;return new a(v,A.h)}function B(A,E){var v=E>>5;E%=32;for(var T=A.g.length-v,R=[],C=0;C<T;C++)R[C]=0<E?A.i(C+v)>>>E|A.i(C+v+1)<<32-E:A.i(C+v);return new a(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Yu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,xn=a}).apply(typeof Xl<"u"?Xl:typeof self<"u"?self:typeof window<"u"?window:{});var Ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zu,th,zr,eh,js,Eo,nh,rh,sh;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ns=="object"&&Ns];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=e(this);function s(o,u){if(u)t:{var f=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var k=o[m];if(!(k in f))break t;f=f[k]}o=o[o.length-1],m=f[o],u=u(m),u!=m&&u!=null&&t(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,m=!1,k={next:function(){if(!m&&f<o.length){var O=f++;return{value:u(O,o[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function g(o,u,f){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,m),o.apply(u,k)}}return function(){return o.apply(u,arguments)}}function p(o,u,f){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,p.apply(null,arguments)}function y(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function _(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(m,k,O){for(var $=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)$[Ct-2]=arguments[Ct];return u.prototype[k].apply(m,$)}}function w(o){const u=o.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=o[m];return f}return[]}function P(o,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const k=o.length||0,O=m.length||0;o.length=k+O;for(let $=0;$<O;$++)o[k+$]=m[$]}else o.push(m)}}class x{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(o){return/^[\s\xa0]*$/.test(o)}function M(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var G=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function B(o,u,f){for(const m in o)u.call(f,o[m],m,o)}function A(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function E(o){const u={};for(const f in o)u[f]=o[f];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(f in m)o[f]=m[f];for(let O=0;O<v.length;O++)f=v[O],Object.prototype.hasOwnProperty.call(m,f)&&(o[f]=m[f])}}function R(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function C(o){l.setTimeout(()=>{throw o},0)}function I(){var o=ct;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class et{constructor(){this.h=this.g=null}add(u,f){const m=Z.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Z=new x(()=>new st,o=>o.reset());class st{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let X,rt=!1,ct=new et,ht=()=>{const o=l.Promise.resolve(void 0);X=()=>{o.then(at)}};var at=()=>{for(var o;o=I();){try{o.h.call(o.g)}catch(f){C(f)}var u=Z;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}rt=!1};function Et(){this.s=this.s,this.C=this.C}Et.prototype.s=!1,Et.prototype.ma=function(){this.s||(this.s=!0,this.N())},Et.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var Kt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function qt(o,u){if(dt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(G){t:{try{K(u.nodeName);var k=!0;break t}catch{}k=!1}k||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Fe[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&qt.aa.h.call(this)}}_(qt,dt);var Fe={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ye="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Pt(o,u,f,m,k){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=k,this.key=++Y,this.da=this.fa=!1}function Mt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function oe(o){this.src=o,this.g={},this.h=0}oe.prototype.add=function(o,u,f,m,k){var O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);var $=te(o,u,m,k);return-1<$?(u=o[$],f||(u.fa=!1)):(u=new Pt(u,this.src,O,!!m,k),u.fa=f,o.push(u)),u};function Ee(o,u){var f=u.type;if(f in o.g){var m=o.g[f],k=Array.prototype.indexOf.call(m,u,void 0),O;(O=0<=k)&&Array.prototype.splice.call(m,k,1),O&&(Mt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function te(o,u,f,m){for(var k=0;k<o.length;++k){var O=o[k];if(!O.da&&O.listener==u&&O.capture==!!f&&O.ha==m)return k}return-1}var an="closure_lm_"+(1e6*Math.random()|0),ke={};function br(o,u,f,m,k){if(Array.isArray(u)){for(var O=0;O<u.length;O++)br(o,u[O],f,m,k);return null}return f=cn(f),o&&o[ye]?o.K(u,f,h(m)?!!m.capture:!!m,k):Xt(o,u,f,!1,m,k)}function Xt(o,u,f,m,k,O){if(!u)throw Error("Invalid event type");var $=h(k)?!!k.capture:!!k,Ct=vt(o);if(Ct||(o[an]=Ct=new oe(o)),f=Ct.add(u,f,m,$,O),f.proxy)return f;if(m=ln(),f.proxy=m,m.src=o,m.listener=f,o.addEventListener)Kt||(k=$),k===void 0&&(k=!1),o.addEventListener(u.toString(),m,k);else if(o.attachEvent)o.attachEvent(Qt(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function ln(){function o(f){return u.call(o.src,o.listener,f)}const u=ft;return o}function jt(o,u,f,m,k){if(Array.isArray(u))for(var O=0;O<u.length;O++)jt(o,u[O],f,m,k);else m=h(m)?!!m.capture:!!m,f=cn(f),o&&o[ye]?(o=o.i,u=String(u).toString(),u in o.g&&(O=o.g[u],f=te(O,f,m,k),-1<f&&(Mt(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete o.g[u],o.h--)))):o&&(o=vt(o))&&(u=o.g[u.toString()],o=-1,u&&(o=te(u,f,m,k)),(f=-1<o?u[o]:null)&&zt(f))}function zt(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ye])Ee(u.i,o);else{var f=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(f,m,o.capture):u.detachEvent?u.detachEvent(Qt(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=vt(u))?(Ee(f,o),f.h==0&&(f.src=null,u[an]=null)):Mt(o)}}}function Qt(o){return o in ke?ke[o]:ke[o]="on"+o}function ft(o,u){if(o.da)o=!0;else{u=new qt(u,this);var f=o.listener,m=o.ha||o.src;o.fa&&zt(o),o=f.call(m,u)}return o}function vt(o){return o=o[an],o instanceof oe?o:null}var St="__closure_events_fn_"+(1e9*Math.random()>>>0);function cn(o){return typeof o=="function"?o:(o[St]||(o[St]=function(u){return o.handleEvent(u)}),o[St])}function Vt(){Et.call(this),this.i=new oe(this),this.M=this,this.F=null}_(Vt,Et),Vt.prototype[ye]=!0,Vt.prototype.removeEventListener=function(o,u,f,m){jt(this,o,u,f,m)};function Ot(o,u){var f,m=o.F;if(m)for(f=[];m;m=m.F)f.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new dt(u,o);else if(u instanceof dt)u.target=u.target||o;else{var k=u;u=new dt(m,o),T(u,k)}if(k=!0,f)for(var O=f.length-1;0<=O;O--){var $=u.g=f[O];k=Cn($,m,!0,u)&&k}if($=u.g=o,k=Cn($,m,!0,u)&&k,k=Cn($,m,!1,u)&&k,f)for(O=0;O<f.length;O++)$=u.g=f[O],k=Cn($,m,!1,u)&&k}Vt.prototype.N=function(){if(Vt.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],m=0;m<f.length;m++)Mt(f[m]);delete o.g[u],o.h--}}this.F=null},Vt.prototype.K=function(o,u,f,m){return this.i.add(String(o),u,!1,f,m)},Vt.prototype.L=function(o,u,f,m){return this.i.add(String(o),u,!0,f,m)};function Cn(o,u,f,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,O=0;O<u.length;++O){var $=u[O];if($&&!$.da&&$.capture==f){var Ct=$.listener,ee=$.ha||$.src;$.fa&&Ee(o.i,$),k=Ct.call(ee,m)!==!1&&k}}return k&&!m.defaultPrevented}function Jn(o,u,f){if(typeof o=="function")f&&(o=p(o,f));else if(o&&typeof o.handleEvent=="function")o=p(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ge(o){o.g=Jn(()=>{o.g=null,o.i&&(o.i=!1,Ge(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Rr extends Et{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sr(o){Et.call(this),this.h=o,this.g={}}_(Sr,Et);var ka=[];function Da(o){B(o.g,function(u,f){this.g.hasOwnProperty(f)&&zt(u)},o),o.g={}}Sr.prototype.N=function(){Sr.aa.N.call(this),Da(this)},Sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ui=l.JSON.stringify,yd=l.JSON.parse,Ed=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Fi(){}Fi.prototype.h=null;function Va(o){return o.h||(o.h=o.i())}function Na(){}var Cr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bi(){dt.call(this,"d")}_(Bi,dt);function qi(){dt.call(this,"c")}_(qi,dt);var Pn={},Oa=null;function vs(){return Oa=Oa||new Vt}Pn.La="serverreachability";function Ma(o){dt.call(this,Pn.La,o)}_(Ma,dt);function Pr(o){const u=vs();Ot(u,new Ma(u))}Pn.STAT_EVENT="statevent";function La(o,u){dt.call(this,Pn.STAT_EVENT,o),this.stat=u}_(La,dt);function ge(o){const u=vs();Ot(u,new La(u,o))}Pn.Ma="timingevent";function xa(o,u){dt.call(this,Pn.Ma,o),this.size=u}_(xa,dt);function kr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Dr(){this.g=!0}Dr.prototype.xa=function(){this.g=!1};function Id(o,u,f,m,k,O){o.info(function(){if(o.g)if(O)for(var $="",Ct=O.split("&"),ee=0;ee<Ct.length;ee++){var yt=Ct[ee].split("=");if(1<yt.length){var ae=yt[0];yt=yt[1];var le=ae.split("_");$=2<=le.length&&le[1]=="type"?$+(ae+"="+yt+"&"):$+(ae+"=redacted&")}}else $=null;else $=O;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+u+`
`+f+`
`+$})}function Td(o,u,f,m,k,O,$){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+u+`
`+f+`
`+O+" "+$})}function Xn(o,u,f,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ad(o,f)+(m?" "+m:"")})}function wd(o,u){o.info(function(){return"TIMEOUT: "+u})}Dr.prototype.info=function(){};function Ad(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var m=f[o];if(!(2>m.length)){var k=m[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var $=1;$<k.length;$++)k[$]=""}}}}return Ui(f)}catch{return u}}var ys={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ua={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ji;function Es(){}_(Es,Fi),Es.prototype.g=function(){return new XMLHttpRequest},Es.prototype.i=function(){return{}},ji=new Es;function un(o,u,f,m){this.j=o,this.i=u,this.l=f,this.R=m||1,this.U=new Sr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fa}function Fa(){this.i=null,this.g="",this.h=!1}var Ba={},zi={};function $i(o,u,f){o.L=1,o.v=As(We(u)),o.m=f,o.P=!0,qa(o,null)}function qa(o,u){o.F=Date.now(),Is(o),o.A=We(o.v);var f=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),el(f.i,"t",m),o.C=0,f=o.j.J,o.h=new Fa,o.g=yl(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Rr(p(o.Y,o,o.g),o.O)),u=o.U,f=o.g,m=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(ka[0]=k.toString()),k=ka);for(var O=0;O<k.length;O++){var $=br(f,k[O],m||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=o.H?E(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Pr(),Id(o.i,o.u,o.A,o.l,o.R,o.m)}un.prototype.ca=function(o){o=o.target;const u=this.M;u&&Ke(o)==3?u.j():this.Y(o)},un.prototype.Y=function(o){try{if(o==this.g)t:{const le=Ke(this.g);var u=this.g.Ba();const tr=this.g.Z();if(!(3>le)&&(le!=3||this.g&&(this.h.h||this.g.oa()||ll(this.g)))){this.J||le!=4||u==7||(u==8||0>=tr?Pr(3):Pr(2)),Hi(this);var f=this.g.Z();this.X=f;e:if(ja(this)){var m=ll(this.g);o="";var k=m.length,O=Ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kn(this),Vr(this);var $="";break e}this.h.i=new l.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(O&&u==k-1)});m.length=0,this.h.g+=o,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,Td(this.i,this.u,this.A,this.l,this.R,le,f),this.o){if(this.T&&!this.K){e:{if(this.g){var Ct,ee=this.g;if((Ct=ee.g?ee.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Ct)){var yt=Ct;break e}}yt=null}if(f=yt)Xn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gi(this,f);else{this.o=!1,this.s=3,ge(12),kn(this),Vr(this);break t}}if(this.P){f=!0;let De;for(;!this.J&&this.C<$.length;)if(De=bd(this,$),De==zi){le==4&&(this.s=4,ge(14),f=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(De==Ba){this.s=4,ge(15),Xn(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Xn(this.i,this.l,De,null),Gi(this,De);if(ja(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||$.length!=0||this.h.h||(this.s=1,ge(16),f=!1),this.o=this.o&&f,!f)Xn(this.i,this.l,$,"[Invalid Chunked Response]"),kn(this),Vr(this);else if(0<$.length&&!this.W){this.W=!0;var ae=this.j;ae.g==this&&ae.ba&&!ae.M&&(ae.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Yi(ae),ae.M=!0,ge(11))}}else Xn(this.i,this.l,$,null),Gi(this,$);le==4&&kn(this),this.o&&!this.J&&(le==4?ml(this.j,this):(this.o=!1,Is(this)))}else jd(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,ge(12)):(this.s=0,ge(13)),kn(this),Vr(this)}}}catch{}finally{}};function ja(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function bd(o,u){var f=o.C,m=u.indexOf(`
`,f);return m==-1?zi:(f=Number(u.substring(f,m)),isNaN(f)?Ba:(m+=1,m+f>u.length?zi:(u=u.slice(m,m+f),o.C=m+f,u)))}un.prototype.cancel=function(){this.J=!0,kn(this)};function Is(o){o.S=Date.now()+o.I,za(o,o.I)}function za(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=kr(p(o.ba,o),u)}function Hi(o){o.B&&(l.clearTimeout(o.B),o.B=null)}un.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(wd(this.i,this.A),this.L!=2&&(Pr(),ge(17)),kn(this),this.s=2,Vr(this)):za(this,this.S-o)};function Vr(o){o.j.G==0||o.J||ml(o.j,o)}function kn(o){Hi(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Da(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Gi(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Wi(f.h,o))){if(!o.K&&Wi(f.h,o)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){t:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ps(f),Ss(f);else break t;Xi(f),ge(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=kr(p(f.Za,f),6e3));if(1>=Ga(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Vn(f,11)}else if((o.K||f.g==o)&&Ps(f),!U(u))for(k=f.Da.g.parse(u),u=0;u<k.length;u++){let yt=k[u];if(f.T=yt[0],yt=yt[1],f.G==2)if(yt[0]=="c"){f.K=yt[1],f.ia=yt[2];const ae=yt[3];ae!=null&&(f.la=ae,f.j.info("VER="+f.la));const le=yt[4];le!=null&&(f.Aa=le,f.j.info("SVER="+f.Aa));const tr=yt[5];tr!=null&&typeof tr=="number"&&0<tr&&(m=1.5*tr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const De=o.g;if(De){const Ds=De.g?De.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ds){var O=m.h;O.g||Ds.indexOf("spdy")==-1&&Ds.indexOf("quic")==-1&&Ds.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Ki(O,O.h),O.h=null))}if(m.D){const Zi=De.g?De.g.getResponseHeader("X-HTTP-Session-Id"):null;Zi&&(m.ya=Zi,Nt(m.I,m.D,Zi))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var $=o;if(m.qa=vl(m,m.J?m.ia:null,m.W),$.K){Wa(m.h,$);var Ct=$,ee=m.L;ee&&(Ct.I=ee),Ct.B&&(Hi(Ct),Is(Ct)),m.g=$}else fl(m);0<f.i.length&&Cs(f)}else yt[0]!="stop"&&yt[0]!="close"||Vn(f,7);else f.G==3&&(yt[0]=="stop"||yt[0]=="close"?yt[0]=="stop"?Vn(f,7):Ji(f):yt[0]!="noop"&&f.l&&f.l.ta(yt),f.v=0)}}Pr(4)}catch{}}var Rd=class{constructor(o,u){this.g=o,this.map=u}};function $a(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ha(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ga(o){return o.h?1:o.g?o.g.size:0}function Wi(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ki(o,u){o.g?o.g.add(u):o.h=u}function Wa(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}$a.prototype.cancel=function(){if(this.i=Ka(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ka(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return w(o.i)}function Sd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,m=0;m<f;m++)u.push(o[m]);return u}u=[],f=0;for(m in o)u[f++]=o[m];return u}function Cd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const m in o)u[f++]=m;return u}}}function Qa(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Cd(o),m=Sd(o),k=m.length,O=0;O<k;O++)u.call(void 0,m[O],f&&f[O],o)}var Ja=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pd(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var m=o[f].indexOf("="),k=null;if(0<=m){var O=o[f].substring(0,m);k=o[f].substring(m+1)}else O=o[f];u(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Dn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Dn){this.h=o.h,Ts(this,o.j),this.o=o.o,this.g=o.g,ws(this,o.s),this.l=o.l;var u=o.i,f=new Mr;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Xa(this,f),this.m=o.m}else o&&(u=String(o).match(Ja))?(this.h=!1,Ts(this,u[1]||"",!0),this.o=Nr(u[2]||""),this.g=Nr(u[3]||"",!0),ws(this,u[4]),this.l=Nr(u[5]||"",!0),Xa(this,u[6]||"",!0),this.m=Nr(u[7]||"")):(this.h=!1,this.i=new Mr(null,this.h))}Dn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Or(u,Ya,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Or(u,Ya,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Or(f,f.charAt(0)=="/"?Vd:Dd,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Or(f,Od)),o.join("")};function We(o){return new Dn(o)}function Ts(o,u,f){o.j=f?Nr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ws(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Xa(o,u,f){u instanceof Mr?(o.i=u,Md(o.i,o.h)):(f||(u=Or(u,Nd)),o.i=new Mr(u,o.h))}function Nt(o,u,f){o.i.set(u,f)}function As(o){return Nt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Nr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Or(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,kd),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function kd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ya=/[#\/\?@]/g,Dd=/[#\?:]/g,Vd=/[#\?]/g,Nd=/[#\?@]/g,Od=/#/g;function Mr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function hn(o){o.g||(o.g=new Map,o.h=0,o.i&&Pd(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Mr.prototype,n.add=function(o,u){hn(this),this.i=null,o=Yn(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Za(o,u){hn(o),u=Yn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function tl(o,u){return hn(o),u=Yn(o,u),o.g.has(u)}n.forEach=function(o,u){hn(this),this.g.forEach(function(f,m){f.forEach(function(k){o.call(u,k,m,this)},this)},this)},n.na=function(){hn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const k=o[m];for(let O=0;O<k.length;O++)f.push(u[m])}return f},n.V=function(o){hn(this);let u=[];if(typeof o=="string")tl(this,o)&&(u=u.concat(this.g.get(Yn(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return hn(this),this.i=null,o=Yn(this,o),tl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function el(o,u,f){Za(o,u),0<f.length&&(o.i=null,o.g.set(Yn(o,u),w(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const O=encodeURIComponent(String(m)),$=this.V(m);for(m=0;m<$.length;m++){var k=O;$[m]!==""&&(k+="="+encodeURIComponent(String($[m]))),o.push(k)}}return this.i=o.join("&")};function Yn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Md(o,u){u&&!o.j&&(hn(o),o.i=null,o.g.forEach(function(f,m){var k=m.toLowerCase();m!=k&&(Za(this,m),el(this,k,f))},o)),o.j=u}function Ld(o,u){const f=new Dr;if(l.Image){const m=new Image;m.onload=y(dn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=y(dn,f,"TestLoadImage: error",!1,u,m),m.onabort=y(dn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=y(dn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function xd(o,u){const f=new Dr,m=new AbortController,k=setTimeout(()=>{m.abort(),dn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(O=>{clearTimeout(k),O.ok?dn(f,"TestPingServer: ok",!0,u):dn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),dn(f,"TestPingServer: error",!1,u)})}function dn(o,u,f,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(f)}catch{}}function Ud(){this.g=new Ed}function Fd(o,u,f){const m=f||"";try{Qa(o,function(k,O){let $=k;h(k)&&($=Ui(k)),u.push(m+O+"="+encodeURIComponent($))})}catch(k){throw u.push(m+"type="+encodeURIComponent("_badmap")),k}}function Lr(o){this.l=o.Ub||null,this.j=o.eb||!1}_(Lr,Fi),Lr.prototype.g=function(){return new bs(this.l,this.j)},Lr.prototype.i=function(o){return function(){return o}}({});function bs(o,u){Vt.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(bs,Vt),n=bs.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ur(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ur(this)),this.g&&(this.readyState=3,Ur(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function nl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?xr(this):Ur(this),this.readyState==3&&nl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,xr(this))},n.Qa=function(o){this.g&&(this.response=o,xr(this))},n.ga=function(){this.g&&xr(this)};function xr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ur(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Ur(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(bs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function rl(o){let u="";return B(o,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Qi(o,u,f){t:{for(m in f){var m=!1;break t}m=!0}m||(f=rl(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Nt(o,u,f))}function xt(o){Vt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(xt,Vt);var Bd=/^https?$/i,qd=["POST","PUT"];n=xt.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ji.g(),this.v=this.o?Va(this.o):Va(ji),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(O){sl(this,O);return}if(o=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)f.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())f.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),k=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qd,u,void 0))||m||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of f)this.g.setRequestHeader(O,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{al(this),this.u=!0,this.g.send(o),this.u=!1}catch(O){sl(this,O)}};function sl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,il(o),Rs(o)}function il(o){o.A||(o.A=!0,Ot(o,"complete"),Ot(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ot(this,"complete"),Ot(this,"abort"),Rs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rs(this,!0)),xt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ol(this):this.bb())},n.bb=function(){ol(this)};function ol(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ke(o)!=4||o.Z()!=2)){if(o.u&&Ke(o)==4)Jn(o.Ea,0,o);else if(Ot(o,"readystatechange"),Ke(o)==4){o.h=!1;try{const $=o.Z();t:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var f;if(!(f=u)){var m;if(m=$===0){var k=String(o.D).match(Ja)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),m=!Bd.test(k?k.toLowerCase():"")}f=m}if(f)Ot(o,"complete"),Ot(o,"success");else{o.m=6;try{var O=2<Ke(o)?o.g.statusText:""}catch{O=""}o.l=O+" ["+o.Z()+"]",il(o)}}finally{Rs(o)}}}}function Rs(o,u){if(o.g){al(o);const f=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ot(o,"ready");try{f.onreadystatechange=m}catch{}}}function al(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ke(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ke(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),yd(u)}};function ll(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function jd(o){const u={};o=(o.g&&2<=Ke(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(U(o[m]))continue;var f=R(o[m]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=u[k]||[];u[k]=O,O.push(f)}A(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fr(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function cl(o){this.Aa=0,this.i=[],this.j=new Dr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fr("baseRetryDelayMs",5e3,o),this.cb=Fr("retryDelaySeedMs",1e4,o),this.Wa=Fr("forwardChannelMaxRetries",2,o),this.wa=Fr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new $a(o&&o.concurrentRequestLimit),this.Da=new Ud,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=cl.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,m){ge(0),this.W=o,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=vl(this,null,this.W),Cs(this)};function Ji(o){if(ul(o),o.G==3){var u=o.U++,f=We(o.I);if(Nt(f,"SID",o.K),Nt(f,"RID",u),Nt(f,"TYPE","terminate"),Br(o,f),u=new un(o,o.j,u),u.L=2,u.v=As(We(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=yl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Is(u)}_l(o)}function Ss(o){o.g&&(Yi(o),o.g.cancel(),o.g=null)}function ul(o){Ss(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ps(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Cs(o){if(!Ha(o.h)&&!o.s){o.s=!0;var u=o.Ga;X||ht(),rt||(X(),rt=!0),ct.add(u,o),o.B=0}}function zd(o,u){return Ga(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=kr(p(o.Ga,o,u),gl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new un(this,this.j,o);let O=this.o;if(this.S&&(O?(O=E(O),T(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)t:{for(var u=0,f=0;f<this.i.length;f++){e:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break t}if(u===4096||f===this.i.length-1){u=f+1;break t}}u=1e3}else u=1e3;u=dl(this,k,u),f=We(this.I),Nt(f,"RID",o),Nt(f,"CVER",22),this.D&&Nt(f,"X-HTTP-Session-Id",this.D),Br(this,f),O&&(this.O?u="headers="+encodeURIComponent(String(rl(O)))+"&"+u:this.m&&Qi(f,this.m,O)),Ki(this.h,k),this.Ua&&Nt(f,"TYPE","init"),this.P?(Nt(f,"$req",u),Nt(f,"SID","null"),k.T=!0,$i(k,f,null)):$i(k,f,u),this.G=2}}else this.G==3&&(o?hl(this,o):this.i.length==0||Ha(this.h)||hl(this))};function hl(o,u){var f;u?f=u.l:f=o.U++;const m=We(o.I);Nt(m,"SID",o.K),Nt(m,"RID",f),Nt(m,"AID",o.T),Br(o,m),o.m&&o.o&&Qi(m,o.m,o.o),f=new un(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=dl(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ki(o.h,f),$i(f,m,u)}function Br(o,u){o.H&&B(o.H,function(f,m){Nt(u,m,f)}),o.l&&Qa({},function(f,m){Nt(u,m,f)})}function dl(o,u,f){f=Math.min(o.i.length,f);var m=o.l?p(o.l.Na,o.l,o):null;t:{var k=o.i;let O=-1;for(;;){const $=["count="+f];O==-1?0<f?(O=k[0].g,$.push("ofs="+O)):O=0:$.push("ofs="+O);let Ct=!0;for(let ee=0;ee<f;ee++){let yt=k[ee].g;const ae=k[ee].map;if(yt-=O,0>yt)O=Math.max(0,k[ee].g-100),Ct=!1;else try{Fd(ae,$,"req"+yt+"_")}catch{m&&m(ae)}}if(Ct){m=$.join("&");break t}}}return o=o.i.splice(0,f),u.D=o,m}function fl(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;X||ht(),rt||(X(),rt=!0),ct.add(u,o),o.v=0}}function Xi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=kr(p(o.Fa,o),gl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,pl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=kr(p(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ge(10),Ss(this),pl(this))};function Yi(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function pl(o){o.g=new un(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=We(o.qa);Nt(u,"RID","rpc"),Nt(u,"SID",o.K),Nt(u,"AID",o.T),Nt(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Nt(u,"TO",o.ja),Nt(u,"TYPE","xmlhttp"),Br(o,u),o.m&&o.o&&Qi(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=As(We(u)),f.m=null,f.P=!0,qa(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Ss(this),Xi(this),ge(19))};function Ps(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ml(o,u){var f=null;if(o.g==u){Ps(o),Yi(o),o.g=null;var m=2}else if(Wi(o.h,u))f=u.D,Wa(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var k=o.B;m=vs(),Ot(m,new xa(m,f)),Cs(o)}else fl(o);else if(k=u.s,k==3||k==0&&0<u.X||!(m==1&&zd(o,u)||m==2&&Xi(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),k){case 1:Vn(o,5);break;case 4:Vn(o,10);break;case 3:Vn(o,6);break;default:Vn(o,2)}}}function gl(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Vn(o,u){if(o.j.info("Error code "+u),u==2){var f=p(o.fb,o),m=o.Xa;const k=!m;m=new Dn(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ts(m,"https"),As(m),k?Ld(m.toString(),f):xd(m.toString(),f)}else ge(2);o.G=0,o.l&&o.l.sa(u),_l(o),ul(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ge(2)):(this.j.info("Failed to ping google.com"),ge(1))};function _l(o){if(o.G=0,o.ka=[],o.l){const u=Ka(o.h);(u.length!=0||o.i.length!=0)&&(P(o.ka,u),P(o.ka,o.i),o.h.i.length=0,w(o.i),o.i.length=0),o.l.ra()}}function vl(o,u,f){var m=f instanceof Dn?We(f):new Dn(f);if(m.g!="")u&&(m.g=u+"."+m.g),ws(m,m.s);else{var k=l.location;m=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var O=new Dn(null);m&&Ts(O,m),u&&(O.g=u),k&&ws(O,k),f&&(O.l=f),m=O}return f=o.D,u=o.ya,f&&u&&Nt(m,f,u),Nt(m,"VER",o.la),Br(o,m),m}function yl(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new xt(new Lr({eb:f})):new xt(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function El(){}n=El.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ks(){}ks.prototype.g=function(o,u){return new we(o,u)};function we(o,u){Vt.call(this),this.g=new cl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!U(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Zn(this)}_(we,Vt),we.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},we.prototype.close=function(){Ji(this.g)},we.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Ui(o),o=f);u.i.push(new Rd(u.Ya++,o)),u.G==3&&Cs(u)},we.prototype.N=function(){this.g.l=null,delete this.j,Ji(this.g),delete this.g,we.aa.N.call(this)};function Il(o){Bi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const f in u){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}_(Il,Bi);function Tl(){qi.call(this),this.status=1}_(Tl,qi);function Zn(o){this.g=o}_(Zn,El),Zn.prototype.ua=function(){Ot(this.g,"a")},Zn.prototype.ta=function(o){Ot(this.g,new Il(o))},Zn.prototype.sa=function(o){Ot(this.g,new Tl)},Zn.prototype.ra=function(){Ot(this.g,"b")},ks.prototype.createWebChannel=ks.prototype.g,we.prototype.send=we.prototype.o,we.prototype.open=we.prototype.m,we.prototype.close=we.prototype.close,sh=function(){return new ks},rh=function(){return vs()},nh=Pn,Eo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ys.NO_ERROR=0,ys.TIMEOUT=8,ys.HTTP_ERROR=6,js=ys,Ua.COMPLETE="complete",eh=Ua,Na.EventType=Cr,Cr.OPEN="a",Cr.CLOSE="b",Cr.ERROR="c",Cr.MESSAGE="d",Vt.prototype.listen=Vt.prototype.K,zr=Na,th=Lr,xt.prototype.listenOnce=xt.prototype.L,xt.prototype.getLastError=xt.prototype.Ka,xt.prototype.getLastErrorCode=xt.prototype.Ba,xt.prototype.getStatus=xt.prototype.Z,xt.prototype.getResponseJson=xt.prototype.Oa,xt.prototype.getResponseText=xt.prototype.oa,xt.prototype.send=xt.prototype.ea,xt.prototype.setWithCredentials=xt.prototype.Ha,Zu=xt}).apply(typeof Ns<"u"?Ns:typeof self<"u"?self:typeof window<"u"?window:{});const Yl="@firebase/firestore";/**
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
 */class ue{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ue.UNAUTHENTICATED=new ue(null),ue.GOOGLE_CREDENTIALS=new ue("google-credentials-uid"),ue.FIRST_PARTY=new ue("first-party-uid"),ue.MOCK_USER=new ue("mock-user");/**
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
 */const jn=new Lo("@firebase/firestore");function qr(){return jn.logLevel}function Q(n,...t){if(jn.logLevel<=gt.DEBUG){const e=t.map(Xo);jn.debug(`Firestore (${Ir}): ${n}`,...e)}}function en(n,...t){if(jn.logLevel<=gt.ERROR){const e=t.map(Xo);jn.error(`Firestore (${Ir}): ${n}`,...e)}}function hr(n,...t){if(jn.logLevel<=gt.WARN){const e=t.map(Xo);jn.warn(`Firestore (${Ir}): ${n}`,...e)}}function Xo(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function ot(n="Unexpected state"){const t=`FIRESTORE (${Ir}) INTERNAL ASSERTION FAILED: `+n;throw en(t),new Error(t)}function Dt(n,t){n||ot()}function ut(n,t){return n}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends sn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class In{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class ih{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Cg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ue.UNAUTHENTICATED))}shutdown(){}}class Pg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class kg{constructor(t){this.t=t,this.currentUser=ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let i=new In;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new In,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new In)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Dt(typeof r.accessToken=="string"),new ih(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Dt(t===null||typeof t=="string"),new ue(t)}}class Dg{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Vg{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Dg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ng{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Og{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Dt(typeof e.token=="string"),this.R=e.token,new Ng(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Mg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class oh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Mg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%t.length))}return r}}function It(n,t){return n<t?-1:n>t?1:0}function dr(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class Jt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Jt.fromMillis(Date.now())}static fromDate(t){return Jt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Jt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?It(this.nanoseconds,t.nanoseconds):It(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class lt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new lt(t)}static min(){return new lt(new Jt(0,0))}static max(){return new lt(new Jt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Yr{constructor(t,e,r){e===void 0?e=0:e>t.length&&ot(),r===void 0?r=t.length-e:r>t.length-e&&ot(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Yr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Yr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=t.get(s),a=e.get(s);if(i<a)return-1;if(i>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class kt extends Yr{construct(t,e,r){return new kt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new kt(e)}static emptyPath(){return new kt([])}}const Lg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class re extends Yr{construct(t,e,r){return new re(t,e,r)}static isValidIdentifier(t){return Lg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),re.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new re(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new re(e)}static emptyPath(){return new re([])}}/**
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
 */class J{constructor(t){this.path=t}static fromPath(t){return new J(kt.fromString(t))}static fromName(t){return new J(kt.fromString(t).popFirst(5))}static empty(){return new J(kt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&kt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return kt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new J(new kt(t.slice()))}}function xg(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=lt.fromTimestamp(r===1e9?new Jt(e+1,0):new Jt(e,r));return new wn(s,J.empty(),t)}function Ug(n){return new wn(n.readTime,n.key,-1)}class wn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new wn(lt.min(),J.empty(),-1)}static max(){return new wn(lt.max(),J.empty(),-1)}}function Fg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=J.comparator(n.documentKey,t.documentKey),e!==0?e:It(n.largestBatchId,t.largestBatchId))}/**
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
 */const Bg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function us(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==Bg)throw n;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ot(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof F?e:F.resolve(e)}catch(e){return F.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):F.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):F.reject(e)}static resolve(t){return new F((e,r)=>{e(t)})}static reject(t){return new F((e,r)=>{r(t)})}static waitFor(t){return new F((e,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&e()},c=>r(c))}),a=!0,i===s&&e()})}static or(t){let e=F.resolve(!1);for(const r of t)e=e.next(s=>s?F.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,i)=>{r.push(e.call(this,s,i))}),this.waitFor(r)}static mapArray(t,e){return new F((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;e(t[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,e){return new F((r,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):r()};i()})}}function jg(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function hs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Yo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Yo.oe=-1;function yi(n){return n==null}function ni(n){return n===0&&1/n==-1/0}function zg(n){return typeof n=="number"&&Number.isInteger(n)&&!ni(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Zl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Wn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ah(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Lt{constructor(t,e){this.comparator=t,this.root=e||ne.EMPTY}insert(t,e){return new Lt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ne.BLACK,null,null))}remove(t){return new Lt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ne.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Os(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Os(this.root,t,this.comparator,!1)}getReverseIterator(){return new Os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Os(this.root,t,this.comparator,!0)}}class Os{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ne{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??ne.RED,this.left=s??ne.EMPTY,this.right=i??ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new ne(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ne.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ne.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ot();const t=this.left.check();if(t!==this.right.check())throw ot();return t+(this.isRed()?0:1)}}ne.EMPTY=null,ne.RED=!0,ne.BLACK=!1;ne.EMPTY=new class{constructor(){this.size=0}get key(){throw ot()}get value(){throw ot()}get color(){throw ot()}get left(){throw ot()}get right(){throw ot()}copy(t,e,r,s,i){return this}insert(t,e,r){return new ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class se{constructor(t){this.comparator=t,this.data=new Lt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new tc(this.data.getIterator())}getIteratorFrom(t){return new tc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof se)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new se(this.comparator);return e.data=t,e}}class tc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ae{constructor(t){this.fields=t,t.sort(re.comparator)}static empty(){return new Ae([])}unionWith(t){let e=new se(re.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ae(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return dr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class lh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class me{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lh("Invalid base64 string: "+i):i}}(t);return new me(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new me(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return It(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}me.EMPTY_BYTE_STRING=new me("");const $g=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(n){if(Dt(!!n),typeof n=="string"){let t=0;const e=$g.exec(n);if(Dt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Gt(n.seconds),nanos:Gt(n.nanos)}}function Gt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function zn(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
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
 */function Ei(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Zo(n){const t=n.mapValue.fields.__previous_value__;return Ei(t)?Zo(t):t}function Zr(n){const t=An(n.mapValue.fields.__local_write_time__.timestampValue);return new Jt(t.seconds,t.nanos)}/**
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
 */class Hg{constructor(t,e,r,s,i,a,l,c,h){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class ts{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ts("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ts&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ms={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $n(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ei(n)?4:Gg(n)?9007199254740991:10:ot()}function He(n,t){if(n===t)return!0;const e=$n(n);if(e!==$n(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Zr(n).isEqual(Zr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=An(s.timestampValue),l=An(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,i){return zn(s.bytesValue).isEqual(zn(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,i){return Gt(s.geoPointValue.latitude)===Gt(i.geoPointValue.latitude)&&Gt(s.geoPointValue.longitude)===Gt(i.geoPointValue.longitude)}(n,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Gt(s.integerValue)===Gt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Gt(s.doubleValue),l=Gt(i.doubleValue);return a===l?ni(a)===ni(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return dr(n.arrayValue.values||[],t.arrayValue.values||[],He);case 10:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Zl(a)!==Zl(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!He(a[c],l[c])))return!1;return!0}(n,t);default:return ot()}}function es(n,t){return(n.values||[]).find(e=>He(e,t))!==void 0}function fr(n,t){if(n===t)return 0;const e=$n(n),r=$n(t);if(e!==r)return It(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return It(n.booleanValue,t.booleanValue);case 2:return function(i,a){const l=Gt(i.integerValue||i.doubleValue),c=Gt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,t);case 3:return ec(n.timestampValue,t.timestampValue);case 4:return ec(Zr(n),Zr(t));case 5:return It(n.stringValue,t.stringValue);case 6:return function(i,a){const l=zn(i),c=zn(a);return l.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=It(l[h],c[h]);if(d!==0)return d}return It(l.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,a){const l=It(Gt(i.latitude),Gt(a.latitude));return l!==0?l:It(Gt(i.longitude),Gt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(i,a){const l=i.values||[],c=a.values||[];for(let h=0;h<l.length&&h<c.length;++h){const d=fr(l[h],c[h]);if(d)return d}return It(l.length,c.length)}(n.arrayValue,t.arrayValue);case 10:return function(i,a){if(i===Ms.mapValue&&a===Ms.mapValue)return 0;if(i===Ms.mapValue)return 1;if(a===Ms.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let g=0;g<c.length&&g<d.length;++g){const p=It(c[g],d[g]);if(p!==0)return p;const y=fr(l[c[g]],h[d[g]]);if(y!==0)return y}return It(c.length,d.length)}(n.mapValue,t.mapValue);default:throw ot()}}function ec(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return It(n,t);const e=An(n),r=An(t),s=It(e.seconds,r.seconds);return s!==0?s:It(e.nanos,r.nanos)}function pr(n){return Io(n)}function Io(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=An(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return zn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return J.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=Io(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Io(e.fields[a])}`;return s+"}"}(n.mapValue):ot()}function ri(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function To(n){return!!n&&"integerValue"in n}function ta(n){return!!n&&"arrayValue"in n}function nc(n){return!!n&&"nullValue"in n}function rc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function zs(n){return!!n&&"mapValue"in n}function Wr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Wn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Wr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Wr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Gg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ie{constructor(t){this.value=t}static empty(){return new Ie({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!zs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Wr(e)}setAll(t){let e=re.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const c=this.getFieldsMap(e);this.applyChanges(c,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=Wr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());zs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return He(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];zs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Wn(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Ie(Wr(this.value))}}function ch(n){const t=[];return Wn(n.fields,(e,r)=>{const s=new re([e]);if(zs(r)){const i=ch(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ae(t)}/**
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
 */class he{constructor(t,e,r,s,i,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new he(t,0,lt.min(),lt.min(),lt.min(),Ie.empty(),0)}static newFoundDocument(t,e,r,s){return new he(t,1,e,lt.min(),r,s,0)}static newNoDocument(t,e){return new he(t,2,e,lt.min(),lt.min(),Ie.empty(),0)}static newUnknownDocument(t,e){return new he(t,3,e,lt.min(),lt.min(),Ie.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(lt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ie.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=lt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof he&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new he(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mr{constructor(t,e){this.position=t,this.inclusive=e}}function sc(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],a=n.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(a.referenceValue),e.key):r=fr(a,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ic(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!He(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ns{constructor(t,e="asc"){this.field=t,this.dir=e}}function Wg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class uh{}class Wt extends uh{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Qg(t,e,r):e==="array-contains"?new Yg(t,r):e==="in"?new Zg(t,r):e==="not-in"?new t_(t,r):e==="array-contains-any"?new e_(t,r):new Wt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Jg(t,r):new Xg(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(fr(e,this.value)):e!==null&&$n(this.value)===$n(e)&&this.matchesComparison(fr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return ot()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ne extends uh{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ne(t,e)}matches(t){return hh(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hh(n){return n.op==="and"}function dh(n){return Kg(n)&&hh(n)}function Kg(n){for(const t of n.filters)if(t instanceof Ne)return!1;return!0}function wo(n){if(n instanceof Wt)return n.field.canonicalString()+n.op.toString()+pr(n.value);if(dh(n))return n.filters.map(t=>wo(t)).join(",");{const t=n.filters.map(e=>wo(e)).join(",");return`${n.op}(${t})`}}function fh(n,t){return n instanceof Wt?function(r,s){return s instanceof Wt&&r.op===s.op&&r.field.isEqual(s.field)&&He(r.value,s.value)}(n,t):n instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&fh(a,s.filters[l]),!0):!1}(n,t):void ot()}function ph(n){return n instanceof Wt?function(e){return`${e.field.canonicalString()} ${e.op} ${pr(e.value)}`}(n):n instanceof Ne?function(e){return e.op.toString()+" {"+e.getFilters().map(ph).join(" ,")+"}"}(n):"Filter"}class Qg extends Wt{constructor(t,e,r){super(t,e,r),this.key=J.fromName(r.referenceValue)}matches(t){const e=J.comparator(t.key,this.key);return this.matchesComparison(e)}}class Jg extends Wt{constructor(t,e){super(t,"in",e),this.keys=mh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Xg extends Wt{constructor(t,e){super(t,"not-in",e),this.keys=mh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function mh(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>J.fromName(r.referenceValue))}class Yg extends Wt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ta(e)&&es(e.arrayValue,this.value)}}class Zg extends Wt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&es(this.value.arrayValue,e)}}class t_ extends Wt{constructor(t,e){super(t,"not-in",e)}matches(t){if(es(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!es(this.value.arrayValue,e)}}class e_ extends Wt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ta(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>es(this.value.arrayValue,r))}}/**
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
 */class n_{constructor(t,e=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function oc(n,t=null,e=[],r=[],s=null,i=null,a=null){return new n_(n,t,e,r,s,i,a)}function ea(n){const t=ut(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>wo(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),yi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>pr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>pr(r)).join(",")),t.ue=e}return t.ue}function na(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Wg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!fh(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ic(n.startAt,t.startAt)&&ic(n.endAt,t.endAt)}function Ao(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Kn{constructor(t,e=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function r_(n,t,e,r,s,i,a,l){return new Kn(n,t,e,r,s,i,a,l)}function gh(n){return new Kn(n)}function ac(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ra(n){return n.collectionGroup!==null}function ar(n){const t=ut(n);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new se(re.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new ns(i,r))}),e.has(re.keyField().canonicalString())||t.ce.push(new ns(re.keyField(),r))}return t.ce}function qe(n){const t=ut(n);return t.le||(t.le=s_(t,ar(n))),t.le}function s_(n,t){if(n.limitType==="F")return oc(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ns(s.field,i)});const e=n.endAt?new mr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new mr(n.startAt.position,n.startAt.inclusive):null;return oc(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function bo(n,t){const e=n.filters.concat([t]);return new Kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function si(n,t,e){return new Kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ii(n,t){return na(qe(n),qe(t))&&n.limitType===t.limitType}function _h(n){return`${ea(qe(n))}|lt:${n.limitType}`}function er(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ph(s)).join(", ")}]`),yi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>pr(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>pr(s)).join(",")),`Target(${r})`}(qe(n))}; limitType=${n.limitType})`}function Ti(n,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,t)&&function(r,s){for(const i of ar(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=sc(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,ar(r),s)||r.endAt&&!function(a,l,c){const h=sc(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,ar(r),s))}(n,t)}function i_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vh(n){return(t,e)=>{let r=!1;for(const s of ar(n)){const i=o_(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function o_(n,t,e){const r=n.field.isKeyField()?J.comparator(t.key,e.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?fr(c,h):ot()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ot()}}/**
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
 */class Tr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Wn(this.inner,(e,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return ah(this.inner)}size(){return this.innerSize}}/**
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
 */const a_=new Lt(J.comparator);function nn(){return a_}const yh=new Lt(J.comparator);function $r(...n){let t=yh;for(const e of n)t=t.insert(e.key,e);return t}function Eh(n){let t=yh;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Mn(){return Kr()}function Ih(){return Kr()}function Kr(){return new Tr(n=>n.toString(),(n,t)=>n.isEqual(t))}const l_=new Lt(J.comparator),c_=new se(J.comparator);function mt(...n){let t=c_;for(const e of n)t=t.add(e);return t}const u_=new se(It);function h_(){return u_}/**
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
 */function Th(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ni(t)?"-0":t}}function wh(n){return{integerValue:""+n}}function d_(n,t){return zg(t)?wh(t):Th(n,t)}/**
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
 */class wi{constructor(){this._=void 0}}function f_(n,t,e){return n instanceof ii?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ei(i)&&(i=Zo(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(e,t):n instanceof rs?bh(n,t):n instanceof ss?Rh(n,t):function(s,i){const a=Ah(s,i),l=lc(a)+lc(s.Pe);return To(a)&&To(s.Pe)?wh(l):Th(s.serializer,l)}(n,t)}function p_(n,t,e){return n instanceof rs?bh(n,t):n instanceof ss?Rh(n,t):e}function Ah(n,t){return n instanceof oi?function(r){return To(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class ii extends wi{}class rs extends wi{constructor(t){super(),this.elements=t}}function bh(n,t){const e=Sh(t);for(const r of n.elements)e.some(s=>He(s,r))||e.push(r);return{arrayValue:{values:e}}}class ss extends wi{constructor(t){super(),this.elements=t}}function Rh(n,t){let e=Sh(t);for(const r of n.elements)e=e.filter(s=>!He(s,r));return{arrayValue:{values:e}}}class oi extends wi{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function lc(n){return Gt(n.integerValue||n.doubleValue)}function Sh(n){return ta(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function m_(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof rs&&s instanceof rs||r instanceof ss&&s instanceof ss?dr(r.elements,s.elements,He):r instanceof oi&&s instanceof oi?He(r.Pe,s.Pe):r instanceof ii&&s instanceof ii}(n.transform,t.transform)}class g_{constructor(t,e){this.version=t,this.transformResults=e}}class be{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new be}static exists(t){return new be(void 0,t)}static updateTime(t){return new be(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function $s(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ai{}function Ch(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new sa(n.key,be.none()):new ds(n.key,n.data,be.none());{const e=n.data,r=Ie.empty();let s=new se(re.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Sn(n.key,r,new Ae(s.toArray()),be.none())}}function __(n,t,e){n instanceof ds?function(s,i,a){const l=s.value.clone(),c=uc(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Sn?function(s,i,a){if(!$s(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=uc(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Ph(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Qr(n,t,e,r){return n instanceof ds?function(i,a,l,c){if(!$s(i.precondition,a))return l;const h=i.value.clone(),d=hc(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,t,e,r):n instanceof Sn?function(i,a,l,c){if(!$s(i.precondition,a))return l;const h=hc(i.fieldTransforms,c,a),d=a.data;return d.setAll(Ph(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,t,e,r):function(i,a,l){return $s(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function v_(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=Ah(r.transform,s||null);i!=null&&(e===null&&(e=Ie.empty()),e.set(r.field,i))}return e||null}function cc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&dr(r,s,(i,a)=>m_(i,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ds extends Ai{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sn extends Ai{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ph(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function uc(n,t,e){const r=new Map;Dt(n.length===e.length);for(let s=0;s<e.length;s++){const i=n[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,p_(a,l,e[s]))}return r}function hc(n,t,e){const r=new Map;for(const s of n){const i=s.transform,a=e.data.field(s.field);r.set(s.field,f_(i,a,t))}return r}class sa extends Ai{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class y_ extends Ai{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class E_{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&__(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Qr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Qr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ih();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=e.has(s.key)?null:l;const c=Ch(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(lt.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),mt())}isEqual(t){return this.batchId===t.batchId&&dr(this.mutations,t.mutations,(e,r)=>cc(e,r))&&dr(this.baseMutations,t.baseMutations,(e,r)=>cc(e,r))}}class ia{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Dt(t.mutations.length===r.length);let s=function(){return l_}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ia(t,e,r,s)}}/**
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
 */class I_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class T_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var $t,_t;function w_(n){switch(n){default:return ot();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function kh(n){if(n===void 0)return en("GRPC error has no .code"),L.UNKNOWN;switch(n){case $t.OK:return L.OK;case $t.CANCELLED:return L.CANCELLED;case $t.UNKNOWN:return L.UNKNOWN;case $t.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case $t.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case $t.INTERNAL:return L.INTERNAL;case $t.UNAVAILABLE:return L.UNAVAILABLE;case $t.UNAUTHENTICATED:return L.UNAUTHENTICATED;case $t.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case $t.NOT_FOUND:return L.NOT_FOUND;case $t.ALREADY_EXISTS:return L.ALREADY_EXISTS;case $t.PERMISSION_DENIED:return L.PERMISSION_DENIED;case $t.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case $t.ABORTED:return L.ABORTED;case $t.OUT_OF_RANGE:return L.OUT_OF_RANGE;case $t.UNIMPLEMENTED:return L.UNIMPLEMENTED;case $t.DATA_LOSS:return L.DATA_LOSS;default:return ot()}}(_t=$t||($t={}))[_t.OK=0]="OK",_t[_t.CANCELLED=1]="CANCELLED",_t[_t.UNKNOWN=2]="UNKNOWN",_t[_t.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_t[_t.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_t[_t.NOT_FOUND=5]="NOT_FOUND",_t[_t.ALREADY_EXISTS=6]="ALREADY_EXISTS",_t[_t.PERMISSION_DENIED=7]="PERMISSION_DENIED",_t[_t.UNAUTHENTICATED=16]="UNAUTHENTICATED",_t[_t.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_t[_t.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_t[_t.ABORTED=10]="ABORTED",_t[_t.OUT_OF_RANGE=11]="OUT_OF_RANGE",_t[_t.UNIMPLEMENTED=12]="UNIMPLEMENTED",_t[_t.INTERNAL=13]="INTERNAL",_t[_t.UNAVAILABLE=14]="UNAVAILABLE",_t[_t.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function A_(){return new TextEncoder}/**
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
 */const b_=new xn([4294967295,4294967295],0);function dc(n){const t=A_().encode(n),e=new Yu;return e.update(t),new Uint8Array(e.digest())}function fc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new xn([e,r],0),new xn([s,i],0)]}class oa{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Hr(`Invalid padding: ${e}`);if(r<0)throw new Hr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Hr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Hr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=xn.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(xn.fromNumber(r)));return s.compare(b_)===1&&(s=new xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=dc(t),[r,s]=fc(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new oa(i,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=dc(t),[r,s]=fc(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class bi{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,fs.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new bi(lt.min(),s,new Lt(It),nn(),mt())}}class fs{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new fs(r,e,mt(),mt(),mt())}}/**
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
 */class Hs{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Dh{constructor(t,e){this.targetId=t,this.me=e}}class Vh{constructor(t,e,r=me.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class pc{constructor(){this.fe=0,this.ge=gc(),this.pe=me.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=mt(),e=mt(),r=mt();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:ot()}}),new fs(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=gc()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Dt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class R_{constructor(t){this.Le=t,this.Be=new Map,this.ke=nn(),this.qe=mc(),this.Qe=new Lt(It)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:ot()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const i=s.target;if(Ao(i))if(r===0){const a=new J(i.path);this.Ue(e,a,he.newNoDocument(a,lt.min()))}else Dt(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),c=l?this.Xe(l,t,a):1;if(c!==0){this.je(e);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,h)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let a,l;try{a=zn(r).toUint8Array()}catch(c){if(c instanceof lh)return hr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new oa(a,s,i)}catch(c){return hr(c instanceof Hr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,i,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&Ao(l.target)){const c=new J(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,he.newNoDocument(c,t))}i.be&&(e.set(a,i.Ce()),i.ve())}});let r=mt();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(t));const s=new bi(t,e,this.Qe,this.ke,r);return this.ke=nn(),this.qe=mc(),this.Qe=new Lt(It),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new pc,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new se(It),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||Q("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new pc),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function mc(){return new Lt(J.comparator)}function gc(){return new Lt(J.comparator)}const S_={asc:"ASCENDING",desc:"DESCENDING"},C_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},P_={and:"AND",or:"OR"};class k_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ro(n,t){return n.useProto3Json||yi(t)?t:{value:t}}function ai(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Nh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function D_(n,t){return ai(n,t.toTimestamp())}function je(n){return Dt(!!n),lt.fromTimestamp(function(e){const r=An(e);return new Jt(r.seconds,r.nanos)}(n))}function aa(n,t){return So(n,t).canonicalString()}function So(n,t){const e=function(s){return new kt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Oh(n){const t=kt.fromString(n);return Dt(Fh(t)),t}function Co(n,t){return aa(n.databaseId,t.path)}function ao(n,t){const e=Oh(t);if(e.get(1)!==n.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new J(Lh(e))}function Mh(n,t){return aa(n.databaseId,t)}function V_(n){const t=Oh(n);return t.length===4?kt.emptyPath():Lh(t)}function Po(n){return new kt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Lh(n){return Dt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function _c(n,t,e){return{name:Co(n,t),fields:e.value.mapValue.fields}}function N_(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ot()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Dt(d===void 0||typeof d=="string"),me.fromBase64String(d||"")):(Dt(d===void 0||d instanceof Buffer||d instanceof Uint8Array),me.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const d=h.code===void 0?L.UNKNOWN:kh(h.code);return new H(d,h.message||"")}(a);e=new Vh(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ao(n,r.document.name),i=je(r.document.updateTime),a=r.document.createTime?je(r.document.createTime):lt.min(),l=new Ie({mapValue:{fields:r.document.fields}}),c=he.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];e=new Hs(h,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ao(n,r.document),i=r.readTime?je(r.readTime):lt.min(),a=he.newNoDocument(s,i),l=r.removedTargetIds||[];e=new Hs([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ao(n,r.document),i=r.removedTargetIds||[];e=new Hs([],i,s,null)}else{if(!("filter"in t))return ot();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new T_(s,i),l=r.targetId;e=new Dh(l,a)}}return e}function O_(n,t){let e;if(t instanceof ds)e={update:_c(n,t.key,t.value)};else if(t instanceof sa)e={delete:Co(n,t.key)};else if(t instanceof Sn)e={update:_c(n,t.key,t.data),updateMask:z_(t.fieldMask)};else{if(!(t instanceof y_))return ot();e={verify:Co(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof ii)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof rs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ss)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof oi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw ot()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:D_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ot()}(n,t.precondition)),e}function M_(n,t){return n&&n.length>0?(Dt(t!==void 0),n.map(e=>function(s,i){let a=s.updateTime?je(s.updateTime):je(i);return a.isEqual(lt.min())&&(a=je(i)),new g_(a,s.transformResults||[])}(e,t))):[]}function L_(n,t){return{documents:[Mh(n,t.path)]}}function x_(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Mh(n,s);const i=function(h){if(h.length!==0)return Uh(Ne.create(h,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(p){return{field:nr(p.field),direction:B_(p.dir)}}(d))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ro(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:e,parent:s}}function U_(n){let t=V_(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Dt(r===1);const d=e.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];e.where&&(i=function(g){const p=xh(g);return p instanceof Ne&&dh(p)?p.getFilters():[p]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(p=>function(_){return new ns(rr(_.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(e.orderBy));let l=null;e.limit&&(l=function(g){let p;return p=typeof g=="object"?g.value:g,yi(p)?null:p}(e.limit));let c=null;e.startAt&&(c=function(g){const p=!!g.before,y=g.values||[];return new mr(y,p)}(e.startAt));let h=null;return e.endAt&&(h=function(g){const p=!g.before,y=g.values||[];return new mr(y,p)}(e.endAt)),r_(t,s,a,i,l,"F",c,h)}function F_(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ot()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function xh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=rr(e.unaryFilter.field);return Wt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=rr(e.unaryFilter.field);return Wt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=rr(e.unaryFilter.field);return Wt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=rr(e.unaryFilter.field);return Wt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ot()}}(n):n.fieldFilter!==void 0?function(e){return Wt.create(rr(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ot()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ne.create(e.compositeFilter.filters.map(r=>xh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ot()}}(e.compositeFilter.op))}(n):ot()}function B_(n){return S_[n]}function q_(n){return C_[n]}function j_(n){return P_[n]}function nr(n){return{fieldPath:n.canonicalString()}}function rr(n){return re.fromServerFormat(n.fieldPath)}function Uh(n){return n instanceof Wt?function(e){if(e.op==="=="){if(rc(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NAN"}};if(nc(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(rc(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NOT_NAN"}};if(nc(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nr(e.field),op:q_(e.op),value:e.value}}}(n):n instanceof Ne?function(e){const r=e.getFilters().map(s=>Uh(s));return r.length===1?r[0]:{compositeFilter:{op:j_(e.op),filters:r}}}(n):ot()}function z_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Fh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class _n{constructor(t,e,r,s,i=lt.min(),a=lt.min(),l=me.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new _n(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class $_{constructor(t){this.ct=t}}function H_(n){const t=U_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?si(t,t.limit,"L"):t}/**
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
 */class G_{constructor(){this._n=new W_}addToCollectionParentIndex(t,e){return this._n.add(e),F.resolve()}getCollectionParents(t,e){return F.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return F.resolve()}deleteFieldIndex(t,e){return F.resolve()}deleteAllFieldIndexes(t){return F.resolve()}createTargetIndexes(t,e){return F.resolve()}getDocumentsMatchingTarget(t,e){return F.resolve(null)}getIndexType(t,e){return F.resolve(0)}getFieldIndexes(t,e){return F.resolve([])}getNextCollectionGroupToUpdate(t){return F.resolve(null)}getMinOffset(t,e){return F.resolve(wn.min())}getMinOffsetFromCollectionGroup(t,e){return F.resolve(wn.min())}updateCollectionGroup(t,e,r){return F.resolve()}updateIndexEntries(t,e){return F.resolve()}}class W_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new se(kt.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new se(kt.comparator)).toArray()}}/**
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
 */class gr{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new gr(0)}static Ln(){return new gr(-1)}}/**
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
 */class K_{constructor(){this.changes=new Tr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,he.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?F.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Q_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class J_{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Qr(r.mutation,s,Ae.empty(),Jt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,mt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=mt()){const s=Mn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(i=>{let a=$r();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Mn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,mt()))}populateOverlays(t,e,r){const s=[];return r.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let i=nn();const a=Kr(),l=function(){return Kr()}();return e.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Sn)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Qr(d.mutation,h,d.mutation.getFieldMask(),Jt.now())):a.set(h.key,Ae.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),e.forEach((h,d)=>{var g;return l.set(h,new Q_(d,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(t,e){const r=Kr();let s=new Lt((a,l)=>a-l),i=mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=e.get(c);if(h===null)return;let d=r.get(c)||Ae.empty();d=l.applyToLocalView(h,d),r.set(c,d);const g=(s.get(l.batchId)||mt()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,g=Ih();d.forEach(p=>{if(!i.has(p)){const y=Ch(e.get(p),r.get(p));y!==null&&g.set(p,y),i=i.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,g))}return F.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return J.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ra(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):F.resolve(Mn());let l=-1,c=i;return a.next(h=>F.forEach(h,(d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(d)?F.resolve():this.remoteDocumentCache.getEntry(t,d).next(p=>{c=c.insert(d,p)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,c,h,mt())).next(d=>({batchId:l,changes:Eh(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new J(e)).next(r=>{let s=$r();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let a=$r();return this.indexManager.getCollectionParents(t,i).next(l=>F.forEach(l,c=>{const h=function(g,p){return new Kn(p,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(d=>{d.forEach((g,p)=>{a=a.insert(g,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,he.newInvalidDocument(d)))});let l=$r();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Qr(d.mutation,h,Ae.empty(),Jt.now()),Ti(e,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class X_{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return F.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:je(s.createTime)}}(e)),F.resolve()}getNamedQuery(t,e){return F.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:H_(s.bundledQuery),readTime:je(s.readTime)}}(e)),F.resolve()}}/**
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
 */class Y_{constructor(){this.overlays=new Lt(J.comparator),this.hr=new Map}getOverlay(t,e){return F.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Mn();return F.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,i)=>{this.ht(t,e,i)}),F.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),F.resolve()}getOverlaysForCollection(t,e,r){const s=Mn(),i=e.length+1,a=new J(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return F.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new Lt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Mn(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Mn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return F.resolve(l)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new I_(e,r));let i=this.hr.get(e);i===void 0&&(i=mt(),this.hr.set(e,i)),this.hr.set(e,i.add(r.key))}}/**
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
 */class la{constructor(){this.Pr=new se(Yt.Ir),this.Tr=new se(Yt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new Yt(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new Yt(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new J(new kt([])),r=new Yt(e,t),s=new Yt(e,t+1),i=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new J(new kt([])),r=new Yt(e,t),s=new Yt(e,t+1);let i=mt();return this.Tr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new Yt(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Yt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return J.comparator(t.key,e.key)||It(t.pr,e.pr)}static Er(t,e){return It(t.pr,e.pr)||J.comparator(t.key,e.key)}}/**
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
 */class Z_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new se(Yt.Ir)}checkEmpty(t){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new E_(i,e,r,s);this.mutationQueue.push(a);for(const l of s)this.wr=this.wr.add(new Yt(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(t,e){return F.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Yt(e,0),s=new Yt(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],a=>{const l=this.Sr(a.pr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new se(It);return e.forEach(s=>{const i=new Yt(s,0),a=new Yt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],l=>{r=r.add(l.pr)})}),F.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const a=new Yt(new J(i),0);let l=new se(It);return this.wr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.pr)),!0)},a),F.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Dt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return F.forEach(e.mutations,s=>{const i=new Yt(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new Yt(e,0),s=this.wr.firstAfterOrEqual(r);return F.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,F.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class tv{constructor(t){this.vr=t,this.docs=function(){return new Lt(J.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return F.resolve(r?r.document.mutableCopy():he.newInvalidDocument(e))}getEntries(t,e){let r=nn();return e.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():he.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=nn();const a=e.path,l=new J(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Fg(Ug(d),r)<=0||(s.has(d.key)||Ti(e,d))&&(i=i.insert(d.key,d.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(t,e,r,s){ot()}Fr(t,e){return F.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new ev(this)}getSize(t){return F.resolve(this.size)}}class ev extends K_{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),F.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class nv{constructor(t){this.persistence=t,this.Mr=new Tr(e=>ea(e),na),this.lastRemoteSnapshotVersion=lt.min(),this.highestTargetId=0,this.Or=0,this.Nr=new la,this.targetCount=0,this.Lr=gr.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),F.resolve()}getLastRemoteSnapshotVersion(t){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return F.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),F.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new gr(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,F.resolve()}updateTargetData(t,e){return this.qn(e),F.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,F.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(t){return F.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return F.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),F.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),F.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),F.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return F.resolve(r)}containsKey(t,e){return F.resolve(this.Nr.containsKey(e))}}/**
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
 */class rv{constructor(t,e){this.Br={},this.overlays={},this.kr=new Yo(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new nv(this),this.indexManager=new G_,this.remoteDocumentCache=function(s){return new tv(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new $_(e),this.$r=new X_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Y_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new Z_(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){Q("MemoryPersistence","Starting transaction:",t);const s=new sv(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,e){return F.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class sv extends qg{constructor(t){super(),this.currentSequenceNumber=t}}class ca{constructor(t){this.persistence=t,this.zr=new la,this.jr=null}static Hr(t){return new ca(t)}get Jr(){if(this.jr)return this.jr;throw ot()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),F.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),F.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Jr,r=>{const s=J.fromPath(r);return this.Yr(t,s).next(i=>{i||e.removeEntry(s,lt.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return F.or([()=>F.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class ua{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=mt(),s=mt();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ua(t,e.fromCache,r,s)}}/**
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
 */class iv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class ov{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return uf()?8:jg(ie())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.ji(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(t,e,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new iv;return this.Ji(t,e,a).next(l=>{if(i.result=l,this.Ui)return this.Yi(t,e,a,l.size)})}).next(()=>i.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(qr()<=gt.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",er(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),F.resolve()):(qr()<=gt.DEBUG&&Q("QueryEngine","Query:",er(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(qr()<=gt.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",er(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,qe(e))):F.resolve())}ji(t,e){if(ac(e))return F.resolve(null);let r=qe(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=si(e,null,"F"),r=qe(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=mt(...i);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const h=this.Zi(e,l);return this.Xi(e,h,a,c.readTime)?this.ji(t,si(e,null,"F")):this.es(t,h,e,c)}))})))}Hi(t,e,r,s){return ac(e)||s.isEqual(lt.min())?F.resolve(null):this.zi.getDocuments(t,r).next(i=>{const a=this.Zi(e,i);return this.Xi(e,a,r,s)?F.resolve(null):(qr()<=gt.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),er(e)),this.es(t,a,e,xg(s,-1)).next(l=>l))})}Zi(t,e){let r=new se(vh(t));return e.forEach((s,i)=>{Ti(t,i)&&(r=r.add(i))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,e,r){return qr()<=gt.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",er(e)),this.zi.getDocumentsMatchingQuery(t,e,wn.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class av{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new Lt(It),this.rs=new Tr(i=>ea(i),na),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new J_(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function lv(n,t,e,r){return new av(n,t,e,r)}async function Bh(n,t){const e=ut(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=mt();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(r,c).next(h=>({us:h,removedBatchIds:a,addedBatchIds:l}))})})}function cv(n,t){const e=ut(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=e.os.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const g=h.batch,p=g.keys();let y=F.resolve();return p.forEach(_=>{y=y.next(()=>d.getEntry(c,_)).next(w=>{const P=h.docVersions.get(_);Dt(P!==null),w.version.compareTo(P)<0&&(g.applyToRemoteDocument(w,h),w.isValidDocument()&&(w.setReadTime(h.commitVersion),d.addEntry(w)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(e,r,t,i).next(()=>i.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=mt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function qh(n){const t=ut(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function uv(n,t){const e=ut(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const l=[];t.targetChanges.forEach((d,g)=>{const p=s.get(g);if(!p)return;l.push(e.Qr.removeMatchingKeys(i,d.removedDocuments,g).next(()=>e.Qr.addMatchingKeys(i,d.addedDocuments,g)));let y=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?y=y.withResumeToken(me.EMPTY_BYTE_STRING,lt.min()).withLastLimboFreeSnapshotVersion(lt.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(g,y),function(w,P,x){return w.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,y,d)&&l.push(e.Qr.updateTargetData(i,y))});let c=nn(),h=mt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(hv(i,a,t.documentUpdates).next(d=>{c=d.cs,h=d.ls})),!r.isEqual(lt.min())){const d=e.Qr.getLastRemoteSnapshotVersion(i).next(g=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return F.waitFor(l).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(e.ns=s,i))}function hv(n,t,e){let r=mt(),s=mt();return e.forEach(i=>r=r.add(i)),t.getEntries(n,r).next(i=>{let a=nn();return e.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(lt.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):Q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{cs:a,ls:s}})}function dv(n,t){const e=ut(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function fv(n,t){const e=ut(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(i=>i?(s=i,F.resolve(s)):e.Qr.allocateTargetId(r).next(a=>(s=new _n(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function ko(n,t,e){const r=ut(n),s=r.ns.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!hs(a))throw a;Q("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function vc(n,t,e){const r=ut(n);let s=lt.min(),i=mt();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const g=ut(c),p=g.rs.get(d);return p!==void 0?F.resolve(g.ns.get(p)):g.Qr.getTargetData(h,d)}(r,a,qe(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?s:lt.min(),e?i:mt())).next(l=>(pv(r,i_(t),l),{documents:l,hs:i})))}function pv(n,t,e){let r=n.ss.get(t)||lt.min();e.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(t,r)}class yc{constructor(){this.activeTargetIds=h_()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mv{constructor(){this.no=new yc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new yc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class gv{io(t){}shutdown(){}}/**
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
 */class Ec{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ls=null;function lo(){return Ls===null?Ls=function(){return 268435456+Math.round(2147483648*Math.random())}():Ls++,"0x"+Ls.toString(16)}/**
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
 */const _v={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class vv{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const ce="WebChannelConnection";class yv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(e,r,s,i,a){const l=lo(),c=this.vo(e,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${e}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,i,a),this.Mo(e,c,h,s).then(d=>(Q("RestConnection",`Received RPC '${e}' ${l}: `,d),d),d=>{throw hr("RestConnection",`RPC '${e}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}xo(e,r,s,i,a,l){return this.Co(e,r,s,i,a)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ir}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>e[a]=i),s&&s.headers.forEach((i,a)=>e[a]=i)}vo(e,r){const s=_v[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const i=lo();return new Promise((a,l)=>{const c=new Zu;c.setWithCredentials(!0),c.listenOnce(eh.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case js.NO_ERROR:const d=c.getResponseJson();Q(ce,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),a(d);break;case js.TIMEOUT:Q(ce,`RPC '${t}' ${i} timed out`),l(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case js.HTTP_ERROR:const g=c.getStatus();if(Q(ce,`RPC '${t}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const y=p==null?void 0:p.error;if(y&&y.status&&y.message){const _=function(P){const x=P.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(x)>=0?x:L.UNKNOWN}(y.status);l(new H(_,y.message))}else l(new H(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new H(L.UNAVAILABLE,"Connection failed."));break;default:ot()}}finally{Q(ce,`RPC '${t}' ${i} completed.`)}});const h=JSON.stringify(s);Q(ce,`RPC '${t}' ${i} sending request:`,s),c.send(e,"POST",h,r,15)})}Oo(t,e,r){const s=lo(),i=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=sh(),l=rh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new th({})),this.Fo(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Q(ce,`Creating RPC '${t}' stream ${s}: ${d}`,c);const g=a.createWebChannel(d,c);let p=!1,y=!1;const _=new vv({lo:P=>{y?Q(ce,`Not sending because RPC '${t}' stream ${s} is closed:`,P):(p||(Q(ce,`Opening RPC '${t}' stream ${s} transport.`),g.open(),p=!0),Q(ce,`RPC '${t}' stream ${s} sending:`,P),g.send(P))},ho:()=>g.close()}),w=(P,x,U)=>{P.listen(x,M=>{try{U(M)}catch(K){setTimeout(()=>{throw K},0)}})};return w(g,zr.EventType.OPEN,()=>{y||(Q(ce,`RPC '${t}' stream ${s} transport opened.`),_.mo())}),w(g,zr.EventType.CLOSE,()=>{y||(y=!0,Q(ce,`RPC '${t}' stream ${s} transport closed`),_.po())}),w(g,zr.EventType.ERROR,P=>{y||(y=!0,hr(ce,`RPC '${t}' stream ${s} transport errored:`,P),_.po(new H(L.UNAVAILABLE,"The operation could not be completed")))}),w(g,zr.EventType.MESSAGE,P=>{var x;if(!y){const U=P.data[0];Dt(!!U);const M=U,K=M.error||((x=M[0])===null||x===void 0?void 0:x.error);if(K){Q(ce,`RPC '${t}' stream ${s} received error:`,K);const G=K.status;let B=function(v){const T=$t[v];if(T!==void 0)return kh(T)}(G),A=K.message;B===void 0&&(B=L.INTERNAL,A="Unknown error status: "+G+" with message "+K.message),y=!0,_.po(new H(B,A)),g.close()}else Q(ce,`RPC '${t}' stream ${s} received:`,U),_.yo(U)}}),w(l,nh.STAT_EVENT,P=>{P.stat===Eo.PROXY?Q(ce,`RPC '${t}' stream ${s} detected buffering proxy`):P.stat===Eo.NOPROXY&&Q(ce,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.fo()},0),_}}function co(){return typeof document<"u"?document:null}/**
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
 */function Ri(n){return new k_(n,!0)}/**
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
 */class jh{constructor(t,e,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class zh{constructor(t,e,r,s,i,a,l,c){this.oi=t,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new jh(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===L.RESOURCE_EXHAUSTED?(en(e.toString()),en("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return Q("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ev extends zh{constructor(t,e,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=N_(this.serializer,t),r=function(i){if(!("targetChange"in i))return lt.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?lt.min():a.readTime?je(a.readTime):lt.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=Po(this.serializer),e.addTarget=function(i,a){let l;const c=a.target;if(l=Ao(c)?{documents:L_(i,c)}:{query:x_(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Nh(i,a.resumeToken);const h=Ro(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(lt.min())>0){l.readTime=ai(i,a.snapshotVersion.toTimestamp());const h=Ro(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=F_(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=Po(this.serializer),e.removeTarget=t,this.i_(e)}}class Iv extends zh{constructor(t,e,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(Dt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=M_(t.writeResults,t.commitTime),r=je(t.commitTime);return this.listener.A_(r,e)}return Dt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Po(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>O_(this.serializer,r))};this.i_(e)}}/**
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
 */class Tv extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(t,So(e,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(L.UNKNOWN,i.toString())})}xo(t,e,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,So(e,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(L.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class wv{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(en(e),this.y_=!1):Q("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Av{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{r.enqueueAndForget(async()=>{Qn(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ut(c);h.M_.add(4),await ps(h),h.N_.set("Unknown"),h.M_.delete(4),await Si(h)}(this))})}),this.N_=new wv(r,s)}}async function Si(n){if(Qn(n))for(const t of n.x_)await t(!0)}async function ps(n){for(const t of n.x_)await t(!1)}function $h(n,t){const e=ut(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),pa(e)?fa(e):wr(e).Xo()&&da(e,t))}function ha(n,t){const e=ut(n),r=wr(e);e.F_.delete(t),r.Xo()&&Hh(e,t),e.F_.size===0&&(r.Xo()?r.n_():Qn(e)&&e.N_.set("Unknown"))}function da(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(lt.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}wr(n).P_(t)}function Hh(n,t){n.L_.xe(t),wr(n).I_(t)}function fa(n){n.L_=new R_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),wr(n).start(),n.N_.w_()}function pa(n){return Qn(n)&&!wr(n).Zo()&&n.F_.size>0}function Qn(n){return ut(n).M_.size===0}function Gh(n){n.L_=void 0}async function bv(n){n.N_.set("Online")}async function Rv(n){n.F_.forEach((t,e)=>{da(n,t)})}async function Sv(n,t){Gh(n),pa(n)?(n.N_.D_(t),fa(n)):n.N_.set("Unknown")}async function Cv(n,t,e){if(n.N_.set("Online"),t instanceof Vh&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.F_.delete(l),s.L_.removeTarget(l))}(n,t)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await li(n,r)}else if(t instanceof Hs?n.L_.Ke(t):t instanceof Dh?n.L_.He(t):n.L_.We(t),!e.isEqual(lt.min()))try{const r=await qh(n.localStore);e.compareTo(r)>=0&&await function(i,a){const l=i.L_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.F_.get(h);d&&i.F_.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.F_.get(c);if(!d)return;i.F_.set(c,d.withResumeToken(me.EMPTY_BYTE_STRING,d.snapshotVersion)),Hh(i,c);const g=new _n(d.target,c,h,d.sequenceNumber);da(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await li(n,r)}}async function li(n,t,e){if(!hs(t))throw t;n.M_.add(1),await ps(n),n.N_.set("Offline"),e||(e=()=>qh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Si(n)})}function Wh(n,t){return t().catch(e=>li(n,e,t))}async function Ci(n){const t=ut(n),e=bn(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Pv(t);)try{const s=await dv(t.localStore,r);if(s===null){t.v_.length===0&&e.n_();break}r=s.batchId,kv(t,s)}catch(s){await li(t,s)}Kh(t)&&Qh(t)}function Pv(n){return Qn(n)&&n.v_.length<10}function kv(n,t){n.v_.push(t);const e=bn(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Kh(n){return Qn(n)&&!bn(n).Zo()&&n.v_.length>0}function Qh(n){bn(n).start()}async function Dv(n){bn(n).V_()}async function Vv(n){const t=bn(n);for(const e of n.v_)t.d_(e.mutations)}async function Nv(n,t,e){const r=n.v_.shift(),s=ia.from(r,t,e);await Wh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ci(n)}async function Ov(n,t){t&&bn(n).E_&&await async function(r,s){if(function(a){return w_(a)&&a!==L.ABORTED}(s.code)){const i=r.v_.shift();bn(r).t_(),await Wh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ci(r)}}(n,t),Kh(n)&&Qh(n)}async function Ic(n,t){const e=ut(n);e.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Qn(e);e.M_.add(3),await ps(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Si(e)}async function Mv(n,t){const e=ut(n);t?(e.M_.delete(2),await Si(e)):t||(e.M_.add(2),await ps(e),e.N_.set("Unknown"))}function wr(n){return n.B_||(n.B_=function(e,r,s){const i=ut(e);return i.f_(),new Ev(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:bv.bind(null,n),To:Rv.bind(null,n),Ao:Sv.bind(null,n),h_:Cv.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),pa(n)?fa(n):n.N_.set("Unknown")):(await n.B_.stop(),Gh(n))})),n.B_}function bn(n){return n.k_||(n.k_=function(e,r,s){const i=ut(e);return i.f_(),new Iv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Dv.bind(null,n),Ao:Ov.bind(null,n),R_:Vv.bind(null,n),A_:Nv.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Ci(n)):(await n.k_.stop(),n.v_.length>0&&(Q("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class ma{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const a=Date.now()+r,l=new ma(t,e,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ga(n,t){if(en("AsyncQueue",`${t}: ${n}`),hs(n))return new H(L.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class lr{constructor(t){this.comparator=t?(e,r)=>t(e,r)||J.comparator(e.key,r.key):(e,r)=>J.comparator(e.key,r.key),this.keyedMap=$r(),this.sortedSet=new Lt(this.comparator)}static emptySet(t){return new lr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof lr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new lr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Tc{constructor(){this.q_=new Lt(J.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):ot():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class _r{constructor(t,e,r,s,i,a,l,c,h){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,e,r,s,i){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new _r(t,e,lr.emptySet(e),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ii(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Lv{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class xv{constructor(){this.queries=new Tr(t=>_h(t),Ii),this.onlineState="Unknown",this.z_=new Set}}async function Uv(n,t){const e=ut(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.W_()&&t.G_()&&(r=2):(i=new Lv,r=t.G_()?0:1);try{switch(r){case 0:i.K_=await e.onListen(s,!0);break;case 1:i.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=ga(a,`Initialization of query '${er(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,i),i.U_.push(t),t.j_(e.onlineState),i.K_&&t.H_(i.K_)&&_a(e)}async function Fv(n,t){const e=ut(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const a=i.U_.indexOf(t);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=t.G_()?0:1:!i.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Bv(n,t){const e=ut(n);let r=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const l of a.U_)l.H_(s)&&(r=!0);a.K_=s}}r&&_a(e)}function qv(n,t,e){const r=ut(n),s=r.queries.get(t);if(s)for(const i of s.U_)i.onError(e);r.queries.delete(t)}function _a(n){n.z_.forEach(t=>{t.next()})}var Do,wc;(wc=Do||(Do={})).J_="default",wc.Cache="cache";class jv{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new _r(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=_r.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Do.Cache}}/**
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
 */class Jh{constructor(t){this.key=t}}class Xh{constructor(t){this.key=t}}class zv{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=mt(),this.mutatedKeys=mt(),this.Ia=vh(t),this.Ta=new lr(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new Tc,s=e?e.Ta:this.Ta;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,g)=>{const p=s.get(d),y=Ti(this.query,g)?g:null,_=!!p&&this.mutatedKeys.has(p.key),w=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let P=!1;p&&y?p.data.isEqual(y.data)?_!==w&&(r.track({type:3,doc:y}),P=!0):this.Ra(p,y)||(r.track({type:2,doc:y}),P=!0,(c&&this.Ia(y,c)>0||h&&this.Ia(y,h)<0)&&(l=!0)):!p&&y?(r.track({type:0,doc:y}),P=!0):p&&!y&&(r.track({type:1,doc:p}),P=!0,(c||h)&&(l=!0)),P&&(y?(a=a.add(y),i=w?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:i}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((d,g)=>function(y,_){const w=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ot()}};return w(y)-w(_)}(d.type,g.type)||this.Ia(d.doc,g.doc)),this.Va(r),s=s!=null&&s;const l=e&&!s?this.ma():[],c=this.Pa.size===0&&this.current&&!s?1:0,h=c!==this.ha;return this.ha=c,a.length!==0||h?{snapshot:new _r(this.query,t.Ta,i,a,t.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Tc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=mt(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Xh(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Jh(r))}),e}pa(t){this.la=t.hs,this.Pa=mt();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return _r.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class $v{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Hv{constructor(t){this.key=t,this.wa=!1}}class Gv{constructor(t,e,r,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Tr(l=>_h(l),Ii),this.Da=new Map,this.Ca=new Set,this.va=new Lt(J.comparator),this.Fa=new Map,this.Ma=new la,this.xa={},this.Oa=new Map,this.Na=gr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Wv(n,t,e=!0){const r=rd(n);let s;const i=r.ba.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await Yh(r,t,e,!0),s}async function Kv(n,t){const e=rd(n);await Yh(e,t,!0,!1)}async function Yh(n,t,e,r){const s=await fv(n.localStore,qe(t)),i=s.targetId,a=e?n.sharedClientState.addLocalQueryTarget(i):"not-current";let l;return r&&(l=await Qv(n,t,i,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&$h(n.remoteStore,s),l}async function Qv(n,t,e,r,s){n.Ba=(g,p,y)=>async function(w,P,x,U){let M=P.view.da(x);M.Xi&&(M=await vc(w.localStore,P.query,!1).then(({documents:A})=>P.view.da(A,M)));const K=U&&U.targetChanges.get(P.targetId),G=U&&U.targetMismatches.get(P.targetId)!=null,B=P.view.applyChanges(M,w.isPrimaryClient,K,G);return bc(w,P.targetId,B.fa),B.snapshot}(n,g,p,y);const i=await vc(n.localStore,t,!0),a=new zv(t,i.hs),l=a.da(i.documents),c=fs.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);bc(n,e,h.fa);const d=new $v(t,e,a);return n.ba.set(t,d),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),h.snapshot}async function Jv(n,t,e){const r=ut(n),s=r.ba.get(t),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(a=>!Ii(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ko(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ha(r.remoteStore,s.targetId),Vo(r,s.targetId)}).catch(us)):(Vo(r,s.targetId),await ko(r.localStore,s.targetId,!0))}async function Xv(n,t){const e=ut(n),r=e.ba.get(t),s=e.Da.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ha(e.remoteStore,r.targetId))}async function Yv(n,t,e){const r=iy(n);try{const s=await function(a,l){const c=ut(a),h=Jt.now(),d=l.reduce((y,_)=>y.add(_.key),mt());let g,p;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let _=nn(),w=mt();return c.os.getEntries(y,d).next(P=>{_=P,_.forEach((x,U)=>{U.isValidDocument()||(w=w.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,_)).next(P=>{g=P;const x=[];for(const U of l){const M=v_(U,g.get(U.key).overlayedDocument);M!=null&&x.push(new Sn(U.key,M,ch(M.value.mapValue),be.exists(!0)))}return c.mutationQueue.addMutationBatch(y,h,x,l)}).next(P=>{p=P;const x=P.applyToLocalDocumentSet(g,w);return c.documentOverlayCache.saveOverlays(y,P.batchId,x)})}).then(()=>({batchId:p.batchId,changes:Eh(g)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.xa[a.currentUser.toKey()];h||(h=new Lt(It)),h=h.insert(l,c),a.xa[a.currentUser.toKey()]=h}(r,s.batchId,e),await ms(r,s.changes),await Ci(r.remoteStore)}catch(s){const i=ga(s,"Failed to persist write");e.reject(i)}}async function Zh(n,t){const e=ut(n);try{const r=await uv(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Fa.get(i);a&&(Dt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?Dt(a.wa):s.removedDocuments.size>0&&(Dt(a.wa),a.wa=!1))}),await ms(e,r,t)}catch(r){await us(r)}}function Ac(n,t,e){const r=ut(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((i,a)=>{const l=a.view.j_(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ut(a);c.onlineState=l;let h=!1;c.queries.forEach((d,g)=>{for(const p of g.U_)p.j_(l)&&(h=!0)}),h&&_a(c)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Zv(n,t,e){const r=ut(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Fa.get(t),i=s&&s.key;if(i){let a=new Lt(J.comparator);a=a.insert(i,he.newNoDocument(i,lt.min()));const l=mt().add(i),c=new bi(lt.min(),new Map,new Lt(It),a,l);await Zh(r,c),r.va=r.va.remove(i),r.Fa.delete(t),va(r)}else await ko(r.localStore,t,!1).then(()=>Vo(r,t,e)).catch(us)}async function ty(n,t){const e=ut(n),r=t.batch.batchId;try{const s=await cv(e.localStore,t);ed(e,r,null),td(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await ms(e,s)}catch(s){await us(s)}}async function ey(n,t,e){const r=ut(n);try{const s=await function(a,l){const c=ut(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(g=>(Dt(g!==null),d=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,t);ed(r,t,e),td(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await ms(r,s)}catch(s){await us(s)}}function td(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function ed(n,t,e){const r=ut(n);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function Vo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||nd(n,r)})}function nd(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(ha(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),va(n))}function bc(n,t,e){for(const r of e)r instanceof Jh?(n.Ma.addReference(r.key,t),ny(n,r)):r instanceof Xh?(Q("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||nd(n,r.key)):ot()}function ny(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(Q("SyncEngine","New document in limbo: "+e),n.Ca.add(r),va(n))}function va(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new J(kt.fromString(t)),r=n.Na.next();n.Fa.set(r,new Hv(e)),n.va=n.va.insert(e,r),$h(n.remoteStore,new _n(qe(gh(e.path)),r,"TargetPurposeLimboResolution",Yo.oe))}}async function ms(n,t,e){const r=ut(n),s=[],i=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,c)=>{a.push(r.Ba(c,t,e).then(h=>{if((h||e)&&r.isPrimaryClient){const d=h&&!h.fromCache;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(h){s.push(h);const d=ua.Ki(c.targetId,h);i.push(d)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(c,h){const d=ut(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>F.forEach(h,p=>F.forEach(p.qi,y=>d.persistence.referenceDelegate.addReference(g,p.targetId,y)).next(()=>F.forEach(p.Qi,y=>d.persistence.referenceDelegate.removeReference(g,p.targetId,y)))))}catch(g){if(!hs(g))throw g;Q("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const p=g.targetId;if(!g.fromCache){const y=d.ns.get(p),_=y.snapshotVersion,w=y.withLastLimboFreeSnapshotVersion(_);d.ns=d.ns.insert(p,w)}}}(r.localStore,i))}async function ry(n,t){const e=ut(n);if(!e.currentUser.isEqual(t)){Q("SyncEngine","User change. New user:",t.toKey());const r=await Bh(e.localStore,t);e.currentUser=t,function(i,a){i.Oa.forEach(l=>{l.forEach(c=>{c.reject(new H(L.CANCELLED,a))})}),i.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ms(e,r.us)}}function sy(n,t){const e=ut(n),r=e.Fa.get(t);if(r&&r.wa)return mt().add(r.key);{let s=mt();const i=e.Da.get(t);if(!i)return s;for(const a of i){const l=e.ba.get(a);s=s.unionWith(l.view.Ea)}return s}}function rd(n){const t=ut(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Zh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=sy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zv.bind(null,t),t.Sa.h_=Bv.bind(null,t.eventManager),t.Sa.ka=qv.bind(null,t.eventManager),t}function iy(n){const t=ut(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ty.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ey.bind(null,t),t}class Rc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ri(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return lv(this.persistence,new ov,t.initialUser,this.serializer)}createPersistence(t){return new rv(ca.Hr,this.serializer)}createSharedClientState(t){return new mv}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oy{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ac(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ry.bind(null,this.syncEngine),await Mv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new xv}()}createDatastore(t){const e=Ri(t.databaseInfo.databaseId),r=function(i){return new yv(i)}(t.databaseInfo);return function(i,a,l,c){return new Tv(i,a,l,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,i,a,l){return new Av(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Ac(this.syncEngine,e,0),function(){return Ec.D()?new Ec:new gv}())}createSyncEngine(t,e){return function(s,i,a,l,c,h,d){const g=new Gv(s,i,a,l,c,h);return d&&(g.La=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=ut(r);Q("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await ps(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class ay{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):en("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class ly{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=ue.UNAUTHENTICATED,this.clientId=oh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{Q("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(Q("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ga(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function uo(n,t){n.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bh(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Sc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await uy(n);Q("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ic(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ic(t.remoteStore,s)),n._onlineComponents=t}function cy(n){return n.name==="FirebaseError"?n.code===L.FAILED_PRECONDITION||n.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function uy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await uo(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!cy(e))throw e;hr("Error using user provided cache. Falling back to memory cache: "+e),await uo(n,new Rc)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await uo(n,new Rc);return n._offlineComponents}async function sd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await Sc(n,n._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await Sc(n,new oy))),n._onlineComponents}function hy(n){return sd(n).then(t=>t.syncEngine)}async function dy(n){const t=await sd(n),e=t.eventManager;return e.onListen=Wv.bind(null,t.syncEngine),e.onUnlisten=Jv.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Kv.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Xv.bind(null,t.syncEngine),e}function fy(n,t,e={}){const r=new In;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new ay({next:p=>{a.enqueueAndForget(()=>Fv(i,g)),p.fromCache&&c.source==="server"?h.reject(new H(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(p)},error:p=>h.reject(p)}),g=new jv(l,d,{includeMetadataChanges:!0,ra:!0});return Uv(i,g)}(await dy(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function id(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Cc=new Map;/**
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
 */function od(n,t,e){if(!e)throw new H(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function py(n,t,e,r){if(t===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Pc(n){if(!J.isDocumentKey(n))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function kc(n){if(J.isDocumentKey(n))throw new H(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Pi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":ot()}function rn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Pi(n);throw new H(L.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function my(n,t){if(t<=0)throw new H(L.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */class Dc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}py("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=id((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ki{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dc(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cg;switch(r.type){case"firstParty":return new Vg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Cc.get(e);r&&(Q("ComponentProvider","Removing Datastore"),Cc.delete(e),r.terminate())}(this),Promise.resolve()}}function gy(n,t,e,r={}){var s;const i=(n=rn(n,ki))._getSettings(),a=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&hr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ue.MOCK_USER;else{l=rf(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ue(h)}n._authCredentials=new Pg(new ih(l,c))}}/**
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
 */class on{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new on(this.firestore,t,this._query)}}class Te{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Te(this.firestore,t,this._key)}}class Tn extends on{constructor(t,e,r){super(t,e,gh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Te(this.firestore,null,new J(t))}withConverter(t){return new Tn(this.firestore,t,this._path)}}function fe(n,t,...e){if(n=Zt(n),od("collection","path",t),n instanceof ki){const r=kt.fromString(t,...e);return kc(r),new Tn(n,null,r)}{if(!(n instanceof Te||n instanceof Tn))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(kt.fromString(t,...e));return kc(r),new Tn(n.firestore,null,r)}}function Hn(n,t,...e){if(n=Zt(n),arguments.length===1&&(t=oh.newId()),od("doc","path",t),n instanceof ki){const r=kt.fromString(t,...e);return Pc(r),new Te(n,null,new J(r))}{if(!(n instanceof Te||n instanceof Tn))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(kt.fromString(t,...e));return Pc(r),new Te(n.firestore,n instanceof Tn?n.converter:null,new J(r))}}/**
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
 */class _y{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new jh(this,"async_queue_retry"),this.hu=()=>{const e=co();e&&Q("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=co();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=co();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new In;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!hs(t))throw t;Q("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw en("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=ma.createAndSchedule(this,t,e,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&ot()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Ar extends ki{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new _y}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ld(this),this._firestoreClient.terminate()}}function vy(n,t){const e=typeof n=="object"?n:yu(),r=typeof n=="string"?n:"(default)",s=Uo(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ef("firestore");i&&gy(s,...i)}return s}function ad(n){return n._firestoreClient||ld(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ld(n){var t,e,r;const s=n._freezeSettings(),i=function(l,c,h,d){return new Hg(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,id(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new ly(n._authCredentials,n._appCheckCredentials,n._queue,i),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class vr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new vr(me.fromBase64String(t))}catch(e){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new vr(me.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Di{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new re(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ya{constructor(t){this._methodName=t}}/**
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
 */class Ea{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return It(this._lat,t._lat)||It(this._long,t._long)}}/**
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
 */const yy=/^__.*__$/;class Ey{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Sn(t,this.data,this.fieldMask,e,this.fieldTransforms):new ds(t,this.data,e,this.fieldTransforms)}}class cd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Sn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ud(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ot()}}class Ia{constructor(t,e,r,s,i,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Ia(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return ci(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(ud(this.fu)&&yy.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Iy{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Ri(t)}Fu(t,e,r,s=!1){return new Ia({fu:t,methodName:e,vu:r,path:re.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gs(n){const t=n._freezeSettings(),e=Ri(n._databaseId);return new Iy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function hd(n,t,e,r,s,i={}){const a=n.Fu(i.merge||i.mergeFields?2:0,t,e,s);Ta("Data must be an object, but it was:",a,r);const l=fd(r,a);let c,h;if(i.merge)c=new Ae(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const p=No(t,g,e);if(!a.contains(p))throw new H(L.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);md(d,p)||d.push(p)}c=new Ae(d),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new Ey(new Ie(l),c,h)}class Vi extends ya{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Vi}}function Ty(n,t,e,r){const s=n.Fu(1,t,e);Ta("Data must be an object, but it was:",s,r);const i=[],a=Ie.empty();Wn(r,(c,h)=>{const d=wa(t,c,e);h=Zt(h);const g=s.Su(d);if(h instanceof Vi)i.push(d);else{const p=_s(h,g);p!=null&&(i.push(d),a.set(d,p))}});const l=new Ae(i);return new cd(a,l,s.fieldTransforms)}function wy(n,t,e,r,s,i){const a=n.Fu(1,t,e),l=[No(t,r,e)],c=[s];if(i.length%2!=0)throw new H(L.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)l.push(No(t,i[p])),c.push(i[p+1]);const h=[],d=Ie.empty();for(let p=l.length-1;p>=0;--p)if(!md(h,l[p])){const y=l[p];let _=c[p];_=Zt(_);const w=a.Su(y);if(_ instanceof Vi)h.push(y);else{const P=_s(_,w);P!=null&&(h.push(y),d.set(y,P))}}const g=new Ae(h);return new cd(d,g,a.fieldTransforms)}function dd(n,t,e,r=!1){return _s(e,n.Fu(r?4:3,t))}function _s(n,t){if(pd(n=Zt(n)))return Ta("Unsupported field value:",t,n),fd(n,t);if(n instanceof ya)return function(r,s){if(!ud(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=_s(l,s.bu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,t)}return function(r,s){if((r=Zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return d_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Jt.fromDate(r);return{timestampValue:ai(s.serializer,i)}}if(r instanceof Jt){const i=new Jt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ai(s.serializer,i)}}if(r instanceof Ea)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vr)return{bytesValue:Nh(s.serializer,r._byteString)};if(r instanceof Te){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:aa(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Pi(r)}`)}(n,t)}function fd(n,t){const e={};return ah(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Wn(n,(r,s)=>{const i=_s(s,t.pu(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function pd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Jt||n instanceof Ea||n instanceof vr||n instanceof Te||n instanceof ya)}function Ta(n,t,e){if(!pd(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Pi(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function No(n,t,e){if((t=Zt(t))instanceof Di)return t._internalPath;if(typeof t=="string")return wa(n,t);throw ci("Field path arguments must be of type string or ",n,!1,void 0,e)}const Ay=new RegExp("[~\\*/\\[\\]]");function wa(n,t,e){if(t.search(Ay)>=0)throw ci(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Di(...t.split("."))._internalPath}catch{throw ci(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ci(n,t,e,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new H(L.INVALID_ARGUMENT,l+n+c)}function md(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Aa{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new by(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ni("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class by extends Aa{data(){return super.data()}}function Ni(n,t){return typeof t=="string"?wa(n,t):t instanceof Di?t._internalPath:t._delegate._internalPath}/**
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
 */function Ry(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new H(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ba{}class Oi extends ba{}function ze(n,t,...e){let r=[];t instanceof ba&&r.push(t),r=r.concat(e),function(i){const a=i.filter(c=>c instanceof Ra).length,l=i.filter(c=>c instanceof Mi).length;if(a>1||a>0&&l>0)throw new H(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Mi extends Oi{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Mi(t,e,r)}_apply(t){const e=this._parse(t);return gd(t._query,e),new on(t.firestore,t.converter,bo(t._query,e))}_parse(t){const e=gs(t.firestore);return function(i,a,l,c,h,d,g){let p;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new H(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Nc(g,d);const y=[];for(const _ of g)y.push(Vc(c,i,_));p={arrayValue:{values:y}}}else p=Vc(c,i,g)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Nc(g,d),p=dd(l,a,g,d==="in"||d==="not-in");return Wt.create(h,d,p)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Un(n,t,e){const r=t,s=Ni("where",n);return Mi._create(s,r,e)}class Ra extends ba{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ra(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Ne.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)gd(a,c),a=bo(a,c)}(t._query,e),new on(t.firestore,t.converter,bo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sa extends Oi{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Sa(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new H(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ns(i,a)}(t._query,this._field,this._direction);return new on(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Kn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function ui(n,t="asc"){const e=t,r=Ni("orderBy",n);return Sa._create(r,e)}class Ca extends Oi{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Ca(t,e,r)}_apply(t){return new on(t.firestore,t.converter,si(t._query,this._limit,this._limitType))}}function Oo(n){return my("limit",n),Ca._create("limit",n,"F")}class Pa extends Oi{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new Pa(t,e,r)}_apply(t){const e=Cy(t,this.type,this._docOrFields,this._inclusive);return new on(t.firestore,t.converter,function(s,i){return new Kn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(t._query,e))}}function Sy(...n){return Pa._create("startAfter",n,!1)}function Cy(n,t,e,r){if(e[0]=Zt(e[0]),e[0]instanceof Aa)return function(i,a,l,c,h){if(!c)throw new H(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const d=[];for(const g of ar(i))if(g.field.isKeyField())d.push(ri(a,c.key));else{const p=c.data.field(g.field);if(Ei(p))throw new H(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const y=g.field.canonicalString();throw new H(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(p)}return new mr(d,h)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const s=gs(n.firestore);return function(a,l,c,h,d,g){const p=a.explicitOrderBy;if(d.length>p.length)throw new H(L.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let _=0;_<d.length;_++){const w=d[_];if(p[_].field.isKeyField()){if(typeof w!="string")throw new H(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof w}`);if(!ra(a)&&w.indexOf("/")!==-1)throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${w}' contains a slash.`);const P=a.path.child(kt.fromString(w));if(!J.isDocumentKey(P))throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const x=new J(P);y.push(ri(l,x))}else{const P=dd(c,h,w);y.push(P)}}return new mr(y,g)}(n._query,n.firestore._databaseId,s,t,e,r)}}function Vc(n,t,e){if(typeof(e=Zt(e))=="string"){if(e==="")throw new H(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ra(t)&&e.indexOf("/")!==-1)throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(kt.fromString(e));if(!J.isDocumentKey(r))throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ri(n,new J(r))}if(e instanceof Te)return ri(n,e._key);throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pi(e)}.`)}function Nc(n,t){if(!Array.isArray(n)||n.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function gd(n,t){const e=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Py{convertValue(t,e="none"){switch($n(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Gt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(zn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ot()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Wn(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertGeoPoint(t){return new Ea(Gt(t.latitude),Gt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Zo(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Zr(t));default:return null}}convertTimestamp(t){const e=An(t);return new Jt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=kt.fromString(t);Dt(Fh(r));const s=new ts(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(e)||en(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function _d(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
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
 */class xs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ky extends Aa{constructor(t,e,r,s,i,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Gs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ni("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Gs extends ky{data(t={}){return super.data(t)}}class Dy{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Gs(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new H(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Gs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Gs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new xs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:Vy(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Vy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ot()}}class Ny extends Py{constructor(t){super(),this.firestore=t}convertBytes(t){return new vr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Te(this.firestore,null,e)}}function Re(n){n=rn(n,on);const t=rn(n.firestore,Ar),e=ad(t),r=new Ny(t);return Ry(n._query),fy(e,n._query).then(s=>new Dy(t,r,n,s))}function Oy(n,t,e){n=rn(n,Te);const r=rn(n.firestore,Ar),s=_d(n.converter,t,e);return xi(r,[hd(gs(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,be.none())])}function My(n,t,e,...r){n=rn(n,Te);const s=rn(n.firestore,Ar),i=gs(s);let a;return a=typeof(t=Zt(t))=="string"||t instanceof Di?wy(i,"updateDoc",n._key,t,e,r):Ty(i,"updateDoc",n._key,t),xi(s,[a.toMutation(n._key,be.exists(!0))])}function hi(n){return xi(rn(n.firestore,Ar),[new sa(n._key,be.none())])}function Li(n,t){const e=rn(n.firestore,Ar),r=Hn(n),s=_d(n.converter,t);return xi(e,[hd(gs(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,be.exists(!1))]).then(()=>r)}function xi(n,t){return function(r,s){const i=new In;return r.asyncQueue.enqueueAndForget(async()=>Yv(await hy(r),s,i)),i.promise}(ad(n),t)}(function(t,e=!0){(function(s){Ir=s})(yr),cr(new Fn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Ar(new kg(r.getProvider("auth-internal")),new Og(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ts(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:e},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),En(Yl,"4.6.3",t),En(Yl,"4.6.3","esm2017")})();const Ly={apiKey:"AIzaSyCmUmIV1VPwO6ES8HYRVilL0y7Oe51a93k",authDomain:"prohost-9406a.firebaseapp.com",projectId:"prohost-9406a",storageBucket:"prohost-9406a.appspot.com",messagingSenderId:"976489526771",appId:"1:976489526771:web:5cd8ead6af96db8f110e86"},vd=vu(Ly),di=ei(vd),Ut=vy(vd),pt=fi(0),jr=fi(0),Mo=fi(0),xy=fi(0),Uy=""+new URL("../assets/logo.gtldxAIb.png",import.meta.url).href;function Oc(n,t,e){const r=n.slice();return r[48]=t[e],r}function Mc(n,t,e){const r=n.slice();return r[51]=t[e],r}function Lc(n){let t,e="추가",r,s,i="채택",a,l,c="삭제",h,d,g="문제신고 확인",p,y;return{c(){t=D("button"),t.textContent=e,r=q(),s=D("button"),s.textContent=i,a=q(),l=D("button"),l.textContent=c,h=q(),d=D("button"),d.textContent=g,this.h()},l(_){t=V(_,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(t)!=="svelte-1lsf66u"&&(t.textContent=e),r=j(_),s=V(_,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(s)!=="svelte-gljqo6"&&(s.textContent=i),a=j(_),l=V(_,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(l)!=="svelte-1ipyraa"&&(l.textContent=c),h=j(_),d=V(_,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(d)!=="svelte-18d8umu"&&(d.textContent=g),this.h()},h(){S(t,"class","top-right-button0 svelte-5xk7j6"),S(s,"class","top-right-button svelte-5xk7j6"),S(l,"class","top-right-button6 svelte-5xk7j6"),S(d,"class","top-right-button8 svelte-5xk7j6")},m(_,w){tt(_,t,w),tt(_,r,w),tt(_,s,w),tt(_,a,w),tt(_,l,w),tt(_,h,w),tt(_,d,w),p||(y=[W(t,"click",n[14]),W(s,"click",n[10]),W(l,"click",n[11]),W(d,"click",n[21])],p=!0)},p:Tt,d(_){_&&(N(t),N(r),N(s),N(a),N(l),N(h),N(d)),p=!1,Oe(y)}}}function xc(n){let t,e=n[51]+"",r,s,i;return{c(){t=D("div"),r=At(e),this.h()},l(a){t=V(a,"DIV",{class:!0});var l=z(t);r=bt(l,e),l.forEach(N),this.h()},h(){S(t,"class","ranking-item svelte-5xk7j6")},m(a,l){tt(a,t,l),b(t,r),s||(i=W(t,"click",function(){Hd(n[15](n[51]))&&n[15](n[51]).apply(this,arguments)}),s=!0)},p(a,l){n=a,l[0]&128&&e!==(e=n[51]+"")&&Bt(r,e)},d(a){a&&N(t),s=!1,i()}}}function Uc(n){let t,e=pe(n[0]),r=[];for(let s=0;s<e.length;s+=1)r[s]=Fc(Oc(n,e,s));return{c(){t=D("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=V(s,"DIV",{class:!0});var i=z(t);for(let a=0;a<r.length;a+=1)r[a].l(i);i.forEach(N),this.h()},h(){S(t,"class","search-history svelte-5xk7j6")},m(s,i){tt(s,t,i);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(t,null)},p(s,i){if(i[0]&1048577){e=pe(s[0]);let a;for(a=0;a<e.length;a+=1){const l=Oc(s,e,a);r[a]?r[a].p(l,i):(r[a]=Fc(l),r[a].c(),r[a].m(t,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=e.length}},d(s){s&&N(t),Rn(r,s)}}}function Fc(n){let t,e=n[48]+"",r,s,i;function a(){return n[30](n[48])}return{c(){t=D("div"),r=At(e),this.h()},l(l){t=V(l,"DIV",{class:!0});var c=z(t);r=bt(c,e),c.forEach(N),this.h()},h(){S(t,"class","history-item svelte-5xk7j6")},m(l,c){tt(l,t,c),b(t,r),s||(i=W(t,"click",a),s=!0)},p(l,c){n=l,c[0]&1&&e!==(e=n[48]+"")&&Bt(r,e)},d(l){l&&N(t),s=!1,i()}}}function Bc(n){let t,e,r,s,i="Close",a,l,c=!n[5]&&qc();return{c(){t=D("div"),e=D("div"),c&&c.c(),r=q(),s=D("button"),s.textContent=i,this.h()},l(h){t=V(h,"DIV",{class:!0});var d=z(t);e=V(d,"DIV",{class:!0});var g=z(e);c&&c.l(g),r=j(g),s=V(g,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(s)!=="svelte-au4vm5"&&(s.textContent=i),g.forEach(N),d.forEach(N),this.h()},h(){S(s,"class","close-button svelte-5xk7j6"),S(e,"class","modal svelte-5xk7j6"),S(t,"class","modal-background svelte-5xk7j6")},m(h,d){tt(h,t,d),b(t,e),c&&c.m(e,null),b(e,r),b(e,s),a||(l=[W(s,"click",n[19]),W(e,"click",Wd(n[26])),W(t,"click",n[19])],a=!0)},p(h,d){h[5]?c&&(c.d(1),c=null):c||(c=qc(),c.c(),c.m(e,r))},d(h){h&&N(t),c&&c.d(),a=!1,Oe(l)}}}function qc(n){let t,e="아직 추가되지 않은 단어입니다..";return{c(){t=D("div"),t.textContent=e,this.h()},l(r){t=V(r,"DIV",{class:!0,"data-svelte-h":!0}),nt(t)!=="svelte-1tgxuji"&&(t.textContent=e),this.h()},h(){S(t,"class","modal-explain svelte-5xk7j6")},m(r,s){tt(r,t,s)},d(r){r&&N(t)}}}function Fy(n){let t,e,r='<h1 id="logo_text" class="svelte-5xk7j6">신한사</h1>',s,i,a,l,c,h,d,g,p,y,_,w,P,x,U="모든 단어 보러가기",M,K,G="로그아웃",B,A,E="단어 신청",v,T,R="문제 신고",C,I,et,Z,st,X,rt,ct,ht="게임",at,Et="순위",dt,Kt,qt,Fe="실시간 랭킹 TOP3",ye,Y,Pt,Mt,oe,Ee,te,an='<span class="ex_te svelte-5xk7j6">신한사의 모든 단어들은 사람들의 설문에 의해 만들어졌으며, 설명글은 사람들의 설문과 GPT-4o에 의해 만들어졌습니다.</span> <span class="ex_te2 svelte-5xk7j6">신한사의 모든 단어들이 가진 성향은 신한사와 관련이 있지 않습니다.</span>',ke,br,Xt=n[6]=="host.wproject00@gmail.com"&&Lc(n),ln=pe(n[7]),jt=[];for(let ft=0;ft<ln.length;ft+=1)jt[ft]=xc(Mc(n,ln,ft));let zt=n[1]&&n[0].length>0&&Uc(n),Qt=n[2]&&Bc(n);return{c(){t=D("div"),e=D("div"),e.innerHTML=r,s=q(),i=D("img"),l=q(),c=D("button"),h=D("div"),d=q(),g=D("div"),p=q(),y=D("div"),_=q(),w=D("div"),P=D("div"),x=D("span"),x.textContent=U,M=q(),K=D("button"),K.textContent=G,B=q(),A=D("button"),A.textContent=E,v=q(),T=D("button"),T.textContent=R,C=q(),Xt&&Xt.c(),I=q(),et=D("div"),Z=D("input"),st=q(),X=D("div"),rt=D("div"),ct=D("span"),ct.textContent=ht,at=D("span"),at.textContent=Et,dt=q(),Kt=D("div"),qt=D("h3"),qt.textContent=Fe,ye=q(),Y=D("br"),Pt=q();for(let ft=0;ft<jt.length;ft+=1)jt[ft].c();Mt=q(),zt&&zt.c(),oe=q(),Qt&&Qt.c(),Ee=q(),te=D("div"),te.innerHTML=an,this.h()},l(ft){t=V(ft,"DIV",{id:!0,class:!0});var vt=z(t);e=V(vt,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),nt(e)!=="svelte-1s1wxsl"&&(e.innerHTML=r),s=j(vt),i=V(vt,"IMG",{class:!0,src:!0,alt:!0}),l=j(vt),c=V(vt,"BUTTON",{id:!0,class:!0});var St=z(c);h=V(St,"DIV",{class:!0}),z(h).forEach(N),d=j(St),g=V(St,"DIV",{class:!0}),z(g).forEach(N),p=j(St),y=V(St,"DIV",{class:!0}),z(y).forEach(N),St.forEach(N),_=j(vt),w=V(vt,"DIV",{class:!0});var cn=z(w);P=V(cn,"DIV",{class:!0});var Vt=z(P);x=V(Vt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),nt(x)!=="svelte-onli1k"&&(x.textContent=U),M=j(Vt),K=V(Vt,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),nt(K)!=="svelte-1a7h9s"&&(K.textContent=G),B=j(Vt),A=V(Vt,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),nt(A)!=="svelte-lgs35r"&&(A.textContent=E),v=j(Vt),T=V(Vt,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),nt(T)!=="svelte-13wzyr"&&(T.textContent=R),Vt.forEach(N),cn.forEach(N),C=j(vt),Xt&&Xt.l(vt),I=j(vt),et=V(vt,"DIV",{class:!0});var Ot=z(et);Z=V(Ot,"INPUT",{type:!0,autocomplete:!0,id:!0,class:!0,placeholder:!0}),st=j(Ot),X=V(Ot,"DIV",{id:!0,class:!0});var Cn=z(X);rt=V(Cn,"DIV",{id:!0,class:!0});var Jn=z(rt);ct=V(Jn,"SPAN",{class:!0,"data-svelte-h":!0}),nt(ct)!=="svelte-13yvgpb"&&(ct.textContent=ht),at=V(Jn,"SPAN",{class:!0,"data-svelte-h":!0}),nt(at)!=="svelte-1ln56b9"&&(at.textContent=Et),Jn.forEach(N),Cn.forEach(N),dt=j(Ot),Kt=V(Ot,"DIV",{class:!0});var Ge=z(Kt);qt=V(Ge,"H3",{style:!0,"data-svelte-h":!0}),nt(qt)!=="svelte-6yec9j"&&(qt.textContent=Fe),ye=j(Ge),Y=V(Ge,"BR",{}),Pt=j(Ge);for(let Rr=0;Rr<jt.length;Rr+=1)jt[Rr].l(Ge);Ge.forEach(N),Mt=j(Ot),zt&&zt.l(Ot),Ot.forEach(N),oe=j(vt),Qt&&Qt.l(vt),Ee=j(vt),te=V(vt,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),nt(te)!=="svelte-1b9tnz3"&&(te.innerHTML=an),vt.forEach(N),this.h()},h(){S(e,"id","logo_div"),S(e,"class","svelte-5xk7j6"),S(i,"class","logo_img svelte-5xk7j6"),$d(i.src,a=Uy)||S(i,"src",a),S(i,"alt","logo"),S(h,"class","svelte-5xk7j6"),Ht(h,"active",n[8]),S(g,"class","svelte-5xk7j6"),Ht(g,"active",n[8]),S(y,"class","svelte-5xk7j6"),Ht(y,"active",n[8]),S(c,"id","menu-button"),S(c,"class","hamburger svelte-5xk7j6"),Ft(x,"position","relative"),Ft(x,"top","50px"),S(x,"class","svelte-5xk7j6"),S(K,"class","top-right-button2 svelte-5xk7j6"),Ft(K,"position","relative"),Ft(K,"top","270px"),Ft(K,"left","0px"),S(A,"class","top-right-button3 svelte-5xk7j6"),Ft(A,"position","relative"),Ft(A,"top","0px"),Ft(A,"left","0px"),S(T,"class","top-right-button7 svelte-5xk7j6"),Ft(T,"position","relative"),Ft(T,"top","15px"),Ft(T,"left","0px"),S(P,"class","sidebar-content svelte-5xk7j6"),S(w,"class","sidebar svelte-5xk7j6"),Ht(w,"visible",n[8]),S(Z,"type","text"),S(Z,"autocomplete","off"),S(Z,"id","sb"),S(Z,"class","search-bar svelte-5xk7j6"),S(Z,"placeholder","검색..."),Z.value=n[3],S(ct,"class","tt1 svelte-5xk7j6"),S(at,"class","tt2 svelte-5xk7j6"),S(rt,"id","logo"),S(rt,"class","svelte-5xk7j6"),S(X,"id","game-box"),S(X,"class","svelte-5xk7j6"),Ft(qt,"color","white"),Ft(qt,"font-size","140%"),S(Kt,"class","ranking-container svelte-5xk7j6"),S(et,"class","search-container svelte-5xk7j6"),S(te,"id","exp"),S(te,"class","svelte-5xk7j6"),S(t,"id","condiv"),S(t,"class","svelte-5xk7j6")},m(ft,vt){tt(ft,t,vt),b(t,e),b(t,s),b(t,i),b(t,l),b(t,c),b(c,h),b(c,d),b(c,g),b(c,p),b(c,y),b(t,_),b(t,w),b(w,P),b(P,x),b(P,M),b(P,K),b(P,B),b(P,A),b(P,v),b(P,T),b(t,C),Xt&&Xt.m(t,null),b(t,I),b(t,et),b(et,Z),b(et,st),b(et,X),b(X,rt),b(rt,ct),b(rt,at),b(et,dt),b(et,Kt),b(Kt,qt),b(Kt,ye),b(Kt,Y),b(Kt,Pt);for(let St=0;St<jt.length;St+=1)jt[St]&&jt[St].m(Kt,null);b(et,Mt),zt&&zt.m(et,null),b(t,oe),Qt&&Qt.m(t,null),b(t,Ee),b(t,te),ke||(br=[W(c,"click",n[25]),W(x,"click",n[22]),W(K,"click",n[13]),W(A,"click",n[9]),W(T,"click",n[12]),W(Z,"input",n[27]),W(Z,"keydown",n[16]),W(Z,"focus",n[17]),W(Z,"blur",n[18]),W(Z,"compositionstart",n[28]),W(Z,"compositionend",n[29]),W(ct,"click",n[23]),W(at,"click",n[24])],ke=!0)},p(ft,vt){if(vt[0]&256&&Ht(h,"active",ft[8]),vt[0]&256&&Ht(g,"active",ft[8]),vt[0]&256&&Ht(y,"active",ft[8]),vt[0]&256&&Ht(w,"visible",ft[8]),ft[6]=="host.wproject00@gmail.com"?Xt?Xt.p(ft,vt):(Xt=Lc(ft),Xt.c(),Xt.m(t,I)):Xt&&(Xt.d(1),Xt=null),vt[0]&8&&Z.value!==ft[3]&&(Z.value=ft[3]),vt[0]&32896){ln=pe(ft[7]);let St;for(St=0;St<ln.length;St+=1){const cn=Mc(ft,ln,St);jt[St]?jt[St].p(cn,vt):(jt[St]=xc(cn),jt[St].c(),jt[St].m(Kt,null))}for(;St<jt.length;St+=1)jt[St].d(1);jt.length=ln.length}ft[1]&&ft[0].length>0?zt?zt.p(ft,vt):(zt=Uc(ft),zt.c(),zt.m(et,null)):zt&&(zt.d(1),zt=null),ft[2]?Qt?Qt.p(ft,vt):(Qt=Bc(ft),Qt.c(),Qt.m(t,Ee)):Qt&&(Qt.d(1),Qt=null)},i:Tt,o:Tt,d(ft){ft&&N(t),Xt&&Xt.d(),Rn(jt,ft),zt&&zt.d(),Qt&&Qt.d(),ke=!1,Oe(br)}}}function By(n,t,e){let r,s,i;de(n,pt,Y=>e(36,r=Y)),de(n,xy,Y=>e(37,Y)),de(n,Mo,Y=>e(38,s=Y)),de(n,jr,Y=>e(39,i=Y));let a=[],l=!1,c=!1,h="",d=!1,g=[],p=null,y="";Gn(()=>{Z(),v()});function _(){Rt(pt,r=3,r)}function w(){Rt(pt,r=4,r)}const P=()=>{Rt(pt,r=5,r)},x=()=>{Rt(pt,r=6,r)};new Promise((Y,Pt)=>{Ko(di,Mt=>{Mt?Y(Mt.email):Pt("No user is signed in")})}).then(Y=>e(6,y=Y)).catch(Y=>console.error(Y));const M=async()=>{try{await mm(di)}catch(Y){console.error("Error signing out:",Y)}};function K(){Rt(pt,r=1,r)}async function G(Y){e(1,l=!1);const Pt=await st(Y);g=Pt.matches,e(5,p=Pt.exactMatch),console.log(g),p?(Rt(jr,i=p.title,i),p.value,p.explain,p.count+1,Rt(pt,r=2,r)):Rt(jr,i="",i),e(2,c=!0)}async function B(Y){if(!d&&Y.key==="Enter"&&(e(3,h=Y.target.value.trim()),h)){E(h),Y.target.value="",e(1,l=!1);const Pt=await st(h);g=Pt.matches,e(5,p=Pt.exactMatch),console.log(g),p?(Rt(jr,i=p.title,i),p.value,p.explain,p.count+1,A(i),Rt(pt,r=2,r)):Rt(jr,i="",i),e(2,c=!0)}}async function A(Y){try{const Pt=ze(fe(Ut,"datas"),Un("title","==",Y)),Mt=await Re(Pt);Mt.empty?console.log("No matching documents found."):Mt.forEach(async oe=>{const Ee=Hn(Ut,"datas",oe.id),te=oe.data().count||0;await My(Ee,{count:te+1}),console.log(`Document with ID ${oe.id} updated successfully`)})}catch(Pt){console.error("Error updating document: ",Pt)}}function E(Y){const Pt=JSON.parse(sessionStorage.getItem("searchHistory"))||[],Mt=[Y,...Pt.filter(oe=>oe!==Y)];Mt.length>3&&Mt.pop(),sessionStorage.setItem("searchHistory",JSON.stringify(Mt)),e(0,a=Mt)}function v(){const Y=JSON.parse(sessionStorage.getItem("searchHistory"))||[];e(0,a=Y)}function T(){e(1,l=!0)}function R(){setTimeout(()=>e(1,l=!1),100)}function C(){e(2,c=!1)}function I(Y){document.getElementById("sb").value=Y,e(1,l=!1)}let et=[];async function Z(){try{const Y=ze(fe(Ut,"datas"),ui("count","desc"),Oo(3)),Pt=await Re(Y);e(7,et=Pt.docs.map(Mt=>Mt.data().title))}catch(Y){console.error("Error fetching documents: ",Y)}}async function st(Y){const Pt=fe(Ut,"datas"),Mt=ze(Pt,Un("title",">=",Y),Un("title","<=",Y+"")),oe=await Re(Mt),Ee=[];let te=null;return oe.forEach(an=>{const ke=an.data();Ee.push(ke),ke.title===Y&&(te=ke)}),Rt(Mo,s=Ee,s),{exactMatch:te,matches:Ee}}const X=()=>{Rt(pt,r=7,r)},rt=()=>{Rt(pt,r=8,r)},ct=()=>{Rt(pt,r=9,r)},ht=()=>{Rt(pt,r=10,r)};let at=!1;function Et(){e(8,at=!at)}function dt(Y){Gd.call(this,n,Y)}return[a,l,c,h,d,p,y,et,at,_,w,P,x,M,K,G,B,T,R,C,I,X,rt,ct,ht,Et,dt,Y=>e(3,h=Y.target.value),()=>e(4,d=!0),()=>e(4,d=!1),Y=>I(Y)]}class qy extends Ce{constructor(t){super(),Pe(this,t,By,Fy,Se,{},null,[-1,-1])}}function jc(n){let t,e;return{c(){t=D("div"),e=At(n[5]),this.h()},l(r){t=V(r,"DIV",{class:!0});var s=z(t);e=bt(s,n[5]),s.forEach(N),this.h()},h(){S(t,"class","error-message svelte-e5fo8p")},m(r,s){tt(r,t,s),b(t,e)},p(r,s){s&32&&Bt(e,r[5])},d(r){r&&N(t)}}}function jy(n){let t,e,r,s,i="Title",a,l,c,h,d,g="Value",p,y,_,w,P,x="Explain",U,M,K,G,B,A="Tag (과학:0 / 일상:1)",E,v,T,R,C,I,et,Z,st,X="Cancel",rt,ct,ht=n[5]&&jc(n);return{c(){t=D("div"),e=D("div"),r=D("div"),s=D("label"),s.textContent=i,a=q(),l=D("input"),c=q(),h=D("div"),d=D("label"),d.textContent=g,p=q(),y=D("input"),_=q(),w=D("div"),P=D("label"),P.textContent=x,U=q(),M=D("input"),K=q(),G=D("div"),B=D("label"),B.textContent=A,E=q(),v=D("input"),T=q(),ht&&ht.c(),R=q(),C=D("div"),I=D("button"),et=At("Submit"),Z=q(),st=D("button"),st.textContent=X,this.h()},l(at){t=V(at,"DIV",{class:!0});var Et=z(t);e=V(Et,"DIV",{class:!0});var dt=z(e);r=V(dt,"DIV",{class:!0});var Kt=z(r);s=V(Kt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),nt(s)!=="svelte-1weqgc2"&&(s.textContent=i),a=j(Kt),l=V(Kt,"INPUT",{class:!0,type:!0,id:!0}),Kt.forEach(N),c=j(dt),h=V(dt,"DIV",{class:!0});var qt=z(h);d=V(qt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),nt(d)!=="svelte-ry2554"&&(d.textContent=g),p=j(qt),y=V(qt,"INPUT",{class:!0,type:!0,id:!0}),qt.forEach(N),_=j(dt),w=V(dt,"DIV",{class:!0});var Fe=z(w);P=V(Fe,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),nt(P)!=="svelte-2n35pc"&&(P.textContent=x),U=j(Fe),M=V(Fe,"INPUT",{class:!0,type:!0,id:!0}),Fe.forEach(N),K=j(dt),G=V(dt,"DIV",{class:!0});var ye=z(G);B=V(ye,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),nt(B)!=="svelte-1lp5d2m"&&(B.textContent=A),E=j(ye),v=V(ye,"INPUT",{class:!0,type:!0,id:!0}),ye.forEach(N),T=j(dt),ht&&ht.l(dt),R=j(dt),C=V(dt,"DIV",{class:!0});var Y=z(C);I=V(Y,"BUTTON",{class:!0});var Pt=z(I);et=bt(Pt,"Submit"),Pt.forEach(N),Z=j(Y),st=V(Y,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(st)!=="svelte-9k415x"&&(st.textContent=X),Y.forEach(N),dt.forEach(N),Et.forEach(N),this.h()},h(){S(s,"class","form-label svelte-e5fo8p"),S(s,"for","title"),S(l,"class","form-input svelte-e5fo8p"),S(l,"type","text"),S(l,"id","title"),S(r,"class","form-group svelte-e5fo8p"),S(d,"class","form-label svelte-e5fo8p"),S(d,"for","value"),S(y,"class","form-input svelte-e5fo8p"),S(y,"type","text"),S(y,"id","value"),S(h,"class","form-group svelte-e5fo8p"),S(P,"class","form-label svelte-e5fo8p"),S(P,"for","explain"),S(M,"class","form-input svelte-e5fo8p"),S(M,"type","text"),S(M,"id","explain"),S(w,"class","form-group svelte-e5fo8p"),S(B,"class","form-label svelte-e5fo8p"),S(B,"for","tag1"),S(v,"class","form-input svelte-e5fo8p"),S(v,"type","text"),S(v,"id","tag1"),S(G,"class","form-group svelte-e5fo8p"),S(I,"class","form-button svelte-e5fo8p"),I.disabled=n[4],S(st,"class","form-button cancel-button svelte-e5fo8p"),S(C,"class","form-buttons svelte-e5fo8p"),S(e,"class","form-content svelte-e5fo8p"),S(t,"class","form-container svelte-e5fo8p")},m(at,Et){tt(at,t,Et),b(t,e),b(e,r),b(r,s),b(r,a),b(r,l),wt(l,n[0]),b(e,c),b(e,h),b(h,d),b(h,p),b(h,y),wt(y,n[1]),b(e,_),b(e,w),b(w,P),b(w,U),b(w,M),wt(M,n[2]),b(e,K),b(e,G),b(G,B),b(G,E),b(G,v),wt(v,n[3]),b(e,T),ht&&ht.m(e,null),b(e,R),b(e,C),b(C,I),b(I,et),b(C,Z),b(C,st),rt||(ct=[W(l,"input",n[8]),W(y,"input",n[9]),W(M,"input",n[10]),W(v,"input",n[11]),W(I,"click",n[6]),W(st,"click",n[7])],rt=!0)},p(at,[Et]){Et&1&&l.value!==at[0]&&wt(l,at[0]),Et&2&&y.value!==at[1]&&wt(y,at[1]),Et&4&&M.value!==at[2]&&wt(M,at[2]),Et&8&&v.value!==at[3]&&wt(v,at[3]),at[5]?ht?ht.p(at,Et):(ht=jc(at),ht.c(),ht.m(e,R)):ht&&(ht.d(1),ht=null),Et&16&&(I.disabled=at[4])},i:Tt,o:Tt,d(at){at&&N(t),ht&&ht.d(),rt=!1,Oe(ct)}}}function zy(n,t,e){let r;de(n,pt,P=>e(12,r=P));let s="",i="",a="",l="",c=!1,h="";const d=async()=>{if(!s||!i||!a||!l){e(5,h="All fields are required!");return}e(4,c=!0),e(5,h="");try{if(!(await Re(ze(fe(Ut,"datas"),Un("title","==",s)))).empty){e(5,h="Title already exists! Please choose a different title.");return}await Li(fe(Ut,"datas"),{title:s,value:i,explain:a,tag1:l,count:0}),e(0,s=""),e(1,i=""),e(2,a=""),e(3,l=""),Rt(pt,r=0,r)}catch(P){console.error("Error adding document: ",P),e(5,h="Error adding document!")}finally{e(4,c=!1)}},g=()=>{e(0,s=""),e(1,i=""),e(2,a=""),e(3,l=""),e(5,h=""),Rt(pt,r=0,r)};function p(){s=this.value,e(0,s)}function y(){i=this.value,e(1,i)}function _(){a=this.value,e(2,a)}function w(){l=this.value,e(3,l)}return[s,i,a,l,c,h,d,g,p,y,_,w]}class $y extends Ce{constructor(t){super(),Pe(this,t,zy,jy,Se,{})}}function zc(n,t,e){const r=n.slice();return r[14]=t[e],r}function $c(n){let t,e,r=n[14].title+"",s,i,a,l=n[14].value+"",c,h,d,g=n[14].explain+"",p,y,_,w,P="검색수:",x,U=n[14].count+"",M,K;return{c(){t=D("div"),e=D("h3"),s=At(r),i=q(),a=D("p"),c=At(l),h=q(),d=D("p"),p=At(g),y=q(),_=D("p"),w=D("strong"),w.textContent=P,x=q(),M=At(U),K=q(),this.h()},l(G){t=V(G,"DIV",{class:!0});var B=z(t);e=V(B,"H3",{class:!0});var A=z(e);s=bt(A,r),A.forEach(N),i=j(B),a=V(B,"P",{class:!0});var E=z(a);c=bt(E,l),E.forEach(N),h=j(B),d=V(B,"P",{class:!0});var v=z(d);p=bt(v,g),v.forEach(N),y=j(B),_=V(B,"P",{class:!0});var T=z(_);w=V(T,"STRONG",{"data-svelte-h":!0}),nt(w)!=="svelte-14ncqy5"&&(w.textContent=P),x=j(T),M=bt(T,U),T.forEach(N),K=j(B),B.forEach(N),this.h()},h(){S(e,"class","svelte-1bb17g9"),S(a,"class","svelte-1bb17g9"),S(d,"class","svelte-1bb17g9"),S(_,"class","count svelte-1bb17g9"),S(t,"class","box svelte-1bb17g9")},m(G,B){tt(G,t,B),b(t,e),b(e,s),b(t,i),b(t,a),b(a,c),b(t,h),b(t,d),b(d,p),b(t,y),b(t,_),b(_,w),b(_,x),b(_,M),b(t,K)},p(G,B){B&1&&r!==(r=G[14].title+"")&&Bt(s,r),B&1&&l!==(l=G[14].value+"")&&Bt(c,l),B&1&&g!==(g=G[14].explain+"")&&Bt(p,g),B&1&&U!==(U=G[14].count+"")&&Bt(M,U)},d(G){G&&N(t)}}}function Hy(n){let t,e,r,s,i,a="Main",l,c,h,d="모두",g,p,y="과학",_,w,P="일상",x,U,M,K="모두",G,B,A="신조어",E,v,T="원단어",R,C,I,et,Z=pe(n[3](n[0])),st=[];for(let X=0;X<Z.length;X+=1)st[X]=$c(zc(n,Z,X));return{c(){t=D("div"),e=D("div"),r=q(),s=D("div"),i=D("button"),i.textContent=a,l=q(),c=D("div"),h=D("button"),h.textContent=d,g=q(),p=D("button"),p.textContent=y,_=q(),w=D("button"),w.textContent=P,x=q(),U=D("div"),M=D("button"),M.textContent=K,G=q(),B=D("button"),B.textContent=A,E=q(),v=D("button"),v.textContent=T,R=q(),C=D("div");for(let X=0;X<st.length;X+=1)st[X].c();this.h()},l(X){t=V(X,"DIV",{class:!0});var rt=z(t);e=V(rt,"DIV",{id:!0,class:!0}),z(e).forEach(N),r=j(rt),s=V(rt,"DIV",{class:!0});var ct=z(s);i=V(ct,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(i)!=="svelte-8azga8"&&(i.textContent=a),ct.forEach(N),l=j(rt),c=V(rt,"DIV",{class:!0});var ht=z(c);h=V(ht,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(h)!=="svelte-u6tz2q"&&(h.textContent=d),g=j(ht),p=V(ht,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(p)!=="svelte-196nohl"&&(p.textContent=y),_=j(ht),w=V(ht,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(w)!=="svelte-9dwnwx"&&(w.textContent=P),ht.forEach(N),x=j(rt),U=V(rt,"DIV",{class:!0});var at=z(U);M=V(at,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(M)!=="svelte-16kawoo"&&(M.textContent=K),G=j(at),B=V(at,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(B)!=="svelte-15k1gku"&&(B.textContent=A),E=j(at),v=V(at,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(v)!=="svelte-1i5u5o6"&&(v.textContent=T),at.forEach(N),R=j(rt),C=V(rt,"DIV",{class:!0});var Et=z(C);for(let dt=0;dt<st.length;dt+=1)st[dt].l(Et);Et.forEach(N),rt.forEach(N),this.h()},h(){S(e,"id","bb"),S(e,"class","svelte-1bb17g9"),S(i,"class","close-button svelte-1bb17g9"),S(s,"class","close-button_div svelte-1bb17g9"),S(h,"class","button svelte-1bb17g9"),Ht(h,"active",n[0]==="모두"),S(p,"class","button svelte-1bb17g9"),Ht(p,"active",n[0]==="과학"),S(w,"class","button svelte-1bb17g9"),Ht(w,"active",n[0]==="일상"),S(c,"class","filter-buttons svelte-1bb17g9"),S(M,"class","button svelte-1bb17g9"),Ht(M,"active",n[1]==="모두"),S(B,"class","button svelte-1bb17g9"),Ht(B,"active",n[1]==="신조어"),S(v,"class","button svelte-1bb17g9"),Ht(v,"active",n[1]==="원단어"),S(U,"class","filter-buttons svelte-1bb17g9"),S(C,"class","container svelte-1bb17g9"),S(t,"class","bbd svelte-1bb17g9")},m(X,rt){tt(X,t,rt),b(t,e),b(t,r),b(t,s),b(s,i),b(t,l),b(t,c),b(c,h),b(c,g),b(c,p),b(c,_),b(c,w),b(t,x),b(t,U),b(U,M),b(U,G),b(U,B),b(U,E),b(U,v),b(t,R),b(t,C);for(let ct=0;ct<st.length;ct+=1)st[ct]&&st[ct].m(C,null);I||(et=[W(i,"click",n[2]),W(h,"click",n[4]),W(p,"click",n[5]),W(w,"click",n[6]),W(M,"click",n[7]),W(B,"click",n[8]),W(v,"click",n[9])],I=!0)},p(X,[rt]){if(rt&1&&Ht(h,"active",X[0]==="모두"),rt&1&&Ht(p,"active",X[0]==="과학"),rt&1&&Ht(w,"active",X[0]==="일상"),rt&2&&Ht(M,"active",X[1]==="모두"),rt&2&&Ht(B,"active",X[1]==="신조어"),rt&2&&Ht(v,"active",X[1]==="원단어"),rt&9){Z=pe(X[3](X[0]));let ct;for(ct=0;ct<Z.length;ct+=1){const ht=zc(X,Z,ct);st[ct]?st[ct].p(ht,rt):(st[ct]=$c(ht),st[ct].c(),st[ct].m(C,null))}for(;ct<st.length;ct+=1)st[ct].d(1);st.length=Z.length}},i:Tt,o:Tt,d(X){X&&N(t),Rn(st,X),I=!1,Oe(et)}}}function Gy(n,t,e){let r,s;de(n,pt,P=>e(10,r=P)),de(n,Mo,P=>e(11,s=P));let i=s,a="모두",l="모두";return[a,l,()=>{Rt(pt,r=0,r)},P=>{if(P==="모두")return i;if(P==="과학")return i.filter(x=>x.tag1===0);if(P==="일상")return i.filter(x=>x.tag1===1)},()=>e(0,a="모두"),()=>e(0,a="과학"),()=>e(0,a="일상"),()=>e(1,l="모두"),()=>e(1,l="신조어"),()=>e(1,l="원단어")]}class Wy extends Ce{constructor(t){super(),Pe(this,t,Gy,Hy,Se,{})}}function Hc(n){let t,e;return{c(){t=D("div"),e=At(n[4]),this.h()},l(r){t=V(r,"DIV",{class:!0});var s=z(t);e=bt(s,n[4]),s.forEach(N),this.h()},h(){S(t,"class","error-message svelte-1ac2j0m")},m(r,s){tt(r,t,s),b(t,e)},p(r,s){s&16&&Bt(e,r[4])},d(r){r&&N(t)}}}function Ky(n){let t,e,r,s,i="신조어",a,l,c,h,d,g="신조어 뜻",p,y,_,w,P,x="신조어의 설명",U,M,K,G,B,A,E,v,T,R="취소",C,I,et=n[4]&&Hc(n);return{c(){t=D("div"),e=D("div"),r=D("div"),s=D("label"),s.textContent=i,a=q(),l=D("input"),c=q(),h=D("div"),d=D("label"),d.textContent=g,p=q(),y=D("input"),_=q(),w=D("div"),P=D("label"),P.textContent=x,U=q(),M=D("input"),K=q(),et&&et.c(),G=q(),B=D("div"),A=D("button"),E=At("보내기"),v=q(),T=D("button"),T.textContent=R,this.h()},l(Z){t=V(Z,"DIV",{class:!0});var st=z(t);e=V(st,"DIV",{class:!0});var X=z(e);r=V(X,"DIV",{class:!0});var rt=z(r);s=V(rt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),nt(s)!=="svelte-1xvfvjg"&&(s.textContent=i),a=j(rt),l=V(rt,"INPUT",{class:!0,type:!0,id:!0}),rt.forEach(N),c=j(X),h=V(X,"DIV",{class:!0});var ct=z(h);d=V(ct,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),nt(d)!=="svelte-1iv6t5o"&&(d.textContent=g),p=j(ct),y=V(ct,"INPUT",{class:!0,type:!0,id:!0}),ct.forEach(N),_=j(X),w=V(X,"DIV",{class:!0});var ht=z(w);P=V(ht,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),nt(P)!=="svelte-lyiets"&&(P.textContent=x),U=j(ht),M=V(ht,"INPUT",{class:!0,type:!0,id:!0}),ht.forEach(N),K=j(X),et&&et.l(X),G=j(X),B=V(X,"DIV",{class:!0});var at=z(B);A=V(at,"BUTTON",{class:!0});var Et=z(A);E=bt(Et,"보내기"),Et.forEach(N),v=j(at),T=V(at,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(T)!=="svelte-1fn0s3j"&&(T.textContent=R),at.forEach(N),X.forEach(N),st.forEach(N),this.h()},h(){S(s,"class","form-label svelte-1ac2j0m"),S(s,"for","title"),S(l,"class","form-input svelte-1ac2j0m"),S(l,"type","text"),S(l,"id","title"),S(r,"class","form-group svelte-1ac2j0m"),S(d,"class","form-label svelte-1ac2j0m"),S(d,"for","value"),S(y,"class","form-input svelte-1ac2j0m"),S(y,"type","text"),S(y,"id","value"),S(h,"class","form-group svelte-1ac2j0m"),S(P,"class","form-label svelte-1ac2j0m"),S(P,"for","explain"),S(M,"class","form-input svelte-1ac2j0m"),S(M,"type","text"),S(M,"id","explain"),S(w,"class","form-group svelte-1ac2j0m"),S(A,"class","form-button svelte-1ac2j0m"),A.disabled=n[3],S(T,"class","form-button cancel-button svelte-1ac2j0m"),S(B,"class","form-buttons svelte-1ac2j0m"),S(e,"class","form-content svelte-1ac2j0m"),S(t,"class","form-container svelte-1ac2j0m")},m(Z,st){tt(Z,t,st),b(t,e),b(e,r),b(r,s),b(r,a),b(r,l),wt(l,n[0]),b(e,c),b(e,h),b(h,d),b(h,p),b(h,y),wt(y,n[1]),b(e,_),b(e,w),b(w,P),b(w,U),b(w,M),wt(M,n[2]),b(e,K),et&&et.m(e,null),b(e,G),b(e,B),b(B,A),b(A,E),b(B,v),b(B,T),C||(I=[W(l,"input",n[7]),W(y,"input",n[8]),W(M,"input",n[9]),W(A,"click",n[5]),W(T,"click",n[6])],C=!0)},p(Z,[st]){st&1&&l.value!==Z[0]&&wt(l,Z[0]),st&2&&y.value!==Z[1]&&wt(y,Z[1]),st&4&&M.value!==Z[2]&&wt(M,Z[2]),Z[4]?et?et.p(Z,st):(et=Hc(Z),et.c(),et.m(e,G)):et&&(et.d(1),et=null),st&8&&(A.disabled=Z[3])},i:Tt,o:Tt,d(Z){Z&&N(t),et&&et.d(),C=!1,Oe(I)}}}function Qy(n,t,e){let r;de(n,pt,_=>e(10,r=_));let s="",i="",a="",l=!1,c="";const h=async()=>{if(!s||!i||!a){e(4,c="All fields are required!");return}e(3,l=!0),e(4,c="");try{if(!(await Re(ze(fe(Ut,"beta"),Un("title","==",s)))).empty){e(4,c="Title already exists! Please choose a different title.");return}await Li(fe(Ut,"beta"),{title:s,value:i,explain:a,count:0}),e(0,s=""),e(1,i=""),e(2,a=""),Rt(pt,r=0,r)}catch(_){console.error("Error adding document: ",_),e(4,c="Error adding document!")}finally{e(3,l=!1)}},d=()=>{e(0,s=""),e(1,i=""),e(2,a=""),e(4,c=""),Rt(pt,r=0,r)};function g(){s=this.value,e(0,s)}function p(){i=this.value,e(1,i)}function y(){a=this.value,e(2,a)}return[s,i,a,l,c,h,d,g,p,y]}class Jy extends Ce{constructor(t){super(),Pe(this,t,Qy,Ky,Se,{})}}function Gc(n,t,e){const r=n.slice();return r[11]=t[e],r[12]=t,r[13]=e,r}function Wc(n){let t,e,r,s,i,a,l,c,h,d,g,p="채택",y,_,w="삭제",P,x,U;function M(){n[4].call(e,n[12],n[13])}function K(){n[5].call(s,n[12],n[13])}function G(){n[6].call(a,n[12],n[13])}function B(){n[7].call(c,n[12],n[13])}function A(){return n[8](n[11])}function E(){return n[9](n[11])}return{c(){t=D("div"),e=D("input"),r=q(),s=D("input"),i=q(),a=D("input"),l=q(),c=D("input"),h=q(),d=D("div"),g=D("button"),g.textContent=p,y=q(),_=D("button"),_.textContent=w,P=q(),this.h()},l(v){t=V(v,"DIV",{class:!0});var T=z(t);e=V(T,"INPUT",{type:!0,class:!0}),r=j(T),s=V(T,"INPUT",{type:!0,class:!0}),i=j(T),a=V(T,"INPUT",{type:!0,class:!0}),l=j(T),c=V(T,"INPUT",{type:!0,class:!0}),h=j(T),d=V(T,"DIV",{});var R=z(d);g=V(R,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(g)!=="svelte-14dxe7a"&&(g.textContent=p),y=j(R),_=V(R,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(_)!=="svelte-zdjrp5"&&(_.textContent=w),R.forEach(N),P=j(T),T.forEach(N),this.h()},h(){S(e,"type","text"),S(e,"class","svelte-52a7gl"),S(s,"type","text"),S(s,"class","svelte-52a7gl"),S(a,"type","text"),S(a,"class","svelte-52a7gl"),S(c,"type","number"),S(c,"class","svelte-52a7gl"),S(g,"class","accept-button svelte-52a7gl"),S(_,"class","delete-button svelte-52a7gl"),S(t,"class","item-box svelte-52a7gl")},m(v,T){tt(v,t,T),b(t,e),wt(e,n[11].title),b(t,r),b(t,s),wt(s,n[11].value),b(t,i),b(t,a),wt(a,n[11].explain),b(t,l),b(t,c),wt(c,n[11].count),b(t,h),b(t,d),b(d,g),b(d,y),b(d,_),b(t,P),x||(U=[W(e,"input",M),W(s,"input",K),W(a,"input",G),W(c,"input",B),W(g,"click",A),W(_,"click",E)],x=!0)},p(v,T){n=v,T&1&&e.value!==n[11].title&&wt(e,n[11].title),T&1&&s.value!==n[11].value&&wt(s,n[11].value),T&1&&a.value!==n[11].explain&&wt(a,n[11].explain),T&1&&au(c.value)!==n[11].count&&wt(c,n[11].count)},d(v){v&&N(t),x=!1,Oe(U)}}}function Xy(n){let t,e,r="Main",s,i,a,l,c=pe(n[0]),h=[];for(let d=0;d<c.length;d+=1)h[d]=Wc(Gc(n,c,d));return{c(){t=D("div"),e=D("button"),e.textContent=r,s=q(),i=D("div");for(let d=0;d<h.length;d+=1)h[d].c();this.h()},l(d){t=V(d,"DIV",{class:!0});var g=z(t);e=V(g,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(e)!=="svelte-8azga8"&&(e.textContent=r),g.forEach(N),s=j(d),i=V(d,"DIV",{class:!0});var p=z(i);for(let y=0;y<h.length;y+=1)h[y].l(p);p.forEach(N),this.h()},h(){S(e,"class","close-button svelte-52a7gl"),S(t,"class","close-button_div svelte-52a7gl"),S(i,"class","container svelte-52a7gl")},m(d,g){tt(d,t,g),b(t,e),tt(d,s,g),tt(d,i,g);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(i,null);a||(l=W(e,"click",n[3]),a=!0)},p(d,[g]){if(g&7){c=pe(d[0]);let p;for(p=0;p<c.length;p+=1){const y=Gc(d,c,p);h[p]?h[p].p(y,g):(h[p]=Wc(y),h[p].c(),h[p].m(i,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=c.length}},i:Tt,o:Tt,d(d){d&&(N(t),N(s),N(i)),Rn(h,d),a=!1,l()}}}function Yy(n,t,e){let r;de(n,pt,_=>e(10,r=_));let s=[];Gn(async()=>{const _=await Re(fe(Ut,"beta"));e(0,s=_.docs.map(w=>({id:w.id,...w.data()})))});const i=async(_,w,P,x,U)=>{try{await Li(fe(Ut,"datas"),{title:w,value:P,explain:x,count:U}),await hi(Hn(Ut,"beta",_)),console.log("Document successfully written and deleted!"),e(0,s=s.filter(M=>M.id!==_))}catch(M){console.error("Error adding or deleting document: ",M)}},a=async _=>{try{await hi(Hn(Ut,"beta",_)),console.log("Document successfully deleted!"),e(0,s=s.filter(w=>w.id!==_))}catch(w){console.error("Error deleting document: ",w)}},l=()=>{Rt(pt,r=0,r)};function c(_,w){_[w].title=this.value,e(0,s)}function h(_,w){_[w].value=this.value,e(0,s)}function d(_,w){_[w].explain=this.value,e(0,s)}function g(_,w){_[w].count=au(this.value),e(0,s)}return[s,i,a,l,c,h,d,g,_=>i(_.id,_.title,_.value,_.explain,_.count),_=>a(_.id)]}class Zy extends Ce{constructor(t){super(),Pe(this,t,Yy,Xy,Se,{})}}function tE(n){let t,e,r="Main",s,i,a,l,c,h,d,g="삭제",p,y;return{c(){t=D("div"),e=D("button"),e.textContent=r,s=q(),i=D("main"),a=D("div"),l=D("input"),c=q(),h=D("div"),d=D("button"),d.textContent=g,this.h()},l(_){t=V(_,"DIV",{class:!0});var w=z(t);e=V(w,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(e)!=="svelte-8azga8"&&(e.textContent=r),w.forEach(N),s=j(_),i=V(_,"MAIN",{class:!0});var P=z(i);a=V(P,"DIV",{style:!0});var x=z(a);l=V(x,"INPUT",{type:!0,placeholder:!0,style:!0,class:!0}),c=j(x),h=V(x,"DIV",{style:!0});var U=z(h);d=V(U,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),nt(d)!=="svelte-1w89kx2"&&(d.textContent=g),U.forEach(N),x.forEach(N),P.forEach(N),this.h()},h(){S(e,"class","close-button svelte-mo15yd"),S(t,"class","close-button_div svelte-mo15yd"),S(l,"type","text"),S(l,"placeholder","Title 입력"),Ft(l,"width","300px"),Ft(l,"padding","10px"),Ft(l,"font-size","16px"),S(l,"class","svelte-mo15yd"),Ft(d,"padding","10px 20px"),Ft(d,"font-size","16px"),S(d,"class","svelte-mo15yd"),Ft(h,"margin-top","20px"),Ft(a,"text-align","center"),Ft(a,"margin-top","50px"),S(i,"class","svelte-mo15yd")},m(_,w){tt(_,t,w),b(t,e),tt(_,s,w),tt(_,i,w),b(i,a),b(a,l),wt(l,n[0]),b(a,c),b(a,h),b(h,d),p||(y=[W(e,"click",n[2]),W(l,"input",n[3]),W(d,"click",n[1])],p=!0)},p(_,[w]){w&1&&l.value!==_[0]&&wt(l,_[0])},i:Tt,o:Tt,d(_){_&&(N(t),N(s),N(i)),p=!1,Oe(y)}}}function eE(n,t,e){let r;de(n,pt,c=>e(4,r=c));let s="";async function i(){if(!s.trim()){alert("Please enter a search term");return}try{const c=ze(fe(Ut,"datas"),Un("title","==",s)),h=await Re(c),d=[];h.forEach(g=>{d.push(hi(Hn(Ut,"datas",g.id)))}),await Promise.all(d),alert("값이 삭제됨"),e(0,s="")}catch(c){console.error("Error deleting documents: ",c),alert("Error deleting documents")}}const a=()=>{Rt(pt,r=0,r)};function l(){s=this.value,e(0,s)}return[s,i,a,l]}class nE extends Ce{constructor(t){super(),Pe(this,t,eE,tE,Se,{})}}function Kc(n){let t,e;return{c(){t=D("div"),e=At(n[1]),this.h()},l(r){t=V(r,"DIV",{class:!0});var s=z(t);e=bt(s,n[1]),s.forEach(N),this.h()},h(){S(t,"class","error svelte-bs8ckl")},m(r,s){tt(r,t,s),b(t,e)},p(r,s){s&2&&Bt(e,r[1])},d(r){r&&N(t)}}}function rE(n){let t,e,r,s="홈",i,a,l,c,h="전송",d,g,p,y=n[1]&&Kc(n);return{c(){t=D("div"),e=D("div"),r=D("button"),r.textContent=s,i=q(),a=D("input"),l=q(),c=D("button"),c.textContent=h,d=q(),y&&y.c(),this.h()},l(_){t=V(_,"DIV",{class:!0});var w=z(t);e=V(w,"DIV",{class:!0});var P=z(e);r=V(P,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(r)!=="svelte-oxv20b"&&(r.textContent=s),P.forEach(N),i=j(w),a=V(w,"INPUT",{type:!0,placeholder:!0,class:!0}),l=j(w),c=V(w,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(c)!=="svelte-1sfb7u5"&&(c.textContent=h),d=j(w),y&&y.l(w),w.forEach(N),this.h()},h(){S(r,"class","close-button svelte-bs8ckl"),S(e,"class","close-button_div svelte-bs8ckl"),S(a,"type","text"),S(a,"placeholder","신고내용 입력 (50자 까지)"),S(a,"class","svelte-bs8ckl"),S(c,"class","svelte-bs8ckl"),S(t,"class","container svelte-bs8ckl")},m(_,w){tt(_,t,w),b(t,e),b(e,r),b(t,i),b(t,a),wt(a,n[0]),b(t,l),b(t,c),b(t,d),y&&y.m(t,null),g||(p=[W(r,"click",n[3]),W(a,"input",n[4]),W(c,"click",n[2])],g=!0)},p(_,[w]){w&1&&a.value!==_[0]&&wt(a,_[0]),_[1]?y?y.p(_,w):(y=Kc(_),y.c(),y.m(t,null)):y&&(y.d(1),y=null)},i:Tt,o:Tt,d(_){_&&N(t),y&&y.d(),g=!1,Oe(p)}}}function sE(n,t,e){let r;de(n,pt,h=>e(6,r=h));let s="",i="";Gn(()=>{const h=ei();Ko(h,d=>{d&&d.email})});const a=async()=>{if(s.length>50){e(1,i="50자를 넘지 말아주세요");return}const d=ei().currentUser;if(!d){e(1,i="내용을 적어주세요");return}try{await Li(fe(Ut,"report"),{user:d.email,contents:s}),e(0,s=""),e(1,i="")}catch(g){e(1,i="Error adding document: "+g.message)}},l=()=>{Rt(pt,r=0,r)};function c(){s=this.value,e(0,s)}return[s,i,a,l,c]}class iE extends Ce{constructor(t){super(),Pe(this,t,sE,rE,Se,{})}}function Qc(n,t,e){const r=n.slice();return r[8]=t[e],r[9]=t,r[10]=e,r}function Jc(n){let t,e,r,s,i,a,l="삭제",c,h,d;function g(){n[3].call(e,n[9],n[10])}function p(){n[4].call(s,n[9],n[10])}function y(){return n[5](n[8])}return{c(){t=D("div"),e=D("input"),r=q(),s=D("input"),i=q(),a=D("button"),a.textContent=l,c=q(),this.h()},l(_){t=V(_,"DIV",{class:!0});var w=z(t);e=V(w,"INPUT",{type:!0,class:!0}),r=j(w),s=V(w,"INPUT",{type:!0,class:!0}),i=j(w),a=V(w,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(a)!=="svelte-1i7wviu"&&(a.textContent=l),c=j(w),w.forEach(N),this.h()},h(){S(e,"type","text"),e.readOnly=!0,S(e,"class","svelte-1evkr3z"),S(s,"type","text"),s.readOnly=!0,S(s,"class","svelte-1evkr3z"),S(a,"class","svelte-1evkr3z"),S(t,"class","item-box svelte-1evkr3z")},m(_,w){tt(_,t,w),b(t,e),wt(e,n[8].user),b(t,r),b(t,s),wt(s,n[8].contents),b(t,i),b(t,a),b(t,c),h||(d=[W(e,"input",g),W(s,"input",p),W(a,"click",y)],h=!0)},p(_,w){n=_,w&1&&e.value!==n[8].user&&wt(e,n[8].user),w&1&&s.value!==n[8].contents&&wt(s,n[8].contents)},d(_){_&&N(t),h=!1,Oe(d)}}}function oE(n){let t,e,r="Main",s,i,a,l,c=pe(n[0]),h=[];for(let d=0;d<c.length;d+=1)h[d]=Jc(Qc(n,c,d));return{c(){t=D("div"),e=D("button"),e.textContent=r,s=q(),i=D("div");for(let d=0;d<h.length;d+=1)h[d].c();this.h()},l(d){t=V(d,"DIV",{class:!0});var g=z(t);e=V(g,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(e)!=="svelte-8azga8"&&(e.textContent=r),g.forEach(N),s=j(d),i=V(d,"DIV",{class:!0});var p=z(i);for(let y=0;y<h.length;y+=1)h[y].l(p);p.forEach(N),this.h()},h(){S(e,"class","close-button svelte-1evkr3z"),S(t,"class","close-button_div svelte-1evkr3z"),S(i,"class","container svelte-1evkr3z")},m(d,g){tt(d,t,g),b(t,e),tt(d,s,g),tt(d,i,g);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(i,null);a||(l=W(e,"click",n[2]),a=!0)},p(d,[g]){if(g&3){c=pe(d[0]);let p;for(p=0;p<c.length;p+=1){const y=Qc(d,c,p);h[p]?h[p].p(y,g):(h[p]=Jc(y),h[p].c(),h[p].m(i,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=c.length}},i:Tt,o:Tt,d(d){d&&(N(t),N(s),N(i)),Rn(h,d),a=!1,l()}}}function aE(n,t,e){let r;de(n,pt,g=>e(6,r=g));let s=[];Gn(async()=>{await i()});async function i(){const g=await Re(fe(Ut,"report"));e(0,s=g.docs.map(p=>({id:p.id,...p.data()})))}async function a(g){try{console.log(`Attempting to delete documents with title: ${g}`);const p=ze(fe(Ut,"report"),Un("contents","==",g)),y=await Re(p);if(y.empty){console.log("No matching documents found"),alert("No matching documents found");return}const _=[];y.forEach(w=>{console.log(`Deleting document with ID: ${w.id}`),_.push(hi(Hn(Ut,"report",w.id)))}),await Promise.all(_),alert("값이 삭제됨"),await i()}catch(p){console.error("Error deleting documents: ",p),alert("Error deleting documents")}}const l=()=>{Rt(pt,r=0,r)};function c(g,p){g[p].user=this.value,e(0,s)}function h(g,p){g[p].contents=this.value,e(0,s)}return[s,a,l,c,h,g=>a(g.contents)]}class lE extends Ce{constructor(t){super(),Pe(this,t,aE,oE,Se,{})}}function Xc(n,t,e){const r=n.slice();return r[11]=t[e],r}function Yc(n){let t,e,r=n[11].title+"",s,i,a,l=n[11].value+"",c,h,d,g=n[11].explain+"",p,y,_,w,P=n[11].count+"",x;return{c(){t=D("div"),e=D("div"),s=At(r),i=q(),a=D("div"),c=At(l),h=q(),d=D("div"),p=At(g),y=q(),_=D("div"),w=At("Count: "),x=At(P),this.h()},l(U){t=V(U,"DIV",{class:!0});var M=z(t);e=V(M,"DIV",{class:!0});var K=z(e);s=bt(K,r),K.forEach(N),i=j(M),a=V(M,"DIV",{class:!0});var G=z(a);c=bt(G,l),G.forEach(N),h=j(M),d=V(M,"DIV",{class:!0});var B=z(d);p=bt(B,g),B.forEach(N),y=j(M),_=V(M,"DIV",{class:!0});var A=z(_);w=bt(A,"Count: "),x=bt(A,P),A.forEach(N),M.forEach(N),this.h()},h(){S(e,"class","title svelte-1qmdyd6"),S(a,"class","value svelte-1qmdyd6"),S(d,"class","explain svelte-1qmdyd6"),S(_,"class","count svelte-1qmdyd6"),S(t,"class","box svelte-1qmdyd6")},m(U,M){tt(U,t,M),b(t,e),b(e,s),b(t,i),b(t,a),b(a,c),b(t,h),b(t,d),b(d,p),b(t,y),b(t,_),b(_,w),b(_,x)},p(U,M){M&1&&r!==(r=U[11].title+"")&&Bt(s,r),M&1&&l!==(l=U[11].value+"")&&Bt(c,l),M&1&&g!==(g=U[11].explain+"")&&Bt(p,g),M&1&&P!==(P=U[11].count+"")&&Bt(x,P)},d(U){U&&N(t)}}}function Zc(n){let t,e,r="더 불러오기",s,i;return{c(){t=D("div"),e=D("button"),e.textContent=r,this.h()},l(a){t=V(a,"DIV",{class:!0});var l=z(t);e=V(l,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(e)!=="svelte-1bu3r2x"&&(e.textContent=r),l.forEach(N),this.h()},h(){S(e,"class","svelte-1qmdyd6"),S(t,"class","button-container svelte-1qmdyd6")},m(a,l){tt(a,t,l),b(t,e),s||(i=W(e,"click",n[4]),s=!0)},p:Tt,d(a){a&&N(t),s=!1,i()}}}function cE(n){let t,e,r="홈",s,i,a,l,c,h=pe(n[0]),d=[];for(let p=0;p<h.length;p+=1)d[p]=Yc(Xc(n,h,p));let g=!n[1]&&Zc(n);return{c(){t=D("div"),e=D("button"),e.textContent=r,s=q(),i=D("main");for(let p=0;p<d.length;p+=1)d[p].c();a=q(),g&&g.c(),this.h()},l(p){t=V(p,"DIV",{class:!0});var y=z(t);e=V(y,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(e)!=="svelte-oxv20b"&&(e.textContent=r),y.forEach(N),s=j(p),i=V(p,"MAIN",{class:!0});var _=z(i);for(let w=0;w<d.length;w+=1)d[w].l(_);a=j(_),g&&g.l(_),_.forEach(N),this.h()},h(){S(e,"class","close-button svelte-1qmdyd6"),S(t,"class","close-button_div svelte-1qmdyd6"),S(i,"class","svelte-1qmdyd6")},m(p,y){tt(p,t,y),b(t,e),tt(p,s,y),tt(p,i,y);for(let _=0;_<d.length;_+=1)d[_]&&d[_].m(i,null);b(i,a),g&&g.m(i,null),l||(c=W(e,"click",n[3]),l=!0)},p(p,[y]){if(y&1){h=pe(p[0]);let _;for(_=0;_<h.length;_+=1){const w=Xc(p,h,_);d[_]?d[_].p(w,y):(d[_]=Yc(w),d[_].c(),d[_].m(i,a))}for(;_<d.length;_+=1)d[_].d(1);d.length=h.length}p[1]?g&&(g.d(1),g=null):g?g.p(p,y):(g=Zc(p),g.c(),g.m(i,null))},i:Tt,o:Tt,d(p){p&&(N(t),N(s),N(i)),Rn(d,p),g&&g.d(),l=!1,c()}}}function uE(n,t,e){let r;de(n,pt,p=>e(8,r=p));let s=[],i=[],a=null,l=!1;const c=async(p=!1)=>{if(l)return;const y=fe(Ut,"datas");let _;p&&a?_=ze(y,ui("count","desc"),Sy(a),Oo(100)):_=ze(y,ui("count","desc"),Oo(100));const w=await Re(_),P=w.docs.map(U=>U.data()),x=p?[...s,...P]:P;s=Array.from(new Set(x.map(U=>JSON.stringify(U)))).map(U=>JSON.parse(U)),h(),a=w.docs[w.docs.length-1],localStorage.setItem("datas",JSON.stringify(s)),localStorage.setItem("lastVisible",JSON.stringify(a)),P.length<100&&(e(1,l=!0),localStorage.setItem("allDataLoaded","true"))},h=()=>{e(0,i=[]),e(0,i=s)};return Gn(()=>{const p=localStorage.getItem("datas"),y=localStorage.getItem("lastVisible"),_=localStorage.getItem("allDataLoaded");p&&(s=JSON.parse(p),h()),y&&(a=JSON.parse(y)),_&&e(1,l=_==="true"),p||c()}),[i,l,c,()=>{Rt(pt,r=0,r)},()=>c(!0)]}class hE extends Ce{constructor(t){super(),Pe(this,t,uE,cE,Se,{})}}function tu(n,t,e){const r=n.slice();return r[18]=t[e],r}function eu(n){let t,e,r="Main",s,i,a="시작",l,c;return{c(){t=D("div"),e=D("button"),e.textContent=r,s=q(),i=D("button"),i.textContent=a,this.h()},l(h){t=V(h,"DIV",{class:!0});var d=z(t);e=V(d,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(e)!=="svelte-8azga8"&&(e.textContent=r),d.forEach(N),s=j(h),i=V(h,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(i)!=="svelte-zrbsg9"&&(i.textContent=a),this.h()},h(){S(e,"class","close-button svelte-1irqs7m"),S(t,"class","close-button_div svelte-1irqs7m"),S(i,"class","svelte-1irqs7m")},m(h,d){tt(h,t,d),b(t,e),tt(h,s,d),tt(h,i,d),l||(c=[W(e,"click",n[8]),W(i,"click",n[5])],l=!0)},p:Tt,d(h){h&&(N(t),N(s),N(i)),l=!1,Oe(c)}}}function nu(n){let t,e,r,s,i,a,l,c,h,d,g,p,y,_,w=pe(n[1]),P=[];for(let x=0;x<w.length;x+=1)P[x]=ru(tu(n,w,x));return{c(){t=D("div"),e=D("h2"),r=At("남은시간: "),s=At(n[3]),i=At("s"),a=q(),l=D("h2"),c=At("점수: "),h=At(n[2]),d=q(),g=D("p"),p=At(n[0]),y=q(),_=D("div");for(let x=0;x<P.length;x+=1)P[x].c();this.h()},l(x){t=V(x,"DIV",{});var U=z(t);e=V(U,"H2",{class:!0});var M=z(e);r=bt(M,"남은시간: "),s=bt(M,n[3]),i=bt(M,"s"),M.forEach(N),a=j(U),l=V(U,"H2",{class:!0});var K=z(l);c=bt(K,"점수: "),h=bt(K,n[2]),K.forEach(N),d=j(U),g=V(U,"P",{class:!0});var G=z(g);p=bt(G,n[0]),G.forEach(N),y=j(U),_=V(U,"DIV",{class:!0});var B=z(_);for(let A=0;A<P.length;A+=1)P[A].l(B);B.forEach(N),U.forEach(N),this.h()},h(){S(e,"class","svelte-1irqs7m"),S(l,"class","svelte-1irqs7m"),S(g,"class","svelte-1irqs7m"),S(_,"class","options svelte-1irqs7m")},m(x,U){tt(x,t,U),b(t,e),b(e,r),b(e,s),b(e,i),b(t,a),b(t,l),b(l,c),b(l,h),b(t,d),b(t,g),b(g,p),b(t,y),b(t,_);for(let M=0;M<P.length;M+=1)P[M]&&P[M].m(_,null)},p(x,U){if(U&8&&Bt(s,x[3]),U&4&&Bt(h,x[2]),U&1&&Bt(p,x[0]),U&66){w=pe(x[1]);let M;for(M=0;M<w.length;M+=1){const K=tu(x,w,M);P[M]?P[M].p(K,U):(P[M]=ru(K),P[M].c(),P[M].m(_,null))}for(;M<P.length;M+=1)P[M].d(1);P.length=w.length}},d(x){x&&N(t),Rn(P,x)}}}function ru(n){let t,e=n[18]+"",r,s,i;function a(){return n[9](n[18])}return{c(){t=D("div"),r=At(e),this.h()},l(l){t=V(l,"DIV",{class:!0});var c=z(t);r=bt(c,e),c.forEach(N),this.h()},h(){S(t,"class","option svelte-1irqs7m")},m(l,c){tt(l,t,c),b(t,r),s||(i=W(t,"click",a),s=!0)},p(l,c){n=l,c&2&&e!==(e=n[18]+"")&&Bt(r,e)},d(l){l&&N(t),s=!1,i()}}}function su(n){let t,e,r,s,i,a="점수 업로드",l,c;return{c(){t=D("h2"),e=At("타임오버! 당신의 점수: "),r=At(n[2]),s=q(),i=D("button"),i.textContent=a,this.h()},l(h){t=V(h,"H2",{class:!0});var d=z(t);e=bt(d,"타임오버! 당신의 점수: "),r=bt(d,n[2]),d.forEach(N),s=j(h),i=V(h,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),nt(i)!=="svelte-g070rx"&&(i.textContent=a),this.h()},h(){S(t,"class","svelte-1irqs7m"),S(i,"id","scup"),S(i,"class","svelte-1irqs7m")},m(h,d){tt(h,t,d),b(t,e),b(t,r),tt(h,s,d),tt(h,i,d),l||(c=W(i,"click",n[7]),l=!0)},p(h,d){d&4&&Bt(r,h[2])},d(h){h&&(N(t),N(s),N(i)),l=!1,c()}}}function dE(n){let t,e,r,s=!n[4]&&eu(n),i=n[4]&&nu(n),a=!n[4]&&n[3]===0&&su(n);return{c(){t=D("main"),s&&s.c(),e=q(),i&&i.c(),r=q(),a&&a.c(),this.h()},l(l){t=V(l,"MAIN",{class:!0});var c=z(t);s&&s.l(c),e=j(c),i&&i.l(c),r=j(c),a&&a.l(c),c.forEach(N),this.h()},h(){S(t,"class","game svelte-1irqs7m")},m(l,c){tt(l,t,c),s&&s.m(t,null),b(t,e),i&&i.m(t,null),b(t,r),a&&a.m(t,null)},p(l,[c]){l[4]?s&&(s.d(1),s=null):s?s.p(l,c):(s=eu(l),s.c(),s.m(t,e)),l[4]?i?i.p(l,c):(i=nu(l),i.c(),i.m(t,r)):i&&(i.d(1),i=null),!l[4]&&l[3]===0?a?a.p(l,c):(a=su(l),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},i:Tt,o:Tt,d(l){l&&N(t),s&&s.d(),i&&i.d(),a&&a.d()}}}function fE(n,t,e){let r;de(n,pt,G=>e(13,r=G));let s=[],i=[],a="",l=[],c=0,h=30,d,g=!1;const y=ei().currentUser;async function _(){const G=await Re(fe(Ut,"datas"));s=[],i=[],G.forEach(B=>{s.push(B.data().explain),i.push(B.data().title)})}async function w(){e(4,g=!0),e(2,c=0),e(3,h=30),await _(),P(),d=setInterval(()=>{h>0?e(3,h--,h):(clearInterval(d),e(4,g=!1),uploadScorePrompt())},1e3)}function P(){if(s.length===0||i.length===0)return;e(0,a=s[Math.floor(Math.random()*s.length)]);const G=i[s.indexOf(a)];let B=i.filter(A=>A!==G);e(1,l=[G,...B.sort(()=>.5-Math.random()).slice(0,5)].sort(()=>.5-Math.random()))}function x(G){const B=i[s.indexOf(a)];G===B?e(2,c++,c):e(2,c--,c),P()}async function U(){try{const G=Hn(Ut,"score",y.email);await Oy(G,{sc:c},{merge:!0}),alert("Score uploaded successfully."),Rt(pt,r=0,r)}catch(G){console.error("Error adding document: ",G),alert("Failed to upload score.")}}return[a,l,c,h,g,w,x,U,()=>{Rt(pt,r=0,r)},G=>x(G)]}class pE extends Ce{constructor(t){super(),Pe(this,t,fE,dE,Se,{})}}function iu(n,t,e){const r=n.slice();return r[3]=t[e],r}function ou(n){let t,e,r=n[3].index+"",s,i,a=n[3].sc+"",l,c,h,d=n[3].id+"",g,p;return{c(){t=D("div"),e=D("span"),s=At(r),i=At("위 ["),l=At(a),c=At("점]"),h=q(),g=At(d),p=q(),this.h()},l(y){t=V(y,"DIV",{class:!0});var _=z(t);e=V(_,"SPAN",{class:!0});var w=z(e);s=bt(w,r),i=bt(w,"위 ["),l=bt(w,a),c=bt(w,"점]"),w.forEach(N),h=j(_),g=bt(_,d),p=j(_),_.forEach(N),this.h()},h(){S(e,"class","svelte-40vwu"),S(t,"class","box svelte-40vwu")},m(y,_){tt(y,t,_),b(t,e),b(e,s),b(e,i),b(e,l),b(e,c),b(t,h),b(t,g),b(t,p)},p(y,_){_&1&&r!==(r=y[3].index+"")&&Bt(s,r),_&1&&a!==(a=y[3].sc+"")&&Bt(l,a),_&1&&d!==(d=y[3].id+"")&&Bt(g,d)},d(y){y&&N(t)}}}function mE(n){let t,e,r,s="Main",i,a,l,c,h,d,g=pe(n[0]),p=[];for(let y=0;y<g.length;y+=1)p[y]=ou(iu(n,g,y));return{c(){t=D("div"),e=D("div"),r=D("button"),r.textContent=s,i=q(),a=D("div"),l=q(),c=D("div");for(let y=0;y<p.length;y+=1)p[y].c();this.h()},l(y){t=V(y,"DIV",{class:!0});var _=z(t);e=V(_,"DIV",{class:!0});var w=z(e);r=V(w,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(r)!=="svelte-8azga8"&&(r.textContent=s),w.forEach(N),i=j(_),a=V(_,"DIV",{id:!0,class:!0}),z(a).forEach(N),l=j(_),c=V(_,"DIV",{class:!0});var P=z(c);for(let x=0;x<p.length;x+=1)p[x].l(P);P.forEach(N),_.forEach(N),this.h()},h(){S(r,"class","close-button svelte-40vwu"),S(e,"class","close-button_div svelte-40vwu"),S(a,"id","c"),S(a,"class","svelte-40vwu"),S(c,"class","container svelte-40vwu"),S(t,"class","os svelte-40vwu")},m(y,_){tt(y,t,_),b(t,e),b(e,r),b(t,i),b(t,a),b(t,l),b(t,c);for(let w=0;w<p.length;w+=1)p[w]&&p[w].m(c,null);h||(d=W(r,"click",n[1]),h=!0)},p(y,[_]){if(_&1){g=pe(y[0]);let w;for(w=0;w<g.length;w+=1){const P=iu(y,g,w);p[w]?p[w].p(P,_):(p[w]=ou(P),p[w].c(),p[w].m(c,null))}for(;w<p.length;w+=1)p[w].d(1);p.length=g.length}},i:Tt,o:Tt,d(y){y&&N(t),Rn(p,y),h=!1,d()}}}function gE(n,t,e){let r;de(n,pt,a=>e(2,r=a));let s=[];return Gn(async()=>{const a=fe(Ut,"score"),l=ze(a,ui("sc","desc")),c=await Re(l);e(0,s=c.docs.map((h,d)=>({id:h.id,index:d+1,sc:h.data().sc})))}),[s,()=>{Rt(pt,r=0,r)}]}class _E extends Ce{constructor(t){super(),Pe(this,t,gE,mE,Se,{})}}function vE(n){let t,e,r,s="로그인",i,a,l="Google",c,h;return{c(){t=D("div"),e=D("div"),r=D("h1"),r.textContent=s,i=q(),a=D("button"),a.textContent=l,this.h()},l(d){t=V(d,"DIV",{id:!0,class:!0});var g=z(t);e=V(g,"DIV",{class:!0});var p=z(e);r=V(p,"H1",{class:!0,"data-svelte-h":!0}),nt(r)!=="svelte-1bvi8l2"&&(r.textContent=s),i=j(p),a=V(p,"BUTTON",{class:!0,"data-svelte-h":!0}),nt(a)!=="svelte-g8tqx5"&&(a.textContent=l),p.forEach(N),g.forEach(N),this.h()},h(){S(r,"class","svelte-1palf0z"),S(a,"class","svelte-1palf0z"),S(e,"class","login-container svelte-1palf0z"),S(t,"id","L_body"),S(t,"class","svelte-1palf0z")},m(d,g){tt(d,t,g),b(t,e),b(e,r),b(e,i),b(e,a),c||(h=W(a,"click",n[3]),c=!0)},p:Tt,i:Tt,o:Tt,d(d){d&&N(t),c=!1,h()}}}function yE(n){let t,e,r,s;const i=[DE,kE,PE,CE,SE,RE,bE,AE,wE,TE,IE],a=[];function l(c,h){return c[2]==0?0:c[2]==1?1:c[2]==2?2:c[2]==3?3:c[2]==4?4:c[2]==5?5:c[2]==6?6:c[2]==7?7:c[2]==8?8:c[2]==9?9:c[2]==10?10:-1}return~(t=l(n))&&(e=a[t]=i[t](n)),{c(){e&&e.c(),r=wl()},l(c){e&&e.l(c),r=wl()},m(c,h){~t&&a[t].m(c,h),tt(c,r,h),s=!0},p(c,h){let d=t;t=l(c),t!==d&&(e&&(cu(),_e(a[d],1,1,()=>{a[d]=null}),lu()),~t?(e=a[t],e||(e=a[t]=i[t](c),e.c()),ve(e,1),e.m(r.parentNode,r)):e=null)},i(c){s||(ve(e),s=!0)},o(c){_e(e),s=!1},d(c){c&&N(r),~t&&a[t].d(c)}}}function EE(n){let t,e="[ Developer : G37 ]";return{c(){t=D("div"),t.textContent=e,this.h()},l(r){t=V(r,"DIV",{class:!0,"data-svelte-h":!0}),nt(t)!=="svelte-67okfr"&&(t.textContent=e),this.h()},h(){S(t,"class","loading-screen svelte-1palf0z")},m(r,s){tt(r,t,s)},p:Tt,i:Tt,o:Tt,d(r){r&&N(t)}}}function IE(n){let t,e;return t=new _E({}),{c(){Me(t.$$.fragment)},l(r){Le(t.$$.fragment,r)},m(r,s){xe(t,r,s),e=!0},i(r){e||(ve(t.$$.fragment,r),e=!0)},o(r){_e(t.$$.fragment,r),e=!1},d(r){Ue(t,r)}}}function TE(n){let t,e;return t=new pE({}),{c(){Me(t.$$.fragment)},l(r){Le(t.$$.fragment,r)},m(r,s){xe(t,r,s),e=!0},i(r){e||(ve(t.$$.fragment,r),e=!0)},o(r){_e(t.$$.fragment,r),e=!1},d(r){Ue(t,r)}}}function wE(n){let t,e;return t=new hE({}),{c(){Me(t.$$.fragment)},l(r){Le(t.$$.fragment,r)},m(r,s){xe(t,r,s),e=!0},i(r){e||(ve(t.$$.fragment,r),e=!0)},o(r){_e(t.$$.fragment,r),e=!1},d(r){Ue(t,r)}}}function AE(n){let t,e;return t=new lE({}),{c(){Me(t.$$.fragment)},l(r){Le(t.$$.fragment,r)},m(r,s){xe(t,r,s),e=!0},i(r){e||(ve(t.$$.fragment,r),e=!0)},o(r){_e(t.$$.fragment,r),e=!1},d(r){Ue(t,r)}}}function bE(n){let t,e;return t=new iE({}),{c(){Me(t.$$.fragment)},l(r){Le(t.$$.fragment,r)},m(r,s){xe(t,r,s),e=!0},i(r){e||(ve(t.$$.fragment,r),e=!0)},o(r){_e(t.$$.fragment,r),e=!1},d(r){Ue(t,r)}}}function RE(n){let t,e;return t=new nE({}),{c(){Me(t.$$.fragment)},l(r){Le(t.$$.fragment,r)},m(r,s){xe(t,r,s),e=!0},i(r){e||(ve(t.$$.fragment,r),e=!0)},o(r){_e(t.$$.fragment,r),e=!1},d(r){Ue(t,r)}}}function SE(n){let t,e;return t=new Zy({}),{c(){Me(t.$$.fragment)},l(r){Le(t.$$.fragment,r)},m(r,s){xe(t,r,s),e=!0},i(r){e||(ve(t.$$.fragment,r),e=!0)},o(r){_e(t.$$.fragment,r),e=!1},d(r){Ue(t,r)}}}function CE(n){let t,e;return t=new Jy({}),{c(){Me(t.$$.fragment)},l(r){Le(t.$$.fragment,r)},m(r,s){xe(t,r,s),e=!0},i(r){e||(ve(t.$$.fragment,r),e=!0)},o(r){_e(t.$$.fragment,r),e=!1},d(r){Ue(t,r)}}}function PE(n){let t,e;return t=new Wy({}),{c(){Me(t.$$.fragment)},l(r){Le(t.$$.fragment,r)},m(r,s){xe(t,r,s),e=!0},i(r){e||(ve(t.$$.fragment,r),e=!0)},o(r){_e(t.$$.fragment,r),e=!1},d(r){Ue(t,r)}}}function kE(n){let t,e;return t=new $y({}),{c(){Me(t.$$.fragment)},l(r){Le(t.$$.fragment,r)},m(r,s){xe(t,r,s),e=!0},i(r){e||(ve(t.$$.fragment,r),e=!0)},o(r){_e(t.$$.fragment,r),e=!1},d(r){Ue(t,r)}}}function DE(n){let t,e;return t=new qy({}),{c(){Me(t.$$.fragment)},l(r){Le(t.$$.fragment,r)},m(r,s){xe(t,r,s),e=!0},i(r){e||(ve(t.$$.fragment,r),e=!0)},o(r){_e(t.$$.fragment,r),e=!1},d(r){Ue(t,r)}}}function VE(n){let t,e,r,s;const i=[EE,yE,vE],a=[];function l(c,h){return c[1]?0:c[0]?1:2}return e=l(n),r=a[e]=i[e](n),{c(){t=D("main"),r.c(),this.h()},l(c){t=V(c,"MAIN",{class:!0});var h=z(t);r.l(h),h.forEach(N),this.h()},h(){S(t,"class","svelte-1palf0z")},m(c,h){tt(c,t,h),a[e].m(t,null),s=!0},p(c,[h]){let d=e;e=l(c),e===d?a[e].p(c,h):(cu(),_e(a[d],1,1,()=>{a[d]=null}),lu(),r=a[e],r?r.p(c,h):(r=a[e]=i[e](c),r.c()),ve(r,1),r.m(t,null))},i(c){s||(ve(r),s=!0)},o(c){_e(r),s=!1},d(c){c&&N(t),a[e].d()}}}function NE(n,t,e){let r;de(n,pt,l=>e(2,r=l)),console.log(r);let s=null,i=!0;return Gn(()=>{Ko(di,l=>{e(0,s=l),e(1,i=!1)})}),[s,i,r,async()=>{const l=new Qe;try{await Lm(di,l)}catch(c){console.error("Error signing in:",c)}}]}class BE extends Ce{constructor(t){super(),Pe(this,t,NE,VE,Se,{})}}export{BE as component};
