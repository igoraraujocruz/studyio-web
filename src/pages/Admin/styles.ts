import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
