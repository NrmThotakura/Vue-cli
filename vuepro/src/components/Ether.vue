<template>
  <div class="hello">
    <h1>{{ price }}</h1>
    <button @click="clicking()">Change Value</button>
  </div>
</template>

<script>
   export default {
   name: 'Ether',
   data() {
     return {
         price = 200
     }
   },
   methods: {
      clicking() {
         this.price = 300;
      }
   }
}
</script>