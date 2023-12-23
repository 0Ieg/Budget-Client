import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { TransactionsForm } from './form';
import { TransactionsStatistics } from './statistics';
import { TransactionsList } from './list';
import { useDispatch } from 'react-redux';
import { readTransactionsAsyncAC } from '../../../BLL/store/transactions/transactions.saga';
import { clearTransactionsAC } from '../../../BLL/store/transactions/transactions.slice';
import { readCategoriesAsyncAC } from '../../../BLL/store/categories/categories.saga';
import { clearCategoriesAC } from '../../../BLL/store/categories/categories.slice';

const Styled = styled.section`
padding: var(--margin-middle) 0;
display: grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: repeat(2, max-content);
grid-template-areas: "Form Statistics" "List List";
grid-gap: var(--margin-middle);;
&>*{
  background-color: var(--color-background-dark);
  border-radius: var(--borrad-small);
  padding: var(--margin-middle);
  color: var(--color-gray-light);
}
`
export const Transactions:FC = ()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(readTransactionsAsyncAC())
    dispatch(readCategoriesAsyncAC())
    return ()=>{
      dispatch(clearTransactionsAC())
      dispatch(clearCategoriesAC())
    }
  },[])
  return (
    <Styled>
      <TransactionsForm/>
      <TransactionsStatistics/>
      <TransactionsList/>
    </Styled>
  )
}

