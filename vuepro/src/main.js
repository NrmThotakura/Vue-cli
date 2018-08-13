// import Vue from 'vue'
// import App from './App.vue'
// import Ether from './components/Ether.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(Ether)  
//   }).$mount('#app')

// var express = require('express');
// var app = express();

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', function (req, res) {
//     res.sendFile('/Vue-cli_Git/Vue-cli/vuepro/public/index.html');
// });

// app.post('/', function (req, res) {
//     var name = req.body.firstName + ' ' + req.body.lastName;
    
//     res.send(name + ' Submitted Successfully!');
// });

// var server = app.listen(8080, function () {
//     console.log('Node server is running..');
// });

var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {   
    var sql = require("mssql");
    var config = {
        user: 'sa',
        password: 'sa@1234',
        server: '192.168.1.126', 
        database: 'SampleTest' 
    };
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query("select * from Student")
      }).then(result => {
        let rows = result.recordset
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(200).json(rows);
        sql.close();
      }).catch(err => {
        res.status(500).send({ message: "${err}"})
        sql.close();
      });
});


var server = app.listen(8080, function () {
    console.log('Server is running..');
});
