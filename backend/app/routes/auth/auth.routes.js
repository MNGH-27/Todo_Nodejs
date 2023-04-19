const express = require("express");

//controller
const authController = require("./../../controllers/auth/auth.controller");

//router
const authRouter = express.Router();

//@routes POST /auth/login
authRouter.post("/login", authController.LoginUser);

authRouter.post("/signup", authController.CreateUser);

module.exports = authRouter;
