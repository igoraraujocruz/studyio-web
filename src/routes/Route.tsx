import { RouteProps as ReactDomRouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface RouteProps extends ReactDomRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export const Route = ({ isPrivate = false, component: Component, ...rest }: RouteProps) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => (isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect to={{
          pathname: isPrivate ? '/acess' : '/admin',
          state: {
            from: location,
          },
        }}
        />
      ))}
    />
  );
};
