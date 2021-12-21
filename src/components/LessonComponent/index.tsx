import { useForm, Controller } from 'react-hook-form';
import { BsCalendarDate } from 'react-icons/bs';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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

const schema = yup.object({
  name: yup.string().required('o campo nome é obrigatório'),
  date: yup.date().required('o campo data é obrigatório'),
  description: yup.string(),
}).required();

export function LessonComponent() {
  const { createLesson } = useLesson();
  const { modules } = useModule();
  const {
    register, handleSubmit, watch, formState: { errors }, reset,
    control,
  } = useForm<InputProps>({
    resolver: yupResolver(schema),
  });
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
        <input {...register('name')} />
        <p>{errors.name?.message}</p>
        <textarea {...register('description')} placeholder="[Opcional] Escreva uma descrição para a lição" />
        <p>{errors.description?.message}</p>

        <Controller
          name="date"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Date>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                onChange={onChange}
                placeholderText="Insira a data da aula"
                className="datePicker"
              />
              <BsCalendarDate size={30} />
            </Date>
          )}
        />
        <p>{errors.date?.message}</p>
        <Button type="submit" className="btnSubmit">Registrar Lição</Button>
      </form>
    </Container>
  );
}
