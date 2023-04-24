const Jwt = require("jsonwebtoken");
const Joi = require("joi");

//models
const Task = require("../../models/task.model");

async function createNewTask(req, res) {
  const taskSchema = Joi.object({
    title: Joi.string().required().messages({
      "string.base": `value must be string`,
      "string.empty": `email can't be empty`,
      "any.required": `email must be entered`,
    }),
    description: Joi.string(),
  });

  //validate sended values with Joi
  const { error, value } = taskSchema.validate(req.body, { abortEarly: false });

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

  //initail new task ()
  const task = new Task();

  //initial new Task
  const newTask = {
    title: value.title,
    description: value.description,
    is_complete: false,
    user_id: req.user.id,
    is_priority: false,
  };

  try {
    //check result task
    const taskResult = await task.save(newTask);

    //return result of add new task as response
    return res.status(201).send({ ...taskResult });
  } catch (error) {
    //there was error while saving and finding user , return error
    return res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
}

async function GetAllTaskOfUser(req, res) {
  const task = new Task();

  try {
    //check result task
    const taskList = await task.getAllTaskOfUser(req.user.id);

    //return result of add new task as response
    return res.status(201).send({ data: [...taskList] });
  } catch (error) {
    //there was error while saving and finding user , return error
    return res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
}

module.exports = {
  createNewTask,
  GetAllTaskOfUser,
};
