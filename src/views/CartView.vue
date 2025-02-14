<template>
  <h1 class="text-center">Kosár</h1>
    <p v-if="Object.entries(botStore.cart).length < 1"> Üres a kosár!</p>
    <div v-else>
      <table class="table table-striped w-75 mx-auto">
        <thead>
          <tr>
          <th>Név</th>
          <th>Ár</th>
          <th>Mennyiség</th>
          <th>Összesen</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(v,k) in botStore.cart">
            <td>{{ botStore.products.find(p=>p.id === k).name}}</td>
            <td>{{ botStore.products.find(p=>p.id === k).price}}</td>
            <td>{{ v }}</td>
            <td>{{ v *(parseFloat(botStore.products.find(p=>p.id==k).price)) }} Ft</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" class="text-center fs-6 fw-1">Végösszeg: {{ botStore.countTotal() }} Ft</td>
          </tr>
        </tfoot>
        
      </table>
      <button @click="botStore.emptyCart()"class="btn btn-outline-danger">Kosár ürítése</button>
    </div>
</template>

<script setup>
  import {useBotStore} from '@/stores/bot.js'
  const botStore = useBotStore()

</script>