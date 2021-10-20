import styled from 'styled-components';

export const Container = styled.button`
    background-color: #232129;
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
`;
