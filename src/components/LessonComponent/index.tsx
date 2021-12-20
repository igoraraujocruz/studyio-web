import { useForm, Controller } from 'react-hook-form';
import { BsCalendarDate } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import { useLesson } from '../../hooks/useLesson';
import { Container, Date } from './styles';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '../Button';
import { useModule } from '../../hooks/useModule';

interface InputProps {
  name: string;
  description: string;
  date: string;
  moduleName: string;
}

export function LessonComponent() {
  const { createLesson } = useLesson();
  const { modules } = useModule();
  const {
    register, handleSubmit, watch, formState: { errors }, reset,
    control,
  } = useForm();
  const onSubmit = (data: InputProps) => {
    createLesson({
      moduleName: data.moduleName,
      name: data.name,
      description: data.description,
      date: data.date,
    });
    reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register('moduleName')} placeholder="teste">
          <option value="" disabled selected>Selecione o Módulo</option>
          {
            modules.map((module) => (
              <option key={module.id}>
                {module.name}
              </option>
            ))
          }
        </select>
        <input {...register('name', { required: true })} placeholder="Nome da Lição" />
        <textarea {...register('description', {})} placeholder="[Opcional] Escreva uma descrição para a lição" />

        <Controller
          name="date"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Date>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                onChange={onChange}
                selected={value}
                placeholderText="Insira a data da aula"
                className="datePicker"
              />
              <BsCalendarDate size={30} />
            </Date>
          )}
        />

        {errors.name && <span>O campo nome é obrigatório</span>}

        <Button type="submit" className="btnSubmit">Registrar Lição</Button>
      </form>
    </Container>
  );
}
