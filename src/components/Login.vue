<script setup>
import LCLogoTree from '../components/LCLogoTree.vue'
</script>


<template>
  <div>
  <div>
  <div class='logo'>
    <LCLogoTree/>
    <h1>professorleandrocesar.com</h1>
    <h3>Acesse sua conta</h3>
    <div>
    <form method="post">
    <h4>E-mail</h4>
    <input type="email" name="" id="usuario" placeholder="Digite seu e-mail" autofocus v-model="email">
    <br>
    <h4>Senha</h4>
    <input type="password" name="" id="senha" placeholder="Digite sua senha" v-model="senha">
    <br>
    <div class='forgot'>
    <input class='button-call' type="submit" value="Entrar" id="btn" @click="signup">
    <!-- <RouterLink to="recuperar"><h5>Esqueci minha senha</h5></RouterLink> -->
    </div>
    </form> 
    </div>
  </div>
  </div>
  </div>
</template>
<script>
export default {
data() {
  return {
    email: '',
    senha: '',
  }
},
computed: {
  username() {
    // We will see what `params` is shortly
    return this.$route.params.username
  },
},
methods: {
  goToDashboard() {
    if (isAuthenticated) {
      this.$router.push('/dashboard')
    } else {
      this.$router.push('/login')
    }
  },
  signup(){
    if(this.email === 'lea@gmail.com' & this.senha === '1234'){
      this.$router.replace ('/leandro-cesar')
    } if (this.email === 'cam@gmail.com' & this.senha === '1234') {
      this.$router.replace('/camilla-dimas')
    }
  },
  scrollToTop() {
    window.scrollTo(0, 0);
  }
},
head: {
  title: 'Acesso restrito | leandrocesar.com',
  htmlAttrs: {
    lang: 'pt-br'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Professor Leandro Cesar Ramos da Costa | Site para Conteúdos e Serviços => Personal Trainer | Consultoria Online e Presencial | Acupuntura | Atendimentos em Niterói e São Gonçalo - RJ' },
    { hid: 'keywords', name: 'description', content: 'Personal trainer, Acupuntura, Consultoria' },
    { name: 'format-detection', content: 'telephone=no' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/img/favicon.svg' },
    { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
    { rel: 'icon', type:'image/png', size: '32x32', href: '/img/favicon-32x32.png' },
    { rel: 'icon', type:'image/png', size: '16x16', href: '/img/favicon-16x16.png' },
    { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
    { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#002937' }
  ],
}
}
</script>
<style scoped>
.button-call{
  background: #fadb4190;
  padding: 5px 17px;
  width: 80px;
  margin: -10px 0 0 -10px ;
  border: 1px #ddd solid;
  border-radius: 8px;
  transition: all .4s linear;
  cursor:pointer;
}

.button-call:hover {
  background: #fadb41;
}

.logo{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0 0px 0;
}
.logo h1 {
  margin: 40px 0 -20px 0;
}

input {
  height: 2em;
  padding: 0 0 0 10px;
  margin: 0px 0px 0 -10px;
  text-decoration: none;
  transition: all .4s linear;
  color: #777;
  text-indent: 0;
  background: #fff;
  width: 100%;
  border-radius: 8px 8px 8px 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;   
  border: solid 2px #eee ;
}

input:focus {
  background-color: #fffde1 ;
  border-color: #fadb41;
}

input:hover {
  background-color: #fffde1 ;
}

#btn:hover {
  background: #fadb4132;
  color: #888;
}

.forgot {
  display: flex;
  justify-content: space-around;
  flex-direction: rown;
  flex-wrap: wrap;
}

.forgot h5{
  margin: 0px 0 0px 30px;
  color: #aaa;
  transition: all .4s linear;   
  border-bottom: solid .1px #ffff;

}

.forgot h5:hover{
  margin: 0px 0 0px 30px;
  border-bottom: solid .1px #fadb41;
}

  body {
  background: #fff;
  font-family: 'Philosopher', sans-serif;
  color: #aaa;
  line-height: 1.6;
}

iframe {
  margin-left: 10px;
}

h1{
  color:#aaa;
  transition: all .3s linear;
  cursor: pointer;
  font-size: 1.5em;
}

h3{
  color:#aaa;
  transition: all .3s linear;
}

h4{
  color:#aaa;
  transition: all .3s linear;
  margin: 0 0 0 -10px;
}

h1:hover{
  color:#fadb41;

}

a{
  text-decoration: none;
  color: #aaa;
  transition: all .4s linear;
}

a:hover {
  color: #fadb41;
}

svg a{
  text-decoration: none;
  color: #aaa;
  transition: all .4s linear;
}

svg a:hover {
  color: #fadb41;
}

i {
  color: #aaa;
  font-size: .9em;
  margin: auto;
}

code {
  font-size: 0.6em;
  margin-left: 15px;
  padding-left: 10px;
  border-left: solid 5px #eee;
  color:#888;
}

.divider {
  height:15px;
  background-color: #dddddd54;
}

.nav-one{
  height: 35px;
  position: sticky;
  top: -1px;
}

.nav-one div{
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}

.nav-one a{
  text-decoration: none;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-one i {
  color: #0000FF;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.profile {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding:10px 0 5px 0;
  color:black;
}

.profile a {
  text-decoration: none;
  color: #aaa;
  font-size: .9em;
}

.profile img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.profile h1 {
  margin: 5px 0 0 -10px;
  font-size: 1.5em;
}

.profile h4 {
  margin: 0 0 0 -10px;
  font-size: .9em;
  font-weight: 100;
  color: #aaa;
}

.main-one{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 0 15px 0;
  color: black;
  box-shadow: 0px 4px 5px #ddd;
}

.main-one div {
  margin: 0 0 0 15px;
}

.main-one a:nth-child(1) i, .main-one a:nth-child(2) i{
  padding-right: 4px;
  margin: 0 0 0 3px;
}

.main-one a:nth-child(2) i{
  padding-right: 1px;
  margin: 0 0 0 0;
}

.main-one a:nth-child(3) i{
  padding-right: 5px;
  margin: 0 0 0 2px;
} 

.main-one a:nth-child(4) i{
  padding-right: 4px;
  margin: 0 0 0 2px;
}

.main-one a{
  margin: 0 0 0 10px;
  color: #555;
}

.main-two {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px 0 15px 0;
  color: black;
  box-shadow:  4px 4px 10px #bbb;
}

.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  overflow-x:auto;
}

.main-tree i {
  font-size: 1.2em;
  color: #555;
}

.main-tree h5{
  margin-left: 10px;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  box-shadow: 0px 10px 10px#bbb;
  overflow-x:auto;
}

.main-four i {
  font-size: 1.2em;
  color: #555;
}

.main-four h5{
  margin-left: 10px;
}

.main-four-card {
  height: 150px;
  width: 600px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four-card a {
  border: solid 1px #dddddd;
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}
.main-four-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-four-card h4 {
  margin: 0 0 0 10px;
}

.main-four-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.main-five {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  box-shadow: 0px 10px 10px#bbb;
  overflow-x:auto;
}

.main-five i {
  font-size: 1.2em;
  color: #555;
}

.main-five h5{
  margin-left: 10px;
}

.main-five-card {
  height: 370px;
  width: 300px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-five-card a {
  border: solid 1px #dddddd;
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}
.main-five-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-five-card h4 {
  margin: 0 5px 0 10px;
}

.main-five-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.main-six {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  box-shadow: 0px 10px 10px#bbb;
  overflow-x:auto;
}

.main-six i {
  font-size: 1.2em;
  color: #555;
}

.main-six h5{
  margin-left: 10px;
}

.main-six h5{
  margin: 10px;
}

.main-six-card {
  height: 280px;
  width: 600px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-six-card a {
  border: solid 1px #dddddd;
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}
.main-six-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-six-card h4 {
  margin: 0 5px 0 10px;
}

.main-six-card p {
  margin: 0 0 10px 10px;
  font-size: .8em;
}

.main-seven {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  box-shadow: 0px 10px 10px#bbb;
  overflow-x:auto;
}

.main-seven i {
  font-size: 1.2em;
  color: #555;
}

.main-seven h5{
  margin-left: 10px;
}

.main-seven-card {
  display: flex;
  justify-content: center;
  flex-direction: column;   
  margin:auto;

}

.main-seven-card a {
  display: flex;
  justify-content: center;
  flex-direction: column;   
  margin:10px auto 20px auto  ;
  width:60%;
}
.main-seven-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-seven-card h4 {
  margin: 0 5px 0 10px;
}

.main-seven-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.mini-profile {
  height: 25px;
  border-radius: 50%;
  margin: 10px 0 0 10px;
  padding: 0 15px 0 0;
}

style{
    background-color: black;
}


@media only screen and (max-width: 369px) {

  }

</style>