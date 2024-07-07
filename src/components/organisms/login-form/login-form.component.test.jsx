import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { loginRequest } from '@/logic/authentication/ducks/auth-slice';
import LoginForm from './login-form.component';

const mockStore = configureStore([]);
let store;

beforeEach(() => {
  store = mockStore({
    auth: { loading: false, error: null, token: null },
  });
  store.dispatch = vi.fn();
});

describe('LoginForm', () => {
  it('renders LoginForm component', () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );

    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('handles login form submission', () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password' },
    });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(store.dispatch).toHaveBeenCalledWith(
      loginRequest({ email: 'user@example.com', password: 'password' }),
    );
  });

  it('shows error message on login failure', () => {
    store = mockStore({
      auth: { loading: false, error: 'Invalid credentials', token: null },
    });

    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );

    expect(
      screen.getByText(/invalid credentials, please try again./i),
    ).toBeInTheDocument();
  });

  it('shows success message on login success', () => {
    store = mockStore({
      auth: { loading: false, error: null, token: 'fake-jwt-token' },
    });

    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );

    expect(screen.getByText(/login successful!/i)).toBeInTheDocument();
  });
});
