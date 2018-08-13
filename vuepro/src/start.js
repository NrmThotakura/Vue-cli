var express = require('express');
var app = express();
var sqlInstance = require("mssql");
var setUp = {
  server: "192.168.1.126",
  database: "SampleTest",
  user: "sa",
  password: "sa@1234"
};
function executeDatabaseActions() {
  sqlInstance.connect(setUp).then(function () {
    new sqlInstance.Request()
      .query("SELECT * FROM UnitType")
      .then(function (dbData) {
        if (dbData == null || dbData.length === 0)
          return;
        console.dir(dbData[0].ID);
      })
      .catch(function (error) {
        console.dir(error);
      });
  });
}
// var server = app.listen(8080, function () {
//   console.log('Server is running..');
// });
// const app = require('../server')

// const port = process.env.PORT || 8080

// app.listen(port, () => {
//   console.log(`server started at localhost:${port}`)
// })