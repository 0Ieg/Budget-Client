import { FC } from 'react';
import styled from 'styled-components';
import { myAxios } from '../../../API/axios';
import { useSelector } from 'react-redux';
import { StateType } from '../../../BLL/store/store';

const Styled = styled.div`
  
`
export const Home:FC = ()=>{
  const auth = useSelector((state:StateType)=>state.auth)
  const handler = ()=>{
    console.log(auth)
    console.log(localStorage.getItem('access_token'))
    myAxios.get('categories')
    .then(res=>console.log(res.data))
    .catch(error=>{console.log(error.request)})
  }
  return (
    <Styled>
      <button onClick={handler}>Send</button>
    </Styled>
  )
}

