const express = require("express");

const authRouter = require("./auth/auth.routes");

const api = express.Router();

//app router
api.use("/auth", authRouter);

module.exports = api;
