import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import { api } from '../services/api';

interface AuthState {
  token: string;
  user: LogInCredentials;
}

interface LogInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: LogInCredentials;
  signIn(credentials: LogInCredentials): Promise<void>
  signOut(): void;
}

interface childrenType {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: childrenType) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@StudyIo:token');
    const user = localStorage.getItem('@StudyIo:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@StudyIo:token', token);
    localStorage.setItem('@StudyIo:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
    window.location.href = '/admin';
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@StudyIo:token');
    localStorage.removeItem('@StudyIo:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
