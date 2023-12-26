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
    },
    addTransactionAC: (state, action:{type:string, payload:any})=>{
      console.log(action)
      state.transactions.push(action.payload)
      state.count+=1
      action.payload.type==='income'? state.total.income+=action.payload.amount : state.total.expense+=action.payload.amount
    },
    deleteTransactionAC: (state, action)=>{
      action.payload.type==='income'? state.total.income-=action.payload.amount : state.total.expense-=action.payload.amount
      state.transactions.filter(transaction=>transaction.id!==action.payload.id)
      state.count-=1
    }
  }
})

export const TransactionsReducer = slice.reducer
export const { readTransactionsAC, clearTransactionsAC, addTransactionAC, deleteTransactionAC} = slice.actions