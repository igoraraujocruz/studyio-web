import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;

  .modules {
    display: flex;
    margin-left: 5rem;
    list-style-type: none;

    button {
      background: none;
      border: none;
    }
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
  }
`;
