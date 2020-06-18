import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addItemToCart (state, item) {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === item.id){
          state.cart[i].quantity++
          return
        }
      }
      item.quantity = 1;
      state.cart.push(item)
    }
  },
  getters: {
    isItemInCart: (state) => (item) => {
      for (var i = 0; i < state.cart.length; i++) {
        if(state.cart[i].id === item.id){
          return true;
        }
      }
      return false;
    }
  }
})

export default store
