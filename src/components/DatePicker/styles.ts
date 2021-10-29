import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  input {
    border-radius: 0.5rem;
    border: 0.2rem solid #232129;
    background: ${shade(0.8, '#6610f2')};
    padding: 1rem;

    &::placeholder {
      color: var(--sweet-white);

    }
  }
`;
