const express = require("express");

//npm middleware
const cors = require("cors");
const helmet = require("helmet");

//custom middle ware
const JwtChecker = require("./app/middleware/jwt.middleware");
const SenitizeInput = require("./app/middleware/sanitize.middleware");

const app = express();

const api = require("./app/routes/api.routes");

//middleware
app.use(cors());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted-cdn.com"],
      objectSrc: ["'none'"],
      imgSrc: ["'self'"],
      styleSrc: ["'self'", "trusted-cdn.com"],
      fontSrc: ["'self'", "trusted-cdn.com"],
    },
  })
);

app.use(express.json()); //parse json bodies in the request object

//middleware - custom middleware
app.use(JwtChecker);
app.use(SenitizeInput);

//route
app.use("/v1", api);

module.exports = app;
