import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false
}
const slice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    LOGIN:(state)=>{
      state.isAuth = true
    },
    LOGOUT:(state)=>{
      state.isAuth = false
    }
  }
})

export const AuthReducer = slice.reducer
export const {LOGIN, LOGOUT} = slice.actions