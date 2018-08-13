<template>
  <div class="hello">
    <h1>{{ price }}</h1>     
    <button @click="clicking()">Change Value</button>
  </div>
</template>
<script>

  export default {
  name: "Ether",
  data() {
    return {
      msg: "This is the DB Table Data",
    };
  },
  methods: {
    clicking() {
      //this.results[0].abstract = this.results[1].abstract
      executeDatabaseActions();
      //this.price = this.price;
    }
  }
};
</script>