import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  border: 0.2rem solid #232129;
  padding: 1rem;


  &::placeholder {
    color: #666360;
    background: transparent;
  }

  input {
    background: transparent;
    border: 0;
    -webkit-box-shadow: 0 0 0 30px ${shade(0.8, '#6610f2')} inset !important;
    -webkit-text-fill-color: var(--sweet-white) !important;
  }

`;
