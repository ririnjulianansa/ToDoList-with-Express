const express = require("express");
const { getTodoById, getAllTodo, addNewTodo, deleteTodo, updateTodo } = require("../controllers/todo-contoller");
const verifyToken = require("../middleware/auth");
const route = express.Router()

route.get("/", getAllTodo)
route.get("/:id", verifyToken, getTodoById)
route.post("/", addNewTodo)
route.delete("/:id", deleteTodo)
route.put("/:id", updateTodo)

module.exports = route