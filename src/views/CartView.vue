<template>
  <h1 class="text-center">Kosár</h1>
  <p v-if="Object.entries(botStore.cart).length < 1">üres</p>
  <table v-else>
    <tr v-for="p in botStore.cart"> 
      <td> {{ p.Id }} </td>
    </tr>
  </table>
</template>

<style scoped>

</style>

<script setup>
import { useBotStore } from '@/stores/bot';
const botStore = useBotStore();
</script>