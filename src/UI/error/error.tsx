import { FC } from 'react';
import styled from 'styled-components';
import { ButtonWithLink } from '../common/button-with-link';
import image from '../../BLL/images/error.png'
const Styled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: var(--margin-big);
.image{
  max-width: 500px;
  width: 100%;
}
`
export const Error: FC = () => {
  return (
    <Styled>
      <img className='image' src={image} />
      <ButtonWithLink link='/' title='Back' />
    </Styled>
  )
}

