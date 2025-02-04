const userModel = require("../model/userModel");


const newUser = async (req, res) => {
    try {
      const { name , email } = req.body;
  
      const user = await userModel.create({
       name,email
      });
  
      return res.status(201).json({
        message: "user created",
        data: user,
      });
    } catch (error) {
      return res.status(400).json({
        message: "unable to create new user",
        error,
      });
    }
  };
const getAllUsers = async (req, res) => {
    try {
   
  
      const user = await userModel.find()
  
      return res.status(201).json({
        message: "user created",
        data: user,
      });
    } catch (error) {
      return res.status(400).json({
        message: "unable to get users",
        error,
      });
    }
  };
const getOneUser = async (req, res) => {
    try {
    
  
      const user = await userModel.findById(req.params.id).populate({
        path : "todos"
      })
  
      return res.status(201).json({
        message: "user created",
        data: user,
      });
    } catch (error) {
      return res.status(400).json({
        message: "unable to get one user",
        error,
      });
    }
  };
  

  module.exports = {
    newUser,
    getAllUsers,
    getOneUser
  }