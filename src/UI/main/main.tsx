import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './home/home';

import { Transactions } from './transactions/transactions';
import { Categories } from './categories/categories';
import { Error } from './error/error';
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
    <Styled>
      <Routes>
        <Route path='' element={isAuth?<Home/>:<Guard/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='signin' element={<Signin/>}/>
        <Route path='transactions' element={<Transactions/>}/>
        <Route path='categories' element={<Categories/>}/>
        <Route path='error' element={<Error/>}/>
      </Routes>
    </Styled>
  )
}

