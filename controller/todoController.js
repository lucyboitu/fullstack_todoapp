//create new todo
//get all todos
//get one
//update
//delete

const todoModel = require("../model/todoModel");
const userModel = require("../model/userModel");

//create todo
const newTodo = async (req, res) => {
  try {
    const getUser = await userModel.findById(req.params.userId);

    const { nameOfTask, detailsOfTask } = req.body;

    const todo = await todoModel.create({
      nameOfTask,
      detailsOfTask,
    });

    getUser.todos.push(todo?._id);
    getUser.save();

    return res.status(201).json({
      message: "todo created",
      data: todo,
    });
  } catch (error) {
    return res.status(400).json({
      message: "unable to create new todo",
      error,
    });
  }
};

//update todo
const updated_todo = async (request, response) => {
  try {
    const update = await todoModel.findByIdAndUpdate(
      request.params.todoId,
      { completed: true },
      { new: true }
    );

    return res.status(200).json({
      message: "task completed",
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to update todo",
      error,
    });
  }
};

//delete todo
const delete_Todo = async (req, res) => {
  try {
    const remove = await todoModel.findByIdAndDelete(req.params.todoId);
    return res.status(200).json({
      message: "todo deleted",
      data: remove,
    });
  } catch (error) {
    return res.status(400).json({
      message: "unable to delete todo",
      error,
    });
  }
};
//getAllTodos
const getAllTodos = async (req, res) => {
  try {
    const todo = await todoModel.find();

    return res.status(201).json({
      message: "todos created",
      data: todo,
    });
  } catch (error) {
    return res.status(400).json({
      message: "unable to get todos",
      error,
    });
  }
};

module.exports = {
  newTodo,
  updated_todo,
  delete_Todo,
  getAllTodos,
};
