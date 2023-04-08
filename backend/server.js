require("dotenv").config();

const express = require("express");
const app = express();

//middleware
app.use(express.json()); //parse json bodies in the request object

//redirect request to endpoint statrting with /posts to postRoutes.js
// app.use("/post",require("./"))

//Global Error Handler, IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Somthing went wrong",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening to port : ${PORT}`));
