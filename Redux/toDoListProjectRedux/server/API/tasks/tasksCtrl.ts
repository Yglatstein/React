
import TasksModel from "./tasksModel";
import jwt from "jwt-simple";
import bcrypt from 'bcrypt';
import { test } from "node:test";
const saltRounds = 10;

export async function getUserTasks(req, res){
    try{
        const secret = process.env.SECRET;
        const {userID} = req.cookies
        const jwtUserId = jwt.decode(userID, secret);
        const { userId } = jwtUserId;
        console.log("user id: ", userId)
        const tasksDB = await TasksModel.find({userID:userId, taskStatus: {$ne: "Done"}})
        console.log("recived from db: ", tasksDB)
        res.json(tasksDB);
    }catch (error){
        res.status(500).send({error: error.message})
    }
}

export async function postAddNewTask(req,res){
    try{
        const { text } = req.body;
        if (!text ) throw new Error("some parameters are missing")
        
        const secret = process.env.SECRET;
        const {userID} = req.cookies
        const jwtUserId = jwt.decode(userID, secret);
        console.log("userId decoded: ", jwtUserId.userId)

        const taskDB = new TasksModel({ userID: jwtUserId.userId , text: text, taskStatus: 'tbd' });
        console.log(" text is: ", text)
        await taskDB.save();

        res.send({success: true, task: taskDB})

    }catch(error){
        res.status(500).send({error: error.message})
    }
}


export async function deleteTaskByID(req, res) {
    try {
        console.log("here")
        const secret = process.env.SECRET;
        const {userID} = req.cookies
        const jwtUserId = jwt.decode(userID, secret);
        console.log("userId decoded: ", jwtUserId.userId)

        const taskId = req.params.id
        const taskDB = await TasksModel.findById(req.params.id);
        
        if (taskDB.userID != jwtUserId.userId ) throw new Error("cannot delete this post");
        const taskDBDel = await TasksModel.findByIdAndDelete(req.params.id);
        
        res.send({success: true, taskDBDel });
        } catch (error) {
        res.status(500).send({ error: error.message });
        }
  }

  export async function deleteTasks(req, res) {
    try {
        console.log("here")
        const secret = process.env.SECRET;
        const {userID} = req.cookies
        const jwtUserId = jwt.decode(userID, secret);
        console.log("userId decoded: ", jwtUserId.userId)

        const taskDBDel = await TasksModel.deleteMany({userID: jwtUserId.userId })
        
        res.send({success: true, taskDBDel });
        } catch (error) {
        res.status(500).send({ error: error.message });
        }
  }


  export async function updateTaskStatusByID(req, res){
    try{
        console.log("here")
        let {id} = req.params

        console.log("task id is: ", id)
        const taskDB = await TasksModel.findOneAndUpdate({_id:id} , {taskStatus: 'Done'})
        res.send(taskDB);
        

    }catch (error){
        res.status(500).send({error: error.message})
    }
}