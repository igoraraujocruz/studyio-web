import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  border: 0.2rem solid #232129;
  padding: 1rem;


  &::placeholder {
    color: #666360;
    background: transparent;
  }

  input {
    border: 0;
    box-shadow: white;
    -webkit-box-shadow: 0 0 0 30px ${shade(0.8, '#6610f2')} inset;
    -webkit-text-fill-color: var(--sweet-white);
  }

  svg {
    margin-right: 0.5rem;
  }

`;
