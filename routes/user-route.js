const express = require("express");
const { getAllUser, getUserById } = require("../controllers/user-controller");
const route = express.Router()

route.get("/", getAllUser)
route.get("/:id", getUserById)
route.get("/")

module.exports = route