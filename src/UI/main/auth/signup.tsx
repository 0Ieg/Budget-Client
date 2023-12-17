import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonForForm } from '../../common/button-for-form';

const Styled = styled.div`  
display: flex;
justify-content: center;
align-items: center;
.form{
  max-width: 500px;
  padding: var(--margin-big);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  .title{
    font: 700 20px Inter;
  }
  .input{
    border: 2px solid var(--color-gray-light);
    border-radius: var(--borrad-small);
    background-color: var(--color-background-light);
    padding: 10px;
    font-size: 18px;
    color: var(--color-gray-light);
    transition: box-shadow 0.1s ease;
    &:focus{
      outline: none;
      box-shadow: 0 0 4px var(--color-gray-light);
    }
  }
  .link{
    transition: color 0.1s ease;
    &:hover{
      color: var(--color-pink);
    }
  }
}
`
export const Signup: FC = () => {
  return (
    <Styled>
      <form className='form'>
        <h2 className="title">Registration</h2>
        <input className='input' type="email" placeholder='Email'/>
        <input className='input' type="text" placeholder='Password'/>
        <ButtonForForm>Submit</ButtonForForm>
        <Link className='link' to={'/signin'}>Already have an account?</Link>
      </form>
    </Styled>
  )
}

