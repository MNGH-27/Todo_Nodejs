const express = require("express");

//npm middleware
const cors = require("cors");

//custom middle ware
const JwtChecker = require("./app/middleware/jwt.middleware");

const app = express();

const api = require("./app/routes/api.routes");

//middleware
app.use(cors());

app.use(express.json()); //parse json bodies in the request object

//middleware - custom middleware
app.use(JwtChecker);

//route
app.use("/v1", api);

module.exports = app;
