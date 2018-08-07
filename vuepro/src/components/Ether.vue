<template>
  <div class="hello">
    <h1>{{ price }}</h1>
    <h1>{{ message }}</h1>
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
const sql = require('mssql')
var sqlConfig = {
    user: 'sa',
    password: 'sa@1234',
    server: '192.168.1.126',  
    database: 'SampleTest'
  };
export default {
  name: "Ether",
  data() {
    return {
     // price: 200,
     // message: "Hello Vue!"
     StartDate: '2018-06-27',
     EndDate: '2018-06-28'
    };
  },
  methods: {
    clicking() {
      //this.price = this.price + 100;
      //this.message = this.message.split("").reverse().join("");
      sql.connect(databaseConfig, err => {

    // ... error checks

if (err) {
  console.log('error: ' + err)

} else {
  console.log('conencted')
}
})


    }
  }
};
</script>