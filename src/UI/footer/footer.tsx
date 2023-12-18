import { FC } from 'react';
import styled from 'styled-components';

const Styled = styled.footer`
background-color: var(--color-background-dark);
color: var(--color-gray-light);
`
export const Footer:FC = ()=>{
  return (
    <Styled className='container'>
      Footer
    </Styled>
  )
}

