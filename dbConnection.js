const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "localhost", 
    user: "root",
    database: "xelpmoc", 
    password: "Mysql_12345",
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = db_connection;