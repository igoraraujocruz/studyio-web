import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useLesson } from '../../hooks/useLesson';
import { api } from '../../services/api';
import { Input } from '../Input';
import { useToast } from '../../hooks/useToast';
import { Container, Content } from './styles';
import { useModule } from '../../hooks/useModule';
import { Button } from '../Button';
import { Module } from '../../interfaces/Module';

interface FormProps {
  name: string;
  description: string;
  date: string;
  moduleName: string;
}

interface LessonProps {
  id: string;
  name: string;
  description: string;
  moduleId: string;
  date: string;
}

export const LessonComponent = () => {
  const {
    register, handleSubmit, getValues, reset,
  } = useForm();
  const [lessonId, setLessonId] = useState('');
  const [nameModule, setNameModule] = useState('');
  const [editValueLesson, setEditValueLesson] = useState<LessonProps>({} as LessonProps);
  const { addToast } = useToast();
  const {
    createLesson, editLesson, removeLesson, lessons,
  } = useLesson();
  const { modules } = useModule();

  const onSubmit = (data: FormProps) => {
    console.log(data);
    createLesson({
      name: data.name,
      description: data.description,
      moduleName: data.moduleName,
      date: data.date,
    });
    reset();
  };

  const onSubmitEdit = (data: FormProps) => {
    const multipleValues = getValues(['moduleName', 'name', 'description', 'date']);
    editLesson({
      id: editValueLesson.id,
      moduleName: multipleValues[0] === '' ? nameModule : data.moduleName,
      name: multipleValues[1] === '' ? editValueLesson.name : data.name,
      description: multipleValues[2] === '' ? editValueLesson.description : data.description,
      date: multipleValues[3] === '' ? editValueLesson.date : data.date,
    });

    reset();
    setLessonId('');
  };

  useEffect(() => {
    api.get(`lessons/${lessonId}`)
      .then((response) => setEditValueLesson(response.data));
  }, [lessonId]);

  useEffect(() => {
    api.get(`modules/${editValueLesson.moduleId}`)
      .then((response) => setNameModule(response.data.name));
  }, [lessonId, editValueLesson]);

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
        <form onSubmit={lessonId ? handleSubmit(onSubmitEdit) : handleSubmit(onSubmit)}>
          <select {...register('moduleName')}>
            {lessonId ? (
              modules.map((module) => (
                <option key={module.id} value="teste">
                  {module.name}
                </option>
              ))
            )
              : modules.map((module) => (
                <option key={module.id} value={module.name}>
                  {module.name}
                </option>
              ))}
          </select>
          <input defaultValue={editValueLesson.name} type="text" {...register('name')} placeholder="nome" />
          <input defaultValue={editValueLesson.description} type="text" {...register('description')} placeholder="descrição" />
          <input defaultValue={editValueLesson.date} type="text" {...register('date')} placeholder="data" />
          <Button type="submit">Enviar</Button>
        </form>
        <div className="existModules">
          <h3>Aulas existentes:</h3>
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
