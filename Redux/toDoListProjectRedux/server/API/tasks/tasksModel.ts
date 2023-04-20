import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    userID: {
        type: String, 
        required: true, 
    },
    text: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: false
    },
    taskStatus: {
        type: String
    }
});

const TasksModel = mongoose.model('tasks', todoSchema);
export default TasksModel

