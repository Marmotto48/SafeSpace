const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/todoControllers")
const postAuth = require("../middleware/postAuth");




//Route add new post
router.post("/addtodo", postAuth, TodoController.addTodo);

//get posts
/**
 * @route   GET api/todo
 * @desc    Get All todos
 * @access  Private
 */
router.get("/", postAuth, TodoController.getTodos);
//update posts
router.put("/update/:id", postAuth, TodoController.updateTodo);

//delete post
router.delete("/deletetodo/:id", TodoController.deleteTodo);


module.exports = router;