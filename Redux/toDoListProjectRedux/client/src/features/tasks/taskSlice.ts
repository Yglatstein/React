import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getUserTasks } from "./tasksAPI"

export interface tasks {
  value: any;
  status: 'idle' | 'loading' | 'failed'
}

const initialState:tasks = {
  value: [],
  status: "idle"
}

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload)
      console.log("in addTask, state is: ", state.value)
    } 
  },
  extraReducers: (builder) => {
      builder
      .addCase(getUserTasks.pending, (state) => {
          state.status = 'loading'
      }) 
      .addCase(getUserTasks.fulfilled, (state, action) => {
          state.status = 'idle';
          state.value = action.payload
      }) 
      .addCase(getUserTasks.rejected, (state) => {
      }) 
  }
})

export const {addTask} = tasksSlice.actions;

export const tasksSelector = (state: RootState) => state.tasks.value

export default tasksSlice.reducer