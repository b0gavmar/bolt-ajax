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
      <div class="container">
        <nav>
            <RouterLink class="btn btn-outline-success m2" to="/">Termékek</RouterLink>
            <RouterLink class="btn btn-outline-success m2" to="/new">Új termék</RouterLink>
            <RouterLink class="btn btn-outline-success m2" to="/cart">Kosár</RouterLink>
        </nav>
    </div>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
