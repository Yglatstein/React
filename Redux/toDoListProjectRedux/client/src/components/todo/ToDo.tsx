import React from 'react'
import { useAppSelector , useAppDispatch} from '../../app/hooks'
import { userSelector } from '../../features/user/userSlice'
import { tasksSelector } from '../../features/tasks/taskSlice'
import "./todo.scss"
import { useEffect } from 'react'
import { deleteUserTask, getUserTasks } from '../../features/tasks/tasksAPI'
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios'


const ToDo = () => {

  useEffect(() => {
    dispatch(getUserTasks());
  }, []);

  const user = useAppSelector(userSelector)
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(tasksSelector); 
  console.log("tasks: ", tasks)

  //@ts-ignore
  async function handleDeleteTask(event){
    event.preventDefault() 
    const taskId = event.target.elements[0].children[0].id
    try {
      console.log("in del client")
      const { data } = await axios.patch(`/api/tasks/${taskId}`);
      console.log(data);
    } catch (error) {
      console.error(error)
    }
    dispatch(getUserTasks())
  }

  const rows = [];
  for (let i = 0; i < tasks.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    let taskId = tasks[i]._id
    rows.push(<li>{tasks[i].text}<span><form onSubmit={handleDeleteTask}><button><i id = {taskId}><AiFillDelete/></i></button></form></span></li>);
  }

  if (user) {
    return (
    <div>
      {rows}
    </div>
  )} else {
    return (
      <div>no tasks found</div>
    )
  }
}

export default ToDo