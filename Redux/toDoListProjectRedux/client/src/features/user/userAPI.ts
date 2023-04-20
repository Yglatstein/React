import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserByCookie = createAsyncThunk(
  '/api/user/getUserByCookie',
  async () => {
      try {
          const {data} = await axios.get("/api/users/by-cookie");
          if (!data) throw new Error("could not recieve tasks");
          return data
      } catch (error) {
          console.error(error)
      }
  }
)

export const getUserLogout = createAsyncThunk(
    '/api/user/getUserLogout',
    async () => {
        try{
            //@ts-ignore
            const { data } = await axios.get("/api/users/logout");
            window.location.href = "/Login";
          } catch (error){
            console.log(error)
          }
    }
  )
