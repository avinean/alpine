import{M as m,I as p,d as c,a9 as i,r as l,N as e,l as u}from"./entry.CrDovlDN.js";import{u as d}from"./asyncData.Cv-H3RYW.js";import f from"./Ellipsis.ZBPWzbwF.js";import y from"./ComponentPlaygroundData.BEwEs4DL.js";import"./TabsHeader.u9S46NE9.js";import"./ComponentPlaygroundProps.CU2g6WhZ.js";import"./ProseH4.zyJVrl2B.js";import"./ProseCodeInline.CWmGNuu8.js";import"./Badge.CRD5Klk4.js";import"./MDCSlot.EpG8JqaF.js";import"./slot.CtQ1nkgU.js";import"./ProseP.B0pzoWyz.js";import"./index.DRGfgIsO.js";import"./ComponentPlaygroundSlots.vue.BNtnkuo5.js";import"./ComponentPlaygroundTokens.vue.CkKAaQoq.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-f32a5a03"]]);export{V as default};
