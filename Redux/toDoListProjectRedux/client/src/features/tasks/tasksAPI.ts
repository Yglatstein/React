import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserTasks = createAsyncThunk(
    '/api/tasks/getUserTasks',
    async () => {
        try {
            const {data} = await axios.get("/api/tasks/");
            if (!data) throw new Error("could not recieve user data");
            return data
        } catch (error) {
            console.error(error)
        }
    }
  )


  export const addUserTasks = createAsyncThunk(
    '/api/tasks/addUserTasks',
    async (text: string) => {
        try {
            console.log("in tasks api text is ", text)
      //@ts-ignore
            const { data } = await axios.post("/api/tasks/add", {text});
            console.log("recived: ", data);
            return data
        } catch (error) {
            console.error(error)
        }
    }
  )

  export const deleteUserTask = createAsyncThunk(
    'api/tasks/deleteUserTasks',
    async(taskid: string) => {
        try {
            console.log("in del client")
            const { data } = await axios.patch(`/api/tasks/${taskid}`);
            console.log(data);
          } catch (error) {
            console.error(error)
          }
    }
  )