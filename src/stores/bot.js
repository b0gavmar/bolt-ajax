import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification';

export const useBotStore = defineStore('bot', () => {
  const products = ref([])
  const cart = ref([]); //elég tárolni a termék id-t és mennyiség párosát (key-value) (id-mennyiseg)
  const toast = useToast();
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
    let o = {'id':id,'q':1}
    if(cart.value.length == 0){
      cart.value.push(o); 
    }
    else{
      let index = cart.value.findIndex(p=>p.id==id)
      console.log(index)
      cart.value[index].q +=1
    }
    
  }

  const saveProduct = (p) =>{
    console.log(p)
    //let id = Math.round(Math.random*100000000000)
    products.value.push(p)
    axios.post("http://localhost:3000/bolt",p)
    .then(resp => {
      console.log(resp.statusText)
      Toast("Sikeres mentés")
    }).catch(() => toast("Hiba"));
  }

  return { products, cart, loadAll, addToCart, saveProduct }
})
