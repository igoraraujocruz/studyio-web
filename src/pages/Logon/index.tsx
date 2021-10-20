import { FiLock, FiLogIn } from 'react-icons/fi';
import { ImEnter } from 'react-icons/im';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Container } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { getValidationErrors } from '../../utils/getValidationErrors';

interface LogonProps {
  email: string;
  password: string;
}

export const Logon = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: LogonProps) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required('O email obrigatório'),
        password: Yup.string().min(6, 'A senha deve conter no mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Acesso</h1>
        <Input name="email" icon={FiLogIn} placeholder="Email" type="text" />
        <Input name="password" placeholder="Senha" icon={FiLock} type="password" />
        <Button icon={ImEnter} type="submit">Acessar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </Form>
      <a href="login">
        <FiLogIn />
        Criar Conta
      </a>

    </Container>
  );
};
