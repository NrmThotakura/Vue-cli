<template>
  <div id="app">
    <Ether msg="Ethereum" />
  </div>
</template>

<script>
import Ether from './components/Ether.vue';
//import LoginForm from './components/LoginForm.html';
export default {
  name: 'app',
  components: {
    Ether,
    //LoginForm
  }
}
</script>
