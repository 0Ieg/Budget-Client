import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonForForm } from '../../../common/button-for-form';
import { useDispatch, useSelector } from 'react-redux';
import { readCategoriesAsyncAC } from '../../../../BLL/store/categories/categories.saga';
import { readTransactionsAsyncAC, readTransactionsPagAsyncAC } from '../../../../BLL/store/transactions/transactions.saga';
import { clearTransactionsAC } from '../../../../BLL/store/transactions/transactions.slice';
import { clearCategoriesAC } from '../../../../BLL/store/categories/categories.slice';
import { StateType } from '../../../../BLL/store/store';
import ReactPaginate from 'react-paginate';


const Styled = styled.div`
display: flex;
justify-content: end;
.paginate{
  display: flex;
  gap: var(--margin-middle);
  grid-area: navigation;
  justify-self: end;
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
  .prev_next{
    width: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--borrad-small);
    cursor: pointer;
    background-color: var(--color-green);
    font-size: 14px;
    color: var(--color-background-dark);
    transition: all 0.1s ease ;
    border: 0;
    &:hover{
      box-shadow: 0 0 4px var(--color-gray-light);
      color: var(--color-red);
    }
  }
  .disabled{
    opacity: 0.7;
  }
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
    setPage(selectedItem.selected+1)
  }
  return (
    <Styled>
      <ReactPaginate
        className='paginate'
        previousClassName='prev_next'
        nextClassName='prev_next'
        disabledClassName='disabled'
        pageClassName=''
        pageLinkClassName='page'
        disabledLinkClassName=''
        activeClassName=''
        activeLinkClassName='active'
        pageCount={Math.ceil(count / take)}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        onPageChange={handlePage}
      />
    </Styled>
  )
}

