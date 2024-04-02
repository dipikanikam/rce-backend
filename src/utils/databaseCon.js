const mysql =  require('mysql');


const con = mysql.createConnection({
    host: "3306",
    user: "root",
    password: "root"
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });