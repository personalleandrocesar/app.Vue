<template>
    
    <div class='nav-one'>
        <div>
          <h1>Bem-vindo(a) {{ $route.params.id['name'] }} !!</h1>
        </div>
    </div>

</template>
<style scoped>
h1 {
  color: #095d62;
  transition: all .3s linear;
  cursor: pointer;
  font-size: 1.1em;
  margin:5px 0 0 0;
  text-align: center;
}
.nav-one{
  height: 35px;
  position: sticky;
  top: -2px;
  background: #fff;
  z-index: 10;
  border-radius: 0% 0% 10% 10%;
  box-shadow: 0px .5px 5px #eee;
  z-index: 10;
}

.nav-one div{
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.nav-one a{
  text-decoration: none;
  cursor: pointer;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-one i {
  color: #aaa;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.nav-one i:hover {
  color: #fadb41;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}
</style>