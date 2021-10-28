import { IoBook } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import {
  Container, ModulesStyle, Content, Lessons, ModuleStyle, ModuleDescription,
} from './styles';
import { useModule } from '../../hooks/useModule';
import { api } from '../../services/api';
import { Module } from '../../interfaces/Module';

export const Modules = () => {
  const { modules } = useModule();
  const [moduleId, setModuleId] = useState('');
  const [moduleDescription, setModuleDescription] = useState<Module>({} as Module);

  useEffect(() => {
    api.get(`modules/${moduleId}`)
      .then((response) => setModuleDescription(response.data));
  }, [moduleId]);

  return (
    <Container>
      <h1>Módulos</h1>
      <p>Selecione o módulo para ver as aulas disponíveis:</p>
      <Content>
        <ModulesStyle>
          {modules ? modules.sort((a, b) => ((a.name < b.name) ? -1 : 1)).map((module) => (
            <ModuleStyle key={module.id} onClick={() => setModuleId(module.id)}>
              <Lessons>
                <p>{module.lessons.length}</p>
                <p>aulas</p>
              </Lessons>

              <h1>{module.name}</h1>
              <IoBook size={30} />
            </ModuleStyle>
          ))
            : <p>Carregando...</p>}

        </ModulesStyle>
      </Content>
      {moduleDescription
          && (
            <ModuleDescription>
              <h1>
                {moduleDescription.name}
              </h1>
              <p>{moduleDescription.description}</p>
              {moduleDescription.lessons && moduleDescription.lessons
                .sort((a, b) => ((a.name < b.name) ? -1 : 1))
                .map((lesson) => (
                  <div className="description">
                    <span>{lesson.name}</span>
                    <p>{lesson.description}</p>
                  </div>
                ))}
            </ModuleDescription>
          )}
    </Container>
  );
};
