//importing Vue, along with our root App.js component

import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  Router,
  render: h => h(App)
}).$mount('#app')


