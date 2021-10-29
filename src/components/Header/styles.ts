import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0 2rem 0;
  margin-bottom: 2rem;
  background-color: rgba(0, 0, 0, 0.3);

  button {
    background: none;
    border: none;
    transition: 0.5s color;

    :hover{
      color: #a9a9a9
    }
  }
`;
