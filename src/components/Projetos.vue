<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class='main-one'>
        <h5>
            <i class="fa-solid fa-diagram-project"></i> Projetos
        </h5>
    </div>

    <div class='main-four'>
        <h5><RouterLink to="/projetos/ativos"><i class="fa-solid fa-bars-progress"></i> Projetos Ativos</RouterLink></h5>
        <h5><RouterLink to="/projetos/em-desenvolvimento"><i class="fa-solid fa-layer-group"></i> Projetos Em desenvolvimento</RouterLink></h5>
    </div>
    
    <RouterView/>


  </div>
</template>
<script>
export default {
  head: {
    title: 'Projetos | Leandro Cesar',
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
    ]
  },
  data() {
      return {
          aplicar : '',
          aplicarTwo : '',
          aplicarTree : '',
          aplicarFour : '',
          aplicarFive : '',
          aplicarSix : '',
          aplicarSeven : '',
          aplicarEight : true,
          aplicarEduca : true,
          aplicarAcupu : '',
          acontecimentos: `
        <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Conlusão do curso de Pós-Graduação Lato-sensu em Acupuntura - Universidade Celso Lisboa - UCL;
            </li>
            <li>
              Finalizando o estágio em Acupuntura na Celso Lisboa - UCL;
            </li>
          </ul>
        <h4 style="margin-left: 10px;">Janeiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Site deepacupuntura.com no ar;
            </li>
            <li>
              Curso de aprimoramento teórico e prático de Acupuntura Escalpiana de Jiao Shunfa; 
            </li>
            <li>
              Início dos trabalhos da Deep Acupuntura na academia BodyClass;
            </li>
          </ul>
          
          `,
      }
  },
  methods: {
      doisUm() {
          this.aplicar = true,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.acontecimentos = `
        <h4 style="margin-left: 10px;"> Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Cinesiologia, Biomecânica e Treinamento Físico - Universidade 
              Castelo Branco - UCB;     
            </li>
          </ul>
          <h4 style="margin-left: 10px;"> Julho</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Lesões e Doenças Musculoesqueléticas: Exercício Físico e Reabilitação - Universidade 
              Castelo Branco - UCB;
            </li>
          </ul>
        <h4 style="margin-left: 10px;"> Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Reinício do estágio em Acupuntura - Pós Pandemia (COVID-19);
            </li>
          </ul>
          `
      },
      umOito(){
        this.aplicar = false,
          this.aplicarTwo = true,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,         
         this.aplicarEight = false,
          this.acontecimentos = `
        <h4 style="margin-left: 10px;">Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Acupuntura - Universidade Celso Lisboa - UCB;
            </li>
          </ul>
          `
      },
      umSete() {
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = true,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,         
         this.aplicarEight = false,
          this.acontecimentos = 
          `
          <h4 style="margin-left: 10px;">Março</h4>
        <ul class="com-bullet com-indent">
          <li>
            Início do curso de Formação de Professor de Yoga - Shiva Studio - Rio de Janeiro - RJ;
          </li>
          </ul>
          `
      },
      umUm(){
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = true,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,         
         this.aplicarEight = false,
          this.acontecimentos =
          `
        <h4 style="margin-left: 10px;">Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Término do curso de Formação de Instrutor de Krav-Maga - Bukan School of Krav-maga - Rio de Janeiro - RJ;
            </li>
          </ul>
        <h4 style="margin-left: 10px;">Março</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Formação de Instrutor de Krav-Maga - Bukan School of Krav-maga - Rio de Janeiro - RJ;
            </li>
          </ul>
          `
      },
      zeroOito(){
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = true,
          this.aplicarSix = false,
          this.aplicarSeven = false,         
         this.aplicarEight = false,
          this.acontecimentos =
          `
        <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Término do curso de Graduação em Educação Física - Universidade Salgado de Oliveita - UNIVERSO;
            </li>
          </ul>
          `
      },
      zeroCinco() {
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = true,
          this.aplicarSeven = false,         
         this.aplicarEight = false,
          this.acontecimentos =
          `
        <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Graduação em Educação Física - Universidade Salgado de Oliveita - UNIVERSO;
            </li>
          </ul>
          `
      },
      oitoSeis () {
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = true,         
         this.aplicarEight = false,
          this.acontecimentos = 
          `
        <h4 style="margin-left: 10px;">Outubro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          `
      },
      doisDois () {
        this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = true,
          this.acontecimentos = 
          `
          <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Conlusão do curso de Pós-Graduação Lato-sensu em Acupuntura - Universidade Celso Lisboa - UCL;
            </li>
            <li>
              Finalizando o estágio em Acupuntura na Celso Lisboa - UCL;
            </li>
          </ul>
        <h4 style="margin-left: 10px;">Janeiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Site deepacupuntura.com no ar;
            </li>
            <li>
              Curso de aprimoramento teórico e prático de Acupuntura Escalpiana de Jiao Shunfa; 
            </li>
            <li>
              Início dos trabalhos da Deep Acupuntura na academia BodyClass;
            </li>
          </ul>
          `
      },
      educa () {
        this.aplicarEduca = true,
        this.aplicarAcupu = false,
          this.projetos = 
          `
          <h4 style="margin-left: 10px;">Personal | Consultoria</h4>
        <h5 style="text-align: left; margin:0; color: #ffffff90">Ativo</h5>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          <br>
          <h4 style="margin-left: 10px;">EternFlow.com</h4>
        <h5 style="text-align: left; margin:0; color: #ffffff90">Em desenvolvimento</h5>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          <br>
          `
      },
      acupu () {
        this.aplicarAcupu = true,
        this.aplicarEduca = false,
          this.projetos = 
          `
          <h4 style="margin-left: 10px;">Deep Acupuntura</h4>
        <h5 style="text-align: left; margin:0; color: #ffffff90">Em Desenvolvimento</h5>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          <br>
          `
      }
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

.main-one {
  display: flex;
  justify-content: flex-start;
  flex-direction: collumn;
  margin: -10px 0 -20px 0;
  color: #555;
  overflow-x:auto;
}

.main-one i {
  font-size: 1.2em;
  color: #555;
}

.main-one h5{
  margin-left: 10px;
}

.main-four {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0 0 0;
  color: #555;
  overflow-x:auto;
}

.main-four i {
  font-size: 1.2em;
  color: #555;
}

.main-four h5{
  margin: 10px;
}

.main-four a {
  border: solid 1px #dddddd;
  width: 100px;
  padding: 9px 5px 5px 5px;
border-radius: 0% 10% 10% 10%;
}

.main-five {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 20px 0 0 0;
  color: #555;
  overflow-x:auto;
}

.main-five i {
  font-size: 1.2em;
  color: #555;
}

.main-five h5{
  margin: 10px;
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

.main-six-card h4{
  margin-left: 30px;
}
.main-six h5{
  margin-left: 10px;
}

.main-six h5{
  margin: 10px;
}

.main-six-card {
  height: 440px;
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

.dateYear {
    color: #ccc;
}

.dateYearHover {
    color: #000;
}

a.RouterLink-exact-active {
  background-color: #eeeeee70;
  color:#000;
  border-radius: 0% 10% 10% 10%;
}


@media only screen and (max-width: 369px) {

  }

</style>