const Joi = require("joi");
const jwt = require("jsonwebtoken");
//model
const User = require("./../../models/user.model");

async function GetUser(req, res) {
  console.log("req : ", req.user);

  res.send(200);

  //   const loginUser = new User();
  //   try {
  //     const loginUserResult = await loginUser.loginUser(
  //       value.email,
  //       value.password
  //     );
  //     //check if we have result in login
  //     if (loginUserResult.length === 0) {
  //       return res.status(400).send({
  //         message: "there is no any user with this data",
  //       });
  //     } else {
  //       //create token for login
  //       const token = jwt.sign(
  //         { id: loginUserResult.id },
  //         process.env.JWT_SECRET,
  //         {
  //           expiresIn: "1d",
  //         }
  //       );
  //       return res.status(201).send({ ...loginUserResult[0], token });
  //     }
  //   } catch (error) {
  //     //there was error while saving and finding user , return error
  //     return res.status(500).send({
  //       message:
  //         error.message || "Some error occurred while creating the Tutorial.",
  //     });
  //   }
}

module.exports = {
  GetUser,
};
