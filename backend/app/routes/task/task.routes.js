const express = require("express");

//controller
const taskController = require("./../../controllers/task/task.controller");

//router
const taskRouter = express.Router();

//@routes

/**
 * router => /
 * ! method post => create new task
 * ! method get => get single task
 * ! method put => edit task
 */

// => /task
taskRouter.post("/", taskController.createNewTask);
taskRouter.get("/", taskController.GetAllTaskOfUser);

taskRouter.delete("/:id", taskController.RemoveSingleTask);
taskRouter.put("/:id", taskController.EditSingleTask);

module.exports = taskRouter;
