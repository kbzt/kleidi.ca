function E(){}const Q=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function G(){return Object.create(null)}function x(t){t.forEach(U)}function B(t){return typeof t=="function"}function Ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function Pt(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function ft(t){return Object.keys(t).length===0}function Dt(t,e,n,i){if(t){const r=W(t,e,n,i);return t[0](r)}}function W(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Tt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let l=0;l<o;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function zt(t,e,n,i,r,u){if(r){const o=W(e,n,i,u);t.p(o,r)}}function Bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ft(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}const V=typeof window!="undefined";let X=V?()=>window.performance.now():()=>Date.now(),F=V?t=>requestAnimationFrame(t):E;const g=new Set;function Y(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&F(Y)}function Z(t){let e;return g.size===0&&F(Y),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let O=!1;function _t(){O=!0}function dt(){O=!1}function ht(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const s=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=s?r+1:ht(1,r,_=>e[n[_]].claim_order,s))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const u=[],o=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);l>=c;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);u.reverse(),o.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<o.length;c++){for(;s<u.length&&o[c].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;t.insertBefore(o[c],f)}}function pt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=et("style");return gt(tt(t),e),e.sheet}function gt(t,e){pt(t.head||t,e)}function xt(t,e){if(O){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){O&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function $t(t){t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function Lt(){return H(" ")}function Gt(){return H("")}function Jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bt(t){return Array.from(t.childNodes)}function vt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){vt(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const c=n(l);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const c=n(l);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function it(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];n[l.name]||u.push(l.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Kt(t,e,n){return it(t,e,n,et)}function Qt(t,e,n){return it(t,e,n,wt)}function kt(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Ut(t){return kt(t," ")}function Wt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Vt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Xt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const q=new Map;let M=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:yt(e),rules:{}};return q.set(t,n),n}function rt(t,e,n,i,r,u,o,l=0){const c=16.666/i;let s=`{
`;for(let m=0;m<=1;m+=c){const A=e+(n-e)*u(m);s+=m*100+`%{${o(A,1-A)}}
`}const f=s+`100% {${o(n,1-n)}}
}`,a=`__svelte_${At(f)}_${l}`,_=tt(t),{stylesheet:d,rules:h}=q.get(_)||Nt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function T(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||St())}function St(){F(()=>{M||(q.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),q.clear())})}let v;function b(t){v=t}function I(){if(!v)throw new Error("Function called outside component initialization");return v}function Yt(t){I().$$.on_mount.push(t)}function Zt(t){I().$$.after_update.push(t)}function te(t,e){return I().$$.context.set(t,e),e}const w=[],J=[],j=[],K=[],ct=Promise.resolve();let z=!1;function ot(){z||(z=!0,ct.then(lt))}function ee(){return ot(),ct}function k(t){j.push(t)}const D=new Set;let S=0;function lt(){const t=v;do{for(;S<w.length;){const e=w[S];S++,b(e),jt(e.$$)}for(b(null),w.length=0,S=0;J.length;)J.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];D.has(n)||(D.add(n),n())}j.length=0}while(w.length);for(;K.length;)K.pop()();z=!1,D.clear(),b(t)}function jt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let $;function st(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function R(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const C=new Set;let y;function ne(){y={r:0,c:[],p:y}}function ie(){y.r||x(y.c),y=y.p}function Ct(t,e){t&&t.i&&(C.delete(t),t.i(e))}function re(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),y.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const ut={duration:0};function ce(t,e,n){let i=e(t,n),r=!1,u,o,l=0;function c(){u&&T(t,u)}function s(){const{delay:a=0,duration:_=300,easing:d=Q,tick:h=E,css:p}=i||ut;p&&(u=rt(t,0,1,_,a,d,p,l++)),h(0,1);const m=X()+a,A=m+_;o&&o.abort(),r=!0,k(()=>R(t,!0,"start")),o=Z(P=>{if(r){if(P>=A)return h(1,0),R(t,!0,"end"),c(),r=!1;if(P>=m){const L=d((P-m)/_);h(L,1-L)}}return r})}let f=!1;return{start(){f||(f=!0,T(t),B(i)?(i=i(),st().then(s)):s())},invalidate(){f=!1},end(){r&&(c(),r=!1)}}}function oe(t,e,n){let i=e(t,n),r=!0,u;const o=y;o.r+=1;function l(){const{delay:c=0,duration:s=300,easing:f=Q,tick:a=E,css:_}=i||ut;_&&(u=rt(t,1,0,s,c,f,_));const d=X()+c,h=d+s;k(()=>R(t,!1,"start")),Z(p=>{if(r){if(p>=h)return a(0,1),R(t,!1,"end"),--o.r||x(o.c),!1;if(p>=d){const m=f((p-d)/s);a(1-m,m)}}return r})}return B(i)?st().then(()=>{i=i(),l()}):l(),{end(c){c&&i.tick&&i.tick(1,0),r&&(u&&T(t,u),r=!1)}}}function le(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const o=t[u],l=e[u];if(l){for(const c in o)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[u]=l}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function se(t){return typeof t=="object"&&t!==null?t:{}}function ue(t){t&&t.c()}function ae(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:o,after_update:l}=t.$$;r&&r.m(e,n),i||k(()=>{const c=u.map(U).filter(B);o?o.push(...c):x(c),t.$$.on_mount=[]}),l.forEach(k)}function Mt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(w.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fe(t,e,n,i,r,u,o,l=[-1]){const c=v;b(t);const s=t.$$={fragment:null,ctx:null,props:u,update:E,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};o&&o(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return s.ctx&&r(s.ctx[a],s.ctx[a]=h)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](h),f&&Rt(t,a)),_}):[],s.update(),f=!0,x(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){_t();const a=bt(e.target);s.fragment&&s.fragment.l(a),a.forEach($t)}else s.fragment&&s.fragment.c();e.intro&&Ct(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),dt(),lt()}b(c)}class _e{$destroy(){Mt(this,1),this.$destroy=E}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{le as A,se as B,Mt as C,at as D,ee as E,Q as F,zt as G,Bt as H,Tt as I,k as J,oe as K,Xt as L,xt as M,Dt as N,ce as O,It as P,wt as Q,Qt as R,_e as S,Ft as T,Pt as U,bt as a,Jt as b,Kt as c,$t as d,et as e,Vt as f,Ht as g,kt as h,fe as i,Wt as j,Lt as k,Gt as l,Ut as m,E as n,ne as o,re as p,ie as q,Ct as r,Ot as s,H as t,te as u,Zt as v,Yt as w,ue as x,ae as y,qt as z};