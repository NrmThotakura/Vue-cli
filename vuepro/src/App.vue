<template>
  <div id="app">
    <Ether msg="Ethereum" />
  </div>
</template>

<script>
import Ether from './components/Ether.vue';
export default {
  name: 'app',
  components: {
    Ether
  }
}
</script>
