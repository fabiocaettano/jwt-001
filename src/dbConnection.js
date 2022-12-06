var mysql = require('mysql');
require("dotent").config();

var conn = mysql.createConnection({
  host: process.env.HOST_DB, 
  user: process.env.MYSQL_USER, 
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;