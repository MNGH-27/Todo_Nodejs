require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "todoapp",
  password: "",
});

module.exports = pool.promise();
