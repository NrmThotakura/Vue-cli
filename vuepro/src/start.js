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
              //return  alert(dbData[0].name)
              res.end(JSON.stringify(results));
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

// const app = require('../server')

// const port = process.env.PORT || 8080

// app.listen(port, () => {
//   console.log(`server started at localhost:${port}`)
// })