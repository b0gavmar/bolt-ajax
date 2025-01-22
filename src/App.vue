<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cart">kosar</RouterLink>
      </nav>
  <RouterView />
</template>

<style scoped>

</style>
