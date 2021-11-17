import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { useLesson, LessonProvider } from '../../hooks/useLesson';
import { api } from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Lesson hook', () => {
  it('should be able to get all lessons', async () => {
    apiMock.onGet('lessons').reply(200);

    const setLessonsSpy = jest.spyOn(Storage.prototype, 'setLessons');

    const { result, waitForNextUpdate } = renderHook(() => useLesson(), {
      wrapper: LessonProvider,
    });

    console.log(result.current.lessons);
  });
});
