import { FC } from 'react';
import styled from 'styled-components';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';

const Styled = styled.div`
min-height: 100dvh;
display: flex;
flex-direction: column;
`
export const App:FC = ()=>{
  return (
    <Router>
      <Styled>
        <Header />
        <Main />
        <Footer />
      </Styled>
    </Router>
  )
}

