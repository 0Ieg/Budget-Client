import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  id:'',
}

const slice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    LOGIN:(state, action)=>{
      return state = {isAuth:true, id:action.payload}
    },
    LOGOUT:(state)=>{
      localStorage.removeItem('access_token')
      return state = {isAuth:false, id:''}
    }
  }
})

export const AuthReducer = slice.reducer
export const {LOGIN, LOGOUT} = slice.actions