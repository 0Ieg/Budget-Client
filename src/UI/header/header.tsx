import { FC } from 'react';
import styled from 'styled-components';
import { BitcoinSVG } from '../../BLL/icons/iconst';
import { Link } from 'react-router-dom';


const Styled = styled.header`
height: calc(var(--index)*2);
background-color: var(--color-background-dark);
color: var(--color-gray-light);
display: flex;
justify-content: space-between;
align-items: center;
`
export const Header:FC = ()=>{
  return (
    <Styled className='container'>
      <Link to={''}><BitcoinSVG/></Link>
      <Link to={'signin'}>Log In / Sign In</Link>
    </Styled>
  )
}

