<!--<template>
  <div id="app">
    <!--<Ether msg="Ethereum" />
    <router-link to=".components/LoginForm.vue">loginForm</router-link>
  </div>
</template>-->

// <script>
// import Ether from './components/Ether.vue';
// import LoginForm from './components/LoginForm.html';
// export default {
//   name: 'app',
//   components: {
//     //Ether,
//     LoginForm
//   }
// }
// </script>

<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "abc",
                    password: "123"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>
