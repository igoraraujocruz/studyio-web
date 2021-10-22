import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { Routes } from './routes';
import { Header } from './components/Header';
import { AuthProvider } from './hooks/useAuth';
import { AppProvider } from './hooks';

export function App() {
  return (
    <>
      <AppProvider>
        <AuthProvider>
          <BrowserRouter>
            <Header />
            <Routes />
          </BrowserRouter>
          <GlobalStyle />
        </AuthProvider>
      </AppProvider>
    </>
  );
}
