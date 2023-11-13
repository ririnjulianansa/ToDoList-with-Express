const express = require('express');
const route = express.Router()

const authRoute = require('./auth-route');
const userRoute = require('./user-route');
const todoRoute = require('./todo-route');

route.get("/", (req, res) => {
  res.json("selamat datang di express sequelize migration")
})

route.use("/users", userRoute)
route.use("/todos", todoRoute)
route.use("/auth", authRoute)

module.exports = route