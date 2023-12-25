import { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { StateType } from '../../../../BLL/store/store';
import { TransactionType } from '../../../../API/dto/transaction.dto';
import { Transaction } from './transaction';
import { ListNavigation } from './navigation';

const Styled = styled.article`
grid-area: List;
display: grid;
grid-template-rows: repeat(2, max-content);
grid-template-areas: "navigation" "list";
grid-gap: var(--margin-middle);
.list{
  grid-area: list;
  display: flex;
  flex-direction: column;
  gap: var(--margin-small);
  .headers{
    padding: var(--margin-small);
    background-color: var(--color-background-light);
    color: var(--color-gray-light);
    border-radius: var(--borrad-small);
    display: grid;
    grid-template-columns: 50px 2fr 1fr 2fr 1fr 50px;
    div{
      font-size: 16px;
    }
  }
}
`
export const TransactionsList:FC = ()=>{
  const listAndCount = useSelector((state:StateType)=>state.transactions)
  const Transactions = listAndCount.transactions.map((transaction:TransactionType, index)=><Transaction data={transaction} index={index} key={transaction.id}/>)
  return (
    <Styled>
      <ListNavigation/>
      <div className="list">
        <div className="headers">
          <div className="number">№</div>
          <div className='title'>Title</div>
          <div className='amount'>Amount</div>
          <div className="category">Category</div>
          <div className="date">Date</div>
          <div className="delete">Action</div>
        </div>
        {Transactions}
      </div>
    </Styled>
  )
}
