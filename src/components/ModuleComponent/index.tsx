import { useForm } from 'react-hook-form';
import { useModule } from '../../hooks/useModule';
import { Button } from '../Button';
import { Container } from './styles';

interface InputProps {
  name: string;
  description: string;
}

export function ModuleComponent() {
  const { createModule } = useModule();
  const {
    register, handleSubmit, watch, formState: { errors }, reset,
  } = useForm();
  const onSubmit = (data: InputProps) => {
    createModule({
      name: data.name,
      description: data.description,
    });
    reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: true })} placeholder="Nome do Módulo" />
        <textarea {...register('description', {})} placeholder="[Opcional] Escreva uma descrição para o módulo" />

        {errors.name && <span>O campo nome é obrigatório</span>}

        <Button type="submit">Registrar Módulo</Button>
      </form>
    </Container>
  );
}
