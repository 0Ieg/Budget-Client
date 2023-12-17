import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Styled = styled.button`
border-radius: var(--borrad-small);
padding: 10px;
cursor: pointer;
background-color: var(--color-green);
font-size: 18px;
color: var(--color-background-dark);
transition: all 0.1s ease ;
border: 0;
&:hover{
  box-shadow: 0 0 4px var(--color-gray-light);
  color: var(--color-red);
}
`
export const ButtonForForm:FC<{children:ReactNode}> = (props)=>{
  const {children} = props
  return(
    <Styled>
      {children}
    </Styled>
  )
}

