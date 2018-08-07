<template>
  <div class="hello">
    <h1>{{ price }}</h1>
    <h1>{{ message }}</h1>    
    <button @click="clicking()">Change Value</button>
  </div>
</template>

<script>
   export default {
   name: 'Ether',
   data() {
     return {
         price : 200,
         message: 'Hello Vue!'
     }
   },
   methods: {
      clicking() {
         this.price = this.price  + 100;
         this.message = this.message.split('').reverse().join('')
      }
   }
}
</script>