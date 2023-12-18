import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './home/home';

import { Transactions } from './transactions/transactions';
import { Categories } from './categories/categories';
import { Error } from '../error/error';
import { useSelector } from 'react-redux';
import { StateType } from '../../BLL/store/store';
import { Guard } from './guard';
import { Signup } from './auth/signup';
import { Signin } from './auth/signin';

const Styled = styled.main`
background-color: var(--color-background-light);
color: var(--color-gray-light);
flex-grow: 1;
display: grid;
`
export const Main:FC = ()=>{
  const isAuth = useSelector((state:StateType)=>state.auth.isAuth)
  return (
    <Styled className='container'>
      <Routes>
        <Route path='' element={isAuth?<Home/>:<Guard/>}/>
        <Route path='signup' element={isAuth?<Navigate to=''/>:<Signup/>}/>
        <Route path='signin' element={isAuth?<Navigate to=''/>:<Signin/>}/>
        <Route path='categories' element={isAuth?<Categories/>:<Guard/>}/>
        <Route path='transactions' element={isAuth?<Transactions/>:<Guard/>}/>
        <Route path='error' element={<Error/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Styled>
  )
}

