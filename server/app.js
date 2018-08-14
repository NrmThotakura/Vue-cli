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
      return pool.request().query("select * from Users")
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
