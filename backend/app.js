const express = require("express");

//npm middleware
const cors = require("cors");

const app = express();

const api = require("./app/routes/api.routes");

//middleware
app.use(cors());

app.use(express.json()); //parse json bodies in the request object

app.use("/v1", api);

module.exports = app;
