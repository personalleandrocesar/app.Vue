<template>
  <div>

    <div class='main-tree'>
      <div>
        <h5><i class="fa-solid fa-user"></i> Sobre</h5>
      </div>
    </div>


    <div class='profile'>
      <img src='/img/perfilRed.jpeg' alt='' name="Image">
      <div>
        <h1>Leandro Cesar</h1>
        <div>
          <i class="fa-solid fa-person-rays"></i> Empreendedor
        </div>

      </div>
    </div>

    <font-awesome-icon icon="fa-brands fa-youtube" />

    <div class='main-one'>
      <a href="https://deepacupuntura.com">
        <i class="fa-solid fa-building"></i> Dono do Deep Acupuntura
      </a>
      <RouterLink to="/professor">
        <i class="fa-solid fa-dumbbell"></i> Profissional de Educação Física
      </RouterLink>
      <RouterLink to="/acupuntura">
        <i class="fa-solid fa-yin-yang"></i> Acupunturista
      </RouterLink>
      <RouterLink to="/kravmaga">
        <i class="fa-solid fa-hand-back-fist"></i> Instrutor de Krav-maga
      </RouterLink>
      <RouterLink to="/programacao">
        <i class="fa-sharp fa-solid fa-laptop"></i> Programador
      </RouterLink>
      <a href="https://github.com/professorleandrocesar">
        <i class="fa-brands fa-github"></i> @professorleandrocesar
      </a>
    </div>

    <div class='main-four'>
      <div class='main-four-card'>
        <p>
          <i class="fas fa-graduation-cap"></i> Graduação em Educação Física - UNIVERSIDADE SALGADO DE OLIVEIRA -
          UNIVERSO (2005 - 2008);
          <br>
          <i class="fas fa-certificate"></i> Pós-Graduação Lato-Sensu (especialização) em Acupuntura - UNIVERSIDADE
          CELSO LISBOA - UCL (2018 - 2022);
          <br>
          <i class="fas fa-certificate graduando"></i> Pós-Graduando em Cinesiologia, Biomecânica e Treinamento Físico -
          UNIVERSIDADE CASTELO BRANCO - UCB (2021 - atual);
          <br>
          <i class="fas fa-certificate graduando"></i> Pós-Graduando em Lesões e Doenças Musculoesqueléticas: Exercício
          Físico e Reabilitação - UNIVERSIDADE CASTELO BRANCO - UCB (2021 - atual);
          <br>
          <i class="fa-solid fa-hand-back-fist"></i> Instrutor de Krav-maga (Brown Belt) - BUKAN;
          <br>
          <i class="fa-solid fa-om"></i> Quase Professor de Yoga - SHIVA STUDIO;
        </p>

      </div>
    </div>
<div class="main-two">
  <div>

    <a href="https://api.whatsapp.com/send?phone=5521971305858%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20na%20sua%20Consultoria%20e%20nos%20seus%20Servi%C3%A7os,%20me%20chamo%20">
      <i class="fa-brands fa-square-whatsapp"></i> WhatsApp
    </a>
    <a href="mailto:professor@leandrocesar.com">
      <i class="fa-solid fa-envelope"></i> E-mail
    </a>
    <a href="https://github.com/professorleandrocesar">
      <i class="fa-brands fa-github"></i> GitHub
    </a>
    
    <a href="https://instagram.com/professorleandrocesar">
      <i class="fa-brands fa-square-instagram"></i> instagram
    </a>
    <a href="https://www.youtube.com/@LeandroCesarCosta">
      <i class="fa-brands fa-youtube"></i> Youtube
    </a>
  </div>
</div>

    <div class='main-tree'>
      <div>
        
        <h5><i class="fa-solid fa-timeline"></i> Linha do tempo</h5>
      </div>
    </div>

    <div class='main-five'>
      <div class='main-five-card'>
        <h4 class='dateYear'>|</h4>
        <h4 @click='doisDois' class='dateYear' :class='{ dateYearHover: aplicarEight }'>2022</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='doisUm' class='dateYear' :class='{ dateYearHover: aplicar }'> 2021</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='umOito' class='dateYear' :class='{ dateYearHover: aplicarTwo }'> 2018</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='umSete' class='dateYear' :class='{ dateYearHover: aplicarTree }'> 2017</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='umUm' class='dateYear' :class='{ dateYearHover: aplicarFour }'> 2011</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='zeroOito' class='dateYear' :class='{ dateYearHover: aplicarFive }'> 2008</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='zeroCinco' class='dateYear' :class='{ dateYearHover: aplicarSix }'> 2005</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='oitoSeis' class='dateYear' :class='{ dateYearHover: aplicarSeven }'> 1986</h4>
        <h4 class='dateYear'>|</h4>
        <br>

      </div>
    </div>

    <div class='main-six'>
      <div class='main-six-card'>
        <div v-html='acontecimentos'></div>

      </div>
    </div>






    <br>
    <br>
    <br>

  </div>
</template>
<script>
export default {
  head: {
    title: 'Sobre | Leandro Cesar',
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
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/img/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/img/favicon-16x16.png' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
      { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#002937' }
    ],
  },
  data() {
    return {
      aplicar: '',
      aplicarTwo: '',
      aplicarTree: '',
      aplicarFour: '',
      aplicarFive: '',
      aplicarSix: '',
      aplicarSeven: '',
      aplicarEight: true,
      aplicarEduca: true,
      aplicarAcupu: '',
      acontecimentos: `
        <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Conclusão do curso de Pós-Graduação Lato-sensu em Acupuntura - Universidade Celso Lisboa - UCL;
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
    umOito() {
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
    umUm() {
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
    zeroOito() {
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
    oitoSeis() {
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
    doisDois() {
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
              Conclusão do curso de Pós-Graduação Lato-sensu em Acupuntura - Universidade Celso Lisboa - UCL;
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
    educa() {
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
    acupu() {
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

a {
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
  color: #888;
}

.divider {
  height: 15px;
  background-color: #dddddd54;
}

.nav-one {
  height: 35px;
  position: sticky;
  top: -1px;
}

.nav-one div {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.nav-one a {
  text-decoration: none;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-one p i {
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
  padding: 10px 0 5px 0;
  color: black;
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
  flex-direction: column;
  padding: 10px 0 15px 0;
  color: black;
}

.main-one div {
  margin: 0 0 0 15px;
}

.main-one a:nth-child(1) i {
  padding-right: 2px;
  margin: 0 0 0 2px;
}

.main-one a:nth-child(2) i {
  padding-right: 0px;
  margin: 0 0 0 -1px;
}

.main-one a:nth-child(3) i {
  padding-right: 2px;
  margin: 0 0 0 0px;
}

.main-one a {
  margin: 0 0 0 10px;
  color: #555;
}
.main-two {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 0 55px 0px;
  color: black;
}

.main-two div {
  display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  
.main-two i {
  font-size: 30px;
  margin: 2px 0;
  transition: all .4s linear;
}

.main-two a:hover:nth-child(1) i {
  color: green
}
.main-two a:hover:nth-child(2) i {
  color: orange
}
.main-two a:hover:nth-child(3) i {
  color: black;
}
.main-two a:hover:nth-child(4) i {
  color: #C13584;
}
.main-two a:hover:nth-child(5) i {
  color: red;
}


.main-two a {
  border: solid .1px #aaa;
  margin: 3px 0 0 3px;
  height: 85px;
  width: 85px;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  font-size:1em;
  transition: all .4s linear;
  margin: 0px 10px 20px 10px;
  border-radius: 15% 15% 15% 15%;
}
.main-two a:hover {
  background-color: #eeeeee;
  color: #000;
}


.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -60px 0 0 0;
  color: #555;
  overflow-x: auto;
}

.main-tree i {
  font-size: 1.2em;
  color: #555;
}

.main-tree h5 {
  margin-left: 10px;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 0 30px 0;
  color: #555;
  overflow-x: auto;
}
@media only screen and (max-width: 310px) {
  .main-four {
      margin: 0px 0 20px 0;
    }
}

@media only screen and (min-width: 340px) {
  .main-four {
      margin: 0px 0 0px 0;
    }
}
@media only screen and (min-width: 370px) {
  .main-four {
      margin: 0px 0 -15px 0;
    }
}

@media only screen and (min-width: 470px) {
  .main-four {
      margin: 0px 0 -80px 0;
    }
}
@media only screen and (min-width: 680px) {
  .main-four {
      margin: 0px 0 -120px 0;
    }
}

.main-four i {
  font-size: 1.1em;
}

.main-four h5 {
  margin-left: 10px;
}

.main-four-card {
  height: 300px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four-card i:nth-child(9),
i:nth-child(11),
i:nth-child(15) {
  color: #aaa;
}

.main-four-card a {
  border: solid .1px #dddddd;
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
  overflow-x: auto;
}

.main-five i {
  font-size: 1.2em;
  color: #555;
}

.main-five h5 {
  margin-left: 10px;
}

.main-five-card {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 7px;
}

.main-five-card a {
  border: solid .1px #dddddd;
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
  overflow-x: auto;
}

.main-six i {
  font-size: 1.2em;
  color: #555;
}

.main-six-card h4 {
  margin-left: 30px;
}

.main-six h5 {
  margin-left: 10px;
}

.main-six h5 {
  margin: 10px;
}

.main-six-card {
  height: 440px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-six-card a {
  border: solid .1px #dddddd;
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
  overflow-x: auto;
}

.main-seven i {
  font-size: 1.2em;
  color: #555;
}

.main-seven h5 {
  margin-left: 10px;
}

.main-seven-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;

}

.main-seven-card a {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px auto 20px auto;
  width: 60%;
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
  cursor: pointer;
}

.dateYearHover {
  color: #000;
}

@media only screen and (max-width: 369px) {}
</style>