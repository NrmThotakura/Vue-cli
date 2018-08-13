var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mssql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  server: "192.168.1.126",
  database: "SampleTest",
  user: "sa",
  password: "sa@1234"
});
 
connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

 

app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({    
  extended: true
})); 

var server = app.listen(8080,  "192.168.1.205", function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Example app listening at http://%s:%s", host, port)
 
});
 
app.get('/', function (req, res) {
   connection.query('select * from UnitType', function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});

// const app = require('../server')

// const port = process.env.PORT || 8080

// app.listen(port, () => {
//   console.log(`server started at localhost:${port}`)
// })