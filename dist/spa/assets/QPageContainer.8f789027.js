import{p as s,i,q as a,t as p,u,c,h as d,v as g,g as l}from"./index.6b2a4ffc.js";import{h as f}from"./render.38afe27e.js";var $=s({name:"QPageContainer",setup(h,{slots:o}){const{proxy:{$q:r}}=l(),e=i(p,a);if(e===a)return console.error("QPageContainer needs to be child of QLayout"),a;u(g,!0);const n=c(()=>{const t={};return e.header.space===!0&&(t.paddingTop=`${e.header.size}px`),e.right.space===!0&&(t[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(t.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(t[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),t});return()=>d("div",{class:"q-page-container",style:n.value},f(o.default))}});export{$ as Q};