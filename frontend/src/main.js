import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Buefy from 'buefy'

import FetchData from 'vue-fetch-data'

Vue.use(FetchData)
Vue.use(Buefy)

Vue.config.productionTip = false
Vue.prototype.$apiServer = 'http://192.168.1.116:8000/'



new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
