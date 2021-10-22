import React from 'react';
import { AuthProvider } from './useAuth';
import { ToastProvider } from './useToast';

interface childrenType {
  children: React.ReactNode
}

export const AppProvider = ({ children }: childrenType) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);
