import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  input {
    display: flex;
    align-items: center;
    margin-top: 0.3rem;
    padding: 1.5rem;
    border: 0;
    -webkit-box-shadow: 0 0 0 35px ${shade(0.9, '#6610f2')} inset;
    -webkit-text-fill-color: var(--sweet-white);
  }

  select {
    position: relative;
    padding: 1.5rem;
    border: 0;
    background-color: var(--background);
  }

  textarea {
    display: flex;
    margin-top: 0.5rem;
    width: 17.7rem;
    background: ${shade(0.9, '#6610f2')};
    border: 0;
    height: 20vh;
  }

  .datePicker {
    cursor: pointer;
  }
`;

export const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
