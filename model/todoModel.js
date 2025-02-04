const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    nameOfTask : {
        type : String,
        default : ""
    },
    detailsOfTask : {
        type : String, 
        default : "Task"
    },
    completed : {
        type : Boolean,
        default : false
    }
})

const todoModel = mongoose.model("todos" , todoSchema)

module.exports = todoModel