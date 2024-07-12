import { LoginForm } from '@/components/organisms/login-form';
import NotificationTester from '@/components/NotificationTester';

import './login-page.component.scss';

const propTypes = {};

const LoginPage = () => {
  return (
    <div className="login-page">
      <LoginForm />
      <NotificationTester />
    </div>
  );
};

LoginPage.propTypes = propTypes;

export default LoginPage;
