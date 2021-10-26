import { Form } from '@unform/web';
import * as Yup from 'yup';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { FormHandles } from '@unform/core';
import { AiOutlineDelete } from 'react-icons/ai';
import { Container, Content } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { getValidationErrors } from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/useToast';
import { useModule } from '../../hooks/useModule';
import { api } from '../../services/api';

interface ModuleProps {
  name: string;
  description: string;
}

export const Admin = () => {
  const formRef = useRef<FormHandles>(null);
  const {
    createModule, editModule, removeModule, modules,
  } = useModule();
  const { addToast } = useToast();
  const [moduleId, setModuleId] = useState('');
  const [moduleEdit, setModuleEdit] = useState<ModuleProps>({} as ModuleProps);

  useEffect(() => {
    api.get(`modules/${moduleId}`)
      .then((response) => setModuleEdit(response.data));
  }, [moduleId]);

  const handleSubmit = useCallback(async (data: ModuleProps, { reset }) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('O Nome do módulo obrigatório'),
        description: Yup.string(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (moduleId === '') {
        createModule({
          name: data.name,
          description: data.description,
        });
      }

      editModule({
        id: moduleId,
        name: data.name,
        description: data.description,
      });

      addToast({
        type: 'success',
        title: 'Modulo criado com sucesso',
      });

      reset();
      setModuleId('');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
      addToast({
        type: 'error',
        title: 'Erro na criação de módulo',
        description: 'Ocorreu um erro ao tentar criar um módulo.',
      });
    }
  }, [addToast, editModule, moduleId, createModule]);

  const handleDelete = useCallback(async (id: string) => {
    try {
      removeModule(id);

      addToast({
        type: 'success',
        title: 'Modulo excluído com sucesso',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Não foi possível excluir o módulo',
        description: 'tente novamente',
      });
    }
  }, [removeModule, addToast]);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={moduleEdit}>
          <h3>Criar Módulos</h3>
          <Input name="name" placeholder="Nome do módulo" type="text" />
          <Input name="description" placeholder="Descrição do módulo (Opcional)" type="text" />
          {moduleId ? <Button type="submit">Editar Modulo</Button> : <Button type="submit">Criar Módulo</Button>}
        </Form>
        <div>
          <h3>Modulos existentes:</h3>
          {modules.map((module) => (
            <div key={module.id} className="modules">
              <button type="button" onClick={() => setModuleId(module.id)}>{module.name}</button>
              <AiOutlineDelete size={20} onClick={() => handleDelete(module.id)} />
            </div>
          ))}
        </div>
      </Content>
    </Container>
  );
};
