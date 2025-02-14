import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from 'vue-toastification'

export const useBotStore = defineStore('bot', () => {
  const products = ref([])
  const cart = ref({})  //Elég tárolni a termék id és mennyiség párosát, key-value
  const toast = useToast()
  
  const loadAll = () => {
    fetch("http://localhost:3000/bolt")
    .then(resp => resp.json())
    .then(data => products.value = data)
  }

  const addToCart = (id) =>{    
    //let o = {'id' : id, 'q' : 1}    
    cart.value[id] = cart.value[id] ? cart.value[id] + 1 : 1
    toast("Kosárhoz adva")
    products.value.find((p) => p.id == id).store--   
  }

  const saveProduct = (p) => {
    console.log(p)
    //let id = Math.round(Math.random() * 1000000000)
    products.value.push(p)
    axios.post("http://localhost:3000/bolt",p)
    .then(resp => {
      console.log(resp.statusText)
      toast("Sikeres mentés");
    })
    .catch(() => toast.error("Hiba"))
  }

  const emptyCart = () =>{
    for (const key in cart.value) {
      products.value.find((p) => p.id == key).store += cart.value[key]
    }
    cart.value = {}
    toast.error("Kosár ürítve!")
  }

  return { products , cart, loadAll, addToCart, saveProduct, emptyCart}
})
