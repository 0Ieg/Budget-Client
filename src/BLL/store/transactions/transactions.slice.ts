import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
const slice = createSlice({
  name: 'transactions',
  initialState,
  reducers:{

  }
})

export const TransactionsReducer = slice.reducer
export const {} = slice.actions