import { FC } from 'react';
import styled from 'styled-components';
import { BitcoinSVG } from '../../BLL/icons/iconst';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from './menu';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../BLL/store/store';
import { LOGOUT } from '../../BLL/store/auth/auth.slice';
import { toast } from 'react-toastify';


const Styled = styled.header`
height: 50px;
background-color: var(--color-background-dark);
color: var(--color-gray-light);
display: flex;
justify-content: space-between;
align-items: center;
.login{
  font-size: 20px;
  transition: var(--trans);
  &:hover{
    color: var(--color-pink);
  }
}
.logout{
  height: 30px;
  padding: 0 var(--margin-middle);
  background-color: var(--color-gray-light);
  border: 0;
  border-radius: var(--borrad-small);
  cursor: pointer;
  transition: var(--trans);
  &:hover{
    box-shadow: 0 0 5px var(--color-gray-light);
    color: var(--color-red);
  }
}
svg{
  width: 30px;
  height: 30px;
  &:hover{
    color: var(--color-pink);
  }
}
.left, .right{
  max-width: 200px;
  width: 100%;
  &.left{
    display: flex;
  }
}

`
export const Header:FC = ()=>{
  const isAuth = useSelector((state:StateType)=>state.auth.isAuth)
  const dispatch = useDispatch()
  const navig = useNavigate()
  const logoutHandler = ()=>{
    dispatch(LOGOUT())
    navig('/')
    toast.success('Come back again')
  }
  return (
    <Styled className='container'>
      <Link className='left' to={''}><div><BitcoinSVG/></div></Link>
      {isAuth && <Menu/>}
      {isAuth?
        <button className='logout right' onClick={logoutHandler}>Log Out</button>:
        <Link className='login right' to={'signin'}>Log In / Sign In</Link>
      }
    </Styled>
  )
}

