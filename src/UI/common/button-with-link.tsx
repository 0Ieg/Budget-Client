import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const  Styled = styled.div`
transition: all  0.1s ease;
border-radius: var(--borrad-small);
overflow: hidden;
.button{
  background-color: var(--color-green);
  border-radius: var(--borrad-small);
  border: 0;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  transition: all  0.1s ease;
  color: var(--color-background-dark);
}
&:hover{
  box-shadow: 0 0 4px var(--color-gray-light);
  .button{
    color: var(--color-red);
  }
}
`
export const ButtonWithLink:FC<{title:string, link:string}> = (props)=>{
  const {title, link} = props
  return(
    <Styled>
      <Link to={link} className="link">
        <button className="button">{title}</button>
      </Link>
    </Styled>
  )
}