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
  try {
    sqlInstance.connect(setUp)
      .then(function () {

        new sqlInstance.Request()
          .query("select * from STUDENT")
          .then(function (dbData) {
            if (dbData == null || dbData.length === 0)
              return;

            for (var i = 0; i < dbData.length; i++) {

              var Sname = dbData[i].Name;

              console.dir(Sname);

            }
          })
          .catch(function (error) {
            console.dir(error);
          });
      }).catch(function (error) {
        console.dir(error);
      });
  } catch (error) {
    console.dir(error);
  }
}
//executeDatabaseActions();
var server = app.listen(8080, function () {
  console.log('Server is running..');
});
