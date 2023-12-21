import { FC } from "react";
import styled from "styled-components";
import { CategoryType } from "../../../API/dto/category.dto";
import { DeleteSVG, UpdateSVG } from "../../../BLL/icons/iconst";
import { useDispatch } from "react-redux";
import { deleteCategoryAsyncAC, updateCategoryAsyncAC } from "../../../BLL/store/categories/categories.saga";

const Styled = styled.li`
padding: var(--margin-middle);
background-color: var(--color-blue);
color: var(--color-gray-light);
border-radius: var(--borrad-small);
font-size: 18px;
cursor: pointer;
transition: all 0.05s ease;
display: grid;
grid-template-columns: 1fr 20px 20px;
grid-gap: var(--margin-middle);
&:hover{
  box-shadow: 0 0 5px var(--color-gray-light);
}
svg{
  height: 100%;
  width: 100%;
  &:hover{
    color: var(--color-background-light);
  }
}
`
export const Category:FC<{data:CategoryType}> = ({data})=>{
  const dispatch = useDispatch()
  const deleteHandler = ()=>{dispatch(deleteCategoryAsyncAC(data.id))}
  const updateHandler = ()=>{dispatch(updateCategoryAsyncAC({id:data.id, title:'new category title'}))}
  return(
    <Styled>
      <div className="category__title">{data.title}</div>
      <div className="category__update" onClick={updateHandler}><UpdateSVG/></div>
      <div className="category__delete" onClick={deleteHandler}><DeleteSVG/></div>
    </Styled>
  )
} 