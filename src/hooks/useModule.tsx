import {
  createContext, ReactNode, useContext, useEffect, useState,
} from 'react';
import { api } from '../services/api';
import { Module } from '../interfaces/Module';

interface ModulesProviderProps {
    children: ReactNode;
}

interface ModulesContextData {
    modules: Module[];
}

const ModulesContext = createContext<ModulesContextData>({} as ModulesContextData);

export function ModuleProvider({ children }: ModulesProviderProps) {
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(() => {
    api.get('modules')
      .then((response) => setModules(response.data));
  }, []);

  return (
    <ModulesContext.Provider value={{
      modules,
    }}
    >
      {children}
    </ModulesContext.Provider>
  );
}

export function useModule() {
  const context = useContext(ModulesContext);

  return context;
}
