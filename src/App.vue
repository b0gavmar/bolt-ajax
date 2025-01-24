<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useBotStore } from '@/stores/bot.js'
//vagy from '@/stores/bot.js'


const botStore = useBotStore();

onMounted(()=>{
  botStore.loadAll();
});

</script>

<template>
  <div class="container">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/cart">kosar</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
