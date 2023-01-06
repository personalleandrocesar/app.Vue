<template>
  <div>

    <div class='main-one'>
      <div>
        <h5><i class="fa-solid fa-handshake-simple"></i> Parceiros</h5>
      </div>
    </div>

    <div class='profile'>
      <img src='/img/carolina-manna.png' alt=''>
      <div>
        <h1>Carolina Manna</h1>
        <h4> <i class="fa-solid fa-utensils"></i> Nutricionista</h4>
      </div>
    </div>

    <div class='main-two'>
        <div class='main-two-div'>
            <a href="https://www.instagram.com/carolmannanutri">
                <i class="fa-brands fa-instagram-square"></i> Carolina Manna | Nutri
            </a> 
            <a href="https://goo.gl/maps/uQomHPQxLybkePHo7">
                <i class="fa-solid fa-location-dot"></i> Rua Gavião Peixoto, 80 - sala: 601 - Consultório - Icaraí - Niteroi - RJ
            </a>        
            <a href="https://api.whatsapp.com/send?phone=5521994018980">
                <i class="fa-brands fa-whatsapp-square"></i> Agendamento
            </a>
        </div>
    </div>

    <div class='divider'></div>
    <!--
    <div class='main-div'>
      <div>
      </div>
    </div>

    <div class='profile'>
      <img src='/img/carolina-manna.png' alt=''>
      <div>
        <h1>Carolina Manna</h1>
        <h4> <i class="fa-solid fa-utensils"></i> Nutricionista</h4>
      </div>
    </div>

    <div class='main-two'>
        <div class='main-two-div'>
            <a href="https://www.instagram.com/carolmanna_nutri">
                <i class="fa-brands fa-instagram-square"></i> Carolina Manna | Nutri
            </a> 
            <a href="https://goo.gl/maps/uQomHPQxLybkePHo7">
                <i class="fa-solid fa-location-dot"></i> Rua Gavião Peixoto, 80 - sala: 601 - Consultório - Icaraí - Niteroi - RJ
            </a>       
            <a>
                <i class="fa-solid fa-calendar-day"></i> Sáb.: 09:00 - 12:00
            </a>       
            <a href="https://api.whatsapp.com/send?phone=5521994018980">
                <i class="fa-brands fa-whatsapp-square"></i> Agendamento
            </a>
        </div>
    </div>

    <div class='divider'></div>
    -->
    <br>
    <br>
    <br>

  </div>
</template>
<script>
export default {
head: {
  title: 'Parceiros | Leandro Cesar',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Sobre Leandro Cesar Ramos da Costa, Personal Leandro Cesar, Professor Leandro Cesar'
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'Personal, Personal Trainer, Niterói, São Gonçalo, Professor Leandro Cesar'
    }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/img/favicon.svg' },
    { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', size: '32x32', href: '/img/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', size: '16x16', href: '/img/favicon-16x16.png' },
    { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
    { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#002937' }
  ]
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
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
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
  color: #000;
}


.main-one {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
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

.main-two{
  color: black;
box-shadow: 0px 4px 5px #ddd;   
}

.main-two-div{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: black;
  padding: 0px 30px 0px 45px;
}


.main-two a:nth-child(1) i{
  padding-right: 3px;
  margin: 0 0 0 3px;
}

.main-two a:nth-child(2) i{
  padding-right: 3px;
  margin: 0 0 0 4px;
}

.main-two a:nth-child(3) i,.main-two a:nth-child(4) i{
  padding-right: 3px;
  margin: 0 0 0 2px;
}

.main-two a{
  margin: 0 0 0 10px;
  color: #555;
}

.main-two {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px 0 15px 0;
  color: black;
}

.main-div {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 10px 0 0 0;
  color: #555;
  overflow-x:auto;
}

.main-div i {
  font-size: 1.2em;
  color: #555;
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