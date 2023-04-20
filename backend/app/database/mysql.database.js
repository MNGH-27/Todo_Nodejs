require("dotenv").config();
const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "todoapp",
  password: "",
});

module.exports = pool;
