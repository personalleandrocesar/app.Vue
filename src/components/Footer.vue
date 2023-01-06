<template>
    <footer class="main">
      <div>
        <a href="https://leandrocesar.com"><LCLogo/></a>
              
        <h1>Leandro Cesar</h1>
        <p class='ConSer'>Consultoria & Serviços</p>
        
      </div>
      <div>  
        <p class="ul-icons-p ">
          <a href="https://leandrocesar.com">leandrocesar.com</a> &copy; 2021-2022 <br> CNPJ: 40.930.118/0001-33<br>| Leandro Cesar Ramos da Costa |
        </p>

      </div>
    </footer>
</template>


<style scoped>

/* Início dos códigos do 'footer' */

.main {
  display: flex;
  justify-content: center;
  flex-direction: column;

}

.main div{
  margin: auto;
}
footer {
  background: #fff;
  width: 100%;
  height: 300px;
  clear: both;
  margin:10px 0;
}

svg {
  font-size: 0.8em;
  text-align: center;
}

footer h1 {
  margin: -25px 0 0 0;
  font-size: 1.5em;
  color: #888;
}

footer a {
  display: inline;
  font-size: 1em;
}

.footer-icons-copyright {
  margin: auto;
  text-align: center;
  width: 85%;
  color: #899fa4;
  clear: both;
}

.footer-icons-copyright li {
  padding-top: 0px;
}

.ul-icons {
  font-size: 22px;
}

.ul-icons ul {
  padding: 0;
  margin: 0;
}

.ul-icons a {
  color: #899fa4;
  text-shadow: 1px 1px 1px #fadb4180;
  transition: color .3s linear;
  margin: 0 15px;
}

.ul-icons a:hover {
  color: #fadb41;
}

.ul-icons a:active {
  color: rgba(255,0,0,0.5);
}

.ul-icons-p a {
  color: #899fa4;
  transition: color .3s linear;
}

.ul-icons-p a:hover {
  color: #fadb41;
}

.ul-icons-p a:active {
  color: rgba(255,0,0,0.5);
}
  
.ul-icons-p {
  margin: 0;
  padding: 0;
}

.ConSer {
  margin-top: -10px;
  margin-bottom: 0px;
  font-size: .8em;
  color: #aaa;
}

/* fim dos códigos do 'footer' */
/* Início dos códigos para bloqueio dos conteúdos para celulares */
@media only screen and (min-width: 1126px) {

}
/* Término dos códigos para bloqueio dos conteúdos para celulares */
/* Alterações para responsividade do site para celular e midias menores que 1125px */
@media only screen and (max-width: 1125px) {

  /* Início dos códigos de formatação gerais (h1, h2, p, code... */
  .navegation, .navegation-index, .img-top-index, .img-top {
    display: none;
  }

    /* Início dos códigos do 'footer' */
  footer {
    background: #fff;
    width: 100%;
    height: 220px;
    clear: both;
    margin-top: 10px;
  }

  svg {
    font-size: 0.8em;
  }

  footer h1 {
    margin: -20px 0 -20px 0;
    font-size: 1.3em;
  }
  
  footer p {
    font-size: 14px;
  }

  footer a {
    font-size: 15px;
    display: inline;
  }

  .ul-icons a {
    font-size: 20px;
  }

  .footer-icons-copyright {
    margin: auto;
    text-align: center;
    width: 100%;
    color: #899fa4;
    clear: both;
  } 

  .footer-icons-copyright li {
  padding-top: 0px;
  }

  .ul-icons a {
    color: #899fa4;
    text-shadow: 1px 1px 1px #fadb4180;
    transition: color .3s linear;
    margin: 0 12px;

  }
  .ul-icons-p {
    font-size: 0.7em;
    text-align: center;
    margin-top:15px;
  }

  .ConSer {
  margin-top: 10px;
  font-size: .7em;
}

/* F i m  d a s  a l t e r a ç õ e s  e s p e c í f i c a s  d a  p á g i n a  *  F i m  d o  s l i d e  p r i n c i p a l  */
}
</style>