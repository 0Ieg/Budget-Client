import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga'
import { AuthReducer } from "./auth/auth.slice"
import { all } from "redux-saga/effects"
import { AuthWatcher } from "./auth/auth.saga"
import { CategoriesReducer } from "./categories/categories.slice"
import { TransactionsReducer } from "./transactions/transactions.slice"
import { CategoriesWatcher } from "./categories/categories.saga"
import { TransactionsWatcher } from "./transactions/transactions.saga"


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer:{
    auth:AuthReducer,
    categories:CategoriesReducer,
    transactions:TransactionsReducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
})

function* RootWatcher():Generator{
  yield all([AuthWatcher(), CategoriesWatcher(), TransactionsWatcher()])
}
sagaMiddleware.run(RootWatcher)

export type StateType = ReturnType<typeof store.getState>
