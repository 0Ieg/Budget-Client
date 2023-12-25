import { FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { StateType } from '../../../../BLL/store/store';
import { formatToRUB } from '../../../common/helpers/currency.helper';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const Styled = styled.article`
grid-area: Statistics;
display: grid;
grid-template-rows: max-content 1fr;
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
.chart{
  display: flex;
  align-items: center;
  justify-content: center;
}
`
export const TransactionsStatistics:FC = ()=>{
  const total = useSelector((state:StateType)=>state.transactions.total)
  const [chartSize, setChartSize] = useState({with:0, height:0})
  const ref = useRef<HTMLDivElement>(null!)
  const data = [
    { name: 'Income', value: total.income },
    { name: 'Expense', value: total.expense },
  ]
  useEffect(()=>{
    setChartSize({with:ref.current.offsetWidth, height:ref.current.offsetHeight})
  },[ref.current?.offsetLeft])
  const COLORS = ['#A3BE89', '#8B5569']
  return (
    <Styled>
      <div className="totals">
        <div className="total_income">
          <div className="title">total income:</div>
          <div className="value">{formatToRUB(total.income)}</div>
        </div>
        <div className="total_expense">
          <div className="title">total expense:</div>
          <div className="value">{formatToRUB(total.expense)}</div>
        </div>
      </div>
      <div className="chart" ref={ref} onClick={()=>console.log(chartSize)}>
        <PieChart width={chartSize.with} height={chartSize.height}>
        <Pie
          data={data}
          cx={'50%'}
          cy={'50%'}
          innerRadius={'60%'}
          outerRadius={'80%'}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* <Legend/> */}
        </PieChart>
      </div>
    </Styled>
  )
}

