"use strict";(self["webpackChunkanimal_finder_client"]=self["webpackChunkanimal_finder_client"]||[]).push([[510],{27:(e,t,a)=>{a.d(t,{C:()=>l});const l={apiUrl:"https://api-animalfinder.urbanodata.com.br"}},4510:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ae});var l=a(3673),o=a(2323),n=a(8880);const s={class:"row main--row"},r=(0,l.Wm)("div",{class:"col-12"},[(0,l.Wm)("h3",null," Seu animais cadastrados ")],-1),d={class:"col-12"},i={class:"pets--table "},m=(0,l.Wm)("tr",null,[(0,l.Wm)("th",{class:"mobile-hide"},"Codigo"),(0,l.Wm)("th",{style:{"min-width":"150px"}},"Nome"),(0,l.Wm)("th",{class:"mobile-hide"},"Idade"),(0,l.Wm)("th",{class:"mobile-hide"},"Status"),(0,l.Wm)("th",{class:"mobile-hide"},"Comunicado"),(0,l.Wm)("th",{class:"col-lg-2"})],-1),u={class:"mobile-hide"},p=(0,l.Wm)("br",null,null,-1),c={class:"mobile-only"},g=(0,l.Wm)("br",null,null,-1),w={key:0,class:"mobile-only text-red"},h={key:1,class:"mobile-only text-green"},f={class:"mobile-only"},y={class:"mobile-only"},W={key:2,class:"mobile-only text-orange"},P=(0,l.Uk)(),k=(0,l.Wm)("br",null,null,-1),C={key:3},b={class:"mobile-hide"},q={class:"mobile-hide"},_={key:0,class:"text-red"},j={key:1,class:"text-orange"},V={key:2,class:"text-orange"},v={key:3,class:"text-green"},z={class:"mobile-hide"},U={class:"q-pa-md q-gutter-sm"},Z=(0,l.Wm)("div",{class:"text-h6"},"Cadastrar animal desaparecido",-1),x={key:0,class:"error--list"},D={key:0,class:"error--list"},I={key:0,class:"error--list"},A={key:0,class:"error--list"},K=(0,l.Wm)("div",{class:"text-h6"},"Cadastrar foto do animal",-1),S=(0,l.Wm)("span",{class:"q-ml-sm"},"Confirmar excluir animal?",-1),Q=(0,l.Wm)("span",{class:"q-ml-sm"},"Confirmar animal encontrado?",-1);function F(e,t,a,F,O,E){const H=(0,l.up)("q-btn"),T=(0,l.up)("q-page"),Y=(0,l.up)("q-card-section"),N=(0,l.up)("q-input"),B=(0,l.up)("q-card-actions"),J=(0,l.up)("q-card"),L=(0,l.up)("q-dialog"),R=(0,l.up)("q-file"),$=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(l.HY,null,[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l.Wm)("div",s,[r,(0,l.Wm)("div",d,[(0,l.Wm)("table",i,[m,((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.data.pets,(t=>((0,l.wg)(),(0,l.j4)("tr",{key:t.id},[(0,l.Wm)("td",u,(0,o.zw)(t.id),1),(0,l.Wm)("td",null,[(0,l.Wm)("strong",null,(0,o.zw)(t.name),1),p,(0,l.Wm)("label",c,"Idade: "+(0,o.zw)(t.age),1),g,1==t.status?((0,l.wg)(),(0,l.j4)("strong",w,"Perdido")):(0,l.kq)("",!0),3==t.status?((0,l.wg)(),(0,l.j4)("strong",h,"Encontrato")):(0,l.kq)("",!0),(0,l.Wm)("p",f,(0,o.zw)(t.information),1),(0,l.Wm)("p",y,(0,o.zw)(t.city)+" - "+(0,o.zw)(t.state),1),2==t.status?((0,l.wg)(),(0,l.j4)("strong",W,"Comunicado")):(0,l.kq)("",!0),P,k,2==t.status?((0,l.wg)(),(0,l.j4)("strong",C,(0,o.zw)(t.found_name)+" - "+(0,o.zw)(t.found_phone),1)):(0,l.kq)("",!0)]),(0,l.Wm)("td",b,(0,o.zw)(t.age),1),(0,l.Wm)("td",q,[1==t.status?((0,l.wg)(),(0,l.j4)("strong",_,"Perdido")):(0,l.kq)("",!0),2==t.status?((0,l.wg)(),(0,l.j4)("strong",j,"Comunicado")):(0,l.kq)("",!0),2==t.status?((0,l.wg)(),(0,l.j4)("strong",V,(0,o.zw)(t.found_name)+" - "+(0,o.zw)(t.found_phone),1)):(0,l.kq)("",!0),3==t.status?((0,l.wg)(),(0,l.j4)("strong",v,"Encontrato")):(0,l.kq)("",!0)]),(0,l.Wm)("td",z,(0,o.zw)(t.found_name)+" - "+(0,o.zw)(t.found_phone),1),(0,l.Wm)("td",null,[(0,l.Wm)("div",U,[3!=t.status?((0,l.wg)(),(0,l.j4)(H,{key:0,color:"blue",icon:"image",onClick:a=>{e.addPetImagePrompt=!0,e.pet=t}},null,8,["onClick"])):(0,l.kq)("",!0),3!=t.status?((0,l.wg)(),(0,l.j4)(H,{key:1,color:"blue",icon:"done",onClick:a=>{e.foundPetPrompt=!0,e.pet=t}},null,8,["onClick"])):(0,l.kq)("",!0),(0,l.Wm)(H,{color:"red",icon:"delete",onClick:a=>{e.deletPetPrompt=!0,e.pet=t}},null,8,["onClick"])])])])))),128))])])]),(0,l.Wm)(H,{color:"green",icon:"add",class:"bet--add--pet",onClick:t[1]||(t[1]=t=>e.addPetPrompt=!0)})])),_:1}),(0,l.Wm)(L,{modelValue:e.addPetPrompt,"onUpdate:modelValue":t[13]||(t[13]=t=>e.addPetPrompt=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(J,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(Y,null,{default:(0,l.w5)((()=>[Z])),_:1}),(0,l.Wm)(Y,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(N,{dense:"",modelValue:e.pet.name,"onUpdate:modelValue":t[2]||(t[2]=t=>e.pet.name=t),placeholder:"Digite o nome do animal",autofocus:"",onKeyup:t[3]||(t[3]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"]),e.pet.errors.hasOwnProperty("name")?((0,l.wg)(),(0,l.j4)("ul",x,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.pet.errors.name,(e=>((0,l.wg)(),(0,l.j4)("li",{key:e},(0,o.zw)(e),1)))),128))])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(Y,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(N,{dense:"",modelValue:e.pet.age,"onUpdate:modelValue":t[4]||(t[4]=t=>e.pet.age=t),type:"number",placeholder:"Idade do animal",autofocus:"",onKeyup:t[5]||(t[5]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"]),e.pet.errors.hasOwnProperty("age")?((0,l.wg)(),(0,l.j4)("ul",D,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.pet.errors.age,(e=>((0,l.wg)(),(0,l.j4)("li",{key:e},(0,o.zw)(e),1)))),128))])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(Y,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(N,{dense:"",modelValue:e.pet.state,"onUpdate:modelValue":t[6]||(t[6]=t=>e.pet.state=t),placeholder:"Estado em que desapareceu (ex: Sao Paulo)",autofocus:"",onKeyup:t[7]||(t[7]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"]),e.pet.errors.hasOwnProperty("state")?((0,l.wg)(),(0,l.j4)("ul",I,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.pet.errors.state,(e=>((0,l.wg)(),(0,l.j4)("li",{key:e},(0,o.zw)(e),1)))),128))])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(Y,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(N,{dense:"",modelValue:e.pet.city,"onUpdate:modelValue":t[8]||(t[8]=t=>e.pet.city=t),placeholder:"Cidade em que desapareceu (ex: Santos)",autofocus:"",onKeyup:t[9]||(t[9]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"]),e.pet.errors.hasOwnProperty("city")?((0,l.wg)(),(0,l.j4)("ul",A,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.pet.errors.city,(e=>((0,l.wg)(),(0,l.j4)("li",{key:e},(0,o.zw)(e),1)))),128))])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(Y,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(N,{dense:"",modelValue:e.pet.information,"onUpdate:modelValue":t[10]||(t[10]=t=>e.pet.information=t),placeholder:"Digite aqui outros informacoes relevantes",autofocus:"",onKeyup:t[11]||(t[11]=(0,n.D2)((t=>e.addPet()),["enter"]))},null,8,["modelValue"])])),_:1}),(0,l.Wm)(B,{align:"right",class:"text-primary"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(H,{flat:"",label:"Cancelar"},null,512),[[$]]),(0,l.Wm)(H,{flat:"",label:"Cadastrar",onClick:t[12]||(t[12]=t=>e.addPet())})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(L,{modelValue:e.addPetImagePrompt,"onUpdate:modelValue":t[17]||(t[17]=t=>e.addPetImagePrompt=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(J,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(Y,null,{default:(0,l.w5)((()=>[K])),_:1}),(0,l.Wm)(Y,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{filled:"",onChange:t[14]||(t[14]=t=>e.handleFileUpload(t)),modelValue:e.pet.src,"onUpdate:modelValue":t[15]||(t[15]=t=>e.pet.src=t),label:"Selecione foto do animal",accept:".jpg, image/*"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(B,{align:"right",class:"text-primary"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(H,{flat:"",label:"Cancelar"},null,512),[[$]]),(0,l.Wm)(H,{flat:"",label:"Cadastrar",onClick:t[16]||(t[16]=t=>e.addPetImage())})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(L,{modelValue:e.deletPetPrompt,"onUpdate:modelValue":t[19]||(t[19]=t=>e.deletPetPrompt=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(J,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Y,{class:"row items-center"},{default:(0,l.w5)((()=>[S])),_:1}),(0,l.Wm)(B,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(H,{flat:"",label:"Cancelar",color:"primary"},null,512),[[$]]),(0,l.wy)((0,l.Wm)(H,{flat:"",label:"Confirmar",color:"primary",onClick:t[18]||(t[18]=t=>e.deletePet())},null,512),[[$]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(L,{modelValue:e.foundPetPrompt,"onUpdate:modelValue":t[21]||(t[21]=t=>e.foundPetPrompt=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(J,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Y,{class:"row items-center"},{default:(0,l.w5)((()=>[Q])),_:1}),(0,l.Wm)(B,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(H,{flat:"",label:"Cancelar",color:"primary"},null,512),[[$]]),(0,l.wy)((0,l.Wm)(H,{flat:"",label:"Confirmar",color:"primary",onClick:t[20]||(t[20]=t=>e.foundPet())},null,512),[[$]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var O=a(6417),E=a(27);const H=a(52).default,T=E.C.apiUrl,Y=(0,l.aZ)({name:"PageAccount",components:{},data(){return{token:null,apiUrl:T,data:{},pet:{name:null,age:0,state:null,city:null,information:null,errors:{}},addPetPrompt:!1,addPetImagePrompt:!1,deletPetPrompt:!1,foundPetPrompt:!1}},mounted(){"success"===this.$route.query.login&&O.Z.create({type:"positive",message:"Logado com sucesso!!"}),this.token=window.localStorage.getItem("token"),this.token?this.getUserData():(window.location.href="#/?login=do",O.Z.create({type:"negative",message:"Faca login para Area restrita!"}))},methods:{getUserData(){H.get(T+"/api/v1/users",{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((e=>{this.data=e.data})).catch((e=>{window.localStorage.clear("token"),"Signature verification raised"===e.response.data.errors&&(window.location.href="/?login=do",O.Z.create({type:"negative",message:"Faca login para Area restrita!"}))}))},deletePet(){H.delete(T+"/api/v1/pets/"+this.pet.id,{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((e=>{this.getUserData()}))},foundPet(){H.patch(T+"/api/v1/pets/found/"+this.pet.id,{},{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((e=>{O.Z.create({type:"positive",message:"Animal atualizado para ENCONTRADO!"}),this.getUserData()})).catch((e=>{console.log(e)}))},addPet(){const e=JSON.stringify({pet:this.pet});H.post(T+"/api/v1/pets",e,{headers:{"Content-Type":"application/json",Authorization:this.token}}).then((e=>{O.Z.create({type:"positive",message:"Pet cadastrado com sucesso"}),this.addPetPrompt=!1,this.getUserData()})).catch((e=>{O.Z.create({type:"negative",message:"Erro ao salvar pet"}),this.pet.errors=e.response.data}))},handleFileUpload(e){this.pet.image=e.target.files[0]},addPetImage(){const e=new FormData;e.append("image",this.pet.image),H.patch(T+"/api/v1/pets/image/"+this.pet.id,e,{headers:{"Content-Type":"multipart/form-data",Authorization:this.token}}).then((e=>{O.Z.create({type:"positive",message:"Foto salva com sucesso!"}),this.addPetImagePrompt=!1,this.pet.src=null})).catch((e=>{O.Z.create({type:"negative",message:"Erro ao salvar!"}),console.log(e)}))}}});var N=a(4379),B=a(9892),J=a(2134),L=a(151),R=a(5589),$=a(2426),G=a(9367),M=a(9116),X=a(677),ee=a(7518),te=a.n(ee);Y.render=F;const ae=Y;te()(Y,"components",{QPage:N.Z,QBtn:B.Z,QDialog:J.Z,QCard:L.Z,QCardSection:R.Z,QInput:$.Z,QCardActions:G.Z,QFile:M.Z}),te()(Y,"directives",{ClosePopup:X.Z})}}]);