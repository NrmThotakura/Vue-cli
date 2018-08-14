var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
 
//start mysql connection
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
//end mysql connection
 
//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration
 
//create app server
var server = app.listen(8080,  "192.168.1.205", function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Example app listening at http://%s:%s", host, port)
 
});
 
//rest api to get all results
app.get('/UnitType', function (req, res) {
   connection.query('select * from UnitType', function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});