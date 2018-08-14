import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from './components/Ether.vue'
import success from './components/success.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
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