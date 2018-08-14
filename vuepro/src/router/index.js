import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from './components/LoginForm.vue'
import success from './components/Success.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/LoginForm",
            name: "LoginForm",
            component: LoginForm
        },
        {
            path: "/success",
            name: "success",
            component: success
        }
    ]
})