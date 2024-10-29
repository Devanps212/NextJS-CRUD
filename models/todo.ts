import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const model = mongoose.models.todo || mongoose.model('todo', todoSchema)

export default model