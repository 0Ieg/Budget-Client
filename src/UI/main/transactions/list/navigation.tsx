import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonForForm } from '../../../common/button-for-form';
import { useDispatch, useSelector } from 'react-redux';
import { readCategoriesAsyncAC } from '../../../../BLL/store/categories/categories.saga';
import { readTransactionsPagAsyncAC } from '../../../../BLL/store/transactions/transactions.saga';
import { clearTransactionsAC } from '../../../../BLL/store/transactions/transactions.slice';
import { clearCategoriesAC } from '../../../../BLL/store/categories/categories.slice';
import { StateType } from '../../../../BLL/store/store';


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
.paginate{
  
}
`
export const ListNavigation:FC = ()=>{
  const dispatch = useDispatch()
  const count = useSelector((state:StateType)=>state.transactions.count)
  const [take, setTake] = useState(5)
  const [page, setPage] = useState(1)
  useEffect(()=>{
    dispatch(readTransactionsPagAsyncAC({take, page}))
    return ()=>{
      dispatch(clearTransactionsAC())
    }
  },[page])
  useEffect(()=>{
    dispatch(readCategoriesAsyncAC())
    return ()=>{
      dispatch(clearCategoriesAC())
    }
  },[])
  const PreviousHandler = ()=>{
    setPage(val=>--val)
    console.log("Previous")
  }
  const NextHandler = ()=>{
    setPage(val=>++val)
    console.log("Next", page)
  }
  const PageHandler = (page:number)=>{
    setPage(page)
  }
  const pages = ()=>{
    const pagesList = []
    for(let i=1; i<=Math.ceil(count/take); i++){
      pagesList.push(<div className={i===page?'page active':'page'} onClick={()=>i!==page && PageHandler(i)} key={new Date().toISOString()+i}>{i}</div>)
    }
    return pagesList
  }
  const handlePage = (selectedItem:{selected:number})=>{
    setPage(selectedItem.selected)
  }
  return (
    <Styled>
      <div className="button" onClick={PreviousHandler}>
        <ButtonForForm disabled={page<=1 && true}>Previous</ButtonForForm>
      </div>
      <div className="pages">
        {pages()}
      </div>
      <div className="button" onClick={NextHandler}>
        <ButtonForForm disabled={(take*page)>=count && true}>Next</ButtonForForm>
      </div>
    </Styled>
  )
}

