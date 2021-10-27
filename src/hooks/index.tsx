import React from 'react';
import { AuthProvider } from './useAuth';
import { ToastProvider } from './useToast';
import { ModuleProvider } from './useModule';
import { LessonProvider } from './useLesson';

interface childrenType {
  children: React.ReactNode
}

export const AppProvider = ({ children }: childrenType) => (
  <AuthProvider>
    <ModuleProvider>
      <LessonProvider>
        <ToastProvider>{children}</ToastProvider>
      </LessonProvider>
    </ModuleProvider>
  </AuthProvider>
);
