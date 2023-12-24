import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonForForm } from '../../../common/button-for-form';
import { useDispatch } from 'react-redux';
import { readCategoriesAsyncAC } from '../../../../BLL/store/categories/categories.saga';
import { readTransactionsPagAsyncAC } from '../../../../BLL/store/transactions/transactions.saga';
import { clearTransactionsAC } from '../../../../BLL/store/transactions/transactions.slice';
import { clearCategoriesAC } from '../../../../BLL/store/categories/categories.slice';

const Styled = styled.div`
display: flex;
gap: var(--margin-middle);
grid-area: navigation;
justify-self: end;
.button{
  min-width: 95px;
  button{
    width:100%;
    font-size: 14px;
  }
}
.pages{
  display: flex;
  gap: var(--margin-small);
  .page{
    min-width: 45px;
    border-radius: var(--borrad-small);
    padding: var(--margin-small);
    cursor: pointer;
    background-color: var(--color-blue);
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
  }
  .active{
    opacity: 1;
  }
}
`
export const ListNavigation:FC = ()=>{
  const dispatch = useDispatch()
  const [take, setTake] = useState(5)
  const [page, setPage] = useState(1)
  
  useEffect(()=>{
    dispatch(readTransactionsPagAsyncAC({take, page}))
    dispatch(readCategoriesAsyncAC())
    return ()=>{
      dispatch(clearTransactionsAC())
      dispatch(clearCategoriesAC())
    }
  },[])
  const PreviousHandler = ()=>{
    console.log("Previous")
  }
  const NextHandler = ()=>{
    console.log("Next")
  }
  return (
    <Styled>
      <div className="button" onClick={PreviousHandler}>
        <ButtonForForm disabled={true}>Previous</ButtonForForm>
      </div>
      <div className="pages">
        <div className="page active">1</div>
        <div className="page">2</div>
      </div>
      <div className="button" onClick={NextHandler}>
        <ButtonForForm disabled={false}>Next</ButtonForForm>
      </div>
    </Styled>
  )
}

