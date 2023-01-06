<template>
    <div class='nav-two'>
        <div>
            <div>
                <a @click="$router.go(-1)"><i class="fas main-l fa-arrow-left"></i></a>
            </div>
            <div>
                <RouterLink to=""><i class="fa-solid fa-share-nodes"></i></RouterLink>
                <RouterLink to=""><i class="fa-solid fa-bars"></i></RouterLink>
            </div>
        </div>
    </div>

</template>
<style scoped>
.nav-two{
  height: 35px;
  position: sticky;
  top: -1px;
  background: #860d0d;    
  border-radius: 0% 0% 10% 10%;
  box-shadow: 0px .5px 5px #e23a2850;
  z-index: 10;
}

.nav-two div{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.nav-two a{
  text-decoration: none;
  cursor: pointer;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-two i {
  color: #dbd1d1;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}
</style>
