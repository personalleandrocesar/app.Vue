<template>
  <div class="homeAnimation">
    <div class='main-two'>
      <code v-if="Math.random() > 0.5" >
        <i class="fa-solid fa-quote-left"></i> A felicidade não é algo que simplesmente acontece conosco. <br>É algo que nós fazemos acontecer.
        <br>
        Mihaly Csikszentmihalyi      
      </code>
      <code v-else-if="Math.random() > 0.5">
        <i class="fa-solid fa-quote-left"></i> Nascer, morrer, renascer ainda, progredir sempre, tal é a lei.<br>
        Allan Kardec      
      </code>
      <code v-else-if="Math.random() > 0.5">
        <i class="fa-solid fa-quote-left"></i> Para crer, não basta ver, é necessário compreender.
        <br>
        Allan Kardec   
      </code>
      <code v-else>
        <i class="fa-solid fa-quote-left"></i> De uma forma ou de outra, se a evolução humana é para continuar, teremos de aprender a apreciar mais a vida completamente.
        <br>
        Mihaly Csikszentmihalyi      
      </code>

    </div>

    <div class='main-tree'>
      <div>
        <h5><i class="fa-solid fa-arrows-spin"></i> Serviços</h5>
      </div>
    </div>

    <div class='main-four'>
      <div class='main-four-card'>
        <RouterLink to="/personal" @click.native="scrollToTop()">
          <br>
          <h4>Personal <i class="fa-solid fa-arrow-right"></i></h4>
          <p>Serviço de Personal trainer, para treinamento personalizados em academias;</p>
        </RouterLink>
        
      </div>
      <div class='main-four-card'>
        <RouterLink to="/consultoria" @click.native="scrollToTop()">
          <br>
          <h4>Consultoria <i class="fa-solid fa-arrow-right"></i></h4>
          <p>Séries individuais em aplicativo para treinamento em academias +
          avaliação física presencial gratuita;</p>
        </RouterLink>
        
      </div>
      <div class='main-four-card'>
        <RouterLink to="/avaliacao" @click.native="scrollToTop()">
          <br>
          <h4>Avaliação Física <i class="fa-solid fa-arrow-right"></i></h4>
          <p>Avaliação Antropométrica, com percentual de gordura feita com dobras cutâneas ou com balança de bioimpedância;</p>
        </RouterLink>
        
      </div>
      <div class='main-four-card'>
        <RouterLink to="/kravmaga" @click.native="scrollToTop()">
          <br>
          <h4>Krav-maga <i class="fa-solid fa-arrow-right"></i></h4>
          <p>Treinamento individual ou em grupo de defesa pessoal, criado por Imi Lichtenfeld; Escola Bukan de Krav-maga;</p>
        </RouterLink>
        
      </div>
    </div>
    <br>
    <br>
    <br>

  </div>
</template>
<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
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
body {
  background: #fff;
  font-family: 'Philosopher', sans-serif;
  color: #aaa;
  line-height: 1.6;
}

iframe {
  margin-left: 10px;
}

a{
  text-decoration: none;
  color: #aaa;
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
  justify-content: center;
  flex-direction: row;
  padding: 0px 0 15px 0;
  margin-top: -20px; 
  color: black;
}

.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 -20px 0;
  color: #095d62;
  overflow-x:auto;
}

.main-tree i {
  font-size: 1.2em;
  color: #095d62;
}

.main-tree h5{
  margin-left: 10px;
}

.main-four {
  display: flex;
  justify-content:center;
  flex-direction: row;
  margin: 0px 0 0 0;
  color: #aaa;
  overflow-x:auto;
  flex-wrap: wrap;
}

.main-four i {
  font-size: 1.2em;
  color: #095d62;
}

.main-four h5{
  margin-left: 10px;
}

.main-four-card {
  height: 180px;
  width: 180px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four-card a {
  border: solid 1px #eeeeee;
  margin: 0px 5px 20px 0px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
  transform: translateY(1em);
  transition: all .4s linear;
  box-shadow: 0 0px 5px #ddd;
}

.main-four-card a:hover {
  transform: translateY(0.8em) ;
  box-shadow: 0 5px 5px #999;
  background-color: #eeeeee70;
}

.main-four-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-four-card h4 {
  margin: 0 0 0 10px;
  color:#095d62;
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


@media only screen and (max-width: 369px) {

  }
</style>