import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

`;

export const Content = styled.div`
  display: flex;
  padding: 2rem;
  border: 1px solid #fff;
   .modules {
    display: flex;
    list-style-type: none;
  }

  .existModules{
    text-align: center;
    align-items: center;
    margin-left: 5rem;
  }

  .editStyle {
    display: flex;

    svg {
      margin-left: 1rem;
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
