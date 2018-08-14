<template>
   <div>
      <h1>{{producturl}}</h1>      
      <button @click="clicking">Login Form</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      producturl: "test"
    };
  },
  methods: {
    clicking() {
      alert("Click")
    }
  }
};
</script>
