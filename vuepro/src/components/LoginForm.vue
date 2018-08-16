<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>
<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.testAccount.username && this.input.password == this.$parent.testAccount.password) {
                       this.authenticated = true
                        this.$router.push({ path: "success" });
                    } else {
                        alert("The username and / or password is incorrect");
                    }
                } else {
                    alert("A username and password must be present");
                }
            }
        }
    }
</script>
