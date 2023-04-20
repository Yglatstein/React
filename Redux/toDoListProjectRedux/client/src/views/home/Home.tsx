import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUserByCookie } from "../../features/user/userAPI";
import { userSelector } from "../../features/user/userSlice";
import Navbar from "../../components/navbar/Navbar";
import { AiFillFileAdd } from "react-icons/ai";
import ToDo from "../../components/todo/ToDo";
import { addUserTasks, getUserTasks } from "../../features/tasks/tasksAPI";
import "./home.scss"
import ts from "typescript";
import axios from "axios";
import { addTask } from "../../features/tasks/taskSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector); 
  console.log("user: ", user)

  useEffect(() => {
    dispatch(getUserByCookie());
  }, []);

  //@ts-ignore
  async function handleAddTask(event){
    event.preventDefault()  
    const text = event.target.elements.newTaskText.value;
    console.log("text: ", text)

    const {data} = await axios.post("/api/tasks/add", {text})
    if (data.success) {
      dispatch(addTask)
      dispatch(getUserTasks())
    }
  }
  //@ts-ignore
  async function handleClearAll(event){
    event.preventDefault()  
    const {data} = await axios.delete("/api/tasks")
    if (data.success) {
      dispatch(getUserTasks())
    }
  }


  if (!user) {
    return (
      <div>
        <p>hello</p>
      </div>
    );
  } else {
    return (
      <div className="home-div">
        <Navbar/>
        <div className="wrapper">
        <form onSubmit={handleAddTask}>
        <div className="inputField">
            <input id="newTaskText" type="text" placeholder="Add your new task"/>
            <button><i><AiFillFileAdd/></i></button>
          </div>
        </form>
          

          <ul className="todoList">
            <ToDo/>
          </ul>

          <div className="footer">
            <span>Good Luck! </span>
            <button onClick={handleClearAll}>Clear All</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
