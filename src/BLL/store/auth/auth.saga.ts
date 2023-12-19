import { createAction } from "@reduxjs/toolkit";
import { call, takeEvery, put } from "redux-saga/effects";
import { SignupAPI, LoginAPI, ProfileAPI } from "../../../API/auth.api";
import { LOGIN } from "./auth.slice";

export const SignupAsyncAC = createAction<{email:string, password:string}>("SYGNUP_ASYNC")
export const LoginAsyncAC = createAction<{email:string, password:string}>("LOGIN_ASYNC")
export const ProfileAsyncAC = createAction("PROFILE_ASYNC")

export function* AuthWatcher():Generator{
  yield takeEvery("SYGNUP_ASYNC", SignupWorker)
  yield takeEvery("LOGIN_ASYNC", LoginWorker)
  yield takeEvery("PROFILE_ASYNC", ProfileWorker)
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

function* ProfileWorker():Generator{
  const id = yield call(ProfileAPI)
  if(id){
    yield put(LOGIN(id))
  }
}

