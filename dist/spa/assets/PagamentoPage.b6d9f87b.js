import{Q as d,a as i,s as a}from"./store.f3572ce6.js";import{l as e,G as t,f as l,n as p,F as r,H as c,K as n,E as s,a6 as x}from"./index.6b2a4ffc.js";import"./QResizeObserver.e530f692.js";import"./render.38afe27e.js";const m={style:{"font-size":"20px","margin-left":"10%","text-shadow":"-1px -1px 1px rgb(0, 0, 0), 1px -1px 1px black, -1px 1px 1px black, 1px 1px 1px black"}},g={key:0},_={key:1,style:{"text-align":"center","margin-top":"20px"}},B=Object.assign({name:"PagamentoPage"},{__name:"PagamentoPage",setup(u){return(f,y)=>(e(),t(r,null,[l(d,{class:"qheader",elevated:"",style:{"background-color":"#6F36A8DD"}},{default:p(()=>[c("p",m,n(s(a).nome),1)]),_:1}),l(i,null,{default:p(()=>[s(a).pedidos&&s(a).pedidos.length>0?(e(),t("ul",g,[(e(!0),t(r,null,x(s(a).pedidos,o=>(e(),t("li",{key:o.id,style:{"list-style-type":"none",display:"flex","align-items":"center","margin-top":"10px"}}," Pedido "+n(o.id)+" - R$ "+n(o.total),1))),128))])):(e(),t("p",_,"Nenhum pedido encontrado."))]),_:1})],64))}});export{B as default};
