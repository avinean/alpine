import w from"./ArticlesListItem.DVoTQqZ5.js";import k from"./ProseA.C8ruNZQs.js";import v from"./ProseCodeInline.CWmGNuu8.js";import{u as I}from"./asyncData.Cv-H3RYW.js";import{d as g,Y as A,I as S,M as n,b as a,c as r,e as o,g as i,F as b,Z as C,j as e,w as u,p as B,i as L,s as G,$ as N,X as V,l as j}from"./entry.CrDovlDN.js";import"./date.BcWussCh.js";const F=t=>(B("data-v-ea769acb"),t=t(),L(),t),P={key:0,class:"articles-list"},T={class:"featured"},Y={class:"layout"},$={key:1,class:"tour"},q=F(()=>o("p",null,"Seems like there are no articles yet.",-1)),D=g({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const _=t,{data:m}=([s,l]=A(async()=>I(_.path,async()=>await G(N(_.path)).sort({date:-1}).find(),"$xG7jn9bGGo")),s=await s,l(),s),c=S(()=>m.value||[]);return(E,M)=>{var d;const p=w,h=k,f=v;return(d=n(c))!=null&&d.length?(a(),r("div",P,[o("div",T,[i(p,{article:n(c)[0],featured:!0},null,8,["article"])]),o("div",Y,[(a(!0),r(b,null,C(n(c).slice(1),(y,x)=>(a(),V(p,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",$,[q,o("p",null,[e(" You can start by "),i(h,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(f,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),O=j(D,[["__scopeId","data-v-ea769acb"]]);export{O as default};
