import{Q as oe}from"./QItemLabel.1cdebbe5.js";import{Q as ae,a as ne,b as ie}from"./QMenu.4d612f45.js";import{Q as re}from"./QBtnDropdown.3fc238f0.js";import{Q as se}from"./QPageContainer.8f789027.js";import{Q as x}from"./QCardSection.f5622060.js";import{Q as V,C as F}from"./ClosePopup.bc81816d.js";import{Q as ue,s as Q,a as ce}from"./store.f3572ce6.js";import{Q as I}from"./QCard.b1688dd4.js";import{b as de,v as $,Q as h,a as j}from"./QBtn.f5a729ad.js";import{Q as me}from"./QBadge.a09cc282.js";import{Q as q}from"./QDialog.cf680e4f.js";import{Q as ge}from"./QToolbar.5eba46c1.js";import{Q as fe}from"./QToolbarTitle.d4e951a7.js";import{Q as he}from"./QLayout.f52418c1.js";import{c as S,p as ve,r as s,A as _e,o as J,h as p,V as pe,w as ye,g as be,l as v,m as H,n as l,E as o,f as e,C as N,I as B,K as b,L as Se,G as A,a6 as E,F as K,H as u,aj as ke}from"./index.6b2a4ffc.js";import{h as we}from"./render.38afe27e.js";import{d as G}from"./focusout.3772d431.js";import"./focus-manager.b2fb196f.js";import"./dom.e7d511d8.js";import"./QResizeObserver.e530f692.js";const Ce={ratio:[String,Number]};function xe(t,f){return S(()=>{const c=Number(t.ratio||(f!==void 0?f.value:void 0));return isNaN(c)!==!0&&c>0?{paddingBottom:`${100/c}%`}:null})}const Qe=1.7778;var Ie=ve({name:"QImg",props:{...Ce,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Qe},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(t,{slots:f,emit:c}){const k=s(t.initialRatio),w=xe(t,k),_=be(),{registerTimeout:C,removeTimeout:d}=G(),{registerTimeout:D,removeTimeout:L}=G(),z=S(()=>t.placeholderSrc!==void 0?{src:t.placeholderSrc}:null),O=S(()=>t.errorSrc!==void 0?{src:t.errorSrc,__qerror:!0}:null),m=[s(null),s(z.value)],g=s(0),i=s(!1),r=s(!1),a=S(()=>`q-img q-img--${t.noNativeMenu===!0?"no-":""}menu`),R=S(()=>({width:t.width,height:t.height})),W=S(()=>`q-img__image ${t.imgClass!==void 0?t.imgClass+" ":""}q-img__image--with${t.noTransition===!0?"out":""}-transition q-img__image--`),X=S(()=>({...t.imgStyle,objectFit:t.fit,objectPosition:t.position}));function Y(){if(L(),t.loadingShowDelay===0){i.value=!0;return}D(()=>{i.value=!0},t.loadingShowDelay)}function P(){L(),i.value=!1}function Z({target:n}){$(_)===!1&&(d(),k.value=n.naturalHeight===0?.5:n.naturalWidth/n.naturalHeight,U(n,1))}function U(n,y){y===1e3||$(_)===!0||(n.complete===!0?ee(n):C(()=>{U(n,y+1)},50))}function ee(n){$(_)!==!0&&(g.value=g.value^1,m[g.value].value=null,P(),n.getAttribute("__qerror")!=="true"&&(r.value=!1),c("load",n.currentSrc||n.src))}function te(n){d(),P(),r.value=!0,m[g.value].value=O.value,m[g.value^1].value=z.value,c("error",n)}function M(n){const y=m[n].value,T={key:"img_"+n,class:W.value,style:X.value,alt:t.alt,crossorigin:t.crossorigin,decoding:t.decoding,referrerpolicy:t.referrerpolicy,height:t.height,width:t.width,loading:t.loading,fetchpriority:t.fetchpriority,"aria-hidden":"true",draggable:t.draggable,...y};return g.value===n?Object.assign(T,{class:T.class+"current",onLoad:Z,onError:te}):T.class+="loaded",p("div",{class:"q-img__container absolute-full",key:"img"+n},p("img",T))}function le(){return i.value===!1?p("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},we(f[r.value===!0?"error":"default"])):p("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},f.loading!==void 0?f.loading():t.noSpinner===!0?void 0:[p(de,{color:t.spinnerColor,size:t.spinnerSize})])}{let n=function(){ye(()=>t.src||t.srcset||t.sizes?{src:t.src,srcset:t.srcset,sizes:t.sizes}:null,y=>{d(),r.value=!1,y===null?(P(),m[g.value^1].value=z.value):Y(),m[g.value].value=y},{immediate:!0})};_e.value===!0?J(n):n()}return()=>{const n=[];return w.value!==null&&n.push(p("div",{key:"filler",style:w.value})),m[0].value!==null&&n.push(M(0)),m[1].value!==null&&n.push(M(1)),n.push(p(pe,{name:"q-transition--fade"},le)),p("div",{key:"main",class:a.value,style:R.value,role:"img","aria-label":t.alt},n)}}});const Ae=u("p",{style:{"font-size":"19px","margin-top":"15px"}},"LOUCOS POR FRANGO",-1),ze=["src"],Fe={style:{width:"100%","font-size":"18px","text-shadow":"-1px 0 black, 0 2px black, 2px 0 black, 0 -1px black",float:"right",color:"#6BC87F"}},Ne={style:{width:"100%","font-size":"18px","text-shadow":"-1px 0 black, 0 2px black, 2px 0 black, 0 -1px black",float:"right",color:"white"}},Le=u("div",{class:"text-h6",style:{color:"white"}},"CARRINHO",-1),Re=u("br",null,null,-1),Te=u("span",{class:"q-ml-sm"},"Produto Removido do carrinho!!",-1),Ve=u("span",{class:"q-ml-sm"},"Produto adicionado ao carrinho!",-1),qe=u("span",{class:"q-ml-sm"},"Acompanhamentos (Escolha 2 de 3)",-1),Be={class:"row"},De=["onClick"],Oe={style:{"text-align":"center",color:"#fff"}},it=Object.assign({name:"IndexPage"},{__name:"IndexPage",setup(t){const f=s([]),c=s(!1),k=s(!1),w=s(!1),_=s(!1),C=s(null),d=s([]),D=s([{nome:"Banana",imagem:"/path/to/banana.png",selected:!1},{nome:"Leite em p\xF3",imagem:"/path/to/leiteempo.png",selected:!1},{nome:"Leite condensado",imagem:"/path/to/leitecondensado.png",selected:!1},{nome:"Granola",imagem:"/path/to/granola.png",selected:!1},{nome:"Abacaxi",imagem:"/path/to/abacaxi.png",selected:!1},{nome:"Kiwi",imagem:"/path/to/kiwi.png",selected:!1},{nome:"Nutella",imagem:"/path/to/nutella.png",selected:!1},{nome:"Kitkat",imagem:"/path/to/kitkat.png",selected:!1},{nome:"Morango",imagem:"/path/to/morango.png",selected:!1}]),L=()=>{c.value=!c.value},z=i=>{Q.removerItem(i),w.value=!0},O=()=>{C.value.acompanhamentos=d.value.map(i=>i.nome),Q.adicionarItem(C.value),k.value=!0,_.value=!1,C.value=null,d.value=[]},m=i=>{C.value=i,_.value=!0},g=i=>{if(i.selected){i.selected=!1;const r=d.value.findIndex(a=>a.nome===i.nome);r!==-1&&d.value.splice(r,1)}else d.value.length<3&&(i.selected=!0,d.value.push(i))};return J(()=>{fetch("/produtos.json").then(i=>i.json()).then(i=>{f.value=i}).catch(i=>{console.error("Erro ao carregar o JSON:",i)})}),(i,r)=>(v(),H(o(he),{view:"hHh lpR fFf"},{default:l(()=>[e(se,null,{default:l(()=>[e(o(ue),{elevated:"",style:{"background-color":"#6F36A8"}},{default:l(()=>[e(o(ge),null,{default:l(()=>[e(o(fe),null,{default:l(()=>[Ae]),_:1}),e(re,{flat:"",color:"white",icon:"person",size:"15px"},{default:l(()=>[e(ae,null,{default:l(()=>[N((v(),H(ne,{clickable:""},{default:l(()=>[e(ie,null,{default:l(()=>[e(oe,null,{default:l(()=>[B("Logout")]),_:1})]),_:1})]),_:1})),[[F]])]),_:1})]),_:1}),e(o(h),{flat:"",icon:"shopping_cart",size:"15px",color:"white",onClick:L},{default:l(()=>[o(Q).carrinho.length>0?(v(),H(o(me),{key:0,floating:"",color:"green",content:o(Q).carrinho.length},{default:l(()=>[B(b(o(Q).carrinho.length),1)]),_:1},8,["content"])):Se("",!0)]),_:1})]),_:1})]),_:1}),e(o(ce),{style:{"background-color":"#6BC87F"},padding:""},{default:l(()=>[(v(!0),A(K,null,E(f.value,a=>(v(),A("div",{key:a.id,style:{display:"flex","margin-bottom":"15px"}},[e(o(I),{class:"my-card",flat:"",bordered:"",style:{width:"50%",float:"left"}},{default:l(()=>[u("img",{src:a.imagem},null,8,ze)]),_:2},1024),e(o(I),{style:{width:"50%","text-align":"center","background-color":"white"}},{default:l(()=>[u("p",Fe,b(a.nome),1),u("p",Ne," R$"+b(a.valor),1),e(o(h),{label:"ADICIONAR",style:{"background-color":"#6F36A8",color:"white",width:"90%","font-size":"15px",float:"right","margin-right":"5%","margin-top":"15px"},icon:"shopping_cart",onClick:R=>m(a)},null,8,["onClick"])]),_:2},1024)]))),128))]),_:1})]),_:1}),e(o(q),{modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=a=>c.value=a)},{default:l(()=>[e(o(I),{style:{"background-color":"#6F36A8"}},{default:l(()=>[e(x,null,{default:l(()=>[Le]),_:1}),e(x,null,{default:l(()=>[u("ul",null,[(v(!0),A(K,null,E(o(Q).carrinho,a=>(v(),A("li",{key:a.id,style:{"list-style-type":"none",color:"#111"}},[B(b(a.nome)+" - R$ "+b(a.valor)+" ",1),Re,B(" acompanhamentos "+b(a.acompanhamentos.length)+" ",1),e(o(h),{size:"10px",dense:"",class:"q-ml-md",round:"",icon:"remove",color:"red",onClick:R=>z(a)},null,8,["onClick"])]))),128))])]),_:1}),e(V,{align:"right"},{default:l(()=>[e(o(h),{label:"Pagamento",style:{"background-color":"#6BC87F",color:"#222"},to:"/Carrinho"}),N(e(o(h),{flat:"",label:"Fechar",color:"white"},null,512),[[F]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(o(q),{modelValue:w.value,"onUpdate:modelValue":r[1]||(r[1]=a=>w.value=a)},{default:l(()=>[e(o(I),{style:{"background-color":"#6F36A8",color:"#fff"}},{default:l(()=>[e(x,{class:"row items-center"},{default:l(()=>[e(o(j),{name:"close",size:"2em",color:"red"}),Te]),_:1}),e(V,{align:"right"},{default:l(()=>[N(e(o(h),{flat:"",label:"OK",color:"white"},null,512),[[F]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(o(q),{modelValue:k.value,"onUpdate:modelValue":r[2]||(r[2]=a=>k.value=a)},{default:l(()=>[e(o(I),{style:{"background-color":"#6F36A8",color:"#fff"}},{default:l(()=>[e(x,{class:"row items-center"},{default:l(()=>[e(o(j),{name:"check",size:"2em",color:"green"}),Ve]),_:1}),e(V,{align:"right"},{default:l(()=>[N(e(o(h),{flat:"",label:"OK",color:"green"},null,512),[[F]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(o(q),{modelValue:_.value,"onUpdate:modelValue":r[3]||(r[3]=a=>_.value=a)},{default:l(()=>[e(o(I),{style:{"background-color":"#6F36A8",color:"#fff"}},{default:l(()=>[e(x,{class:"row items-center"},{default:l(()=>[e(o(j),{name:"check",size:"2em",color:"green"}),qe]),_:1}),e(x,null,{default:l(()=>[u("div",Be,[(v(!0),A(K,null,E(D.value,a=>(v(),A("div",{key:a.nome,onClick:R=>g(a),class:"col-4"},[e(o(Ie),{src:a.imagem,style:ke({border:a.selected?"2px solid green":"none"})},null,8,["src","style"]),u("p",Oe,b(a.nome),1)],8,De))),128))])]),_:1}),e(V,{align:"right"},{default:l(()=>[e(o(h),{label:"ADICIONAR",style:{"background-color":"#6F36A8",color:"white",width:"90%","font-size":"15px",float:"right","margin-right":"5%","margin-top":"15px"},icon:"shopping_cart",onClick:O}),N(e(o(h),{flat:"",label:"Fechar",color:"white"},null,512),[[F]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{it as default};
