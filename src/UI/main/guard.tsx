import { FC } from 'react';
import styled from 'styled-components';
import { ButtonWithLink } from '../common/button-with-link';

const Styled = styled.div`
background-color: var(--color-background-light);
color: var(--color-gray-light);
display: flex;
justify-content: center;
align-items: center;
.window{
  border: 2px solid var(--color-gray-light);
  box-shadow: 0 0 4px var(--color-gray-light);
  max-width: 500px;
  width: 100%;
  height:300px;
  margin: var(--margin-big);
  padding: var(--margin-big);
  border-radius: var(--borrad-small);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  .title{
    font: 700 20px inter;
  }
}
`
export const Guard:FC = ()=>{
  return (
    <Styled>
      <div className="window">
        <h2 className="title">To use the site, you need to log in</h2>
        <ButtonWithLink title='Press to Join' link='signup'/>
      </div>
    </Styled>
  )
}

