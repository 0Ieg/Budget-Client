import { FC, useDebugValue, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ButtonForForm } from '../../../common/button-for-form';
import { useDispatch, useSelector } from 'react-redux';
import { createTransactionAsyncAC } from '../../../../BLL/store/transactions/transactions.saga';
import { ModalWindow } from '../../categories/new';
import { StateType } from '../../../../BLL/store/store';
import { nodeModuleNameResolver } from 'typescript';

const Styled = styled.article`
grid-area: Form;
.form{
  display: flex;
  flex-direction: column;
  gap: var(--margin-middle);
  .input__wrapper{
    display: flex;
    flex-direction: column;
    gap: var(--margin-small);
  }
  .input_title, .input_amount{
    background-color: var(--color-background-light);
    border: 0;
    font-size: 20px;
    color: var(--color-gray-light);
    padding: var(--margin-small);
    border-radius: var(--borrad-small);
    &:focus{
      outline: 0;
    }
  }
  .select{
    background-color: var(--color-background-light);
    padding: var(--margin-small);
    border-radius: var(--borrad-small);
    color: var(--color-gray-light);
    border: 0;
    outline: none;
  }
  .new_category{
    cursor: pointer;
    transition: all 0.1s ease;
    &:hover{
      color: var(--color-red);
    }
  }
  .radios{
    display: flex;
    gap: var(--margin-middle);
    label{
      display: flex;
      gap: var(--margin-small);
      cursor: pointer;
    }
    input{
      width: 16px;
    }
  }
}
`
export const TransactionsForm:FC = ()=>{
  const dispatch = useDispatch()
  const categories = useSelector((state:StateType)=>state.categories)
  const {handleSubmit, reset, formState:{isSubmitSuccessful}, register} = useForm({mode:'onTouched'})
  const validParams = {
    title: {required:true},
    amount: {required:true},
  }
  const formHandler = (data:any)=>{
    dispatch(createTransactionAsyncAC({...data, 'amount':+data.amount}))
    console.log({...data, 'amount':+data.amount})
  }
  
  const CategoriesOptions = categories.map((category)=><option className='option' value={category.id} key={category.id}>{category.title}</option>)
  const [categoryCreating, setCategoryCreating] = useState(false)
  useEffect(()=>{
    reset({
      'title':null,
      'amount':null,
      'type': null,
      'categoryId': null
    })
  },[isSubmitSuccessful])
  return (
    <Styled>
      <form className='form' onSubmit={handleSubmit(formHandler)}>
        <div className='input__wrapper'>
          <label htmlFor="tr_f_title">Title</label>
          <input className='input_title' type="text" {...register('title', validParams.title)} id='tr_f_title'/>
        </div>
        <div className='input__wrapper'>
          <label htmlFor="tr_f_amount">Amount</label>
          <input className='input_amount' type="number" {...register('amount', validParams.amount)} id='tr_f_amount'/>
        </div>
        <div className='input__wrapper'>
          <label htmlFor="tr_f_category">Category</label>
          <select className='select' {...register('categoryId')} id="tr_f_category">
            {CategoriesOptions}
          </select>
        </div>
        <div className="new_category" onClick={()=>{setCategoryCreating(true)}}>+ New Categories</div>
        <div className="radios">
          <label><input type="radio" {...register('type')} value={'income'} id='tr_f_type'/>Income</label>
          <label><input type="radio" {...register('type')} value={'expense'} id='tr_f_type'/>Expense</label>
        </div>
        <ButtonForForm disabled={false}>Submit</ButtonForForm>
      </form>
      {categoryCreating && <ModalWindow callback={setCategoryCreating} type='Create' id='' value=''/>}
    </Styled>
  )
}

