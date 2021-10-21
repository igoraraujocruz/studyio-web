import { shade } from 'polished';
import styled, { css } from 'styled-components';
import { Tooltip } from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
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

  ${(props) => props.isFocused && css`
    border-color: #ff9000;
    color: #ff9000;
  `}

  ${(props) => props.isFilled && css`
    color: #ff9000;
  `}

  ${(props) => props.isErrored && css`
    border-color: #c53030;
  `}

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

export const Error = styled(Tooltip)`
  height: 20px;

  svg {
    margin-left: 5rem;
  }

  span {
    background: #c53030;
    color: #FFF;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
