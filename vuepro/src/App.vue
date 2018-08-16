<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="./components/LoginForm.vue" v-on:click.native="logout()" replace>Logout</router-link>
           <!-- <router-link to="./components/LoginForm.vue" tag="button" v-on:click.native="logout()" replace>Logout</router-link>-->
        </div>
       <router-view @authenticated="setAuthenticated" />
    </div>
</template>

 <script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      testAccount: {
        username: "abc",
        password: "123"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "LoginForm" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
      // alert("Logout Successfully")
    }
  }
};
</script>


