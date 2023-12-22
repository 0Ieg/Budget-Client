import { readTransactionsAPI, deleteTransactionAPI } from './../../../API/transactions.api';
import { createAction } from "@reduxjs/toolkit";
import { takeEvery, put, call } from "redux-saga/effects";
import { readTransactionsAC } from './transactions.slice';

export const createTransactionAsyncAC = createAction("CREATE_TRANSACTION_ASYNC")
export const readTransactionsAsyncAC = createAction("READ_TRANSACTIONS_ASYNC")
export const updateTransactionAsyncAC = createAction("UPDATE_TRANSACTION_ASYNC")
export const deleteTransactionAsyncAC = createAction<string>("DELETE_TRANSACTION_ASYNC")

export function* TransactionsWatcher():Generator{
  yield takeEvery("CREATE_TRANSACTION_ASYNC", CreateWorker)
  yield takeEvery("READ_TRANSACTIONS_ASYNC", ReadWorker)
  yield takeEvery("UPDATE_TRANSACTION_ASYNC", UpdateWorker)
  yield takeEvery("DELETE_TRANSACTION_ASYNC", DeleteWorker)
}

function* CreateWorker():Generator{

}
function* ReadWorker():Generator{
  const transactions = yield call(readTransactionsAPI)
  if(transactions) yield put(readTransactionsAC(transactions))
}
function* UpdateWorker():Generator{
  
}
function* DeleteWorker(action:ReturnType<typeof deleteTransactionAsyncAC>):Generator{
  const transactions = yield call(deleteTransactionAPI, action.payload)
  // if(transactions) yield put(readTransactionsAC(transactions)) 
}