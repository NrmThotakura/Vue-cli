var sqlInstance = require("mssql");
var setUp = {
  server: "192.168.1.126",
  database: "SampleTest",
  user: "sa",
  password: "sa@1234"
};
function executeDatabaseActions() {
  sqlInstance.connect(setUp).then(function() {
    new sqlInstance.Request()
      // .query("CALL [Getmessage_Narmada]('2018-07-17', '2018-07-20')")
      .query("SELECT * FROM UnitType")
      .then(function(dbData) {
        if (dbData == null || dbData.length === 0)
        // return;
        // //for (var i = 0; i < dbData.length; i++) {
        //     var Sname = dbData[0].OTACode;
        //     console.log(Sname);
        // //}
        res.send(dbData);
      });
  });
}
var server = app.listen(8080, function () {
  console.log('Server is running..');
});
// const app = require('../server')

// const port = process.env.PORT || 8080

// app.listen(port, () => {
//   console.log(`server started at localhost:${port}`)
// })