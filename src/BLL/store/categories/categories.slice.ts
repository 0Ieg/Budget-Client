import { CategoryType } from './../../../API/dto/category.dto';
import { createSlice } from "@reduxjs/toolkit";

const initialState = [] as CategoryType[]
const slice = createSlice({
  name: 'categories',
  initialState,
  reducers:{
    readCategoriesAC:(state, action)=>{
      return state.concat(action.payload)
    },
    deleteCategoryAC:(state, action)=>{
      return state.filter(categoy=>categoy.id!==action.payload.id)
    },
    updateCategoryAC:(state, action)=>{
      return state.map(category=>{
        if(category.id===action.payload.id)return action.payload
        return category
      })
    },
  }
})

export const CategoriesReducer = slice.reducer
export const {readCategoriesAC, deleteCategoryAC, updateCategoryAC} = slice.actions