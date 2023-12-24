import { FC, useEffect } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { ButtonForForm } from "../../common/button-for-form"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { createCategoryAsyncAC, updateCategoryAsyncAC } from "../../../BLL/store/categories/categories.saga"

const WindowStyled = styled.div`
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: #a3be8947;
display: flex;
align-items: center;
justify-content: center;
.form{
  display: flex;
  flex-direction: column;
  gap: var(--margin-middle);
  padding: var(--margin-middle);
  background-color: var(--color-background-dark);
  border-radius: var(--borrad-small);
  .input{
    padding: var(--margin-small);
    background-color: var(--color-background-light);
    color: var(--color-gray-light);
    border-radius: var(--borrad-small);
    font-size: 18px;
    border: 0;
    outline: none;
  }
  .cancel{
    padding: var(--margin-small);
    background-color: var(--color-red);
    border-radius: var(--borrad-small);
    border: 0;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.1s ease ;
    &:hover{
      box-shadow: 0 0 4px var(--color-red);
      color: var(--color-orange);
    }
  }
}
.modal_input{
  padding: var(--margin-middle);
  border-radius: var(--borrad-small);
  background-color: var(--color-green);
}
`
type propsType = {callback:(arg:boolean)=>any, type:'Create'|'Update', id:string, value:string}
export const ModalWindow:FC<propsType> = ({callback, type, id, value})=>{
  const dispatch = useDispatch()
  const {handleSubmit, register } = useForm({mode:'onTouched', defaultValues:{title:value}})
  const submitHandler = (data:FieldValues)=>{
    type==='Create'? dispatch(createCategoryAsyncAC(data.title)) : dispatch(updateCategoryAsyncAC({id, title:data.title}))
    callback(false)
  }
  const cancelHandler = ()=>{
    callback(false)
  }
  return(
    <WindowStyled>
      <form className='form' onSubmit={handleSubmit(submitHandler)}>
        <input className='input' type="text" {...register('title',{required:true})} placeholder='Category title' />
        <ButtonForForm disabled={false}>{type}</ButtonForForm>
        <button className="cancel" type='reset' onClick={cancelHandler}>Cancel</button>
      </form>
    </WindowStyled>
  )
}