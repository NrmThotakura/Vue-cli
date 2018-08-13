import Vue from 'vue'
import App from './App.vue'
import Ether from './components/Ether.vue'
//import app from '/app.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(app)  
  }).$mount('#app')


