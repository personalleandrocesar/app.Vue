<template>
  <div>

    <div class='profile'>
      <img src='/img/myFotoTwo.jpg' alt=''>
      <div>
        <h1>Professor Leandro Cesar</h1>
        <h4>Professor | Educador físico</h4>
      </div>
    </div>

    <div class='main-one'>
      <a href="https://instagram.com/professorleandrocesar">
        <i class="fa-brands fa-instagram-square"></i> @professorleandrocesar
      </a> 
      
      <a>
        <i class="fa-regular fa-id-card"></i> CREF: 029260-G/RJ
      </a> 
      
      <a href="http://lattes.cnpq.br/3830820363501969">
        <i class="fai fa-solid fa-link"></i>  Currículo Lattes
      </a>
    </div>

    <div class='divider'></div>
    
    <div class='main-two'>
      <code>
        <b>#vemtreinarcomigo</b>
        <br>
        Bora treinar junto! 
      </code>
      <a href='https://api.whatsapp.com/send?phone=5521971305858%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20na%20sua%20Consultoria%20e%20nos%20seus%20Servi%C3%A7os,%20me%20chamo%20'>
      <i class="fa-brands fa-whatsapp"></i> Marcar Horário
      </a>
    </div>  

    <div class='divider'></div>
    
    <div class='main-tree'>
      <div>
        <h5><i class="fa-solid fa-arrows-spin"></i> Serviços</h5>
      </div>
    </div>
    <div class='main-four'>
      <div class='main-four-card'>
        <RouterLink to="/professor/">Todos</RouterLink>
        <RouterLink to="/professor/personal">Personal</RouterLink>
        <RouterLink to="/professor/consultoria">Consultoria</RouterLink>
        <RouterLink to="/professor/avaliacao">Avaliação</RouterLink>
        <RouterLink to="/professor/kravmaga">Krav-Maga</RouterLink>
      </div>
    </div>

    
    
    <nuxt-child />

    <div class='divider'></div>


  </div>
</template>
<script>
export default {
  head: {
    title: 'Leandro Cesar',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Professor Leandro Cesar Ramos da Costa | Site para Conteúdos e Serviços => Personal Trainer | Consultoria Online e Presencial | Acupuntura | Atendimentos em Niterói e São Gonçalo - RJ' },
      { hid: 'keywords', name: 'description', content: 'Personal trainer, Acupuntura, Consultoria' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#fff' },
      { name: 'theme-color', content: '#fff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/img/favicon.svg' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
      { rel: 'icon', type:'image/png', size: '32x32', href: '/img/favicon-32x32.png' },
      { rel: 'icon', type:'image/png', size: '16x16', href: '/img/favicon-16x16.png' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
      { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#fff' }
    ],
  }
}
  </script>

<style scoped>
a{
  text-decoration: none;
  color: #555;
}

i {
  color: #888;
  font-size: .9em;
  margin: auto;
}

code {
  font-size: 0.8em;
  padding-left: 10px;
  border-left: solid 5px #888 ;
  color:#bbb;
}

.divider {
  height:15px;
  background-color: #fff;
}

.divider-ultimate {
  height:30px;
  background-color: #fff;
}

.profile {
  background: #fff;    
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding:20px 0 5px 0;
  margin-top:-10px;
}

.profile a {
  text-decoration: none;
  color: #fff;
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
  color: #000;
}

.profile h4:nth-child(2) {
  margin: 0 0 0 -10px;
  font-size: .9em;
  font-weight: 100;
  color: #aaa;
}

.profile h4 {
  margin: 0 0 0 -10px;
  font-size: .9em;
  font-weight: 100;
  color: #555;
}

.main-one{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 0 15px 0;
  box-shadow: 0px 10px 5px #bbb;
  background: #fff;    
}

.main-one div {
  margin: 0 0 0 15px;
}

.main-one a:nth-child(1) i, .main-one a:nth-child(2) i{
  padding-right: 4px;
  margin: 0 0 0 3px;
}

.main-one a{
  margin: 0 0 0 10px;
  color: #555;
}

.main-two {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 15px 0 18px 0;
  color: black;
  background: #fff;    
  color: #fff;
}

.main-two a {
    margin: 20px 0 0 0px;
    color: #555;
    font-weight: 600;
}

.main-two i {
    color: #888;
    font-size: 1.1em;
    font-weight: 600;
}

.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 0 0 0;
  color: #555;
  background: #fff;  
  overflow-x:auto;
}

.main-tree i {
  font-size: 1.2em;
  color: #888;
}

.main-tree h5{
  margin: 10px 0px 22px 10px;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin:-10px 0 0 0;
  color: #fff;
  background: #fff;  
  overflow-x:auto;
}

.main-four i {
  font-size: 1.2em;
  color: #555;
}

.main-four h5{
  margin: 0 auto 20px auto ;
}

.main-four-card {
  margin: 10px 0 10px 10px; 
  height: 50px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four-card a {
  border: solid 1px #dddddd;
  padding: 2px 6px;
  margin: 10px 4px;
  border-radius: 0% 10% 10% 10%;
}

.main-four-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-four-card h4 {
  margin: 0 0 0 15px;
  background: #92929240;
  padding: 0px 10px 0px 10px;
  border-radius: 12% 12% 12% 0%;
}

.main-four-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.main-five {
  background: #fff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #fff;
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
  margin: 0 10px;
  border: solid .5px #555;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.main-five-card a {
  border: solid .1px #dddddd54;
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

.mini-profile {
  height: 25px;
border-radius: 50%;
margin: 10px 0 0 10px;
padding: 0 15px 0 0;
}



a.RouterLink-exact-active {
  background-color: #eeeeee70;
  color:#000;
  border-radius: 0% 10% 10% 10%;
  font-weight: bold;
}

@media only screen and (max-width: 369px) {

  }
</style>