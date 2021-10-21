import { Container } from './styles';

interface TooltipsProps {
  title: string;
  children: React.ReactNode
  className?: string;
}

export const Tooltip = ({ title, children, className = '' }: TooltipsProps) => (
  <Container>
    {children}
    <span>{title}</span>
  </Container>
);
