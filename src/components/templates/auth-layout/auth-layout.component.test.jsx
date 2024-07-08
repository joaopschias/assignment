import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import AuthLayout from './auth-layout.component';

describe('AuthLayout', () => {
  test('renders AuthLayout component correctly', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<AuthLayout />}>
            <Route index element={<div>Login Page</div>} />
          </Route>
          <Route path="/register" element={<AuthLayout />}>
            <Route index element={<div>Register Page</div>} />
          </Route>
          <Route path="/reset-password" element={<AuthLayout />}>
            <Route index element={<div>Reset Password Page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/login page/i)).toBeInTheDocument();
  });
});
