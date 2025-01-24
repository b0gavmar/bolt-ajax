import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBotStore = defineStore('products', () => {
  const products = ref(0)
  
  /*const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }*/

  const loadAll = () =>{
    fetch("http://localhost:3000/bolt")
    .then(resp => resp.json())
    .then(data => products.value = data)
  }

  return { products, loadAll }
})
