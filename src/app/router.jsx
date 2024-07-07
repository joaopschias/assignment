import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@/components/pages/home-page/home-page.component';
import LoginPage from '@/components/pages/login-page/login-page.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
