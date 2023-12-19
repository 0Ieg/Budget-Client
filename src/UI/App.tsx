import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastify.css';
import { useDispatch } from 'react-redux';
import { ProfileAsyncAC } from '../BLL/store/auth/auth.saga';


const Styled = styled.div`
min-height: 100dvh;
display: flex;
flex-direction: column;
`
export const App:FC = ()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    const token = localStorage.getItem('access_token')
    if(token)dispatch(ProfileAsyncAC())
  },[])
  return (
    <Router>
      <Styled>
        <Header />
        <Main />
        <Footer />
      </Styled>
      <ToastContainer position="bottom-left" transition={Slide} autoClose={2000} theme="dark"/>
    </Router>
  )
}

