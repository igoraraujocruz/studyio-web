import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;

  @media(max-width: 600px) {
    display: block;
  }
`;
