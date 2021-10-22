import styled, { keyframes } from 'styled-components';

const apperFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${apperFromLeft} 1s;


  form {
    color: #fff;
    display: flex;
    flex-direction: column;
    place-content: center;
    width: 100%;
    align-items: center;

  }

  a {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

`;
