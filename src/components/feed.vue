<script setup>
import NavOne from './NavOne.vue'
import NavBottomTree from './NavBottomTree.vue'
import Home from './Home.vue'


</script>
<template>
  <NavOne />
  <NavBottomTree />
  <div>
    <div class='anima'>
    <div class='logo'>
    
      <span class='logoAnimationOne'>
        <h1>Bem-vindo(a) {{ $route.params.id }} !!</h1>
    
      </span>
    
    </div>
  </div>
  </div>
</template>
