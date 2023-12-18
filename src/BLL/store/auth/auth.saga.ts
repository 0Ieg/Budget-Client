import { createAction } from "@reduxjs/toolkit";
import { call, takeEvery, put } from "redux-saga/effects";
import { SignupAPI, LoginAPI } from "../../../API/auth.api";
import { LOGIN } from "./auth.slice";

export const SignupAsyncAC = createAction<{email:string, password:string}>("SYGNUP_ASYNC")
export const LoginAsyncAC = createAction<{email:string, password:string}>("LOGIN_ASYNC")


export function* AuthWatcher():Generator{
  yield takeEvery("SYGNUP_ASYNC", SignupWorker)
  yield takeEvery("LOGIN_ASYNC", LoginWorker)
}

function* SignupWorker(action:ReturnType<typeof SignupAsyncAC>):Generator{
  const id = yield call(SignupAPI, action.payload)
  if(id){
    yield put(LOGIN(id))
  }
}
function* LoginWorker(action:ReturnType<typeof LoginAsyncAC>):Generator{
  const id = yield call(LoginAPI, action.payload)
  if(id){
    yield put(LOGIN(id))
  }
}
