import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getUserByCookie } from "./userAPI";

export interface userState {
  value: any;
  status: 'idle' | 'loading' | 'failed'
}

const initialState:userState = {
  value: "",
  status: "idle"
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
      .addCase(getUserByCookie.pending, (state) => {
          state.status = 'loading'
      }) 
      .addCase(getUserByCookie.fulfilled, (state, action) => {
          state.status = 'idle';
          state.value = action.payload
      }) 
      .addCase(getUserByCookie.rejected, (state) => {
          state.status = 'failed'
      }) 
  }
})

export const userSelector = (state: RootState) => state.user.value

export default userSlice.reducer