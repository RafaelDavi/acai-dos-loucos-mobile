import{n as v,a as I,Q as d,g as O}from"./QBtn.f5a729ad.js";import{p as B,c as i,h as u,r as h,w as m,o as V,g as x,O as M}from"./index.6b2a4ffc.js";import{h as q}from"./render.38afe27e.js";import{c as P}from"./QMenu.4d612f45.js";import{c as _}from"./focus-manager.b2fb196f.js";import{a as j}from"./focusout.3772d431.js";var R=B({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const o=i(()=>{const a=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${a.length!==0?" "+a:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>u("div",{class:o.value},q(t.default))}});const $=Object.keys(v);function L(e){return $.reduce((t,o)=>{const a=e[o];return a!==void 0&&(t[o]=a),t},{})}var F=B({name:"QBtnDropdown",props:{...v,...j,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:o}){const{proxy:a}=x(),l=h(e.modelValue),r=h(null),c=_(),f=i(()=>{const n={"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":c.value,"aria-label":e.toggleAriaLabel||a.$q.lang.label[l.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),S=i(()=>"q-btn-dropdown__arrow"+(l.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),b=i(()=>O(e)),w=i(()=>L(e));m(()=>e.modelValue,n=>{r.value!==null&&r.value[n?"show":"hide"]()}),m(()=>e.split,s);function C(n){l.value=!0,o("beforeShow",n)}function y(n){o("show",n),o("update:modelValue",!0)}function A(n){l.value=!1,o("beforeHide",n)}function D(n){o("hide",n),o("update:modelValue",!1)}function Q(n){o("click",n)}function k(n){M(n),s(),o("click",n)}function H(n){r.value!==null&&r.value.toggle(n)}function g(n){r.value!==null&&r.value.show(n)}function s(n){r.value!==null&&r.value.hide(n)}return Object.assign(a,{show:g,hide:s,toggle:H}),V(()=>{e.modelValue===!0&&g()}),()=>{const n=[u(I,{class:S.value,name:e.dropdownIcon||a.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(u(P,{ref:r,id:c.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:C,onShow:y,onBeforeHide:A,onHide:D},t.default)),e.split===!1?u(d,{class:"q-btn-dropdown q-btn-dropdown--simple",...w.value,...f.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:Q},{default:()=>q(t.label,[]).concat(n),loading:t.loading}):u(R,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...b.value,glossy:e.glossy,stretch:e.stretch},()=>[u(d,{class:"q-btn-dropdown--current",...w.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:k},{default:t.label,loading:t.loading}),u(d,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...f.value,...b.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>n)])}}});export{F as Q};