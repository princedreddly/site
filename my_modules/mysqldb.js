const mysql = require('mysql');


//database connection
var dbc = mysql.createConnection({
  host: "localhost",
  user: "PS",
  password: "qwerty123"
});


//status
var dbg = dbc.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");


  //9 values
  var sql = "SELECT * FROM `princedreddly-site`.gamestable";

  dbc.query(sql, function (err, rows, fields) {
    if (err) throw err;

    console.log(rows);
    dbc.end();
  });
});