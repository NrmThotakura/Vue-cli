<template>
  <div class="hello">
    <!-- <h1>{{ price }}</h1>-->
    <h1>{{ message }}</h1>     
   <!-- <p>{{results[0].abstract}}</p> -->
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
    // try {
        sqlInstance.connect(setUp)
            .then(function () {

                new sqlInstance.Request()
                    .query("CALL [Getmessage_Narmada]('2018-07-17', '2018-07-20')")								
                    .then(function (dbData,error) {
                        if (dbData == null || dbData.length === 0)
                           return;
                         res.json(dbData)
                    })
//                     .catch(function (error) {
//                         res.send(error);
//                     });
})
}
//}
export default {
  name: "Ether",
  data(dbData) {
    return {
      //  price : 200,
        message: dbData[0].name
    //   results: [
    //   {ID: "the very first post", abstract: "first post"},
    //   {title: "and then there was the second", abstract: "second post"},
    //   {title: "third time's a charm", abstract: "third post"},
    //   {title: "four the last time", abstract: "four post"}
    // ]
    };
  },
  methods: {
    clicking() {
      //  this.price = this.price  + 100;
      //  this.message = this.message.split('').reverse().join('')
      //this.results[0].abstract = this.results[1].abstract
      this.message = this.message
    }
  }
};
</script>