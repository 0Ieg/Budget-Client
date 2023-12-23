import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { StateType } from '../../../BLL/store/store';
import { readCategoriesAsyncAC } from '../../../BLL/store/categories/categories.saga';
import { CategoryType } from '../../../API/dto/category.dto';
import { Category } from './category';
import { CreateSVG } from '../../../BLL/icons/iconst';
import { clearCategoriesAC } from '../../../BLL/store/categories/categories.slice';
import { ModalWindow } from './new';

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
.category__create{
  display: flex;
  align-items: center;
  gap: var(--margin-middle);
  padding: var(--margin-middle);
  border-radius: var(--borrad-small);
  background-color: var(--color-green);
  color: var(--color-background-light);
  cursor: pointer;
  border: 0;
  svg{
    width: 100%;
    height: 100%;
  }
  &:hover{
    box-shadow: 0 0 5px var(--color-gray-light);
    
  }
}
`
export const Categories:FC = ()=>{
  const categories = useSelector((state:StateType)=>state.categories)
  const isAuth = useSelector((state:StateType)=>state.auth.isAuth)
  const dispatch = useDispatch()
  const [creating, setCreating] = useState(false)
  const CategoriesList = categories.map((category:CategoryType)=><Category data={category} key={category.id}/>)
  useEffect(()=>{
    if (isAuth){
      dispatch(readCategoriesAsyncAC())
    }
    return ()=>{dispatch(clearCategoriesAC())}
  },[])
  return (
    <Styled>
      <div className='categories__title'>These are all your categories</div>
      <ul className="category__list">
        {CategoriesList}
      </ul>
      {!creating &&
      <button className="category__create" onClick={()=>setCreating(true)}>
        <span>Create new category</span>
        <CreateSVG/>
      </button>}
      {creating && <ModalWindow callback={setCreating} type='Create' id='' value=''/>}
    </Styled>
  )
}


