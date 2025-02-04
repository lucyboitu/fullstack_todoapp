const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        default : ""
    },
    email : {
        type : String, 
        unique : true
    },
    todos : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "todos"
        }
    ]
  
})

const userModel = mongoose.model("users" , userSchema)

module.exports = userModel