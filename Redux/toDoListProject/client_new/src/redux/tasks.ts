import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        count: 0,
        tasks: []
    },
    reducers:{
        add: (state, action) => {
            const task = {
                id: Math.random() * 100,
                text: action.payload,
              };
              state.tasks.push(task);
              state.count += 1;
        },
        remove: (state, action) => {
            state.tasks = state.tasks.filter((todo) => todo.id !== action.payload);
            state.count -= 1;
          },
    }
})

export const {add, remove} = tasksSlice.actions
export default tasksSlice.reducer