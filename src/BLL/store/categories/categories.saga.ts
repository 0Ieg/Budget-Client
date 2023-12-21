import { createAction } from "@reduxjs/toolkit";
import { takeEvery, put, call } from "redux-saga/effects";
import { deleteCategoryAPI, readCategoriesAPI, updateCategoryAPI } from "../../../API/categories.api";
import { deleteCategoryAC, readCategoriesAC, updateCategoryAC } from "./categories.slice";

export const createCategoryAsyncAC = createAction("CREATE_CATEGORY_ASYNC")
export const readCategoriesAsyncAC = createAction("READ_CATEGORIES_ASYNC")
export const updateCategoryAsyncAC = createAction<{id:string, title:string}>("UPDATE_CATEGORY_ASYNC")
export const deleteCategoryAsyncAC = createAction<string>("DELETE_CATEGORY_ASYNC")

export function* CategoriesWatcher():Generator{
  yield takeEvery("CREATE_CATEGORY_ASYNC", CreateWorker)
  yield takeEvery("READ_CATEGORIES_ASYNC", ReadWorker)
  yield takeEvery("UPDATE_CATEGORY_ASYNC", UpdateWorker)
  yield takeEvery("DELETE_CATEGORY_ASYNC", DeleteWorker)
}

function* CreateWorker():Generator{

}
function* ReadWorker():Generator{
  const categories = yield call(readCategoriesAPI)
  if(categories) yield put(readCategoriesAC(categories))
}
function* UpdateWorker(action:{type:string, payload:{id:string, title:string}}):Generator{
  const category = yield call(updateCategoryAPI, action.payload)
  if(category) yield put(updateCategoryAC(category))
}
function* DeleteWorker(action:{type:string, payload:string}):Generator{
  const category = yield call(deleteCategoryAPI, action.payload)
  if(category) yield put(deleteCategoryAC(category))
}