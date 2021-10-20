import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input = ({ ...props }: InputProps) => (
  <Container>
    <input {...props} />
  </Container>
);
