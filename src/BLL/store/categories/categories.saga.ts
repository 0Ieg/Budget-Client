import { createAction } from "@reduxjs/toolkit";
import { takeEvery, put, call } from "redux-saga/effects";

export const createCategoryAsyncAC = createAction("CREATE_CATEGORY_ASYNC")
export const readCategoriesAsyncAC = createAction("READ_CATEGORIES_ASYNC")
export const updateCategoryAsyncAC = createAction("UPDATE_CATEGORY_ASYNC")
export const deleteCategoryAsyncAC = createAction("DELETE_CATEGORY_ASYNC")

export function* CategoriesWatcher():Generator{
  takeEvery("CREATE_CATEGORY_ASYNC", CreateWorker)
  takeEvery("READ_CATEGORIES_ASYNC", ReadWorker)
  takeEvery("UPDATE_CATEGORY_ASYNC", UpdateWorker)
  takeEvery("DELETE_CATEGORY_ASYNC", DeleteWorker)
}

function* CreateWorker():Generator{

}
function* ReadWorker():Generator{
  
}
function* UpdateWorker():Generator{
  
}
function* DeleteWorker():Generator{
  
}