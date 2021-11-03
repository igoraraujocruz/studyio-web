import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 5px solid rgba(255,255,255, 0.5);
  border-radius: 5rem;
  background: ${shade(0.9, '#6610f2')};

  select {
    background: none;
    margin: 2rem;
    border: none;
    font-size: 2rem;
  }

  input {
    display: block;
    background: none;
    padding: 0.8rem;
    border-style: solid;
    border-bottom-width: 0.1rem;
    border-top-width: 0;
    border-right-width: 0;
    border-left-width: 0;
  }

  Button{
    width: 10rem;
  }

  .existModules {
    margin-left: 2rem;
  }

  .modules {
    list-style-type: none;
    display: flex;
    justify-content: center;
  }

  svg {
    color: var(--gray);
    margin-left: 0.5rem;
    cursor: pointer;
    transition: 0.5s;

    :hover {
      color: red;
    }
  }

  @media(max-width: 600px) {
    display: block;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
