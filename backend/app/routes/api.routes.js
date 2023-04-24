const express = require("express");

//routers
const authRouter = require("./auth/auth.routes");
const userRouter = require("./user/user.routes");
const taskRouter = require("./task/task.routes");

//api Router
const api = express.Router();

//app router
api.use("/auth", authRouter);
api.use("/user", userRouter);
api.use("/task", taskRouter);

module.exports = api;
