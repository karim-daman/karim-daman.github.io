var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function p(){return a("")}let h;function d(t){h=t}function g(){if(!h)throw new Error("Function called outside component initialization");return h}function $(){const t=g();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function m(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const b=[],y=[],w=[],v=[],x=Promise.resolve();let _=!1;function E(){_||(_=!0,x.then(S))}function k(t){w.push(t)}let j=!1;const O=new Set;function S(){if(!j){j=!0;do{for(let t=0;t<b.length;t+=1){const n=b[t];d(n),A(n.$$)}for(d(null),b.length=0;y.length;)y.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];O.has(n)||(O.add(n),n())}w.length=0}while(b.length);for(;v.length;)v.pop()();_=!1,j=!1,O.clear()}}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const C=new Set;let L;function N(){L={r:0,c:[],p:L}}function T(){L.r||r(L.c),L=L.p}function R(t,n){t&&t.i&&(C.delete(t),t.i(n))}function q(t,n,e,o){if(t&&t.o){if(C.has(t))return;C.add(t),L.c.push((()=>{C.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function D(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function I(t){return"object"==typeof t&&null!==t?t:{}}function M(t){t&&t.c()}function P(t,n,o){const{fragment:i,on_mount:c,on_destroy:u,after_update:l}=t.$$;i&&i.m(n,o),k((()=>{const n=c.map(e).filter(s);u?u.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(k)}function F(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function H(n,e,s,i,c,l,a=[-1]){const f=h;d(n);const p=e.props||{},g=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:a,skip_bound:!1};let $=!1;if(g.ctx=s?s(n,p,((t,e,...o)=>{const r=o.length?o[0]:e;return g.ctx&&c(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),$&&function(t,n){-1===t.$$.dirty[0]&&(b.push(t),E(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],g.update(),$=!0,r(g.before_update),g.fragment=!!i&&i(g.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();e.intro&&R(n.$$.fragment),P(n,e.target,e.anchor),S()}d(f)}class V{$destroy(){F(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y=[];function z(t,n){return{subscribe:B(t,n).subscribe}}function B(n,e=t){let o;const r=[];function s(t){if(i(n,t)&&(n=t,o)){const t=!Y.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),Y.push(e,n)}if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(i,c=t){const u=[i,c];return r.push(u),1===r.length&&(o=e(s)||t),i(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function U(n,e,o){const i=!Array.isArray(n),c=i?[n]:n,u=e.length<2;return z(o,(n=>{let o=!1;const l=[];let a=0,f=t;const p=()=>{if(a)return;f();const o=e(i?l[0]:l,n);u?n(o):f=s(o)?o:t},h=c.map(((n,e)=>function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(n,(t=>{l[e]=t,a&=~(1<<e),o&&p()}),(()=>{a|=1<<e}))));return o=!0,p(),function(){r(h),f()}}))}function W(t){let e,o,r;const s=[t[2]];var i=t[0];function l(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=new i(l()),e.$on("routeEvent",t[7])),{c(){e&&M(e.$$.fragment),o=p()},m(t,n){e&&P(e,t,n),c(t,o,n),r=!0},p(t,n){const r=4&n?D(s,[I(t[2])]):{};if(i!==(i=t[0])){if(e){N();const t=e;q(t.$$.fragment,1,0,(()=>{F(t,1)})),T()}i?(e=new i(l()),e.$on("routeEvent",t[7]),M(e.$$.fragment),R(e.$$.fragment,1),P(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&R(e.$$.fragment,t),r=!0)},o(t){e&&q(e.$$.fragment,t),r=!1},d(t){t&&u(o),e&&F(e,t)}}}function X(t){let e,o,r;const s=[{params:t[1]},t[2]];var i=t[0];function l(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=new i(l()),e.$on("routeEvent",t[6])),{c(){e&&M(e.$$.fragment),o=p()},m(t,n){e&&P(e,t,n),c(t,o,n),r=!0},p(t,n){const r=6&n?D(s,[2&n&&{params:t[1]},4&n&&I(t[2])]):{};if(i!==(i=t[0])){if(e){N();const t=e;q(t.$$.fragment,1,0,(()=>{F(t,1)})),T()}i?(e=new i(l()),e.$on("routeEvent",t[6]),M(e.$$.fragment),R(e.$$.fragment,1),P(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&R(e.$$.fragment,t),r=!0)},o(t){e&&q(e.$$.fragment,t),r=!1},d(t){t&&u(o),e&&F(e,t)}}}function G(t){let n,e,o,r;const s=[X,W],i=[];function l(t,n){return t[1]?0:1}return n=l(t),e=i[n]=s[n](t),{c(){e.c(),o=p()},m(t,e){i[n].m(t,e),c(t,o,e),r=!0},p(t,[r]){let c=n;n=l(t),n===c?i[n].p(t,r):(N(),q(i[c],1,1,(()=>{i[c]=null})),T(),e=i[n],e?e.p(t,r):(e=i[n]=s[n](t),e.c()),R(e,1),e.m(o.parentNode,o))},i(t){r||(R(e),r=!0)},o(t){q(e),r=!1},d(t){i[n].d(t),t&&u(o)}}}function J(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const K=z(null,(function(t){t(J());const n=()=>{t(J())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));U(K,(t=>t.location)),U(K,(t=>t.querystring));function Q(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class i{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,i=[],c="",u=t.split("/");for(u[0]||u.shift();r=u.shift();)"*"===(e=r[0])?(i.push("wild"),c+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),c+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~o?"?":"")+"\\"+r.substring(s))):c+="/"+r;return{keys:i,pattern:new RegExp("^"+c+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r&&t.startsWith(r))t=t.substr(r.length)||"/";else if(r instanceof RegExp){const n=t.match(r);n&&n[0]&&(t=t.substr(n[0].length)||"/")}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const c=[];o instanceof Map?o.forEach(((t,n)=>{c.push(new i(n,t))})):Object.keys(o).forEach((t=>{c.push(new i(t,o[t]))}));let u=null,l=null,a={};const f=$();async function p(t,n){await(E(),x),f(t,n)}let h=null;var d;s&&(window.addEventListener("popstate",(t=>{h=t.state&&t.state.scrollY?t.state:null})),d=()=>{h?window.scrollTo(h.scrollX,h.scrollY):window.scrollTo(0,0)},g().$$.after_update.push(d));let b=null,y=null;return K.subscribe((async t=>{b=t;let n=0;for(;n<c.length;){const o=c[n].match(t.location);if(!o){n++;continue}const r={route:c[n].path,location:t.location,querystring:t.querystring,userData:c[n].userData};if(!await c[n].checkConditions(r))return e(0,u=null),y=null,void p("conditionsFailed",r);p("routeLoading",Object.assign({},r));const s=c[n].component;if(y!=s){s.loading?(e(0,u=s.loading),y=s,e(1,l=s.loadingParams),e(2,a={}),p("routeLoaded",Object.assign({},r,{component:u,name:u.name}))):(e(0,u=null),y=null);const n=await s();if(t!=b)return;e(0,u=n&&n.default||n),y=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,l=o):e(1,l=null),e(2,a=c[n].props),void p("routeLoaded",Object.assign({},r,{component:u,name:u.name}))}e(0,u=null),y=null})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[u,l,a,o,r,s,function(n){m(t,n)},function(n){m(t,n)}]}class Z extends V{constructor(t){super(),H(this,t,Q,G,i,{routes:3,prefix:4,restoreScrollState:5})}}function tt(n){let e,o,r,s,i;return{c(){e=l("h1"),e.textContent="Hello world!",o=f(),r=l("p"),r.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',s=f(),i=l("p"),i.innerHTML='This template is pre-configured with svlete-spa-router for routing.<br/>\n  Visit the <a href="https://github.com/ItalyPaleAle/svelte-spa-router">documentation for the router</a> to learn more.'},m(t,n){c(t,e,n),c(t,o,n),c(t,r,n),c(t,s,n),c(t,i,n)},p:t,i:t,o:t,d(t){t&&u(e),t&&u(o),t&&u(r),t&&u(s),t&&u(i)}}}function nt(n){let e,o,r;return{c(){var t,n,s;e=l("h1"),e.textContent="Not Found",o=f(),r=l("p"),r.textContent="This route doesn't exist.",t=e,n="class",null==(s="svelte-r5e5ng")?t.removeAttribute(n):t.getAttribute(n)!==s&&t.setAttribute(n,s)},m(t,n){c(t,e,n),c(t,o,n),c(t,r,n)},p:t,i:t,o:t,d(t){t&&u(e),t&&u(o),t&&u(r)}}}var et={"/":class extends V{constructor(t){super(),H(this,t,null,tt,i,{})}},"*":class extends V{constructor(t){super(),H(this,t,null,nt,i,{})}}};function ot(n){let e,o,r;return o=new Z({props:{routes:et}}),{c(){e=l("main"),M(o.$$.fragment)},m(t,n){c(t,e,n),P(o,e,null),r=!0},p:t,i(t){r||(R(o.$$.fragment,t),r=!0)},o(t){q(o.$$.fragment,t),r=!1},d(t){t&&u(e),F(o)}}}return new class extends V{constructor(t){super(),H(this,t,null,ot,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map