import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from '@/components/templates/auth-layout/auth-layout.component';
import HomePage from '@/components/pages/home-page/home-page.component';
import LoginPage from '@/components/pages/login-page/login-page.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/register',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <div>Register Page</div>, // Placeholder para a página de registro futura
      },
    ],
  },
  {
    path: '/reset-password',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <div>Reset Password Page</div>, // Placeholder para a página de redefinição de senha futura
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
