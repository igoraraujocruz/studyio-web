import {
  createContext, ReactNode, useContext, useEffect, useState,
} from 'react';
import { api } from '../services/api';
import { Module } from '../interfaces/Module';

interface ModulesProviderProps {
    children: ReactNode;
}

type ModuleInput = Pick<Module, 'name' | 'description'>;
type ModuleEdit = Omit<Module, 'lessons'>;

interface ModulesContextData {
    modules: Module[];
    createModule: (module: ModuleInput) => Promise<void>;
    removeModule: (id: string) => void;
    editModule: (module: ModuleEdit) => Promise<void>;
}

const ModulesContext = createContext<ModulesContextData>({} as ModulesContextData);

export function ModuleProvider({ children }: ModulesProviderProps) {
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(() => {
    api.get('modules')
      .then((response) => setModules(response.data));
  }, []);

  const createModule = async (moduleInput: ModuleInput) => {
    const response = await api.post('/modules', {
      ...moduleInput,
    });

    const module = response.data;

    setModules([
      ...modules,
      module,
    ]);
  };

  const removeModule = async (id: string) => {
    const moduleIndex = modules.findIndex((module) => module.id === id);

    if (moduleIndex >= 0) {
      modules.splice(moduleIndex, 1);
      await api.delete(`/modules/${id}`);

      setModules([...modules]);
    }
  };

  const editModule = async (module: ModuleEdit) => {
    const moduleUpdated = await api.put(
      `/modules/${module.id}`,
      { ...module },
    );

    const modulesUpdated = modules.map((mod) => (mod.id !== moduleUpdated.data.id
      ? mod : moduleUpdated.data));

    setModules(modulesUpdated);
  };

  return (
    <ModulesContext.Provider value={{
      modules,
      createModule,
      removeModule,
      editModule,
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
