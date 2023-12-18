import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Styled = styled.nav`
.list{
  display: flex;
  align-items: center;
  gap:  var(--margin-middle);
  .item{
    display: flex;
    transition: color 0.1s ease;
    a{
      font-size: 20px;
    }
    &:hover{
      color: var(--color-pink);
    }
  }
  .active{
    color: var(--color-red);
  }
}
`
export const Menu:FC = ()=>{
  return (
    <Styled>
      <ul className="list">
        <li className="item">
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className="item">
          <NavLink to={'categories'}>Categories</NavLink>
        </li>
        <li className="item">
          <NavLink to={'transactions'}>Transactions</NavLink>
        </li>
      </ul>
    </Styled>
  )
}

