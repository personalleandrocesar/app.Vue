<script>
export default{
methods: { 
  scrollToTop() {
    window.scrollTo(0,0);
  }
}
}

</script>

<template>
  <div>
    <div class="nav-bottom"> 
     <RouterLink to='/professor' @click.native="scrollToTop()">
      <i class="fa-solid fa-user"></i>
      <h5>Professor</h5>
    </RouterLink>
    <RouterLink to='/blog' @click.native="scrollToTop()">
      <i class="fa-solid fa-blog"></i>
    <h5>BLOG</h5>
    </RouterLink>
     <RouterLink to='/sobre' @click.native="scrollToTop()">
    <i class="fa-solid fa-person-rays"></i>
      <h5>SOBRE</h5>
    </RouterLink>
  </div>
  </div>
</template>

<style scoped>
h5 {
  margin: 9px 0 13px 0;
  font-size: .6em;
}
i {
  font-size: 1.1em;
}
.nav-bottom {
  position: fixed;
  bottom: .1px;
  width: 100%;
  background-color: #fff;
  color: #dbd1d1;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  line-height: 0;
  border-radius: 10% 10% 0% 0%;
  box-shadow: 0px 2px 3px #000;
  z-index: 20;
}

.nav-bottom div {
  cursor: pointer;
}

.nav-bottom div h5 {
  margin: 0;
  padding:0;
  font-size: 1em;
}

.nav-bottom a {
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: #888;
  font-size: .9em;
  margin: 10px 0 0px 0;
}

.nav-bottom a:hover {
  text-shadow: 0px 0px .5px black;
}

.nav-bottom a.RouterLink-exact-active {
  color: #000;
}
</style>