<template>
  <h1 class="text-center">Kosár</h1>
    <p v-if="Object.entries(botStore.cart).length < 1"> Üres a kosár!</p>
    <div v-else>
      <table >
        <tr v-for="p in botStore.cart">
          <td>{{ p.key }}</td>
        </tr>
      </table>
      <button @click="botStore.emptyCart()"class="btn btn-outline-danger">Kosár ürítése</button>
    </div>
</template>

<script setup>
  import {useBotStore} from '@/stores/bot.js'
  const botStore = useBotStore()

</script>