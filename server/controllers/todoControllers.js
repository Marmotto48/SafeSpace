const Todo = require("../models/todoList");

module.exports = {
  //get all todos list
  getTodos: async (req, res) => {
    try {
      const todos = await Todo.find({ owner: req.userID }).sort({
        createdAt: 1,
      });
      res.json(todos);
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "can not get posts", error });
    }
  },
  //add a new todo
  addTodo: async (req, res) => {
    // try {
    //   const newTodo = await Todo.create({
    //     todo: req.body.todo,
    //     isDone: req.body.isDone,
    //     owner: req.userID,
    //   });
    //   res.json(newTodo);
    // } catch (error) {
    //   console.log(error);
    try {
      const { todo, isDone } = req.body;
      const newTodo = await Todo.create({
        todo,
        isDone,
        owner: req.userID,
      });
      res.json(newTodo);
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "can not add todo list.", error });
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
      res.json({ msg: "Todo deleted." });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Can not delete todo.", error });
    }
  },
  updateTodo: async (req, res) => {
    try {
      const { todo } = req.body;
      const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { todo });
      res.json({ msg: "Todo is Done.", updatedTodo });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "can not change state.", error });
    }
  },
};
