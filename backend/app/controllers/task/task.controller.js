const Jwt = require("jsonwebtoken");
const Joi = require("joi");

//models
const Task = require("../../models/task.model");

//helper
const filterList = require("./../../helpers/fieldFilter.helper");

async function createNewTask(req, res) {
  const taskSchema = Joi.object({
    title: Joi.string().required().messages({
      "string.base": `value must be string`,
      "string.empty": `title can't be empty`,
      "any.required": `title must be entered`,
    }),
    description: Joi.string().allow("").allow(null),
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

    //filter list remove item => ("user_id")
    const filteredTask = taskList.map((singleTask) => {
      // map on each single object of array to remove selected item
      return filterList(singleTask, ["user_id"], "remove");
    });

    //return result of get users task
    return res.status(200).send({ data: [...filteredTask] });
  } catch (error) {
    //there was error while finding taks of user
    return res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
}

async function RemoveSingleTask(req, res) {
  const task = new Task();

  const { id } = req.params;

  //check if we have id as param
  if (!id) {
    //there is no param return error
    return res.status(400).send({
      message: "id of task must be sent",
    });
  }

  try {
    //check result task
    const removeTaskResult = await task.removeSingleTaskOfUser(req.user.id, id);

    //check if affectedRows row be 1
    if (removeTaskResult.affectedRows === 1) {
      //return response as removed successfully
      return res.status(202).send({
        message: "task removed successfully",
      });
    } else {
      //there wasn't any row with this id
      return res.status(400).send({
        message: "there wasn't any task with this id",
      });
    }
  } catch (error) {
    //there was error while removing task of user
    return res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
}
async function EditSingleTask(req, res) {
  console.log("come here");

  const taskSchema = Joi.object({
    title: Joi.string().required().messages({
      "string.base": `value must be string`,
      "string.empty": `title can't be empty`,
      "any.required": `title must be entered`,
    }),
    description: Joi.string().allow("").allow(null),
    isComplete: Joi.boolean(),
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

  const { id } = req.params;

  //check if we have id as param
  if (!id) {
    //there is no param return error
    return res.status(400).send({
      message: "id of task must be sent",
    });
  }

  const task = new Task();

  try {
    //check result task
    const editTaskResualt = await task.editSingleTask(
      id,
      value.title,
      value.description,
      value.isComplete
    );

    //check if affectedRows row be 1
    if (editTaskResualt.affectedRows === 1) {
      //return response as removed successfully
      return res.status(200).send({
        message: "task edited successfully",
      });
    } else {
      //there wasn't any row with this id
      return res.status(400).send({
        message: "there wasn't any task with this id",
      });
    }
  } catch (error) {
    //there was error while editing task of user
    return res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
}

module.exports = {
  createNewTask,
  GetAllTaskOfUser,
  RemoveSingleTask,
  EditSingleTask,
};
