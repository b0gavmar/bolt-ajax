import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBotStore = defineStore('bot', () => {
  const products = ref([])
  const cart = ref([]);
  /*const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }*/

  const loadAll = () => {
    fetch("http://localhost:3000/bolt")
    .then(resp => resp.json())
    .then(data => products.value = data)
  }

  const addToCart = (id) => {
    cart.value.push(products.value.find(p => p.id == id));
  }

  return { products, loadAll, addToCart }
})
