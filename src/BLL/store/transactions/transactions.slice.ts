import { createSlice } from "@reduxjs/toolkit";
import { TransactionType } from "../../../API/dto/transaction.dto";

const initialState = {
  transactions: [] as TransactionType[],
  count: 0,
  total:{income:0, expense:0}
}


const slice = createSlice({
  name: 'transactions',
  initialState,
  reducers:{
    readTransactionsAC: (state, action)=>{
      return state = action.payload
    },
    clearTransactionsAC: (state)=>{
      return state = {transactions:[], count:0, total:{income:0, expense:0}}
    }
  }
})

export const TransactionsReducer = slice.reducer
export const { readTransactionsAC, clearTransactionsAC} = slice.actions