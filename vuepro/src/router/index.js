import Vue from 'vue'
import Router from 'vue-router'
import loginForm from '.components/LoginForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/loginForm',
      name: 'loginForm',
      component: loginForm
    }
  ]
})