import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { Routes } from './routes';
import { Header } from './components/Header';
import { AuthProvider } from './hooks/useAuth';

export function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </AuthProvider>
    </>
  );
}
