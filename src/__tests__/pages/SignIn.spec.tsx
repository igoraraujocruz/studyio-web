import { render, fireEvent, waitFor } from '@testing-library/react';
import { SignIn } from '../../pages/SignIn';

const mockedSignIn = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('../../hooks/useAuth', () => ({
  useAuth: () => ({
    signIn: mockedSignIn,
  }),
}));

jest.mock('../../hooks/useToast', () => ({
  useToast: () => ({
    addToast: mockedAddToast,
  }),
}));

describe('SignIn Page', () => {
  it('should be able to sign in', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);
    const emailField = getByPlaceholderText('Email');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Acessar');

    fireEvent.change(emailField, { target: { value: 'jonhdoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedSignIn);
    });
  });

  it('should display an error if login fails', async () => {
    mockedSignIn.mockImplementation(() => {
      throw new Error();
    });

    const { getByPlaceholderText, getByText } = render(<SignIn />);
    const emailField = getByPlaceholderText('Email');
    const passwordField = getByPlaceholderText('Senha');
    const buttonElement = getByText('Acessar');

    fireEvent.change(emailField, { target: { value: 'not-valid-email' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'error',
        }),
      );
    });
  });
});
