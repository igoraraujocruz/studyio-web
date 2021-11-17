import { render } from '@testing-library/react';
import { ModuleComponent } from '../../components/ModuleComponent';
import { LessonComponent } from '../../components/LessonComponent';

describe('Admin Page', () => {
  test('should be render all components of admin page');

  render(<ModuleComponent />);
  render(<LessonComponent />);
});
