import { ModuleComponent } from '../../components/ModuleComponent';
import { LessonComponent } from '../../components/LessonComponent';
import { Container } from './styles';

export const Admin = () => (
  <Container>
    <ModuleComponent />
    <LessonComponent />
  </Container>
);
