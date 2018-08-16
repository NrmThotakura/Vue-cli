import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '@/components/LoginForm'
import success from '@/components/Success'

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
