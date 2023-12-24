import { FC } from 'react';
import styled from 'styled-components';
import { TransactionsForm } from './fom/form';
import { TransactionsStatistics } from './statistics/statistics';
import { TransactionsList } from './list/list';

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
  return (
    <Styled>
      <TransactionsForm/>
      <TransactionsStatistics/>
      <TransactionsList/>
    </Styled>
  )
}

