import{p as r,c as e,h as n}from"./index.6b2a4ffc.js";import{h as s}from"./render.38afe27e.js";var l=r({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:o}){const a=e(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>n(t.tag,{class:a.value},s(o.default))}});export{l as Q};