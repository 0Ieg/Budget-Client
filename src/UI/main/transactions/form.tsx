import { FC, useDebugValue, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ButtonForForm } from '../../common/button-for-form';

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
  const {handleSubmit, reset, formState:{isSubmitSuccessful}, register} = useForm({mode:'onTouched'})
  const validParams = {
    title: {required:true},
    amount: {required:true},
  }
  const formHandler = (data:FieldValues)=>{
    console.log(data)
  }
  useEffect(()=>{
    reset({
      'title':null,
      'amount':null,
      'type':'Income'
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
        <div className="radios">
          <label><input type="radio" {...register('type')} value={'Income'} id='tr_f_type'/>Income</label>
          <label><input type="radio" {...register('type')} value={'Expense'} id='tr_f_type'/>Expense</label>
        </div>
        <ButtonForForm>Submit</ButtonForForm>
      </form>
    </Styled>
  )
}

