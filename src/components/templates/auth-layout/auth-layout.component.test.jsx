import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from '@/components/pages/not-found-page/not-found-page.component';
import AuthLayout from './auth-layout.component';

describe('AuthLayout', () => {
  const renderWithRouter = initialEntries => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>,
    );
  };

  test('renders AuthLayout component correctly for login route', () => {
    renderWithRouter(['/login']);
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/login page/i)).toBeInTheDocument();
  });

  test('renders NotFoundPage for invalid routes', () => {
    renderWithRouter(['/invalid-route']);
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });
});
