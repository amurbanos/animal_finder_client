"use strict";(self["webpackChunkanimal_finder_client"]=self["webpackChunkanimal_finder_client"]||[]).push([[96],{27:(e,t,a)=>{a.d(t,{C:()=>n});const n={apiUrl:"https://api-animalfinder.urbanodata.com.br"}},8096:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var n=a(3673),o=a(2323),l=a(8880);const s={class:"row main--row"},d=(0,n.Wm)("div",{class:"col-12"},[(0,n.Wm)("h3",null," Perdidos ")],-1),i={class:"text-center"},u=(0,n.Wm)("strong",null,"Nome:",-1),p=(0,n.Wm)("strong",null,"Idade:",-1),c=(0,n.Wm)("strong",null,"Desapareceu em:",-1),r=(0,n.Wm)("hr",null,null,-1),m={class:"row"},g={class:"pagination text-center col-12"},h=(0,n.Wm)("div",{class:"text-h6"},"Digite seus dados para contato",-1);function f(e,t,a,f,v,W){const w=(0,n.up)("q-btn"),F=(0,n.up)("q-page"),P=(0,n.up)("q-card-section"),_=(0,n.up)("q-input"),k=(0,n.up)("q-card-actions"),C=(0,n.up)("q-card"),y=(0,n.up)("q-dialog"),Z=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)(F,null,{default:(0,n.w5)((()=>[(0,n.Wm)("div",s,[d,((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.data.pets,(t=>((0,n.wg)(),(0,n.j4)("div",{key:t.id,class:"col-lg-3 col-sm-4 col-12 pet--card"},[(0,n.Wm)("div",i,[(0,n.Wm)("img",{src:e.apiUrl+t.image_url},null,8,["src"])]),(0,n.Wm)("div",null,[u,(0,n.Uk)(" "+(0,o.zw)(t.name),1)]),(0,n.Wm)("div",null,[p,(0,n.Uk)(" "+(0,o.zw)(t.age),1)]),(0,n.Wm)("div",null,[c,(0,n.Uk)(" "+(0,o.zw)(t.city)+" - "+(0,o.zw)(t.state),1)]),(0,n.Wm)("div",null,[(0,n.Wm)(w,{color:"black",label:"Encontrei",class:"btn--report",onClick:a=>{e.petFound=t,e.promptPetFound=!0}},null,8,["onClick"])]),r])))),128))]),(0,n.Wm)("div",m,[(0,n.Wm)("div",g,[(0,n.Wm)("a",{href:"javascript: void(0)",onClick:t[1]||(t[1]=t=>e.getPage(1))},"«"),((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.data.total_pages,(t=>((0,n.wg)(),(0,n.j4)("a",{href:"javascript: void(0)",key:t,onClick:a=>e.getPage(t)},(0,o.zw)(t),9,["onClick"])))),128)),(0,n.Wm)("a",{href:"javascript: void(0)",onClick:t[2]||(t[2]=t=>e.getPage(e.data.total_pages))},"»")])])])),_:1}),(0,n.Wm)(y,{modelValue:e.promptPetFound,"onUpdate:modelValue":t[8]||(t[8]=t=>e.promptPetFound=t),persistent:""},{default:(0,n.w5)((()=>[(0,n.Wm)(C,{style:{"min-width":"350px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(P,null,{default:(0,n.w5)((()=>[h])),_:1}),(0,n.Wm)(P,{class:"q-pt-none"},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{dense:"",modelValue:e.petFound.found_name,"onUpdate:modelValue":t[3]||(t[3]=t=>e.petFound.found_name=t),placeholder:"Digite o seu nome",autofocus:"",onKeyup:t[4]||(t[4]=(0,l.D2)((t=>e.validatePetFound()),["enter"])),class:"text-center"},null,8,["modelValue"])])),_:1}),(0,n.Wm)(P,{class:"q-pt-none"},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{dense:"",modelValue:e.petFound.found_phone,"onUpdate:modelValue":t[5]||(t[5]=t=>e.petFound.found_phone=t),placeholder:"Digite o seu telefone",mask:"(##) ##### - ####",autofocus:"",onKeyup:t[6]||(t[6]=(0,l.D2)((t=>e.validatePetFound()),["enter"])),class:"text-center"},null,8,["modelValue"])])),_:1}),(0,n.Wm)(k,{align:"right",class:"text-primary"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(w,{flat:"",label:"Cancelar"},null,512),[[Z]]),(0,n.Wm)(w,{flat:"",label:"Comunicar",onClick:t[7]||(t[7]=t=>e.validatePetFound())})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var v=a(27),W=a(6417);const w=v.C.apiUrl,F=a(52).default,P=(0,n.aZ)({name:"PageIndex",components:{},data(){return{data:{},apiUrl:w,promptPetFound:!1,petFound:{}}},mounted(){this.getPage(1)},methods:{getPage(e){F.get(w+"/api/v1/pets?page="+e).then((e=>this.data=e.data))},validatePetFound(){this.petFound.found_name&&this.petFound.found_phone?(this.petFound.status=2,this.setPetFound()):W.Z.create({type:"warning",message:"Digite os dados para contato"})},setPetFound(){const e=JSON.stringify({pet:this.petFound});F.patch(w+"/api/v1/pets/"+this.petFound.id,e,{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((e=>{W.Z.create({type:"positive",message:"Notificado com sucesso, aguarde o contato!"}),this.getPage(1),this.promptPetFound=!1})).catch((e=>{W.Z.create({type:"negative",message:"Nao foi possivel notificar"}),this.pet.errors=e.response.data}))}}});var _=a(4379),k=a(9892),C=a(2134),y=a(151),Z=a(5589),b=a(2426),U=a(9367),j=a(677),q=a(7518),V=a.n(q);P.render=f;const x=P;V()(P,"components",{QPage:_.Z,QBtn:k.Z,QDialog:C.Z,QCard:y.Z,QCardSection:Z.Z,QInput:b.Z,QCardActions:U.Z}),V()(P,"directives",{ClosePopup:j.Z})}}]);