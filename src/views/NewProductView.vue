
<template>
    <h1>Uj termek</h1>
    <form @submit.prevent="saveProduct()">
        <input type="text" v-model="name" placeholder="Termék neve">
        <input type="text" v-model="price" placeholder="Csomagolási egység">
        <input type="text" v-model="unit" placeholder="Termék ">
        <input type="text" v-model="desc" placeholder="Termék leirása">
        <input type="text" v-model.number="store" placeholder="Raktárkészlet">
        <input type="submit" value="Mentés">
    </form>
</template>

<script setup>

</script>
