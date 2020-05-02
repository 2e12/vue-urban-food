import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false
Vue.prototype.$apiServer = 'http://127.0.0.1:8000/'

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
