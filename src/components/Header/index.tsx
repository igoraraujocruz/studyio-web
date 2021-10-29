import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Container } from './styles';

export const Header = () => {
  const { user, signOut } = useAuth();
  const isLogged = Boolean(user?.email);
  return (
    <>
      <Container>
        <h3>StudyIo</h3>
        {!isLogged ? (
          <Link to="access">
            <p>SignIn</p>
          </Link>
        )
          : (
            <button type="button" onClick={signOut}>SignOut</button>
          )}
      </Container>
    </>
  );
};
