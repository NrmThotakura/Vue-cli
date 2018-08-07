<template>
  <div class="hello">
    <h1>{{ price }}</h1>
   // <h1>{{ message }}</h1>
    <form>
      Start Date
      <input type="date" placeholder="Select Start Date" id="ipStartDate"/> <br>
      End Date
      <input type="date" placeholder="Select End Date" id="ipEndDate"/><br>
      <button @click="clicking()">Get Message Data</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Ether",
  data() {
    return {
     price: 200,
     message: "Hello Vue!"
     
    };
  },
  methods: {
    clicking() {
      this.price = this.price + 100;
      this.message = this.message.split("").reverse().join("");
      //return price = this.StartDate + thhis.EndDate


    }
  }
};
</script>