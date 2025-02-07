
<template>
    <h1>Uj termek</h1>
    <form class="w-50" @submit.prevent="bolt.saveProduct(product)">
        <input class="form-control mb-2" type="text" v-model="product.name" placeholder="Termék neve">
        <input class="form-control mb-2" type="text" v-model="product.price" placeholder="Csomagolási egység">
        <input class="form-control mb-2" type="text" v-model="product.unit" placeholder="Termék ">
        <input class="form-control mb-2" type="text" v-model="product.desc" placeholder="Termék leirása">
        <input class="form-control mb-2" type="text" v-model.number="product.store" placeholder="Raktárkészlet">
        <input class="btn btn-success" type="submit" value="Mentés">
    </form>
</template>

<script setup>
    import { ref } from 'vue';
    import { useBotStore } from '@/stores/bot';
    const bolt = useBotStore()
    const product = ref({
        "name": "",
        "unit": "",
        "desc": "",
        "store": "",
        "price": ""
    });
</script>
