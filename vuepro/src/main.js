import Vue from 'vue'
import App from './App.vue'
import Ether from './components/Ether.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Ether)
  }).$mount('#app')


