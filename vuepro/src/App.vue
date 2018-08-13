<template>
  <div id="app">
    <Ether msg="Ethereum" />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
import Ether from './components/Ether.vue';

export default {
  name: 'app',
  components: {
    //HelloWorld,
    Ether
  }
}
</script>