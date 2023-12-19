import { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonForForm } from '../../common/button-for-form';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAsyncAC } from '../../../BLL/store/auth/auth.saga';
import { useForm } from 'react-hook-form';
import { StateType } from '../../../BLL/store/store';

const Styled = styled.div`
display: flex;
justify-content: center;
align-items: center;
.form{
  max-width: 500px;
  padding: var(--margin-big);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  .title{
    font: 700 20px Inter; 
  }
  .input{
    border: 2px solid var(--color-gray-light);
    border-radius: var(--borrad-small);
    background-color: var(--color-background-light);
    padding: 10px;
    font-size: 18px;
    color: var(--color-gray-light);
    transition: box-shadow 0.1s ease;
    &:focus{
      outline: none;
      box-shadow: 0 0 4px var(--color-gray-light);
    }
  }
  .link{
    transition: color 0.1s ease;
    &:hover{
      color: var(--color-pink);
    }
  }
}
`
export const Signin:FC = ()=>{
  const dispatch = useDispatch()
  const isAuth = useSelector((state:StateType)=>state.auth.isAuth)
  const {register, handleSubmit, reset, formState:{isSubmitSuccessful, errors, isValid}} = useForm({mode:'onTouched'})
  const formHandler = (data:any)=>{
    dispatch(LoginAsyncAC(data))
  }
  useEffect(()=>{
    reset({
      'email':null,
      'password':null
    })
  },[isSubmitSuccessful])
  const navig = useNavigate()
  useEffect(()=>{
    isAuth && navig('/')
  },[isAuth])
  return (
    <Styled>
      <form className='form' onSubmit={handleSubmit(formHandler)}>
        <h2 className="title">Login</h2>
        <input className='input' type="email" {...register('email')} placeholder='Email'/>
        <input className='input' type="text" {...register('password')} placeholder='Password'/>
        <ButtonForForm>Submit</ButtonForForm>
        <Link className='link' to={'/signup'}>You don't have an account?</Link>
      </form>
    </Styled>
  )
}

