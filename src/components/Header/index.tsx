import { Link } from 'react-router-dom';
import { Container } from './styles';

export const Header = () => (
  <>
    <Container>
      <h1>StudyIo</h1>
      <Link to="access">
        <p>SignIn</p>
      </Link>
    </Container>
  </>
);
