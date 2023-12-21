import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { StateType } from '../../../BLL/store/store';
import { readCategoriesAsyncAC } from '../../../BLL/store/categories/categories.saga';
import { CategoryType } from '../../../API/dto/category.dto';
import { Category } from './category';

const Styled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: var(--margin-middle);
margin-top: var(--margin-middle);
.categories__title{
  font-size: 20px;
}
.category__list{
  max-width: 700px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--margin-middle);
}
`
export const Categories:FC = ()=>{
  const categories = useSelector((state:StateType)=>state.categories)
  const isAuth = useSelector((state:StateType)=>state.auth.isAuth)
  const dispatch = useDispatch()
  const CategoriesList = categories.map((category:CategoryType)=><Category data={category} key={category.id}/>)
  useEffect(()=>{
    if (isAuth){
      dispatch(readCategoriesAsyncAC())
    }
  },[])
  return (
    <Styled>
      <div className='categories__title'>These are all your categories</div>
      <ul className="category__list">
        {CategoriesList}
      </ul>
    </Styled>
  )
}

