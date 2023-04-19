const Joi = require("joi");

const User = require("./../../models/user.model");

async function LoginUser(req, res) {}

async function CreateUser(req, res) {
  const userSchema = Joi.object({
    firstName: Joi.string().required().messages({
      "string.base": `مقدار وارد شده باید رشته باشد`,
      "string.empty": `نام نمیتواند خالی باشد`,
      "any.required": `مقدار نام باید وارد شود`,
    }),
    lastName: Joi.string().required().messages({
      "string.base": `مقدار وارد شده باید رشته باشد`,
      "string.empty": `نام خانوادگی نمیتواند خالی باشد`,
      "any.required": `مقدار نام خانوادگی باید وارد شود`,
    }),
    email: Joi.string().email().required().messages({
      "string.base": `مقدار وارد شده باید رشته باشد`,
      "string.empty": `ایمیل نمیتواند خالی باشد`,
      "any.required": `مقدار ایمیل باید وارد شود`,
    }),
    password: Joi.string().min(6).required().messages({
      "string.base": `مقدار وارد شده باید رشته باشد`,
      "string.empty": `رمز عبور نمیتواند خالی باشد`,
      "string.min": `رمز عبور باید حداقل 6 رقم باشد`,
      "any.required": `مقدار رمز عبور باید وارد شود`,
    }),
  });

  //validate sended values with Joi
  const { error, value } = userSchema.validate(req.body, { abortEarly: false });

  //check if we have error
  if (error) {
    //we have error , create object and add errors to it
    const errorMessage = {};

    //loop on error to destruct error and add to errorMessage Object
    error.details.forEach((item) => {
      errorMessage[item.context.key] = item.message;
    });

    //return as error with BAD REQUEST (400) with error messages
    return res.status(400).send({ error: errorMessage });
  }

  //requested are validated
  const newUser = new User(
    value.firstName,
    value.lastName,
    value.password,
    value.email
  );

  console.log("this is user", newUser);

  console.log("resualt : ", await newUser.save());

  res.send({ value });
}

module.exports = {
  CreateUser,
  LoginUser,
};
