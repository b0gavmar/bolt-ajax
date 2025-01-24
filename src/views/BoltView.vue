<script setup>
import { useBotStore } from '@/stores/bot.js'

const botStore = useBotStore();

</script>

<template>
  <h1 class="text-center">Termékek</h1>
  <div class="row">
    <div v-for="p in botStore.products" :key="p.id" class="card">
      <p class="card-title"> {{ p.name }}</p>
      <div class="card-footer">
        <button class="btn btn-outline-primary"></button>
      </div>
    </div>
  </div>
</template>
