import React from 'react';
import { AuthProvider } from './useAuth';
import { ToastProvider } from './useToast';
import { ModuleProvider } from './useModule';

interface childrenType {
  children: React.ReactNode
}

export const AppProvider = ({ children }: childrenType) => (
  <AuthProvider>
    <ModuleProvider>
      <ToastProvider>{children}</ToastProvider>
    </ModuleProvider>
  </AuthProvider>
);
