import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonForForm } from '../../common/button-for-form';
import { FieldValues, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { SignupAsyncAC } from '../../../BLL/store/auth/auth.saga';

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
export const Signup: FC = () => {
  const dispatch = useDispatch()
  const {register, handleSubmit, reset, formState:{isSubmitSuccessful, errors, isValid}} = useForm({mode:'onTouched'})
  const formHandler = (data:any)=>{
    dispatch(SignupAsyncAC(data))
  }
  useEffect(()=>{
    reset({
      'email':null,
      'password':null
    })
  },[isSubmitSuccessful])
  return (
    <Styled>
      <form className='form' onSubmit={handleSubmit(formHandler)}>
        <h2 className="title">Registration</h2>
        <input className='input' type="email" {...register('email')} placeholder='Email'/>
        <input className='input' type="text" {...register('password')} placeholder='Password'/>
        <ButtonForForm>Submit</ButtonForForm>
        <Link className='link' to={'/signin'}>Already have an account?</Link>
      </form>
    </Styled>
  )
}

