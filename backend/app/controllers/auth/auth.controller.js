const Joi = require("joi");

const User = require("./../../models/user.model");

async function LoginUser(req, res) {
  const userSchema = Joi.object({
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

  const loginUser = new User();

  try {
    const loginUserResult = await loginUser.loginUser(
      value.email,
      value.password
    );

    //check if we have result in login
    if (loginUserResult.length === 0) {
      return res.status(400).send({
        message: "کاربری با این اطلاعات پیدا نشده",
      });
    } else {
      return res.send({ ...loginUserResult });
    }
  } catch (error) {
    //there was error while saving and finding user , return error
    return res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
}

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

  //start saving file with work with userModel
  try {
    //try to findout if we have user with same email
    const userWithEmail = await newUser.findUserWithEmail(newUser.email);
    //check if we have user
    if (userWithEmail.length !== 0) {
      //there is user with this email , return error
      return res.status(400).send({
        message: "ایمیل داده شده قبلا ثبت شده",
      });
    }

    //there is no any user with this email , save user
    const resultSaveUser = await newUser.save(newUser);
    //return save status and saved user data
    return res.status(201).send({ ...resultSaveUser });
  } catch (err) {
    //there was error while saving and finding user , return error
    return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial.",
    });
  }
}

module.exports = {
  CreateUser,
  LoginUser,
};
