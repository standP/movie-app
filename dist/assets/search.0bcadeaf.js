import{_ as d}from"./left-arrow.4386ce21.js";import{_ as m}from"./01.8c5564fa.js";import{A as v}from"./index.4d626d5a.js";import{_ as u,r as f,b as s,o as h,c as x,w as t,k as r,f as e,p as w,l as g}from"./index.6d232491.js";const _=o=>(w("data-v-a6567a92"),o=o(),g(),o),k=_(()=>e("div",{class:"text-[14px] text-white"},"\u641C\u7D22",-1)),I={class:"content-box flex-1 overflow-auto"},y=_(()=>e("div",{class:"box"},[e("div",{class:"item"},[e("img",{class:"w-full h-full",src:m})])],-1)),b={name:"search",setup(o){const n=f({pageIndex:"1",keyword:""});return(()=>{v.movieInfo.search(n).then(a=>{console.log(a)})})(),(a,c)=>{const p=s("van-search"),i=s("van-empty"),l=s("page-view");return h(),x(l,{class:"flex flex-col"},{default:t(()=>[r(p,{background:"#F7504D",shape:"round","show-action":"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57"},{left:t(()=>[e("img",{src:d,class:"mr-[10px]",onClick:c[0]||(c[0]=B=>a.$router.back())})]),action:t(()=>[k]),_:1}),e("div",I,[r(i,{description:"\u6682\u65E0\u6570\u636E"}),y])]),_:1})}}};var N=u(b,[["__scopeId","data-v-a6567a92"]]);export{N as default};