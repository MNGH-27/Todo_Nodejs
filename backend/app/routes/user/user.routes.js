const express = require("express");

//controller
const userController = require("./../../controllers/user/user.controller");

//router
const userRouter = express.Router();

//@routes

// route / => get single user with token
userRouter.get("/", userController.GetUser);

module.exports = userRouter;
