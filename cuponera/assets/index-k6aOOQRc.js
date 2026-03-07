const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MarketplaceView-DH6hbJ5h.js","assets/PublicLayout.vue_vue_type_script_setup_true_lang-BOalboKk.js","assets/logo-linkup-Ckzy1G6i.js","assets/BottomNavigation-CQt-pyfl.js","assets/BottomNavigation-IzuPHzb5.css","assets/PublicLayout-CNvfjcjD.css","assets/SectionHeader.vue_vue_type_script_setup_true_lang-C11BIOCU.js","assets/MerchantCard.vue_vue_type_script_setup_true_lang-B8HfK2K-.js","assets/CouponCard.vue_vue_type_script_setup_true_lang-BYuZDhaV.js","assets/public-merchants.service-BPGCHHTB.js","assets/public-coupons.service-Dw9_hjL6.js","assets/MarketplaceView-CRCXEgzT.css","assets/ComerciosListView-DU8owAO7.js","assets/ComercioDetailView-r9lHQShT.js","assets/favorites.service-CWC7uAcc.js","assets/CuponesListView-7F4XrnGN.js","assets/FavoritosView-CvpYL4hu.js","assets/FavoritosView-tn0RQdqM.css","assets/CuentaView-Nn7aZ_uy.js","assets/CouponDetailView-cA7nO_ij.js","assets/browser-JP79f-a9.js","assets/AffiliateLoginView-DrYQDzKf.js","assets/AffiliateLoginView-BqepnMad.css","assets/TransferTestView-DaXPWdLh.js","assets/transfers.service-Q_pcWX4A.js","assets/MerchantOnboardingView-4T3XaYIY.js","assets/MerchantOnboardingView-tPz0tOCF.css","assets/UserMessagesView-CnCuVckA.js","assets/ChatWithMerchantView-BbrTaziJ.js","assets/messages.service-DNMgjrBl.js","assets/cupi_profile-fot16G5u.js","assets/LoginView-DgmZ22Db.js","assets/LoginView-Bs5MKaSi.css","assets/RegisterView-BYc9kIfE.js","assets/merchants.service-BqrIWjRV.js","assets/RegisterView-Dc6yWZWG.css","assets/VerifyEmailView-DCxArN0I.js","assets/VerifyEmailView-ZAid4_8h.css","assets/MerchantLayout-BK7z0bop.js","assets/MerchantLayout-HI7eZvbg.css","assets/DashboardView-CPYxVb8x.js","assets/coupons.service-D5FCTGS-.js","assets/payouts.service-BmHCjGtF.js","assets/DashboardView-CZvZp2Hn.css","assets/CouponsView-3aMtV-oW.js","assets/CouponsView-BFpjBq7h.css","assets/CouponRedemptionView-BJK8HyjM.js","assets/couponRedeem.service-B5GGtRsT.js","assets/merchantPermissions.service-DO_jRFKj.js","assets/CouponRedemptionView-Ct6qUD_N.css","assets/CouponValidationView-Cja7382p.js","assets/CouponPaymentView-Bwhqd6iE.js","assets/RedeemChargeView-D4JHchNA.js","assets/RedeemChargeView-BkBYn6qV.css","assets/MessagesView-C168h73W.js","assets/ChatConversationView-BO37j4ou.js","assets/CouponFormView-B-GBCU8Y.js","assets/MerchantProfileView-BfKKpFw_.js","assets/ProfileSettingsView-QnU5oXhZ.js","assets/ProfileSettingsView-C5Cy_vIf.css","assets/PayoutsView-DZQRP0Bq.js","assets/PayoutsView-PUUG13kR.css","assets/SettingsView-DZJDX8z5.js","assets/SettingsView-BmNkuaSN.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rd(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ue={},pi=[],bn=()=>{},M_=()=>!1,wu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),sd=n=>n.startsWith("onUpdate:"),ct=Object.assign,id=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Dw=Object.prototype.hasOwnProperty,ke=(n,e)=>Dw.call(n,e),ce=Array.isArray,mi=n=>Ia(n)==="[object Map]",zi=n=>Ia(n)==="[object Set]",Vp=n=>Ia(n)==="[object Date]",me=n=>typeof n=="function",Ye=n=>typeof n=="string",dn=n=>typeof n=="symbol",Me=n=>n!==null&&typeof n=="object",L_=n=>(Me(n)||me(n))&&me(n.then)&&me(n.catch),F_=Object.prototype.toString,Ia=n=>F_.call(n),Vw=n=>Ia(n).slice(8,-1),U_=n=>Ia(n)==="[object Object]",Au=n=>Ye(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Mo=rd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},kw=/-\w/g,on=bu(n=>n.replace(kw,e=>e.slice(1).toUpperCase())),xw=/\B([A-Z])/g,ts=bu(n=>n.replace(xw,"-$1").toLowerCase()),Ru=bu(n=>n.charAt(0).toUpperCase()+n.slice(1)),Vl=bu(n=>n?`on${Ru(n)}`:""),Fr=(n,e)=>!Object.is(n,e),Tc=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},B_=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Su=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Nw=n=>{const e=Ye(n)?Number(n):NaN;return isNaN(e)?n:e};let kp;const Pu=()=>kp||(kp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function od(n){if(ce(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ye(r)?Fw(r):od(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ye(n)||Me(n))return n}const Ow=/;(?![^(]*\))/g,Mw=/:([^]+)/,Lw=/\/\*[^]*?\*\//g;function Fw(n){const e={};return n.replace(Lw,"").split(Ow).forEach(t=>{if(t){const r=t.split(Mw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Cu(n){let e="";if(Ye(n))e=n;else if(ce(n))for(let t=0;t<n.length;t++){const r=Cu(n[t]);r&&(e+=r+" ")}else if(Me(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Uw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bw=rd(Uw);function q_(n){return!!n||n===""}function qw(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=Vs(n[r],e[r]);return t}function Vs(n,e){if(n===e)return!0;let t=Vp(n),r=Vp(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=dn(n),r=dn(e),t||r)return n===e;if(t=ce(n),r=ce(e),t||r)return t&&r?qw(n,e):!1;if(t=Me(n),r=Me(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Vs(n[o],e[o]))return!1}}return String(n)===String(e)}function ad(n,e){return n.findIndex(t=>Vs(t,e))}const j_=n=>!!(n&&n.__v_isRef===!0),G_=n=>Ye(n)?n:n==null?"":ce(n)||Me(n)&&(n.toString===F_||!me(n.toString))?j_(n)?G_(n.value):JSON.stringify(n,$_,2):String(n),$_=(n,e)=>j_(e)?$_(n,e.value):mi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[kl(r,i)+" =>"]=s,t),{})}:zi(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>kl(t))}:dn(e)?kl(e):Me(e)&&!ce(e)&&!U_(e)?String(e):e,kl=(n,e="")=>{var t;return dn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class K_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ct;try{return Ct=this,e()}finally{Ct=t}}}on(){++this._on===1&&(this.prevScope=Ct,Ct=this)}off(){this._on>0&&--this._on===0&&(Ct=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function z_(n){return new K_(n)}function H_(){return Ct}function jw(n,e=!1){Ct&&Ct.cleanups.push(n)}let Be;const xl=new WeakSet;class W_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xl.has(this)&&(xl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||J_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xp(this),Y_(this);const e=Be,t=ln;Be=this,ln=!0;try{return this.fn()}finally{X_(this),Be=e,ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ld(e);this.deps=this.depsTail=void 0,xp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ah(this)&&this.run()}get dirty(){return ah(this)}}let Q_=0,Lo,Fo;function J_(n,e=!1){if(n.flags|=8,e){n.next=Fo,Fo=n;return}n.next=Lo,Lo=n}function cd(){Q_++}function ud(){if(--Q_>0)return;if(Fo){let e=Fo;for(Fo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Lo;){let e=Lo;for(Lo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Y_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function X_(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),ld(r),Gw(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function ah(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Z_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Z_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ea)||(n.globalVersion=ea,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ah(n))))return;n.flags|=2;const e=n.dep,t=Be,r=ln;Be=n,ln=!0;try{Y_(n);const s=n.fn(n._value);(e.version===0||Fr(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Be=t,ln=r,X_(n),n.flags&=-3}}function ld(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)ld(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Gw(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ln=!0;const ey=[];function Xn(){ey.push(ln),ln=!1}function Zn(){const n=ey.pop();ln=n===void 0?!0:n}function xp(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Be;Be=void 0;try{e()}finally{Be=t}}}let ea=0;class $w{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Be||!ln||Be===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Be)t=this.activeLink=new $w(Be,this),Be.deps?(t.prevDep=Be.depsTail,Be.depsTail.nextDep=t,Be.depsTail=t):Be.deps=Be.depsTail=t,ty(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Be.depsTail,t.nextDep=void 0,Be.depsTail.nextDep=t,Be.depsTail=t,Be.deps===t&&(Be.deps=r)}return t}trigger(e){this.version++,ea++,this.notify(e)}notify(e){cd();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ud()}}}function ty(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ty(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const qc=new WeakMap,Ss=Symbol(""),ch=Symbol(""),ta=Symbol("");function Vt(n,e,t){if(ln&&Be){let r=qc.get(n);r||qc.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new hd),s.map=r,s.key=t),s.track()}}function jn(n,e,t,r,s,i){const o=qc.get(n);if(!o){ea++;return}const a=c=>{c&&c.trigger()};if(cd(),e==="clear")o.forEach(a);else{const c=ce(n),l=c&&Au(t);if(c&&t==="length"){const h=Number(r);o.forEach((f,m)=>{(m==="length"||m===ta||!dn(m)&&m>=h)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),l&&a(o.get(ta)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Ss)),mi(n)&&a(o.get(ch)));break;case"delete":c||(a(o.get(Ss)),mi(n)&&a(o.get(ch)));break;case"set":mi(n)&&a(o.get(Ss));break}}ud()}function Kw(n,e){const t=qc.get(n);return t&&t.get(e)}function ti(n){const e=Re(n);return e===n?e:(Vt(e,"iterate",ta),Qt(n)?e:e.map(fn))}function Du(n){return Vt(n=Re(n),"iterate",ta),n}function Ar(n,e){return er(n)?bi(Qn(n)?fn(e):e):fn(e)}const zw={__proto__:null,[Symbol.iterator](){return Nl(this,Symbol.iterator,n=>Ar(this,n))},concat(...n){return ti(this).concat(...n.map(e=>ce(e)?ti(e):e))},entries(){return Nl(this,"entries",n=>(n[1]=Ar(this,n[1]),n))},every(n,e){return Ln(this,"every",n,e,void 0,arguments)},filter(n,e){return Ln(this,"filter",n,e,t=>t.map(r=>Ar(this,r)),arguments)},find(n,e){return Ln(this,"find",n,e,t=>Ar(this,t),arguments)},findIndex(n,e){return Ln(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ln(this,"findLast",n,e,t=>Ar(this,t),arguments)},findLastIndex(n,e){return Ln(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ln(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ol(this,"includes",n)},indexOf(...n){return Ol(this,"indexOf",n)},join(n){return ti(this).join(n)},lastIndexOf(...n){return Ol(this,"lastIndexOf",n)},map(n,e){return Ln(this,"map",n,e,void 0,arguments)},pop(){return Io(this,"pop")},push(...n){return Io(this,"push",n)},reduce(n,...e){return Np(this,"reduce",n,e)},reduceRight(n,...e){return Np(this,"reduceRight",n,e)},shift(){return Io(this,"shift")},some(n,e){return Ln(this,"some",n,e,void 0,arguments)},splice(...n){return Io(this,"splice",n)},toReversed(){return ti(this).toReversed()},toSorted(n){return ti(this).toSorted(n)},toSpliced(...n){return ti(this).toSpliced(...n)},unshift(...n){return Io(this,"unshift",n)},values(){return Nl(this,"values",n=>Ar(this,n))}};function Nl(n,e,t){const r=Du(n),s=r[e]();return r!==n&&!Qt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const Hw=Array.prototype;function Ln(n,e,t,r,s,i){const o=Du(n),a=o!==n&&!Qt(n),c=o[e];if(c!==Hw[e]){const f=c.apply(n,i);return a?fn(f):f}let l=t;o!==n&&(a?l=function(f,m){return t.call(this,Ar(n,f),m,n)}:t.length>2&&(l=function(f,m){return t.call(this,f,m,n)}));const h=c.call(o,l,r);return a&&s?s(h):h}function Np(n,e,t,r){const s=Du(n);let i=t;return s!==n&&(Qt(n)?t.length>3&&(i=function(o,a,c){return t.call(this,o,a,c,n)}):i=function(o,a,c){return t.call(this,o,Ar(n,a),c,n)}),s[e](i,...r)}function Ol(n,e,t){const r=Re(n);Vt(r,"iterate",ta);const s=r[e](...t);return(s===-1||s===!1)&&Vu(t[0])?(t[0]=Re(t[0]),r[e](...t)):s}function Io(n,e,t=[]){Xn(),cd();const r=Re(n)[e].apply(n,t);return ud(),Zn(),r}const Ww=rd("__proto__,__v_isRef,__isVue"),ny=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(dn));function Qw(n){dn(n)||(n=String(n));const e=Re(this);return Vt(e,"has",n),e.hasOwnProperty(n)}class ry{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?iA:ay:i?oy:iy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let c;if(o&&(c=zw[t]))return c;if(t==="hasOwnProperty")return Qw}const a=Reflect.get(e,t,tt(e)?e:r);if((dn(t)?ny.has(t):Ww(t))||(s||Vt(e,"get",t),i))return a;if(tt(a)){const c=o&&Au(t)?a:a.value;return s&&Me(c)?lh(c):c}return Me(a)?s?lh(a):Ea(a):a}}class sy extends ry{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const o=ce(e)&&Au(t);if(!this._isShallow){const l=er(i);if(!Qt(r)&&!er(r)&&(i=Re(i),r=Re(r)),!o&&tt(i)&&!tt(r))return l||(i.value=r),!0}const a=o?Number(t)<e.length:ke(e,t),c=Reflect.set(e,t,r,tt(e)?e:s);return e===Re(s)&&(a?Fr(r,i)&&jn(e,"set",t,r):jn(e,"add",t,r)),c}deleteProperty(e,t){const r=ke(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&jn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!dn(t)||!ny.has(t))&&Vt(e,"has",t),r}ownKeys(e){return Vt(e,"iterate",ce(e)?"length":Ss),Reflect.ownKeys(e)}}class Jw extends ry{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Yw=new sy,Xw=new Jw,Zw=new sy(!0);const uh=n=>n,ac=n=>Reflect.getPrototypeOf(n);function eA(n,e,t){return function(...r){const s=this.__v_raw,i=Re(s),o=mi(i),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=s[n](...r),h=t?uh:e?bi:fn;return!e&&Vt(i,"iterate",c?ch:Ss),ct(Object.create(l),{next(){const{value:f,done:m}=l.next();return m?{value:f,done:m}:{value:a?[h(f[0]),h(f[1])]:h(f),done:m}}})}}function cc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function tA(n,e){const t={get(s){const i=this.__v_raw,o=Re(i),a=Re(s);n||(Fr(s,a)&&Vt(o,"get",s),Vt(o,"get",a));const{has:c}=ac(o),l=e?uh:n?bi:fn;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!n&&Vt(Re(s),"iterate",Ss),s.size},has(s){const i=this.__v_raw,o=Re(i),a=Re(s);return n||(Fr(s,a)&&Vt(o,"has",s),Vt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Re(a),l=e?uh:n?bi:fn;return!n&&Vt(c,"iterate",Ss),a.forEach((h,f)=>s.call(i,l(h),l(f),o))}};return ct(t,n?{add:cc("add"),set:cc("set"),delete:cc("delete"),clear:cc("clear")}:{add(s){!e&&!Qt(s)&&!er(s)&&(s=Re(s));const i=Re(this);return ac(i).has.call(i,s)||(i.add(s),jn(i,"add",s,s)),this},set(s,i){!e&&!Qt(i)&&!er(i)&&(i=Re(i));const o=Re(this),{has:a,get:c}=ac(o);let l=a.call(o,s);l||(s=Re(s),l=a.call(o,s));const h=c.call(o,s);return o.set(s,i),l?Fr(i,h)&&jn(o,"set",s,i):jn(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:a}=ac(i);let c=o.call(i,s);c||(s=Re(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&jn(i,"delete",s,void 0),l},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&jn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=eA(s,n,e)}),t}function dd(n,e){const t=tA(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(ke(t,s)&&s in r?t:r,s,i)}const nA={get:dd(!1,!1)},rA={get:dd(!1,!0)},sA={get:dd(!0,!1)};const iy=new WeakMap,oy=new WeakMap,ay=new WeakMap,iA=new WeakMap;function oA(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function aA(n){return n.__v_skip||!Object.isExtensible(n)?0:oA(Vw(n))}function Ea(n){return er(n)?n:fd(n,!1,Yw,nA,iy)}function cy(n){return fd(n,!1,Zw,rA,oy)}function lh(n){return fd(n,!0,Xw,sA,ay)}function fd(n,e,t,r,s){if(!Me(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=aA(n);if(i===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,i===2?r:t);return s.set(n,a),a}function Qn(n){return er(n)?Qn(n.__v_raw):!!(n&&n.__v_isReactive)}function er(n){return!!(n&&n.__v_isReadonly)}function Qt(n){return!!(n&&n.__v_isShallow)}function Vu(n){return n?!!n.__v_raw:!1}function Re(n){const e=n&&n.__v_raw;return e?Re(e):n}function pd(n){return!ke(n,"__v_skip")&&Object.isExtensible(n)&&B_(n,"__v_skip",!0),n}const fn=n=>Me(n)?Ea(n):n,bi=n=>Me(n)?lh(n):n;function tt(n){return n?n.__v_isRef===!0:!1}function Pr(n){return uy(n,!1)}function cA(n){return uy(n,!0)}function uy(n,e){return tt(n)?n:new uA(n,e)}class uA{constructor(e,t){this.dep=new hd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Re(e),this._value=t?e:fn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Qt(e)||er(e);e=r?e:Re(e),Fr(e,t)&&(this._rawValue=e,this._value=r?e:fn(e),this.dep.trigger())}}function Jn(n){return tt(n)?n.value:n}const lA={get:(n,e,t)=>e==="__v_raw"?n:Jn(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return tt(s)&&!tt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function ly(n){return Qn(n)?n:new Proxy(n,lA)}function hA(n){const e=ce(n)?new Array(n.length):{};for(const t in n)e[t]=fA(n,t);return e}class dA{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=Re(e);let s=!0,i=e;if(!ce(e)||!Au(String(t)))do s=!Vu(i)||Qt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Jn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&tt(this._raw[this._key])){const t=this._object[this._key];if(tt(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return Kw(this._raw,this._key)}}function fA(n,e,t){return new dA(n,e,t)}class pA{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new hd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ea-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return J_(this,!0),!0}get value(){const e=this.dep.track();return Z_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mA(n,e,t=!1){let r,s;return me(n)?r=n:(r=n.get,s=n.set),new pA(r,s,t)}const uc={},jc=new WeakMap;let ys;function gA(n,e=!1,t=ys){if(t){let r=jc.get(t);r||jc.set(t,r=[]),r.push(n)}}function _A(n,e,t=Ue){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=t,l=x=>s?x:Qt(x)||s===!1||s===0?Gn(x,1):Gn(x);let h,f,m,g,R=!1,P=!1;if(tt(n)?(f=()=>n.value,R=Qt(n)):Qn(n)?(f=()=>l(n),R=!0):ce(n)?(P=!0,R=n.some(x=>Qn(x)||Qt(x)),f=()=>n.map(x=>{if(tt(x))return x.value;if(Qn(x))return l(x);if(me(x))return c?c(x,2):x()})):me(n)?e?f=c?()=>c(n,2):n:f=()=>{if(m){Xn();try{m()}finally{Zn()}}const x=ys;ys=h;try{return c?c(n,3,[g]):n(g)}finally{ys=x}}:f=bn,e&&s){const x=f,z=s===!0?1/0:s;f=()=>Gn(x(),z)}const C=H_(),L=()=>{h.stop(),C&&C.active&&id(C.effects,h)};if(i&&e){const x=e;e=(...z)=>{x(...z),L()}}let N=P?new Array(n.length).fill(uc):uc;const O=x=>{if(!(!(h.flags&1)||!h.dirty&&!x))if(e){const z=h.run();if(s||R||(P?z.some((H,w)=>Fr(H,N[w])):Fr(z,N))){m&&m();const H=ys;ys=h;try{const w=[z,N===uc?void 0:P&&N[0]===uc?[]:N,g];N=z,c?c(e,3,w):e(...w)}finally{ys=H}}}else h.run()};return a&&a(O),h=new W_(f),h.scheduler=o?()=>o(O,!1):O,g=x=>gA(x,!1,h),m=h.onStop=()=>{const x=jc.get(h);if(x){if(c)c(x,4);else for(const z of x)z();jc.delete(h)}},e?r?O(!0):N=h.run():o?o(O.bind(null,!0),!0):h.run(),L.pause=h.pause.bind(h),L.resume=h.resume.bind(h),L.stop=L,L}function Gn(n,e=1/0,t){if(e<=0||!Me(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,tt(n))Gn(n.value,e,t);else if(ce(n))for(let r=0;r<n.length;r++)Gn(n[r],e,t);else if(zi(n)||mi(n))n.forEach(r=>{Gn(r,e,t)});else if(U_(n)){for(const r in n)Gn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Gn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ta(n,e,t,r){try{return r?n(...r):n()}catch(s){ku(s,e,t)}}function pn(n,e,t,r){if(me(n)){const s=Ta(n,e,t,r);return s&&L_(s)&&s.catch(i=>{ku(i,e,t)}),s}if(ce(n)){const s=[];for(let i=0;i<n.length;i++)s.push(pn(n[i],e,t,r));return s}}function ku(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ue;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](n,c,l)===!1)return}a=a.parent}if(i){Xn(),Ta(i,null,10,[n,c,l]),Zn();return}}yA(n,t,s,r,o)}function yA(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const Bt=[];let In=-1;const gi=[];let br=null,ai=0;const hy=Promise.resolve();let Gc=null;function xu(n){const e=Gc||hy;return n?e.then(this?n.bind(this):n):e}function vA(n){let e=In+1,t=Bt.length;for(;e<t;){const r=e+t>>>1,s=Bt[r],i=na(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function md(n){if(!(n.flags&1)){const e=na(n),t=Bt[Bt.length-1];!t||!(n.flags&2)&&e>=na(t)?Bt.push(n):Bt.splice(vA(e),0,n),n.flags|=1,dy()}}function dy(){Gc||(Gc=hy.then(py))}function IA(n){ce(n)?gi.push(...n):br&&n.id===-1?br.splice(ai+1,0,n):n.flags&1||(gi.push(n),n.flags|=1),dy()}function Op(n,e,t=In+1){for(;t<Bt.length;t++){const r=Bt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;Bt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function fy(n){if(gi.length){const e=[...new Set(gi)].sort((t,r)=>na(t)-na(r));if(gi.length=0,br){br.push(...e);return}for(br=e,ai=0;ai<br.length;ai++){const t=br[ai];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}br=null,ai=0}}const na=n=>n.id==null?n.flags&2?-1:1/0:n.id;function py(n){try{for(In=0;In<Bt.length;In++){const e=Bt[In];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ta(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;In<Bt.length;In++){const e=Bt[In];e&&(e.flags&=-2)}In=-1,Bt.length=0,fy(),Gc=null,(Bt.length||gi.length)&&py()}}let At=null,my=null;function $c(n){const e=At;return At=n,my=n&&n.type.__scopeId||null,e}function Kc(n,e=At,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Wc(-1);const i=$c(e);let o;try{o=n(...s)}finally{$c(i),r._d&&Wc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function tM(n,e){if(At===null)return n;const t=Bu(At),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Ue]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&Gn(o),r.push({dir:i,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function fs(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Xn(),pn(c,t,8,[n.el,a,n,e]),Zn())}}function wc(n,e){if(xt){let t=xt.provides;const r=xt.parent&&xt.parent.provides;r===t&&(t=xt.provides=Object.create(r)),t[n]=e}}function nn(n,e,t=!1){const r=Uu();if(r||Ps){let s=Ps?Ps._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&me(e)?e.call(r&&r.proxy):e}}function EA(){return!!(Uu()||Ps)}const TA=Symbol.for("v-scx"),wA=()=>nn(TA);function Uo(n,e,t){return gy(n,e,t)}function gy(n,e,t=Ue){const{immediate:r,deep:s,flush:i,once:o}=t,a=ct({},t),c=e&&r||!e&&i!=="post";let l;if(oa){if(i==="sync"){const g=wA();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=bn,g.resume=bn,g.pause=bn,g}}const h=xt;a.call=(g,R,P)=>pn(g,h,R,P);let f=!1;i==="post"?a.scheduler=g=>{Ft(g,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,R)=>{R?g():md(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const m=_A(n,e,a);return oa&&(l?l.push(m):c&&m()),m}function AA(n,e,t){const r=this.proxy,s=Ye(n)?n.includes(".")?_y(r,n):()=>r[n]:n.bind(r,r);let i;me(e)?i=e:(i=e.handler,t=e);const o=wa(this),a=gy(s,i.bind(r),t);return o(),a}function _y(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const yy=Symbol("_vte"),vy=n=>n.__isTeleport,Bo=n=>n&&(n.disabled||n.disabled===""),Mp=n=>n&&(n.defer||n.defer===""),Lp=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Fp=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,hh=(n,e)=>{const t=n&&n.to;return Ye(t)?e?e(t):null:t},Iy={name:"Teleport",__isTeleport:!0,process(n,e,t,r,s,i,o,a,c,l){const{mc:h,pc:f,pbc:m,o:{insert:g,querySelector:R,createText:P,createComment:C}}=l,L=Bo(e.props);let{shapeFlag:N,children:O,dynamicChildren:x}=e;if(n==null){const z=e.el=P(""),H=e.anchor=P("");g(z,t,r),g(H,t,r);const w=(v,T)=>{N&16&&h(O,v,T,s,i,o,a,c)},y=()=>{const v=e.target=hh(e.props,R),T=Ey(v,e,P,g);v&&(o!=="svg"&&Lp(v)?o="svg":o!=="mathml"&&Fp(v)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(v),L||(w(v,T),Ac(e,!1)))};L&&(w(t,H),Ac(e,!0)),Mp(e.props)?(e.el.__isMounted=!1,Ft(()=>{y(),delete e.el.__isMounted},i)):y()}else{if(Mp(e.props)&&n.el.__isMounted===!1){Ft(()=>{Iy.process(n,e,t,r,s,i,o,a,c,l)},i);return}e.el=n.el,e.targetStart=n.targetStart;const z=e.anchor=n.anchor,H=e.target=n.target,w=e.targetAnchor=n.targetAnchor,y=Bo(n.props),v=y?t:H,T=y?z:w;if(o==="svg"||Lp(H)?o="svg":(o==="mathml"||Fp(H))&&(o="mathml"),x?(m(n.dynamicChildren,x,v,s,i,o,a),Id(n,e,!0)):c||f(n,e,v,T,s,i,o,a,!1),L)y?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):lc(e,t,z,l,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const S=e.target=hh(e.props,R);S&&lc(e,S,null,l,0)}else y&&lc(e,H,w,l,1);Ac(e,L)}},remove(n,e,t,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:c,targetStart:l,targetAnchor:h,target:f,props:m}=n;if(f&&(s(l),s(h)),i&&s(c),o&16){const g=i||!Bo(m);for(let R=0;R<a.length;R++){const P=a[R];r(P,e,t,g,!!P.dynamicChildren)}}},move:lc,hydrate:bA};function lc(n,e,t,{o:{insert:r},m:s},i=2){i===0&&r(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:c,children:l,props:h}=n,f=i===2;if(f&&r(o,e,t),(!f||Bo(h))&&c&16)for(let m=0;m<l.length;m++)s(l[m],e,t,2);f&&r(a,e,t)}function bA(n,e,t,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:l,createText:h}},f){function m(P,C,L,N){C.anchor=f(o(P),C,a(P),t,r,s,i),C.targetStart=L,C.targetAnchor=N}const g=e.target=hh(e.props,c),R=Bo(e.props);if(g){const P=g._lpa||g.firstChild;if(e.shapeFlag&16)if(R)m(n,e,P,P&&o(P));else{e.anchor=o(n);let C=P;for(;C;){if(C&&C.nodeType===8){if(C.data==="teleport start anchor")e.targetStart=C;else if(C.data==="teleport anchor"){e.targetAnchor=C,g._lpa=e.targetAnchor&&o(e.targetAnchor);break}}C=o(C)}e.targetAnchor||Ey(g,e,h,l),f(P&&o(P),e,g,t,r,s,i)}Ac(e,R)}else R&&e.shapeFlag&16&&m(n,e,n,o(n));return e.anchor&&o(e.anchor)}const nM=Iy;function Ac(n,e){const t=n.ctx;if(t&&t.ut){let r,s;for(e?(r=n.el,s=n.anchor):(r=n.targetStart,s=n.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function Ey(n,e,t,r){const s=e.targetStart=t(""),i=e.targetAnchor=t("");return s[yy]=i,n&&(r(s,n),r(i,n)),i}const qn=Symbol("_leaveCb"),hc=Symbol("_enterCb");function Ty(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _d(()=>{n.isMounted=!0}),Dy(()=>{n.isUnmounting=!0}),n}const tn=[Function,Array],wy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tn,onEnter:tn,onAfterEnter:tn,onEnterCancelled:tn,onBeforeLeave:tn,onLeave:tn,onAfterLeave:tn,onLeaveCancelled:tn,onBeforeAppear:tn,onAppear:tn,onAfterAppear:tn,onAppearCancelled:tn},Ay=n=>{const e=n.subTree;return e.component?Ay(e.component):e},RA={name:"BaseTransition",props:wy,setup(n,{slots:e}){const t=Uu(),r=Ty();return()=>{const s=e.default&&gd(e.default(),!0);if(!s||!s.length)return;const i=by(s),o=Re(n),{mode:a}=o;if(r.isLeaving)return Ml(i);const c=Up(i);if(!c)return Ml(i);let l=ra(c,o,r,t,f=>l=f);c.type!==kt&&ks(c,l);let h=t.subTree&&Up(t.subTree);if(h&&h.type!==kt&&!Es(h,c)&&Ay(t).type!==kt){let f=ra(h,o,r,t);if(ks(h,f),a==="out-in"&&c.type!==kt)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,h=void 0},Ml(i);a==="in-out"&&c.type!==kt?f.delayLeave=(m,g,R)=>{const P=Ry(r,h);P[String(h.key)]=h,m[qn]=()=>{g(),m[qn]=void 0,delete l.delayedLeave,h=void 0},l.delayedLeave=()=>{R(),delete l.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function by(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==kt){e=t;break}}return e}const SA=RA;function Ry(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function ra(n,e,t,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:m,onLeave:g,onAfterLeave:R,onLeaveCancelled:P,onBeforeAppear:C,onAppear:L,onAfterAppear:N,onAppearCancelled:O}=e,x=String(n.key),z=Ry(t,n),H=(v,T)=>{v&&pn(v,r,9,T)},w=(v,T)=>{const S=T[1];H(v,T),ce(v)?v.every(A=>A.length<=1)&&S():v.length<=1&&S()},y={mode:o,persisted:a,beforeEnter(v){let T=c;if(!t.isMounted)if(i)T=C||c;else return;v[qn]&&v[qn](!0);const S=z[x];S&&Es(n,S)&&S.el[qn]&&S.el[qn](),H(T,[v])},enter(v){let T=l,S=h,A=f;if(!t.isMounted)if(i)T=L||l,S=N||h,A=O||f;else return;let I=!1;const De=v[hc]=rt=>{I||(I=!0,rt?H(A,[v]):H(S,[v]),y.delayedLeave&&y.delayedLeave(),v[hc]=void 0)};T?w(T,[v,De]):De()},leave(v,T){const S=String(n.key);if(v[hc]&&v[hc](!0),t.isUnmounting)return T();H(m,[v]);let A=!1;const I=v[qn]=De=>{A||(A=!0,T(),De?H(P,[v]):H(R,[v]),v[qn]=void 0,z[S]===n&&delete z[S])};z[S]=n,g?w(g,[v,I]):I()},clone(v){const T=ra(v,e,t,r,s);return s&&s(T),T}};return y}function Ml(n){if(Ou(n))return n=jr(n),n.children=null,n}function Up(n){if(!Ou(n))return vy(n.type)&&n.children?by(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&me(t.default))return t.default()}}function ks(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ks(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function gd(n,e=!1,t){let r=[],s=0;for(let i=0;i<n.length;i++){let o=n[i];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:i);o.type===Et?(o.patchFlag&128&&s++,r=r.concat(gd(o.children,e,a))):(e||o.type!==kt)&&r.push(a!=null?jr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Nu(n,e){return me(n)?ct({name:n.name},e,{setup:n}):n}function Sy(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const zc=new WeakMap;function qo(n,e,t,r,s=!1){if(ce(n)){n.forEach((R,P)=>qo(R,e&&(ce(e)?e[P]:e),t,r,s));return}if(_i(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&qo(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Bu(r.component):r.el,o=s?null:i,{i:a,r:c}=n,l=e&&e.r,h=a.refs===Ue?a.refs={}:a.refs,f=a.setupState,m=Re(f),g=f===Ue?M_:R=>ke(m,R);if(l!=null&&l!==c){if(Bp(e),Ye(l))h[l]=null,g(l)&&(f[l]=null);else if(tt(l)){l.value=null;const R=e;R.k&&(h[R.k]=null)}}if(me(c))Ta(c,a,12,[o,h]);else{const R=Ye(c),P=tt(c);if(R||P){const C=()=>{if(n.f){const L=R?g(c)?f[c]:h[c]:c.value;if(s)ce(L)&&id(L,i);else if(ce(L))L.includes(i)||L.push(i);else if(R)h[c]=[i],g(c)&&(f[c]=h[c]);else{const N=[i];c.value=N,n.k&&(h[n.k]=N)}}else R?(h[c]=o,g(c)&&(f[c]=o)):P&&(c.value=o,n.k&&(h[n.k]=o))};if(o){const L=()=>{C(),zc.delete(n)};L.id=-1,zc.set(n,L),Ft(L,t)}else Bp(n),C()}}}function Bp(n){const e=zc.get(n);e&&(e.flags|=8,zc.delete(n))}Pu().requestIdleCallback;Pu().cancelIdleCallback;const _i=n=>!!n.type.__asyncLoader,Ou=n=>n.type.__isKeepAlive;function PA(n,e){Py(n,"a",e)}function CA(n,e){Py(n,"da",e)}function Py(n,e,t=xt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Mu(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Ou(s.parent.vnode)&&DA(r,e,t,s),s=s.parent}}function DA(n,e,t,r){const s=Mu(e,n,r,!0);Vy(()=>{id(r[e],s)},t)}function Mu(n,e,t=xt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{Xn();const a=wa(t),c=pn(e,t,n,o);return a(),Zn(),c});return r?s.unshift(i):s.push(i),i}}const or=n=>(e,t=xt)=>{(!oa||n==="sp")&&Mu(n,(...r)=>e(...r),t)},VA=or("bm"),_d=or("m"),kA=or("bu"),Cy=or("u"),Dy=or("bum"),Vy=or("um"),xA=or("sp"),NA=or("rtg"),OA=or("rtc");function MA(n,e=xt){Mu("ec",n,e)}const ky="components";function rM(n,e){return Ny(ky,n,!0,e)||n}const xy=Symbol.for("v-ndc");function LA(n){return Ye(n)?Ny(ky,n,!1)||n:n||xy}function Ny(n,e,t=!0,r=!1){const s=At||xt;if(s){const i=s.type;{const a=wb(i,!1);if(a&&(a===e||a===on(e)||a===Ru(on(e))))return i}const o=qp(s[n]||i[n],e)||qp(s.appContext[n],e);return!o&&r?i:o}}function qp(n,e){return n&&(n[e]||n[on(e)]||n[Ru(on(e))])}function FA(n,e,t,r){let s;const i=t,o=ce(n);if(o||Ye(n)){const a=o&&Qn(n);let c=!1,l=!1;a&&(c=!Qt(n),l=er(n),n=Du(n)),s=new Array(n.length);for(let h=0,f=n.length;h<f;h++)s[h]=e(c?l?bi(fn(n[h])):fn(n[h]):n[h],h,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,i)}else if(Me(n))if(n[Symbol.iterator])s=Array.from(n,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(n);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const h=a[c];s[c]=e(n[h],h,c,i)}}else s=[];return s}function sM(n,e,t={},r,s){if(At.ce||At.parent&&_i(At.parent)&&At.parent.ce){const l=Object.keys(t).length>0;return Ur(),Qc(Et,null,[at("slot",t,r)],l?-2:64)}let i=n[e];i&&i._c&&(i._d=!1),Ur();const o=i&&Oy(i(t)),a=t.key||o&&o.key,c=Qc(Et,{key:(a&&!dn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&n._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Oy(n){return n.some(e=>ia(e)?!(e.type===kt||e.type===Et&&!Oy(e.children)):!0)?n:null}const dh=n=>n?ev(n)?Bu(n):dh(n.parent):null,jo=ct(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>dh(n.parent),$root:n=>dh(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ly(n),$forceUpdate:n=>n.f||(n.f=()=>{md(n.update)}),$nextTick:n=>n.n||(n.n=xu.bind(n.proxy)),$watch:n=>AA.bind(n)}),Ll=(n,e)=>n!==Ue&&!n.__isScriptSetup&&ke(n,e),UA={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=n;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Ll(r,e))return o[e]=1,r[e];if(s!==Ue&&ke(s,e))return o[e]=2,s[e];if(ke(i,e))return o[e]=3,i[e];if(t!==Ue&&ke(t,e))return o[e]=4,t[e];fh&&(o[e]=0)}}const l=jo[e];let h,f;if(l)return e==="$attrs"&&Vt(n.attrs,"get",""),l(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Ue&&ke(t,e))return o[e]=4,t[e];if(f=c.config.globalProperties,ke(f,e))return f[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Ll(s,e)?(s[e]=t,!0):r!==Ue&&ke(r,e)?(r[e]=t,!0):ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:o}},a){let c;return!!(t[a]||n!==Ue&&a[0]!=="$"&&ke(n,a)||Ll(e,a)||ke(i,a)||ke(r,a)||ke(jo,a)||ke(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function jp(n){return ce(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let fh=!0;function BA(n){const e=Ly(n),t=n.proxy,r=n.ctx;fh=!1,e.beforeCreate&&Gp(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:h,beforeMount:f,mounted:m,beforeUpdate:g,updated:R,activated:P,deactivated:C,beforeDestroy:L,beforeUnmount:N,destroyed:O,unmounted:x,render:z,renderTracked:H,renderTriggered:w,errorCaptured:y,serverPrefetch:v,expose:T,inheritAttrs:S,components:A,directives:I,filters:De}=e;if(l&&qA(l,r,null),o)for(const fe in o){const Ie=o[fe];me(Ie)&&(r[fe]=Ie.bind(t))}if(s){const fe=s.call(t,t);Me(fe)&&(n.data=Ea(fe))}if(fh=!0,i)for(const fe in i){const Ie=i[fe],Kt=me(Ie)?Ie.bind(t,t):me(Ie.get)?Ie.get.bind(t,t):bn,an=!me(Ie)&&me(Ie.set)?Ie.set.bind(t):bn,Xt=Tt({get:Kt,set:an});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:Qe=>Xt.value=Qe})}if(a)for(const fe in a)My(a[fe],r,t,fe);if(c){const fe=me(c)?c.call(t):c;Reflect.ownKeys(fe).forEach(Ie=>{wc(Ie,fe[Ie])})}h&&Gp(h,n,"c");function xe(fe,Ie){ce(Ie)?Ie.forEach(Kt=>fe(Kt.bind(t))):Ie&&fe(Ie.bind(t))}if(xe(VA,f),xe(_d,m),xe(kA,g),xe(Cy,R),xe(PA,P),xe(CA,C),xe(MA,y),xe(OA,H),xe(NA,w),xe(Dy,N),xe(Vy,x),xe(xA,v),ce(T))if(T.length){const fe=n.exposed||(n.exposed={});T.forEach(Ie=>{Object.defineProperty(fe,Ie,{get:()=>t[Ie],set:Kt=>t[Ie]=Kt,enumerable:!0})})}else n.exposed||(n.exposed={});z&&n.render===bn&&(n.render=z),S!=null&&(n.inheritAttrs=S),A&&(n.components=A),I&&(n.directives=I),v&&Sy(n)}function qA(n,e,t=bn){ce(n)&&(n=ph(n));for(const r in n){const s=n[r];let i;Me(s)?"default"in s?i=nn(s.from||r,s.default,!0):i=nn(s.from||r):i=nn(s),tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Gp(n,e,t){pn(ce(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function My(n,e,t,r){let s=r.includes(".")?_y(t,r):()=>t[r];if(Ye(n)){const i=e[n];me(i)&&Uo(s,i)}else if(me(n))Uo(s,n.bind(t));else if(Me(n))if(ce(n))n.forEach(i=>My(i,e,t,r));else{const i=me(n.handler)?n.handler.bind(t):e[n.handler];me(i)&&Uo(s,i,n)}}function Ly(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(l=>Hc(c,l,o,!0)),Hc(c,e,o)),Me(e)&&i.set(e,c),c}function Hc(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Hc(n,i,t,!0),s&&s.forEach(o=>Hc(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=jA[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const jA={data:$p,props:Kp,emits:Kp,methods:Co,computed:Co,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Co,directives:Co,watch:$A,provide:$p,inject:GA};function $p(n,e){return e?n?function(){return ct(me(n)?n.call(this,this):n,me(e)?e.call(this,this):e)}:e:n}function GA(n,e){return Co(ph(n),ph(e))}function ph(n){if(ce(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Lt(n,e){return n?[...new Set([].concat(n,e))]:e}function Co(n,e){return n?ct(Object.create(null),n,e):e}function Kp(n,e){return n?ce(n)&&ce(e)?[...new Set([...n,...e])]:ct(Object.create(null),jp(n),jp(e??{})):e}function $A(n,e){if(!n)return e;if(!e)return n;const t=ct(Object.create(null),n);for(const r in e)t[r]=Lt(n[r],e[r]);return t}function Fy(){return{app:null,config:{isNativeTag:M_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let KA=0;function zA(n,e){return function(r,s=null){me(r)||(r=ct({},r)),s!=null&&!Me(s)&&(s=null);const i=Fy(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:KA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bb,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&me(h.install)?(o.add(h),h.install(l,...f)):me(h)&&(o.add(h),h(l,...f))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,f){return f?(i.components[h]=f,l):i.components[h]},directive(h,f){return f?(i.directives[h]=f,l):i.directives[h]},mount(h,f,m){if(!c){const g=l._ceVNode||at(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),n(g,h,m),c=!0,l._container=h,h.__vue_app__=l,Bu(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(pn(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(h,f){return i.provides[h]=f,l},runWithContext(h){const f=Ps;Ps=l;try{return h()}finally{Ps=f}}};return l}}let Ps=null;const HA=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${on(e)}Modifiers`]||n[`${ts(e)}Modifiers`];function WA(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ue;let s=t;const i=e.startsWith("update:"),o=i&&HA(r,e.slice(7));o&&(o.trim&&(s=t.map(h=>Ye(h)?h.trim():h)),o.number&&(s=t.map(Su)));let a,c=r[a=Vl(e)]||r[a=Vl(on(e))];!c&&i&&(c=r[a=Vl(ts(e))]),c&&pn(c,n,6,s);const l=r[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,pn(l,n,6,s)}}const QA=new WeakMap;function Uy(n,e,t=!1){const r=t?QA:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},a=!1;if(!me(n)){const c=l=>{const h=Uy(l,e,!0);h&&(a=!0,ct(o,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(Me(n)&&r.set(n,null),null):(ce(i)?i.forEach(c=>o[c]=null):ct(o,i),Me(n)&&r.set(n,o),o)}function Lu(n,e){return!n||!wu(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(n,e[0].toLowerCase()+e.slice(1))||ke(n,ts(e))||ke(n,e))}function zp(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:h,props:f,data:m,setupState:g,ctx:R,inheritAttrs:P}=n,C=$c(n);let L,N;try{if(t.shapeFlag&4){const x=s||r,z=x;L=En(l.call(z,x,h,f,g,m,R)),N=a}else{const x=e;L=En(x.length>1?x(f,{attrs:a,slots:o,emit:c}):x(f,null)),N=e.props?a:JA(a)}}catch(x){Go.length=0,ku(x,n,1),L=at(kt)}let O=L;if(N&&P!==!1){const x=Object.keys(N),{shapeFlag:z}=O;x.length&&z&7&&(i&&x.some(sd)&&(N=YA(N,i)),O=jr(O,N,!1,!0))}return t.dirs&&(O=jr(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(t.dirs):t.dirs),t.transition&&ks(O,t.transition),L=O,$c(C),L}const JA=n=>{let e;for(const t in n)(t==="class"||t==="style"||wu(t))&&((e||(e={}))[t]=n[t]);return e},YA=(n,e)=>{const t={};for(const r in n)(!sd(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function XA(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Hp(r,o,l):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const m=h[f];if(o[m]!==r[m]&&!Lu(l,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Hp(r,o,l):!0:!!o;return!1}function Hp(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Lu(t,i))return!0}return!1}function ZA({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const By={},qy=()=>Object.create(By),jy=n=>Object.getPrototypeOf(n)===By;function eb(n,e,t,r=!1){const s={},i=qy();n.propsDefaults=Object.create(null),Gy(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:cy(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function tb(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,a=Re(s),[c]=n.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let f=0;f<h.length;f++){let m=h[f];if(Lu(n.emitsOptions,m))continue;const g=e[m];if(c)if(ke(i,m))g!==i[m]&&(i[m]=g,l=!0);else{const R=on(m);s[R]=mh(c,a,R,g,n,!1)}else g!==i[m]&&(i[m]=g,l=!0)}}}else{Gy(n,e,s,i)&&(l=!0);let h;for(const f in a)(!e||!ke(e,f)&&((h=ts(f))===f||!ke(e,h)))&&(c?t&&(t[f]!==void 0||t[h]!==void 0)&&(s[f]=mh(c,a,f,void 0,n,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ke(e,f))&&(delete i[f],l=!0)}l&&jn(n.attrs,"set","")}function Gy(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Mo(c))continue;const l=e[c];let h;s&&ke(s,h=on(c))?!i||!i.includes(h)?t[h]=l:(a||(a={}))[h]=l:Lu(n.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Re(t),l=a||Ue;for(let h=0;h<i.length;h++){const f=i[h];t[f]=mh(s,c,f,l[f],n,!ke(l,f))}}return o}function mh(n,e,t,r,s,i){const o=n[t];if(o!=null){const a=ke(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&me(c)){const{propsDefaults:l}=s;if(t in l)r=l[t];else{const h=wa(s);r=l[t]=c.call(null,e),h()}}else r=c;s.ce&&s.ce._setProp(t,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ts(t))&&(r=!0))}return r}const nb=new WeakMap;function $y(n,e,t=!1){const r=t?nb:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},a=[];let c=!1;if(!me(n)){const h=f=>{c=!0;const[m,g]=$y(f,e,!0);ct(o,m),g&&a.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!i&&!c)return Me(n)&&r.set(n,pi),pi;if(ce(i))for(let h=0;h<i.length;h++){const f=on(i[h]);Wp(f)&&(o[f]=Ue)}else if(i)for(const h in i){const f=on(h);if(Wp(f)){const m=i[h],g=o[f]=ce(m)||me(m)?{type:m}:ct({},m),R=g.type;let P=!1,C=!0;if(ce(R))for(let L=0;L<R.length;++L){const N=R[L],O=me(N)&&N.name;if(O==="Boolean"){P=!0;break}else O==="String"&&(C=!1)}else P=me(R)&&R.name==="Boolean";g[0]=P,g[1]=C,(P||ke(g,"default"))&&a.push(f)}}const l=[o,a];return Me(n)&&r.set(n,l),l}function Wp(n){return n[0]!=="$"&&!Mo(n)}const yd=n=>n==="_"||n==="_ctx"||n==="$stable",vd=n=>ce(n)?n.map(En):[En(n)],rb=(n,e,t)=>{if(e._n)return e;const r=Kc((...s)=>vd(e(...s)),t);return r._c=!1,r},Ky=(n,e,t)=>{const r=n._ctx;for(const s in n){if(yd(s))continue;const i=n[s];if(me(i))e[s]=rb(s,i,r);else if(i!=null){const o=vd(i);e[s]=()=>o}}},zy=(n,e)=>{const t=vd(e);n.slots.default=()=>t},Hy=(n,e,t)=>{for(const r in e)(t||!yd(r))&&(n[r]=e[r])},sb=(n,e,t)=>{const r=n.slots=qy();if(n.vnode.shapeFlag&32){const s=e._;s?(Hy(r,e,t),t&&B_(r,"_",s,!0)):Ky(e,r)}else e&&zy(n,e)},ib=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=Ue;if(r.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:Hy(s,e,t):(i=!e.$stable,Ky(e,s)),o=e}else e&&(zy(n,e),o={default:1});if(i)for(const a in s)!yd(a)&&o[a]==null&&delete s[a]},Ft=lb;function ob(n){return ab(n)}function ab(n,e){const t=Pu();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:h,parentNode:f,nextSibling:m,setScopeId:g=bn,insertStaticContent:R}=n,P=(E,b,D,U=null,j=null,q=null,Z=void 0,J=null,W=!!b.dynamicChildren)=>{if(E===b)return;E&&!Es(E,b)&&(U=B(E),Qe(E,j,q,!0),E=null),b.patchFlag===-2&&(W=!1,b.dynamicChildren=null);const{type:K,ref:ue,shapeFlag:te}=b;switch(K){case Fu:C(E,b,D,U);break;case kt:L(E,b,D,U);break;case bc:E==null&&N(b,D,U,Z);break;case Et:A(E,b,D,U,j,q,Z,J,W);break;default:te&1?z(E,b,D,U,j,q,Z,J,W):te&6?I(E,b,D,U,j,q,Z,J,W):(te&64||te&128)&&K.process(E,b,D,U,j,q,Z,J,W,oe)}ue!=null&&j?qo(ue,E&&E.ref,q,b||E,!b):ue==null&&E&&E.ref!=null&&qo(E.ref,null,q,E,!0)},C=(E,b,D,U)=>{if(E==null)r(b.el=a(b.children),D,U);else{const j=b.el=E.el;b.children!==E.children&&l(j,b.children)}},L=(E,b,D,U)=>{E==null?r(b.el=c(b.children||""),D,U):b.el=E.el},N=(E,b,D,U)=>{[E.el,E.anchor]=R(E.children,b,D,U,E.el,E.anchor)},O=({el:E,anchor:b},D,U)=>{let j;for(;E&&E!==b;)j=m(E),r(E,D,U),E=j;r(b,D,U)},x=({el:E,anchor:b})=>{let D;for(;E&&E!==b;)D=m(E),s(E),E=D;s(b)},z=(E,b,D,U,j,q,Z,J,W)=>{if(b.type==="svg"?Z="svg":b.type==="math"&&(Z="mathml"),E==null)H(b,D,U,j,q,Z,J,W);else{const K=E.el&&E.el._isVueCE?E.el:null;try{K&&K._beginPatch(),v(E,b,j,q,Z,J,W)}finally{K&&K._endPatch()}}},H=(E,b,D,U,j,q,Z,J)=>{let W,K;const{props:ue,shapeFlag:te,transition:ae,dirs:de}=E;if(W=E.el=o(E.type,q,ue&&ue.is,ue),te&8?h(W,E.children):te&16&&y(E.children,W,null,U,j,Fl(E,q),Z,J),de&&fs(E,null,U,"created"),w(W,E,E.scopeId,Z,U),ue){for(const ge in ue)ge!=="value"&&!Mo(ge)&&i(W,ge,null,ue[ge],q,U);"value"in ue&&i(W,"value",null,ue.value,q),(K=ue.onVnodeBeforeMount)&&yn(K,U,E)}de&&fs(E,null,U,"beforeMount");const he=cb(j,ae);he&&ae.beforeEnter(W),r(W,b,D),((K=ue&&ue.onVnodeMounted)||he||de)&&Ft(()=>{K&&yn(K,U,E),he&&ae.enter(W),de&&fs(E,null,U,"mounted")},j)},w=(E,b,D,U,j)=>{if(D&&g(E,D),U)for(let q=0;q<U.length;q++)g(E,U[q]);if(j){let q=j.subTree;if(b===q||Jy(q.type)&&(q.ssContent===b||q.ssFallback===b)){const Z=j.vnode;w(E,Z,Z.scopeId,Z.slotScopeIds,j.parent)}}},y=(E,b,D,U,j,q,Z,J,W=0)=>{for(let K=W;K<E.length;K++){const ue=E[K]=J?Rr(E[K]):En(E[K]);P(null,ue,b,D,U,j,q,Z,J)}},v=(E,b,D,U,j,q,Z)=>{const J=b.el=E.el;let{patchFlag:W,dynamicChildren:K,dirs:ue}=b;W|=E.patchFlag&16;const te=E.props||Ue,ae=b.props||Ue;let de;if(D&&ps(D,!1),(de=ae.onVnodeBeforeUpdate)&&yn(de,D,b,E),ue&&fs(b,E,D,"beforeUpdate"),D&&ps(D,!0),(te.innerHTML&&ae.innerHTML==null||te.textContent&&ae.textContent==null)&&h(J,""),K?T(E.dynamicChildren,K,J,D,U,Fl(b,j),q):Z||Ie(E,b,J,null,D,U,Fl(b,j),q,!1),W>0){if(W&16)S(J,te,ae,D,j);else if(W&2&&te.class!==ae.class&&i(J,"class",null,ae.class,j),W&4&&i(J,"style",te.style,ae.style,j),W&8){const he=b.dynamicProps;for(let ge=0;ge<he.length;ge++){const Ae=he[ge],gt=te[Ae],_t=ae[Ae];(_t!==gt||Ae==="value")&&i(J,Ae,gt,_t,j,D)}}W&1&&E.children!==b.children&&h(J,b.children)}else!Z&&K==null&&S(J,te,ae,D,j);((de=ae.onVnodeUpdated)||ue)&&Ft(()=>{de&&yn(de,D,b,E),ue&&fs(b,E,D,"updated")},U)},T=(E,b,D,U,j,q,Z)=>{for(let J=0;J<b.length;J++){const W=E[J],K=b[J],ue=W.el&&(W.type===Et||!Es(W,K)||W.shapeFlag&198)?f(W.el):D;P(W,K,ue,null,U,j,q,Z,!0)}},S=(E,b,D,U,j)=>{if(b!==D){if(b!==Ue)for(const q in b)!Mo(q)&&!(q in D)&&i(E,q,b[q],null,j,U);for(const q in D){if(Mo(q))continue;const Z=D[q],J=b[q];Z!==J&&q!=="value"&&i(E,q,J,Z,j,U)}"value"in D&&i(E,"value",b.value,D.value,j)}},A=(E,b,D,U,j,q,Z,J,W)=>{const K=b.el=E?E.el:a(""),ue=b.anchor=E?E.anchor:a("");let{patchFlag:te,dynamicChildren:ae,slotScopeIds:de}=b;de&&(J=J?J.concat(de):de),E==null?(r(K,D,U),r(ue,D,U),y(b.children||[],D,ue,j,q,Z,J,W)):te>0&&te&64&&ae&&E.dynamicChildren&&E.dynamicChildren.length===ae.length?(T(E.dynamicChildren,ae,D,j,q,Z,J),(b.key!=null||j&&b===j.subTree)&&Id(E,b,!0)):Ie(E,b,D,ue,j,q,Z,J,W)},I=(E,b,D,U,j,q,Z,J,W)=>{b.slotScopeIds=J,E==null?b.shapeFlag&512?j.ctx.activate(b,D,U,Z,W):De(b,D,U,j,q,Z,W):rt(E,b,W)},De=(E,b,D,U,j,q,Z)=>{const J=E.component=yb(E,U,j);if(Ou(E)&&(J.ctx.renderer=oe),vb(J,!1,Z),J.asyncDep){if(j&&j.registerDep(J,xe,Z),!E.el){const W=J.subTree=at(kt);L(null,W,b,D),E.placeholder=W.el}}else xe(J,E,b,D,j,q,Z)},rt=(E,b,D)=>{const U=b.component=E.component;if(XA(E,b,D))if(U.asyncDep&&!U.asyncResolved){fe(U,b,D);return}else U.next=b,U.update();else b.el=E.el,U.vnode=b},xe=(E,b,D,U,j,q,Z)=>{const J=()=>{if(E.isMounted){let{next:te,bu:ae,u:de,parent:he,vnode:ge}=E;{const bt=Wy(E);if(bt){te&&(te.el=ge.el,fe(E,te,Z)),bt.asyncDep.then(()=>{E.isUnmounted||J()});return}}let Ae=te,gt;ps(E,!1),te?(te.el=ge.el,fe(E,te,Z)):te=ge,ae&&Tc(ae),(gt=te.props&&te.props.onVnodeBeforeUpdate)&&yn(gt,he,te,ge),ps(E,!0);const _t=zp(E),Zt=E.subTree;E.subTree=_t,P(Zt,_t,f(Zt.el),B(Zt),E,j,q),te.el=_t.el,Ae===null&&ZA(E,_t.el),de&&Ft(de,j),(gt=te.props&&te.props.onVnodeUpdated)&&Ft(()=>yn(gt,he,te,ge),j)}else{let te;const{el:ae,props:de}=b,{bm:he,m:ge,parent:Ae,root:gt,type:_t}=E,Zt=_i(b);ps(E,!1),he&&Tc(he),!Zt&&(te=de&&de.onVnodeBeforeMount)&&yn(te,Ae,b),ps(E,!0);{gt.ce&&gt.ce._def.shadowRoot!==!1&&gt.ce._injectChildStyle(_t);const bt=E.subTree=zp(E);P(null,bt,D,U,E,j,q),b.el=bt.el}if(ge&&Ft(ge,j),!Zt&&(te=de&&de.onVnodeMounted)){const bt=b;Ft(()=>yn(te,Ae,bt),j)}(b.shapeFlag&256||Ae&&_i(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&E.a&&Ft(E.a,j),E.isMounted=!0,b=D=U=null}};E.scope.on();const W=E.effect=new W_(J);E.scope.off();const K=E.update=W.run.bind(W),ue=E.job=W.runIfDirty.bind(W);ue.i=E,ue.id=E.uid,W.scheduler=()=>md(ue),ps(E,!0),K()},fe=(E,b,D)=>{b.component=E;const U=E.vnode.props;E.vnode=b,E.next=null,tb(E,b.props,U,D),ib(E,b.children,D),Xn(),Op(E),Zn()},Ie=(E,b,D,U,j,q,Z,J,W=!1)=>{const K=E&&E.children,ue=E?E.shapeFlag:0,te=b.children,{patchFlag:ae,shapeFlag:de}=b;if(ae>0){if(ae&128){an(K,te,D,U,j,q,Z,J,W);return}else if(ae&256){Kt(K,te,D,U,j,q,Z,J,W);return}}de&8?(ue&16&&qt(K,j,q),te!==K&&h(D,te)):ue&16?de&16?an(K,te,D,U,j,q,Z,J,W):qt(K,j,q,!0):(ue&8&&h(D,""),de&16&&y(te,D,U,j,q,Z,J,W))},Kt=(E,b,D,U,j,q,Z,J,W)=>{E=E||pi,b=b||pi;const K=E.length,ue=b.length,te=Math.min(K,ue);let ae;for(ae=0;ae<te;ae++){const de=b[ae]=W?Rr(b[ae]):En(b[ae]);P(E[ae],de,D,null,j,q,Z,J,W)}K>ue?qt(E,j,q,!0,!1,te):y(b,D,U,j,q,Z,J,W,te)},an=(E,b,D,U,j,q,Z,J,W)=>{let K=0;const ue=b.length;let te=E.length-1,ae=ue-1;for(;K<=te&&K<=ae;){const de=E[K],he=b[K]=W?Rr(b[K]):En(b[K]);if(Es(de,he))P(de,he,D,null,j,q,Z,J,W);else break;K++}for(;K<=te&&K<=ae;){const de=E[te],he=b[ae]=W?Rr(b[ae]):En(b[ae]);if(Es(de,he))P(de,he,D,null,j,q,Z,J,W);else break;te--,ae--}if(K>te){if(K<=ae){const de=ae+1,he=de<ue?b[de].el:U;for(;K<=ae;)P(null,b[K]=W?Rr(b[K]):En(b[K]),D,he,j,q,Z,J,W),K++}}else if(K>ae)for(;K<=te;)Qe(E[K],j,q,!0),K++;else{const de=K,he=K,ge=new Map;for(K=he;K<=ae;K++){const yt=b[K]=W?Rr(b[K]):En(b[K]);yt.key!=null&&ge.set(yt.key,K)}let Ae,gt=0;const _t=ae-he+1;let Zt=!1,bt=0;const fr=new Array(_t);for(K=0;K<_t;K++)fr[K]=0;for(K=de;K<=te;K++){const yt=E[K];if(gt>=_t){Qe(yt,j,q,!0);continue}let en;if(yt.key!=null)en=ge.get(yt.key);else for(Ae=he;Ae<=ae;Ae++)if(fr[Ae-he]===0&&Es(yt,b[Ae])){en=Ae;break}en===void 0?Qe(yt,j,q,!0):(fr[en-he]=K+1,en>=bt?bt=en:Zt=!0,P(yt,b[en],D,null,j,q,Z,J,W),gt++)}const oo=Zt?ub(fr):pi;for(Ae=oo.length-1,K=_t-1;K>=0;K--){const yt=he+K,en=b[yt],Ka=b[yt+1],Js=yt+1<ue?Ka.el||Qy(Ka):U;fr[K]===0?P(null,en,D,Js,j,q,Z,J,W):Zt&&(Ae<0||K!==oo[Ae]?Xt(en,D,Js,2):Ae--)}}},Xt=(E,b,D,U,j=null)=>{const{el:q,type:Z,transition:J,children:W,shapeFlag:K}=E;if(K&6){Xt(E.component.subTree,b,D,U);return}if(K&128){E.suspense.move(b,D,U);return}if(K&64){Z.move(E,b,D,oe);return}if(Z===Et){r(q,b,D);for(let te=0;te<W.length;te++)Xt(W[te],b,D,U);r(E.anchor,b,D);return}if(Z===bc){O(E,b,D);return}if(U!==2&&K&1&&J)if(U===0)J.beforeEnter(q),r(q,b,D),Ft(()=>J.enter(q),j);else{const{leave:te,delayLeave:ae,afterLeave:de}=J,he=()=>{E.ctx.isUnmounted?s(q):r(q,b,D)},ge=()=>{q._isLeaving&&q[qn](!0),te(q,()=>{he(),de&&de()})};ae?ae(q,he,ge):ge()}else r(q,b,D)},Qe=(E,b,D,U=!1,j=!1)=>{const{type:q,props:Z,ref:J,children:W,dynamicChildren:K,shapeFlag:ue,patchFlag:te,dirs:ae,cacheIndex:de}=E;if(te===-2&&(j=!1),J!=null&&(Xn(),qo(J,null,D,E,!0),Zn()),de!=null&&(b.renderCache[de]=void 0),ue&256){b.ctx.deactivate(E);return}const he=ue&1&&ae,ge=!_i(E);let Ae;if(ge&&(Ae=Z&&Z.onVnodeBeforeUnmount)&&yn(Ae,b,E),ue&6)zt(E.component,D,U);else{if(ue&128){E.suspense.unmount(D,U);return}he&&fs(E,null,b,"beforeUnmount"),ue&64?E.type.remove(E,b,D,oe,U):K&&!K.hasOnce&&(q!==Et||te>0&&te&64)?qt(K,b,D,!1,!0):(q===Et&&te&384||!j&&ue&16)&&qt(W,b,D),U&&Je(E)}(ge&&(Ae=Z&&Z.onVnodeUnmounted)||he)&&Ft(()=>{Ae&&yn(Ae,b,E),he&&fs(E,null,b,"unmounted")},D)},Je=E=>{const{type:b,el:D,anchor:U,transition:j}=E;if(b===Et){dr(D,U);return}if(b===bc){x(E);return}const q=()=>{s(D),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(E.shapeFlag&1&&j&&!j.persisted){const{leave:Z,delayLeave:J}=j,W=()=>Z(D,q);J?J(E.el,q,W):W()}else q()},dr=(E,b)=>{let D;for(;E!==b;)D=m(E),s(E),E=D;s(b)},zt=(E,b,D)=>{const{bum:U,scope:j,job:q,subTree:Z,um:J,m:W,a:K}=E;Qp(W),Qp(K),U&&Tc(U),j.stop(),q&&(q.flags|=8,Qe(Z,E,b,D)),J&&Ft(J,b),Ft(()=>{E.isUnmounted=!0},b)},qt=(E,b,D,U=!1,j=!1,q=0)=>{for(let Z=q;Z<E.length;Z++)Qe(E[Z],b,D,U,j)},B=E=>{if(E.shapeFlag&6)return B(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const b=m(E.anchor||E.el),D=b&&b[yy];return D?m(D):b};let re=!1;const ee=(E,b,D)=>{let U;E==null?b._vnode&&(Qe(b._vnode,null,null,!0),U=b._vnode.component):P(b._vnode||null,E,b,null,null,null,D),b._vnode=E,re||(re=!0,Op(U),fy(),re=!1)},oe={p:P,um:Qe,m:Xt,r:Je,mt:De,mc:y,pc:Ie,pbc:T,n:B,o:n};return{render:ee,hydrate:void 0,createApp:zA(ee)}}function Fl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ps({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function cb(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Id(n,e,t=!1){const r=n.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Rr(s[i]),a.el=o.el),!t&&a.patchFlag!==-2&&Id(o,a)),a.type===Fu&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=i+(n.type===Et?1:0)),a.type===kt&&!a.el&&(a.el=o.el)}}function ub(n){const e=n.slice(),t=[0];let r,s,i,o,a;const c=n.length;for(r=0;r<c;r++){const l=n[r];if(l!==0){if(s=t[t.length-1],n[s]<l){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<l?i=a+1:o=a;l<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function Wy(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wy(e)}function Qp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Qy(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Qy(e.subTree):null}const Jy=n=>n.__isSuspense;function lb(n,e){e&&e.pendingBranch?ce(n)?e.effects.push(...n):e.effects.push(n):IA(n)}const Et=Symbol.for("v-fgt"),Fu=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),bc=Symbol.for("v-stc"),Go=[];let Wt=null;function Ur(n=!1){Go.push(Wt=n?null:[])}function hb(){Go.pop(),Wt=Go[Go.length-1]||null}let sa=1;function Wc(n,e=!1){sa+=n,n<0&&Wt&&e&&(Wt.hasOnce=!0)}function Yy(n){return n.dynamicChildren=sa>0?Wt||pi:null,hb(),sa>0&&Wt&&Wt.push(n),n}function Rc(n,e,t,r,s,i){return Yy(Zy(n,e,t,r,s,i,!0))}function Qc(n,e,t,r,s){return Yy(at(n,e,t,r,s,!0))}function ia(n){return n?n.__v_isVNode===!0:!1}function Es(n,e){return n.type===e.type&&n.key===e.key}const Xy=({key:n})=>n??null,Sc=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ye(n)||tt(n)||me(n)?{i:At,r:n,k:e,f:!!t}:n:null);function Zy(n,e=null,t=null,r=0,s=null,i=n===Et?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Xy(e),ref:e&&Sc(e),scopeId:my,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:At};return a?(Ed(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Ye(t)?8:16),sa>0&&!o&&Wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Wt.push(c),c}const at=db;function db(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===xy)&&(n=kt),ia(n)){const a=jr(n,e,!0);return t&&Ed(a,t),sa>0&&!i&&Wt&&(a.shapeFlag&6?Wt[Wt.indexOf(n)]=a:Wt.push(a)),a.patchFlag=-2,a}if(Ab(n)&&(n=n.__vccOpts),e){e=fb(e);let{class:a,style:c}=e;a&&!Ye(a)&&(e.class=Cu(a)),Me(c)&&(Vu(c)&&!ce(c)&&(c=ct({},c)),e.style=od(c))}const o=Ye(n)?1:Jy(n)?128:vy(n)?64:Me(n)?4:me(n)?2:0;return Zy(n,e,t,r,s,o,i,!0)}function fb(n){return n?Vu(n)||jy(n)?ct({},n):n:null}function jr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=n,l=e?mb(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&Xy(l),ref:e&&e.ref?t&&i?ce(i)?i.concat(Sc(e)):[i,Sc(e)]:Sc(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Et?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&jr(n.ssContent),ssFallback:n.ssFallback&&jr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&ks(h,c.clone(h)),h}function pb(n=" ",e=0){return at(Fu,null,n,e)}function iM(n,e){const t=at(bc,null,n);return t.staticCount=e,t}function oM(n="",e=!1){return e?(Ur(),Qc(kt,null,n)):at(kt,null,n)}function En(n){return n==null||typeof n=="boolean"?at(kt):ce(n)?at(Et,null,n.slice()):ia(n)?Rr(n):at(Fu,null,String(n))}function Rr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:jr(n)}function Ed(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ce(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ed(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!jy(e)?e._ctx=At:s===3&&At&&(At.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:At},t=32):(e=String(e),r&64?(t=16,e=[pb(e)]):t=8);n.children=e,n.shapeFlag|=t}function mb(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Cu([e.class,r.class]));else if(s==="style")e.style=od([e.style,r.style]);else if(wu(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function yn(n,e,t,r=null){pn(n,e,7,[t,r])}const gb=Fy();let _b=0;function yb(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||gb,i={uid:_b++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new K_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$y(r,s),emitsOptions:Uy(r,s),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:r.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=WA.bind(null,i),n.ce&&n.ce(i),i}let xt=null;const Uu=()=>xt||At;let Jc,gh;{const n=Pu(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Jc=e("__VUE_INSTANCE_SETTERS__",t=>xt=t),gh=e("__VUE_SSR_SETTERS__",t=>oa=t)}const wa=n=>{const e=xt;return Jc(n),n.scope.on(),()=>{n.scope.off(),Jc(e)}},Jp=()=>{xt&&xt.scope.off(),Jc(null)};function ev(n){return n.vnode.shapeFlag&4}let oa=!1;function vb(n,e=!1,t=!1){e&&gh(e);const{props:r,children:s}=n.vnode,i=ev(n);eb(n,r,i,e),sb(n,s,t||e);const o=i?Ib(n,e):void 0;return e&&gh(!1),o}function Ib(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,UA);const{setup:r}=t;if(r){Xn();const s=n.setupContext=r.length>1?Tb(n):null,i=wa(n),o=Ta(r,n,0,[n.props,s]),a=L_(o);if(Zn(),i(),(a||n.sp)&&!_i(n)&&Sy(n),a){if(o.then(Jp,Jp),e)return o.then(c=>{Yp(n,c)}).catch(c=>{ku(c,n,0)});n.asyncDep=o}else Yp(n,o)}else tv(n)}function Yp(n,e,t){me(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Me(e)&&(n.setupState=ly(e)),tv(n)}function tv(n,e,t){const r=n.type;n.render||(n.render=r.render||bn);{const s=wa(n);Xn();try{BA(n)}finally{Zn(),s()}}}const Eb={get(n,e){return Vt(n,"get",""),n[e]}};function Tb(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Eb),slots:n.slots,emit:n.emit,expose:e}}function Bu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ly(pd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in jo)return jo[t](n)},has(e,t){return t in e||t in jo}})):n.proxy}function wb(n,e=!0){return me(n)?n.displayName||n.name:n.name||e&&n.__name}function Ab(n){return me(n)&&"__vccOpts"in n}const Tt=(n,e)=>mA(n,e,oa);function Td(n,e,t){try{Wc(-1);const r=arguments.length;return r===2?Me(e)&&!ce(e)?ia(e)?at(n,null,[e]):at(n,e):at(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&ia(t)&&(t=[t]),at(n,e,t))}finally{Wc(1)}}const bb="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _h;const Xp=typeof window<"u"&&window.trustedTypes;if(Xp)try{_h=Xp.createPolicy("vue",{createHTML:n=>n})}catch{}const nv=_h?n=>_h.createHTML(n):n=>n,Rb="http://www.w3.org/2000/svg",Sb="http://www.w3.org/1998/Math/MathML",Bn=typeof document<"u"?document:null,Zp=Bn&&Bn.createElement("template"),Pb={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?Bn.createElementNS(Rb,n):e==="mathml"?Bn.createElementNS(Sb,n):t?Bn.createElement(n,{is:t}):Bn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Bn.createTextNode(n),createComment:n=>Bn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Bn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Zp.innerHTML=nv(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=Zp.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_r="transition",Eo="animation",Ri=Symbol("_vtc"),rv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sv=ct({},wy,rv),Cb=n=>(n.displayName="Transition",n.props=sv,n),Db=Cb((n,{slots:e})=>Td(SA,iv(n),e)),ms=(n,e=[])=>{ce(n)?n.forEach(t=>t(...e)):n&&n(...e)},em=n=>n?ce(n)?n.some(e=>e.length>1):n.length>1:!1;function iv(n){const e={};for(const A in n)A in rv||(e[A]=n[A]);if(n.css===!1)return e;const{name:t="v",type:r,duration:s,enterFromClass:i=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:h=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:g=`${t}-leave-to`}=n,R=Vb(s),P=R&&R[0],C=R&&R[1],{onBeforeEnter:L,onEnter:N,onEnterCancelled:O,onLeave:x,onLeaveCancelled:z,onBeforeAppear:H=L,onAppear:w=N,onAppearCancelled:y=O}=e,v=(A,I,De,rt)=>{A._enterCancelled=rt,Tr(A,I?h:a),Tr(A,I?l:o),De&&De()},T=(A,I)=>{A._isLeaving=!1,Tr(A,f),Tr(A,g),Tr(A,m),I&&I()},S=A=>(I,De)=>{const rt=A?w:N,xe=()=>v(I,A,De);ms(rt,[I,xe]),tm(()=>{Tr(I,A?c:i),vn(I,A?h:a),em(rt)||nm(I,r,P,xe)})};return ct(e,{onBeforeEnter(A){ms(L,[A]),vn(A,i),vn(A,o)},onBeforeAppear(A){ms(H,[A]),vn(A,c),vn(A,l)},onEnter:S(!1),onAppear:S(!0),onLeave(A,I){A._isLeaving=!0;const De=()=>T(A,I);vn(A,f),A._enterCancelled?(vn(A,m),yh(A)):(yh(A),vn(A,m)),tm(()=>{A._isLeaving&&(Tr(A,f),vn(A,g),em(x)||nm(A,r,C,De))}),ms(x,[A,De])},onEnterCancelled(A){v(A,!1,void 0,!0),ms(O,[A])},onAppearCancelled(A){v(A,!0,void 0,!0),ms(y,[A])},onLeaveCancelled(A){T(A),ms(z,[A])}})}function Vb(n){if(n==null)return null;if(Me(n))return[Ul(n.enter),Ul(n.leave)];{const e=Ul(n);return[e,e]}}function Ul(n){return Nw(n)}function vn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ri]||(n[Ri]=new Set)).add(e)}function Tr(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[Ri];t&&(t.delete(e),t.size||(n[Ri]=void 0))}function tm(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let kb=0;function nm(n,e,t,r){const s=n._endId=++kb,i=()=>{s===n._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:o,timeout:a,propCount:c}=ov(n,e);if(!o)return r();const l=o+"end";let h=0;const f=()=>{n.removeEventListener(l,m),i()},m=g=>{g.target===n&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},a+1),n.addEventListener(l,m)}function ov(n,e){const t=window.getComputedStyle(n),r=R=>(t[R]||"").split(", "),s=r(`${_r}Delay`),i=r(`${_r}Duration`),o=rm(s,i),a=r(`${Eo}Delay`),c=r(`${Eo}Duration`),l=rm(a,c);let h=null,f=0,m=0;e===_r?o>0&&(h=_r,f=o,m=i.length):e===Eo?l>0&&(h=Eo,f=l,m=c.length):(f=Math.max(o,l),h=f>0?o>l?_r:Eo:null,m=h?h===_r?i.length:c.length:0);const g=h===_r&&/\b(?:transform|all)(?:,|$)/.test(r(`${_r}Property`).toString());return{type:h,timeout:f,propCount:m,hasTransform:g}}function rm(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>sm(t)+sm(n[r])))}function sm(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function yh(n){return(n?n.ownerDocument:document).body.offsetHeight}function xb(n,e,t){const r=n[Ri];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Yc=Symbol("_vod"),av=Symbol("_vsh"),aM={name:"show",beforeMount(n,{value:e},{transition:t}){n[Yc]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):To(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:r}){!e!=!t&&(r?e?(r.beforeEnter(n),To(n,!0),r.enter(n)):r.leave(n,()=>{To(n,!1)}):To(n,e))},beforeUnmount(n,{value:e}){To(n,e)}};function To(n,e){n.style.display=e?n[Yc]:"none",n[av]=!e}const Nb=Symbol(""),Ob=/(?:^|;)\s*display\s*:/;function Mb(n,e,t){const r=n.style,s=Ye(t);let i=!1;if(t&&!s){if(e)if(Ye(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Pc(r,a,"")}else for(const o in e)t[o]==null&&Pc(r,o,"");for(const o in t)o==="display"&&(i=!0),Pc(r,o,t[o])}else if(s){if(e!==t){const o=r[Nb];o&&(t+=";"+o),r.cssText=t,i=Ob.test(t)}}else e&&n.removeAttribute("style");Yc in n&&(n[Yc]=i?r.display:"",n[av]&&(r.display="none"))}const im=/\s*!important$/;function Pc(n,e,t){if(ce(t))t.forEach(r=>Pc(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Lb(n,e);im.test(t)?n.setProperty(ts(r),t.replace(im,""),"important"):n[r]=t}}const om=["Webkit","Moz","ms"],Bl={};function Lb(n,e){const t=Bl[e];if(t)return t;let r=on(e);if(r!=="filter"&&r in n)return Bl[e]=r;r=Ru(r);for(let s=0;s<om.length;s++){const i=om[s]+r;if(i in n)return Bl[e]=i}return e}const am="http://www.w3.org/1999/xlink";function cm(n,e,t,r,s,i=Bw(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(am,e.slice(6,e.length)):n.setAttributeNS(am,e,t):t==null||i&&!q_(t)?n.removeAttribute(e):n.setAttribute(e,i?"":dn(t)?String(t):t)}function um(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?nv(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=q_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function $n(n,e,t,r){n.addEventListener(e,t,r)}function Fb(n,e,t,r){n.removeEventListener(e,t,r)}const lm=Symbol("_vei");function Ub(n,e,t,r,s=null){const i=n[lm]||(n[lm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Bb(e);if(r){const l=i[e]=Gb(r,s);$n(n,a,l,c)}else o&&(Fb(n,a,o,c),i[e]=void 0)}}const hm=/(?:Once|Passive|Capture)$/;function Bb(n){let e;if(hm.test(n)){e={};let r;for(;r=n.match(hm);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ts(n.slice(2)),e]}let ql=0;const qb=Promise.resolve(),jb=()=>ql||(qb.then(()=>ql=0),ql=Date.now());function Gb(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;pn($b(r,t.value),e,5,[r])};return t.value=n,t.attached=jb(),t}function $b(n,e){if(ce(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const dm=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Kb=(n,e,t,r,s,i)=>{const o=s==="svg";e==="class"?xb(n,r,o):e==="style"?Mb(n,t,r):wu(e)?sd(e)||Ub(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zb(n,e,r,o))?(um(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&cm(n,e,r,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ye(r))?um(n,on(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),cm(n,e,r,o))};function zb(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&dm(e)&&me(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return dm(e)&&Ye(t)?!1:e in n}const cv=new WeakMap,uv=new WeakMap,Xc=Symbol("_moveCb"),fm=Symbol("_enterCb"),Hb=n=>(delete n.props.mode,n),Wb=Hb({name:"TransitionGroup",props:ct({},sv,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Uu(),r=Ty();let s,i;return Cy(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!Zb(s[0].el,t.vnode.el,o)){s=[];return}s.forEach(Jb),s.forEach(Yb);const a=s.filter(Xb);yh(t.vnode.el),a.forEach(c=>{const l=c.el,h=l.style;vn(l,o),h.transform=h.webkitTransform=h.transitionDuration="";const f=l[Xc]=m=>{m&&m.target!==l||(!m||m.propertyName.endsWith("transform"))&&(l.removeEventListener("transitionend",f),l[Xc]=null,Tr(l,o))};l.addEventListener("transitionend",f)}),s=[]}),()=>{const o=Re(n),a=iv(o);let c=o.tag||Et;if(s=[],i)for(let l=0;l<i.length;l++){const h=i[l];h.el&&h.el instanceof Element&&(s.push(h),ks(h,ra(h,a,r,t)),cv.set(h,{left:h.el.offsetLeft,top:h.el.offsetTop}))}i=e.default?gd(e.default()):[];for(let l=0;l<i.length;l++){const h=i[l];h.key!=null&&ks(h,ra(h,a,r,t))}return at(c,null,i)}}}),Qb=Wb;function Jb(n){const e=n.el;e[Xc]&&e[Xc](),e[fm]&&e[fm]()}function Yb(n){uv.set(n,{left:n.el.offsetLeft,top:n.el.offsetTop})}function Xb(n){const e=cv.get(n),t=uv.get(n),r=e.left-t.left,s=e.top-t.top;if(r||s){const i=n.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",n}}function Zb(n,e,t){const r=n.cloneNode(),s=n[Ri];s&&s.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),t.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=ov(r);return i.removeChild(r),o}const Gr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ce(e)?t=>Tc(e,t):e};function eR(n){n.target.composing=!0}function pm(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rn=Symbol("_assign");function mm(n,e,t){return e&&(n=n.trim()),t&&(n=Su(n)),n}const gm={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[rn]=Gr(s);const i=r||s.props&&s.props.type==="number";$n(n,e?"change":"input",o=>{o.target.composing||n[rn](mm(n.value,t,i))}),(t||i)&&$n(n,"change",()=>{n.value=mm(n.value,t,i)}),e||($n(n,"compositionstart",eR),$n(n,"compositionend",pm),$n(n,"change",pm))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},o){if(n[rn]=Gr(o),n.composing)return;const a=(i||n.type==="number")&&!/^0\d/.test(n.value)?Su(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},tR={deep:!0,created(n,e,t){n[rn]=Gr(t),$n(n,"change",()=>{const r=n._modelValue,s=Si(n),i=n.checked,o=n[rn];if(ce(r)){const a=ad(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(zi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(lv(n,i))})},mounted:_m,beforeUpdate(n,e,t){n[rn]=Gr(t),_m(n,e,t)}};function _m(n,{value:e,oldValue:t},r){n._modelValue=e;let s;if(ce(e))s=ad(e,r.props.value)>-1;else if(zi(e))s=e.has(r.props.value);else{if(e===t)return;s=Vs(e,lv(n,!0))}n.checked!==s&&(n.checked=s)}const nR={created(n,{value:e},t){n.checked=Vs(e,t.props.value),n[rn]=Gr(t),$n(n,"change",()=>{n[rn](Si(n))})},beforeUpdate(n,{value:e,oldValue:t},r){n[rn]=Gr(r),e!==t&&(n.checked=Vs(e,r.props.value))}},rR={deep:!0,created(n,{value:e,modifiers:{number:t}},r){const s=zi(e);$n(n,"change",()=>{const i=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Su(Si(o)):Si(o));n[rn](n.multiple?s?new Set(i):i:i[0]),n._assigning=!0,xu(()=>{n._assigning=!1})}),n[rn]=Gr(r)},mounted(n,{value:e}){ym(n,e)},beforeUpdate(n,e,t){n[rn]=Gr(t)},updated(n,{value:e}){n._assigning||ym(n,e)}};function ym(n,e){const t=n.multiple,r=ce(e);if(!(t&&!r&&!zi(e))){for(let s=0,i=n.options.length;s<i;s++){const o=n.options[s],a=Si(o);if(t)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=ad(e,a)>-1}else o.selected=e.has(a);else if(Vs(Si(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Si(n){return"_value"in n?n._value:n.value}function lv(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const cM={created(n,e,t){dc(n,e,t,null,"created")},mounted(n,e,t){dc(n,e,t,null,"mounted")},beforeUpdate(n,e,t,r){dc(n,e,t,r,"beforeUpdate")},updated(n,e,t,r){dc(n,e,t,r,"updated")}};function sR(n,e){switch(n){case"SELECT":return rR;case"TEXTAREA":return gm;default:switch(e){case"checkbox":return tR;case"radio":return nR;default:return gm}}}function dc(n,e,t,r,s){const o=sR(n.tagName,t.props&&t.props.type)[s];o&&o(n,e,t,r)}const iR=["ctrl","shift","alt","meta"],oR={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>iR.some(t=>n[`${t}Key`]&&!e.includes(t))},uM=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=oR[e[o]];if(a&&a(s,e))return}return n(s,...i)})},aR={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},lM=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=ts(s.key);if(e.some(o=>o===i||aR[o]===i))return n(s)})},cR=ct({patchProp:Kb},Pb);let vm;function uR(){return vm||(vm=ob(cR))}const lR=(...n)=>{const e=uR().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=dR(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,hR(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function hR(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function dR(n){return Ye(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let hv;const qu=n=>hv=n,dv=Symbol();function vh(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var $o;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})($o||($o={}));function fR(){const n=z_(!0),e=n.run(()=>Pr({}));let t=[],r=[];const s=pd({install(i){qu(s),s._a=i,i.provide(dv,s),i.config.globalProperties.$pinia=s,r.forEach(o=>t.push(o)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const fv=()=>{};function Im(n,e,t,r=fv){n.push(e);const s=()=>{const i=n.indexOf(e);i>-1&&(n.splice(i,1),r())};return!t&&H_()&&jw(s),s}function ni(n,...e){n.slice().forEach(t=>{t(...e)})}const pR=n=>n(),Em=Symbol(),jl=Symbol();function Ih(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];vh(s)&&vh(r)&&n.hasOwnProperty(t)&&!tt(r)&&!Qn(r)?n[t]=Ih(s,r):n[t]=r}return n}const mR=Symbol();function gR(n){return!vh(n)||!n.hasOwnProperty(mR)}const{assign:wr}=Object;function _R(n){return!!(tt(n)&&n.effect)}function yR(n,e,t,r){const{state:s,actions:i,getters:o}=e,a=t.state.value[n];let c;function l(){a||(t.state.value[n]=s?s():{});const h=hA(t.state.value[n]);return wr(h,i,Object.keys(o||{}).reduce((f,m)=>(f[m]=pd(Tt(()=>{qu(t);const g=t._s.get(n);return o[m].call(g,g)})),f),{}))}return c=pv(n,l,e,t,r,!0),c}function pv(n,e,t={},r,s,i){let o;const a=wr({actions:{}},t),c={deep:!0};let l,h,f=[],m=[],g;const R=r.state.value[n];!i&&!R&&(r.state.value[n]={});let P;function C(y){let v;l=h=!1,typeof y=="function"?(y(r.state.value[n]),v={type:$o.patchFunction,storeId:n,events:g}):(Ih(r.state.value[n],y),v={type:$o.patchObject,payload:y,storeId:n,events:g});const T=P=Symbol();xu().then(()=>{P===T&&(l=!0)}),h=!0,ni(f,v,r.state.value[n])}const L=i?function(){const{state:v}=t,T=v?v():{};this.$patch(S=>{wr(S,T)})}:fv;function N(){o.stop(),f=[],m=[],r._s.delete(n)}const O=(y,v="")=>{if(Em in y)return y[jl]=v,y;const T=function(){qu(r);const S=Array.from(arguments),A=[],I=[];function De(fe){A.push(fe)}function rt(fe){I.push(fe)}ni(m,{args:S,name:T[jl],store:z,after:De,onError:rt});let xe;try{xe=y.apply(this&&this.$id===n?this:z,S)}catch(fe){throw ni(I,fe),fe}return xe instanceof Promise?xe.then(fe=>(ni(A,fe),fe)).catch(fe=>(ni(I,fe),Promise.reject(fe))):(ni(A,xe),xe)};return T[Em]=!0,T[jl]=v,T},x={_p:r,$id:n,$onAction:Im.bind(null,m),$patch:C,$reset:L,$subscribe(y,v={}){const T=Im(f,y,v.detached,()=>S()),S=o.run(()=>Uo(()=>r.state.value[n],A=>{(v.flush==="sync"?h:l)&&y({storeId:n,type:$o.direct,events:g},A)},wr({},c,v)));return T},$dispose:N},z=Ea(x);r._s.set(n,z);const w=(r._a&&r._a.runWithContext||pR)(()=>r._e.run(()=>(o=z_()).run(()=>e({action:O}))));for(const y in w){const v=w[y];if(tt(v)&&!_R(v)||Qn(v))i||(R&&gR(v)&&(tt(v)?v.value=R[y]:Ih(v,R[y])),r.state.value[n][y]=v);else if(typeof v=="function"){const T=O(v,y);w[y]=T,a.actions[y]=v}}return wr(z,w),wr(Re(z),w),Object.defineProperty(z,"$state",{get:()=>r.state.value[n],set:y=>{C(v=>{wr(v,y)})}}),r._p.forEach(y=>{wr(z,o.run(()=>y({store:z,app:r._a,pinia:r,options:a})))}),R&&i&&t.hydrate&&t.hydrate(z.$state,R),l=!0,h=!0,z}/*! #__NO_SIDE_EFFECTS__ */function mv(n,e,t){let r,s;const i=typeof e=="function";typeof n=="string"?(r=n,s=i?t:e):(s=n,r=n.id);function o(a,c){const l=EA();return a=a||(l?nn(dv,null):null),a&&qu(a),a=hv,a._s.has(r)||(i?pv(r,e,s,a):yR(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ci=typeof document<"u";function gv(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function vR(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&gv(n.default)}const Ve=Object.assign;function Gl(n,e){const t={};for(const r in e){const s=e[r];t[r]=mn(s)?s.map(n):n(s)}return t}const Ko=()=>{},mn=Array.isArray;function Tm(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}const _v=/#/g,IR=/&/g,ER=/\//g,TR=/=/g,wR=/\?/g,yv=/\+/g,AR=/%5B/g,bR=/%5D/g,vv=/%5E/g,RR=/%60/g,Iv=/%7B/g,SR=/%7C/g,Ev=/%7D/g,PR=/%20/g;function wd(n){return n==null?"":encodeURI(""+n).replace(SR,"|").replace(AR,"[").replace(bR,"]")}function CR(n){return wd(n).replace(Iv,"{").replace(Ev,"}").replace(vv,"^")}function Eh(n){return wd(n).replace(yv,"%2B").replace(PR,"+").replace(_v,"%23").replace(IR,"%26").replace(RR,"`").replace(Iv,"{").replace(Ev,"}").replace(vv,"^")}function DR(n){return Eh(n).replace(TR,"%3D")}function VR(n){return wd(n).replace(_v,"%23").replace(wR,"%3F")}function kR(n){return VR(n).replace(ER,"%2F")}function aa(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const xR=/\/$/,NR=n=>n.replace(xR,"");function $l(n,e,t="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,a>0?a:e.length),s=n(i.slice(1))),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=FR(r??e,t),{fullPath:r+i+o,path:r,query:s,hash:aa(o)}}function OR(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function wm(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function MR(n,e,t){const r=e.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&Pi(e.matched[r],t.matched[s])&&Tv(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Pi(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Tv(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!LR(n[t],e[t]))return!1;return!0}function LR(n,e){return mn(n)?Am(n,e):mn(e)?Am(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function Am(n,e){return mn(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function FR(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const yr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Th=function(n){return n.pop="pop",n.push="push",n}({}),Kl=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function UR(n){if(!n)if(ci){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),NR(n)}const BR=/^[^#]+#/;function qR(n,e){return n.replace(BR,"#")+e}function jR(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const ju=()=>({left:window.scrollX,top:window.scrollY});function GR(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=jR(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function bm(n,e){return(history.state?history.state.position-e:-1)+n}const wh=new Map;function $R(n,e){wh.set(n,e)}function KR(n){const e=wh.get(n);return wh.delete(n),e}function zR(n){return typeof n=="string"||n&&typeof n=="object"}function wv(n){return typeof n=="string"||typeof n=="symbol"}let et=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const Av=Symbol("");et.MATCHER_NOT_FOUND+"",et.NAVIGATION_GUARD_REDIRECT+"",et.NAVIGATION_ABORTED+"",et.NAVIGATION_CANCELLED+"",et.NAVIGATION_DUPLICATED+"";function Ci(n,e){return Ve(new Error,{type:n,[Av]:!0},e)}function Fn(n,e){return n instanceof Error&&Av in n&&(e==null||!!(n.type&e))}const HR=["params","query","hash"];function WR(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of HR)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function QR(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<t.length;++r){const s=t[r].replace(yv," "),i=s.indexOf("="),o=aa(i<0?s:s.slice(0,i)),a=i<0?null:aa(s.slice(i+1));if(o in e){let c=e[o];mn(c)||(c=e[o]=[c]),c.push(a)}else e[o]=a}return e}function Rm(n){let e="";for(let t in n){const r=n[t];if(t=DR(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(mn(r)?r.map(s=>s&&Eh(s)):[r&&Eh(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function JR(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=mn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const YR=Symbol(""),Sm=Symbol(""),Gu=Symbol(""),Ad=Symbol(""),Ah=Symbol("");function wo(){let n=[];function e(r){return n.push(r),()=>{const s=n.indexOf(r);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Sr(n,e,t,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=m=>{m===!1?c(Ci(et.NAVIGATION_ABORTED,{from:t,to:e})):m instanceof Error?c(m):zR(m)?c(Ci(et.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),a())},h=i(()=>n.call(r&&r.instances[s],e,t,l));let f=Promise.resolve(h);n.length<3&&(f=f.then(l)),f.catch(m=>c(m))})}function zl(n,e,t,r,s=i=>i()){const i=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(gv(c)){const l=(c.__vccOpts||c)[e];l&&i.push(Sr(l,t,r,o,a,s))}else{let l=c();i.push(()=>l.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=vR(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&Sr(m,t,r,o,a,s)()}))}}return i}function XR(n,e){const t=[],r=[],s=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(l=>Pi(l,a))?r.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(l=>Pi(l,c))||s.push(c))}return[t,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ZR=()=>location.protocol+"//"+location.host;function bv(n,e){const{pathname:t,search:r,hash:s}=e,i=n.indexOf("#");if(i>-1){let o=s.includes(n.slice(i))?n.slice(i).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),wm(a,"")}return wm(t,n)+r+s}function eS(n,e,t,r){let s=[],i=[],o=null;const a=({state:m})=>{const g=bv(n,location),R=t.value,P=e.value;let C=0;if(m){if(t.value=g,e.value=m,o&&o===R){o=null;return}C=P?m.position-P.position:0}else r(g);s.forEach(L=>{L(t.value,R,{delta:C,type:Th.pop,direction:C?C>0?Kl.forward:Kl.back:Kl.unknown})})};function c(){o=t.value}function l(m){s.push(m);const g=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(g),g}function h(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Ve({},m.state,{scroll:ju()}),"")}}function f(){for(const m of i)m();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:c,listen:l,destroy:f}}function Pm(n,e,t,r=!1,s=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:s?ju():null}}function tS(n){const{history:e,location:t}=window,r={value:bv(n,t)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,h){const f=n.indexOf("#"),m=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+c:ZR()+n+c;try{e[h?"replaceState":"pushState"](l,"",m),s.value=l}catch(g){console.error(g),t[h?"replace":"assign"](m)}}function o(c,l){i(c,Ve({},e.state,Pm(s.value.back,c,s.value.forward,!0),l,{position:s.value.position}),!0),r.value=c}function a(c,l){const h=Ve({},s.value,e.state,{forward:c,scroll:ju()});i(h.current,h,!0),i(c,Ve({},Pm(r.value,c,null),{position:h.position+1},l),!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function nS(n){n=UR(n);const e=tS(n),t=eS(n,e.state,e.location,e.replace);function r(i,o=!0){o||t.pauseListeners(),history.go(i)}const s=Ve({location:"",base:n,go:r,createHref:qR.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Rs=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var ut=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(ut||{});const rS={type:Rs.Static,value:""},sS=/[a-zA-Z0-9_]/;function iS(n){if(!n)return[[]];if(n==="/")return[[rS]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(g){throw new Error(`ERR (${t})/"${l}": ${g}`)}let t=ut.Static,r=t;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",h="";function f(){l&&(t===ut.Static?i.push({type:Rs.Static,value:l}):t===ut.Param||t===ut.ParamRegExp||t===ut.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Rs.Param,value:l,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function m(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==ut.ParamRegExp){r=t,t=ut.EscapeNext;continue}switch(t){case ut.Static:c==="/"?(l&&f(),o()):c===":"?(f(),t=ut.Param):m();break;case ut.EscapeNext:m(),t=r;break;case ut.Param:c==="("?t=ut.ParamRegExp:sS.test(c)?m():(f(),t=ut.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case ut.ParamRegExp:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:t=ut.ParamRegExpEnd:h+=c;break;case ut.ParamRegExpEnd:f(),t=ut.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===ut.ParamRegExp&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}const Cm="[^/]+?",oS={sensitive:!1,strict:!1,start:!0,end:!0};var Ut=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Ut||{});const aS=/[.+*?^${}()[\]/\\]/g;function cS(n,e){const t=Ve({},oS,e),r=[];let s=t.start?"^":"";const i=[];for(const l of n){const h=l.length?[]:[Ut.Root];t.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const m=l[f];let g=Ut.Segment+(t.sensitive?Ut.BonusCaseSensitive:0);if(m.type===Rs.Static)f||(s+="/"),s+=m.value.replace(aS,"\\$&"),g+=Ut.Static;else if(m.type===Rs.Param){const{value:R,repeatable:P,optional:C,regexp:L}=m;i.push({name:R,repeatable:P,optional:C});const N=L||Cm;if(N!==Cm){g+=Ut.BonusCustomRegExp;try{`${N}`}catch(x){throw new Error(`Invalid custom RegExp for param "${R}" (${N}): `+x.message)}}let O=P?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;f||(O=C&&l.length<2?`(?:/${O})`:"/"+O),C&&(O+="?"),s+=O,g+=Ut.Dynamic,C&&(g+=Ut.BonusOptional),P&&(g+=Ut.BonusRepeatable),N===".*"&&(g+=Ut.BonusWildcard)}h.push(g)}r.push(h)}if(t.strict&&t.end){const l=r.length-1;r[l][r[l].length-1]+=Ut.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(l){const h=l.match(o),f={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",R=i[m-1];f[R.name]=g&&R.repeatable?g.split("/"):g}return f}function c(l){let h="",f=!1;for(const m of n){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of m)if(g.type===Rs.Static)h+=g.value;else if(g.type===Rs.Param){const{value:R,repeatable:P,optional:C}=g,L=R in l?l[R]:"";if(mn(L)&&!P)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const N=mn(L)?L.join("/"):L;if(!N)if(C)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${R}"`);h+=N}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function uS(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===Ut.Static+Ut.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Ut.Static+Ut.Segment?1:-1:0}function Rv(n,e){let t=0;const r=n.score,s=e.score;for(;t<r.length&&t<s.length;){const i=uS(r[t],s[t]);if(i)return i;t++}if(Math.abs(s.length-r.length)===1){if(Dm(r))return 1;if(Dm(s))return-1}return s.length-r.length}function Dm(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const lS={strict:!1,end:!0,sensitive:!1};function hS(n,e,t){const r=cS(iS(n.path),t),s=Ve(r,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function dS(n,e){const t=[],r=new Map;e=Tm(lS,e);function s(f){return r.get(f)}function i(f,m,g){const R=!g,P=km(f);P.aliasOf=g&&g.record;const C=Tm(e,f),L=[P];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of x)L.push(km(Ve({},P,{components:g?g.record.components:P.components,path:z,aliasOf:g?g.record:P})))}let N,O;for(const x of L){const{path:z}=x;if(m&&z[0]!=="/"){const H=m.record.path,w=H[H.length-1]==="/"?"":"/";x.path=m.record.path+(z&&w+z)}if(N=hS(x,m,C),g?g.alias.push(N):(O=O||N,O!==N&&O.alias.push(N),R&&f.name&&!xm(N)&&o(f.name)),Sv(N)&&c(N),P.children){const H=P.children;for(let w=0;w<H.length;w++)i(H[w],N,g&&g.children[w])}g=g||N}return O?()=>{o(O)}:Ko}function o(f){if(wv(f)){const m=r.get(f);m&&(r.delete(f),t.splice(t.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=t.indexOf(f);m>-1&&(t.splice(m,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function c(f){const m=mS(f,t);t.splice(m,0,f),f.record.name&&!xm(f)&&r.set(f.record.name,f)}function l(f,m){let g,R={},P,C;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Ci(et.MATCHER_NOT_FOUND,{location:f});C=g.record.name,R=Ve(Vm(m.params,g.keys.filter(O=>!O.optional).concat(g.parent?g.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&Vm(f.params,g.keys.map(O=>O.name))),P=g.stringify(R)}else if(f.path!=null)P=f.path,g=t.find(O=>O.re.test(P)),g&&(R=g.parse(P),C=g.record.name);else{if(g=m.name?r.get(m.name):t.find(O=>O.re.test(m.path)),!g)throw Ci(et.MATCHER_NOT_FOUND,{location:f,currentLocation:m});C=g.record.name,R=Ve({},m.params,f.params),P=g.stringify(R)}const L=[];let N=g;for(;N;)L.unshift(N.record),N=N.parent;return{name:C,path:P,params:R,matched:L,meta:pS(L)}}n.forEach(f=>i(f));function h(){t.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Vm(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function km(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:fS(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function fS(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function xm(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function pS(n){return n.reduce((e,t)=>Ve(e,t.meta),{})}function mS(n,e){let t=0,r=e.length;for(;t!==r;){const i=t+r>>1;Rv(n,e[i])<0?r=i:t=i+1}const s=gS(n);return s&&(r=e.lastIndexOf(s,r-1)),r}function gS(n){let e=n;for(;e=e.parent;)if(Sv(e)&&Rv(n,e)===0)return e}function Sv({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Nm(n){const e=nn(Gu),t=nn(Ad),r=Tt(()=>{const c=Jn(n.to);return e.resolve(c)}),s=Tt(()=>{const{matched:c}=r.value,{length:l}=c,h=c[l-1],f=t.matched;if(!h||!f.length)return-1;const m=f.findIndex(Pi.bind(null,h));if(m>-1)return m;const g=Om(c[l-2]);return l>1&&Om(h)===g&&f[f.length-1].path!==g?f.findIndex(Pi.bind(null,c[l-2])):m}),i=Tt(()=>s.value>-1&&ES(t.params,r.value.params)),o=Tt(()=>s.value>-1&&s.value===t.matched.length-1&&Tv(t.params,r.value.params));function a(c={}){if(IS(c)){const l=e[Jn(n.replace)?"replace":"push"](Jn(n.to)).catch(Ko);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Tt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function _S(n){return n.length===1?n[0]:n}const yS=Nu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Nm,setup(n,{slots:e}){const t=Ea(Nm(n)),{options:r}=nn(Gu),s=Tt(()=>({[Mm(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Mm(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&_S(e.default(t));return n.custom?i:Td("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},i)}}}),vS=yS;function IS(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function ES(n,e){for(const t in e){const r=e[t],s=n[t];if(typeof r=="string"){if(r!==s)return!1}else if(!mn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function Om(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Mm=(n,e,t)=>n??e??t,TS=Nu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=nn(Ah),s=Tt(()=>n.route||r.value),i=nn(Sm,0),o=Tt(()=>{let l=Jn(i);const{matched:h}=s.value;let f;for(;(f=h[l])&&!f.components;)l++;return l}),a=Tt(()=>s.value.matched[o.value]);wc(Sm,Tt(()=>o.value+1)),wc(YR,a),wc(Ah,s);const c=Pr();return Uo(()=>[c.value,a.value,n.name],([l,h,f],[m,g,R])=>{h&&(h.instances[f]=l,g&&g!==h&&l&&l===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),l&&h&&(!g||!Pi(h,g)||!m)&&(h.enterCallbacks[f]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,h=n.name,f=a.value,m=f&&f.components[h];if(!m)return Lm(t.default,{Component:m,route:l});const g=f.props[h],R=g?g===!0?l.params:typeof g=="function"?g(l):g:null,C=Td(m,Ve({},R,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return Lm(t.default,{Component:C,route:l})||C}}});function Lm(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Pv=TS;function wS(n){const e=dS(n.routes,n),t=n.parseQuery||QR,r=n.stringifyQuery||Rm,s=n.history,i=wo(),o=wo(),a=wo(),c=cA(yr);let l=yr;ci&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Gl.bind(null,B=>""+B),f=Gl.bind(null,kR),m=Gl.bind(null,aa);function g(B,re){let ee,oe;return wv(B)?(ee=e.getRecordMatcher(B),oe=re):oe=B,e.addRoute(oe,ee)}function R(B){const re=e.getRecordMatcher(B);re&&e.removeRoute(re)}function P(){return e.getRoutes().map(B=>B.record)}function C(B){return!!e.getRecordMatcher(B)}function L(B,re){if(re=Ve({},re||c.value),typeof B=="string"){const D=$l(t,B,re.path),U=e.resolve({path:D.path},re),j=s.createHref(D.fullPath);return Ve(D,U,{params:m(U.params),hash:aa(D.hash),redirectedFrom:void 0,href:j})}let ee;if(B.path!=null)ee=Ve({},B,{path:$l(t,B.path,re.path).path});else{const D=Ve({},B.params);for(const U in D)D[U]==null&&delete D[U];ee=Ve({},B,{params:f(D)}),re.params=f(re.params)}const oe=e.resolve(ee,re),ye=B.hash||"";oe.params=h(m(oe.params));const E=OR(r,Ve({},B,{hash:CR(ye),path:oe.path})),b=s.createHref(E);return Ve({fullPath:E,hash:ye,query:r===Rm?JR(B.query):B.query||{}},oe,{redirectedFrom:void 0,href:b})}function N(B){return typeof B=="string"?$l(t,B,c.value.path):Ve({},B)}function O(B,re){if(l!==B)return Ci(et.NAVIGATION_CANCELLED,{from:re,to:B})}function x(B){return w(B)}function z(B){return x(Ve(N(B),{replace:!0}))}function H(B,re){const ee=B.matched[B.matched.length-1];if(ee&&ee.redirect){const{redirect:oe}=ee;let ye=typeof oe=="function"?oe(B,re):oe;return typeof ye=="string"&&(ye=ye.includes("?")||ye.includes("#")?ye=N(ye):{path:ye},ye.params={}),Ve({query:B.query,hash:B.hash,params:ye.path!=null?{}:B.params},ye)}}function w(B,re){const ee=l=L(B),oe=c.value,ye=B.state,E=B.force,b=B.replace===!0,D=H(ee,oe);if(D)return w(Ve(N(D),{state:typeof D=="object"?Ve({},ye,D.state):ye,force:E,replace:b}),re||ee);const U=ee;U.redirectedFrom=re;let j;return!E&&MR(r,oe,ee)&&(j=Ci(et.NAVIGATION_DUPLICATED,{to:U,from:oe}),Xt(oe,oe,!0,!1)),(j?Promise.resolve(j):T(U,oe)).catch(q=>Fn(q)?Fn(q,et.NAVIGATION_GUARD_REDIRECT)?q:an(q):Ie(q,U,oe)).then(q=>{if(q){if(Fn(q,et.NAVIGATION_GUARD_REDIRECT))return w(Ve({replace:b},N(q.to),{state:typeof q.to=="object"?Ve({},ye,q.to.state):ye,force:E}),re||U)}else q=A(U,oe,!0,b,ye);return S(U,oe,q),q})}function y(B,re){const ee=O(B,re);return ee?Promise.reject(ee):Promise.resolve()}function v(B){const re=dr.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(B):B()}function T(B,re){let ee;const[oe,ye,E]=XR(B,re);ee=zl(oe.reverse(),"beforeRouteLeave",B,re);for(const D of oe)D.leaveGuards.forEach(U=>{ee.push(Sr(U,B,re))});const b=y.bind(null,B,re);return ee.push(b),qt(ee).then(()=>{ee=[];for(const D of i.list())ee.push(Sr(D,B,re));return ee.push(b),qt(ee)}).then(()=>{ee=zl(ye,"beforeRouteUpdate",B,re);for(const D of ye)D.updateGuards.forEach(U=>{ee.push(Sr(U,B,re))});return ee.push(b),qt(ee)}).then(()=>{ee=[];for(const D of E)if(D.beforeEnter)if(mn(D.beforeEnter))for(const U of D.beforeEnter)ee.push(Sr(U,B,re));else ee.push(Sr(D.beforeEnter,B,re));return ee.push(b),qt(ee)}).then(()=>(B.matched.forEach(D=>D.enterCallbacks={}),ee=zl(E,"beforeRouteEnter",B,re,v),ee.push(b),qt(ee))).then(()=>{ee=[];for(const D of o.list())ee.push(Sr(D,B,re));return ee.push(b),qt(ee)}).catch(D=>Fn(D,et.NAVIGATION_CANCELLED)?D:Promise.reject(D))}function S(B,re,ee){a.list().forEach(oe=>v(()=>oe(B,re,ee)))}function A(B,re,ee,oe,ye){const E=O(B,re);if(E)return E;const b=re===yr,D=ci?history.state:{};ee&&(oe||b?s.replace(B.fullPath,Ve({scroll:b&&D&&D.scroll},ye)):s.push(B.fullPath,ye)),c.value=B,Xt(B,re,ee,b),an()}let I;function De(){I||(I=s.listen((B,re,ee)=>{if(!zt.listening)return;const oe=L(B),ye=H(oe,zt.currentRoute.value);if(ye){w(Ve(ye,{replace:!0,force:!0}),oe).catch(Ko);return}l=oe;const E=c.value;ci&&$R(bm(E.fullPath,ee.delta),ju()),T(oe,E).catch(b=>Fn(b,et.NAVIGATION_ABORTED|et.NAVIGATION_CANCELLED)?b:Fn(b,et.NAVIGATION_GUARD_REDIRECT)?(w(Ve(N(b.to),{force:!0}),oe).then(D=>{Fn(D,et.NAVIGATION_ABORTED|et.NAVIGATION_DUPLICATED)&&!ee.delta&&ee.type===Th.pop&&s.go(-1,!1)}).catch(Ko),Promise.reject()):(ee.delta&&s.go(-ee.delta,!1),Ie(b,oe,E))).then(b=>{b=b||A(oe,E,!1),b&&(ee.delta&&!Fn(b,et.NAVIGATION_CANCELLED)?s.go(-ee.delta,!1):ee.type===Th.pop&&Fn(b,et.NAVIGATION_ABORTED|et.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),S(oe,E,b)}).catch(Ko)}))}let rt=wo(),xe=wo(),fe;function Ie(B,re,ee){an(B);const oe=xe.list();return oe.length?oe.forEach(ye=>ye(B,re,ee)):console.error(B),Promise.reject(B)}function Kt(){return fe&&c.value!==yr?Promise.resolve():new Promise((B,re)=>{rt.add([B,re])})}function an(B){return fe||(fe=!B,De(),rt.list().forEach(([re,ee])=>B?ee(B):re()),rt.reset()),B}function Xt(B,re,ee,oe){const{scrollBehavior:ye}=n;if(!ci||!ye)return Promise.resolve();const E=!ee&&KR(bm(B.fullPath,0))||(oe||!ee)&&history.state&&history.state.scroll||null;return xu().then(()=>ye(B,re,E)).then(b=>b&&GR(b)).catch(b=>Ie(b,B,re))}const Qe=B=>s.go(B);let Je;const dr=new Set,zt={currentRoute:c,listening:!0,addRoute:g,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:C,getRoutes:P,resolve:L,options:n,push:x,replace:z,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:xe.add,isReady:Kt,install(B){B.component("RouterLink",vS),B.component("RouterView",Pv),B.config.globalProperties.$router=zt,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Jn(c)}),ci&&!Je&&c.value===yr&&(Je=!0,x(s.location).catch(oe=>{}));const re={};for(const oe in yr)Object.defineProperty(re,oe,{get:()=>c.value[oe],enumerable:!0});B.provide(Gu,zt),B.provide(Ad,cy(re)),B.provide(Ah,c);const ee=B.unmount;dr.add(B),B.unmount=function(){dr.delete(B),dr.size<1&&(l=yr,I&&I(),I=null,c.value=yr,Je=!1,fe=!1),ee()}}};function qt(B){return B.reduce((re,ee)=>re.then(()=>v(ee)),Promise.resolve())}return zt}function hM(){return nn(Gu)}function dM(n){return nn(Ad)}const Cv=mv("toast",()=>{const n=Pr([]),e=(r,s="info",i=3e3)=>{const o=`${Date.now()}-${Math.random().toString(36).slice(2)}`;n.value.push({id:o,message:r,type:s}),i>0&&setTimeout(()=>t(o),i)},t=r=>{n.value=n.value.filter(s=>s.id!==r)};return{toasts:n,addToast:e,removeToast:t}}),AS={class:"fixed top-4 right-4 z-[9999] space-y-3"},bS=Nu({__name:"ToastContainer",setup(n){const e=Cv(),t=r=>{switch(r){case"success":return"bg-green-600 text-white";case"error":return"bg-red-600 text-white";default:return"bg-gray-900 text-white"}};return(r,s)=>(Ur(),Rc("div",AS,[at(Qb,{name:"toast",tag:"div"},{default:Kc(()=>[(Ur(!0),Rc(Et,null,FA(Jn(e).toasts,i=>(Ur(),Rc("div",{key:i.id,class:Cu(["px-4 py-3 rounded-lg shadow-lg text-sm font-medium min-w-[220px] max-w-[320px]",t(i.type)])},G_(i.message),3))),128))]),_:1})]))}}),RS=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},SS=RS(bS,[["__scopeId","data-v-ae9f3e81"]]);var Fm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},PS=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(m=64)),r.push(t[h],t[f],t[m],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Dv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):PS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new CS;const m=i<<2|a>>4;if(r.push(m),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const R=l<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class CS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DS=function(n){const e=Dv(n);return Vv.encodeByteArray(e,!0)},Zc=function(n){return DS(n).replace(/\./g,"")},kv=function(n){try{return Vv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function VS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kS=()=>VS().__FIREBASE_DEFAULTS__,xS=()=>{if(typeof process>"u"||typeof Fm>"u")return;const n=Fm.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},NS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&kv(n[1]);return e&&JSON.parse(e)},$u=()=>{try{return kS()||xS()||NS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xv=n=>{var e,t;return(t=(e=$u())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},bd=n=>{const e=xv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Nv=()=>{var n;return(n=$u())===null||n===void 0?void 0:n.config},Ov=n=>{var e;return(e=$u())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Mv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Zc(JSON.stringify(t)),Zc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function LS(){var n;const e=(n=$u())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function FS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function US(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function BS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qS(){const n=lt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Lv(){return!LS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fv(){try{return typeof indexedDB=="object"}catch{return!1}}function jS(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="FirebaseError";class _n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=GS,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Aa.prototype.create)}}class Aa{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$S(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new _n(s,a,r)}}function $S(n,e){return n.replace(KS,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const KS=/\{\$([^}]+)}/g;function zS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $r(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Um(i)&&Um(o)){if(!$r(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Um(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Do(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Vo(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function HS(n,e){const t=new WS(n,e);return t.subscribe.bind(t)}class WS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");QS(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Hl),s.error===void 0&&(s.error=Hl),s.complete===void 0&&(s.complete=Hl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hl(){}/**
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
 */function Se(n){return n&&n._delegate?n._delegate:n}class tr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vs="[DEFAULT]";/**
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
 */class JS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new OS;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XS(e))try{this.getOrInitializeService({instanceIdentifier:vs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vs){return this.instances.has(e)}getOptions(e=vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YS(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vs){return this.component?this.component.multipleInstances?e:vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YS(n){return n===vs?void 0:n}function XS(n){return n.instantiationMode==="EAGER"}/**
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
 */class ZS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new JS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ee||(Ee={}));const eP={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},tP=Ee.INFO,nP={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},rP=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=nP[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rd{constructor(e){this.name=e,this._logLevel=tP,this._logHandler=rP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const sP=(n,e)=>e.some(t=>n instanceof t);let Bm,qm;function iP(){return Bm||(Bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oP(){return qm||(qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uv=new WeakMap,bh=new WeakMap,Bv=new WeakMap,Wl=new WeakMap,Sd=new WeakMap;function aP(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Br(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Uv.set(t,n)}).catch(()=>{}),Sd.set(e,n),e}function cP(n){if(bh.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});bh.set(n,e)}let Rh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return bh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Br(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function uP(n){Rh=n(Rh)}function lP(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ql(this),e,...t);return Bv.set(r,e.sort?e.sort():[e]),Br(r)}:oP().includes(n)?function(...e){return n.apply(Ql(this),e),Br(Uv.get(this))}:function(...e){return Br(n.apply(Ql(this),e))}}function hP(n){return typeof n=="function"?lP(n):(n instanceof IDBTransaction&&cP(n),sP(n,iP())?new Proxy(n,Rh):n)}function Br(n){if(n instanceof IDBRequest)return aP(n);if(Wl.has(n))return Wl.get(n);const e=hP(n);return e!==n&&(Wl.set(n,e),Sd.set(e,n)),e}const Ql=n=>Sd.get(n);function dP(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=Br(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Br(o.result),c.oldVersion,c.newVersion,Br(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const fP=["get","getKey","getAll","getAllKeys","count"],pP=["put","add","delete","clear"],Jl=new Map;function jm(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Jl.get(e))return Jl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=pP.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fP.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return Jl.set(e,i),i}uP(n=>({...n,get:(e,t,r)=>jm(e,t)||n.get(e,t,r),has:(e,t)=>!!jm(e,t)||n.has(e,t)}));/**
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
 */class mP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gP(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function gP(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sh="@firebase/app",Gm="0.10.13";/**
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
 */const nr=new Rd("@firebase/app"),_P="@firebase/app-compat",yP="@firebase/analytics-compat",vP="@firebase/analytics",IP="@firebase/app-check-compat",EP="@firebase/app-check",TP="@firebase/auth",wP="@firebase/auth-compat",AP="@firebase/database",bP="@firebase/data-connect",RP="@firebase/database-compat",SP="@firebase/functions",PP="@firebase/functions-compat",CP="@firebase/installations",DP="@firebase/installations-compat",VP="@firebase/messaging",kP="@firebase/messaging-compat",xP="@firebase/performance",NP="@firebase/performance-compat",OP="@firebase/remote-config",MP="@firebase/remote-config-compat",LP="@firebase/storage",FP="@firebase/storage-compat",UP="@firebase/firestore",BP="@firebase/vertexai-preview",qP="@firebase/firestore-compat",jP="firebase",GP="10.14.1";/**
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
 */const eu="[DEFAULT]",$P={[Sh]:"fire-core",[_P]:"fire-core-compat",[vP]:"fire-analytics",[yP]:"fire-analytics-compat",[EP]:"fire-app-check",[IP]:"fire-app-check-compat",[TP]:"fire-auth",[wP]:"fire-auth-compat",[AP]:"fire-rtdb",[bP]:"fire-data-connect",[RP]:"fire-rtdb-compat",[SP]:"fire-fn",[PP]:"fire-fn-compat",[CP]:"fire-iid",[DP]:"fire-iid-compat",[VP]:"fire-fcm",[kP]:"fire-fcm-compat",[xP]:"fire-perf",[NP]:"fire-perf-compat",[OP]:"fire-rc",[MP]:"fire-rc-compat",[LP]:"fire-gcs",[FP]:"fire-gcs-compat",[UP]:"fire-fst",[qP]:"fire-fst-compat",[BP]:"fire-vertex","fire-js":"fire-js",[jP]:"fire-js-all"};/**
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
 */const tu=new Map,KP=new Map,Ph=new Map;function $m(n,e){try{n.container.addComponent(e)}catch(t){nr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kr(n){const e=n.name;if(Ph.has(e))return nr.debug(`There were multiple attempts to register component ${e}.`),!1;Ph.set(e,n);for(const t of tu.values())$m(t,n);for(const t of KP.values())$m(t,n);return!0}function $s(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function zP(n,e,t=eu){$s(n,e).clearInstance(t)}function Tn(n){return n.settings!==void 0}/**
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
 */const HP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new Aa("app","Firebase",HP);/**
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
 */class WP{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ks=GP;function qv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw qr.create("bad-app-name",{appName:String(s)});if(t||(t=Nv()),!t)throw qr.create("no-options");const i=tu.get(s);if(i){if($r(t,i.options)&&$r(r,i.config))return i;throw qr.create("duplicate-app",{appName:s})}const o=new ZS(s);for(const c of Ph.values())o.addComponent(c);const a=new WP(t,r,o);return tu.set(s,a),a}function Ku(n=eu){const e=tu.get(n);if(!e&&n===eu&&Nv())return qv();if(!e)throw qr.create("no-app",{appName:n});return e}function sn(n,e,t){var r;let s=(r=$P[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nr.warn(a.join(" "));return}Kr(new tr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const QP="firebase-heartbeat-database",JP=1,ca="firebase-heartbeat-store";let Yl=null;function jv(){return Yl||(Yl=dP(QP,JP,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ca)}catch(t){console.warn(t)}}}}).catch(n=>{throw qr.create("idb-open",{originalErrorMessage:n.message})})),Yl}async function YP(n){try{const t=(await jv()).transaction(ca),r=await t.objectStore(ca).get(Gv(n));return await t.done,r}catch(e){if(e instanceof _n)nr.warn(e.message);else{const t=qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nr.warn(t.message)}}}async function Km(n,e){try{const r=(await jv()).transaction(ca,"readwrite");await r.objectStore(ca).put(e,Gv(n)),await r.done}catch(t){if(t instanceof _n)nr.warn(t.message);else{const r=qr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});nr.warn(r.message)}}}function Gv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const XP=1024,ZP=30*24*60*60*1e3;class e0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new n0(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ZP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){nr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zm(),{heartbeatsToSend:r,unsentEntries:s}=t0(this._heartbeatsCache.heartbeats),i=Zc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return nr.warn(t),""}}}function zm(){return new Date().toISOString().substring(0,10)}function t0(n,e=XP){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Hm(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Hm(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class n0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fv()?jS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await YP(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Km(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Km(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hm(n){return Zc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function r0(n){Kr(new tr("platform-logger",e=>new mP(e),"PRIVATE")),Kr(new tr("heartbeat",e=>new e0(e),"PRIVATE")),sn(Sh,Gm,n),sn(Sh,Gm,"esm2017"),sn("fire-js","")}r0("");function Pd(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function $v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const s0=$v,Kv=new Aa("auth","Firebase",$v());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=new Rd("@firebase/auth");function i0(n,...e){nu.logLevel<=Ee.WARN&&nu.warn(`Auth (${Ks}): ${n}`,...e)}function Cc(n,...e){nu.logLevel<=Ee.ERROR&&nu.error(`Auth (${Ks}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n,...e){throw Cd(n,...e)}function Rn(n,...e){return Cd(n,...e)}function zv(n,e,t){const r=Object.assign(Object.assign({},s0()),{[e]:t});return new Aa("auth","Firebase",r).create(e,{appName:n.name})}function Yn(n){return zv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cd(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kv.create(n,...e)}function le(n,e,...t){if(!n)throw Cd(e,...t)}function Kn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Cc(e),new Error(e)}function rr(n,e){n||Kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function o0(){return Wm()==="http:"||Wm()==="https:"}function Wm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(o0()||US()||"connection"in navigator)?navigator.onLine:!0}function c0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.shortDelay=e,this.longDelay=t,rr(t>e,"Short delay should be less than long delay!"),this.isMobile=MS()||BS()}get(){return a0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(n,e){rr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=new Ra(3e4,6e4);function ar(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xn(n,e,t,r,s={}){return Wv(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ba(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:c},i);return FS()||(l.referrerPolicy="no-referrer"),Hv.fetch()(Qv(n,n.config.apiHost,t,a),l)})}async function Wv(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},u0),e);try{const s=new d0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fc(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fc(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fc(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw fc(n,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw zv(n,h,l);gn(n,h)}}catch(s){if(s instanceof _n)throw s;gn(n,"network-request-failed",{message:String(s)})}}async function Sa(n,e,t,r,s={}){const i=await xn(n,e,t,r,s);return"mfaPendingCredential"in i&&gn(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Qv(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Dd(n.config,s):`${n.config.apiScheme}://${s}`}function h0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class d0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),l0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fc(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Rn(n,e,r);return s.customData._tokenResponse=t,s}function Qm(n){return n!==void 0&&n.enterprise!==void 0}class f0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return h0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function p0(n,e){return xn(n,"GET","/v2/recaptchaConfig",ar(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(n,e){return xn(n,"POST","/v1/accounts:delete",e)}async function Jv(n,e){return xn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function g0(n,e=!1){const t=Se(n),r=await t.getIdToken(e),s=Vd(r);le(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zo(Xl(s.auth_time)),issuedAtTime:zo(Xl(s.iat)),expirationTime:zo(Xl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xl(n){return Number(n)*1e3}function Vd(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Cc("JWT malformed, contained fewer than 3 sections"),null;try{const s=kv(t);return s?JSON.parse(s):(Cc("Failed to decode base64 JWT payload"),null)}catch(s){return Cc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jm(n){const e=Vd(n);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof _n&&_0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zo(this.lastLoginAt),this.creationTime=zo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ru(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Di(n,Jv(t,{idToken:r}));le(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yv(i.providerUserInfo):[],a=I0(n.providerData,o),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Dh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function v0(n){const e=Se(n);await ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function I0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Yv(n){return n.map(e=>{var{providerId:t}=e,r=Pd(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(n,e){const t=await Wv(n,{},async()=>{const r=ba({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Qv(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function T0(n,e){return xn(n,"POST","/v2/accounts:revokeToken",ar(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){le(e.length!==0,"internal-error");const t=Jm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await E0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new yi;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yi,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n,e){le(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class zn{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Pd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new y0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Di(this,this.stsTokenManager.getToken(this.auth,e));return le(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return g0(this,e)}reload(){return v0(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ru(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await Di(this,m0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,l,h;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,g=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(a=t.tenantId)!==null&&a!==void 0?a:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,L=(l=t.createdAt)!==null&&l!==void 0?l:void 0,N=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:x,isAnonymous:z,providerData:H,stsTokenManager:w}=t;le(O&&w,e,"internal-error");const y=yi.fromJSON(this.name,w);le(typeof O=="string",e,"internal-error"),vr(f,e.name),vr(m,e.name),le(typeof x=="boolean",e,"internal-error"),le(typeof z=="boolean",e,"internal-error"),vr(g,e.name),vr(R,e.name),vr(P,e.name),vr(C,e.name),vr(L,e.name),vr(N,e.name);const v=new zn({uid:O,auth:e,email:m,emailVerified:x,displayName:f,isAnonymous:z,photoURL:R,phoneNumber:g,tenantId:P,stsTokenManager:y,createdAt:L,lastLoginAt:N});return H&&Array.isArray(H)&&(v.providerData=H.map(T=>Object.assign({},T))),C&&(v._redirectEventId=C),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new yi;s.updateFromServerResponse(t);const i=new zn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ru(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Yv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new yi;a.updateFromIdToken(r);const c=new zn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Dh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new Map;function Hn(n){rr(n instanceof Function,"Expected a class definition");let e=Ym.get(n);return e?(rr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ym.set(n,e),e)}/**
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
 */class Xv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xv.type="NONE";const Xm=Xv;/**
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
 */function Dc(n,e,t){return`firebase:${n}:${e}:${t}`}class vi{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Dc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Dc("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new vi(Hn(Xm),e,r);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Hn(Xm);const o=Dc(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const h=await l._get(o);if(h){const f=zn._fromJSON(e,h);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new vi(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new vi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sI(e))return"Blackberry";if(iI(e))return"Webos";if(eI(e))return"Safari";if((e.includes("chrome/")||tI(e))&&!e.includes("edge/"))return"Chrome";if(rI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zv(n=lt()){return/firefox\//i.test(n)}function eI(n=lt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tI(n=lt()){return/crios\//i.test(n)}function nI(n=lt()){return/iemobile/i.test(n)}function rI(n=lt()){return/android/i.test(n)}function sI(n=lt()){return/blackberry/i.test(n)}function iI(n=lt()){return/webos/i.test(n)}function kd(n=lt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function w0(n=lt()){var e;return kd(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function A0(){return qS()&&document.documentMode===10}function oI(n=lt()){return kd(n)||rI(n)||iI(n)||sI(n)||/windows phone/i.test(n)||nI(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(n,e=[]){let t;switch(n){case"Browser":t=Zm(lt());break;case"Worker":t=`${Zm(lt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ks}/${r}`}/**
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
 */class b0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function R0(n,e={}){return xn(n,"GET","/v2/passwordPolicy",ar(n,e))}/**
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
 */const S0=6;class P0{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:S0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eg(this),this.idTokenSubscription=new eg(this),this.beforeStateQueue=new b0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Hn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await vi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Jv(this,{idToken:e}),r=await zn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ru(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(Yn(this));const t=e?Se(e):null;return t&&le(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await R0(this),t=new P0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Aa("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await T0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Hn(e)||this._popupRedirectResolver;le(t,this,"argument-error"),this.redirectPersistenceManager=await vi.create(this,[Hn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&i0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function zs(n){return Se(n)}class eg{constructor(e){this.auth=e,this.observer=null,this.addObserver=HS(t=>this.observer=t)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function D0(n){zu=n}function cI(n){return zu.loadJS(n)}function V0(){return zu.recaptchaEnterpriseScript}function k0(){return zu.gapiScript}function x0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const N0="recaptcha-enterprise",O0="NO_RECAPTCHA";class M0{constructor(e){this.type=N0,this.auth=zs(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{p0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new f0(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Qm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(O0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&Qm(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=V0();c.length!==0&&(c+=a),cI(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function tg(n,e,t,r=!1){const s=new M0(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Vh(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await tg(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await tg(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(n,e){const t=$s(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if($r(i,e??{}))return s;gn(s,"already-initialized")}return t.initialize({options:e})}function F0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Hn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function U0(n,e,t){const r=zs(n);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=uI(e),{host:o,port:a}=B0(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),q0()}function uI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function B0(n){const e=uI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ng(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ng(o)}}}function ng(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function q0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,t){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}async function j0(n,e){return xn(n,"POST","/v1/accounts:update",e)}async function G0(n,e){return xn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(n,e){return Sa(n,"POST","/v1/accounts:signInWithPassword",ar(n,e))}async function K0(n,e){return xn(n,"POST","/v1/accounts:sendOobCode",ar(n,e))}async function z0(n,e){return K0(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H0(n,e){return Sa(n,"POST","/v1/accounts:signInWithEmailLink",ar(n,e))}async function W0(n,e){return Sa(n,"POST","/v1/accounts:signInWithEmailLink",ar(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends xd{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ua(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ua(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vh(e,t,"signInWithPassword",$0);case"emailLink":return H0(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vh(e,r,"signUpPassword",G0);case"emailLink":return W0(e,{idToken:t,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(n,e){return Sa(n,"POST","/v1/accounts:signInWithIdp",ar(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="http://localhost";class xs extends xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):gn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Pd(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new xs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ii(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ii(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ii(e,t)}buildRequest(){const e={requestUri:Q0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ba(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Y0(n){const e=Do(Vo(n)).link,t=e?Do(Vo(e)).deep_link_id:null,r=Do(Vo(n)).deep_link_id;return(r?Do(Vo(r)).link:null)||r||t||e||n}class Nd{constructor(e){var t,r,s,i,o,a;const c=Do(Vo(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,f=J0((s=c.mode)!==null&&s!==void 0?s:null);le(l&&h&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Y0(e);try{return new Nd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.providerId=Hi.PROVIDER_ID}static credential(e,t){return ua._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Nd.parseLink(t);return le(r,"argument-error"),ua._fromEmailAndCode(e,r.code,r.tenantId)}}Hi.PROVIDER_ID="password";Hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pa extends lI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Pa{constructor(){super("facebook.com")}static credential(e){return xs._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Dr.credential(t,r)}catch{return null}}}Dr.GOOGLE_SIGN_IN_METHOD="google.com";Dr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Pa{constructor(){super("github.com")}static credential(e){return xs._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Pa{constructor(){super("twitter.com")}static credential(e,t){return xs._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return kr.credential(t,r)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(n,e){return Sa(n,"POST","/v1/accounts:signUp",ar(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await zn._fromIdTokenResponse(e,r,s),o=rg(r);return new Ns({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=rg(r);return new Ns({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function rg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su extends _n{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,su.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new su(e,t,r,s)}}function hI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?su._fromErrorAndOperation(n,i,e,r):i})}async function Z0(n,e,t=!1){const r=await Di(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ns._forOperation(n,"link",r)}/**
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
 */async function dI(n,e,t=!1){const{auth:r}=n;if(Tn(r.app))return Promise.reject(Yn(r));const s="reauthenticate";try{const i=await Di(n,hI(r,s,e,n),t);le(i.idToken,r,"internal-error");const o=Vd(i.idToken);le(o,r,"internal-error");const{sub:a}=o;return le(n.uid===a,r,"user-mismatch"),Ns._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(n,e,t=!1){if(Tn(n.app))return Promise.reject(Yn(n));const r="signIn",s=await hI(n,r,e),i=await Ns._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function eC(n,e){return fI(zs(n),e)}async function fM(n,e){return dI(Se(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(n,e,t){var r;le(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),le(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(le(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(le(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(n){const e=zs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pM(n,e,t){if(Tn(n.app))return Promise.reject(Yn(n));const r=zs(n),o=await Vh(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",X0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&pI(n),c}),a=await Ns._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function sg(n,e,t){return Tn(n.app)?Promise.reject(Yn(n)):eC(Se(n),Hi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pI(n),r})}async function mM(n,e){const t=Se(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&tC(t.auth,s,e);const{email:i}=await z0(t.auth,s);i!==n.email&&await n.reload()}function gM(n,e){return nC(Se(n),null,e)}async function nC(n,e,t){const{auth:r}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(i.password=t);const o=await Di(n,j0(r,i));await n._updateTokensIfNecessary(o,!0)}function rC(n,e,t,r){return Se(n).onIdTokenChanged(e,t,r)}function sC(n,e,t){return Se(n).beforeAuthStateChanged(e,t)}function iC(n,e,t,r){return Se(n).onAuthStateChanged(e,t,r)}function oC(n){return Se(n).signOut()}const iu="__sak";/**
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
 */class mI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(iu,"1"),this.storage.removeItem(iu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=1e3,cC=10;class gI extends mI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);A0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cC):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gI.type="LOCAL";const uC=gI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I extends mI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_I.type="SESSION";const yI=_I;/**
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
 */function lC(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Hu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Hu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,i)),c=await lC(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class hC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Od("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===l)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function dC(n){Sn().location.href=n}/**
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
 */function vI(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function fC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function mC(){return vI()?self:null}/**
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
 */const II="firebaseLocalStorageDb",gC=1,ou="firebaseLocalStorage",EI="fbase_key";class Ca{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wu(n,e){return n.transaction([ou],e?"readwrite":"readonly").objectStore(ou)}function _C(){const n=indexedDB.deleteDatabase(II);return new Ca(n).toPromise()}function kh(){const n=indexedDB.open(II,gC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ou,{keyPath:EI})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ou)?e(r):(r.close(),await _C(),e(await kh()))})})}async function ig(n,e,t){const r=Wu(n,!0).put({[EI]:e,value:t});return new Ca(r).toPromise()}async function yC(n,e){const t=Wu(n,!1).get(e),r=await new Ca(t).toPromise();return r===void 0?null:r.value}function og(n,e){const t=Wu(n,!0).delete(e);return new Ca(t).toPromise()}const vC=800,IC=3;class TI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>IC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hu._getInstance(mC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fC(),!this.activeServiceWorker)return;this.sender=new hC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kh();return await ig(e,iu,"1"),await og(e,iu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ig(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>yC(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>og(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Wu(s,!1).getAll();return new Ca(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TI.type="LOCAL";const EC=TI;new Ra(3e4,6e4);/**
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
 */function TC(n,e){return e?Hn(e):(le(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Md extends xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ii(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ii(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wC(n){return fI(n.auth,new Md(n),n.bypassAuthState)}function AC(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),dI(t,new Md(n),n.bypassAuthState)}async function bC(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),Z0(t,new Md(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wC;case"linkViaPopup":case"linkViaRedirect":return bC;case"reauthViaPopup":case"reauthViaRedirect":return AC;default:gn(this.auth,"internal-error")}}resolve(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=new Ra(2e3,1e4);class fi extends wI{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const e=Od();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RC.get())};e()}}fi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="pendingRedirect",Vc=new Map;class PC extends wI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vc.get(this.auth._key());if(!e){try{const r=await CC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vc.set(this.auth._key(),e)}return this.bypassAuthState||Vc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CC(n,e){const t=kC(e),r=VC(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function DC(n,e){Vc.set(n._key(),e)}function VC(n){return Hn(n._redirectPersistence)}function kC(n){return Dc(SC,n.config.apiKey,n.name)}async function xC(n,e,t=!1){if(Tn(n.app))return Promise.reject(Yn(n));const r=zs(n),s=TC(r,e),o=await new PC(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=10*60*1e3;class OC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!AI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Rn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NC&&this.cachedEventUids.clear(),this.cachedEventUids.has(ag(e))}saveEventToCache(e){this.cachedEventUids.add(ag(e)),this.lastProcessedEventTime=Date.now()}}function ag(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function AI({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AI(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(n,e={}){return xn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UC=/^https?/;async function BC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await LC(n);for(const t of e)try{if(qC(t))return}catch{}gn(n,"unauthorized-domain")}function qC(n){const e=Ch(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!UC.test(t))return!1;if(FC.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const jC=new Ra(3e4,6e4);function cg(){const n=Sn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function GC(n){return new Promise((e,t)=>{var r,s,i;function o(){cg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cg(),t(Rn(n,"network-request-failed"))},timeout:jC.get()})}if(!((s=(r=Sn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Sn().gapi)===null||i===void 0)&&i.load)o();else{const a=x0("iframefcb");return Sn()[a]=()=>{gapi.load?o():t(Rn(n,"network-request-failed"))},cI(`${k0()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw kc=null,e})}let kc=null;function $C(n){return kc=kc||GC(n),kc}/**
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
 */const KC=new Ra(5e3,15e3),zC="__/auth/iframe",HC="emulator/auth/iframe",WC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JC(n){const e=n.config;le(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Dd(e,HC):`https://${n.config.authDomain}/${zC}`,r={apiKey:e.apiKey,appName:n.name,v:Ks},s=QC.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ba(r).slice(1)}`}async function YC(n){const e=await $C(n),t=Sn().gapi;return le(t,n,"internal-error"),e.open({where:document.body,url:JC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(n,"network-request-failed"),a=Sn().setTimeout(()=>{i(o)},KC.get());function c(){Sn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const XC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZC=500,eD=600,tD="_blank",nD="http://localhost";class ug{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rD(n,e,t,r=ZC,s=eD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},XC),{width:r.toString(),height:s.toString(),top:i,left:o}),l=lt().toLowerCase();t&&(a=tI(l)?tD:t),Zv(l)&&(e=e||nD,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[g,R])=>`${m}${g}=${R},`,"");if(w0(l)&&a!=="_self")return sD(e||"",a),new ug(null);const f=window.open(e||"",a,h);le(f,n,"popup-blocked");try{f.focus()}catch{}return new ug(f)}function sD(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const iD="__/auth/handler",oD="emulator/auth/handler",aD=encodeURIComponent("fac");async function lg(n,e,t,r,s,i){le(n.config.authDomain,n,"auth-domain-config-required"),le(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ks,eventId:s};if(e instanceof lI){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",zS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Pa){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),l=c?`#${aD}=${encodeURIComponent(c)}`:"";return`${cD(n)}?${ba(a).slice(1)}${l}`}function cD({config:n}){return n.emulator?Dd(n,oD):`https://${n.authDomain}/${iD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="webStorageSupport";class uD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yI,this._completeRedirectFn=xC,this._overrideRedirectResult=DC}async _openPopup(e,t,r,s){var i;rr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await lg(e,t,r,Ch(),s);return rD(e,o,Od())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await lg(e,t,r,Ch(),s);return dC(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(rr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await YC(e),r=new OC(e);return t.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zl,{type:Zl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Zl];o!==void 0&&t(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=BC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return oI()||eI()||kd()}}const lD=uD;var hg="@firebase/auth",dg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fD(n){Kr(new tr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aI(n)},l=new C0(r,s,i,c);return F0(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Kr(new tr("auth-internal",e=>{const t=zs(e.getProvider("auth").getImmediate());return(r=>new hD(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(hg,dg,dD(n)),sn(hg,dg,"esm2017")}/**
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
 */const pD=5*60,mD=Ov("authIdTokenMaxAge")||pD;let fg=null;const gD=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>mD)return;const s=t==null?void 0:t.token;fg!==s&&(fg=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _D(n=Ku()){const e=$s(n,"auth");if(e.isInitialized())return e.getImmediate();const t=L0(n,{popupRedirectResolver:lD,persistence:[EC,uC,yI]}),r=Ov("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=gD(i.toString());sC(t,o,()=>o(t.currentUser)),rC(t,a=>o(a))}}const s=xv("auth");return s&&U0(t,`http://${s}`),t}function yD(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}D0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Rn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",yD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fD("Browser");var vD="firebase",ID="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(vD,ID,"app");var pg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cs,bI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function v(){}v.prototype=y.prototype,w.D=y.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(T,S,A){for(var I=Array(arguments.length-2),De=2;De<arguments.length;De++)I[De-2]=arguments[De];return y.prototype[S].apply(T,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,v){v||(v=0);var T=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)T[S]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(S=0;16>S;++S)T[S]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=w.g[0],v=w.g[1],S=w.g[2];var A=w.g[3],I=y+(A^v&(S^A))+T[0]+3614090360&4294967295;y=v+(I<<7&4294967295|I>>>25),I=A+(S^y&(v^S))+T[1]+3905402710&4294967295,A=y+(I<<12&4294967295|I>>>20),I=S+(v^A&(y^v))+T[2]+606105819&4294967295,S=A+(I<<17&4294967295|I>>>15),I=v+(y^S&(A^y))+T[3]+3250441966&4294967295,v=S+(I<<22&4294967295|I>>>10),I=y+(A^v&(S^A))+T[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=A+(S^y&(v^S))+T[5]+1200080426&4294967295,A=y+(I<<12&4294967295|I>>>20),I=S+(v^A&(y^v))+T[6]+2821735955&4294967295,S=A+(I<<17&4294967295|I>>>15),I=v+(y^S&(A^y))+T[7]+4249261313&4294967295,v=S+(I<<22&4294967295|I>>>10),I=y+(A^v&(S^A))+T[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=A+(S^y&(v^S))+T[9]+2336552879&4294967295,A=y+(I<<12&4294967295|I>>>20),I=S+(v^A&(y^v))+T[10]+4294925233&4294967295,S=A+(I<<17&4294967295|I>>>15),I=v+(y^S&(A^y))+T[11]+2304563134&4294967295,v=S+(I<<22&4294967295|I>>>10),I=y+(A^v&(S^A))+T[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=A+(S^y&(v^S))+T[13]+4254626195&4294967295,A=y+(I<<12&4294967295|I>>>20),I=S+(v^A&(y^v))+T[14]+2792965006&4294967295,S=A+(I<<17&4294967295|I>>>15),I=v+(y^S&(A^y))+T[15]+1236535329&4294967295,v=S+(I<<22&4294967295|I>>>10),I=y+(S^A&(v^S))+T[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=A+(v^S&(y^v))+T[6]+3225465664&4294967295,A=y+(I<<9&4294967295|I>>>23),I=S+(y^v&(A^y))+T[11]+643717713&4294967295,S=A+(I<<14&4294967295|I>>>18),I=v+(A^y&(S^A))+T[0]+3921069994&4294967295,v=S+(I<<20&4294967295|I>>>12),I=y+(S^A&(v^S))+T[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=A+(v^S&(y^v))+T[10]+38016083&4294967295,A=y+(I<<9&4294967295|I>>>23),I=S+(y^v&(A^y))+T[15]+3634488961&4294967295,S=A+(I<<14&4294967295|I>>>18),I=v+(A^y&(S^A))+T[4]+3889429448&4294967295,v=S+(I<<20&4294967295|I>>>12),I=y+(S^A&(v^S))+T[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=A+(v^S&(y^v))+T[14]+3275163606&4294967295,A=y+(I<<9&4294967295|I>>>23),I=S+(y^v&(A^y))+T[3]+4107603335&4294967295,S=A+(I<<14&4294967295|I>>>18),I=v+(A^y&(S^A))+T[8]+1163531501&4294967295,v=S+(I<<20&4294967295|I>>>12),I=y+(S^A&(v^S))+T[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=A+(v^S&(y^v))+T[2]+4243563512&4294967295,A=y+(I<<9&4294967295|I>>>23),I=S+(y^v&(A^y))+T[7]+1735328473&4294967295,S=A+(I<<14&4294967295|I>>>18),I=v+(A^y&(S^A))+T[12]+2368359562&4294967295,v=S+(I<<20&4294967295|I>>>12),I=y+(v^S^A)+T[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=A+(y^v^S)+T[8]+2272392833&4294967295,A=y+(I<<11&4294967295|I>>>21),I=S+(A^y^v)+T[11]+1839030562&4294967295,S=A+(I<<16&4294967295|I>>>16),I=v+(S^A^y)+T[14]+4259657740&4294967295,v=S+(I<<23&4294967295|I>>>9),I=y+(v^S^A)+T[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=A+(y^v^S)+T[4]+1272893353&4294967295,A=y+(I<<11&4294967295|I>>>21),I=S+(A^y^v)+T[7]+4139469664&4294967295,S=A+(I<<16&4294967295|I>>>16),I=v+(S^A^y)+T[10]+3200236656&4294967295,v=S+(I<<23&4294967295|I>>>9),I=y+(v^S^A)+T[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=A+(y^v^S)+T[0]+3936430074&4294967295,A=y+(I<<11&4294967295|I>>>21),I=S+(A^y^v)+T[3]+3572445317&4294967295,S=A+(I<<16&4294967295|I>>>16),I=v+(S^A^y)+T[6]+76029189&4294967295,v=S+(I<<23&4294967295|I>>>9),I=y+(v^S^A)+T[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=A+(y^v^S)+T[12]+3873151461&4294967295,A=y+(I<<11&4294967295|I>>>21),I=S+(A^y^v)+T[15]+530742520&4294967295,S=A+(I<<16&4294967295|I>>>16),I=v+(S^A^y)+T[2]+3299628645&4294967295,v=S+(I<<23&4294967295|I>>>9),I=y+(S^(v|~A))+T[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=A+(v^(y|~S))+T[7]+1126891415&4294967295,A=y+(I<<10&4294967295|I>>>22),I=S+(y^(A|~v))+T[14]+2878612391&4294967295,S=A+(I<<15&4294967295|I>>>17),I=v+(A^(S|~y))+T[5]+4237533241&4294967295,v=S+(I<<21&4294967295|I>>>11),I=y+(S^(v|~A))+T[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=A+(v^(y|~S))+T[3]+2399980690&4294967295,A=y+(I<<10&4294967295|I>>>22),I=S+(y^(A|~v))+T[10]+4293915773&4294967295,S=A+(I<<15&4294967295|I>>>17),I=v+(A^(S|~y))+T[1]+2240044497&4294967295,v=S+(I<<21&4294967295|I>>>11),I=y+(S^(v|~A))+T[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=A+(v^(y|~S))+T[15]+4264355552&4294967295,A=y+(I<<10&4294967295|I>>>22),I=S+(y^(A|~v))+T[6]+2734768916&4294967295,S=A+(I<<15&4294967295|I>>>17),I=v+(A^(S|~y))+T[13]+1309151649&4294967295,v=S+(I<<21&4294967295|I>>>11),I=y+(S^(v|~A))+T[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=A+(v^(y|~S))+T[11]+3174756917&4294967295,A=y+(I<<10&4294967295|I>>>22),I=S+(y^(A|~v))+T[2]+718787259&4294967295,S=A+(I<<15&4294967295|I>>>17),I=v+(A^(S|~y))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(S+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+S&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var v=y-this.blockSize,T=this.B,S=this.h,A=0;A<y;){if(S==0)for(;A<=v;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<y;)if(T[S++]=w.charCodeAt(A++),S==this.blockSize){s(this,T),S=0;break}}else for(;A<y;)if(T[S++]=w[A++],S==this.blockSize){s(this,T),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var v=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=v&255,v/=256;for(this.u(w),w=Array(16),y=v=0;4>y;++y)for(var T=0;32>T;T+=8)w[v++]=this.g[y]>>>T&255;return w};function i(w,y){var v=a;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=y(w)}function o(w,y){this.h=y;for(var v=[],T=!0,S=w.length-1;0<=S;S--){var A=w[S]|0;T&&A==y||(v[S]=A,T=!1)}this.g=v}var a={};function c(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function l(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return C(l(-w));for(var y=[],v=1,T=0;w>=v;T++)y[T]=w/v|0,v*=4294967296;return new o(y,0)}function h(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return C(h(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=l(Math.pow(y,8)),T=f,S=0;S<w.length;S+=8){var A=Math.min(8,w.length-S),I=parseInt(w.substring(S,S+A),y);8>A?(A=l(Math.pow(y,A)),T=T.j(A).add(l(I))):(T=T.j(v),T=T.add(l(I)))}return T}var f=c(0),m=c(1),g=c(16777216);n=o.prototype,n.m=function(){if(P(this))return-C(this).m();for(var w=0,y=1,v=0;v<this.g.length;v++){var T=this.i(v);w+=(0<=T?T:4294967296+T)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(P(this))return"-"+C(this).toString(w);for(var y=l(Math.pow(w,6)),v=this,T="";;){var S=x(v,y).g;v=L(v,S.j(y));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=S,R(v))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function P(w){return w.h==-1}n.l=function(w){return w=L(this,w),P(w)?-1:R(w)?0:1};function C(w){for(var y=w.g.length,v=[],T=0;T<y;T++)v[T]=~w.g[T];return new o(v,~w.h).add(m)}n.abs=function(){return P(this)?C(this):this},n.add=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0,S=0;S<=y;S++){var A=T+(this.i(S)&65535)+(w.i(S)&65535),I=(A>>>16)+(this.i(S)>>>16)+(w.i(S)>>>16);T=I>>>16,A&=65535,I&=65535,v[S]=I<<16|A}return new o(v,v[v.length-1]&-2147483648?-1:0)};function L(w,y){return w.add(C(y))}n.j=function(w){if(R(this)||R(w))return f;if(P(this))return P(w)?C(this).j(C(w)):C(C(this).j(w));if(P(w))return C(this.j(C(w)));if(0>this.l(g)&&0>w.l(g))return l(this.m()*w.m());for(var y=this.g.length+w.g.length,v=[],T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var S=0;S<w.g.length;S++){var A=this.i(T)>>>16,I=this.i(T)&65535,De=w.i(S)>>>16,rt=w.i(S)&65535;v[2*T+2*S]+=I*rt,N(v,2*T+2*S),v[2*T+2*S+1]+=A*rt,N(v,2*T+2*S+1),v[2*T+2*S+1]+=I*De,N(v,2*T+2*S+1),v[2*T+2*S+2]+=A*De,N(v,2*T+2*S+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new o(v,0)};function N(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function O(w,y){this.g=w,this.h=y}function x(w,y){if(R(y))throw Error("division by zero");if(R(w))return new O(f,f);if(P(w))return y=x(C(w),y),new O(C(y.g),C(y.h));if(P(y))return y=x(w,C(y)),new O(C(y.g),y.h);if(30<w.g.length){if(P(w)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,T=y;0>=T.l(w);)v=z(v),T=z(T);var S=H(v,1),A=H(T,1);for(T=H(T,2),v=H(v,2);!R(T);){var I=A.add(T);0>=I.l(w)&&(S=S.add(v),A=I),T=H(T,1),v=H(v,1)}return y=L(w,S.j(y)),new O(S,y)}for(S=f;0<=w.l(y);){for(v=Math.max(1,Math.floor(w.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=l(v),I=A.j(y);P(I)||0<I.l(w);)v-=T,A=l(v),I=A.j(y);R(A)&&(A=m),S=S.add(A),w=L(w,I)}return new O(S,w)}n.A=function(w){return x(this,w).h},n.and=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)&w.i(T);return new o(v,this.h&w.h)},n.or=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)|w.i(T);return new o(v,this.h|w.h)},n.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)^w.i(T);return new o(v,this.h^w.h)};function z(w){for(var y=w.g.length+1,v=[],T=0;T<y;T++)v[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(v,w.h)}function H(w,y){var v=y>>5;y%=32;for(var T=w.g.length-v,S=[],A=0;A<T;A++)S[A]=0<y?w.i(A+v)>>>y|w.i(A+v+1)<<32-y:w.i(A+v);return new o(S,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=h,Cs=o}).apply(typeof pg<"u"?pg:typeof self<"u"?self:typeof window<"u"?window:{});var pc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var RI,ko,SI,xc,xh,PI,CI,DI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,p){return u==Array.prototype||u==Object.prototype||(u[d]=p.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof pc=="object"&&pc];for(var d=0;d<u.length;++d){var p=u[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function s(u,d){if(d)e:{var p=r;u=u.split(".");for(var _=0;_<u.length-1;_++){var k=u[_];if(!(k in p))break e;p=p[k]}u=u[u.length-1],_=p[u],d=d(_),d!=_&&d!=null&&e(p,u,{configurable:!0,writable:!0,value:d})}}function i(u,d){u instanceof String&&(u+="");var p=0,_=!1,k={next:function(){if(!_&&p<u.length){var F=p++;return{value:d(F,u[F]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(u){return u||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function l(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,p){return u.call.apply(u.bind,arguments)}function f(u,d,p){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),u.apply(d,k)}}return function(){return u.apply(d,arguments)}}function m(u,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function g(u,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function R(u,d){function p(){}p.prototype=d.prototype,u.aa=d.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(_,k,F){for(var Y=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)Y[Fe-2]=arguments[Fe];return d.prototype[k].apply(_,Y)}}function P(u){const d=u.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=u[_];return p}return[]}function C(u,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const k=u.length||0,F=_.length||0;u.length=k+F;for(let Y=0;Y<F;Y++)u[k+Y]=_[Y]}else u.push(_)}}class L{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function N(u){return/^[\s\xa0]*$/.test(u)}function O(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function x(u){return x[" "](u),u}x[" "]=function(){};var z=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function H(u,d,p){for(const _ in u)d.call(p,u[_],_,u)}function w(u,d){for(const p in u)d.call(void 0,u[p],p,u)}function y(u){const d={};for(const p in u)d[p]=u[p];return d}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(u,d){let p,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(p in _)u[p]=_[p];for(let F=0;F<v.length;F++)p=v[F],Object.prototype.hasOwnProperty.call(_,p)&&(u[p]=_[p])}}function S(u){var d=1;u=u.split(":");const p=[];for(;0<d&&u.length;)p.push(u.shift()),d--;return u.length&&p.push(u.join(":")),p}function A(u){a.setTimeout(()=>{throw u},0)}function I(){var u=Kt;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class De{constructor(){this.h=this.g=null}add(d,p){const _=rt.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var rt=new L(()=>new xe,u=>u.reset());class xe{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,Ie=!1,Kt=new De,an=()=>{const u=a.Promise.resolve(void 0);fe=()=>{u.then(Xt)}};var Xt=()=>{for(var u;u=I();){try{u.h.call(u.g)}catch(p){A(p)}var d=rt;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}Ie=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Je(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}Je.prototype.h=function(){this.defaultPrevented=!0};var dr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return u}();function zt(u,d){if(Je.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(z){e:{try{x(d.nodeName);var k=!0;break e}catch{}k=!1}k||(d=null)}}else p=="mouseover"?d=u.fromElement:p=="mouseout"&&(d=u.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:qt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&zt.aa.h.call(this)}}R(zt,Je);var qt={2:"touch",3:"pen",4:"mouse"};zt.prototype.h=function(){zt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),re=0;function ee(u,d,p,_,k){this.listener=u,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=k,this.key=++re,this.da=this.fa=!1}function oe(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ye(u){this.src=u,this.g={},this.h=0}ye.prototype.add=function(u,d,p,_,k){var F=u.toString();u=this.g[F],u||(u=this.g[F]=[],this.h++);var Y=b(u,d,_,k);return-1<Y?(d=u[Y],p||(d.fa=!1)):(d=new ee(d,this.src,F,!!_,k),d.fa=p,u.push(d)),d};function E(u,d){var p=d.type;if(p in u.g){var _=u.g[p],k=Array.prototype.indexOf.call(_,d,void 0),F;(F=0<=k)&&Array.prototype.splice.call(_,k,1),F&&(oe(d),u.g[p].length==0&&(delete u.g[p],u.h--))}}function b(u,d,p,_){for(var k=0;k<u.length;++k){var F=u[k];if(!F.da&&F.listener==d&&F.capture==!!p&&F.ha==_)return k}return-1}var D="closure_lm_"+(1e6*Math.random()|0),U={};function j(u,d,p,_,k){if(Array.isArray(d)){for(var F=0;F<d.length;F++)j(u,d[F],p,_,k);return null}return p=de(p),u&&u[B]?u.K(d,p,l(_)?!!_.capture:!1,k):q(u,d,p,!1,_,k)}function q(u,d,p,_,k,F){if(!d)throw Error("Invalid event type");var Y=l(k)?!!k.capture:!!k,Fe=te(u);if(Fe||(u[D]=Fe=new ye(u)),p=Fe.add(d,p,_,Y,F),p.proxy)return p;if(_=Z(),p.proxy=_,_.src=u,_.listener=p,u.addEventListener)dr||(k=Y),k===void 0&&(k=!1),u.addEventListener(d.toString(),_,k);else if(u.attachEvent)u.attachEvent(K(d.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Z(){function u(p){return d.call(u.src,u.listener,p)}const d=ue;return u}function J(u,d,p,_,k){if(Array.isArray(d))for(var F=0;F<d.length;F++)J(u,d[F],p,_,k);else _=l(_)?!!_.capture:!!_,p=de(p),u&&u[B]?(u=u.i,d=String(d).toString(),d in u.g&&(F=u.g[d],p=b(F,p,_,k),-1<p&&(oe(F[p]),Array.prototype.splice.call(F,p,1),F.length==0&&(delete u.g[d],u.h--)))):u&&(u=te(u))&&(d=u.g[d.toString()],u=-1,d&&(u=b(d,p,_,k)),(p=-1<u?d[u]:null)&&W(p))}function W(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[B])E(d.i,u);else{var p=u.type,_=u.proxy;d.removeEventListener?d.removeEventListener(p,_,u.capture):d.detachEvent?d.detachEvent(K(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=te(d))?(E(p,u),p.h==0&&(p.src=null,d[D]=null)):oe(u)}}}function K(u){return u in U?U[u]:U[u]="on"+u}function ue(u,d){if(u.da)u=!0;else{d=new zt(d,this);var p=u.listener,_=u.ha||u.src;u.fa&&W(u),u=p.call(_,d)}return u}function te(u){return u=u[D],u instanceof ye?u:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function de(u){return typeof u=="function"?u:(u[ae]||(u[ae]=function(d){return u.handleEvent(d)}),u[ae])}function he(){Qe.call(this),this.i=new ye(this),this.M=this,this.F=null}R(he,Qe),he.prototype[B]=!0,he.prototype.removeEventListener=function(u,d,p,_){J(this,u,d,p,_)};function ge(u,d){var p,_=u.F;if(_)for(p=[];_;_=_.F)p.push(_);if(u=u.M,_=d.type||d,typeof d=="string")d=new Je(d,u);else if(d instanceof Je)d.target=d.target||u;else{var k=d;d=new Je(_,u),T(d,k)}if(k=!0,p)for(var F=p.length-1;0<=F;F--){var Y=d.g=p[F];k=Ae(Y,_,!0,d)&&k}if(Y=d.g=u,k=Ae(Y,_,!0,d)&&k,k=Ae(Y,_,!1,d)&&k,p)for(F=0;F<p.length;F++)Y=d.g=p[F],k=Ae(Y,_,!1,d)&&k}he.prototype.N=function(){if(he.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var p=u.g[d],_=0;_<p.length;_++)oe(p[_]);delete u.g[d],u.h--}}this.F=null},he.prototype.K=function(u,d,p,_){return this.i.add(String(u),d,!1,p,_)},he.prototype.L=function(u,d,p,_){return this.i.add(String(u),d,!0,p,_)};function Ae(u,d,p,_){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var k=!0,F=0;F<d.length;++F){var Y=d[F];if(Y&&!Y.da&&Y.capture==p){var Fe=Y.listener,vt=Y.ha||Y.src;Y.fa&&E(u.i,Y),k=Fe.call(vt,_)!==!1&&k}}return k&&!_.defaultPrevented}function gt(u,d,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function _t(u){u.g=gt(()=>{u.g=null,u.i&&(u.i=!1,_t(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class Zt extends Qe{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:_t(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bt(u){Qe.call(this),this.h=u,this.g={}}R(bt,Qe);var fr=[];function oo(u){H(u.g,function(d,p){this.g.hasOwnProperty(p)&&W(d)},u),u.g={}}bt.prototype.N=function(){bt.aa.N.call(this),oo(this)},bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yt=a.JSON.stringify,en=a.JSON.parse,Ka=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Js(){}Js.prototype.h=null;function Bf(u){return u.h||(u.h=u.i())}function qf(){}var ao={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _l(){Je.call(this,"d")}R(_l,Je);function yl(){Je.call(this,"c")}R(yl,Je);var us={},jf=null;function za(){return jf=jf||new he}us.La="serverreachability";function Gf(u){Je.call(this,us.La,u)}R(Gf,Je);function co(u){const d=za();ge(d,new Gf(d))}us.STAT_EVENT="statevent";function $f(u,d){Je.call(this,us.STAT_EVENT,u),this.stat=d}R($f,Je);function Mt(u){const d=za();ge(d,new $f(d,u))}us.Ma="timingevent";function Kf(u,d){Je.call(this,us.Ma,u),this.size=d}R(Kf,Je);function uo(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function lo(){this.g=!0}lo.prototype.xa=function(){this.g=!1};function aw(u,d,p,_,k,F){u.info(function(){if(u.g)if(F)for(var Y="",Fe=F.split("&"),vt=0;vt<Fe.length;vt++){var Pe=Fe[vt].split("=");if(1<Pe.length){var Rt=Pe[0];Pe=Pe[1];var St=Rt.split("_");Y=2<=St.length&&St[1]=="type"?Y+(Rt+"="+Pe+"&"):Y+(Rt+"=redacted&")}}else Y=null;else Y=F;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+d+`
`+p+`
`+Y})}function cw(u,d,p,_,k,F,Y){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+d+`
`+p+`
`+F+" "+Y})}function Ys(u,d,p,_){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+lw(u,p)+(_?" "+_:"")})}function uw(u,d){u.info(function(){return"TIMEOUT: "+d})}lo.prototype.info=function(){};function lw(u,d){if(!u.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var _=p[u];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var F=k[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Y=1;Y<k.length;Y++)k[Y]=""}}}}return yt(p)}catch{return d}}var Ha={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vl;function Wa(){}R(Wa,Js),Wa.prototype.g=function(){return new XMLHttpRequest},Wa.prototype.i=function(){return{}},vl=new Wa;function pr(u,d,p,_){this.j=u,this.i=d,this.l=p,this.R=_||1,this.U=new bt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hf}function Hf(){this.i=null,this.g="",this.h=!1}var Wf={},Il={};function El(u,d,p){u.L=1,u.v=Xa(On(d)),u.m=p,u.P=!0,Qf(u,null)}function Qf(u,d){u.F=Date.now(),Qa(u),u.A=On(u.v);var p=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),up(p.i,"t",_),u.C=0,p=u.j.J,u.h=new Hf,u.g=Sp(u.j,p?d:null,!u.m),0<u.O&&(u.M=new Zt(m(u.Y,u,u.g),u.O)),d=u.U,p=u.g,_=u.ca;var k="readystatechange";Array.isArray(k)||(k&&(fr[0]=k.toString()),k=fr);for(var F=0;F<k.length;F++){var Y=j(p,k[F],_||d.handleEvent,!1,d.h||d);if(!Y)break;d.g[Y.key]=Y}d=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),co(),aw(u.i,u.u,u.A,u.l,u.R,u.m)}pr.prototype.ca=function(u){u=u.target;const d=this.M;d&&Mn(u)==3?d.j():this.Y(u)},pr.prototype.Y=function(u){try{if(u==this.g)e:{const St=Mn(this.g);var d=this.g.Ba();const ei=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||gp(this.g)))){this.J||St!=4||d==7||(d==8||0>=ei?co(3):co(2)),Tl(this);var p=this.g.Z();this.X=p;t:if(Jf(this)){var _=gp(this.g);u="";var k=_.length,F=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ls(this),ho(this);var Y="";break t}this.h.i=new a.TextDecoder}for(d=0;d<k;d++)this.h.h=!0,u+=this.h.i.decode(_[d],{stream:!(F&&d==k-1)});_.length=0,this.h.g+=u,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=p==200,cw(this.i,this.u,this.A,this.l,this.R,St,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,vt=this.g;if((Fe=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(Fe)){var Pe=Fe;break t}}Pe=null}if(p=Pe)Ys(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wl(this,p);else{this.o=!1,this.s=3,Mt(12),ls(this),ho(this);break e}}if(this.P){p=!0;let cn;for(;!this.J&&this.C<Y.length;)if(cn=hw(this,Y),cn==Il){St==4&&(this.s=4,Mt(14),p=!1),Ys(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==Wf){this.s=4,Mt(15),Ys(this.i,this.l,Y,"[Invalid Chunk]"),p=!1;break}else Ys(this.i,this.l,cn,null),wl(this,cn);if(Jf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||Y.length!=0||this.h.h||(this.s=1,Mt(16),p=!1),this.o=this.o&&p,!p)Ys(this.i,this.l,Y,"[Invalid Chunked Response]"),ls(this),ho(this);else if(0<Y.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),Cl(Rt),Rt.M=!0,Mt(11))}}else Ys(this.i,this.l,Y,null),wl(this,Y);St==4&&ls(this),this.o&&!this.J&&(St==4?wp(this.j,this):(this.o=!1,Qa(this)))}else Pw(this.g),p==400&&0<Y.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),ls(this),ho(this)}}}catch{}finally{}};function Jf(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function hw(u,d){var p=u.C,_=d.indexOf(`
`,p);return _==-1?Il:(p=Number(d.substring(p,_)),isNaN(p)?Wf:(_+=1,_+p>d.length?Il:(d=d.slice(_,_+p),u.C=_+p,d)))}pr.prototype.cancel=function(){this.J=!0,ls(this)};function Qa(u){u.S=Date.now()+u.I,Yf(u,u.I)}function Yf(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=uo(m(u.ba,u),d)}function Tl(u){u.B&&(a.clearTimeout(u.B),u.B=null)}pr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(uw(this.i,this.A),this.L!=2&&(co(),Mt(17)),ls(this),this.s=2,ho(this)):Yf(this,this.S-u)};function ho(u){u.j.G==0||u.J||wp(u.j,u)}function ls(u){Tl(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,oo(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function wl(u,d){try{var p=u.j;if(p.G!=0&&(p.g==u||Al(p.h,u))){if(!u.K&&Al(p.h,u)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)sc(p),nc(p);else break e;Pl(p),Mt(18)}}else p.za=k[1],0<p.za-p.T&&37500>k[2]&&p.F&&p.v==0&&!p.C&&(p.C=uo(m(p.Za,p),6e3));if(1>=ep(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ds(p,11)}else if((u.K||p.g==u)&&sc(p),!N(d))for(k=p.Da.g.parse(d),d=0;d<k.length;d++){let Pe=k[d];if(p.T=Pe[0],Pe=Pe[1],p.G==2)if(Pe[0]=="c"){p.K=Pe[1],p.ia=Pe[2];const Rt=Pe[3];Rt!=null&&(p.la=Rt,p.j.info("VER="+p.la));const St=Pe[4];St!=null&&(p.Aa=St,p.j.info("SVER="+p.Aa));const ei=Pe[5];ei!=null&&typeof ei=="number"&&0<ei&&(_=1.5*ei,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const cn=u.g;if(cn){const oc=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oc){var F=_.h;F.g||oc.indexOf("spdy")==-1&&oc.indexOf("quic")==-1&&oc.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(bl(F,F.h),F.h=null))}if(_.D){const Dl=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(_.ya=Dl,je(_.I,_.D,Dl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var Y=u;if(_.qa=Rp(_,_.J?_.ia:null,_.W),Y.K){tp(_.h,Y);var Fe=Y,vt=_.L;vt&&(Fe.I=vt),Fe.B&&(Tl(Fe),Qa(Fe)),_.g=Y}else Ep(_);0<p.i.length&&rc(p)}else Pe[0]!="stop"&&Pe[0]!="close"||ds(p,7);else p.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?ds(p,7):Sl(p):Pe[0]!="noop"&&p.l&&p.l.ta(Pe),p.v=0)}}co(4)}catch{}}var dw=class{constructor(u,d){this.g=u,this.map=d}};function Xf(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zf(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function ep(u){return u.h?1:u.g?u.g.size:0}function Al(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function bl(u,d){u.g?u.g.add(d):u.h=d}function tp(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}Xf.prototype.cancel=function(){if(this.i=np(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function np(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const p of u.g.values())d=d.concat(p.D);return d}return P(u.i)}function fw(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var d=[],p=u.length,_=0;_<p;_++)d.push(u[_]);return d}d=[],p=0;for(_ in u)d[p++]=u[_];return d}function pw(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var d=[];u=u.length;for(var p=0;p<u;p++)d.push(p);return d}d=[],p=0;for(const _ in u)d[p++]=_;return d}}}function rp(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var p=pw(u),_=fw(u),k=_.length,F=0;F<k;F++)d.call(void 0,_[F],p&&p[F],u)}var sp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mw(u,d){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var _=u[p].indexOf("="),k=null;if(0<=_){var F=u[p].substring(0,_);k=u[p].substring(_+1)}else F=u[p];d(F,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function hs(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof hs){this.h=u.h,Ja(this,u.j),this.o=u.o,this.g=u.g,Ya(this,u.s),this.l=u.l;var d=u.i,p=new mo;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),ip(this,p),this.m=u.m}else u&&(d=String(u).match(sp))?(this.h=!1,Ja(this,d[1]||"",!0),this.o=fo(d[2]||""),this.g=fo(d[3]||"",!0),Ya(this,d[4]),this.l=fo(d[5]||"",!0),ip(this,d[6]||"",!0),this.m=fo(d[7]||"")):(this.h=!1,this.i=new mo(null,this.h))}hs.prototype.toString=function(){var u=[],d=this.j;d&&u.push(po(d,op,!0),":");var p=this.g;return(p||d=="file")&&(u.push("//"),(d=this.o)&&u.push(po(d,op,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(po(p,p.charAt(0)=="/"?yw:_w,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",po(p,Iw)),u.join("")};function On(u){return new hs(u)}function Ja(u,d,p){u.j=p?fo(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Ya(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function ip(u,d,p){d instanceof mo?(u.i=d,Ew(u.i,u.h)):(p||(d=po(d,vw)),u.i=new mo(d,u.h))}function je(u,d,p){u.i.set(d,p)}function Xa(u){return je(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function fo(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function po(u,d,p){return typeof u=="string"?(u=encodeURI(u).replace(d,gw),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function gw(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var op=/[#\/\?@]/g,_w=/[#\?:]/g,yw=/[#\?]/g,vw=/[#\?@]/g,Iw=/#/g;function mo(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function mr(u){u.g||(u.g=new Map,u.h=0,u.i&&mw(u.i,function(d,p){u.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=mo.prototype,n.add=function(u,d){mr(this),this.i=null,u=Xs(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(d),this.h+=1,this};function ap(u,d){mr(u),d=Xs(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function cp(u,d){return mr(u),d=Xs(u,d),u.g.has(d)}n.forEach=function(u,d){mr(this),this.g.forEach(function(p,_){p.forEach(function(k){u.call(d,k,_,this)},this)},this)},n.na=function(){mr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const k=u[_];for(let F=0;F<k.length;F++)p.push(d[_])}return p},n.V=function(u){mr(this);let d=[];if(typeof u=="string")cp(this,u)&&(d=d.concat(this.g.get(Xs(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)d=d.concat(u[p])}return d},n.set=function(u,d){return mr(this),this.i=null,u=Xs(this,u),cp(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},n.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function up(u,d,p){ap(u,d),0<p.length&&(u.i=null,u.g.set(Xs(u,d),P(p)),u.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const F=encodeURIComponent(String(_)),Y=this.V(_);for(_=0;_<Y.length;_++){var k=F;Y[_]!==""&&(k+="="+encodeURIComponent(String(Y[_]))),u.push(k)}}return this.i=u.join("&")};function Xs(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function Ew(u,d){d&&!u.j&&(mr(u),u.i=null,u.g.forEach(function(p,_){var k=_.toLowerCase();_!=k&&(ap(this,_),up(this,k,p))},u)),u.j=d}function Tw(u,d){const p=new lo;if(a.Image){const _=new Image;_.onload=g(gr,p,"TestLoadImage: loaded",!0,d,_),_.onerror=g(gr,p,"TestLoadImage: error",!1,d,_),_.onabort=g(gr,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=g(gr,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else d(!1)}function ww(u,d){const p=new lo,_=new AbortController,k=setTimeout(()=>{_.abort(),gr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:_.signal}).then(F=>{clearTimeout(k),F.ok?gr(p,"TestPingServer: ok",!0,d):gr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),gr(p,"TestPingServer: error",!1,d)})}function gr(u,d,p,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(p)}catch{}}function Aw(){this.g=new Ka}function bw(u,d,p){const _=p||"";try{rp(u,function(k,F){let Y=k;l(k)&&(Y=yt(k)),d.push(_+F+"="+encodeURIComponent(Y))})}catch(k){throw d.push(_+"type="+encodeURIComponent("_badmap")),k}}function Za(u){this.l=u.Ub||null,this.j=u.eb||!1}R(Za,Js),Za.prototype.g=function(){return new ec(this.l,this.j)},Za.prototype.i=function(u){return function(){return u}}({});function ec(u,d){he.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ec,he),n=ec.prototype,n.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,_o(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,go(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,_o(this)),this.g&&(this.readyState=3,_o(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lp(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function lp(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?go(this):_o(this),this.readyState==3&&lp(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,go(this))},n.Qa=function(u){this.g&&(this.response=u,go(this))},n.ga=function(){this.g&&go(this)};function go(u){u.readyState=4,u.l=null,u.j=null,u.v=null,_o(u)}n.setRequestHeader=function(u,d){this.u.append(u,d)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=d.next();return u.join(`\r
`)};function _o(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ec.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function hp(u){let d="";return H(u,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function Rl(u,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=hp(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):je(u,d,p))}function Ze(u){he.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ze,he);var Rw=/^https?$/i,Sw=["POST","PUT"];n=Ze.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vl.g(),this.v=this.o?Bf(this.o):Bf(vl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(F){dp(this,F);return}if(u=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)p.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const F of _.keys())p.set(F,_.get(F));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(F=>F.toLowerCase()=="content-type"),k=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Sw,d,void 0))||_||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Y]of p)this.g.setRequestHeader(F,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mp(this),this.u=!0,this.g.send(u),this.u=!1}catch(F){dp(this,F)}};function dp(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,fp(u),tc(u)}function fp(u){u.A||(u.A=!0,ge(u,"complete"),ge(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ge(this,"complete"),ge(this,"abort"),tc(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tc(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?pp(this):this.bb())},n.bb=function(){pp(this)};function pp(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Mn(u)!=4||u.Z()!=2)){if(u.u&&Mn(u)==4)gt(u.Ea,0,u);else if(ge(u,"readystatechange"),Mn(u)==4){u.h=!1;try{const Y=u.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=Y===0){var k=String(u.D).match(sp)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),_=!Rw.test(k?k.toLowerCase():"")}p=_}if(p)ge(u,"complete"),ge(u,"success");else{u.m=6;try{var F=2<Mn(u)?u.g.statusText:""}catch{F=""}u.l=F+" ["+u.Z()+"]",fp(u)}}finally{tc(u)}}}}function tc(u,d){if(u.g){mp(u);const p=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||ge(u,"ready");try{p.onreadystatechange=_}catch{}}}function mp(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Mn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),en(d)}};function gp(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Pw(u){const d={};u=(u.g&&2<=Mn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(N(u[_]))continue;var p=S(u[_]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const F=d[k]||[];d[k]=F,F.push(p)}w(d,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yo(u,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||d}function _p(u){this.Aa=0,this.i=[],this.j=new lo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yo("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yo("baseRetryDelayMs",5e3,u),this.cb=yo("retryDelaySeedMs",1e4,u),this.Wa=yo("forwardChannelMaxRetries",2,u),this.wa=yo("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Xf(u&&u.concurrentRequestLimit),this.Da=new Aw,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_p.prototype,n.la=8,n.G=1,n.connect=function(u,d,p,_){Mt(0),this.W=u,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Rp(this,null,this.W),rc(this)};function Sl(u){if(yp(u),u.G==3){var d=u.U++,p=On(u.I);if(je(p,"SID",u.K),je(p,"RID",d),je(p,"TYPE","terminate"),vo(u,p),d=new pr(u,u.j,d),d.L=2,d.v=Xa(On(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=Sp(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Qa(d)}bp(u)}function nc(u){u.g&&(Cl(u),u.g.cancel(),u.g=null)}function yp(u){nc(u),u.u&&(a.clearTimeout(u.u),u.u=null),sc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function rc(u){if(!Zf(u.h)&&!u.s){u.s=!0;var d=u.Ga;fe||an(),Ie||(fe(),Ie=!0),Kt.add(d,u),u.B=0}}function Cw(u,d){return ep(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=uo(m(u.Ga,u,d),Ap(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const k=new pr(this,this.j,u);let F=this.o;if(this.S&&(F?(F=y(F),T(F,this.S)):F=this.S),this.m!==null||this.O||(k.H=F,F=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Ip(this,k,d),p=On(this.I),je(p,"RID",u),je(p,"CVER",22),this.D&&je(p,"X-HTTP-Session-Id",this.D),vo(this,p),F&&(this.O?d="headers="+encodeURIComponent(String(hp(F)))+"&"+d:this.m&&Rl(p,this.m,F)),bl(this.h,k),this.Ua&&je(p,"TYPE","init"),this.P?(je(p,"$req",d),je(p,"SID","null"),k.T=!0,El(k,p,null)):El(k,p,d),this.G=2}}else this.G==3&&(u?vp(this,u):this.i.length==0||Zf(this.h)||vp(this))};function vp(u,d){var p;d?p=d.l:p=u.U++;const _=On(u.I);je(_,"SID",u.K),je(_,"RID",p),je(_,"AID",u.T),vo(u,_),u.m&&u.o&&Rl(_,u.m,u.o),p=new pr(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),d&&(u.i=d.D.concat(u.i)),d=Ip(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),bl(u.h,p),El(p,_,d)}function vo(u,d){u.H&&H(u.H,function(p,_){je(d,_,p)}),u.l&&rp({},function(p,_){je(d,_,p)})}function Ip(u,d,p){p=Math.min(u.i.length,p);var _=u.l?m(u.l.Na,u.l,u):null;e:{var k=u.i;let F=-1;for(;;){const Y=["count="+p];F==-1?0<p?(F=k[0].g,Y.push("ofs="+F)):F=0:Y.push("ofs="+F);let Fe=!0;for(let vt=0;vt<p;vt++){let Pe=k[vt].g;const Rt=k[vt].map;if(Pe-=F,0>Pe)F=Math.max(0,k[vt].g-100),Fe=!1;else try{bw(Rt,Y,"req"+Pe+"_")}catch{_&&_(Rt)}}if(Fe){_=Y.join("&");break e}}}return u=u.i.splice(0,p),d.D=u,_}function Ep(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;fe||an(),Ie||(fe(),Ie=!0),Kt.add(d,u),u.v=0}}function Pl(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=uo(m(u.Fa,u),Ap(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Tp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=uo(m(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),nc(this),Tp(this))};function Cl(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Tp(u){u.g=new pr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=On(u.qa);je(d,"RID","rpc"),je(d,"SID",u.K),je(d,"AID",u.T),je(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&je(d,"TO",u.ja),je(d,"TYPE","xmlhttp"),vo(u,d),u.m&&u.o&&Rl(d,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=Xa(On(d)),p.m=null,p.P=!0,Qf(p,u)}n.Za=function(){this.C!=null&&(this.C=null,nc(this),Pl(this),Mt(19))};function sc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function wp(u,d){var p=null;if(u.g==d){sc(u),Cl(u),u.g=null;var _=2}else if(Al(u.h,d))p=d.D,tp(u.h,d),_=1;else return;if(u.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var k=u.B;_=za(),ge(_,new Kf(_,p)),rc(u)}else Ep(u);else if(k=d.s,k==3||k==0&&0<d.X||!(_==1&&Cw(u,d)||_==2&&Pl(u)))switch(p&&0<p.length&&(d=u.h,d.i=d.i.concat(p)),k){case 1:ds(u,5);break;case 4:ds(u,10);break;case 3:ds(u,6);break;default:ds(u,2)}}}function Ap(u,d){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*d}function ds(u,d){if(u.j.info("Error code "+d),d==2){var p=m(u.fb,u),_=u.Xa;const k=!_;_=new hs(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ja(_,"https"),Xa(_),k?Tw(_.toString(),p):ww(_.toString(),p)}else Mt(2);u.G=0,u.l&&u.l.sa(d),bp(u),yp(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function bp(u){if(u.G=0,u.ka=[],u.l){const d=np(u.h);(d.length!=0||u.i.length!=0)&&(C(u.ka,d),C(u.ka,u.i),u.h.i.length=0,P(u.i),u.i.length=0),u.l.ra()}}function Rp(u,d,p){var _=p instanceof hs?On(p):new hs(p);if(_.g!="")d&&(_.g=d+"."+_.g),Ya(_,_.s);else{var k=a.location;_=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;var F=new hs(null);_&&Ja(F,_),d&&(F.g=d),k&&Ya(F,k),p&&(F.l=p),_=F}return p=u.D,d=u.ya,p&&d&&je(_,p,d),je(_,"VER",u.la),vo(u,_),_}function Sp(u,d,p){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Ze(new Za({eb:p})):new Ze(u.pa),d.Ha(u.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pp(){}n=Pp.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ic(){}ic.prototype.g=function(u,d){return new Ht(u,d)};function Ht(u,d){he.call(this),this.g=new _p(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!N(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!N(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new Zs(this)}R(Ht,he),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Sl(this.g)},Ht.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=yt(u),u=p);d.i.push(new dw(d.Ya++,u)),d.G==3&&rc(d)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Sl(this.g),delete this.g,Ht.aa.N.call(this)};function Cp(u){_l.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const p in d){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}R(Cp,_l);function Dp(){yl.call(this),this.status=1}R(Dp,yl);function Zs(u){this.g=u}R(Zs,Pp),Zs.prototype.ua=function(){ge(this.g,"a")},Zs.prototype.ta=function(u){ge(this.g,new Cp(u))},Zs.prototype.sa=function(u){ge(this.g,new Dp)},Zs.prototype.ra=function(){ge(this.g,"b")},ic.prototype.createWebChannel=ic.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,DI=function(){return new ic},CI=function(){return za()},PI=us,xh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ha.NO_ERROR=0,Ha.TIMEOUT=8,Ha.HTTP_ERROR=6,xc=Ha,zf.COMPLETE="complete",SI=zf,qf.EventType=ao,ao.OPEN="a",ao.CLOSE="b",ao.ERROR="c",ao.MESSAGE="d",he.prototype.listen=he.prototype.K,ko=qf,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,RI=Ze}).apply(typeof pc<"u"?pc:typeof self<"u"?self:typeof window<"u"?window:{});const mg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Rd("@firebase/firestore");function ui(){return zr.logLevel}function ED(n){zr.setLogLevel(n)}function $(n,...e){if(zr.logLevel<=Ee.DEBUG){const t=e.map(Ld);zr.debug(`Firestore (${Wi}): ${n}`,...t)}}function st(n,...e){if(zr.logLevel<=Ee.ERROR){const t=e.map(Ld);zr.error(`Firestore (${Wi}): ${n}`,...t)}}function Jt(n,...e){if(zr.logLevel<=Ee.WARN){const t=e.map(Ld);zr.warn(`Firestore (${Wi}): ${n}`,...t)}}function Ld(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(n="Unexpected state"){const e=`FIRESTORE (${Wi}) INTERNAL ASSERTION FAILED: `+n;throw st(e),new Error(e)}function se(n,e){n||ne()}function TD(n,e){n||ne()}function Q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends _n{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ft.UNAUTHENTICATED))}shutdown(){}}class wD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class AD{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){se(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new pt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string"),new VI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new ft(e)}}class bD{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class RD{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new bD(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){se(this.o===void 0);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(se(typeof t.token=="string"),this.R=t.token,new xI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class PD{getToken(){return Promise.resolve(new xI(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=CD(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function pe(n,e){return n<e?-1:n>e?1:0}function Vi(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function NI(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new He(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new He(0,0))}static max(){return new ie(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,t,r){t===void 0?t=0:t>e.length&&ne(),r===void 0?r=e.length-t:r>e.length-t&&ne(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return la.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof la?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Te extends la{construct(e,t,r){return new Te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Te(t)}static emptyPath(){return new Te([])}}const DD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends la{construct(e,t,r){return new $e(e,t,r)}static isValidIdentifier(e){return DD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new G(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new G(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(t)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Te.fromString(e))}static fromName(e){return new X(Te.fromString(e).popFirst(5))}static empty(){return new X(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Te(e.slice()))}}/**
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
 */class ki{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Nh(n){return n.fields.find(e=>e.kind===2)}function Is(n){return n.fields.filter(e=>e.kind!==2)}function VD(n,e){let t=pe(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let r=0;r<Math.min(n.fields.length,e.fields.length);++r)if(t=kD(n.fields[r],e.fields[r]),t!==0)return t;return pe(n.fields.length,e.fields.length)}ki.UNKNOWN_ID=-1;class Ds{constructor(e,t){this.fieldPath=e,this.kind=t}}function kD(n,e){const t=$e.comparator(n.fieldPath,e.fieldPath);return t!==0?t:pe(n.kind,e.kind)}class xi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new xi(0,Yt.min())}}function OI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new He(t+1,0):new He(t,r));return new Yt(s,X.empty(),e)}function MI(n){return new Yt(n.readTime,n.key,-1)}class Yt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Yt(ie.min(),X.empty(),-1)}static max(){return new Yt(ie.max(),X.empty(),-1)}}function Ud(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:pe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==LI)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;t(e[l]).next(h=>{o[l]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new pt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Ho(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Bd(r.target.error);this.V.reject(new Ho(e,s))}}static open(e,t,r,s){try{return new Qu(t,e.transaction(s,r))}catch(i){throw new Ho(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||($("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ND(t)}}class Pn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,Pn.S(lt())===12.2&&st("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return $("SimpleDb","Removing database:",e),Ts(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Fv())return!1;if(Pn.v())return!0;const e=lt(),t=Pn.S(e),r=0<t&&t<10,s=UI(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||($("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Ho(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new G(M.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new G(M.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ho(e,o))},s.onupgradeneeded=i=>{$("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{$("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Qu.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),V.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if($("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function UI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class xD{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ts(this.B.delete())}}class Ho extends G{constructor(e,t){super(M.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function rs(n){return n.name==="IndexedDbTransactionError"}class ND{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?($("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):($("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ts(r)}add(e){return $("SimpleDb","ADD",this.store.name,e,e),Ts(this.store.add(e))}get(e){return Ts(this.store.get(e)).next(t=>(t===void 0&&(t=null),$("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return $("SimpleDb","DELETE",this.store.name,e),Ts(this.store.delete(e))}count(){return $("SimpleDb","COUNT",this.store.name),Ts(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new V((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(a,c)=>{o.push(c)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new V((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,t){$("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new V((r,s)=>{t.onerror=i=>{const o=Bd(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new V((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new xD(a),l=t(a.primaryKey,a.value,c);if(l instanceof V){const h=l.catch(f=>(c.done(),V.reject(f)));r.push(h)}c.isDone?s():c.K===null?a.continue():a.continue(c.K)}}).next(()=>V.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ts(n){return new V((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Bd(r.target.error);t(s)}})}let gg=!1;function Bd(n){const e=Pn.S(lt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new G("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return gg||(gg=!0,setTimeout(()=>{throw r},0)),r}}return n}class OD{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){$("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{$("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){rs(t)?$("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await ns(t)}await this.X(6e4)})}}class MD{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,i=!0;return V.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return $("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(a=>($("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=MI(i);Ud(o,r)>0&&(r=o)}),new Yt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class jt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}jt.oe=-1;function Da(n){return n==null}function ha(n){return n===0&&1/n==-1/0}function BI(n){return typeof n=="number"&&Number.isInteger(n)&&!ha(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=_g(e)),e=LD(n.get(t),e);return _g(e)}function LD(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function _g(n){return n+""}function wn(n){const e=n.length;if(se(e>=2),e===2)return se(n.charAt(0)===""&&n.charAt(1)===""),Te.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&ne(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:ne()}i=o+2}return new Te(r)}/**
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
 */const yg=["userId","batchId"];/**
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
 */function Nc(n,e){return[n,Nt(e)]}function qI(n,e,t){return[n,Nt(e),t]}const FD={},UD=["prefixPath","collectionGroup","readTime","documentId"],BD=["prefixPath","collectionGroup","documentId"],qD=["collectionGroup","readTime","prefixPath","documentId"],jD=["canonicalId","targetId"],GD=["targetId","path"],$D=["path","targetId"],KD=["collectionId","parent"],zD=["indexId","uid"],HD=["uid","sequenceNumber"],WD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],QD=["indexId","uid","orderedDocumentKey"],JD=["userId","collectionPath","documentId"],YD=["userId","collectionPath","largestBatchId"],XD=["userId","collectionGroup","largestBatchId"],jI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ZD=[...jI,"documentOverlays"],GI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],$I=GI,qd=[...$I,"indexConfiguration","indexState","indexEntries"],eV=qd,tV=[...qd,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh extends FI{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function ht(n,e){const t=Q(n);return Pn.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ss(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function KI(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function zI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.comparator=e,this.root=t||It.EMPTY}insert(e,t){return new qe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,It.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,It.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mc(this.root,e,this.comparator,!1)}getReverseIterator(){return new mc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mc(this.root,e,this.comparator,!0)}}class mc{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class It{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??It.RED,this.left=s??It.EMPTY,this.right=i??It.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new It(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return It.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1;It.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,t,r,s,i){return this}insert(e,t,r){return new It(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ig(this.data.getIterator())}getIteratorFrom(e){return new Ig(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Oe(this.comparator);return t.data=e,t}}class Ig{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ri(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Gt([])}unionWith(e){let t=new Oe($e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Gt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vi(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class HI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nV(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new HI("Invalid base64 string: "+i):i}}(e);return new Xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const rV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(n){if(se(!!n),typeof n=="string"){let e=0;const t=rV.exec(n);if(se(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(n.seconds),nanos:Ke(n.nanos)}}function Ke(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ir(n){return typeof n=="string"?Xe.fromBase64String(n):Xe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Yu(n){const e=n.mapValue.fields.__previous_value__;return Ju(e)?Yu(e):e}function da(n){const e=sr(n.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,t,r,s,i,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Hr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Hr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Oc={nullValue:"NULL_VALUE"};function Wr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ju(n)?4:WI(n)?9007199254740991:Xu(n)?10:11:ne()}function Vn(n,e){if(n===e)return!0;const t=Wr(n);if(t!==Wr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return da(n).isEqual(da(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=sr(s.timestampValue),a=sr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return ir(s.bytesValue).isEqual(ir(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ke(s.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(s.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ke(s.integerValue)===Ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ke(s.doubleValue),a=Ke(i.doubleValue);return o===a?ha(o)===ha(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Vi(n.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(vg(o)!==vg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Vn(o[c],a[c])))return!1;return!0}(n,e);default:return ne()}}function fa(n,e){return(n.values||[]).find(t=>Vn(t,e))!==void 0}function Qr(n,e){if(n===e)return 0;const t=Wr(n),r=Wr(e);if(t!==r)return pe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return pe(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ke(i.integerValue||i.doubleValue),c=Ke(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Eg(n.timestampValue,e.timestampValue);case 4:return Eg(da(n),da(e));case 5:return pe(n.stringValue,e.stringValue);case 6:return function(i,o){const a=ir(i),c=ir(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const h=pe(a[l],c[l]);if(h!==0)return h}return pe(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=pe(Ke(i.latitude),Ke(o.latitude));return a!==0?a:pe(Ke(i.longitude),Ke(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Tg(n.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,l,h;const f=i.fields||{},m=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,R=(c=m.value)===null||c===void 0?void 0:c.arrayValue,P=pe(((l=g==null?void 0:g.values)===null||l===void 0?void 0:l.length)||0,((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:Tg(g,R)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Mr.mapValue&&o===Mr.mapValue)return 0;if(i===Mr.mapValue)return 1;if(o===Mr.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},h=Object.keys(l);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const m=pe(c[f],h[f]);if(m!==0)return m;const g=Qr(a[c[f]],l[h[f]]);if(g!==0)return g}return pe(c.length,h.length)}(n.mapValue,e.mapValue);default:throw ne()}}function Eg(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return pe(n,e);const t=sr(n),r=sr(e),s=pe(t.seconds,r.seconds);return s!==0?s:pe(t.nanos,r.nanos)}function Tg(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Qr(t[s],r[s]);if(i)return i}return pe(t.length,r.length)}function Ni(n){return Mh(n)}function Mh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=sr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ir(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return X.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Mh(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Mh(t.fields[o])}`;return s+"}"}(n.mapValue):ne()}function Mc(n){switch(Wr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yu(n);return e?16+Mc(e):16;case 5:return 2*n.stringValue.length;case 6:return ir(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Mc(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ss(r.fields,(i,o)=>{s+=i.length+Mc(o)}),s}(n.mapValue);default:throw ne()}}function Os(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Lh(n){return!!n&&"integerValue"in n}function pa(n){return!!n&&"arrayValue"in n}function wg(n){return!!n&&"nullValue"in n}function Ag(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Lc(n){return!!n&&"mapValue"in n}function Xu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Wo(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ss(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Wo(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wo(n.arrayValue.values[t]);return e}return Object.assign({},n)}function WI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const QI={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function iV(n){return"nullValue"in n?Oc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Os(Hr.empty(),X.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Xu(n)?QI:{mapValue:{}}:ne()}function oV(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Os(Hr.empty(),X.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?QI:"mapValue"in n?Xu(n)?{mapValue:{}}:Mr:ne()}function bg(n,e){const t=Qr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Rg(n,e){const t=Qr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Lc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wo(t)}setAll(e){let t=$e.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Wo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Lc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Lc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ss(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt(Wo(this.value))}}function JI(n){const e=[];return ss(n.fields,(t,r)=>{const s=new $e([t]);if(Lc(r)){const i=JI(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,ie.min(),ie.min(),ie.min(),wt.empty(),0)}static newFoundDocument(e,t,r,s){return new Ge(e,1,t,ie.min(),r,s,0)}static newNoDocument(e,t){return new Ge(e,2,t,ie.min(),ie.min(),wt.empty(),0)}static newUnknownDocument(e,t){return new Ge(e,3,t,ie.min(),ie.min(),wt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jr{constructor(e,t){this.position=e,this.inclusive=t}}function Sg(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),t.key):r=Qr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pg(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Vn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ma{constructor(e,t="asc"){this.field=e,this.dir=t}}function aV(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class YI{}class we extends YI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new cV(e,t,r):t==="array-contains"?new hV(e,r):t==="in"?new rE(e,r):t==="not-in"?new dV(e,r):t==="array-contains-any"?new fV(e,r):new we(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new uV(e,r):new lV(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Qr(t,this.value)):t!==null&&Wr(this.value)===Wr(t)&&this.matchesComparison(Qr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ne extends YI{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ne(e,t)}matches(e){return Oi(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Oi(n){return n.op==="and"}function Fh(n){return n.op==="or"}function jd(n){return XI(n)&&Oi(n)}function XI(n){for(const e of n.filters)if(e instanceof Ne)return!1;return!0}function Uh(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+Ni(n.value);if(jd(n))return n.filters.map(e=>Uh(e)).join(",");{const e=n.filters.map(t=>Uh(t)).join(",");return`${n.op}(${e})`}}function ZI(n,e){return n instanceof we?function(r,s){return s instanceof we&&r.op===s.op&&r.field.isEqual(s.field)&&Vn(r.value,s.value)}(n,e):n instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&ZI(o,s.filters[a]),!0):!1}(n,e):void ne()}function eE(n,e){const t=n.filters.concat(e);return Ne.create(t,n.op)}function tE(n){return n instanceof we?function(t){return`${t.field.canonicalString()} ${t.op} ${Ni(t.value)}`}(n):n instanceof Ne?function(t){return t.op.toString()+" {"+t.getFilters().map(tE).join(" ,")+"}"}(n):"Filter"}class cV extends we{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class uV extends we{constructor(e,t){super(e,"in",t),this.keys=nE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class lV extends we{constructor(e,t){super(e,"not-in",t),this.keys=nE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>X.fromName(r.referenceValue))}class hV extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pa(t)&&fa(t.arrayValue,this.value)}}class rE extends we{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fa(this.value.arrayValue,t)}}class dV extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if(fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!fa(this.value.arrayValue,t)}}class fV extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>fa(this.value.arrayValue,r))}}/**
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
 */class pV{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Bh(n,e=null,t=[],r=[],s=null,i=null,o=null){return new pV(n,e,t,r,s,i,o)}function Ms(n){const e=Q(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Uh(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Da(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ni(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ni(r)).join(",")),e.ue=t}return e.ue}function Va(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!aV(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ZI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Pg(n.startAt,e.startAt)&&Pg(n.endAt,e.endAt)}function au(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function cu(n,e){return n.filters.filter(t=>t instanceof we&&t.field.isEqual(e))}function Cg(n,e,t){let r=Oc,s=!0;for(const i of cu(n,e)){let o=Oc,a=!0;switch(i.op){case"<":case"<=":o=iV(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Oc}bg({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];bg({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Dg(n,e,t){let r=Mr,s=!0;for(const i of cu(n,e)){let o=Mr,a=!0;switch(i.op){case">=":case">":o=oV(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Mr}Rg({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Rg({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sE(n,e,t,r,s,i,o,a){return new cr(n,e,t,r,s,i,o,a)}function Qi(n){return new cr(n)}function Vg(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gd(n){return n.collectionGroup!==null}function Ei(n){const e=Q(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Oe($e.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ma(i,r))}),t.has($e.keyField().canonicalString())||e.ce.push(new ma($e.keyField(),r))}return e.ce}function Ot(n){const e=Q(n);return e.le||(e.le=oE(e,Ei(n))),e.le}function iE(n){const e=Q(n);return e.he||(e.he=oE(e,n.explicitOrderBy)),e.he}function oE(n,e){if(n.limitType==="F")return Bh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ma(s.field,i)});const t=n.endAt?new Jr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Jr(n.startAt.position,n.startAt.inclusive):null;return Bh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function qh(n,e){const t=n.filters.concat([e]);return new cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function uu(n,e,t){return new cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ka(n,e){return Va(Ot(n),Ot(e))&&n.limitType===e.limitType}function aE(n){return`${Ms(Ot(n))}|lt:${n.limitType}`}function li(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>tE(s)).join(", ")}]`),Da(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ni(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ni(s)).join(",")),`Target(${r})`}(Ot(n))}; limitType=${n.limitType})`}function xa(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Sg(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Ei(r),s)||r.endAt&&!function(o,a,c){const l=Sg(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Ei(r),s))}(n,e)}function cE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function uE(n){return(e,t)=>{let r=!1;for(const s of Ei(n)){const i=mV(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function mV(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Qr(c,l):ne()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return zI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gV=new qe(X.comparator);function $t(){return gV}const lE=new qe(X.comparator);function xo(...n){let e=lE;for(const t of n)e=e.insert(t.key,t);return e}function hE(n){let e=lE;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function An(){return Qo()}function dE(){return Qo()}function Qo(){return new ur(n=>n.toString(),(n,e)=>n.isEqual(e))}const _V=new qe(X.comparator),yV=new Oe(X.comparator);function _e(...n){let e=yV;for(const t of n)e=e.add(t);return e}const vV=new Oe(pe);function $d(){return vV}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ha(e)?"-0":e}}function fE(n){return{integerValue:""+n}}function pE(n,e){return BI(e)?fE(e):Kd(n,e)}/**
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
 */class Zu{constructor(){this._=void 0}}function IV(n,e,t){return n instanceof Mi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ju(i)&&(i=Yu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof Ls?gE(n,e):n instanceof Fs?_E(n,e):function(s,i){const o=mE(s,i),a=kg(o)+kg(s.Pe);return Lh(o)&&Lh(s.Pe)?fE(a):Kd(s.serializer,a)}(n,e)}function EV(n,e,t){return n instanceof Ls?gE(n,e):n instanceof Fs?_E(n,e):t}function mE(n,e){return n instanceof Li?function(r){return Lh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Mi extends Zu{}class Ls extends Zu{constructor(e){super(),this.elements=e}}function gE(n,e){const t=yE(e);for(const r of n.elements)t.some(s=>Vn(s,r))||t.push(r);return{arrayValue:{values:t}}}class Fs extends Zu{constructor(e){super(),this.elements=e}}function _E(n,e){let t=yE(e);for(const r of n.elements)t=t.filter(s=>!Vn(s,r));return{arrayValue:{values:t}}}class Li extends Zu{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function kg(n){return Ke(n.integerValue||n.doubleValue)}function yE(n){return pa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){this.field=e,this.transform=t}}function TV(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Ls&&s instanceof Ls||r instanceof Fs&&s instanceof Fs?Vi(r.elements,s.elements,Vn):r instanceof Li&&s instanceof Li?Vn(r.Pe,s.Pe):r instanceof Mi&&s instanceof Mi}(n.transform,e.transform)}class wV{constructor(e,t){this.version=e,this.transformResults=t}}class ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class el{}function vE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Yi(n.key,ze.none()):new Ji(n.key,n.data,ze.none());{const t=n.data,r=wt.empty();let s=new Oe($e.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new lr(n.key,r,new Gt(s.toArray()),ze.none())}}function AV(n,e,t){n instanceof Ji?function(s,i,o){const a=s.value.clone(),c=Ng(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof lr?function(s,i,o){if(!Fc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ng(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(IE(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Jo(n,e,t,r){return n instanceof Ji?function(i,o,a,c){if(!Fc(i.precondition,o))return a;const l=i.value.clone(),h=Og(i.fieldTransforms,c,o);return l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,e,t,r):n instanceof lr?function(i,o,a,c){if(!Fc(i.precondition,o))return a;const l=Og(i.fieldTransforms,c,o),h=o.data;return h.setAll(IE(i)),h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(i,o,a){return Fc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function bV(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=mE(r.transform,s||null);i!=null&&(t===null&&(t=wt.empty()),t.set(r.field,i))}return t||null}function xg(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vi(r,s,(i,o)=>TV(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ji extends el{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class lr extends el{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function IE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ng(n,e,t){const r=new Map;se(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,EV(o,a,t[s]))}return r}function Og(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,IV(i,o,e))}return r}class Yi extends el{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zd extends el{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&AV(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Jo(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Jo(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=dE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const c=vE(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),_e())}isEqual(e){return this.batchId===e.batchId&&Vi(this.mutations,e.mutations,(t,r)=>xg(t,r))&&Vi(this.baseMutations,e.baseMutations,(t,r)=>xg(t,r))}}class Wd{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){se(e.mutations.length===r.length);let s=function(){return _V}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Wd(e,t,r,s)}}/**
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
 */class Qd{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class EE{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,be;function TE(n){switch(n){default:return ne();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function wE(n){if(n===void 0)return st("GRPC error has no .code"),M.UNKNOWN;switch(n){case ot.OK:return M.OK;case ot.CANCELLED:return M.CANCELLED;case ot.UNKNOWN:return M.UNKNOWN;case ot.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case ot.INTERNAL:return M.INTERNAL;case ot.UNAVAILABLE:return M.UNAVAILABLE;case ot.UNAUTHENTICATED:return M.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case ot.NOT_FOUND:return M.NOT_FOUND;case ot.ALREADY_EXISTS:return M.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return M.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case ot.ABORTED:return M.ABORTED;case ot.OUT_OF_RANGE:return M.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return M.UNIMPLEMENTED;case ot.DATA_LOSS:return M.DATA_LOSS;default:return ne()}}(be=ot||(ot={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let lu=null;/**
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
 */function AE(){return new TextEncoder}/**
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
 */const SV=new Cs([4294967295,4294967295],0);function Mg(n){const e=AE().encode(n),t=new bI;return t.update(e),new Uint8Array(t.digest())}function Lg(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cs([t,r],0),new Cs([s,i],0)]}class Jd{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new No(`Invalid padding: ${t}`);if(r<0)throw new No(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new No(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new No(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Cs.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Cs.fromNumber(r)));return s.compare(SV)===1&&(s=new Cs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Mg(e),[r,s]=Lg(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Jd(i,s,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=Mg(e),[r,s]=Lg(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class No extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ma.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Oa(ie.min(),s,new qe(pe),$t(),_e())}}class Ma{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ma(r,t,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class bE{constructor(e,t){this.targetId=e,this.me=t}}class RE{constructor(e,t,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Fg{constructor(){this.fe=0,this.ge=Bg(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),t=_e(),r=_e();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ne()}}),new Ma(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Bg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PV{constructor(e){this.Le=e,this.Be=new Map,this.ke=$t(),this.qe=Ug(),this.Qe=new qe(pe)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(au(i))if(r===0){const o=new X(i.path);this.Ue(t,o,Ge.newNoDocument(o,ie.min()))}else se(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(t);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,l)}lu==null||lu.et(function(h,f,m,g,R){var P,C,L,N,O,x;const z={localCacheCount:h,existenceFilterCount:f.count,databaseId:m.database,projectId:m.projectId},H=f.unchangedNames;return H&&(z.bloomFilter={applied:R===0,hashCount:(P=H==null?void 0:H.hashCount)!==null&&P!==void 0?P:0,bitmapLength:(N=(L=(C=H==null?void 0:H.bits)===null||C===void 0?void 0:C.bitmap)===null||L===void 0?void 0:L.length)!==null&&N!==void 0?N:0,padding:(x=(O=H==null?void 0:H.bits)===null||O===void 0?void 0:O.padding)!==null&&x!==void 0?x:0,mightContain:w=>{var y;return(y=g==null?void 0:g.mightContain(w))!==null&&y!==void 0&&y}}),z}(o,e.me,this.Le.tt(),a,c))}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=ir(r).toUint8Array()}catch(c){if(c instanceof HI)return Jt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Jd(o,s,i)}catch(c){return Jt(c instanceof No?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&au(a.target)){const c=new X(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Ge.newNoDocument(c,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=_e();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Oa(e,t,this.Qe,this.ke,r);return this.ke=$t(),this.qe=Ug(),this.Qe=new qe(pe),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Fg,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Oe(pe),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Fg),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ug(){return new qe(X.comparator)}function Bg(){return new qe(X.comparator)}const CV={asc:"ASCENDING",desc:"DESCENDING"},DV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VV={and:"AND",or:"OR"};class kV{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function jh(n,e){return n.useProto3Json||Da(e)?e:{value:e}}function Fi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xV(n,e){return Fi(n,e.toTimestamp())}function it(n){return se(!!n),ie.fromTimestamp(function(t){const r=sr(t);return new He(r.seconds,r.nanos)}(n))}function Yd(n,e){return Gh(n,e).canonicalString()}function Gh(n,e){const t=function(s){return new Te(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function PE(n){const e=Te.fromString(n);return se(FE(e)),e}function ga(n,e){return Yd(n.databaseId,e.path)}function Cn(n,e){const t=PE(e);if(t.get(1)!==n.databaseId.projectId)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(VE(t))}function CE(n,e){return Yd(n.databaseId,e)}function DE(n){const e=PE(n);return e.length===4?Te.emptyPath():VE(e)}function $h(n){return new Te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function VE(n){return se(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function qg(n,e,t){return{name:ga(n,e),fields:t.value.mapValue.fields}}function kE(n,e,t){const r=Cn(n,e.name),s=it(e.updateTime),i=e.createTime?it(e.createTime):ie.min(),o=new wt({mapValue:{fields:e.fields}}),a=Ge.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function NV(n,e){return"found"in e?function(r,s){se(!!s.found),s.found.name,s.found.updateTime;const i=Cn(r,s.found.name),o=it(s.found.updateTime),a=s.found.createTime?it(s.found.createTime):ie.min(),c=new wt({mapValue:{fields:s.found.fields}});return Ge.newFoundDocument(i,o,a,c)}(n,e):"missing"in e?function(r,s){se(!!s.missing),se(!!s.readTime);const i=Cn(r,s.missing),o=it(s.readTime);return Ge.newNoDocument(i,o)}(n,e):ne()}function OV(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,h){return l.useProto3Json?(se(h===void 0||typeof h=="string"),Xe.fromBase64String(h||"")):(se(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Xe.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const h=l.code===void 0?M.UNKNOWN:wE(l.code);return new G(h,l.message||"")}(o);t=new RE(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Cn(n,r.document.name),i=it(r.document.updateTime),o=r.document.createTime?it(r.document.createTime):ie.min(),a=new wt({mapValue:{fields:r.document.fields}}),c=Ge.newFoundDocument(s,i,o,a),l=r.targetIds||[],h=r.removedTargetIds||[];t=new Uc(l,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Cn(n,r.document),i=r.readTime?it(r.readTime):ie.min(),o=Ge.newNoDocument(s,i),a=r.removedTargetIds||[];t=new Uc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Cn(n,r.document),i=r.removedTargetIds||[];t=new Uc([],i,s,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new RV(s,i),a=r.targetId;t=new bE(a,o)}}return t}function _a(n,e){let t;if(e instanceof Ji)t={update:qg(n,e.key,e.value)};else if(e instanceof Yi)t={delete:ga(n,e.key)};else if(e instanceof lr)t={update:qg(n,e.key,e.data),updateMask:qV(e.fieldMask)};else{if(!(e instanceof zd))return ne();t={verify:ga(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Mi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ls)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Fs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Li)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ne()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xV(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(n,e.precondition)),t}function Kh(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?ze.updateTime(it(i.updateTime)):i.exists!==void 0?ze.exists(i.exists):ze.none()}(e.currentDocument):ze.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let c=null;if("setToServerValue"in a)se(a.setToServerValue==="REQUEST_TIME"),c=new Mi;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];c=new Ls(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];c=new Fs(h)}else"increment"in a?c=new Li(o,a.increment):ne();const l=$e.fromServerFormat(a.fieldPath);return new Na(l,c)}(n,s)):[];if(e.update){e.update.name;const s=Cn(n,e.update.name),i=new wt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const l=c.fieldPaths||[];return new Gt(l.map(h=>$e.fromServerFormat(h)))}(e.updateMask);return new lr(s,i,o,t,r)}return new Ji(s,i,t,r)}if(e.delete){const s=Cn(n,e.delete);return new Yi(s,t)}if(e.verify){const s=Cn(n,e.verify);return new zd(s,t)}return ne()}function MV(n,e){return n&&n.length>0?(se(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?it(s.updateTime):it(i);return o.isEqual(ie.min())&&(o=it(i)),new wV(o,s.transformResults||[])}(t,e))):[]}function xE(n,e){return{documents:[CE(n,e.path)]}}function tl(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=CE(n,s);const i=function(l){if(l.length!==0)return LE(Ne.create(l,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(h=>function(m){return{field:xr(m.field),direction:FV(m.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=jh(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{_t:t,parent:s}}function NE(n,e,t,r){const{_t:s,parent:i}=tl(n,e),o={},a=[];let c=0;return t.forEach(l=>{const h=r?l.alias:"aggregate_"+c++;o[h]=l.alias,l.aggregateType==="count"?a.push({alias:h,count:{}}):l.aggregateType==="avg"?a.push({alias:h,avg:{field:xr(l.fieldPath)}}):l.aggregateType==="sum"&&a.push({alias:h,sum:{field:xr(l.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:s.structuredQuery},parent:s.parent},ut:o,parent:i}}function OE(n){let e=DE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){se(r===1);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(f){const m=ME(f);return m instanceof Ne&&jd(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(m=>function(R){return new ma(hi(R.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(t.orderBy));let a=null;t.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Da(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(f){const m=!!f.before,g=f.values||[];return new Jr(g,m)}(t.startAt));let l=null;return t.endAt&&(l=function(f){const m=!f.before,g=f.values||[];return new Jr(g,m)}(t.endAt)),sE(e,s,o,i,a,"F",c,l)}function LV(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ME(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=hi(t.unaryFilter.field);return we.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hi(t.unaryFilter.field);return we.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hi(t.unaryFilter.field);return we.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hi(t.unaryFilter.field);return we.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(n):n.fieldFilter!==void 0?function(t){return we.create(hi(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ne.create(t.compositeFilter.filters.map(r=>ME(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne()}}(t.compositeFilter.op))}(n):ne()}function FV(n){return CV[n]}function UV(n){return DV[n]}function BV(n){return VV[n]}function xr(n){return{fieldPath:n.canonicalString()}}function hi(n){return $e.fromServerFormat(n.fieldPath)}function LE(n){return n instanceof we?function(t){if(t.op==="=="){if(Ag(t.value))return{unaryFilter:{field:xr(t.field),op:"IS_NAN"}};if(wg(t.value))return{unaryFilter:{field:xr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ag(t.value))return{unaryFilter:{field:xr(t.field),op:"IS_NOT_NAN"}};if(wg(t.value))return{unaryFilter:{field:xr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xr(t.field),op:UV(t.op),value:t.value}}}(n):n instanceof Ne?function(t){const r=t.getFilters().map(s=>LE(s));return r.length===1?r[0]:{compositeFilter:{op:BV(t.op),filters:r}}}(n):ne()}function qV(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function FE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t,r,s,i=ie.min(),o=ie.min(),a=Xe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.ct=e}}function jV(n,e){let t;if(e.document)t=kE(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=X.fromSegments(e.noDocument.path),s=Bs(e.noDocument.readTime);t=Ge.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return ne();{const r=X.fromSegments(e.unknownDocument.path),s=Bs(e.unknownDocument.version);t=Ge.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new He(s[0],s[1]);return ie.fromTimestamp(i)}(e.readTime)),t}function jg(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:hu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:ga(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Fi(i,o.version.toTimestamp()),createTime:Fi(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Us(e.version)};else{if(!e.isUnknownDocument())return ne();r.unknownDocument={path:t.path.toArray(),version:Us(e.version)}}return r}function hu(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Us(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Bs(n){const e=new He(n.seconds,n.nanoseconds);return ie.fromTimestamp(e)}function ws(n,e){const t=(e.baseMutations||[]).map(i=>Kh(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Kh(n.ct,i)),s=He.fromMillis(e.localWriteTimeMs);return new Hd(e.batchId,s,t,r)}function Oo(n){const e=Bs(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Bs(n.lastLimboFreeSnapshotVersion):ie.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return se(i.documents.length===1),Ot(Qi(DE(i.documents[0])))}(n.query):function(i){return Ot(OE(i))}(n.query),new Wn(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Xe.fromBase64String(n.resumeToken))}function BE(n,e){const t=Us(e.snapshotVersion),r=Us(e.lastLimboFreeSnapshotVersion);let s;s=au(e.target)?xE(n.ct,e.target):tl(n.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ms(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Xd(n){const e=OE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?uu(e,e.limit,"L"):e}function eh(n,e){return new Qd(e.largestBatchId,Kh(n.ct,e.overlayMutation))}function Gg(n,e){const t=e.path.lastSegment();return[n,Nt(e.path.popLast()),t]}function $g(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Us(r.readTime),documentKey:Nt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{getBundleMetadata(e,t){return Kg(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:Bs(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Kg(e).put(function(s){return{bundleId:s.id,createTime:Us(it(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return zg(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:Xd(i.bundledQuery),readTime:Bs(i.readTime)}}(r)})}saveNamedQuery(e,t){return zg(e).put(function(s){return{name:s.name,readTime:Us(it(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Kg(n){return ht(n,"bundles")}function zg(n){return ht(n,"namedQueries")}/**
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
 */class nl{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new nl(e,r)}getOverlay(e,t){return Ao(e).get(Gg(this.userId,t)).next(r=>r?eh(this.serializer,r):null)}getOverlays(e,t){const r=An();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new Qd(t,o);s.push(this.ht(e,a))}),V.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(Nt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Ao(e).j("collectionPathOverlayIndex",a))}),V.waitFor(i)}getOverlaysForCollection(e,t,r){const s=An(),i=Nt(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ao(e).U("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=eh(this.serializer,c);s.set(l.getKey(),l)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=An();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ao(e).J({index:"collectionGroupOverlayIndex",range:a},(c,l,h)=>{const f=eh(this.serializer,l);i.size()<s||f.largestBatchId===o?(i.set(f.getKey(),f),o=f.largestBatchId):h.done()}).next(()=>i)}ht(e,t){return Ao(e).put(function(s,i,o){const[a,c,l]=Gg(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:l,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:_a(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Ao(n){return ht(n,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $V{Pt(e){return ht(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Xe.fromUint8Array(r):Xe.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class As{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(Ke(e.integerValue));else if("doubleValue"in e){const r=Ke(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),ha(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=sr(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(ir(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?WI(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Xu(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):ne()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const i=e.fields||{};this.dt(t,53);const o="value",a=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(Ke(a)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),X.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}As.vt=new As;function KV(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Hg(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=KV(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class zV{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=Hg(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=Hg(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class HV{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class WV{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class bo{constructor(){this.jt=new zV,this.Ht=new HV(this.jt),this.Jt=new WV(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class bs{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new bs(this.indexId,this.documentKey,this.arrayValue,r)}}function Ir(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Wg(n.arrayValue,e.arrayValue),t!==0?t:(t=Wg(n.directionalValue,e.directionalValue),t!==0?t:X.comparator(n.documentKey,e.documentKey)))}function Wg(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class Qg{constructor(e){this.Xt=new Oe((t,r)=>$e.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(se(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Nh(e);if(t!==void 0&&!this.sn(t))return!1;const r=Is(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!s.has(a.field.canonicalString())){const c=r[i];if(!this.on(a,c)||!this._n(this.en[o++],c))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new Oe($e.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Ds(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Ds(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Ds(r.field,r.dir==="asc"?0:1)));return new ki(ki.UNKNOWN_ID,this.collectionId,t,xi.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function qE(n){var e,t;if(se(n instanceof we||n instanceof Ne),n instanceof we){if(n instanceof rE){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>we.create(n.field,"==",i)))||[];return Ne.create(s,"or")}return n}const r=n.filters.map(s=>qE(s));return Ne.create(r,n.op)}function QV(n){if(n.getFilters().length===0)return[];const e=Wh(qE(n));return se(jE(e)),zh(e)||Hh(e)?[e]:e.getFilters()}function zh(n){return n instanceof we}function Hh(n){return n instanceof Ne&&jd(n)}function jE(n){return zh(n)||Hh(n)||function(t){if(t instanceof Ne&&Fh(t)){for(const r of t.getFilters())if(!zh(r)&&!Hh(r))return!1;return!0}return!1}(n)}function Wh(n){if(se(n instanceof we||n instanceof Ne),n instanceof we)return n;if(n.filters.length===1)return Wh(n.filters[0]);const e=n.filters.map(r=>Wh(r));let t=Ne.create(e,n.op);return t=du(t),jE(t)?t:(se(t instanceof Ne),se(Oi(t)),se(t.filters.length>1),t.filters.reduce((r,s)=>Zd(r,s)))}function Zd(n,e){let t;return se(n instanceof we||n instanceof Ne),se(e instanceof we||e instanceof Ne),t=n instanceof we?e instanceof we?function(s,i){return Ne.create([s,i],"and")}(n,e):Jg(n,e):e instanceof we?Jg(e,n):function(s,i){if(se(s.filters.length>0&&i.filters.length>0),Oi(s)&&Oi(i))return eE(s,i.getFilters());const o=Fh(s)?s:i,a=Fh(s)?i:s,c=o.filters.map(l=>Zd(l,a));return Ne.create(c,"or")}(n,e),du(t)}function Jg(n,e){if(Oi(e))return eE(e,n.getFilters());{const t=e.filters.map(r=>Zd(n,r));return Ne.create(t,"or")}}function du(n){if(se(n instanceof we||n instanceof Ne),n instanceof we)return n;const e=n.getFilters();if(e.length===1)return du(e[0]);if(XI(n))return n;const t=e.map(s=>du(s)),r=[];return t.forEach(s=>{s instanceof we?r.push(s):s instanceof Ne&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Ne.create(r,n.op)}/**
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
 */class JV{constructor(){this.un=new ef}addToCollectionParentIndex(e,t){return this.un.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Yt.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class ef{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Oe(Te.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Oe(Te.comparator)).toArray()}}/**
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
 */const gc=new Uint8Array(0);class YV{constructor(e,t){this.databaseId=t,this.cn=new ef,this.ln=new ur(r=>Ms(r),(r,s)=>Va(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:r,parent:Nt(s)};return Yg(e).put(i)}return V.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[NI(t),""],!1,!0);return Yg(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(wn(o.parent))}return r})}addFieldIndex(e,t){const r=Ro(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=ii(e);return i.next(a=>{o.put($g(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Ro(e),s=ii(e),i=si(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ro(e),r=si(e),s=ii(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return V.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new Qg(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=si(e);let s=!0;const i=new Map;return V.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=_e();const a=[];return V.forEach(i,(c,l)=>{$("IndexedDbIndexManager",`Using index ${function(O){return`id=${O.indexId}|cg=${O.collectionGroup}|f=${O.fields.map(x=>`${x.fieldPath}:${x.kind}`).join(",")}`}(c)} to execute ${Ms(t)}`);const h=function(O,x){const z=Nh(x);if(z===void 0)return null;for(const H of cu(O,z.fieldPath))switch(H.op){case"array-contains-any":return H.value.arrayValue.values||[];case"array-contains":return[H.value]}return null}(l,c),f=function(O,x){const z=new Map;for(const H of Is(x))for(const w of cu(O,H.fieldPath))switch(w.op){case"==":case"in":z.set(H.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return z.set(H.fieldPath.canonicalString(),w.value),Array.from(z.values())}return null}(l,c),m=function(O,x){const z=[];let H=!0;for(const w of Is(x)){const y=w.kind===0?Cg(O,w.fieldPath,O.startAt):Dg(O,w.fieldPath,O.startAt);z.push(y.value),H&&(H=y.inclusive)}return new Jr(z,H)}(l,c),g=function(O,x){const z=[];let H=!0;for(const w of Is(x)){const y=w.kind===0?Dg(O,w.fieldPath,O.endAt):Cg(O,w.fieldPath,O.endAt);z.push(y.value),H&&(H=y.inclusive)}return new Jr(z,H)}(l,c),R=this.In(c,l,m),P=this.In(c,l,g),C=this.Tn(c,l,f),L=this.En(c.indexId,h,R,m.inclusive,P,g.inclusive,C);return V.forEach(L,N=>r.G(N,t.limit).next(O=>{O.forEach(x=>{const z=X.fromSegments(x.documentKey);o.has(z)||(o=o.add(z),a.push(z))})}))}).next(()=>a)}return V.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=QV(Ne.create(e.filters,"and")).map(r=>Bh(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,i,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,i.length),l=c/(t!=null?t.length:1),h=[];for(let f=0;f<c;++f){const m=t?this.dn(t[f/l]):gc,g=this.An(e,m,r[f%l],s),R=this.Rn(e,m,i[f%l],o),P=a.map(C=>this.An(e,m,C,!0));h.push(...this.createRange(g,R,P))}return h}An(e,t,r,s){const i=new bs(e,X.empty(),t,r);return s?i:i.Zt()}Rn(e,t,r,s){const i=new bs(e,X.empty(),t,r);return s?i.Zt():i}Pn(e,t){const r=new Qg(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const s=this.hn(t);return V.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(c){let l=new Oe($e.comparator),h=!1;for(const f of c.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?h=!0:l=l.add(m.field));for(const f of c.orderBy)f.field.isKeyField()||(l=l.add(f.field));return l.size+(h?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new bo;for(const s of Is(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);As.vt.It(i,o)}return r.zt()}dn(e){const t=new bo;return As.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new bo;return As.vt.It(Os(this.databaseId,t),r.Yt(function(i){const o=Is(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new bo);let i=0;for(const o of Is(e)){const a=r[i++];for(const c of s)if(this.fn(t,o.fieldPath)&&pa(a))s=this.gn(s,o,a);else{const l=c.Yt(o.kind);As.vt.It(a,l)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new bo;c.seed(a.zt()),As.vt.It(o,c.Yt(t.kind)),i.push(c)}return i}fn(e,t){return!!e.filters.find(r=>r instanceof we&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ro(e),s=ii(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(i=>{const o=[];return V.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(h,f){const m=f?new xi(f.sequenceNumber,new Yt(Bs(f.readTime),new X(wn(f.documentKey)),f.largestBatchId)):xi.empty(),g=h.fields.map(([R,P])=>new Ds($e.fromServerFormat(R),P));return new ki(h.indexId,h.collectionGroup,g,m)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:pe(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Ro(e),i=ii(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>V.forEach(a,c=>i.put($g(c.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return V.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?V.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),V.forEach(a,c=>this.wn(e,s,c).next(l=>{const h=this.Sn(i,c);return l.isEqual(h)?V.resolve():this.bn(e,i,c,l,h)}))))})}Dn(e,t,r,s){return si(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return si(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=si(e);let i=new Oe(Ir);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{i=i.add(new bs(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}Sn(e,t){let r=new Oe(Ir);const s=this.Vn(t,e);if(s==null)return r;const i=Nh(t);if(i!=null){const o=e.data.field(i.fieldPath);if(pa(o))for(const a of o.arrayValue.values||[])r=r.add(new bs(t.indexId,e.key,this.dn(a),s))}else r=r.add(new bs(t.indexId,e.key,gc,s));return r}bn(e,t,r,s,i){$("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,l,h,f,m){const g=c.getIterator(),R=l.getIterator();let P=ri(g),C=ri(R);for(;P||C;){let L=!1,N=!1;if(P&&C){const O=h(P,C);O<0?N=!0:O>0&&(L=!0)}else P!=null?N=!0:L=!0;L?(f(C),C=ri(R)):N?(m(P),P=ri(g)):(P=ri(g),C=ri(R))}}(s,i,Ir,a=>{o.push(this.Dn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),V.waitFor(o)}yn(e){let t=1;return ii(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Ir(o,a)).filter((o,a,c)=>!a||Ir(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=Ir(o,e),c=Ir(o,t);if(a===0)s[0]=e.Zt();else if(a>0&&c<0)s.push(o),s.push(o.Zt());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,gc,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,gc,[]];i.push(IDBKeyRange.bound(a,c))}return i}Cn(e,t){return Ir(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Xg)}getMinOffset(e,t){return V.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||ne())).next(Xg)}}function Yg(n){return ht(n,"collectionParents")}function si(n){return ht(n,"indexEntries")}function Ro(n){return ht(n,"indexConfiguration")}function ii(n){return ht(n,"indexState")}function Xg(n){se(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Ud(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Yt(e.readTime,e.documentKey,t)}/**
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
 */const Zg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Dt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Dt(e,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.J({range:o},(h,f,m)=>(a++,m.delete()));i.push(c.next(()=>{se(a===1)}));const l=[];for(const h of t.mutations){const f=qI(e,h.key.path,t.batchId);i.push(s.delete(f)),l.push(h.key)}return V.waitFor(i).next(()=>l)}function fu(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw ne();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.DEFAULT_COLLECTION_PERCENTILE=10,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dt.DEFAULT=new Dt(41943040,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dt.DISABLED=new Dt(-1,0,0);class rl{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){se(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new rl(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Er(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=di(e),o=Er(e);return o.add({}).next(a=>{se(typeof a=="number");const c=new Hd(a,t,r,s),l=function(g,R,P){const C=P.baseMutations.map(N=>_a(g.ct,N)),L=P.mutations.map(N=>_a(g.ct,N));return{userId:R,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:C,mutations:L}}(this.serializer,this.userId,c),h=[];let f=new Oe((m,g)=>pe(m.canonicalString(),g.canonicalString()));for(const m of s){const g=qI(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),h.push(o.put(l)),h.push(i.put(g,FD))}return f.forEach(m=>{h.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=c.keys()}),V.waitFor(h).next(()=>c)})}lookupMutationBatch(e,t){return Er(e).get(t).next(r=>r?(se(r.userId===this.userId),ws(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?V.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Er(e).J({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(se(a.batchId>=r),i=ws(this.serializer,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Er(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Er(e).U("userMutationsIndex",t).next(r=>r.map(s=>ws(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Nc(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return di(e).J({range:s},(o,a,c)=>{const[l,h,f]=o,m=wn(h);if(l===this.userId&&t.path.isEqual(m))return Er(e).get(f).next(g=>{if(!g)throw ne();se(g.userId===this.userId),i.push(ws(this.serializer,g))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Oe(pe);const s=[];return t.forEach(i=>{const o=Nc(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=di(e).J({range:a},(l,h,f)=>{const[m,g,R]=l,P=wn(g);m===this.userId&&i.path.isEqual(P)?r=r.add(R):f.done()});s.push(c)}),V.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Nc(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new Oe(pe);return di(e).J({range:o},(c,l,h)=>{const[f,m,g]=c,R=wn(m);f===this.userId&&r.isPrefixOf(R)?R.length===s&&(a=a.add(g)):h.done()}).next(()=>this.xn(e,a))}xn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Er(e).get(i).next(o=>{if(o===null)throw ne();se(o.userId===this.userId),r.push(ws(this.serializer,o))}))}),V.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return GE(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),V.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return V.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return di(e).J({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=wn(i[1]);s.push(c)}else a.done()}).next(()=>{se(s.length===0)})})}containsKey(e,t){return $E(e,this.userId,t)}Nn(e){return KE(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function $E(n,e,t){const r=Nc(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return di(n).J({range:i,H:!0},(a,c,l)=>{const[h,f,m]=a;h===e&&f===s&&(o=!0),l.done()}).next(()=>o)}function Er(n){return ht(n,"mutations")}function di(n){return ht(n,"documentMutations")}function KE(n){return ht(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new qs(0)}static kn(){return new qs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new qs(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>ie.fromTimestamp(new He(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>oi(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(se(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return oi(e).J((o,a)=>{const c=Oo(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>V.waitFor(i)).next(()=>s)}forEachTarget(e,t){return oi(e).J((r,s)=>{const i=Oo(s);t(i)})}qn(e){return e_(e).get("targetGlobalKey").next(t=>(se(t!==null),t))}Qn(e,t){return e_(e).put("targetGlobalKey",t)}Kn(e,t){return oi(e).put(BE(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Ms(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return oi(e).J({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const l=Oo(a);Va(t,l.target)&&(i=l,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Nr(e);return t.forEach(o=>{const a=Nt(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),V.waitFor(s)}removeMatchingKeys(e,t,r){const s=Nr(e);return V.forEach(t,i=>{const o=Nt(i.path);return V.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Nr(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Nr(e);let i=_e();return s.J({range:r,H:!0},(o,a,c)=>{const l=wn(o[1]),h=new X(l);i=i.add(h)}).next(()=>i)}containsKey(e,t){const r=Nt(t.path),s=IDBKeyRange.bound([r],[NI(r)],!1,!0);let i=0;return Nr(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,a],c,l)=>{o!==0&&(i++,l.done())}).next(()=>i>0)}ot(e,t){return oi(e).get(t).next(r=>r?Oo(r):null)}}function oi(n){return ht(n,"targets")}function e_(n){return ht(n,"targetGlobal")}function Nr(n){return ht(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_([n,e],[t,r]){const s=pe(n,t);return s===0?pe(e,r):s}class ZV{constructor(e){this.Un=e,this.buffer=new Oe(t_),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();t_(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){$("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rs(t)?$("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ns(t)}await this.Hn(3e5)})}}class ek{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(jt.oe);const r=new ZV(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Zg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zg):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,o,a,c,l;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,t))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(l=Date.now(),ui()<=Ee.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(l-c)+`ms
Total Duration: ${l-h}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function HE(n,e){return new ek(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,t){this.db=e,this.garbageCollector=HE(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return _c(e,r)}removeReference(e,t,r){return _c(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return _c(e,t)}nr(e,t){return function(s,i){let o=!1;return KE(s).Y(a=>$E(s,a,i).next(c=>(c&&(o=!0),V.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,a)=>{if(a<=t){const c=this.nr(e,o).next(l=>{if(!l)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ie.min()),Nr(e).delete(function(f){return[0,Nt(f.path)]}(o))))});s.push(c)}}).next(()=>V.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return _c(e,t)}tr(e,t){const r=Nr(e);let s,i=jt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(i!==jt.oe&&t(new X(wn(s)),i),i=l,s=c):i=jt.oe}).next(()=>{i!==jt.oe&&t(new X(wn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function _c(n,e){return Nr(n).put(function(r,s){return{targetId:0,path:Nt(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(){this.changes=new ur(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return gs(e).put(r)}removeEntry(e,t,r){return gs(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],hu(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Ge.newInvalidDocument(t);return gs(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(So(t))},(s,i)=>{r=this.ir(t,i)}).next(()=>r)}sr(e,t){let r={size:0,document:Ge.newInvalidDocument(t)};return gs(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(So(t))},(s,i)=>{r={document:this.ir(t,i),size:fu(i)}}).next(()=>r)}getEntries(e,t){let r=$t();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,t){let r=$t(),s=new qe(X.comparator);return this._r(e,t,(i,o)=>{const a=this.ir(i,o);r=r.insert(i,a),s=s.insert(i,fu(o))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return V.resolve();let s=new Oe(s_);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(So(s.first()),So(s.last())),o=s.getIterator();let a=o.getNext();return gs(e).J({index:"documentKeyIndex",range:i},(c,l,h)=>{const f=X.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&s_(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?h.$(So(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),hu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return gs(e).U(IDBKeyRange.bound(a,c,!0)).next(l=>{i==null||i.incrementDocumentReadCount(l.length);let h=$t();for(const f of l){const m=this.ir(X.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(xa(t,m)||s.has(m.key))&&(h=h.insert(m.key,m))}return h})}getAllFromCollectionGroup(e,t,r,s){let i=$t();const o=r_(t,r),a=r_(t,Yt.max());return gs(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,h)=>{const f=this.ir(X.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(f.key,f),i.size===s&&h.done()}).next(()=>i)}newChangeBuffer(e){return new rk(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return n_(e).get("remoteDocumentGlobalKey").next(t=>(se(!!t),t))}rr(e,t){return n_(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=jV(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(ie.min())))return r}return Ge.newInvalidDocument(e)}}function QE(n){return new nk(n)}class rk extends WE{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new ur(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new Oe((i,o)=>pe(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=jg(this.cr.serializer,o);s=s.add(i.path.popLast());const l=fu(c);r+=l-a.size,t.push(this.cr.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=jg(this.cr.serializer,o.convertToNoDocument(ie.min()));t.push(this.cr.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,r)),V.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function n_(n){return ht(n,"remoteDocumentGlobal")}function gs(n){return ht(n,"remoteDocumentsV14")}function So(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function r_(n,e){const t=e.documentKey.path.toArray();return[n,hu(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function s_(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=pe(t[i],r[i]),s)return s;return s=pe(t.length,r.length),s||(s=pe(t[t.length-2],r[r.length-2]),s||pe(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Jo(r.mutation,s,Gt.empty(),He.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,t,r=_e()){const s=An();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=xo();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=An();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,_e()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=$t();const o=Qo(),a=function(){return Qo()}();return t.forEach((c,l)=>{const h=r.get(l.key);s.has(l.key)&&(h===void 0||h.mutation instanceof lr)?i=i.insert(l.key,l):h!==void 0?(o.set(l.key,h.mutation.getFieldMask()),Jo(h.mutation,l,h.mutation.getFieldMask(),He.now())):o.set(l.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,h)=>o.set(l,h)),t.forEach((l,h)=>{var f;return a.set(l,new sk(h,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Qo();let s=new qe((o,a)=>o-a),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let h=r.get(c)||Gt.empty();h=a.applyToLocalView(l,h),r.set(c,h);const f=(s.get(a.batchId)||_e()).add(c);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,h=c.value,f=dE();h.forEach(m=>{if(!i.has(m)){const g=vE(t.get(m),r.get(m));g!==null&&f.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(An());let a=-1,c=i;return o.next(l=>V.forEach(l,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?V.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,_e())).next(h=>({batchId:a,changes:hE(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(r=>{let s=xo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=xo();return this.indexManager.getCollectionParents(e,i).next(a=>V.forEach(a,c=>{const l=function(f,m){return new cr(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,l)=>{const h=l.getKey();o.get(h)===null&&(o=o.insert(h,Ge.newInvalidDocument(h)))});let a=xo();return o.forEach((c,l)=>{const h=i.get(c);h!==void 0&&Jo(h.mutation,l,Gt.empty(),He.now()),xa(t,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return V.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:it(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Xd(s.bundledQuery),readTime:it(s.readTime)}}(t)),V.resolve()}}/**
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
 */class ok{constructor(){this.overlays=new qe(X.comparator),this.Ir=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=An();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=An(),i=t.length+1,o=new X(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new qe((l,h)=>l-h);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let h=i.get(l.largestBatchId);h===null&&(h=An(),i=i.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=An(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,h)=>a.set(l,h)),!(a.size()>=s)););return V.resolve(a)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Qd(t,r));let i=this.Ir.get(t);i===void 0&&(i=_e(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.Tr=new Oe(dt.Er),this.dr=new Oe(dt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new dt(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new dt(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new X(new Te([])),r=new dt(t,e),s=new dt(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new X(new Te([])),r=new dt(t,e),s=new dt(t,e+1);let i=_e();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new dt(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return X.comparator(e.key,t.key)||pe(e.wr,t.wr)}static Ar(e,t){return pe(e.wr,t.wr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Oe(dt.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Hd(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new dt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,t){return V.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new dt(t,0),s=new dt(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Oe(pe);return t.forEach(s=>{const i=new dt(s,0),o=new dt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new dt(new X(i),0);let a=new Oe(pe);return this.br.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.wr)),!0)},o),V.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){se(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(t.mutations,s=>{const i=new dt(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new dt(t,0),s=this.br.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.Mr=e,this.docs=function(){return new qe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(t))}getEntries(e,t){let r=$t();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ge.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=$t();const o=t.path,a=new X(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:h}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Ud(MI(h),r)<=0||(s.has(h.key)||xa(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ne()}Or(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new lk(this)}getSize(e){return V.resolve(this.size)}}class lk extends WE{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.persistence=e,this.Nr=new ur(t=>Ms(t),Va),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new tf,this.targetCount=0,this.kr=qs.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),V.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new qs(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Kn(t),V.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t){this.qr={},this.overlays={},this.Qr=new jt(0),this.Kr=!1,this.Kr=!0,this.$r=new ak,this.referenceDelegate=e(this),this.Ur=new hk(this),this.indexManager=new JV,this.remoteDocumentCache=function(s){return new uk(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new UE(t),this.Gr=new ik(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ok,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new ck(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const s=new dk(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class dk extends FI{constructor(e){super(),this.currentSequenceNumber=e}}class sl{constructor(e){this.persistence=e,this.Jr=new tf,this.Yr=null}static Zr(e){return new sl(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),V.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=X.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,ie.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return V.or([()=>V.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}class pu{constructor(e,t){this.persistence=e,this.ti=new ur(r=>Nt(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=HE(this,t)}static Zr(e,t){return new pu(e,t)}zr(){}jr(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Yn(e){const t=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}Zn(e,t){return V.forEach(this.ti,(r,s)=>this.nr(e,r,s).next(i=>i?V.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Or(e,o=>this.nr(e,o,t).next(a=>{a||(r++,i.removeEntry(o,ie.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ti.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ti.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.ti.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.ti.set(t,e.currentSequenceNumber),V.resolve()}Wr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Mc(e.data.value)),t}nr(e,t,r){return V.or([()=>this.persistence.Hr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ti.get(t);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.serializer=e}O(e,t,r,s){const i=new Qu("createOrUpgrade",t);r<1&&s>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",yg,{unique:!0}),c.createObjectStore("documentMutations")}(e),i_(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=V.resolve();return r<3&&s>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),i_(e)),o=o.next(()=>function(c){const l=c.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ie.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",h)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(c,l){return l.store("mutations").U().next(h=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",yg,{unique:!0});const f=l.store("mutations"),m=h.map(g=>f.put(g));return V.waitFor(m)})}(e,i))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(c){const l=c.createObjectStore("documentOverlays",{keyPath:JD});l.createIndex("collectionPathOverlayIndex",YD,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",XD,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(c){const l=c.createObjectStore("remoteDocumentsV14",{keyPath:UD});l.createIndex("documentKeyIndex",BD),l.createIndex("collectionGroupIndex",qD)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:zD}).createIndex("sequenceNumberIndex",HD,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:WD}).createIndex("documentKeyIndex",QD,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(c){c.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=fu(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>V.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>V.forEach(a,c=>{se(c.userId===i.userId);const l=ws(this.serializer,c);return GE(e,i.userId,l).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,a)=>{const c=new Te(o),l=function(f){return[0,Nt(f)]}(c);i.push(t.get(l).next(h=>h?V.resolve():(f=>t.put({targetId:0,path:Nt(f),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>V.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:KD});const r=t.store("collectionParents"),s=new ef,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Nt(c)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const c=new Te(o);return i(c.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,c],l)=>{const h=wn(a);return i(h.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const i=Oo(s),o=BE(this.serializer,i);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((i,o)=>{const a=t.store("remoteDocumentsV14"),c=function(f){return f.document?new X(Te.fromString(f.document.name).popFirst(5)):f.noDocument?X.fromSegments(f.noDocument.path):f.unknownDocument?X.fromSegments(f.unknownDocument.path):ne()}(o).path.toArray(),l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>V.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=QE(this.serializer),i=new nf(sl.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(c=>{var l;let h=(l=a.get(c.userId))!==null&&l!==void 0?l:_e();ws(this.serializer,c).keys().forEach(f=>h=h.add(f)),a.set(c.userId,h)}),V.forEach(a,(c,l)=>{const h=new ft(l),f=nl.lt(this.serializer,h),m=i.getIndexManager(h),g=rl.lt(h,this.serializer,m,i.referenceDelegate);return new JE(s,g,f,m).recalculateAndSaveOverlaysForDocumentKeys(new Oh(t,jt.oe),c).next()})})}}function i_(n){n.createObjectStore("targetDocuments",{keyPath:GD}).createIndex("documentTargetsIndex",$D,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",jD,{unique:!0}),n.createObjectStore("targetGlobal")}const th="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class rf{constructor(e,t,r,s,i,o,a,c,l,h,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=i,this.window=o,this.document=a,this.ci=l,this.li=h,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!rf.D())throw new G(M.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new tk(this,s),this.Ai=t+"main",this.serializer=new UE(c),this.Ri=new Pn(this.Ai,this.hi,new fk(this.serializer)),this.$r=new $V,this.Ur=new XV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=QE(this.serializer),this.Gr=new GV,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&st("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new G(M.FAILED_PRECONDITION,th);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new jt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>yc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(rs(e))return $("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return $("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Po(e).get("owner").next(t=>V.resolve(this.vi(t)))}Ci(e){return yc(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ht(t,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return V.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?V.resolve(!0):Po(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new G(M.FAILED_PRECONDITION,th);return!1}}return!(!this.networkEnabled||!this.inForeground)||yc(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&$("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Oh(e,jt.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>yc(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return rl.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new YV(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return nl.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){$("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(c){return c===17?tV:c===16?eV:c===15?qd:c===14?$I:c===13?GI:c===12?ZD:c===11?jI:void ne()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,a=>(o=new Oh(a,this.Qr?this.Qr.next():jt.oe),t==="readwrite-primary"?this.wi(o).next(c=>!!c||this.Si(o)).next(c=>{if(!c)throw st(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new G(M.FAILED_PRECONDITION,LI);return r(o)}).next(c=>this.Di(o).next(()=>c)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return Po(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new G(M.FAILED_PRECONDITION,th)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Po(e).put("owner",t)}static D(){return Pn.D()}bi(e){const t=Po(e);return t.get("owner").next(r=>this.vi(r)?($("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):V.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(st(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Lv()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return $("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return st("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){st("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Po(n){return ht(n,"owner")}function yc(n){return ht(n,"clientMetadata")}function sf(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=_e(),s=_e();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new of(e,t.fromCache,r,s)}}/**
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
 */class pk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class YE{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Lv()?8:UI(lt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new pk;return this.Xi(e,t,o).next(a=>{if(i.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(ui()<=Ee.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",li(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(ui()<=Ee.DEBUG&&$("QueryEngine","Query:",li(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ui()<=Ee.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",li(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ot(t))):V.resolve())}Yi(e,t){if(Vg(t))return V.resolve(null);let r=Ot(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=uu(t,null,"F"),r=Ot(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ts(t,a);return this.ns(t,l,o,c.readTime)?this.Yi(e,uu(t,null,"F")):this.rs(e,l,t,c)}))})))}Zi(e,t,r,s){return Vg(t)||s.isEqual(ie.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?V.resolve(null):(ui()<=Ee.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),li(t)),this.rs(e,o,t,OI(s,-1)).next(a=>a))})}ts(e,t){let r=new Oe(uE(e));return t.forEach((s,i)=>{xa(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return ui()<=Ee.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",li(t)),this.Ji.getDocumentsMatchingQuery(e,t,Yt.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new qe(pe),this._s=new ur(i=>Ms(i),Va),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JE(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function XE(n,e,t,r){return new mk(n,e,t,r)}async function ZE(n,e){const t=Q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=_e();for(const l of s){o.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}for(const l of i){a.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(r,c).next(l=>({hs:l,removedBatchIds:o,addedBatchIds:a}))})})}function gk(n,e){const t=Q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,l,h){const f=l.batch,m=f.keys();let g=V.resolve();return m.forEach(R=>{g=g.next(()=>h.getEntry(c,R)).next(P=>{const C=l.docVersions.get(R);se(C!==null),P.version.compareTo(C)<0&&(f.applyToRemoteDocument(P,l),P.isValidDocument()&&(P.setReadTime(l.commitVersion),h.addEntry(P)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=_e();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function eT(n){const e=Q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function _k(n,e){const t=Q(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=s.get(f);if(!m)return;a.push(t.Ur.removeMatchingKeys(i,h.removedDocuments,f).next(()=>t.Ur.addMatchingKeys(i,h.addedDocuments,f)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Xe.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(f,g),function(P,C,L){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(m,g,h)&&a.push(t.Ur.updateTargetData(i,g))});let c=$t(),l=_e();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(tT(i,o,e.documentUpdates).next(h=>{c=h.Ps,l=h.Is})),!r.isEqual(ie.min())){const h=t.Ur.getLastRemoteSnapshotVersion(i).next(f=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return V.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(t.os=s,i))}function tT(n,e,t){let r=_e(),s=_e();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=$t();return t.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ie.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function yk(n,e){const t=Q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ui(n,e){const t=Q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Bi(n,e,t){const r=Q(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!rs(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function mu(n,e,t){const r=Q(n);let s=ie.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,h){const f=Q(c),m=f._s.get(h);return m!==void 0?V.resolve(f.os.get(m)):f.Ur.getTargetData(l,h)}(r,o,Ot(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:ie.min(),t?i:_e())).next(a=>(sT(r,cE(e),a),{documents:a,Ts:i})))}function nT(n,e){const t=Q(n),r=Q(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function rT(n,e){const t=Q(n),r=t.us.get(e)||ie.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,OI(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(sT(t,e,s),s))}function sT(n,e,t){let r=n.us.get(e)||ie.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}async function vk(n,e,t,r){const s=Q(n);let i=_e(),o=$t();for(const l of t){const h=e.Es(l.metadata.name);l.document&&(i=i.add(h));const f=e.ds(l);f.setReadTime(e.As(l.metadata.readTime)),o=o.insert(h,f)}const a=s.cs.newChangeBuffer({trackRemovals:!0}),c=await Ui(s,function(h){return Ot(Qi(Te.fromString(`__bundle__/docs/${h}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",l=>tT(l,a,o).next(h=>(a.apply(l),h)).next(h=>s.Ur.removeMatchingKeysForTargetId(l,c.targetId).next(()=>s.Ur.addMatchingKeys(l,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(l,h.Ps,h.Is)).next(()=>h.Ps)))}async function Ik(n,e,t=_e()){const r=await Ui(n,Ot(Xd(e.bundledQuery))),s=Q(n);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=it(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.Gr.saveNamedQuery(i,e);const a=r.withResumeToken(Xe.EMPTY_BYTE_STRING,o);return s.os=s.os.insert(a.targetId,a),s.Ur.updateTargetData(i,a).next(()=>s.Ur.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.Ur.addMatchingKeys(i,t,r.targetId)).next(()=>s.Gr.saveNamedQuery(i,e))})}function o_(n,e){return`firestore_clients_${n}_${e}`}function a_(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function nh(n,e){return`firestore_targets_${n}_${e}`}class gu{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Rs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new G(s.error.code,s.error.message))),o?new gu(e,t,s.state,i):(st("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Yo{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new G(r.error.code,r.error.message))),i?new Yo(e,r.state,s):(st("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class _u{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=$d();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=BI(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new _u(e,i):(st("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class af{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new af(t.clientId,t.onlineState):(st("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Qh{constructor(){this.activeTargetIds=$d()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rh{constructor(e,t,r,s,i){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new qe(pe),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=o_(this.persistenceKey,this.ps),this.vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Qh),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Os=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(o_(this.persistenceKey,r));if(s){const i=_u.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(nh(this.persistenceKey,e));if(s){const i=Yo.Rs(e,s);i&&(r=i.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(nh(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return $("SharedClientState","READ",e,t),t}setItem(e,t){$("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){$("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if($("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void st("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(i){let o=jt.oe;if(i!=null)try{const a=JSON.parse(i);se(typeof a=="number"),o=a}catch(a){st("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==jt.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const s=new gu(this.currentUser,e,t,r),i=a_(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=a_(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const s=nh(this.persistenceKey,e),i=new Yo(e,t,r);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return _u.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return gu.Rs(new ft(i),s,t)}Ys(e,t){const r=this.Ms.exec(e),s=Number(r[1]);return Yo.Rs(s,t)}Ls(e){return af.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);$("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=$d();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class iT{constructor(){this.so=new Qh,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Qh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ek{_o(e){}shutdown(){}}/**
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
 */class c_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vc=null;function sh(){return vc===null?vc=function(){return 268435456+Math.round(2147483648*Math.random())}():vc++,"0x"+vc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection";class Ak extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const a=sh(),c=this.xo(t,r.toUriEncodedString());$("RestConnection",`Sending RPC '${t}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(l,i,o),this.No(t,c,l,s).then(h=>($("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw Jt("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",c,"request:",s),h})}Lo(t,r,s,i,o,a){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=Tk[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=sh();return new Promise((o,a)=>{const c=new RI;c.setWithCredentials(!0),c.listenOnce(SI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case xc.NO_ERROR:const h=c.getResponseJson();$(Pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case xc.TIMEOUT:$(Pt,`RPC '${e}' ${i} timed out`),a(new G(M.DEADLINE_EXCEEDED,"Request time out"));break;case xc.HTTP_ERROR:const f=c.getStatus();if($(Pt,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const R=function(C){const L=C.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(L)>=0?L:M.UNKNOWN}(g.status);a(new G(R,g.message))}else a(new G(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new G(M.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{$(Pt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);$(Pt,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",l,r,15)})}Bo(e,t,r){const s=sh(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=DI(),a=CI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=i.join("");$(Pt,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);let m=!1,g=!1;const R=new wk({Io:C=>{g?$(Pt,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(m||($(Pt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),$(Pt,`RPC '${e}' stream ${s} sending:`,C),f.send(C))},To:()=>f.close()}),P=(C,L,N)=>{C.listen(L,O=>{try{N(O)}catch(x){setTimeout(()=>{throw x},0)}})};return P(f,ko.EventType.OPEN,()=>{g||($(Pt,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),P(f,ko.EventType.CLOSE,()=>{g||(g=!0,$(Pt,`RPC '${e}' stream ${s} transport closed`),R.So())}),P(f,ko.EventType.ERROR,C=>{g||(g=!0,Jt(Pt,`RPC '${e}' stream ${s} transport errored:`,C),R.So(new G(M.UNAVAILABLE,"The operation could not be completed")))}),P(f,ko.EventType.MESSAGE,C=>{var L;if(!g){const N=C.data[0];se(!!N);const O=N,x=O.error||((L=O[0])===null||L===void 0?void 0:L.error);if(x){$(Pt,`RPC '${e}' stream ${s} received error:`,x);const z=x.status;let H=function(v){const T=ot[v];if(T!==void 0)return wE(T)}(z),w=x.message;H===void 0&&(H=M.INTERNAL,w="Unknown error status: "+z+" with message "+x.message),g=!0,R.So(new G(H,w)),f.close()}else $(Pt,`RPC '${e}' stream ${s} received:`,N),R.bo(N)}}),P(a,PI.STAT_EVENT,C=>{C.stat===xh.PROXY?$(Pt,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===xh.NOPROXY&&$(Pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(){return typeof window<"u"?window:null}function Bc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(n){return new kV(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,t,r,s,i,o,a,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new cf(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(st(t.toString()),st("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new G(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bk extends aT{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=OV(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?it(o.readTime):ie.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=$h(this.serializer),t.addTarget=function(i,o){let a;const c=o.target;if(a=au(c)?{documents:xE(i,c)}:{query:tl(i,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=SE(i,o.resumeToken);const l=jh(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(ie.min())>0){a.readTime=Fi(i,o.snapshotVersion.toTimestamp());const l=jh(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=LV(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=$h(this.serializer),t.removeTarget=e,this.a_(t)}}class Rk extends aT{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return se(!!e.streamToken),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=MV(e.writeResults,e.commitTime),r=it(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=$h(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>_a(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Gh(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(M.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Gh(t,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Pk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(st(t),this.D_=!1):$("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{is(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Q(c);l.L_.add(4),await Xi(l),l.q_.set("Unknown"),l.L_.delete(4),await Fa(l)}(this))})}),this.q_=new Pk(r,s)}}async function Fa(n){if(is(n))for(const e of n.B_)await e(!0)}async function Xi(n){for(const e of n.B_)await e(!1)}function il(n,e){const t=Q(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),hf(t)?lf(t):eo(t).r_()&&uf(t,e))}function qi(n,e){const t=Q(n),r=eo(t);t.N_.delete(e),r.r_()&&cT(t,e),t.N_.size===0&&(r.r_()?r.o_():is(t)&&t.q_.set("Unknown"))}function uf(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}eo(n).A_(e)}function cT(n,e){n.Q_.xe(e),eo(n).R_(e)}function lf(n){n.Q_=new PV({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),eo(n).start(),n.q_.v_()}function hf(n){return is(n)&&!eo(n).n_()&&n.N_.size>0}function is(n){return Q(n).L_.size===0}function uT(n){n.Q_=void 0}async function Dk(n){n.q_.set("Online")}async function Vk(n){n.N_.forEach((e,t)=>{uf(n,e)})}async function kk(n,e){uT(n),hf(n)?(n.q_.M_(e),lf(n)):n.q_.set("Unknown")}async function xk(n,e,t){if(n.q_.set("Online"),e instanceof RE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(n,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yu(n,r)}else if(e instanceof Uc?n.Q_.Ke(e):e instanceof bE?n.Q_.He(e):n.Q_.We(e),!t.isEqual(ie.min()))try{const r=await eT(n.localStore);t.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.N_.get(l);h&&i.N_.set(l,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const h=i.N_.get(c);if(!h)return;i.N_.set(c,h.withResumeToken(Xe.EMPTY_BYTE_STRING,h.snapshotVersion)),cT(i,c);const f=new Wn(h.target,c,l,h.sequenceNumber);uf(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await yu(n,r)}}async function yu(n,e,t){if(!rs(e))throw e;n.L_.add(1),await Xi(n),n.q_.set("Offline"),t||(t=()=>eT(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Fa(n)})}function lT(n,e){return e().catch(t=>yu(n,t,e))}async function Zi(n){const e=Q(n),t=Yr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Nk(e);)try{const s=await yk(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,Ok(e,s)}catch(s){await yu(e,s)}hT(e)&&dT(e)}function Nk(n){return is(n)&&n.O_.length<10}function Ok(n,e){n.O_.push(e);const t=Yr(n);t.r_()&&t.V_&&t.m_(e.mutations)}function hT(n){return is(n)&&!Yr(n).n_()&&n.O_.length>0}function dT(n){Yr(n).start()}async function Mk(n){Yr(n).p_()}async function Lk(n){const e=Yr(n);for(const t of n.O_)e.m_(t.mutations)}async function Fk(n,e,t){const r=n.O_.shift(),s=Wd.from(r,e,t);await lT(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Zi(n)}async function Uk(n,e){e&&Yr(n).V_&&await async function(r,s){if(function(o){return TE(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();Yr(r).s_(),await lT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zi(r)}}(n,e),hT(n)&&dT(n)}async function u_(n,e){const t=Q(n);t.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=is(t);t.L_.add(3),await Xi(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Fa(t)}async function Jh(n,e){const t=Q(n);e?(t.L_.delete(2),await Fa(t)):e||(t.L_.add(2),await Xi(t),t.q_.set("Unknown"))}function eo(n){return n.K_||(n.K_=function(t,r,s){const i=Q(t);return i.w_(),new bk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Dk.bind(null,n),Ro:Vk.bind(null,n),mo:kk.bind(null,n),d_:xk.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),hf(n)?lf(n):n.q_.set("Unknown")):(await n.K_.stop(),uT(n))})),n.K_}function Yr(n){return n.U_||(n.U_=function(t,r,s){const i=Q(t);return i.w_(),new Rk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Mk.bind(null,n),mo:Uk.bind(null,n),f_:Lk.bind(null,n),g_:Fk.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Zi(n)):(await n.U_.stop(),n.O_.length>0&&($("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new df(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function to(n,e){if(st("AsyncQueue",`${e}: ${n}`),rs(n))return new G(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=xo(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Ti(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ti)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.W_=new qe(X.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ji{constructor(e,t,r,s,i,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ji(e,t,Ti.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ka(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class qk{constructor(){this.queries=h_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=Q(t),i=s.queries;s.queries=h_(),i.forEach((o,a)=>{for(const c of a.j_)c.onError(r)})})(this,new G(M.ABORTED,"Firestore shutting down"))}}function h_(){return new ur(n=>aE(n),ka)}async function ff(n,e){const t=Q(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Bk,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=to(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&mf(t)}async function pf(n,e){const t=Q(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function jk(n,e){const t=Q(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&mf(t)}function Gk(n,e,t){const r=Q(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function mf(n){n.Y_.forEach(e=>{e.next()})}var Yh,d_;(d_=Yh||(Yh={})).ea="default",d_.Cache="cache";class gf{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ji(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Yh.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.serializer=e}Es(e){return Cn(this.serializer,e)}ds(e){return e.metadata.exists?kE(this.serializer,e.document,!1):Ge.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return it(e)}}class Kk{constructor(e,t,r){this.ca=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=fT(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const r=Te.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,r=new f_(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.Es(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||_e()).add(i);t.set(o,a)}}return t}async complete(){const e=await vk(this.localStore,new f_(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const r of this.queries)await Ik(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function fT(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.key=e}}class mT{constructor(e){this.key=e}}class gT{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=uE(e),this.Ra=new Ti(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new l_,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const m=s.get(h),g=xa(this.query,f)?f:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;m&&g?m.data.isEqual(g.data)?R!==P&&(r.track({type:3,doc:g}),C=!0):this.ga(m,g)||(r.track({type:2,doc:g}),C=!0,(c&&this.Aa(g,c)>0||l&&this.Aa(g,l)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),C=!0):m&&!g&&(r.track({type:1,doc:m}),C=!0,(c||l)&&(a=!0)),C&&(g?(o=o.add(g),i=P?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(g,R){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return P(g)-P(R)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),s=s!=null&&s;const a=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,l=c!==this.Ea;return this.Ea=c,o.length!==0||l?{snapshot:new ji(this.query,e.Ra,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new l_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new mT(r))}),this.da.forEach(r=>{e.has(r)||t.push(new pT(r))}),t}ba(e){this.Ta=e.Ts,this.da=_e();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return ji.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zk{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Hk{constructor(e){this.key=e,this.va=!1}}class Wk{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ur(a=>aE(a),ka),this.Ma=new Map,this.xa=new Set,this.Oa=new qe(X.comparator),this.Na=new Map,this.La=new tf,this.Ba={},this.ka=new Map,this.qa=qs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Qk(n,e,t=!0){const r=ol(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await _T(r,e,t,!0),s}async function Jk(n,e){const t=ol(n);await _T(t,e,!0,!1)}async function _T(n,e,t,r){const s=await Ui(n.localStore,Ot(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return r&&(a=await _f(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&il(n.remoteStore,s),a}async function _f(n,e,t,r,s){n.Ka=(f,m,g)=>async function(P,C,L,N){let O=C.view.ma(L);O.ns&&(O=await mu(P.localStore,C.query,!1).then(({documents:w})=>C.view.ma(w,O)));const x=N&&N.targetChanges.get(C.targetId),z=N&&N.targetMismatches.get(C.targetId)!=null,H=C.view.applyChanges(O,P.isPrimaryClient,x,z);return Xh(P,C.targetId,H.wa),H.snapshot}(n,f,m,g);const i=await mu(n.localStore,e,!0),o=new gT(e,i.Ts),a=o.ma(i.documents),c=Ma.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);Xh(n,t,l.wa);const h=new zk(e,t,o);return n.Fa.set(e,h),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),l.snapshot}async function Yk(n,e,t){const r=Q(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ka(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&qi(r.remoteStore,s.targetId),Gi(r,s.targetId)}).catch(ns)):(Gi(r,s.targetId),await Bi(r.localStore,s.targetId,!0))}async function Xk(n,e){const t=Q(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),qi(t.remoteStore,r.targetId))}async function Zk(n,e,t){const r=Ef(n);try{const s=await function(o,a){const c=Q(o),l=He.now(),h=a.reduce((g,R)=>g.add(R.key),_e());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let R=$t(),P=_e();return c.cs.getEntries(g,h).next(C=>{R=C,R.forEach((L,N)=>{N.isValidDocument()||(P=P.add(L))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,R)).next(C=>{f=C;const L=[];for(const N of a){const O=bV(N,f.get(N.key).overlayedDocument);O!=null&&L.push(new lr(N.key,O,JI(O.value.mapValue),ze.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,L,a)}).next(C=>{m=C;const L=C.applyToLocalDocumentSet(f,P);return c.documentOverlayCache.saveOverlays(g,C.batchId,L)})}).then(()=>({batchId:m.batchId,changes:hE(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Ba[o.currentUser.toKey()];l||(l=new qe(pe)),l=l.insert(a,c),o.Ba[o.currentUser.toKey()]=l}(r,s.batchId,t),await hr(r,s.changes),await Zi(r.remoteStore)}catch(s){const i=to(s,"Failed to persist write");t.reject(i)}}async function yT(n,e){const t=Q(n);try{const r=await _k(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?se(o.va):s.removedDocuments.size>0&&(se(o.va),o.va=!1))}),await hr(t,r,e)}catch(r){await ns(r)}}function p_(n,e,t){const r=Q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Q(o);c.onlineState=a;let l=!1;c.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(l=!0)}),l&&mf(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ex(n,e,t){const r=Q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new qe(X.comparator);o=o.insert(i,Ge.newNoDocument(i,ie.min()));const a=_e().add(i),c=new Oa(ie.min(),new Map,new qe(pe),o,a);await yT(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),If(r)}else await Bi(r.localStore,e,!1).then(()=>Gi(r,e,t)).catch(ns)}async function tx(n,e){const t=Q(n),r=e.batch.batchId;try{const s=await gk(t.localStore,e);vf(t,r,null),yf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await hr(t,s)}catch(s){await ns(s)}}async function nx(n,e,t){const r=Q(n);try{const s=await function(o,a){const c=Q(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let h;return c.mutationQueue.lookupMutationBatch(l,a).next(f=>(se(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(l,f))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h)).next(()=>c.localDocuments.getDocuments(l,h))})}(r.localStore,e);vf(r,e,t),yf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await hr(r,s)}catch(s){await ns(s)}}async function rx(n,e){const t=Q(n);is(t.remoteStore)||$("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=Q(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(r===-1)return void e.resolve();const s=t.ka.get(r)||[];s.push(e),t.ka.set(r,s)}catch(r){const s=to(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function yf(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function vf(n,e,t){const r=Q(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Gi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||vT(n,r)})}function vT(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(qi(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),If(n))}function Xh(n,e,t){for(const r of t)r instanceof pT?(n.La.addReference(r.key,e),sx(n,r)):r instanceof mT?($("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||vT(n,r.key)):ne()}function sx(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||($("SyncEngine","New document in limbo: "+t),n.xa.add(r),If(n))}function If(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new X(Te.fromString(e)),r=n.qa.next();n.Na.set(r,new Hk(t)),n.Oa=n.Oa.insert(t,r),il(n.remoteStore,new Wn(Ot(Qi(t.path)),r,"TargetPurposeLimboResolution",jt.oe))}}async function hr(n,e,t){const r=Q(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,c)=>{o.push(r.Ka(c,e,t).then(l=>{var h;if((l||t)&&r.isPrimaryClient){const f=l?!l.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(l){s.push(l);const f=of.Wi(c.targetId,l);i.push(f)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,l){const h=Q(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(l,m=>V.forEach(m.$i,g=>h.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>V.forEach(m.Ui,g=>h.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!rs(f))throw f;$("LocalStore","Failed to update sequence numbers: "+f)}for(const f of l){const m=f.targetId;if(!f.fromCache){const g=h.os.get(m),R=g.snapshotVersion,P=g.withLastLimboFreeSnapshotVersion(R);h.os=h.os.insert(m,P)}}}(r.localStore,i))}async function ix(n,e){const t=Q(n);if(!t.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await ZE(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(c=>{c.reject(new G(M.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hr(t,r.hs)}}function ox(n,e){const t=Q(n),r=t.Na.get(e);if(r&&r.va)return _e().add(r.key);{let s=_e();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const a=t.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}async function ax(n,e){const t=Q(n),r=await mu(t.localStore,e.query,!0),s=e.view.ba(r);return t.isPrimaryClient&&Xh(t,e.targetId,s.wa),s}async function cx(n,e){const t=Q(n);return rT(t.localStore,e).then(r=>hr(t,r))}async function ux(n,e,t,r){const s=Q(n),i=await function(a,c){const l=Q(a),h=Q(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",f=>h.Mn(f,c).next(m=>m?l.localDocuments.getDocuments(f,m):V.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Zi(s.remoteStore):t==="acknowledged"||t==="rejected"?(vf(s,e,r||null),yf(s,e),function(a,c){Q(Q(a).mutationQueue).On(c)}(s.localStore,e)):ne(),await hr(s,i)):$("SyncEngine","Cannot apply mutation batch with id: "+e)}async function lx(n,e){const t=Q(n);if(ol(t),Ef(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await m_(t,r.toArray());t.Qa=!0,await Jh(t.remoteStore,!0);for(const i of s)il(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const r=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Gi(t,o),Bi(t.localStore,o,!0))),qi(t.remoteStore,o)}),await s,await m_(t,r),function(o){const a=Q(o);a.Na.forEach((c,l)=>{qi(a.remoteStore,l)}),a.La.pr(),a.Na=new Map,a.Oa=new qe(X.comparator)}(t),t.Qa=!1,await Jh(t.remoteStore,!1)}}async function m_(n,e,t){const r=Q(n),s=[],i=[];for(const o of e){let a;const c=r.Ma.get(o);if(c&&c.length!==0){a=await Ui(r.localStore,Ot(c[0]));for(const l of c){const h=r.Fa.get(l),f=await ax(r,h);f.snapshot&&i.push(f.snapshot)}}else{const l=await nT(r.localStore,o);a=await Ui(r.localStore,l),await _f(r,IT(l),o,!1,a.resumeToken)}s.push(a)}return r.Ca.d_(i),s}function IT(n){return sE(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function hx(n){return function(t){return Q(Q(t).persistence).Qi()}(Q(n).localStore)}async function dx(n,e,t,r){const s=Q(n);if(s.Qa)return void $("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await rT(s.localStore,cE(i[0])),a=Oa.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Xe.EMPTY_BYTE_STRING);await hr(s,o,a);break}case"rejected":await Bi(s.localStore,e,!0),Gi(s,e,r);break;default:ne()}}async function fx(n,e,t){const r=ol(n);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){$("SyncEngine","Adding an already active target "+s);continue}const i=await nT(r.localStore,s),o=await Ui(r.localStore,i);await _f(r,IT(i),o.targetId,!1,o.resumeToken),il(r.remoteStore,o)}for(const s of t)r.Ma.has(s)&&await Bi(r.localStore,s,!1).then(()=>{qi(r.remoteStore,s),Gi(r,s)}).catch(ns)}}function ol(n){const e=Q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=yT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ox.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ex.bind(null,e),e.Ca.d_=jk.bind(null,e.eventManager),e.Ca.$a=Gk.bind(null,e.eventManager),e}function Ef(n){const e=Q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nx.bind(null,e),e}function px(n,e,t){const r=Q(n);(async function(i,o,a){try{const c=await o.getMetadata();if(await function(g,R){const P=Q(g),C=it(R.createTime);return P.persistence.runTransaction("hasNewerBundle","readonly",L=>P.Gr.getBundleMetadata(L,R.id)).then(L=>!!L&&L.createTime.compareTo(C)>=0)}(i.localStore,c))return await o.close(),a._completeWith(function(g){return{taskState:"Success",documentsLoaded:g.totalDocuments,bytesLoaded:g.totalBytes,totalDocuments:g.totalDocuments,totalBytes:g.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(fT(c));const l=new Kk(c,i.localStore,o.serializer);let h=await o.Ua();for(;h;){const m=await l.la(h);m&&a._updateProgress(m),h=await o.Ua()}const f=await l.complete();return await hr(i,f.Ia,void 0),await function(g,R){const P=Q(g);return P.persistence.runTransaction("Save bundle","readwrite",C=>P.Gr.saveBundleMetadata(C,R))}(i.localStore,c),a._completeWith(f.progress),Promise.resolve(f.Pa)}catch(c){return Jt("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,t).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class Xr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=La(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return XE(this.persistence,new YE,e.initialUser,this.serializer)}Ga(e){return new nf(sl.Zr,this.serializer)}Wa(e){return new iT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xr.provider={build:()=>new Xr};class mx extends Xr{constructor(e){super(),this.cacheSizeBytes=e}ja(e,t){se(this.persistence.referenceDelegate instanceof pu);const r=this.persistence.referenceDelegate.garbageCollector;return new zE(r,e.asyncQueue,t)}Ga(e){const t=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new nf(r=>pu.Zr(r,t),this.serializer)}}class Tf extends Xr{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Ef(this.Ja.syncEngine),await Zi(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return XE(this.persistence,new YE,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new zE(r,e.asyncQueue,t)}Ha(e,t){const r=new MD(t,this.persistence);return new OD(e.asyncQueue,r)}Ga(e){const t=sf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new rf(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,oT(),Bc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new iT}}class ET extends Tf{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof rh&&(this.sharedClientState.syncEngine={no:ux.bind(null,t),ro:dx.bind(null,t),io:fx.bind(null,t),Qi:hx.bind(null,t),eo:cx.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await lx(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=oT();if(!rh.D(t))throw new G(M.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=sf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new rh(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Zr{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>p_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ix.bind(null,this.syncEngine),await Jh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qk}()}createDatastore(e){const t=La(e.databaseInfo.databaseId),r=function(i){return new Ak(i)}(e.databaseInfo);return function(i,o,a,c){return new Sk(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,a){return new Ck(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>p_(this.syncEngine,t,0),function(){return c_.D()?new c_:new Ek}())}createSyncEngine(e,t){return function(s,i,o,a,c,l,h){const f=new Wk(s,i,o,a,c,l);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Q(s);$("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Xi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Zr.provider={build:()=>new Zr};function g_(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class al{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):st("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new pt,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),r=Number(t);isNaN(r)&&this.ru(`length string (${t}) is not valid number`);const s=await this.iu(r);return new $k(JSON.parse(s),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new G(M.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(s,i){const o=Q(s),a={documents:i.map(f=>ga(o.serializer,f))},c=await o.Lo("BatchGetDocuments",o.serializer.databaseId,Te.emptyPath(),a,i.length),l=new Map;c.forEach(f=>{const m=NV(o.serializer,f);l.set(m.key.toString(),m)});const h=[];return i.forEach(f=>{const m=l.get(f.toString());se(!!m),h.push(m)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Yi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=X.fromPath(r);this.mutations.push(new zd(s,this.precondition(s)))}),await async function(r,s){const i=Q(r),o={writes:s.map(a=>_a(i.serializer,a))};await i.Mo("Commit",i.serializer.databaseId,Te.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ne();t=ie.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new G(M.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ie.min())?ze.exists(!1):ze.updateTime(t):ze.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ie.min()))throw new G(M.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ze.updateTime(t)}return ze.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class yx{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this._u=r.maxAttempts,this.t_=new cf(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new _x(this.datastore),t=this.cu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.lu(s)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const t=this.updateFunction(e);return!Da(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!TE(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=Fd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{$("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=to(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ih(n,e){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ZE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function __(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wf(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>u_(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>u_(e.remoteStore,s)),n._onlineComponents=e}async function wf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await ih(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Jt("Error using user provided cache. Falling back to memory cache: "+t),await ih(n,new Xr)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await ih(n,new Xr);return n._offlineComponents}async function cl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await __(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await __(n,new Zr))),n._onlineComponents}function TT(n){return wf(n).then(e=>e.persistence)}function no(n){return wf(n).then(e=>e.localStore)}function wT(n){return cl(n).then(e=>e.remoteStore)}function Af(n){return cl(n).then(e=>e.syncEngine)}function AT(n){return cl(n).then(e=>e.datastore)}async function $i(n){const e=await cl(n),t=e.eventManager;return t.onListen=Qk.bind(null,e.syncEngine),t.onUnlisten=Yk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Jk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Xk.bind(null,e.syncEngine),t}function Ix(n){return n.asyncQueue.enqueue(async()=>{const e=await TT(n),t=await wT(n);return e.setNetworkEnabled(!0),function(s){const i=Q(s);return i.L_.delete(0),Fa(i)}(t)})}function Ex(n){return n.asyncQueue.enqueue(async()=>{const e=await TT(n),t=await wT(n);return e.setNetworkEnabled(!1),async function(s){const i=Q(s);i.L_.add(0),await Xi(i),i.q_.set("Offline")}(t)})}function Tx(n,e){const t=new pt;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await function(l,h){const f=Q(l);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,h))}(s,i);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new G(M.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=to(a,`Failed to get document '${i} from cache`);o.reject(c)}}(await no(n),e,t)),t.promise}function bT(n,e,t={}){const r=new pt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const h=new al({next:m=>{h.Za(),o.enqueueAndForget(()=>pf(i,f));const g=m.docs.has(a);!g&&m.fromCache?l.reject(new G(M.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?l.reject(new G(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(m)},error:m=>l.reject(m)}),f=new gf(Qi(a.path),h,{includeMetadataChanges:!0,_a:!0});return ff(i,f)}(await $i(n),n.asyncQueue,e,t,r)),r.promise}function wx(n,e){const t=new pt;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await mu(s,i,!0),c=new gT(i,a.Ts),l=c.ma(a.documents),h=c.applyChanges(l,!1);o.resolve(h.snapshot)}catch(a){const c=to(a,`Failed to execute query '${i} against cache`);o.reject(c)}}(await no(n),e,t)),t.promise}function RT(n,e,t={}){const r=new pt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const h=new al({next:m=>{h.Za(),o.enqueueAndForget(()=>pf(i,f)),m.fromCache&&c.source==="server"?l.reject(new G(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(m)},error:m=>l.reject(m)}),f=new gf(a,h,{includeMetadataChanges:!0,_a:!0});return ff(i,f)}(await $i(n),n.asyncQueue,e,t,r)),r.promise}function Ax(n,e,t){const r=new pt;return n.asyncQueue.enqueueAndForget(async()=>{try{const s=await AT(n);r.resolve(async function(o,a,c){var l;const h=Q(o),{request:f,ut:m,parent:g}=NE(h.serializer,iE(a),c);h.connection.Fo||delete f.parent;const R=(await h.Lo("RunAggregationQuery",h.serializer.databaseId,g,f,1)).filter(C=>!!C.result);se(R.length===1);const P=(l=R[0].result)===null||l===void 0?void 0:l.aggregateFields;return Object.keys(P).reduce((C,L)=>(C[m[L]]=P[L],C),{})}(s,e,t))}catch(s){r.reject(s)}}),r.promise}function bx(n,e){const t=new al(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,i){Q(s).Y_.add(i),i.next()}(await $i(n),t)),()=>{t.Za(),n.asyncQueue.enqueueAndForget(async()=>function(s,i){Q(s).Y_.delete(i)}(await $i(n),t))}}function Rx(n,e,t,r){const s=function(o,a){let c;return c=typeof o=="string"?AE().encode(o):o,function(h,f){return new gx(h,f)}(function(h,f){if(h instanceof Uint8Array)return g_(h,f);if(h instanceof ArrayBuffer)return g_(new Uint8Array(h),f);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(t,La(e));n.asyncQueue.enqueueAndForget(async()=>{px(await Af(n),s,r)})}function Sx(n,e){return n.asyncQueue.enqueue(async()=>function(r,s){const i=Q(r);return i.persistence.runTransaction("Get named query","readonly",o=>i.Gr.getNamedQuery(o,s))}(await no(n),e))}function Px(n,e){return n.asyncQueue.enqueue(async()=>async function(r,s){const i=Q(r),o=i.indexManager,a=[];return i.persistence.runTransaction("Configure indexes","readwrite",c=>o.getFieldIndexes(c).next(l=>function(f,m,g,R,P){f=[...f],m=[...m],f.sort(g),m.sort(g);const C=f.length,L=m.length;let N=0,O=0;for(;N<L&&O<C;){const x=g(f[O],m[N]);x<0?P(f[O++]):x>0?R(m[N++]):(N++,O++)}for(;N<L;)R(m[N++]);for(;O<C;)P(f[O++])}(l,s,VD,h=>{a.push(o.addFieldIndex(c,h))},h=>{a.push(o.deleteFieldIndex(c,h))})).next(()=>V.waitFor(a)))}(await no(n),e))}function Cx(n,e){return n.asyncQueue.enqueue(async()=>function(r,s){Q(r).ss.zi=s}(await no(n),e))}function Dx(n){return n.asyncQueue.enqueue(async()=>function(t){const r=Q(t),s=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",i=>s.deleteAllFieldIndexes(i))}(await no(n)))}/**
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
 */function ST(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(n,e,t){if(!t)throw new G(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function PT(n,e,t,r){if(e===!0&&r===!0)throw new G(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function v_(n){if(!X.isDocumentKey(n))throw new G(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function I_(n){if(X.isDocumentKey(n))throw new G(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ul(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ne()}function ve(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ul(n);throw new G(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function CT(n,e){if(e<=0)throw new G(M.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ST((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ua{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new E_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new E_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kI;switch(r.type){case"firstParty":return new RD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=y_.get(t);r&&($("ComponentProvider","Removing Datastore"),y_.delete(t),r.terminate())}(this),Promise.resolve()}}function DT(n,e,t,r={}){var s;const i=(n=ve(n,Ua))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Jt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ft.MOCK_USER;else{a=Mv(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new G(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ft(l)}n._authCredentials=new wD(new VI(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mt(this.firestore,e,this._query)}}class nt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}}class hn extends mt{constructor(e,t,r){super(e,t,Qi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new X(e))}withConverter(e){return new hn(this.firestore,e,this._path)}}function Vx(n,e,...t){if(n=Se(n),bf("collection","path",e),n instanceof Ua){const r=Te.fromString(e,...t);return I_(r),new hn(n,null,r)}{if(!(n instanceof nt||n instanceof hn))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Te.fromString(e,...t));return I_(r),new hn(n.firestore,null,r)}}function kx(n,e){if(n=ve(n,Ua),bf("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new mt(n,null,function(r){return new cr(Te.emptyPath(),r)}(e))}function Xo(n,e,...t){if(n=Se(n),arguments.length===1&&(e=Fd.newId()),bf("doc","path",e),n instanceof Ua){const r=Te.fromString(e,...t);return v_(r),new nt(n,null,new X(r))}{if(!(n instanceof nt||n instanceof hn))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Te.fromString(e,...t));return v_(r),new nt(n.firestore,n instanceof hn?n.converter:null,new X(r))}}function xx(n,e){return n=Se(n),e=Se(e),(n instanceof nt||n instanceof hn)&&(e instanceof nt||e instanceof hn)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Rf(n,e){return n=Se(n),e=Se(e),n instanceof mt&&e instanceof mt&&n.firestore===e.firestore&&ka(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new cf(this,"async_queue_retry"),this.Vu=()=>{const r=Bc();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Bc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Bc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new pt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!rs(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw st("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=df.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Zh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class VT{constructor(){this._progressObserver={},this._taskCompletionResolver=new pt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=-1;class Le extends Ua{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new T_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new T_(e),this._firestoreClient=void 0,await e}}}function Ox(n,e,t){t||(t="(default)");const r=$s(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if($r(i,e))return s;throw new G(M.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new G(M.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function kT(n,e){const t=typeof n=="object"?n:Ku(),r=typeof n=="string"?n:e||"(default)",s=$s(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bd("firestore");i&&DT(s,...i)}return s}function We(n){if(n._terminated)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||xT(n),n._firestoreClient}function xT(n){var e,t,r;const s=n._freezeSettings(),i=function(a,c,l,h){return new sV(a,c,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ST(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new vx(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}function Mx(n,e){Jt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return NT(n,Zr.provider,{build:r=>new Tf(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function Lx(n){Jt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();NT(n,Zr.provider,{build:t=>new ET(t,e.cacheSizeBytes)})}function NT(n,e,t){if((n=ve(n,Le))._firestoreClient||n._terminated)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new G(M.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},xT(n)}function Fx(n){if(n._initialized&&!n._terminated)throw new G(M.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new pt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Pn.D())return Promise.resolve();const s=r+"main";await Pn.delete(s)}(sf(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Ux(n){return function(t){const r=new pt;return t.asyncQueue.enqueueAndForget(async()=>rx(await Af(t),r)),r.promise}(We(n=ve(n,Le)))}function Bx(n){return Ix(We(n=ve(n,Le)))}function qx(n){return Ex(We(n=ve(n,Le)))}function jx(n){return zP(n.app,"firestore",n._databaseId.database),n._delete()}function Gx(n,e){const t=We(n=ve(n,Le)),r=new VT;return Rx(t,n._databaseId,e,r),r}function $x(n,e){return Sx(We(n=ve(n,Le)),e).then(t=>t?new mt(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ki{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class OT{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new es(Xe.fromBase64String(e))}catch(t){throw new G(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new es(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function Kx(){return new os("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=/^__.*__$/;class Hx{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new lr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ji(e,this.data,t,this.fieldTransforms)}}class MT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new lr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function LT(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class hl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new hl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return vu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(LT(this.Cu)&&zx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Wx{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||La(e)}Qu(e,t,r,s=!1){return new hl({Cu:e,methodName:t,qu:r,path:$e.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hs(n){const e=n._freezeSettings(),t=La(n._databaseId);return new Wx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function dl(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);xf("Data must be an object, but it was:",o,r);const a=BT(r,o);let c,l;if(i.merge)c=new Gt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=ya(e,f,t);if(!o.contains(m))throw new G(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);jT(h,m)||h.push(m)}c=new Gt(h),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new Hx(new wt(a),c,l)}class qa extends as{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qa}}function FT(n,e,t){return new hl({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Sf extends as{_toFieldTransform(e){return new Na(e.path,new Mi)}isEqual(e){return e instanceof Sf}}class Pf extends as{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=FT(this,e,!0),r=this.Ku.map(i=>Ws(i,t)),s=new Ls(r);return new Na(e.path,s)}isEqual(e){return e instanceof Pf&&$r(this.Ku,e.Ku)}}class Cf extends as{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=FT(this,e,!0),r=this.Ku.map(i=>Ws(i,t)),s=new Fs(r);return new Na(e.path,s)}isEqual(e){return e instanceof Cf&&$r(this.Ku,e.Ku)}}class Df extends as{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Li(e.serializer,pE(e.serializer,this.$u));return new Na(e.path,t)}isEqual(e){return e instanceof Df&&this.$u===e.$u}}function Vf(n,e,t,r){const s=n.Qu(1,e,t);xf("Data must be an object, but it was:",s,r);const i=[],o=wt.empty();ss(r,(c,l)=>{const h=fl(e,c,t);l=Se(l);const f=s.Nu(h);if(l instanceof qa)i.push(h);else{const m=Ws(l,f);m!=null&&(i.push(h),o.set(h,m))}});const a=new Gt(i);return new MT(o,a,s.fieldTransforms)}function kf(n,e,t,r,s,i){const o=n.Qu(1,e,t),a=[ya(e,r,t)],c=[s];if(i.length%2!=0)throw new G(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(ya(e,i[m])),c.push(i[m+1]);const l=[],h=wt.empty();for(let m=a.length-1;m>=0;--m)if(!jT(l,a[m])){const g=a[m];let R=c[m];R=Se(R);const P=o.Nu(g);if(R instanceof qa)l.push(g);else{const C=Ws(R,P);C!=null&&(l.push(g),h.set(g,C))}}const f=new Gt(l);return new MT(h,f,o.fieldTransforms)}function UT(n,e,t,r=!1){return Ws(t,n.Qu(r?4:3,e))}function Ws(n,e){if(qT(n=Se(n)))return xf("Unsupported field value:",e,n),BT(n,e);if(n instanceof as)return function(r,s){if(!LT(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Ws(a,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:Fi(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fi(s.serializer,i)}}if(r instanceof ll)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof es)return{bytesValue:SE(s.serializer,r._byteString)};if(r instanceof nt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ba)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return Kd(a.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ul(r)}`)}(n,e)}function BT(n,e){const t={};return zI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(n,(r,s)=>{const i=Ws(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function qT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof He||n instanceof ll||n instanceof es||n instanceof nt||n instanceof as||n instanceof Ba)}function xf(n,e,t){if(!qT(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ul(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function ya(n,e,t){if((e=Se(e))instanceof os)return e._internalPath;if(typeof e=="string")return fl(n,e);throw vu("Field path arguments must be of type string or ",n,!1,void 0,t)}const Qx=new RegExp("[~\\*/\\[\\]]");function fl(n,e,t){if(e.search(Qx)>=0)throw vu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new os(...e.split("."))._internalPath}catch{throw vu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vu(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new G(M.INVALID_ARGUMENT,a+n+c)}function jT(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Jx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(pl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Jx extends va{data(){return super.data()}}function pl(n,e){return typeof e=="string"?fl(n,e):e instanceof os?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nf{}class ro extends Nf{}function Yx(n,e,...t){let r=[];e instanceof Nf&&r.push(e),r=r.concat(t),function(i){const o=i.filter(c=>c instanceof Qs).length,a=i.filter(c=>c instanceof so).length;if(o>1||o>0&&a>0)throw new G(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class so extends ro{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new so(e,t,r)}_apply(e){const t=this._parse(e);return KT(e._query,t),new mt(e.firestore,e.converter,qh(e._query,t))}_parse(e){const t=Hs(e.firestore);return function(i,o,a,c,l,h,f){let m;if(l.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new G(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){A_(f,h);const g=[];for(const R of f)g.push(w_(c,i,R));m={arrayValue:{values:g}}}else m=w_(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||A_(f,h),m=UT(a,o,f,h==="in"||h==="not-in");return we.create(l,h,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Xx(n,e,t){const r=e,s=pl("where",n);return so._create(s,r,t)}class Qs extends Nf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qs(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ne.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)KT(o,c),o=qh(o,c)}(e._query,t),new mt(e.firestore,e.converter,qh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Zx(...n){return n.forEach(e=>zT("or",e)),Qs._create("or",n)}function eN(...n){return n.forEach(e=>zT("and",e)),Qs._create("and",n)}class ml extends ro{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ml(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new G(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new G(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ma(i,o)}(e._query,this._field,this._direction);return new mt(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new cr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function tN(n,e="asc"){const t=e,r=pl("orderBy",n);return ml._create(r,t)}class ja extends ro{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ja(e,t,r)}_apply(e){return new mt(e.firestore,e.converter,uu(e._query,this._limit,this._limitType))}}function nN(n){return CT("limit",n),ja._create("limit",n,"F")}function rN(n){return CT("limitToLast",n),ja._create("limitToLast",n,"L")}class Ga extends ro{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Ga(e,t,r)}_apply(e){const t=$T(e,this.type,this._docOrFields,this._inclusive);return new mt(e.firestore,e.converter,function(s,i){return new cr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function sN(...n){return Ga._create("startAt",n,!0)}function iN(...n){return Ga._create("startAfter",n,!1)}class $a extends ro{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new $a(e,t,r)}_apply(e){const t=$T(e,this.type,this._docOrFields,this._inclusive);return new mt(e.firestore,e.converter,function(s,i){return new cr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,t))}}function oN(...n){return $a._create("endBefore",n,!1)}function aN(...n){return $a._create("endAt",n,!0)}function $T(n,e,t,r){if(t[0]=Se(t[0]),t[0]instanceof va)return function(i,o,a,c,l){if(!c)throw new G(M.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of Ei(i))if(f.field.isKeyField())h.push(Os(o,c.key));else{const m=c.data.field(f.field);if(Ju(m))throw new G(M.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const g=f.field.canonicalString();throw new G(M.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}h.push(m)}return new Jr(h,l)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Hs(n.firestore);return function(o,a,c,l,h,f){const m=o.explicitOrderBy;if(h.length>m.length)throw new G(M.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let R=0;R<h.length;R++){const P=h[R];if(m[R].field.isKeyField()){if(typeof P!="string")throw new G(M.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof P}`);if(!Gd(o)&&P.indexOf("/")!==-1)throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${P}' contains a slash.`);const C=o.path.child(Te.fromString(P));if(!X.isDocumentKey(C))throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const L=new X(C);g.push(Os(a,L))}else{const C=UT(c,l,P);g.push(C)}}return new Jr(g,f)}(n._query,n.firestore._databaseId,s,e,t,r)}}function w_(n,e,t){if(typeof(t=Se(t))=="string"){if(t==="")throw new G(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gd(e)&&t.indexOf("/")!==-1)throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Te.fromString(t));if(!X.isDocumentKey(r))throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Os(n,new X(r))}if(t instanceof nt)return Os(n,t._key);throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ul(t)}.`)}function A_(n,e){if(!Array.isArray(n)||n.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function KT(n,e){const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new G(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function zT(n,e){if(!(e instanceof so||e instanceof Qs))throw new G(M.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Of{convertValue(e,t="none"){switch(Wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ss(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ke(o.doubleValue));return new Ba(i)}convertGeoPoint(e){return new ll(Ke(e.latitude),Ke(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Yu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(da(e));default:return null}}convertTimestamp(e){const t=sr(e);return new He(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Te.fromString(e);se(FE(r));const s=new Hr(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||st(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class cN extends Of{constructor(e){super(),this.firestore=e}convertBytes(e){return new es(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,t)}}/**
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
 */function uN(n){return new Ki("sum",ya("sum",n))}function lN(n){return new Ki("avg",ya("average",n))}function HT(){return new Ki("count")}function hN(n,e){var t,r;return n instanceof Ki&&e instanceof Ki&&n.aggregateType===e.aggregateType&&((t=n._internalFieldPath)===null||t===void 0?void 0:t.canonicalString())===((r=e._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function dN(n,e){return Rf(n.query,e.query)&&$r(n.data(),e.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class js extends va{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(pl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Zo extends js{data(e={}){return super.data(e)}}class Gs{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Lr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Zo(this._firestore,this._userDataWriter,r.key,r,new Lr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Zo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Lr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Zo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Lr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,h=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:fN(a.type),doc:c,oldIndex:l,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function fN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}function pN(n,e){return n instanceof js&&e instanceof js?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Gs&&e instanceof Gs&&n._firestore===e._firestore&&Rf(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n){n=ve(n,nt);const e=ve(n.firestore,Le);return bT(We(e),n._key).then(t=>Mf(e,n,t))}class cs extends Of{constructor(e){super(),this.firestore=e}convertBytes(e){return new es(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,t)}}function mN(n){n=ve(n,nt);const e=ve(n.firestore,Le),t=We(e),r=new cs(e);return Tx(t,n._key).then(s=>new js(e,r,n._key,s,new Lr(s!==null&&s.hasLocalMutations,!0),n.converter))}function gN(n){n=ve(n,nt);const e=ve(n.firestore,Le);return bT(We(e),n._key,{source:"server"}).then(t=>Mf(e,n,t))}function _N(n){n=ve(n,mt);const e=ve(n.firestore,Le),t=We(e),r=new cs(e);return GT(n._query),RT(t,n._query).then(s=>new Gs(e,r,n,s))}function yN(n){n=ve(n,mt);const e=ve(n.firestore,Le),t=We(e),r=new cs(e);return wx(t,n._query).then(s=>new Gs(e,r,n,s))}function vN(n){n=ve(n,mt);const e=ve(n.firestore,Le),t=We(e),r=new cs(e);return RT(t,n._query,{source:"server"}).then(s=>new Gs(e,r,n,s))}function IN(n,e,t){n=ve(n,nt);const r=ve(n.firestore,Le),s=gl(n.converter,e,t);return io(r,[dl(Hs(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ze.none())])}function EN(n,e,t,...r){n=ve(n,nt);const s=ve(n.firestore,Le),i=Hs(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof os?kf(i,"updateDoc",n._key,e,t,r):Vf(i,"updateDoc",n._key,e),io(s,[o.toMutation(n._key,ze.exists(!0))])}function TN(n){return io(ve(n.firestore,Le),[new Yi(n._key,ze.none())])}function wN(n,e){const t=ve(n.firestore,Le),r=Xo(n),s=gl(n.converter,e);return io(t,[dl(Hs(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ze.exists(!1))]).then(()=>r)}function WT(n,...e){var t,r,s;n=Se(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Zh(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Zh(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(s=f.complete)===null||s===void 0?void 0:s.bind(f)}let c,l,h;if(n instanceof nt)l=ve(n.firestore,Le),h=Qi(n._key.path),c={next:f=>{e[o]&&e[o](Mf(l,n,f))},error:e[o+1],complete:e[o+2]};else{const f=ve(n,mt);l=ve(f.firestore,Le),h=f._query;const m=new cs(l);c={next:g=>{e[o]&&e[o](new Gs(l,m,f,g))},error:e[o+1],complete:e[o+2]},GT(n._query)}return function(m,g,R,P){const C=new al(P),L=new gf(g,C,R);return m.asyncQueue.enqueueAndForget(async()=>ff(await $i(m),L)),()=>{C.Za(),m.asyncQueue.enqueueAndForget(async()=>pf(await $i(m),L))}}(We(l),h,a,c)}function AN(n,e){return bx(We(n=ve(n,Le)),Zh(e)?e:{next:e})}function io(n,e){return function(r,s){const i=new pt;return r.asyncQueue.enqueueAndForget(async()=>Zk(await Af(r),s,i)),i.promise}(We(n),e)}function Mf(n,e,t){const r=t.docs.get(e._key),s=new cs(n);return new js(n,s,e._key,r,new Lr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */function bN(n){return QT(n,{count:HT()})}function QT(n,e){const t=ve(n.firestore,Le),r=We(t),s=KI(e,(i,o)=>new EE(o,i.aggregateType,i._internalFieldPath));return Ax(r,n._query,s).then(i=>function(a,c,l){const h=new cs(a);return new OT(c,h,l)}(t,n,i))}class RN{constructor(e){this.kind="memory",this._onlineComponentProvider=Zr.provider,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=Xr.provider}toJSON(){return{kind:this.kind}}}class SN{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=JT(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class PN{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Xr.provider}toJSON(){return{kind:this.kind}}}class CN{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new mx(e)}}toJSON(){return{kind:this.kind}}}function DN(){return new PN}function VN(n){return new CN(n==null?void 0:n.cacheSizeBytes)}function kN(n){return new RN(n)}function xN(n){return new SN(n)}class NN{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Zr.provider,this._offlineComponentProvider={build:t=>new Tf(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class ON{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Zr.provider,this._offlineComponentProvider={build:t=>new ET(t,e==null?void 0:e.cacheSizeBytes)}}}function JT(n){return new NN(n==null?void 0:n.forceOwnership)}function MN(){return new ON}/**
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
 */const LN={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Hs(e)}set(e,t,r){this._verifyNotCommitted();const s=Or(e,this._firestore),i=gl(s.converter,t,r),o=dl(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,ze.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Or(e,this._firestore);let o;return o=typeof(t=Se(t))=="string"||t instanceof os?kf(this._dataReader,"WriteBatch.update",i._key,t,r,s):Vf(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,ze.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Or(e,this._firestore);return this._mutations=this._mutations.concat(new Yi(t._key,ze.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Or(n,e){if((n=Se(n)).firestore!==e)throw new G(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Hs(t)}get(t){const r=Or(t,this._firestore),s=new cN(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return ne();const o=i[0];if(o.isFoundDocument())return new va(this._firestore,s,o.key,o,r.converter);if(o.isNoDocument())return new va(this._firestore,s,r._key,null,r.converter);throw ne()})}set(t,r,s){const i=Or(t,this._firestore),o=gl(i.converter,r,s),a=dl(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,s);return this._transaction.set(i._key,a),this}update(t,r,s,...i){const o=Or(t,this._firestore);let a;return a=typeof(r=Se(r))=="string"||r instanceof os?kf(this._dataReader,"Transaction.update",o._key,r,s,i):Vf(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=Or(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Or(e,this._firestore),r=new cs(this._firestore);return super.get(e).then(s=>new js(this._firestore,r,t._key,s._document,new Lr(!1,!1),t.converter))}}function FN(n,e,t){n=ve(n,Le);const r=Object.assign(Object.assign({},LN),t);return function(i){if(i.maxAttempts<1)throw new G(M.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,a){const c=new pt;return i.asyncQueue.enqueueAndForget(async()=>{const l=await AT(i);new yx(i.asyncQueue,l,a,o,c).au()}),c.promise}(We(n),s=>e(new XT(n,s)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(){return new qa("deleteField")}function BN(){return new Sf("serverTimestamp")}function qN(...n){return new Pf("arrayUnion",n)}function jN(...n){return new Cf("arrayRemove",n)}function GN(n){return new Df("increment",n)}function $N(n){return new Ba(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(n){return We(n=ve(n,Le)),new YT(n,e=>io(n,e))}/**
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
 */function zN(n,e){const t=We(n=ve(n,Le));if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return Jt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(i){const o=typeof i=="string"?function(l){try{return JSON.parse(l)}catch(h){throw new G(M.INVALID_ARGUMENT,"Failed to parse JSON: "+(h==null?void 0:h.message))}}(i):i,a=[];if(Array.isArray(o.indexes))for(const c of o.indexes){const l=b_(c,"collectionGroup"),h=[];if(Array.isArray(c.fields))for(const f of c.fields){const m=fl("setIndexConfiguration",b_(f,"fieldPath"));f.arrayConfig==="CONTAINS"?h.push(new Ds(m,2)):f.order==="ASCENDING"?h.push(new Ds(m,0)):f.order==="DESCENDING"&&h.push(new Ds(m,1))}a.push(new ki(ki.UNKNOWN_ID,l,h,xi.empty()))}return a}(e);return Px(t,r)}function b_(n,e){if(typeof n[e]!="string")throw new G(M.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}/**
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
 */class ZT{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function HN(n){var e;n=ve(n,Le);const t=R_.get(n);if(t)return t;if(((e=We(n)._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offline.kind)!=="persistent")return null;const r=new ZT(n);return R_.set(n,r),r}function WN(n){ew(n,!0)}function QN(n){ew(n,!1)}function JN(n){Dx(We(n._firestore)).then(e=>$("deleting all persistent cache indexes succeeded")).catch(e=>Jt("deleting all persistent cache indexes failed",e))}function ew(n,e){Cx(We(n._firestore),e).then(t=>$(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(t=>Jt(`setting persistent cache index auto creation isEnabled=${e} failed`,t))}const R_=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(n){var e;const t=(e=We(ve(n.firestore,Le))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return t===void 0?null:tl(t,Ot(n._query))._t}function XN(n,e){var t;const r=KI(e,(i,o)=>new EE(o,i.aggregateType,i._internalFieldPath)),s=(t=We(ve(n.firestore,Le))._onlineComponents)===null||t===void 0?void 0:t.datastore.serializer;return s===void 0?null:NE(s,iE(n._query),r,!0).request}/**
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
 */class ZN{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Lf.instance.onExistenceFilterMismatch(e)}}class Lf{constructor(){this.Uu=new Map}static get instance(){return Ic||(Ic=new Lf,function(t){if(lu)throw new Error("a TestingHooksSpi instance is already set");lu=t}(Ic)),Ic}et(e){this.Uu.forEach(t=>t(e))}onExistenceFilterMismatch(e){const t=Symbol(),r=this.Uu;return r.set(t,e),()=>r.delete(t)}}let Ic=null;(function(e,t=!0){(function(s){Wi=s})(Ks),Kr(new tr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Le(new AD(r.getProvider("auth-internal")),new SD(r.getProvider("app-check-internal")),function(l,h){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new G(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hr(l.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),sn(mg,"4.7.3",e),sn(mg,"4.7.3","esm2017")})();const EM=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Of,AggregateField:Ki,AggregateQuerySnapshot:OT,Bytes:es,CACHE_SIZE_UNLIMITED:Nx,CollectionReference:hn,DocumentReference:nt,DocumentSnapshot:js,FieldPath:os,FieldValue:as,Firestore:Le,FirestoreError:G,GeoPoint:ll,LoadBundleTask:VT,PersistentCacheIndexManager:ZT,Query:mt,QueryCompositeFilterConstraint:Qs,QueryConstraint:ro,QueryDocumentSnapshot:Zo,QueryEndAtConstraint:$a,QueryFieldFilterConstraint:so,QueryLimitConstraint:ja,QueryOrderByConstraint:ml,QuerySnapshot:Gs,QueryStartAtConstraint:Ga,SnapshotMetadata:Lr,Timestamp:He,Transaction:XT,VectorValue:Ba,WriteBatch:YT,_AutoId:Fd,_ByteString:Xe,_DatabaseId:Hr,_DocumentKey:X,_EmptyAppCheckTokenProvider:PD,_EmptyAuthCredentialsProvider:kI,_FieldPath:$e,_TestingHooks:ZN,_cast:ve,_debugAssert:TD,_internalAggregationQueryToProtoRunAggregationQueryRequest:XN,_internalQueryToProtoQueryTarget:YN,_isBase64Available:nV,_logWarn:Jt,_validateIsNotUsedTogether:PT,addDoc:wN,aggregateFieldEqual:hN,aggregateQuerySnapshotEqual:dN,and:eN,arrayRemove:jN,arrayUnion:qN,average:lN,clearIndexedDbPersistence:Fx,collection:Vx,collectionGroup:kx,connectFirestoreEmulator:DT,count:HT,deleteAllPersistentCacheIndexes:JN,deleteDoc:TN,deleteField:UN,disableNetwork:qx,disablePersistentCacheIndexAutoCreation:QN,doc:Xo,documentId:Kx,enableIndexedDbPersistence:Mx,enableMultiTabIndexedDbPersistence:Lx,enableNetwork:Bx,enablePersistentCacheIndexAutoCreation:WN,endAt:aN,endBefore:oN,ensureFirestoreConfigured:We,executeWrite:io,getAggregateFromServer:QT,getCountFromServer:bN,getDoc:ed,getDocFromCache:mN,getDocFromServer:gN,getDocs:_N,getDocsFromCache:yN,getDocsFromServer:vN,getFirestore:kT,getPersistentCacheIndexManager:HN,increment:GN,initializeFirestore:Ox,limit:nN,limitToLast:rN,loadBundle:Gx,memoryEagerGarbageCollector:DN,memoryLocalCache:kN,memoryLruGarbageCollector:VN,namedQuery:$x,onSnapshot:WT,onSnapshotsInSync:AN,or:Zx,orderBy:tN,persistentLocalCache:xN,persistentMultipleTabManager:MN,persistentSingleTabManager:JT,query:Yx,queryEqual:Rf,refEqual:xx,runTransaction:FN,serverTimestamp:BN,setDoc:IN,setIndexConfiguration:zN,setLogLevel:ED,snapshotEqual:pN,startAfter:iN,startAt:sN,sum:uN,terminate:jx,updateDoc:EN,vector:$N,waitForPendingWrites:Ux,where:Xx,writeBatch:KN},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="firebasestorage.googleapis.com",eO="storageBucket",tO=2*60*1e3,nO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends _n{constructor(e,t,r=0){super(oh(e),`Firebase Storage: ${t} (${oh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Nn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return oh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var kn;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(kn||(kn={}));function oh(n){return"storage/"+n}function rO(){const n="An unknown error occurred, please check the error payload for server response.";return new Nn(kn.UNKNOWN,n)}function sO(){return new Nn(kn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iO(){return new Nn(kn.CANCELED,"User canceled the upload/download.")}function oO(n){return new Nn(kn.INVALID_URL,"Invalid URL '"+n+"'.")}function aO(n){return new Nn(kn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function S_(n){return new Nn(kn.INVALID_ARGUMENT,n)}function nw(){return new Nn(kn.APP_DELETED,"The Firebase app was deleted.")}function cO(n){return new Nn(kn.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=un.makeFromUrl(e,t)}catch{return new un(e,"")}if(r.path==="")return r;throw aO(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${s}/o${m}`,"i"),R={bucket:1,path:3},P=t===tw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",L=new RegExp(`^https?://${P}/${s}/${C}`,"i"),O=[{regex:a,indices:c,postModify:i},{regex:g,indices:R,postModify:l},{regex:L,indices:{bucket:1,path:2},postModify:l}];for(let x=0;x<O.length;x++){const z=O[x],H=z.regex.exec(e);if(H){const w=H[z.indices.bucket];let y=H[z.indices.path];y||(y=""),r=new un(w,y),z.postModify(r);break}}if(r==null)throw oO(e);return r}}class uO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(n,e,t){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function h(...C){l||(l=!0,e.apply(null,C))}function f(C){s=setTimeout(()=>{s=null,n(g,c())},C)}function m(){i&&clearTimeout(i)}function g(C,...L){if(l){m();return}if(C){m(),h.call(null,C,...L);return}if(c()||o){m(),h.call(null,C,...L);return}r<64&&(r*=2);let O;a===1?(a=2,O=0):O=(r+Math.random())*1e3,f(O)}let R=!1;function P(C){R||(R=!0,m(),!l&&(s!==null?(C||(a=2),clearTimeout(s),f(0)):C||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,P(!0)},t),P}function hO(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dO(n){return n!==void 0}function P_(n,e,t,r){if(r<e)throw S_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw S_(`Invalid value for '${n}'. Expected ${t} or less.`)}function fO(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Iu;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Iu||(Iu={}));/**
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
 */function pO(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,t,r,s,i,o,a,c,l,h,f,m=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,R)=>{this.resolve_=g,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ec(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Iu.NO_ERROR,c=i.getStatus();if(!a||pO(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Iu.ABORT;r(!1,new Ec(!1,null,h));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Ec(l,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());dO(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=rO();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?nw():iO();o(c)}else{const c=sO();o(c)}};this.canceled_?t(!1,new Ec(!1,null,!0)):this.backoffId_=lO(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ec{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function gO(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function _O(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yO(n,e){e&&(n["X-Firebase-GMPID"]=e)}function vO(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function IO(n,e,t,r,s,i,o=!0){const a=fO(n.urlParams),c=n.url+a,l=Object.assign({},n.headers);return yO(l,e),gO(l,t),_O(l,i),vO(l,r),new mO(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function TO(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Eu{constructor(e,t){this._service=e,t instanceof un?this._location=t:this._location=un.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Eu(e,t)}get root(){const e=new un(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return TO(this._location.path)}get storage(){return this._service}get parent(){const e=EO(this._location.path);if(e===null)return null;const t=new un(this._location.bucket,e);return new Eu(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw cO(e)}}function C_(n,e){const t=e==null?void 0:e[eO];return t==null?null:un.makeFromBucketSpec(t,n)}function wO(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Mv(s,n.app.options.projectId))}class AO{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=tw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tO,this._maxUploadRetryTime=nO,this._requests=new Set,s!=null?this._bucket=un.makeFromBucketSpec(s,this._host):this._bucket=C_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=un.makeFromBucketSpec(this._url,e):this._bucket=C_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){P_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){P_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Eu(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new uO(nw());{const o=IO(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const D_="@firebase/storage",V_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="storage";function bO(n=Ku(),e){n=Se(n);const r=$s(n,rw).getImmediate({identifier:e}),s=bd("storage");return s&&RO(r,...s),r}function RO(n,e,t,r={}){wO(n,e,t,r)}function SO(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new AO(t,r,s,e,Ks)}function PO(){Kr(new tr(rw,SO,"PUBLIC").setMultipleInstances(!0)),sn(D_,V_,""),sn(D_,V_,"esm2017")}PO();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO="type.googleapis.com/google.protobuf.Int64Value",DO="type.googleapis.com/google.protobuf.UInt64Value";function sw(n,e){const t={};for(const r in n)n.hasOwnProperty(r)&&(t[r]=e(n[r]));return t}function td(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>td(e));if(typeof n=="function"||typeof n=="object")return sw(n,e=>td(e));throw new Error("Data cannot be encoded in JSON: "+n)}function Tu(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case CO:case DO:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>Tu(e)):typeof n=="function"||typeof n=="object"?sw(n,e=>Tu(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class wi extends _n{constructor(e,t,r){super(`${Ff}/${e}`,t||""),this.details=r}}function VO(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function kO(n,e){let t=VO(n),r=t,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!k_[o])return new wi("internal","internal");t=k_[o],r=o}const a=i.message;typeof a=="string"&&(r=a),s=i.details,s!==void 0&&(s=Tu(s))}}catch{}return t==="ok"?null:new wi(t,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,t,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||t.get().then(s=>this.messaging=s,()=>{}),this.appCheck||r.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="us-central1";function NO(n){let e=null;return{promise:new Promise((t,r)=>{e=setTimeout(()=>{r(new wi("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class OO{constructor(e,t,r,s,i=nd,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new xO(t,r,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(i);this.customDomain=a.origin+(a.pathname==="/"?"":a.pathname),this.region=nd}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function MO(n,e,t){n.emulatorOrigin=`http://${e}:${t}`}function LO(n,e,t){return r=>UO(n,e,r,{})}async function FO(n,e,t,r){t["Content-Type"]="application/json";let s;try{s=await r(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}function UO(n,e,t,r){const s=n._url(e);return BO(n,s,t,r)}async function BO(n,e,t,r){t=td(t);const s={data:t},i={},o=await n.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(i.Authorization="Bearer "+o.authToken),o.messagingToken&&(i["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(i["X-Firebase-AppCheck"]=o.appCheckToken);const a=r.timeout||7e4,c=NO(a),l=await Promise.race([FO(e,s,i,n.fetchImpl),c.promise,n.cancelAllRequests]);if(c.cancel(),!l)throw new wi("cancelled","Firebase Functions instance was deleted.");const h=kO(l.status,l.json);if(h)throw h;if(!l.json)throw new wi("internal","Response is not valid JSON object.");let f=l.json.data;if(typeof f>"u"&&(f=l.json.result),typeof f>"u")throw new wi("internal","Response is missing data field.");return{data:Tu(f)}}const x_="@firebase/functions",N_="0.11.8";/**
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
 */const qO="auth-internal",jO="app-check-internal",GO="messaging-internal";function $O(n,e){const t=(r,{instanceIdentifier:s})=>{const i=r.getProvider("app").getImmediate(),o=r.getProvider(qO),a=r.getProvider(GO),c=r.getProvider(jO);return new OO(i,o,a,c,s,n)};Kr(new tr(Ff,t,"PUBLIC").setMultipleInstances(!0)),sn(x_,N_,e),sn(x_,N_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(n=Ku(),e=nd){const r=$s(Se(n),Ff).getImmediate({identifier:e}),s=bd("functions");return s&&zO(r,...s),r}function zO(n,e,t){MO(Se(n),e,t)}function TM(n,e,t){return LO(Se(n),e)}$O(fetch.bind(self));const HO={BASE_URL:"/cuponera/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyAZGtcj7xPioaa4z4WPrHngTkG9C4Oqrvs",VITE_FIREBASE_APP_ID:"1:314919113142:web:110e0361dcd0094e2db117",VITE_FIREBASE_AUTH_DOMAIN:"link-up-mlm-2025.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"314919113142",VITE_FIREBASE_PROJECT_ID:"link-up-mlm-2025",VITE_FIREBASE_STORAGE_BUCKET:"link-up-mlm-2025.firebasestorage.app",VITE_FIREBASE_VAPID_KEY:"BA69NRjs-lUKfmXM_qMvpvcyM1s9zLRmW_RfmDkKrtKnmu-3G5aZNhGsKPvKsaiZk0X01J6uie5H0V44VJ1-T4Q"},WO=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"];for(const n of WO)if(!HO[n])throw new Error(`Missing required environment variable: ${n}`);const QO={apiKey:"AIzaSyAZGtcj7xPioaa4z4WPrHngTkG9C4Oqrvs",authDomain:"link-up-mlm-2025.firebaseapp.com",projectId:"link-up-mlm-2025",storageBucket:"link-up-mlm-2025.firebasestorage.app",messagingSenderId:"314919113142",appId:"1:314919113142:web:110e0361dcd0094e2db117"},Dn=qv(QO);console.log("[FIREBASE]",{projectId:Dn.options.projectId,authDomain:Dn.options.authDomain,apiKey:Dn.options.apiKey?"***set***":"***missing***"});console.log("🔥 Firebase projectId:",Dn.options.projectId);const Un=_D(Dn),Ai=kT(Dn);console.log("🧠 Firestore projectId:",Ai.app.options.projectId);console.log("🧠 Firestore mismo app?",Ai.app===Dn);const JO=bO(Dn),YO=KO(Dn,"us-central1"),wM=Object.freeze(Object.defineProperty({__proto__:null,auth:Un,db:Ai,default:Dn,functions:YO,storage:JO},Symbol.toStringTag,{value:"Module"}));let _s=null;const iw=mv("auth",()=>{const n=Pr(null),e=Pr(null),t=Pr(null),r=Pr(!0),s=Pr(null),i=Cv(),o=Tt(()=>!!n.value),a=Tt(()=>!!e.value),c=Tt(()=>{var N;return((N=e.value)==null?void 0:N.status)==="active"}),l=Tt(()=>{var N;return((N=n.value)==null?void 0:N.uid)||null}),h=Tt(()=>n.value?e.value?"merchant":t.value?"user":null:null);function f(){r.value=!0;try{iC(Un,async N=>{n.value=N,N?await g(N.uid):e.value=null,r.value=!1},N=>{console.error("Auth state change error:",N),r.value=!1})}catch(N){console.error("Init auth listener error:",N),r.value=!1}}function m(N){_s&&(_s(),_s=null);const O=Xo(Ai,"merchants",N);_s=WT(O,x=>{if(!x.exists()){console.warn("⚠️ Merchant doc no existe:",N),e.value=null;return}e.value={id:x.id,...x.data()},console.log("✅ Merchant data actualizada en tiempo real:",{linkCoinsBalance:e.value.linkCoinsBalance,lockedLinkCoinsBalance:e.value.lockedLinkCoinsBalance})},x=>{console.error("❌ Error en listener de merchant:",x)})}async function g(N){try{const O=await ed(Xo(Ai,"merchants",N));if(O.exists())e.value={id:O.id,...O.data()},t.value=null,m(N);else{e.value=null;const x=await ed(Xo(Ai,"users",N));x.exists()?t.value={...x.data(),uid:x.id}:t.value=null}}catch(O){console.error("Error loading merchant data:",O),e.value=null,t.value=null}}async function R(N,O){try{s.value=null,r.value=!0;const x=N.trim().toLowerCase(),z=await sg(Un,x,O);if(n.value=z.user,!z.user.emailVerified)return!0;if(await g(z.user.uid),!e.value)throw new Error("No se encontró un comercio asociado a este usuario");return i.addToast("Has iniciado sesión como comercio 🎉","success"),!0}catch(x){switch(console.error("Login error:",x),console.error("LOGIN_FIREBASE_ERROR",{code:x==null?void 0:x.code,message:x==null?void 0:x.message,customData:x==null?void 0:x.customData,projectId:Un.app.options.projectId,authDomain:Un.app.options.authDomain}),x.code){case"auth/invalid-credential":s.value="Credenciales inválidas. Verifica: (1) proyecto correcto en el build, (2) API Key/referrer, (3) dominio autorizado, o (4) contraseña incorrecta.";break;case"auth/user-not-found":case"auth/wrong-password":s.value="Email o contraseña incorrectos";break;case"auth/too-many-requests":s.value="Demasiados intentos. Intenta más tarde.";break;case"auth/user-disabled":s.value="Tu cuenta ha sido deshabilitada";break;default:s.value=x.message||"Error al iniciar sesión"}return n.value=null,e.value=null,!1}finally{r.value=!1}}async function P(N,O){try{s.value=null,r.value=!0;const x=N.trim().toLowerCase(),z=await sg(Un,x,O);return n.value=z.user,e.value=null,i.addToast("Has iniciado sesión como afiliado 🎉","success"),!0}catch(x){switch(console.error("Affiliate login error:",x),console.error("AFFILIATE_LOGIN_FIREBASE_ERROR",{code:x==null?void 0:x.code,message:x==null?void 0:x.message,customData:x==null?void 0:x.customData,projectId:Un.app.options.projectId,authDomain:Un.app.options.authDomain}),x.code){case"auth/invalid-credential":case"auth/user-not-found":case"auth/wrong-password":s.value="Email o contraseña incorrectos";break;case"auth/too-many-requests":s.value="Demasiados intentos. Intenta más tarde.";break;case"auth/user-disabled":s.value="Tu cuenta ha sido deshabilitada";break;default:s.value=x.message||"Error al iniciar sesión"}return n.value=null,e.value=null,!1}finally{r.value=!1}}async function C(){try{const N=!!e.value,O=!!n.value;_s&&(_s(),_s=null),await oC(Un),n.value=null,e.value=null,t.value=null,s.value=null,O&&i.addToast(N?"Has cerrado sesión como comercio 👋":"Has cerrado sesión como afiliado 👋","error")}catch(N){console.error("Logout error:",N),s.value="Error al cerrar sesión"}}function L(){s.value=null}return{currentUser:n,merchant:e,userProfile:t,loading:r,error:s,isAuthenticated:o,isMerchant:a,isMerchantActive:c,userId:l,userMode:h,initAuthListener:f,login:R,loginAffiliate:P,logout:C,clearError:L,loadMerchantData:g}}),XO=Nu({__name:"App",setup(n){return _d(()=>{try{iw().initAuthListener()}catch(e){console.error("Error initializing auth:",e)}}),(e,t)=>(Ur(),Rc(Et,null,[at(Jn(Pv),null,{default:Kc(({Component:r})=>[at(Db,{name:"fade",mode:"out-in"},{default:Kc(()=>[(Ur(),Qc(LA(r)))]),_:2},1024)]),_:1}),at(SS)],64))}}),ZO="modulepreload",eM=function(n){return"/cuponera/"+n},O_={},Ce=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=eM(c),c in O_)return;O_[c]=!0;const l=c.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":ZO,l||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((m,g)=>{f.addEventListener("load",m),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},ow=wS({history:nS("/cuponera/"),routes:[{path:"/",redirect:"/market"},{path:"/market",name:"marketplace",component:()=>Ce(()=>import("./MarketplaceView-DH6hbJ5h.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])),meta:{requiresAuth:!1,layout:"public"}},{path:"/market/comercios",name:"comercios-list",component:()=>Ce(()=>import("./ComerciosListView-DU8owAO7.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,9])),meta:{requiresAuth:!1,layout:"public"}},{path:"/market/comercios/:slug",name:"comercio-detail",component:()=>Ce(()=>import("./ComercioDetailView-r9lHQShT.js"),__vite__mapDeps([13,1,2,3,4,5,9,10,14])),meta:{requiresAuth:!1,layout:"public"}},{path:"/market/cupones",name:"cupones-list",component:()=>Ce(()=>import("./CuponesListView-7F4XrnGN.js"),__vite__mapDeps([15,1,2,3,4,5,6,8,10])),meta:{requiresAuth:!1,layout:"public"}},{path:"/market/favoritos",name:"favoritos",component:()=>Ce(()=>import("./FavoritosView-CvpYL4hu.js"),__vite__mapDeps([16,1,2,3,4,5,7,14,17])),meta:{requiresAuth:!0,layout:"public"}},{path:"/market/cuenta",name:"cuenta",component:()=>Ce(()=>import("./CuentaView-Nn7aZ_uy.js"),__vite__mapDeps([18,3,4])),meta:{requiresAuth:!0,layout:"public"}},{path:"/market/coupon/:id",name:"coupon-detail",component:()=>Ce(()=>import("./CouponDetailView-cA7nO_ij.js"),__vite__mapDeps([19,1,2,3,4,5,10,9,20])),meta:{requiresAuth:!1,layout:"public"}},{path:"/market/login",name:"affiliate-login",component:()=>Ce(()=>import("./AffiliateLoginView-DrYQDzKf.js"),__vite__mapDeps([21,1,2,3,4,5,22])),meta:{requiresAuth:!1,layout:"public"}},{path:"/market/transfer",name:"transfer-test",component:()=>Ce(()=>import("./TransferTestView-DaXPWdLh.js"),__vite__mapDeps([23,24])),meta:{requiresAuth:!1,layout:"public"}},{path:"/merchant/onboarding",name:"merchant-onboarding",component:()=>Ce(()=>import("./MerchantOnboardingView-4T3XaYIY.js"),__vite__mapDeps([25,2,26])),meta:{requiresAuth:!1,layout:"none"}},{path:"/messages",name:"user-messages",component:()=>Ce(()=>import("./UserMessagesView-CnCuVckA.js"),__vite__mapDeps([27,17])),meta:{requiresAuth:!0,layout:"minimal"}},{path:"/chat/:merchantId",name:"user-chat-merchant",component:()=>Ce(()=>import("./ChatWithMerchantView-BbrTaziJ.js"),__vite__mapDeps([28,29,30])),meta:{requiresAuth:!0,layout:"minimal"}},{path:"/login",name:"login",component:()=>Ce(()=>import("./LoginView-DgmZ22Db.js"),__vite__mapDeps([31,2,32])),meta:{requiresAuth:!1,layout:"auth"}},{path:"/register",name:"register",component:()=>Ce(()=>import("./RegisterView-BYc9kIfE.js"),__vite__mapDeps([33,2,34,35])),meta:{requiresAuth:!1,layout:"auth"}},{path:"/verify-email",name:"verify-email",component:()=>Ce(()=>import("./VerifyEmailView-DCxArN0I.js"),__vite__mapDeps([36,2,37])),meta:{requiresAuth:!0,layout:"auth"}},{path:"/m",component:()=>Ce(()=>import("./MerchantLayout-BK7z0bop.js"),__vite__mapDeps([38,2,39])),meta:{requiresAuth:!0,requiresActiveMerchant:!0,requiresEmailVerified:!0},children:[{path:"",redirect:"/m/dashboard"},{path:"dashboard",name:"merchant-dashboard",component:()=>Ce(()=>import("./DashboardView-CPYxVb8x.js"),__vite__mapDeps([40,41,34,42,43])),meta:{title:"Dashboard"}},{path:"coupons",name:"merchant-coupons",component:()=>Ce(()=>import("./CouponsView-3aMtV-oW.js"),__vite__mapDeps([44,41,45])),meta:{title:"Mis Cupones"}},{path:"canje",name:"merchant-redemption",component:()=>Ce(()=>import("./CouponRedemptionView-BJK8HyjM.js"),__vite__mapDeps([46,47,48,20,49])),meta:{title:"Canje de Cupones"}},{path:"validation",name:"merchant-validation",component:()=>Ce(()=>import("./CouponValidationView-Cja7382p.js"),__vite__mapDeps([50,47,48,17])),meta:{title:"Validar Cupón"}},{path:"payment/:redeemId",name:"merchant-payment",component:()=>Ce(()=>import("./CouponPaymentView-Bwhqd6iE.js"),__vite__mapDeps([51,47,17])),meta:{title:"Cobro"}},{path:"charge/:redeemId",name:"merchant-charge",component:()=>Ce(()=>import("./RedeemChargeView-D4JHchNA.js"),__vite__mapDeps([52,47,48,20,53])),meta:{title:"Cobrar"}},{path:"messages",name:"merchant-messages",component:()=>Ce(()=>import("./MessagesView-C168h73W.js"),__vite__mapDeps([54,29])),meta:{title:"Mensajes"}},{path:"chat/conversation/:conversationId",name:"merchant-chat-conversation",component:()=>Ce(()=>import("./ChatConversationView-BO37j4ou.js"),__vite__mapDeps([55,29])),meta:{title:"Conversación"}},{path:"coupons/new",name:"merchant-coupon-new",component:()=>Ce(()=>import("./CouponFormView-B-GBCU8Y.js"),__vite__mapDeps([56,41])),meta:{title:"Crear Cupón"}},{path:"coupons/:id/edit",name:"merchant-coupon-edit",component:()=>Ce(()=>import("./CouponFormView-B-GBCU8Y.js"),__vite__mapDeps([56,41])),meta:{title:"Editar Cupón"}},{path:"profile",name:"merchant-profile",component:()=>Ce(()=>import("./MerchantProfileView-BfKKpFw_.js"),__vite__mapDeps([57,41])),meta:{title:"Mi Perfil"}},{path:"profile/settings",name:"merchant-profile-settings",component:()=>Ce(()=>import("./ProfileSettingsView-QnU5oXhZ.js"),__vite__mapDeps([58,34,59])),meta:{title:"Configurar Perfil"}},{path:"payouts",name:"merchant-payouts",component:()=>Ce(()=>import("./PayoutsView-DZQRP0Bq.js"),__vite__mapDeps([60,2,42,24,61])),meta:{title:"Pagos"}},{path:"settings",name:"merchant-settings",component:()=>Ce(()=>import("./SettingsView-DZJDX8z5.js"),__vite__mapDeps([62,30,34,63])),meta:{title:"Configuración"}}]},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>Ce(()=>import("./NotFoundView-DahKX3oC.js"),[])}]});ow.beforeEach((n,e,t)=>{var a,c;const r=iw(),s=n.meta.requiresAuth,i=n.meta.requiresActiveMerchant,o=n.meta.requiresEmailVerified;if(s&&!r.isAuthenticated){t({name:"login",query:{redirect:n.fullPath}});return}if(o&&r.isAuthenticated&&!((a=r.currentUser)!=null&&a.emailVerified)&&n.name!=="verify-email"){t({name:"verify-email"});return}if(i&&!r.isMerchant){t({name:"merchant-onboarding"});return}if(n.name==="login"&&r.isAuthenticated){(c=r.currentUser)!=null&&c.emailVerified?t({name:"merchant-dashboard"}):t({name:"verify-email"});return}t()});const Uf=lR(XO);Uf.use(fR());Uf.use(ow);Uf.mount("#app");export{uM as $,nN as A,WT as B,TM as C,YO as D,BN as E,EN as F,wN as G,pM as H,Un as I,mM as J,Uo as K,_d as L,at as M,tM as N,gm as O,FA as P,Et as Q,hM as R,dM as S,He as T,iw as U,rR as V,Jn as W,iM as X,Dy as Y,nM as Z,Ce as _,Zy as a,Vy as a0,lM as a1,xu as a2,tR as a3,RS as a4,cM as a5,Pv as a6,Db as a7,Cv as a8,od as a9,aM as aa,Hi as ab,fM as ac,gM as ad,bN as ae,nR as af,KN as ag,sM as ah,EM as ai,wM as aj,oM as b,Rc as c,Nu as d,pb as e,Qc as f,Tt as g,Pr as h,Xo as i,Ai as j,ed as k,Vx as l,Xx as m,Cu as n,Ur as o,_N as p,Yx as q,rM as r,TN as s,G_ as t,IN as u,tN as v,Kc as w,kT as x,Dn as y,_D as z};
