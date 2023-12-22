import { createSlice } from "@reduxjs/toolkit";
import { TransactionType } from "../../../API/dto/transaction.dto";

const initialState = 
[] as TransactionType[]

const slice = createSlice({
  name: 'transactions',
  initialState,
  reducers:{
    readTransactionsAC: (state, action)=>{
      console.log(action.payload)
      return state.concat(action.payload)
    },
    clearTransactionsAC: (state)=>{
      return state = []
    }
  }
})

export const TransactionsReducer = slice.reducer
export const { readTransactionsAC, clearTransactionsAC} = slice.actions