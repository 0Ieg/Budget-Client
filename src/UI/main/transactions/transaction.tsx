import { FC } from 'react';
import styled from 'styled-components';
import { TransactionType } from '../../../API/dto/transaction.dto';
import { DeleteCategorySVG } from '../../../BLL/icons/iconst';
import { useDispatch } from 'react-redux';
import { deleteTransactionAsyncAC } from '../../../BLL/store/transactions/transactions.saga';

const Styled = styled.div`
padding: var(--margin-small);
background-color: var(--color-background-light);
color: var(--color-gray-light);
border-radius: var(--borrad-small);
font-size: 18px;
display: grid;
grid-template-columns: 40px 1fr 1fr 1fr 1fr 40px;
.delete{
  svg{
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
}
.color_green{
  color: var(--color-green);
}
.color_red{
  color: var(--color-red);
}
`
export const Transaction:FC<{index:number, data:TransactionType}> = ({data, index})=>{
  const dispatch = useDispatch()
  const deleteHandler = ()=>{
    dispatch(deleteTransactionAsyncAC(data.id))
  }
  return (
    <Styled>
      <div className="number">{++index}</div>
      <div className={data.type==='expense'?'title color_green':'title color_red'}>{data.title}</div>
      <div className={data.type==='expense'?'amount color_green':'amount color_red'}>{data.type==='expense'?'+ '+data.amount+' $':data.amount}</div>
      <div className="category">{data.category.title}</div>
      <div className="date">{data.created}</div>
      <div className="delete" onClick={deleteHandler}>
        <DeleteCategorySVG/>
      </div>
    </Styled>
  )
}

