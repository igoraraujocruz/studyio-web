import { Form } from '@unform/web';
import * as Yup from 'yup';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { FormHandles } from '@unform/core';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import { Container, Content } from './styles';
import { Input } from '../Input';
import { Button } from '../Button';
import { getValidationErrors } from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/useToast';
import { useLesson } from '../../hooks/useLesson';
import { useModule } from '../../hooks/useModule';
import { api } from '../../services/api';
import { Select } from '../Select';

interface LessonProps {
  id: string;
  name: string;
  description: string;
  date: string;
  moduleName: string;
}

export const LessonComponent = () => {
  const formRef = useRef<FormHandles>(null);
  const {
    createLesson, editLesson, removeLesson, lessons,
  } = useLesson();
  const { modules } = useModule();
  const { addToast } = useToast();
  const [lessonId, setLessonId] = useState('');

  useEffect(() => {
    api.get(`modules/${lessonId}`)
      .then((response) => formRef.current?.setData(response.data));
  }, [lessonId]);

  const handleCreate = () => {
    setLessonId('');
    formRef.current?.reset();
  };

  const handleSubmit = useCallback(async (data: LessonProps, { reset }) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('O Nome do módulo obrigatório'),
        description: Yup.string(),
        date: Yup.string(),
        moduleName: Yup.string(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (!lessonId) {
        createLesson({
          name: data.name,
          description: data.description,
          date: data.date,
          moduleName: data.moduleName,
        });
      } else {
        editLesson({
          id: lessonId,
          name: data.name,
          description: data.description,
          date: data.date,
          moduleName: data.moduleName,
        });
      }

      addToast({
        type: 'success',
        title: 'Aula criada com sucesso',
      });

      reset();
      setLessonId('');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
      addToast({
        type: 'error',
        title: 'Erro na edição da aula',
        description: 'Ocorreu um erro ao tentar criar um módulo.',
      });
    }
  }, [addToast, createLesson, editLesson, lessonId]);

  const handleDelete = useCallback(async (id: string) => {
    try {
      removeLesson(id);

      addToast({
        type: 'success',
        title: 'Aula excluída com sucesso',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Não foi possível excluir o módulo',
        description: 'tente novamente',
      });
    }
  }, [removeLesson, addToast]);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          {lessonId ? (
            <div className="editStyle">
              {' '}
              <h3>Editar Aula</h3>
              {' '}
              <FaExchangeAlt onClick={() => handleCreate()} size={20} />
              {' '}
            </div>
          ) : <h3>Criar Aula</h3>}
          <Select name="moduleName" modules={modules} />
          <Input name="name" placeholder="Nome do módulo" type="text" />
          <Input name="description" placeholder="Descrição do módulo (Opcional)" type="text" />
          <Input name="date" placeholder="Data" type="text" />
          {lessonId ? <Button type="submit">Editar Aula</Button> : <Button type="submit">Criar Aula</Button>}
        </Form>
        <div className="existModules">
          <h3>Modulos existentes:</h3>
          {lessons.map((lesson) => (
            <ul key={lesson.id} className="modules">
              <li>{lesson.name}</li>

              <AiOutlineEdit size={20} onClick={() => setLessonId(lesson.id)} />
              <AiOutlineDelete size={20} onClick={() => handleDelete(lesson.id)} />
            </ul>
          ))}
        </div>
      </Content>
    </Container>
  );
};
