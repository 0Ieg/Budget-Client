import { createAction } from "@reduxjs/toolkit";
import { takeEvery, put, call } from "redux-saga/effects";

export const createTransactionAsyncAC = createAction("CREATE_TRANSACTION_ASYNC")
export const readTransactionsAsyncAC = createAction("READ_TRANSACTIONS_ASYNC")
export const updateTransactionAsyncAC = createAction("UPDATE_TRANSACTION_ASYNC")
export const deleteTransactionAsyncAC = createAction("DELETE_TRANSACTION_ASYNC")

export function* TransactionsWatcher():Generator{
  yield takeEvery("CREATE_TRANSACTION_ASYNC", CreateWorker)
  yield takeEvery("READ_TRANSACTIONS_ASYNC", ReadWorker)
  yield takeEvery("UPDATE_TRANSACTION_ASYNC", UpdateWorker)
  yield takeEvery("DELETE_TRANSACTION_ASYNC", DeleteWorker)
}

function* CreateWorker():Generator{

}
function* ReadWorker():Generator{
  
}
function* UpdateWorker():Generator{
  
}
function* DeleteWorker():Generator{
  
}