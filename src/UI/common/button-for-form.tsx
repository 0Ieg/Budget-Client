import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Styled = styled.button`
border-radius: var(--borrad-small);
padding: var(--margin-small);
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
&:disabled{
  opacity: 0.7;
}
`
export const ButtonForForm:FC<{children:ReactNode, disabled:boolean}> = (props)=>{
  const {children, disabled} = props
  return(
    <Styled disabled={disabled}>
      {children}
    </Styled>
  )
}

