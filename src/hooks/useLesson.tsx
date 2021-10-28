import {
  createContext, ReactNode, useContext, useEffect, useState,
} from 'react';
import { api } from '../services/api';
import { Lesson } from '../interfaces/Lesson';

interface LessonsProviderProps {
    children: ReactNode;
}

type LessonInput = Omit<Lesson, 'id'>;

interface LessonsContextData {
    lessons: Lesson[];
    createLesson: (lesson: LessonInput) => Promise<void>;
    removeLesson: (id: string) => void;
    editLesson: (lesson: Lesson) => Promise<void>;
}

const LessonsContext = createContext<LessonsContextData>({} as LessonsContextData);

export function LessonProvider({ children }: LessonsProviderProps) {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    api.get('lessons')
      .then((response) => setLessons(response.data));
  }, []);

  const createLesson = async (lessonInput: LessonInput) => {
    const response = await api.post('/lessons', {
      ...lessonInput,
    });

    const lesson = response.data;

    setLessons([
      ...lessons,
      lesson,
    ]);
  };

  const removeLesson = async (id: string) => {
    const lessonIndex = lessons.findIndex((lesson) => lesson.id === id);

    if (lessonIndex >= 0) {
      lessons.splice(lessonIndex, 1);
      await api.delete(`/lessons/${id}`);

      setLessons([...lessons]);
    }
  };

  const editLesson = async (lesson: Lesson) => {
    const lessonUpdated = await api.put(
      `/lessons/${lesson.id}`,
      {
        name: lesson.name,
        moduleName: lesson.moduleName,
        date: lesson.date,
        description: lesson.description,
      },
    );

    const lessonsUpdated = lessons.map((newLesson) => (newLesson.id !== lessonUpdated.data.id
      ? newLesson : lessonUpdated.data));

    setLessons(lessonsUpdated);
  };

  return (
    <LessonsContext.Provider value={{
      lessons,
      createLesson,
      removeLesson,
      editLesson,
    }}
    >
      {children}
    </LessonsContext.Provider>
  );
}

export function useLesson() {
  const context = useContext(LessonsContext);

  return context;
}
