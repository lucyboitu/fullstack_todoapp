const express = require("express")
const {getAllUsers ,getOneUser , newUser } = require("../controller/userController")

const userRoutes = express.Router()
userRoutes.post("/new-user" , newUser)
userRoutes.get("/get-all" , getAllUsers)
userRoutes.get("/get-one/:id" , getOneUser)



module.exports = userRoutes