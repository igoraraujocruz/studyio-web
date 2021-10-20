import { FiLock, FiLogIn } from 'react-icons/fi';
import { ImEnter } from 'react-icons/im';
import { Container } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const Logon = () => (
  <Container>
    <form>
      <h1>Acesso</h1>
      <Input name="email" icon={FiLogIn} placeholder="Email" type="text" />
      <Input name="password" placeholder="Senha" icon={FiLock} type="password" />
      <Button icon={ImEnter}>Acessar</Button>
      <a href="forgot">Esqueci minha senha</a>
    </form>
    <a href="login">
      <FiLogIn />
      Criar Conta
    </a>

  </Container>
);
