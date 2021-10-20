import { FiLogIn } from 'react-icons/fi';
import { Container } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const Logon = () => (
  <Container>
    <form>
      <h1>Acesso</h1>
      <Input name="email" placeholder="Email" type="text" />
      <Input name="password" placeholder="Senha" type="password" />
      <Button>Save</Button>
      <a href="forgot">Esqueci minha senha</a>
    </form>
    <a href="login">
      <FiLogIn />
      Criar Conta
    </a>

  </Container>
);
