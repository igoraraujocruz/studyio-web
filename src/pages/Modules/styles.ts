import { shade } from 'polished';

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
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  animation: ${apperFromLeft} 1s;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;

  @media(max-width: 600px) {
    display: block;
  }
`;

export const ModulesStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1.5rem;
  text-align: center;
  transition: 0.5s;
  cursor: pointer;
  font-size: 0.9rem;

  @media(max-width: 820px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media(max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ModuleStyle = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-radius: 1.5rem;
  text-align: center;
  border: 0.1rem solid #fff;
  transition: 0.5s;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: ${shade(0.9, '#6610f2')}
  };
`;

export const Lessons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p:first-child {
    margin-right: 0.5rem;
  }
`;

export const ModuleDescription = styled.div`
  max-width: 50vw;

  @media(max-width: 600px) {
    max-width: 70vw;
  }

  p{
    margin-left: 1rem;
    color: var(--gray);
  }

  .description {
    margin-top: 2rem;
    margin-left: 1rem;

     p {
       margin-left: 1rem;
       color: var(--gray);
     }
  }
`;
