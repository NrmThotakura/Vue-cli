<template>
  <div class="hello">
    <!-- <h1>{{ price }}</h1>
    <h1>{{ message }}</h1>     -->
   <p>{{results[0].abstract}}</p>
    <button @click="clicking()">Change Value</button>
  </div>
</template>

<script>
export default {
  name: "Ether",
  data() {
    return {
      //  price : 200,
      //  message: 'Hello Vue!'
      results: [
      {title: "the very first post", abstract: "first post"},
      {title: "and then there was the second", abstract: "second post"},
      {title: "third time's a charm", abstract: "third post"},
      {title: "four the last time", abstract: "four post"}
    ]
    };
  },
  methods: {
    clicking() {
      //  this.price = this.price  + 100;
      //  this.message = this.message.split('').reverse().join('')
      this.results[0].abstract = this.results[1].abstract
      
    }
  }
};
</script>