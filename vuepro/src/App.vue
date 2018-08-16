<template>
    <div id="app">
        <div id="nav">
            <router-link tag="button" v-if="authenticated" to="/LoginForm" v-on:click.native="logout()" replace>Logout</router-link>         
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
      this.$router.push({ path: 'LoginForm' })
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
};
</script>


