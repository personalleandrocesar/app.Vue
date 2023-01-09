
<template>
  
  <div class='nav-one'>
    <div>
      <span>
        <RouterLink to="/">
          <img src="../assets/logo.svg" alt="" srcset="" >
        </RouterLink>
        <RouterLink to="/" class="bar">
          <i class="fa-solid fa-bars"></i>
        </RouterLink>
      </span>
    </div>
  </div>
  
</template>
<style scoped>
img {
  height: 40px;
  margin: 6px 0 0 30px;
}

.bar {
margin: -45px 0 0 90px;
display: block;
}

h1 {
  color: #095d62;
  transition: all .3s linear;
  cursor: pointer;
  font-size: 1.1em;
  margin:5px 0 0 0;
  text-align: center;
}
.nav-one{
  height: 55px;
  position: sticky;
  top: -2px;
  background: #095D62;
  z-index: 10;
  border-radius: 0% 0% 10% 10%;
  box-shadow: 0px .5px 5px #eee;
  z-index: 10;
}

.nav-one div{
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  text-align: start;
}

.nav-one a{
  text-decoration: none;
  cursor: pointer;
  font-size: 1.4em;
}

.nav-one div i {
  color: #fff;
}

.nav-one i:hover {
  color: #fadb41;
}
</style>