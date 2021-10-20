import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>
}

export const Button = ({ icon: Icon, children, ...rest }: ButtonProps) => (
  <Container type="button" {...rest}>
    {Icon && <Icon size={20} />}
    {children}
  </Container>
);
