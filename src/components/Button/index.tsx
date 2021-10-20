import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...rest }: ButtonProps) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);
