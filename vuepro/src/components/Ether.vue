<template>
   <div>
      <h1>{{producturl}}</h1> 
      <template src="./components/LoginForm.html"></template>>
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
      this.producturl = window.location.href = "./components/LoginForm.html";
     //this.producturl = "clicked"
    }
  }
};
</script>
