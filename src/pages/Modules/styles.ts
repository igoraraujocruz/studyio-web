import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;

export const ModuloContent = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;

  @media(max-width: 600px) {
    display: block;
  }
`;

export const ModuloStyle = styled.div`
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
