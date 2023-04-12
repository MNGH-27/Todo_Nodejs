require("dotenv").config();

const http = require("http");

// require("./app/database/mysql.database");

//import app from app.js file
const app = require("./app");

const PORT = process.env.PORT || 5000;

//use app.js file to create Server
const server = http.createServer(app);

//start server with app.js
async function startServer() {
  server.listen(PORT, () => {
    console.log(`listening to port : ${PORT}`);
  });
}

//start server . . .
startServer();

//..........
