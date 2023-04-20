import exp from 'constants';
import express from 'express';
import { deleteTaskByID, deleteTasks, getUserTasks, postAddNewTask, updateTaskStatusByID } from './tasksCtrl';

const router = express.Router();

router
 .get("", getUserTasks)
 .post("/add", postAddNewTask)
 .patch("/:id", updateTaskStatusByID)
 .delete("", deleteTasks)


export default router;