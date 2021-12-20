import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background);
    font-size: 1rem;
    height: 4rem;
    border-radius: 1rem;
    border: 0;
    padding: 0.5rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 2rem;

    transition: background-color 0.2s;

    &:hover {
      background-color: transparent;
    }

    svg {
      margin-right: 0.5rem;
    }
`;
