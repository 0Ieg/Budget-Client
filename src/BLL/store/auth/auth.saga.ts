import { createAction } from "@reduxjs/toolkit";
import { call, takeEvery, put } from "redux-saga/effects";
import { LoginAPI } from "../../../API/auth.api";
import { LOGIN } from "./auth.slice";


export const LoginAsyncAC = createAction<{email:string, password:string}>("LOGIN_ASYNC")

export function* AuthWatcher():Generator{
  yield takeEvery("LOGIN_ASYNC", LoginWorker)
}

function* LoginWorker(action:ReturnType<typeof LoginAsyncAC>):Generator{
  const access_token = yield call(LoginAPI, action.payload)
  if(access_token){
    yield put(LOGIN())
  }
}