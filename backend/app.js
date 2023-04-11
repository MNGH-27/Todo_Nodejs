const express = require("express");

const app = express();

const api = require("./app/routes/api.routes");

//middleware
app.use(express.json()); //parse json bodies in the request object

app.use("/v1", api);

module.exports = app;
