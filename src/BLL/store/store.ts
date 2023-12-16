import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga'
import { AuthReducer } from "./auth/auth.slice"
import { all } from "redux-saga/effects"
import { AuthWatcher } from "./auth/auth.saga"


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer:{
    auth:AuthReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
})

function* RootWatcher():Generator{
  yield all([AuthWatcher()])
}
sagaMiddleware.run(RootWatcher)

export type StateType = ReturnType<typeof store.getState>
