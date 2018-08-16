//importing Vue, along with our root App.js component

import Vue from 'vue'
import Router from './router/index'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#app')


