import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LoginPage from './login-page.component';

// Mock the MainLayout component
vi.mock('@/components/templates/main-layout/main-layout.component', () => ({
  default: ({ children }) => <div>{children}</div>,
}));

// Mock the LoginForm component
vi.mock('@/components/organisms/login-form/login-form.component', () => ({
  default: () => <div>Mocked LoginForm</div>,
}));

describe('LoginPage', () => {
  it('renders the login form', () => {
    render(<LoginPage />);
    expect(screen.getByText('Mocked LoginForm')).toBeInTheDocument();
  });

  it('renders the login page container', () => {
    render(<LoginPage />);
    const loginPageDiv = screen.getByText('Mocked LoginForm').parentElement;
    expect(loginPageDiv).toHaveClass('login-page');
  });
});
