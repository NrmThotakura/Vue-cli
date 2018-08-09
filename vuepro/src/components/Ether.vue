<template>
  <div class="hello">
    <h1>{{ message }}</h1>     
    <button @click="clicking()">Change Value</button>
  </div>
</template>
<script>
var sqlInstance = require("mssql");
var setUp = {
    server: '192.168.1.126',
    database: 'RoomTempo',
    user: 'sa',
    password: 'sa@1234'
};
function executeDatabaseActions() {
        sqlInstance.connect(setUp)
            .then(function () {

                new sqlInstance.Request()
                    .query("CALL [Getmessage_Narmada]('2018-07-17', '2018-07-20')")								
                    .then(function (dbData) {
                        if (dbData == null || dbData.length === 0)
                           return;
                         dbData
                    })
})
}
export default {
  name: "Ether",
  data(dbData) {
    return {
      //  price : 200,
        message: dbData[0].name
    };
  },
  methods: {
    clicking() {
      //this.results[0].abstract = this.results[1].abstract
      executeDatabaseActions();
      this.message = this.message
    }
  }
};
</script>