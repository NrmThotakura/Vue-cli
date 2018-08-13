<template>
  <div class="hello">
    <h1>{{ price }}</h1>     
    <button @click="clicking()">Change Value</button>
  </div>
</template>
<script>
var sqlInstance = require("mssql");
var setUp = {
  server: "192.168.1.126",
  database: "SampleTest",
  user: "sa",
  password: "sa@1234"
};
function executeDatabaseActions(dbData) {
  sqlInstance.connect(setUp).then(function() {
    new sqlInstance.Request()
      // .query("CALL [Getmessage_Narmada]('2018-07-17', '2018-07-20')")
      .query("SELECT * FROM UnitType")
      .then(function(dbData) {
        if (dbData == null || dbData.length === 0)
          $.ajax({
            dataType: "json",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "http://localhost:8080/",
            data: JSON.stringify(dbData),
            success: function(dbData) {
              console.log(dbData);
              if (dbData.length > 0) {
              return  alert(dbData[0].name)
              } else {
                // if (response.errno) {
                //   self.errLoginMsg("Server Error: " + response.errno);
                // } else self.alert("No Data");
                alert("No Data");
              }
            },
            // error: function(d) {
            //   console.log(d);
            // }
          });
      });
  });
}
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