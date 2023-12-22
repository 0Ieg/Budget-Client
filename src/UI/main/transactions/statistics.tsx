import { FC } from 'react';
import styled from 'styled-components';

const Styled = styled.article`
grid-area: Statistics;
.totals{
  display: flex;
  gap: var(--margin-middle);
  .total_income, .total_expense{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: var(--margin-small);
    align-items: center;
    .title{
      text-transform: uppercase;
      font: 700 18px Inter;
    }
    .value{
      width: 100%;
      display: flex;
      justify-content: center;
      padding: var(--margin-small);
      font: 700 18px Inter;
      border-radius: var(--borrad-small);
    }
    &.total_income .value{
      background-color: var(--color-green);
      color: var(--color-background-dark);
    }
    &.total_expense .value{
      background-color: var(--color-red);
      color: var(--color-gray-light);
    }
  }
}
`
export const TransactionsStatistics:FC = ()=>{
  return (
    <Styled>
      <div className="totals">
        <div className="total_income">
          <div className="title">total income:</div>
          <div className="value">{'$ '+ 999}</div>
        </div>
        <div className="total_expense">
          <div className="title">total expense:</div>
          <div className="value">{'$ '+ 125}</div>
        </div>
      </div>
    </Styled>
  )
}

