import { FC } from 'react';
import styled from 'styled-components';
import { ButtonForForm } from '../../common/button-for-form';
import { useSelector } from 'react-redux';
import { StateType } from '../../../BLL/store/store';
import { TransactionType } from '../../../API/dto/transaction.dto';
import { Transaction } from './transaction';

const Styled = styled.article`
grid-area: List;
display: grid;
grid-template-rows: repeat(2, max-content);
grid-template-areas: "navigation" "list";
grid-gap: var(--margin-middle);
.navigation{
  display: flex;
  gap: var(--margin-middle);
  grid-area: navigation;
  justify-self: end;
  .button{
    min-width: 95px;
    button{
      width:100%;
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
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.5;
    }
    .active{
      opacity: 1;
    }
  }
}
.list{
  grid-area: list;
  display: flex;
  flex-direction: column;
  gap: var(--margin-small);
}
`
export const TransactionsList:FC = ()=>{
  const transactionsList = useSelector((state:StateType)=>state.transactions)
  const Transactions = transactionsList.map((transaction:TransactionType, index)=><Transaction data={transaction} index={index} key={transaction.id}/>)
  const PreviousHandler = ()=>{
    console.log(transactionsList)
  }
  return (
    <Styled>
      <div className="navigation">
        <div className="button" onClick={PreviousHandler}>
          <ButtonForForm>Previous</ButtonForForm>
        </div>
        <div className="pages">
          <div className="page active">1</div>
          <div className="page">2</div>
        </div>
        <div className="button">
          <ButtonForForm>Next</ButtonForForm>
        </div>
      </div>
      <div className="list">
        {Transactions}
      </div>
    </Styled>
  )
}
