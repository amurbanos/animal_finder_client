"use strict";(self["webpackChunkanimal_finder_client"]=self["webpackChunkanimal_finder_client"]||[]).push([[378],{3378:(t,e,n)=>{n.r(e),n.d(e,{default:()=>C});var a=n(3673),l=n(2323);const o={class:"row main--row"},s=(0,a.Wm)("div",{class:"col-12"},[(0,a.Wm)("h3",null," Seu animais cadastrados ")],-1),i={class:"col-12"},d={class:"pets--table "},c=(0,a.Wm)("tr",null,[(0,a.Wm)("th",null,"Codigo"),(0,a.Wm)("th",null,"Nome"),(0,a.Wm)("th",null,"Idade"),(0,a.Wm)("th",null,"Status"),(0,a.Wm)("th",null,"Informacoes"),(0,a.Wm)("th",{class:"col-lg-2"})],-1),u=(0,a.Wm)("td",null,"Estudante",-1),r=(0,a.Wm)("td",null,"Estudante",-1),m={class:"q-pa-md q-gutter-sm"};function h(t,e,n,h,p,g){const W=(0,a.up)("q-btn"),w=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)("div",o,[s,(0,a.Wm)("div",i,[(0,a.Wm)("table",d,[c,((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(t.data.pets,(e=>((0,a.wg)(),(0,a.j4)("tr",{key:e.id},[(0,a.Wm)("td",null,(0,l.zw)(e.id),1),(0,a.Wm)("td",null,(0,l.zw)(e.name),1),(0,a.Wm)("td",null,(0,l.zw)(e.age),1),u,r,(0,a.Wm)("td",null,[(0,a.Wm)("div",m,[(0,a.Wm)(W,{color:"blue",icon:"done"}),(0,a.Wm)(W,{color:"blue",icon:"edit"}),(0,a.Wm)(W,{color:"red",icon:"delete",onClick:n=>t.deletePet(e.id)},null,8,["onClick"])])])])))),128))])])])])),_:1})}var p=n(6417);const g=n(52).default,W="http://172.17.0.2:3000",w=(0,a.aZ)({name:"PageAccount",components:{},data(){return{token:null,apiUrl:W,data:{}}},mounted(){"success"===this.$route.query.login&&p.Z.create({type:"positive",message:"Logado com sucesso!!"}),this.token=window.localStorage.getItem("token"),this.token?this.getUserData():(window.location.href="#/?login=do",p.Z.create({type:"negative",message:"Faca login para Area restrita!"}))},methods:{getUserData(){g.get(W+"/api/v1/users",{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((t=>{this.data=t.data}))},deletePet(t){g.delete(W+"/api/v1/pets/"+t,{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((t=>{window.location.href="#/account?delete"}))}}});var k=n(4379),f=n(3187),v=n(7518),b=n.n(v);w.render=h;const C=w;b()(w,"components",{QPage:k.Z,QBtn:f.Z})}}]);